import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Dátum poslednej zmeny článkov z frontmatteru (updated, inak date). Ostatné stránky lastmod nemajú:
// rovnaký dátum zostavenia pri všetkých stránkach by Google naučil lastmod ignorovať.
const blogDir = new URL('./src/content/blog/', import.meta.url);
const articleDates = Object.fromEntries(
  readdirSync(blogDir).filter((f) => f.endsWith('.md')).map((f) => {
    const fm = readFileSync(new URL(f, blogDir), 'utf8').split('---')[1] ?? '';
    const pick = (key) => fm.match(new RegExp(`^${key}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, 'm'))?.[1];
    return [f.replace(/\.md$/, ''), pick('updated') ?? pick('date')];
  }),
);

export default defineConfig({
  // Doména je pripojená ako www (apex presmeruje 308 → www), preto kanonické adresy používajú www
  site: 'https://www.rentalpartners.sk',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // 404 nepatrí do sitemapy
      filter: (page) => !page.endsWith('/404') && !page.includes('/navrh/'),
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)$/)?.[1];
        if (slug && articleDates[slug]) item.lastmod = new Date(articleDates[slug]).toISOString();
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
