# Rental Partners — stav projektu a ďalšie kroky

*Aktualizované: 5. 9. 2026 (2. session)*

## Kde čo je

- **Dizajnové plátno (všetkých 6 stránok, klikateľný cenník):** https://claude.ai/code/artifact/d7635cc8-045d-4fe3-9c1a-cd38c056adbd
  - stránka „Web · smer C" = aktuálny návrh, stránka „Záloha · smer A" = odložený prémiový smer
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
7. [ ] Angličtina + prepínač jazyka (SK / EN v navigácii je zatiaľ len text)
8. [ ] Pred spustením: **Web3Forms kľúč** (klient si založí účet na web3forms.com s e-mailom rentalpartners2026@gmail.com → kľúč do `web/src/pages/kontakt.astro`), doména rentalpartners.sk, hosting (Cloudflare Pages / Vercel), právna kontrola stránky Ochrana osobných údajov, SEO náhľady (og:image), analytika, test formulára, fotka Amandy, tretí člen tímu, podmienky spolupráce (klient sa poradí)

## Ako pokračovať zajtra

Otvoriť Claude Code v priečinku projektu a napísať napr. „pokračujeme na Rental Partners, pozri docs/STAV.md" — pamäť a tento súbor obsahujú všetko.
