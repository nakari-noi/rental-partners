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
10. [~] Pred ostrým spustením: [x] **Web3Forms kľúč** doplnený 7. 9. (účet rentalpartners2026@gmail.com, kľúč v `web/src/pages/kontakt.astro`; skúšobný dopyt odoslaný) · [x] **cookie lišta pripravená, ale vypnutá** (`web/src/components/Cookies.astro`, Google Consent Mode v2; zapne sa premennou `PUBLIC_GA_ID` na Verceli, GA sa načíta až po súhlase; `PUBLIC_VERCEL_ANALYTICS=true` zapne Vercel Web Analytics bez cookies) · [x] doména rentalpartners.sk pripojená (6. 9. — www.rentalpartners.sk beží z Vercelu) · [ ] právna kontrola stránky Ochrana osobných údajov (odstrániť „Návrh textu…") · [x] og:image (`web/public/og.jpg`, 6. 9.) · [x] analytika: **Vercel Web Analytics** zapnutá 7. 9. (bez cookies; skript `/_vercel/insights/script.js` cez `web/src/site.config.ts`, vypnutie premennou `PUBLIC_VERCEL_ANALYTICS=false`; dáta v projekte rental-partners → Analytics) · Google Analytics 4 s cookie lištou pripravené, zapne sa premennou `PUBLIC_GA_ID` · [x] Google Search Console (7. 9.: doménové vlastníctvo rentalpartners.sk overené TXT záznamom v DNS u Webhouse, sitemap odoslaná, hlavné stránky požiadané o indexovanie; dáta o 1–3 dni) · [ ] Webhouse: zapnúť automatické predĺženie domény (expiruje 6. 9. 2027) · [x] Google Business Profile založený a **overený** (6. 9. večer, účet rentalpartners2026@gmail.com; Service business, oblasť Bratislava + Staré Mesto, Ružinov, Nové Mesto; kategória Property management company; 8 slovenských služieb; hodiny; fotky bytov) — [ ] dokončiť: logo + úvodná fotka (`podklady/logo/google/`), popisy služieb, dátum vzniku máj 2026, vypnúť SMS chat, recenzie od majiteľov · [ ] test formulára po kľúči · [ ] fotka Amandy · [ ] tretí člen tímu · [ ] podmienky spolupráce (klient sa poradí)
11. [x] 6. 9.: **Test celého webu** (`web/scripts/site-check.mjs`: 7 stránok + 404, desktop + mobil, konzola, odkazy, obrázky, interakcie) — bez chýb; nálezy: chýba og:image, ciele < 44 px v pätičke a pri mape, zástupný Web3Forms kľúč. **Dizajnová kritika** (`/impeccable critique`, dve nezávislé hodnotenia + detektor): 18/32 „Prijateľné". Hlavné slabé miesta: formulár zlyhá (P0), upokojenie a telefón až za formulárom (P1), model B vizuálne vedľajší (P1), kontrast pod AA na tlačidlách a číslach (P1), hero s tromi animáciami a prázdnom na mobile (P2), cenník odkladá odpovede „na stretnutí" (P2), mŕtve SK/EN a malé ciele (P3). **Klient schválil 3 z 9 návrhov** (karty modelov s grafmi, stavy formulára, kontakt na mobile) + hero na Domove bez zmeny animácií — zapracované do hlavného návrhu na plátne (Cenník, Kontakt, Domov). Zamietnuté: zmena farieb/kontrastu, tím, služby na domove, og:image. **Otvorené:** čím nahradiť kartu „4,89 z 5 · Superhost" v hero na Domove (klient ju chce vymeniť).
12. [x] 6. 9. večer: **schválené zmeny zapracované do kódu** — hlavička s tlačidlom „Zavolať Tomášovi" (telefón aj v mobilnom menu), Domov (ponuka tučne, hodnotenia pod tlačidlom, karta s Tomášom namiesto karty hodnotenia, popisky bytov podľa štvrte; animácie ostali), Cenník (grafy pod „10 %" a „Pevná suma"), Kontakt (pás „Odpovieme čo najskôr" + telefón pred formulárom, polia byt → kontakt, hviezdičky, chyby pri poliach, karty úspech/chyba; „Čo bude nasledovať" ostalo vpravo). Klient: nepísať „Tomáš sa vám ozve" — neprofesionálne.
13. [x] 6. 9. večer: **technické SEO** (všetko okrem blogu): kanonické adresy na www + `trailingSlash` (Astro `never`, Vercel `false`), `robots.txt`, `sitemap-index.xml` (@astrojs/sitemap), Open Graph + Twitter karty s `og.jpg` 1200×630, favicon.ico / apple-touch-icon / icon-512 / `site.webmanifest` / theme-color, štruktúrované dáta JSON-LD (LocalBusiness + Organization s adresou, telefónom, IČO/DIČ, ponukou oboch modelov; WebSite; WebPage; BreadcrumbList; FAQPage na Cenníku), kľúčové slová v titulkoch a popisoch každej stránky, `noindex` na 404, hreflang sk + x-default (pripravené na EN), jednotná adresa „Námestie 1. mája 8062/11" (pätička, kontakt, JSON-LD), `fetchpriority` na hero fotke, skip-link. SEO audit agenta: `web/test-results/` (neukladá sa do gitu). **Blog** = neskôr (témy v rozhovore 5. 9.).
14. [ ] **Ďalší krok:** klient rozhodne o analytike a Search Console (viď bod 10), dodá Web3Forms kľúč → test formulára → potom blog (3 prvé články) a EN verzia (`/impeccable harden` formulár, `colorize` kontrast, `layout` cenník, `onboard` kontakt, `quieter` hero, `clarify` texty, `polish` hlavička) → znova `site-check` + `critique`

## Čo sa spravilo 6.–7. 9. 2026 (3. session) — zhrnutie

- Test celého živého webu (Playwright) + dizajnová kritika (impeccable, 18/32) → 9 návrhov na plátne → klient schválil 3 (grafy v kartách cenníka, stavy formulára, kontakt na mobile) + hero s pôvodnými animáciami.
- Schválené zmeny zapracované do návrhu aj do kódu (hlavička „Zavolať Tomášovi", Domov, Cenník, Kontakt).
- Technické SEO kompletné; SEO audit agenta zapracovaný.
- Google Business Profile založený a overený; Search Console overená (DNS TXT u Webhouse), sitemap odoslaná; Web3Forms kľúč + otestovaný formulár; Vercel Web Analytics zapnutá; cookie lišta pripravená, ale vypnutá (zapne `PUBLIC_GA_ID`).
- Logo a titulná fotka pre Google profil v `podklady/logo/google/`.

## Poučenia (aby sa neopakovali)

**Od klienta:**
- Žiadne veľkoplošné redizajny — z 9 návrhov sa páčili 3. Navrhovať malé, konkrétne zmeny, vždy najprv ukázať náhľad (obrázok v chate), až potom upravovať.
- Animácie na domove (rotujúce slovo, balíček fotiek, pás recenzií) ostávajú. Karty cenníka ostávajú v pôvodnom dizajne (biela vs tmavá) — len sa k nim pridáva.
- Nepísať „Tomáš sa vám ozve" a podobné osobné sľuby — neprofesionálne. Neutrálne: „Odpovieme čo najskôr". „Čo bude nasledovať" ostáva v pravom stĺpci.
- Na Google profile ani na webe neuvádzať počet bytov ani konkrétne hodnotenia v popise — „desiatky bytov", „stovky výborných hodnotení".
- Farby nemeniť bez opýtania (návrh na kontrast zamietnutý).
- Otázky klásť v texte s odporúčanou možnosťou, nie cez dialógové okno.

**Technické chyby Clauda:**
- `canvas.json` sa rozbil na slovenských úvodzovkách písaných ako ASCII `"` v JSON reťazcoch — používať „…“.
- V `Base.astro` importovaný `site` z `site.config.ts` zatienil existujúci `const site` (adresa webu) → analytika sa nevykreslila. Import premenovaný na `config`.
- Astro vynechá `<script>` napísaný v podmienke `{ … && <script>}` — značku skladať v hlavičke súboru ako text a vložiť cez `<Fragment set:html>`.
- Atribút `pattern` beží v JS režime `v` — v hranatých zátvorkách escapovať `( ) / -`.
- Web3Forms (bezplatný plán) odmieta odoslanie zo servera aj z headless prehliadača; Vercel Analytics ignoruje automatizované návštevy. Formulár testovať Playwrightom s bežným user agentom; analytiku overí až reálna návšteva.
- Booking.com blokuje `curl` (vráti 202 a ochrannú stránku). Hodnotenia inzerátov ťahať Playwrightom zo schema.org JSON-LD na stránke inzerátu.
- Skripty s Playwrightom spúšťať z `web/` (import `playwright` sa rieši od súboru), nie zo scratchpadu. `astro preview` sa z podprocesu nespustil, náhľady robí vlastný statický server nad `dist/`.
- Po `git checkout` majú súbory CRLF konce, v textových náhradách hľadať s `\r?\n`.
- Celostránkový screenshot mobilu (~0,9 MB, veľmi vysoký) sa klientovi nedá poslať (server vráti 400). Posielať desktop alebo orezané.

**Od klienta (7.–8. 9.):**
- Blog nie je hlavná sekcia: odkaz len v pätičke v zozname stránok, nie v menu. Slúži na prilákanie ľudí z vyhľadávania.
- Nikde neuvádzať: podiel z hrubého výnosu, ktorý majiteľovi zostane; rozpätie cien za noc; mesačné náklady; poistenie (byty sa na krátkodobý prenájom nepoisťujú, téma vyhodená).
- Výška garantovaného nájmu len „podľa trhových hodnôt nájmu", bez „dlhodobého" a bez dĺžky zmluvy.
- Riadok „Prázdne obdobia" v porovnaní pôsobil zastrašujúco → preč. Texty bez pomlčiek. „Rovnaký príjem každý mesiac" namiesto „istý".
- Odpovede chodia heslovito a niekedy pod inou otázkou (obsadenosť prišla pod „blokovanie bytu"). Čítať podľa obsahu, nie podľa poradia, a nejasný výklad si dať potvrdiť (stalo sa pri „dĺžky nájmu").

## Čo sa spravilo 7.–8. 9. 2026 (4. session) — zhrnutie

- Výskum tém blogu prepísaný na reálne dáta Googlu (1 545 našepkávaní + Trends): `docs/vyskum-blog-temy.md`, plán 12 článkov v 3 vlnách. Témy o strachu (poistenie, škody, susedia, pokuty) nikto nehľadá → z plánu von.
- Výsledky: byty pod originálnymi anglickými názvami; tri s najmenej recenziami na Airbnb vedú na Booking s reálnymi hodnoteniami (9,4/153, 9,2/21, 9,6/75), štítky so stupnicou „z 5" / „z 10". Zoznam 18 Booking inzerátov v `docs/texty.md`.
- Cenník: „Prázdne obdobia" → „Fotenie, inzeráty a ceny" (klient ešte nepotvrdil); „Byt pre vás" ✓ aj pri garantovanom nájme; výnosový argument „o 40 až 60 % vyšší" (cenník + domov); konkrétne výplaty (správa do 10. dňa nasledujúceho mesiaca, garantovaný 15. vopred), výpoveď 30 dní, rozdelenie nákladov. Pomlčky z textov preč (42 miest).
- Fakty od klienta (zmluvné podmienky, obsadenosť 95 % / 60–70 %, prevádzka) v `docs/fakty.md`.
- **Blog naživo:** `/blog` + pilierový článok „Krátkodobý prenájom bytu v Bratislave: ako to funguje" (`web/src/content/blog/`), JSON-LD BlogPosting + trojúrovňové omrvinky + FAQ, v sitemape. Odkaz len v pätičke.
- Google Ads účet založený cez „Vytvoriť iba účet" (bez kampane) kvôli Keyword Planneru; fakturačný profil Rental Partners s. r. o., Námestie 1. mája 8062/11.
- Plátno zosúladené s kódom (anglické názvy, Booking, výnos, porovnanie, výplaty).
- Článok dopísaný podľa druhého kola odpovedí (kľúče v schránke/boxe, škody riešime interne, väčšie opravy podľa príčiny, prvý hosť 2 dni až týždeň). Poistenie vyhodené na pokyn klienta. Podnadpisy H3 dostali terakotovú linku a väčšie písmo, zoznamy odrážky a čísla (Tailwind ich resetoval).
- SEO kontrola všetkých 10 stránok (titulky, popisy, kanonické adresy, H1, osnova H2/H3, JSON-LD, odkazy): bez chýb, popisy /o-nas a /sluzby skrátené pod 160 znakov. Titulok článku má 71 znakov, kľúčová fráza vpredu, nechané.
- **Keyword Planner hotový:** účet Google Ads bez kampane, stiahnutých 260 fráz (`docs/vyskum/keyword-planner-2026-09.md` + `.csv`), závery v `docs/vyskum-blog-temy.md` kapitola 12. Hlavné: dane z prenájmu bytu = najsilnejšia téma majiteľov (100 až 1 000, nízka konkurencia) → prvý článok; „garantovaný prenájom" má objem, „garantovaný nájom" nie; „oplatí sa airbnb" pod 10 → zlúčené do „Chcem prenajať byt"; „správa bytov" pasca potvrdená.
- **Anglická verzia naživo (8. 9. popoludní):** `/en` + šesť podstránok s preloženými adresami (`/en/services`, `/en/pricing`, `/en/results`, `/en/about`, `/en/contact`, `/en/privacy`). Spoločné texty (hlavička, pätička, výzva, cookie lišta, štruktúrované dáta) idú zo slovníka `web/src/i18n.ts`, jazyk sa určuje z adresy. Prepínač EN/SK v hlavičke aj v mobilnom menu vedie na tú istú stránku v druhom jazyku (blog EN nemá → `/en`). `hreflang` sk/en/x-default (x-default = slovenčina), `og:locale`, `og-en.jpg`, JSON-LD v jazyku stránky, EN stránky v sitemape. EN formulár posiela na ten istý Web3Forms účet s predmetom „… (EN)" a slovenskými názvami polí. **Klient má anglické texty prečítať.** Blog je len slovenský.
- Ochrana osobných údajov: veta „Návrh textu. Pred spustením webu odporúčame právnu kontrolu." zmazaná na pokyn klienta (bez právnika).
- Cookies: lišta a Consent Mode sú hotové v oboch jazykoch, zapne ich `PUBLIC_GA_ID`. Chýba len GA4 Measurement ID (G-…) od klienta. Bez Google Analytics nie je čo merať; Vercel Analytics beží bez cookies a lištu nepotrebuje.

## Ako pokračovať zajtra

Otvoriť Claude Code v priečinku projektu a napísať napr. „pokračujeme na Rental Partners, pozri docs/STAV.md" — pamäť a tento súbor obsahujú všetko.

**Ďalší krok (navrhnutý, klient ešte nepotvrdil):** napísať článok **„Dane z prenájmu bytu 2026: čo platíte pri krátkodobom a čo pri dlhodobom"** z primárnych zdrojov (zákon č. 595/2003 Z. z. o dani z príjmov: §6 ods. 3 prenájom vs §6 ods. 1 živnosť, oslobodenie 500 €, paušálne výdavky len pri živnosti; zákon o DPH: registrácia, ubytovacie služby; Finančná správa) a dať ho klientovi na kontrolu účtovníkom pred zverejnením. Potom č. 3 „Chcem prenajať byt v Bratislave" (vrátane „oplatí sa Airbnb") a č. 4 „Garantovaný **prenájom** alebo správa za 10 %?" (fakty v `docs/fakty.md`). Nové články = nový `.md` v `web/src/content/blog/`, frontmatter podľa `content.config.ts`.

**Otvorené otázky pre klienta:**
1. Riadok „Fotenie, inzeráty a ceny" v porovnaní: ostáva, alebo náhrada (recenzie / vyúčtovanie / upratovanie) či vypustiť?
2. Hlásenie cudzincov cudzineckej polícii: robí ho RP za majiteľa? (do článku 2 ako ďalšia prebraná povinnosť)
3. Strednodobé prenájmy „na mesiac" (1 až 3 mesiace, pracovné pobyty): robíte ich? Ľudia to hľadajú (10 až 100 mesačne), bola by to téma navyše.
4. Má klient účtovníka / daňového poradcu, ktorý prečíta daňový článok?
5. Voliteľné SEO: jedna veta s odkazom na článok v cenníku alebo službách (interný odkaz pomôže článku).

**Z minula:** skúšobný e-mail z formulára; reálna návšteva kvôli Analytics; automatické predĺženie domény u Webhouse; Google profil (recenzie od majiteľov); fotka Amandy; tretí člen tímu; klient prečíta anglické texty; GA4 Measurement ID pre cookie lištu (klient založí účet na analytics.google.com → vlastníctvo GA4 → dátový stream „Web" → ID v tvare G-XXXXXXX; potom sa nastaví ako `PUBLIC_GA_ID` vo Verceli alebo ako predvolená hodnota v `site.config.ts`).
