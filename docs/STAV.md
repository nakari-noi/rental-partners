# Rental Partners — stav projektu a ďalšie kroky

*Aktualizované: 5. 9. 2026*

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

1. [ ] Claude: vytiahnuť všetky texty z návrhov do `docs/texty.md` po stránkach → klient prejde a opraví
2. [ ] Klient: poslať linky na Airbnb a Booking profil → Claude načíta názvy bytov, lokality, hodnotenia, citáty recenzií
3. [ ] Klient: logo, fotky bytov (aspoň 6 + 3 na domov), fotka Tomáša/tímu → do `podklady/`
4. [ ] Klient: fakty — kontakty, IČO, obchodné meno, Booking čísla, príbeh firmy, tím, podmienky (výplata, upratovanie, energie, blokovanie termínov, dĺžka zmluvy a výpoveď pri oboch modeloch, ako sa určuje garantovaný nájom)
5. [ ] Voliteľné: mobilný náhľad domova na plátne
6. [ ] Claude: založiť web (Astro + Tailwind), tokeny z DESIGN.md, Domov → Cenník → Služby → Výsledky + O nás → Kontakt (formulár cez Web3Forms/Formspree), responzívne pre mobil
7. [ ] Angličtina + prepínač jazyka
8. [ ] Pred spustením: doména, hosting (Cloudflare Pages/Vercel), GDPR + súhlas vo formulári, SEO meta, analytika, test formulára

## Ako pokračovať zajtra

Otvoriť Claude Code v priečinku projektu a napísať napr. „pokračujeme na Rental Partners, pozri docs/STAV.md" — pamäť a tento súbor obsahujú všetko.
