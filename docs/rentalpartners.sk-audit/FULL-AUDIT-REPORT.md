# SEO audit · www.rentalpartners.sk

*2026-10-13 · claude-seo v2.4.2 (seo-audit), Lighthouse 13 cez Chrome DevTools · 19 stránok*

## Zhrnutie

**SEO Health Score: 84/100**

**Typ podniku:** Lokálna služba (správa bytov na krátkodobý prenájom a garantovaný nájom, Bratislava, firma bez prevádzky pre zákazníkov)

Web je technicky a obsahovo vo veľmi dobrom stave: všetky stránky sú indexovateľné, majú správne titulky, popisy, kanonické adresy, hreflang a bohaté štruktúrované dáta, Lighthouse dáva SEO 100, osvedčené postupy 100 a agentic browsing 100. Poradie dnes brzdia hlavne veci mimo webu: mladá doména, 0 recenzií na Google profile, málo odkazov a zmienok a zatiaľ neúplný index.

| Oblasť | Váha | Skóre |
|---|---|---|
| Technické SEO | 22 % | 88 |
| Kvalita obsahu | 23 % | 72 |
| SEO na stránkach | 20 % | 92 |
| Štruktúrované dáta | 10 % | 88 |
| Výkon (Core Web Vitals) | 10 % | 85 |
| Pripravenosť na AI vyhľadávanie | 10 % | 75 |
| Obrázky | 5 % | 95 |
| **Spolu (vážený priemer)** | 100 % | **84** |

### 5 najdôležitejších zistení

1. Google profil firmy má 0 recenzií, konkurenti v mapovom bloku 12 až 89
2. Google zatiaľ indexuje len 6 z 19 stránok (doména stará 1 mesiac, žiadosti o indexovanie čiastočne odoslané)
3. Kontrast farieb pod hranicou WCAG AA: terakotová #c9694a na tlačidlách a malých odkazoch (3,28 až 3,74 : 1), tlmený text #8a7a68 (3,63 až 4,14 : 1)
4. Chýbajú bezpečnostné hlavičky HTTP (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, ochrana pred vložením do rámca)
5. Málo spätných odkazov a zmienok mimo webu (len Finstat, Valida)

### 5 rýchlych výhier

1. Bezpečnostné hlavičky vo vercel.json (15 minút)
2. Štruktúrované dáta: otváracie hodiny podľa Google profilu, odkaz na Google profil v sameAs, správne adresy ponúk (/sluzby, /garantovany-prenajom)
3. Úvodný odsek bez animácie priehľadnosti (LCP)
4. Zvyšných 7 žiadostí o indexovanie v Search Console
5. Súbor /llms.txt

## Ako sa meralo

- Vykreslenie a rozbor 19 stránok zo sitemapy skriptmi claude-seo (render_page, parse_html, content_quality), sitemap_discovery, agentic_check s maticou user agentov AI.
- Lighthouse 13 (mobil) a záznam výkonu v Chrome so spomalením CPU 4× a Slow 4G. PageSpeed Insights API bez kľúča narazilo na zdieľaný limit, skutočné dáta používateľov (CrUX) pre web zatiaľ nie sú.
- Hlavičky, presmerovania, robots.txt, llms.txt a 404 priamo cez HTTP.
- Index a Google profil podľa Search Console a správy profilu z 13. 10. 2026. Google API pre claude-seo nie je nastavené, spätné odkazy podľa docs/seo-analyza.md (Ahrefs nie je autorizovaný).
- Surové výstupy v raw/, snímky v screenshots/.

## Technické SEO · 88/100 (váha 22 %)

**Čo funguje**

- Všetkých 19 stránok zo sitemapy vracia 200, majú index, follow a kanonickú adresu na seba
- Sitemap index v robots.txt, platný, 19 adries, 404 a koncepty mimo nej
- Presmerovania: http na https a bez www na www jedným skokom 308, lomka na konci 308 na verziu bez lomky
- Neznáme adresy vracajú skutočnú 404 (noindex)
- Obsah je v HTML bez JavaScriptu (statický web Astro, nie SPA)
- hreflang SK a EN obojsmerne, x-default na slovenskú verziu, články len sk a x-default
- IndexNow kľúč nasadený, 19 adries odoslaných (202)

**Zistenia**

### Vysoké: Google indexuje len 6 z 19 stránok

Search Console 13. 10. 2026: 6 indexovaných, 12 neindexovaných. Doména je stará 1 mesiac. Sitemapa znova odoslaná, /garantovany-prenajom vyžiadaná, ďalšie žiadosti zastavila denná kvóta.

**Odporúčanie:** Ďalší deň požiadať o indexovanie /, /blog/register-kratkodobych-prenajmov, /en/guaranteed-rent, /sluzby, /en, /en/services, /cennik. Okolo 20. 10. skontrolovať stav.

### Stredné: Chýbajú bezpečnostné hlavičky

Odpoveď Domova nemá Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy, Permissions-Policy ani X-Frame-Options alebo CSP frame-ancestors. Nie je to priamy faktor poradia, ale je to signál kvality a ochrana pred vložením stránky do cudzieho rámca.

**Odporúčanie:** Pridať do vercel.json hlavičky pre všetky cesty: Strict-Transport-Security max-age=63072000; includeSubDomains, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy s vypnutou kamerou, mikrofónom a polohou, X-Frame-Options SAMEORIGIN.

### Nízke: /index.html vracia 200 ako duplikát Domova

https://www.rentalpartners.sk/index.html odpovedá 200. Kanonická adresa ukazuje na /, takže riziko je malé.

**Odporúčanie:** Voliteľne presmerovanie 308 z /index.html na / vo vercel.json.

## Kvalita obsahu · 72/100 (váha 23 %)

**Čo funguje**

- Skóre kvality obsahu 94 až 96 zo 100 na všetkých stránkach, bez výplňových a typických AI fráz
- Skutočné recenzie hostí s menom a mesiacom, Superhost 4,89, Booking 9,6, 804 hodnotení
- Zakladateľ s fotkou a telefónom priamo v úvode, firma s IČO a DIČ
- Služby 885 slov, Garantovaný prenájom 780, články 974 a 1 434 slov s otázkami a odpoveďami

**Zistenia**

### Stredné: O nás a Kontakt majú málo obsahu

O nás 256 slov, Kontakt 267, anglické O nás 294. Pri službe, kde majiteľ zveruje byt a peniaze, je stránka o firme hlavný zdroj dôvery (E-E-A-T).

**Odporúčanie:** Rozšíriť O nás na 600 až 800 slov: príbeh, od kedy a prečo, ako pracujete, tím s fotkami a rolami, údaje o firme, Superhost od kedy. Čaká na fakty od klienta.

### Stredné: Autor článkov bez priezviska

Články podpisuje „Tomáš, Zakladateľ“. Pre dôveryhodnosť článkov o zákonoch a peniazoch pomáha celé meno a krátky životopis.

**Odporúčanie:** Ak klient súhlasí, uvádzať celé meno a 2 až 3 vety o skúsenosti pod článkom a v štruktúrovaných dátach Person.

### Nízke: Blog má zatiaľ 2 články

Témy sú naplánované v docs/plan-blogu.md (články 1, 2, 6, 7, 10, 11 od 27. 10. 2026).

**Odporúčanie:** Pokračovať podľa plánu, prvý článok Garantovaný prenájom alebo správa bytu.

## SEO na stránkach · 92/100 (váha 20 %)

**Čo funguje**

- Titulky 32 až 63 znakov, popisy 132 až 158 znakov na všetkých 19 stránkach
- Presne jeden H1 na každej stránke, logická štruktúra H2
- Jedna hlavná fráza na stránku (správa airbnb bratislava, cena správy airbnb, garantovaný prenájom bratislava a ďalšie), bez kanibalizácie
- Bohaté interné odkazy (23 až 36 na stránku), menu Služby s podmenu, celé karty modelov sú odkazy
- Open Graph na všetkých stránkach

**Zistenia**

### Vysoké: Malá terakotová a tlmená farba v textoch a tlačidlách má nízky kontrast

Lighthouse (mobil): biela na #c9694a v hlavnom tlačidle 3,74 : 1, #c9694a na krémovej 3,28 : 1, #8a7a68 na krémovej 3,63 : 1 a na bielej 4,14 : 1. WCAG AA vyžaduje 4,5 : 1 pre text menší ako 18,66 px tučný. Prístupnosť 96 zo 100.

**Odporúčanie:** Pre text a tlačidlá použiť odtieň, ktorý web už má ako accent-deep (#a8533a: 5,30 : 1 na bielej, 4,64 : 1 na krémovej) a tlmený text stmaviť na približne #6f6152 (5,24 : 1 na krémovej). Terakotová #c9694a môže ostať na veľkých nadpisoch a plochách. Je to zmena vzhľadu celého webu, preto najprv ako návrh.

## Štruktúrované dáta · 88/100 (váha 10 %)

**Čo funguje**

- LocalBusiness a Organization s adresou, GPS, IČO, DIČ, telefónom, e-mailom, jazykmi a katalógom ponúk na všetkých stránkach
- WebSite, WebPage a BreadcrumbList, FAQPage na 8 stránkach, Service na stránkach služieb, BlogPosting s autorom Person pri článkoch
- Žiadne vlastné hodnotenia (aggregateRating) na firme, ktoré Google pre firmy nezobrazuje a môže brať ako problém

**Zistenia**

### Stredné: Chýbajú otváracie hodiny

Google profil má vyplnené otváracie hodiny, štruktúrované dáta na webe ich nemajú. Nesúlad údajov o firme oslabuje lokálne signály.

**Odporúčanie:** Doplniť openingHoursSpecification presne podľa Google profilu.

### Stredné: sameAs neodkazuje na Google profil

sameAs obsahuje len profil na Airbnb. Odkaz na Google profil (Mapy) a neskôr Facebook spája entitu firmy naprieč zdrojmi.

**Odporúčanie:** Pridať adresu Google profilu (maps.google.com/?cid=...) a profil na Bookingu, ak je verejný. Prípadne hasMap.

### Nízke: Ponuky v katalógu odkazujú na Cenník

Offer Správa bytu aj Garantovaný nájom majú url /cennik, hoci už existujú vlastné stránky.

**Odporúčanie:** Správa bytu na /sluzby, Garantovaný nájom na /garantovany-prenajom (EN obdobne).

## Výkon (Core Web Vitals) · 85/100 (váha 10 %)

**Čo funguje**

- LCP 1,98 s na mobile pri spomalení CPU 4× a Slow 4G (hranica dobrého je 2,5 s), CLS 0,00
- TTFB 20 ms (Vercel, stránka z cache)
- Obrázky AVIF a WebP, 12 až 44 kB

**Zistenia**

### Nízke: LCP takmer celé tvorí oneskorenie vykreslenia

Prvok LCP je úvodný odsek s animáciou reveal-2 (priehľadnosť od 0, oneskorenie 0,25 s, trvanie 0,7 s). Vykreslenie navyše blokujú dva súbory CSS: vlastné štýly (624 ms na Slow 4G) a Google Fonts. Žiadne skutočné dáta od používateľov (CrUX) zatiaľ nie sú.

**Odporúčanie:** Úvodný odsek animovať len posunom bez priehľadnosti alebo vôbec. Zvážiť vloženie CSS do stránky (Astro build.inlineStylesheets) a vlastné hostovanie písiem Outfit a Nunito Sans.

## Pripravenosť na AI vyhľadávanie · 75/100 (váha 10 %)

**Čo funguje**

- Lighthouse Agentic Browsing 100, obsah dostupný bez JavaScriptu (897 slov na Domove)
- AI agenti nie sú blokovaní, odpovede na ich user agentov 200
- Otázky a odpovede v štruktúrovaných dátach na 8 stránkach, jasné odseky s faktami (10 %, k 15. dňu, IČO)

**Zistenia**

### Vysoké: Málo zmienok o značke mimo webu

AI odpovede (ChatGPT, Perplexity, AI Overviews) čerpajú z iných zdrojov o firme. Okrem Finstatu a Validy o Rental Partners nič nepíše.

**Odporúčanie:** Katalógy firiem (texty v docs/texty-katalogy.md), Facebook stránka, Bazoš, recenzie na Google, článok o registri ponúknuť médiám.

### Nízke: Chýba llms.txt

Súbor nie je štandardom vyhľadávačov, ale Lighthouse ho počíta do Agentic Browsing a niektoré nástroje ho čítajú.

**Odporúčanie:** Pridať /llms.txt s H1, krátkym zhrnutím a odkazmi na hlavné stránky.

## Obrázky · 95/100 (váha 5 %)

**Čo funguje**

- Všetky obsahové obrázky majú alt text, fotka autora pri mene má zámerne prázdny alt
- Moderné formáty AVIF a WebP, rozmery uvedené (CLS 0), lenivé načítanie mimo úvodu

**Zistenia**

### Nízke: Články majú všeobecný obrázok pre zdieľanie

BlogPosting a og:image článkov používajú /og.jpg.

**Odporúčanie:** Vlastný obrázok pre každý článok (1200 × 630).

## Lokálne SEO · 60/100 (mimo skóre, informatívne)

**Čo funguje**

- Google profil overený, kategória Property management company, oblasť Bratislava, otváracie hodiny, 61 zobrazení za máj až október (28 v Mapách)
- Názov, adresa a telefón rovnaké v pätičke, na Kontakte a v štruktúrovaných dátach

**Zistenia**

### Vysoké: 0 recenzií na Google profile

Konkurenti v mapovom bloku majú 12 až 89 recenzií. Bez recenzií sa firma do prvej trojky v Mapách nedostane a 0 interakcií z profilu to potvrdzuje.

**Odporúčanie:** Požiadať spokojných majiteľov o recenziu priamym odkazom na napísanie recenzie, cieľ 5 až 10 do konca novembra.
