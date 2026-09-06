// Site check: opens every page of the site in real Chromium (desktop + mobile),
// collects console errors, failed requests, broken images/links, meta tags,
// horizontal overflow, and exercises the key interactions.
// Usage: node scripts/site-check.mjs [baseUrl]   (default: https://rental-partners.vercel.app)
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const BASE = (process.argv[2] || 'https://rental-partners.vercel.app').replace(/\/$/, '');
const PAGES = ['/', '/sluzby', '/cennik', '/vysledky', '/o-nas', '/kontakt', '/ochrana-osobnych-udajov'];
const OUT = 'test-results';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const report = { base: BASE, generatedAt: new Date().toISOString(), pages: [], interactions: [], linkChecks: [] };
const seenLinks = new Map();

async function checkPage(path, viewport, label) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: viewport.width < 500 ? 2 : 1, isMobile: viewport.width < 500, hasTouch: viewport.width < 500 });
  const page = await ctx.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') consoleErrors.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => pageErrors.push(String(e)));
  page.on('response', (r) => { if (r.status() >= 400) failedRequests.push(`${r.status()} ${r.url()}`); });

  const res = await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(800);
  const status = res?.status();
  const title = await page.title();

  const meta = await page.evaluate(() => {
    const q = (s) => document.querySelector(s)?.getAttribute('content') || document.querySelector(s)?.getAttribute('href') || null;
    return {
      description: q('meta[name="description"]'),
      canonical: q('link[rel="canonical"]'),
      ogTitle: q('meta[property="og:title"]'),
      ogImage: q('meta[property="og:image"]'),
      lang: document.documentElement.lang,
      h1Count: document.querySelectorAll('h1').length,
      h1: document.querySelector('h1')?.textContent?.trim().replace(/\s+/g, ' ').slice(0, 80) || null,
    };
  });

  const brokenImages = await page.evaluate(() =>
    [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute('src'))
  );
  const missingAlt = await page.evaluate(() => [...document.images].filter((i) => !i.hasAttribute('alt')).map((i) => i.getAttribute('src')));

  const overflow = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth }));

  const links = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.href));
  for (const href of links) {
    if (!href.startsWith('http')) continue;
    if (!seenLinks.has(href)) seenLinks.set(href, { from: path });
  }

  const smallTargets = viewport.width < 500 ? await page.evaluate(() =>
    [...document.querySelectorAll('a, button')].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && (r.height < 40 || r.width < 40);
    }).map((el) => `${el.tagName.toLowerCase()} "${(el.textContent || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 30)}" ${Math.round(el.getBoundingClientRect().width)}×${Math.round(el.getBoundingClientRect().height)}`)
  ) : [];

  const file = `${OUT}/${label}${path === '/' ? '_domov' : path.replace(/\//g, '_')}.png`;
  await page.screenshot({ path: file, fullPage: true });

  report.pages.push({ path, viewport: label, status, title, meta, consoleErrors, pageErrors, failedRequests, brokenImages, missingAlt, overflow, horizontalOverflow: overflow.scrollWidth > overflow.innerWidth + 1, smallTargets, screenshot: file });
  await ctx.close();
}

// 404 page
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const res = await page.goto(BASE + '/neexistuje-xyz', { waitUntil: 'networkidle' });
  report.pages.push({ path: '/neexistuje-xyz (404 test)', viewport: 'desktop', status: res?.status(), title: await page.title(), has404Copy: (await page.textContent('body'))?.includes('nenašli') });
  await ctx.close();
}

for (const p of PAGES) {
  await checkPage(p, { width: 1440, height: 900 }, 'desktop');
  await checkPage(p, { width: 390, height: 844 }, 'mobile');
}

// ---- Interactions ----
async function interaction(name, fn) {
  try { const detail = await fn(); report.interactions.push({ name, ok: true, detail }); }
  catch (e) { report.interactions.push({ name, ok: false, detail: String(e).slice(0, 300) }); }
}

await interaction('Cenník: klik na kartu Garantovaný nájom (desktop) prepne detail a stĺpec', async () => {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(BASE + '/cennik', { waitUntil: 'networkidle' });
  await page.click('.model-card.model-b');
  await page.waitForTimeout(400);
  const a = await page.isVisible('#detail-a');
  const b = await page.isVisible('#detail-b');
  const pressed = await page.getAttribute('.model-card.model-b', 'aria-pressed');
  await page.screenshot({ path: `${OUT}/interaction_cennik_model_b.png`, fullPage: false });
  await ctx.close();
  if (!(b && !a && pressed === 'true')) throw new Error(`detail-a visible=${a}, detail-b visible=${b}, pressed=${pressed}`);
  return 'detail B viditeľný, detail A skrytý, aria-pressed=true';
});

await interaction('Cenník: prepínač na mobile ukáže len jednu kartu', async () => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(BASE + '/cennik', { waitUntil: 'networkidle' });
  const before = await page.evaluate(() => [...document.querySelectorAll('.model-card')].map((c) => getComputedStyle(c).display));
  await page.click('.seg[data-model="b"]');
  await page.waitForTimeout(400);
  const after = await page.evaluate(() => [...document.querySelectorAll('.model-card')].map((c) => getComputedStyle(c).display));
  await page.screenshot({ path: `${OUT}/interaction_cennik_mobile_b.png`, fullPage: false });
  await ctx.close();
  if (!(before[0] !== 'none' && before[1] === 'none' && after[0] === 'none' && after[1] !== 'none')) throw new Error(`before=${before} after=${after}`);
  return `pred: ${before.join('/')} → po: ${after.join('/')}`;
});

await interaction('Mobilné menu: otvorí sa a obsahuje 5 odkazov', async () => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.click('[data-menu-toggle]');
  await page.waitForTimeout(300);
  const visible = await page.isVisible('[data-menu]');
  const count = await page.locator('[data-menu] nav a').count();
  await page.screenshot({ path: `${OUT}/interaction_mobile_menu.png`, fullPage: false });
  await ctx.close();
  if (!visible || count < 5) throw new Error(`visible=${visible} links=${count}`);
  return `menu viditeľné, ${count} odkazov`;
});

await interaction('Kontakt: formulár má povinné polia a prázdne odoslanie neprejde', async () => {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(BASE + '/kontakt', { waitUntil: 'networkidle' });
  const required = await page.evaluate(() => [...document.querySelectorAll('#dopyt [required]')].map((e) => e.getAttribute('name')));
  const key = await page.getAttribute('#dopyt input[name="access_key"]', 'value');
  await page.click('#dopyt button[type=submit]');
  await page.waitForTimeout(300);
  const invalid = await page.evaluate(() => document.querySelector('#dopyt')?.checkValidity() === false);
  await ctx.close();
  return `povinné: ${required.join(', ')} · prázdne odoslanie zablokované: ${invalid} · access_key: ${key === 'DOPLNIT_WEB3FORMS_KEY' ? 'ZÁSTUPNÝ (formulár ešte neposiela)' : 'nastavený'}`;
});

await interaction('Domov: rotujúce slovo mení text', async () => {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const t1 = await page.evaluate(() => getComputedStyle(document.querySelector('.rotor-col')).transform);
  await page.waitForTimeout(3500);
  const t2 = await page.evaluate(() => getComputedStyle(document.querySelector('.rotor-col')).transform);
  await ctx.close();
  if (t1 === t2) throw new Error('transform sa nezmenil');
  return 'animácia beží';
});

// ---- Link check ----
const ctx = await browser.newContext();
for (const [href, info] of seenLinks) {
  try {
    const r = await ctx.request.fetch(href, { method: 'GET', maxRedirects: 5, timeout: 20000 });
    report.linkChecks.push({ href, from: info.from, status: r.status(), ok: r.ok() });
  } catch (e) {
    report.linkChecks.push({ href, from: info.from, status: null, ok: false, error: String(e).slice(0, 120) });
  }
}
await ctx.close();

// ---- Domain check ----
try {
  const r = await fetch('https://rentalpartners.sk', { redirect: 'manual' });
  report.domain = { url: 'https://rentalpartners.sk', status: r.status, reachable: true };
} catch (e) { report.domain = { url: 'https://rentalpartners.sk', reachable: false, error: String(e.cause?.code || e.message).slice(0, 80) }; }

await browser.close();

// ---- Write report ----
writeFileSync(`${OUT}/report.json`, JSON.stringify(report, null, 2));
const lines = [];
lines.push(`# Site check — ${BASE}`, `Generated: ${report.generatedAt}`, '');
lines.push(`## Domain`, `rentalpartners.sk: ${report.domain.reachable ? 'status ' + report.domain.status : 'NOT reachable (' + report.domain.error + ')'}`, '');
lines.push('## Pages');
for (const p of report.pages) {
  const issues = [];
  if (p.status !== 200 && !p.path.includes('404')) issues.push(`status ${p.status}`);
  if (p.consoleErrors?.length) issues.push(`${p.consoleErrors.length} console msgs`);
  if (p.pageErrors?.length) issues.push(`${p.pageErrors.length} page errors`);
  if (p.failedRequests?.length) issues.push(`${p.failedRequests.length} failed requests`);
  if (p.brokenImages?.length) issues.push(`${p.brokenImages.length} broken images`);
  if (p.missingAlt?.length) issues.push(`${p.missingAlt.length} img without alt`);
  if (p.horizontalOverflow) issues.push(`HORIZONTAL OVERFLOW ${p.overflow.scrollWidth}>${p.overflow.innerWidth}`);
  if (p.smallTargets?.length) issues.push(`${p.smallTargets.length} tap targets <40px`);
  if (p.meta && p.meta.h1Count !== 1) issues.push(`h1 count ${p.meta.h1Count}`);
  if (p.meta && !p.meta.description) issues.push('no meta description');
  if (p.meta && !p.meta.ogImage) issues.push('no og:image');
  lines.push(`- **${p.path}** [${p.viewport}] status ${p.status} — ${issues.length ? issues.join('; ') : 'OK'}`);
  for (const c of p.consoleErrors || []) lines.push(`    - console: ${c.slice(0, 160)}`);
  for (const f of p.failedRequests || []) lines.push(`    - failed: ${f}`);
  for (const b of p.brokenImages || []) lines.push(`    - broken img: ${b}`);
  for (const s of p.smallTargets || []) lines.push(`    - small target: ${s}`);
}
lines.push('', '## Interactions');
for (const i of report.interactions) lines.push(`- ${i.ok ? '✅' : '❌'} ${i.name} — ${i.detail}`);
lines.push('', '## Links');
for (const l of report.linkChecks) lines.push(`- ${l.ok ? '✅' : '❌'} ${l.status ?? 'ERR'} ${l.href} (from ${l.from})${l.error ? ' — ' + l.error : ''}`);
writeFileSync(`${OUT}/report.md`, lines.join('\n'));
console.log(lines.join('\n'));
