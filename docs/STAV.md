# Rental Partners — stav projektu a ďalšie kroky

*Aktualizované: 6. 9. 2026 (3. session)*

## Kde čo je

- **Dizajnové plátno (všetkých 6 stránok, klikateľný cenník):** https://claude.ai/code/artifact/d7635cc8-045d-4fe3-9c1a-cd38c056adbd
  - stránka „Web · smer C" = aktuálny návrh (6. 9. zapracované schválené opravy po kritike: karty modelov s grafmi v Cenníku, Tomáš + telefón pred formulárom a nové poradie polí v Kontakte, hlavička „Zavolať Tomášovi" a Tomáš pod tlačidlom na Domove; vedľa Kontaktu mobilná verzia a stavy formulára), stránka „Záloha · smer A" = odložený prémiový smer
- **Živý web:** https://www.rentalpartners.sk (Vercel, auto-deploy z GitHubu; apex rentalpartners.sk presmeruje na www)
- **Test webu:** `cd web && node scripts/site-check.mjs https://www.rentalpartners.sk` → `web/test-results/report.md` (Playwright, desktop + mobil)
- **Dizajnová kritika (impeccable):** `web/.impeccable/critique/2026-09-06T11-16-02Z__src-pages.md` — 18/32, prioritné problémy P0–P3
- **Zdrojové súbory návrhov:** `design/*.dc.html` + `design/canvas.json`
- **Brief (firma, cieľovka, rozhodnutia):** `docs/brief.md`
- **Dizajnový systém (farby, písmo, rozostupy, komponenty, pravidlá hierarchie):** `docs/DESIGN.md`
- **Podklady od klienta (fotky, logo):** `podklady/`

## Čo je hotové

1. Brief a cieľová skupina (majitelia bytov v Bratislave: prázdny byt / dlhodobý prenajímateľ / unavený Airbnb host)
2. Výber vizuálneho smeru — **C · Partnerský** (krémová, terakota, šalviová, Outfit + Nunito Sans, oblé tvary); A · Prémiový v zálohe, B vyradený
3. Návrhy všetkých 6 stránok: Domov, Služby, Cenník, Výsledky, O nás, Kontakt
4. Dva modely spolupráce zapracované všade:
   - **A · Správa bytu** — 10 % z obratu
   - **B · Garantovaný nájom** — firma si byt prenajme, platí pevný mesačný nájom, prenajíma ďalej na vlastné riziko
5. Domov: rotujúce slovo v nadpise, balíček 3 kariet s fotkami (zadná sa vyťahuje dopredu), pás recenzií (posúva sa, po nabehnutí myšou stojí), sekcia dvoch modelov, služby (vrátane fotenia), tmavý CTA blok
6. Cenník: karty modelov ako prepínač (klik zvýrazní, ukáže detail), ilustračný príklad s vymyslenými číslami, tabuľka so zvýrazneným stĺpcom, otázky
7. Výsledky: platformovo neutrálne — Airbnb (4,89 · 108 recenzií · Superhost) a Booking (čísla chýbajú) vedľa seba, výber bytov s preklikom na inzeráty
8. Hierarchia (podľa ECC skillu frontend-design-direction): eyebrow nad každou sekciou, striedanie pásov, jeden tmavý blok na stránke, čísla v krúžku
9. Node.js LTS 24 nainštalovaný (`C:\Program Files\nodejs`)

## Dohodnuté zásady

- **Nespomínať počet spravovaných bytov** (16 — malé číslo)
- Čísla len ako **jasne označené ilustračné príklady** (2 000 € → 200 € → 1 800 €), žiadna kalkulačka
- Platformy vždy spolu: „Airbnb a Booking", nie iba Airbnb
- Chýbajúce fakty sú vždy `[DOPLNIŤ]` — nič sa nevymýšľa
- Byty na webe = fotky + preklik na inzerát (Airbnb ↗ / Booking ↗), nie vlastné podstránky
- Jazyky: SK + EN (EN až po finálnych SK textoch)

## Rozdelenie práce (dohodnuté 5. 9. 2026)

- **Claude robí celý web**: kód, štruktúra, nasadenie, formulár, preklady, načítanie verejných dát z Airbnb/Booking profilov
- **Klient**: logo (SVG alebo PNG s priehľadným pozadím, min. 1000 px, verzia aj na tmavý podklad), fotky bytov (originály), fakty do zátvoriek, účty (doména, hosting, služba na formulár), právna kontrola GDPR textov
- **Texty sa finalizujú pred kódovaním** — v jednom dokumente `docs/texty.md`

## Ďalšie kroky (v poradí)

1. [x] Claude: texty vytiahnuté do `docs/texty.md` (5. 9.) → **klient prejde a opraví**
2. [x] Airbnb: profil + 6 inzerátov načítané, portfólio hotové (príloha C v texty.md) · Booking: bez profilu, len čísla
3. [x] Fotky bytov, logo aj fotka Tomáša (`tomasko.jpg`) doplnené do návrhu (5. 9.)
4. [~] Fakty: firma, kontakty, príbeh (napísaný podľa zadania) hotové · **podmienky spolupráce doplní klient po nakódovaní** (musí sa poradiť) · tretí člen tímu neskôr
5. [x] Fotky bytov vložené do návrhu (domov, Služby, Výsledky) — 5. 9. · [ ] Voliteľné: mobilný náhľad domova na plátne
6. [x] Web nakódovaný podľa návrhu (5. 9.) + responzívna oprava po audite v 5 veľkostiach (6. 9.: mobil/tablet/notebook/desktop nálezy zapracované, zoom pre monitory ≥1600 px, mobilné porovnanie v cenníku, statická mapa, tlačidlá ≥44 px; 6. 9. večer: kompaktné rozbaľovacie menu vpravo + prepínač modelov s jednou kartou na mobile/tablete, porovnanie na mobile ako 3-stĺpcová mriežka ikon ✓/✕/VY/MY (schválený návrh), fotka Tomáša v tíme vycentrovaná na tvár): Domov (rotujúce slovo, balíček fotiek, pás recenzií, modely, služby, CTA), Služby, Cenník (karty ako prepínač + tabuľka), Výsledky, O nás, Kontakt (formulár Web3Forms + OSM mapa), Ochrana osobných údajov, 404 · responzívne · `cd web && npm run dev` → http://127.0.0.1:4321
7. [x] Kód pushnutý na GitHub: https://github.com/nakari-noi/rental-partners (súkromný repozitár, účet nakari-noi) — 5. 9.
8. [x] Nasadené na Vercel z GitHubu: https://rental-partners.vercel.app — 6. 9. (opravené `vercel.json` v koreni repozitára: web je v podpriečinku `web/`, nie v koreni, preto `installCommand`/`buildCommand`/`outputDirectory` smerujú tam — bez toho Vercel hlásil 404 NOT_FOUND)
9. [ ] Angličtina + prepínač jazyka (SK / EN v navigácii je zatiaľ len text)
10. [~] Pred ostrým spustením: **Web3Forms kľúč** (klient si založí účet na web3forms.com s e-mailom rentalpartners2026@gmail.com → kľúč do `web/src/pages/kontakt.astro`) — **P0, dnes zlyhá každé odoslanie** · [x] doména rentalpartners.sk pripojená (6. 9. — www.rentalpartners.sk beží z Vercelu) · [ ] právna kontrola stránky Ochrana osobných údajov (odstrániť „Návrh textu…") · [x] og:image (`web/public/og.jpg`, 6. 9.) · [ ] analytika (klient vyberie: Google Analytics 4 / Vercel Analytics / Plausible) · [x] Google Search Console (7. 9.: doménové vlastníctvo rentalpartners.sk overené TXT záznamom v DNS u Webhouse, sitemap odoslaná, hlavné stránky požiadané o indexovanie; dáta o 1–3 dni) · [ ] Webhouse: zapnúť automatické predĺženie domény (expiruje 6. 9. 2027) · [x] Google Business Profile založený a **overený** (6. 9. večer, účet rentalpartners2026@gmail.com; Service business, oblasť Bratislava + Staré Mesto, Ružinov, Nové Mesto; kategória Property management company; 8 slovenských služieb; hodiny; fotky bytov) — [ ] dokončiť: logo + úvodná fotka (`podklady/logo/google/`), popisy služieb, dátum vzniku máj 2026, vypnúť SMS chat, recenzie od majiteľov · [ ] test formulára po kľúči · [ ] fotka Amandy · [ ] tretí člen tímu · [ ] podmienky spolupráce (klient sa poradí)
11. [x] 6. 9.: **Test celého webu** (`web/scripts/site-check.mjs`: 7 stránok + 404, desktop + mobil, konzola, odkazy, obrázky, interakcie) — bez chýb; nálezy: chýba og:image, ciele < 44 px v pätičke a pri mape, zástupný Web3Forms kľúč. **Dizajnová kritika** (`/impeccable critique`, dve nezávislé hodnotenia + detektor): 18/32 „Prijateľné". Hlavné slabé miesta: formulár zlyhá (P0), upokojenie a telefón až za formulárom (P1), model B vizuálne vedľajší (P1), kontrast pod AA na tlačidlách a číslach (P1), hero s tromi animáciami a prázdnom na mobile (P2), cenník odkladá odpovede „na stretnutí" (P2), mŕtve SK/EN a malé ciele (P3). **Klient schválil 3 z 9 návrhov** (karty modelov s grafmi, stavy formulára, kontakt na mobile) + hero na Domove bez zmeny animácií — zapracované do hlavného návrhu na plátne (Cenník, Kontakt, Domov). Zamietnuté: zmena farieb/kontrastu, tím, služby na domove, og:image. **Otvorené:** čím nahradiť kartu „4,89 z 5 · Superhost" v hero na Domove (klient ju chce vymeniť).
12. [x] 6. 9. večer: **schválené zmeny zapracované do kódu** — hlavička s tlačidlom „Zavolať Tomášovi" (telefón aj v mobilnom menu), Domov (ponuka tučne, hodnotenia pod tlačidlom, karta s Tomášom namiesto karty hodnotenia, popisky bytov podľa štvrte; animácie ostali), Cenník (grafy pod „10 %" a „Pevná suma"), Kontakt (pás „Odpovieme čo najskôr" + telefón pred formulárom, polia byt → kontakt, hviezdičky, chyby pri poliach, karty úspech/chyba; „Čo bude nasledovať" ostalo vpravo). Klient: nepísať „Tomáš sa vám ozve" — neprofesionálne.
13. [x] 6. 9. večer: **technické SEO** (všetko okrem blogu): kanonické adresy na www + `trailingSlash` (Astro `never`, Vercel `false`), `robots.txt`, `sitemap-index.xml` (@astrojs/sitemap), Open Graph + Twitter karty s `og.jpg` 1200×630, favicon.ico / apple-touch-icon / icon-512 / `site.webmanifest` / theme-color, štruktúrované dáta JSON-LD (LocalBusiness + Organization s adresou, telefónom, IČO/DIČ, ponukou oboch modelov; WebSite; WebPage; BreadcrumbList; FAQPage na Cenníku), kľúčové slová v titulkoch a popisoch každej stránky, `noindex` na 404, hreflang sk + x-default (pripravené na EN), jednotná adresa „Námestie 1. mája 8062/11" (pätička, kontakt, JSON-LD), `fetchpriority` na hero fotke, skip-link. SEO audit agenta: `web/test-results/` (neukladá sa do gitu). **Blog** = neskôr (témy v rozhovore 5. 9.).
14. [ ] **Ďalší krok:** klient rozhodne o analytike a Search Console (viď bod 10), dodá Web3Forms kľúč → test formulára → potom blog (3 prvé články) a EN verzia (`/impeccable harden` formulár, `colorize` kontrast, `layout` cenník, `onboard` kontakt, `quieter` hero, `clarify` texty, `polish` hlavička) → znova `site-check` + `critique`

## Ako pokračovať zajtra

Otvoriť Claude Code v priečinku projektu a napísať napr. „pokračujeme na Rental Partners, pozri docs/STAV.md" — pamäť a tento súbor obsahujú všetko.
