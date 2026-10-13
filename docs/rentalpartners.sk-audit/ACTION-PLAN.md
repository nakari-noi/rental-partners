# Akčný plán SEO · www.rentalpartners.sk

> **Hotové a nasadené 13. 10. 2026:** bezpečnostné hlavičky, presmerovanie /index.html, ponuky a odkaz na Google profil v štruktúrovaných dátach, kontrast WCAG AA (0 problémov na 19 stránkach), rýchlejší úvod (LCP na mobile so spomalením 1,98 s → 1,03 s), písma z vlastného webu, /llms.txt. **Otváracie hodiny do štruktúrovaných dát nedávame (rozhodnutie klienta).** Ostáva: index, recenzie, odkazy, O nás, autor, obrázky článkov.

*2026-10-13 · skóre 84/100*

## Fáza 1: Najdôležitejšie opravy (Týždeň 1)

- [ ] Zvyšných 7 žiadostí o indexovanie v Search Console
- [ ] Bezpečnostné hlavičky vo vercel.json
- [ ] Štruktúrované dáta: otváracie hodiny, sameAs na Google profil, url ponúk

## Fáza 2: Najväčší vplyv (Týždne 2 až 3)

- [ ] Prvých 5 až 10 recenzií na Google profile
- [ ] Kontrast farieb podľa WCAG AA (návrh vo vetve)
- [ ] Úvodný odsek bez animácie priehľadnosti, vložené CSS, vlastné písma
- [ ] Katalógy firiem a Facebook stránka

## Fáza 3: Obsah a dôvera (Mesiac 2)

- [ ] Rozšírená stránka O nás a autor s celým menom
- [ ] Články 1, 2 a 7 z plánu blogu
- [ ] /llms.txt a vlastné obrázky článkov

## Fáza 4: Sledovanie (Priebežne)

- [ ] Kontrola indexu okolo 20. 10. 2026
- [ ] Základná línia seo-drift po opravách, porovnanie pri každom nasadení
- [ ] Google API kľúč pre PageSpeed a CrUX v claude-seo, prístup do Search Console cez API

# Podľa priority

## Vysoké

- **Google indexuje len 6 z 19 stránok** (Technické SEO). Ďalší deň požiadať o indexovanie /, /blog/register-kratkodobych-prenajmov, /en/guaranteed-rent, /sluzby, /en, /en/services, /cennik. Okolo 20. 10. skontrolovať stav.
- **Malá terakotová a tlmená farba v textoch a tlačidlách má nízky kontrast** (SEO na stránkach). Pre text a tlačidlá použiť odtieň, ktorý web už má ako accent-deep (#a8533a: 5,30 : 1 na bielej, 4,64 : 1 na krémovej) a tlmený text stmaviť na približne #6f6152 (5,24 : 1 na krémovej). Terakotová #c9694a môže ostať na veľkých nadpisoch a plochách. Je to zmena vzhľadu celého webu, preto najprv ako návrh.
- **Málo zmienok o značke mimo webu** (Pripravenosť na AI vyhľadávanie). Katalógy firiem (texty v docs/texty-katalogy.md), Facebook stránka, Bazoš, recenzie na Google, článok o registri ponúknuť médiám.
- **0 recenzií na Google profile** (Lokálne SEO). Požiadať spokojných majiteľov o recenziu priamym odkazom na napísanie recenzie, cieľ 5 až 10 do konca novembra.

## Stredné

- **Chýbajú bezpečnostné hlavičky** (Technické SEO). Pridať do vercel.json hlavičky pre všetky cesty: Strict-Transport-Security max-age=63072000; includeSubDomains, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy s vypnutou kamerou, mikrofónom a polohou, X-Frame-Options SAMEORIGIN.
- **O nás a Kontakt majú málo obsahu** (Kvalita obsahu). Rozšíriť O nás na 600 až 800 slov: príbeh, od kedy a prečo, ako pracujete, tím s fotkami a rolami, údaje o firme, Superhost od kedy. Čaká na fakty od klienta.
- **Autor článkov bez priezviska** (Kvalita obsahu). Ak klient súhlasí, uvádzať celé meno a 2 až 3 vety o skúsenosti pod článkom a v štruktúrovaných dátach Person.
- **Chýbajú otváracie hodiny** (Štruktúrované dáta). Doplniť openingHoursSpecification presne podľa Google profilu.
- **sameAs neodkazuje na Google profil** (Štruktúrované dáta). Pridať adresu Google profilu (maps.google.com/?cid=...) a profil na Bookingu, ak je verejný. Prípadne hasMap.

## Nízke

- **/index.html vracia 200 ako duplikát Domova** (Technické SEO). Voliteľne presmerovanie 308 z /index.html na / vo vercel.json.
- **Blog má zatiaľ 2 články** (Kvalita obsahu). Pokračovať podľa plánu, prvý článok Garantovaný prenájom alebo správa bytu.
- **Ponuky v katalógu odkazujú na Cenník** (Štruktúrované dáta). Správa bytu na /sluzby, Garantovaný nájom na /garantovany-prenajom (EN obdobne).
- **LCP takmer celé tvorí oneskorenie vykreslenia** (Výkon (Core Web Vitals)). Úvodný odsek animovať len posunom bez priehľadnosti alebo vôbec. Zvážiť vloženie CSS do stránky (Astro build.inlineStylesheets) a vlastné hostovanie písiem Outfit a Nunito Sans.
- **Chýba llms.txt** (Pripravenosť na AI vyhľadávanie). Pridať /llms.txt s H1, krátkym zhrnutím a odkazmi na hlavné stránky.
- **Články majú všeobecný obrázok pre zdieľanie** (Obrázky). Vlastný obrázok pre každý článok (1200 × 630).
