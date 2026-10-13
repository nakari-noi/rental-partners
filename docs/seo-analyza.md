# SEO analýza rentalpartners.sk a plán, ako sa dostať na prvé miesta

*11. 10. 2026. Hlavný dokument pre SEO webu. Konkurencia podrobne: [`konkurencia-seo.md`](konkurencia-seo.md). Kľúčové slová a témy: [`vyskum-blog-temy.md`](vyskum-blog-temy.md), [`vyskum/keyword-planner-2026-09.md`](vyskum/keyword-planner-2026-09.md).*

**Čo som preveril:** všetkých 16 stránok zo sitemapy a 404 (stav, titulky, popisy, nadpisy, počet slov, interné odkazy, obrázky, štruktúrované dáta, hlavičky servera), rýchlosť na pomalom mobile, index Googlu, výsledky Googlu pre 18 fráz majiteľov, našepkávanie Googlu pre 28 fráz, stránky na prvých miestach pre 8 hlavných fráz, Google Mapy pre 3 dopyty a náš Google profil firmy.

---

## 1. Zhrnutie

**Web je technicky výborný, ale Google ho zatiaľ nepozná, nevie, na aké slová ho ukázať, a nemá dôvod mu veriť.**

| Oblasť | Stav | Hlavný problém |
|---|---|---|
| Technika | 🟢 výborná | drobnosti (štruktúrované dáta, sitemap) |
| Index | 🔴 zlý | v Googli je 5 zo 16 stránok |
| Cielenie na slová | 🔴 zlé | titulky a nadpisy mieria na „správa bytov“ (správcovia domov) a „garantovaný nájom“ (pod 10 hľadaní), slovo „Airbnb“ chýba v titulku domova |
| Obsah | 🟠 slabý | 9 slovenských stránok, 1 článok, Služby 340 slov, O nás 227 slov |
| Lokálne SEO | 🟠 slabé | profil je overený a viditeľný (61 zobrazení, z toho 28 v Mapách), ale **0 recenzií a 0 interakcií** |
| Spätné odkazy a dôvera | 🔴 takmer nulové | doména má mesiac, odkazy len z Finstatu a Validy |

**Kde sme:** pre 18 fráz majiteľov sme v top 10 raz (10. miesto, „garantovaný nájom“). Search Console za september a október: 8 kliknutí, 151 zobrazení, priemerná pozícia 12,5.

**10 najdôležitejších krokov podľa dopadu:**

1. Dostať do indexu všetkých 16 stránok (Search Console). **13. 10.: vyžiadané indexovanie všetkých 10 chýbajúcich stránok, sitemap znova odoslaná.**
2. ~~Zistiť, prečo Google profil firmy nie je vidieť~~ Profil je v poriadku (13. 10.), chýbajú len recenzie, pozri bod 6.
3. Prepísať titulky, popisy a H1 podľa mapy kľúčových slov (kapitola 4). Domov: „Správa Airbnb v Bratislave za 10 %“.
4. Nová stránka **Garantovaný prenájom bytu v Bratislave** (najslabšia konkurencia zo všetkých fráz).
5. Rozšíriť Služby, Cenník a O nás na 1 000 až 1 500 slov (postup, otázky, čo je v cene, tím).
6. Získať 10 až 20 recenzií na Google profile od majiteľov.
7. Zápis do 6 až 8 katalógov firiem s rovnakým názvom, adresou a telefónom.
8. Článok o registri krátkodobých prenájmov ešte v októbri (termín 28. 2. 2027).
9. Potom 2 články mesačne podľa plánu obsahu (kapitola 6) a interné odkazy na ne.
10. Mesačne merať pozície a zobrazenia v Search Console.

**Reálne:** „garantovaný prenájom bratislava“ a mapový blok sa dajú dosiahnuť za 2 až 4 mesiace. „Správa airbnb bratislava“ v top 3 za 6 až 12 mesiacov.

---

## 2. Technické SEO

### 2.1 Čo je v poriadku

| Kontrola | Výsledok |
|---|---|
| Stav stránok | všetkých 16 vracia 200, neexistujúca adresa 404 s `noindex` |
| Presmerovania | `rentalpartners.sk` → `www`, `http` → `https`, lomka na konci → bez nej (308) |
| HTTPS | certifikát Let's Encrypt do 5. 12. 2026, Vercel obnovuje sám, HSTS zapnuté |
| robots.txt | povoľuje všetko, odkazuje na sitemap |
| Sitemap | 16 adries, žiadna chybná, 404 v nej nie je |
| Kanonické adresy | na každej stránke, smerujú na `www`. Duplikáty `rental-partners.vercel.app` a `/index.html` majú kanonickú adresu na `www`, v indexe nie sú |
| Jazyky | `hreflang` sk / en / x-default obojsmerne správne, blog len sk |
| Meta robots | `index, follow, max-image-preview:large` |
| Titulky a popisy | na každej stránke, titulky 32 až 71 znakov, popisy 137 až 159 (okrem ochrany údajov) |
| H1 | presne jeden na každej stránke |
| Rýchlosť (pomalý mobil, 4× spomalený procesor) | domov LCP 1,9 s, Výsledky LCP 1,7 s, CLS 0 (limit Googlu 2,5 s a 0,1) |
| Server | odpoveď 170 až 340 ms, kompresia Brotli, HTML 17 až 42 kB |
| Obrázky | AVIF a WebP, 12 až 82 kB, všetky s `alt`, `width` a `height`, lenivé načítanie |
| Lighthouse (mobil) | SEO 100, Best Practices 100, prístupnosť 96 |
| Štruktúrované dáta | LocalBusiness + Organization, WebSite, WebPage, BreadcrumbList, FAQPage (Cenník, článok), BlogPosting. Validátor schema.org bez chýb |
| Vykresľovanie | statické HTML (Astro), Google nepotrebuje JavaScript, aby videl obsah |

Väčšina konkurentov je technicky horšia: B&B Management, Fierce Homes, LIVE-IN a RS Properties nemajú H1 alebo popis stránky a v sitemape majú desiatky zabudnutých stránok zo šablóny.

### 2.2 Čo opraviť

| # | Problém | Dopad | Riešenie | Práca |
|---|---|---|---|---|
| T1 | **H1 domova** je pre Google „Váš byt, náš tím. Za vás riešime hostí. fotenie. upratovanie. ceny. hostí.“ (rotujúce slová sú v HTML všetky za sebou), bez Airbnb aj Bratislavy | vysoký | Štítok nad nadpisom („Správa bytov v Bratislave“) zmeniť na H1 s textom **„Správa Airbnb a Booking v Bratislave“**, veľký slogan na odstavec s rovnakým vzhľadom. Animácia ostáva. Rovnako na Službách a Cenníku. | 30 min, súhlas klienta s textom štítku |
| T2 | Rovnaký dátum `lastmod` pri všetkých stránkach (čas posledného zostavenia webu) | stredný | Skutočný dátum poslednej zmeny každej stránky, pri článkoch z frontmatteru. Inak sa Google naučí `lastmod` ignorovať. | 1 h |
| T3 | Článok: autor je firma, obrázok je všeobecný `og.jpg`, `dateModified` sa nemení | stredný | Autor Tomáš ako `Person` s odkazom na O nás a krátkym medailónom pod článkom, vlastná fotka k článku, `dateModified` pri úprave | 1 h |
| T4 | LocalBusiness: v `sameAs` len Airbnb, chýbajú otváracie hodiny a cenová úroveň | nízky až stredný | Doplniť Booking, Google profil, LinkedIn alebo Facebook (keď budú), `openingHoursSpecification`, `priceRange` | 30 min |
| T5 | Služby a garantovaný prenájom nemajú `Service` | nízky | `Service` s `provider`, `areaServed` Bratislava a `offers` na Službách a novej stránke (PropCherry ho má na všetkých vstupných stránkach) | 30 min |
| T6 | Alt texty na Výsledkoch sú anglické názvy inzerátov | nízky | Slovenský popis s lokalitou, napr. „Dvojizbový byt Metropolis, Nivy, krátkodobý prenájom“ | 20 min |
| T7 | Stránka 404 má kanonickú adresu `/404` a `hreflang` | kozmetický | Vynechať na 404 | 10 min |
| T8 | `rental-partners.vercel.app` odpovedá 200 | nízky | Vo Verceli nastaviť presmerovanie na `www.rentalpartners.sk` | 5 min |
| T9 | FAQ štruktúrované dáta Google od 2023 zobrazuje ako rozbaľovacie otázky len pri úradoch a zdravotníctve | informácia | Nechať, pomáhajú AI odpovediam (Google AI Overviews, ChatGPT), ale nečakať rozbalené otázky vo výsledkoch | 0 |
| T10 | Bing a AI vyhľadávače (ChatGPT, Copilot berú dáta z Bingu) | stredný | Bing Webmaster Tools: import zo Search Console jedným klikom, odoslať sitemap. Voliteľne IndexNow (súbor s kľúčom v `public/`), Bing potom vidí zmeny hneď | 20 min, prihlásenie |

### 2.3 Interné odkazy

Okrem menu a pätičky sa stránky na seba takmer neodkazujú:

| Stránka | Odkazy z textu von | Kam by mala odkazovať |
|---|---|---|
| Domov | Kontakt, O nás, Výsledky, Cenník, Služby | + Garantovaný prenájom, + najnovší článok |
| Služby | Kontakt, článok | + Cenník, Výsledky, Garantovaný prenájom |
| Cenník | Kontakt, článok | + Služby, Garantovaný prenájom, článok o porovnaní modelov |
| Výsledky | Kontakt | + Služby, Cenník |
| O nás | Kontakt | + Služby, Výsledky |
| Blog | článok, Kontakt | každý článok + Služby alebo Garantovaný prenájom |

Pravidlo: každá nová stránka dostane aspoň 2 odkazy z existujúcich stránok v texte (nie len z menu) a každý článok odkazuje na stránku so službou, ktorú opisuje.

---

## 3. Index

V Googli je **5 zo 16** stránok: `/`, `/cennik`, `/kontakt`, `/o-nas`, `/ochrana-osobnych-udajov`. Chýbajú `/sluzby`, `/vysledky`, `/blog`, článok a všetkých 7 anglických (stav 8. a 11. 10. 2026).

**Search Console (údaje k 9. 10. 2026):** 6 indexovaných, 12 neindexovaných. Dôvody: „Objavené, momentálne nie je v indexe“ (9: `/sluzby`, `/blog` a 7 EN stránok, Google ich ešte neprešiel a nepoznal na ne žiadny odkaz okrem sitemapy), „Indexovo prehľadávané, momentálne neindexované“ (1: `/vysledky`, prejdená 7. 9., pravdepodobne pre málo textu), „Stránka s presmerovaním“ (2, v poriadku). **13. 10. vyžiadané indexovanie všetkých 10 adries a znova odoslaná sitemap.** Omrvinky: 4 platné, 0 chýb.

Pri doméne starej mesiac je to bežné, Google nové weby prechádza pomaly. Pomôže:

1. Search Console → Kontrola webovej adresy → Požiadať o indexovanie, približne 10 adries denne, začať `/sluzby`, `/vysledky`, `/blog`, článok, `/en`.
2. Search Console → Stránky: prečítať dôvod pri každej chýbajúcej adrese (napr. „Objavená, momentálne neindexovaná“ znamená, že Google o nej vie, ale ešte ju neprešiel).
3. Interné odkazy z kapitoly 2.3 a odkazy zvonku (kapitola 8). Google prechádza častejšie weby, na ktoré odkazujú iné weby.

**Teraz je najlacnejšia chvíľa meniť titulky, nadpisy a adresy stránok**, lebo väčšina ešte nie je v indexe a nič nestratíme.

---

## 4. Kľúčové slová a mapa stránok

### 4.1 Čo majitelia hľadajú

Objemy z Keyword Planneru (Slovensko, mesačne) a našepkávanie Googlu z 11. 10. 2026:

| Fráza | Objem | Kto je dnes na 1. mieste | Šanca pre nás |
|---|---|---|---|
| správa airbnb (bratislava) | 10 až 100 | B&B Management | stredná, 6 až 12 mesiacov |
| správa bytu airbnb | 10 až 100 (spolu s variantmi) | B&B Management | stredná |
| airbnb management bratislava | pod 10 SK, viac EN | B&B Management, PropCherry | stredná |
| správca airbnb | pod 10 | B&B Management | stredná |
| správa krátkodobého prenájmu | pod 10 | Apartment Holdings | stredná |
| **garantovaný prenájom (bratislava)** | 10 až 100 | Riešime bývanie (652 slov, bez ceny) | **vysoká, 2 až 4 mesiace** |
| garantovaný nájom (bratislava) | pod 10 | GarantovanýPrenájom.sk | vysoká |
| krátkodobý prenájom bytu (bratislava) | 10 až 100, +900 % medziročne | Bazoš, Bezrealitky, Flatio (hostia a nájomcovia) | nízka na všeobecnú frázu, vysoká na článok |
| dane z prenájmu bytu | 100 až 1 000 | Finančná správa, Nehnutelnosti.sk | nízka, lepšie „dane z airbnb“, „krátkodobý prenájom a dph“ |
| register krátkodobých prenájmov | rastie (zákon od 1. 1. 2027) | Podpora správy | **vysoká, ak článok vyjde včas** |
| oplatí sa airbnb (v bratislave) | pod 10 | Finfin, Reddit | stredná, ako časť iného článku |
| koľko zarobí byt na airbnb | pod 10 | Sora, PropCherry | stredná |
| správa bytov | 100 až 1 000 | správcovia bytových domov | **pasca, nepoužívať ako hlavné slovo** |
| short term rental management bratislava (EN) | malý | LIVE-IN, PropCherry | vysoká, slabá konkurencia |

Našepkávanie navyše ukazuje: „garantovaný prenájom recenzie“, „garantovaný nájom bratislava“, „krátkodobý prenájom bytu a dph“, „krátkodobý prenájom bytu zmluva / zákon“, „dane z airbnb“, „airbnb dane slovensko“, „oplatí sa airbnb v bratislave“, „krátkodobý prenájom bytu petržalka“.

**Celkovo:** frázy majiteľov sú malé, rádovo stovky hľadaní mesačne na celom Slovensku. Pri takom objeme stačí byť prvý na 5 až 10 frázach.

### 4.2 Kanibalizácia dnes

Domov, Služby aj Cenník majú v titulku „správa bytu / bytov“ a garantovaný nájom je rozdelený medzi domov a Cenník. Google nevie, ktorú stránku ukázať, a nemá žiadnu stránku na „správa airbnb“ ani na „garantovaný prenájom“.

### 4.3 Mapa: jedna hlavná fráza na jednu stránku

| Stránka | Hlavná fráza | Ďalšie frázy | Návrh titulku (znaky) | Návrh popisu (znaky) | H1 |
|---|---|---|---|---|---|
| Domov `/` | **správa airbnb bratislava** | airbnb management bratislava, správca airbnb | Správa Airbnb v Bratislave za 10 % · Rental Partners (52) | Správa bytu na Airbnb a Booking v Bratislave za 10 % z obratu, alebo garantovaný prenájom s pevnou sumou každý mesiac. Fotenie, hostia, upratovanie. (148) | Správa Airbnb a Booking v Bratislave (štítok) |
| Služby `/sluzby` | **správa bytu airbnb** | čo robí správca airbnb, správa krátkodobého prenájmu | Služby správcu Airbnb v Bratislave · Rental Partners (51) | Čo robí správca Airbnb: fotenie, inzeráty a ceny, komunikácia s hosťami, upratovanie, údržba a mesačné vyúčtovanie. Správa bytu v Bratislave za 10 %. (149) | Služby správcu Airbnb a Booking |
| Cenník `/cennik` | **cena správy airbnb** | provízia správcu airbnb, koľko stojí správa airbnb | Cena správy Airbnb v Bratislave: 10 % · Rental Partners (55) | Koľko stojí správa Airbnb: 10 % z obratu, Airbnb aj Booking v cene. Alebo garantovaný prenájom s pevnou sumou mesačne. Čo je v cene a kedy platíme. (147) | Cena správy Airbnb a garantovaného prenájmu |
| **Nová** `/garantovany-prenajom` | **garantovaný prenájom bratislava** | garantovaný nájom, garantovaný prenájom bytu, garantovaný prenájom recenzie | Garantovaný prenájom bytu v Bratislave · Rental Partners (56) | Byt si od vás prenajmeme a platíme pevný nájom vopred každý mesiac, bez ohľadu na obsadenosť. Garantovaný prenájom bytu v Bratislave od Rental Partners. (opravené 13. 10.: výpoveď 30 dní platí pri správe, nie pri garantovanom nájme) | Garantovaný prenájom bytu v Bratislave |
| Výsledky `/vysledky` | **recenzie správcu airbnb** | airbnb staré mesto, airbnb ružinov, výsledky bytov | bez zmeny | bez zmeny | bez zmeny |
| O nás `/o-nas` | **rental partners** (značka) | správca airbnb skúsenosti | bez zmeny | bez zmeny | bez zmeny |
| Článok (existujúci) | **krátkodobý prenájom bytu bratislava** | krátkodobý prenájom bytu, ako funguje | bez zmeny | bez zmeny | bez zmeny |
| EN `/en` | **airbnb management bratislava** | short term rental management bratislava | Airbnb Management in Bratislava for 10 % · Rental Partners (58) | podľa SK | Airbnb management in Bratislava (štítok) |
| **Nová** EN `/en/guaranteed-rent` | **guaranteed rent bratislava** | | Guaranteed Rent in Bratislava · Rental Partners (47) | podľa SK | Guaranteed rent in Bratislava |

Adresy existujúcich stránok nemeniť (`/sluzby` a `/cennik` sú krátke a zrozumiteľné, kľúčové slovo v adrese má malú váhu). Nová stránka dostane adresu s frázou.

---

## 5. Obsah stránok (on-page)

Počet slov v hlavnom obsahu (bez menu a pätičky) a čo doplniť. Na prvých miestach sú pri našich frázach stránky s 600 až 3 000 slovami. PropCherry, ktorý je pri väčšine fráz v top 5, má na hlavných stránkach 2 600 až 3 000 slov.

| Stránka | Slov dnes | Cieľ | Čo doplniť |
|---|---|---|---|
| Domov | 609 | 900 až 1 200 | Krátka sekcia **„Prečo 10 %“** (čo je v cene, Airbnb aj Booking). Sekcia **„Ako začneme“** v 4 krokoch (stretnutie v byte, odhad, zmluva, prvý hosť do 2 dní až týždňa). 4 až 5 otázok s odpoveďami (FAQ). Odkaz na Garantovaný prenájom a najnovší článok. |
| Služby | 340 | 1 000 až 1 500 | Sekcia **„Ako to funguje v praxi“**: rezervácia, overenie hosťa, príchod a kľúče, počas pobytu, odchod a upratovanie, recenzia, vyúčtovanie. 5 až 6 otázok (kto platí opravy, čo pri škode, môžem byt používať, ako často prehľad). Odkazy na Cenník, Výsledky, Garantovaný prenájom. |
| Cenník | 686 | 1 000 až 1 300 | **„Čo je v 10 %“** (zoznam služieb) a **„Čo sa platí zvlášť“** (len ak to klient povolí, bez mesačných nákladov). Jedna veta o trhu („bežne sa stretnete s 15 až 20 %“), **so súhlasom klienta**. 2 až 3 ďalšie otázky. |
| Garantovaný prenájom (nová) | 0 | 1 000 až 1 300 | Ako funguje, pre koho je a pre koho nie, ako určíme nájom (podľa trhových hodnôt), kedy platíme (k 15. dňu vopred), dĺžka zmluvy a výpoveď (individuálne, dohodnú sa vopred), kto hradí náklady, porovnanie so správou za 10 %, 6 až 8 otázok. Fakty sú v `docs/fakty.md`. |
| Výsledky | 408 | 600 až 800 | Pri každom byte veta o lokalite (Staré Mesto, Nivy, Ružinov). Krátky odsek „Ako dosahujeme hodnotenia“ s odkazom na Služby. |
| O nás | 227 | 600 až 800 | Rozšíriť príbeh (od kedy, prečo, ako pracujeme), tím s fotkami a rolami, údaje o firme (s. r. o., IČO, sídlo), Superhost od kedy. Dôvera (E-E-A-T) je pri službách s peniazmi pre Google dôležitá. **Bez počtu bytov.** |
| Blog (zoznam) | 101 | 150 až 250 | Úvodný odsek, pre koho blog je. Rastie s článkami. |

Pravidlá textov ostávajú: bez pomlčiek, bez osobných sľubov („Tomáš sa vám ozve“), bez počtu bytov, cien za noc, mesačných nákladov, podielu z hrubého výnosu a poistenia.

---

## 6. Plán obsahu

> **Aktuálny plán článkov s termínmi a osnovami: [`docs/plan-blogu.md`](plan-blogu.md)** (13. 10. 2026). Tabuľka nižšie je pôvodný návrh.

Nové stránky a články v poradí. Pri každom: fráza, prečo, kto je dnes vo výsledkoch.

| # | Stránka alebo článok | Fráza | Kedy | Konkurencia v Googli |
|---|---|---|---|---|
| 1 | **Stránka Garantovaný prenájom bytu v Bratislave** (SK + EN) | garantovaný prenájom bratislava | október | slabá (Riešime bývanie, GarantovanýPrenájom.sk) |
| 2 | **Register krátkodobých prenájmov: čo urobiť do 28. 2. 2027** | register krátkodobých prenájmov | október (musí byť v indexe pred decembrom) | slabá (Podpora správy) |
| 3 | **Garantovaný prenájom alebo správa za 10 %? Porovnanie** | garantovaný prenájom vs správa | november | žiadny článok |
| 4 | **Ako vybrať správcu Airbnb v Bratislave: 8 otázok pred podpisom** | ako vybrať správcu airbnb | november | PropCherry, StayWell (všeobecné) |
| 5 | **Dane z Airbnb a krátkodobého prenájmu 2026** (DPH, živnosť, daň za ubytovanie). **Pred zverejnením účtovník.** | dane z airbnb, krátkodobý prenájom a dph | december | PropCherry, Právne noviny, Wellbens |
| 6 | **Krátkodobý alebo dlhodobý prenájom v Bratislave: čo vynesie viac** (vrátane „oplatí sa Airbnb“) | krátkodobý vs dlhodobý prenájom, oplatí sa airbnb v bratislave | december | PropCherry, StayWell, Gaudio |
| 7 | **Mestská daň za ubytovanie v Bratislave: kto ju platí a ako** | daň za ubytovanie bratislava | január | PropCherry, StayWell |
| 8 | **Airbnb alebo Booking: čo je lepšie pre majiteľa bytu** | airbnb vs booking | január | PropCherry, StayWell |
| 9 | **Stránky lokalít s našimi výsledkami** (Staré Mesto, Nivy, Ružinov; prípadne budovy Metropolis, Castle Hill). **Súhlas klienta s menami budov.** | airbnb staré mesto, krátkodobý prenájom ružinov, názov budovy | február | PropCherry (24 stránok budov, sú v top 10) |
| 10 | **Chcem prenajať byt v Bratislave: štyri možnosti** | chcem prenajať byt | február | veľké portály (všeobecné) |

Každý článok: 1 200 až 2 000 slov, fráza v titulku, H1, adrese a prvom odseku, 4 až 6 otázok na konci, odkaz na stránku so službou, autor Tomáš, vlastná fotka. Po zverejnení: požiadať o indexovanie v Search Console a pridať odkaz z príbuznej stránky.

Témy, ktoré **nepíšeme**: poistenie (pokyn klienta), susedia, škody, pokuty (nikto ich nehľadá), kalkulačka výnosu (klient nechce).

---

## 7. Lokálne SEO (Google Mapy)

### 7.1 Náš profil

**Overené 13. 10. 2026 priamo v správe profilu:** profil Rental Partners je overený a zverejnený. Kategória „Spoločnosť zaoberajúca sa správou budov“ (Property management company), telefón, otváracie hodiny, oblasť „Bratislava a oblasti v okolí“, web, logo a fotka sú vyplnené, sila profilu „Úplné informácie“.

| Za máj až október 2026 | |
|---|---|
| Zobrazenia profilu | 61 (Vyhľadávanie mobil 20, Mapy mobil 16, Vyhľadávanie počítač 13, Mapy počítač 12) |
| Interakcie (telefonáty, prekliky na web) | 0 |
| Recenzie | 0 |

*Oprava z 11. 10.:* neprihlásený testovací prehliadač profil v Mapách nenašiel, preto som písal, že ho verejne nevidno. To neplatí, Mapy ho ukazujú (28 zobrazení). Firma bez adresy pre zákazníkov sa v Mapách zobrazuje podľa oblasti a vzdialenosti, nie vždy na presný dopyt.

**Hlavný problém je 0 recenzií.** Konkurenti v mapovom bloku majú 12 až 89 recenzií, bez nich sa do prvej trojky nedostaneme.

### 7.2 Kto je v Mapách

| Dopyt | Prvé výsledky v Mapách |
|---|---|
| správa airbnb bratislava | StayWell (0 recenzií), URBANIO (5,0 · 19), PVK Airbnb Management (5,0 · 48), krasnybyt.sk (4,9 · 21), upratovacie firmy |
| správa krátkodobého prenájmu bratislava | prenájom „za 3 dni“ (4,7 · 12), StayWell (0), krasnybyt.sk (4,9 · 21), Moderný prenájom (0), Renthub (4,7 · 89), realitky |

B&B Management, PropCherry, LIVE-IN ani Fierce Homes v mapovom bloku nie sú. **Konkurencia v Mapách je slabá:** firma so správnou kategóriou, opísanými službami a 10 až 20 recenziami sa môže dostať do prvej trojky.

### 7.3 Čo urobiť

1. ~~Zistiť, prečo profil nie je vidieť~~ Profil je v poriadku (13. 10.).
2. Hlavná kategória „Property management company“ (Správa nehnuteľností), ďalšie: „Short term apartment rental agency“ alebo podobné, ak existuje.
3. Adresa: zobraziť Námestie 1. mája **len ak tam klienti môžu reálne prísť** v otváracích hodinách. Inak ostať firmou s oblasťou pôsobenia (Google inak profil pozastaví).
4. Doplniť logo, titulnú fotku, 10 a viac fotiek bytov, popis s „správa Airbnb a Booking v Bratislave, garantovaný prenájom“, služby s popismi, dátum vzniku, odkaz na web.
5. **Recenzie:** požiadať všetkých majiteľov, s ktorými klient spolupracuje. Claude pripraví krátku správu s priamym odkazom na napísanie recenzie. Na každú recenziu odpovedať.
6. Raz za 2 týždne príspevok v profile (nový článok, novinka k registru).
7. Rovnaký názov, adresa a telefón všade (web, profil, katalógy): „Rental Partners s. r. o., Námestie 1. mája 8062/11, 811 06 Bratislava, +421 903 989 040“.

---

## 8. Spätné odkazy a dôvera

### 8.1 Stav

| | My | Konkurenti |
|---|---|---|
| Vek domény | 1 mesiac (9/2026) | 1,5 až 5 rokov |
| Zmienky mimo webu | Finstat, Valida | Facebook, Instagram, YouTube, Bazoš, Reddit, Refresher, Trend, SME, Azet, Profesia |

Presné počty spätných odkazov som nemeral: **Ahrefs a Similarweb sú ako konektory nainštalované, ale nie sú autorizované.** Ak ich chceš použiť, treba ich prihlásiť v nastaveniach konektorov (claude.ai) alebo cez `/mcp`. Potom doplním presné čísla pre nás aj konkurentov.

B&B Management je prvý napriek najslabšiemu webu, čo ukazuje, že v tejto nike rozhoduje hlavne vek a dôvera domény, nie dĺžka textov. Preto sú odkazy a recenzie v pláne hneď za indexom a titulkami.

### 8.2 Kde získať odkazy (zoradené podľa pomeru hodnota a námaha)

| # | Zdroj | Hodnota | Námaha | Kto |
|---|---|---|---|---|
| 1 | **Katalógy firiem:** Firmy.sk, Azet katalóg, Zlaté stránky, Najisto, Bing Places, Apple Business Connect, LinkedIn stránka firmy | stredná (potvrdia firmu a adresu) | 2 h spolu | ty alebo klient, Claude pripraví texty |
| 2 | **Bazoš:** inzerát „Správa bytu na Airbnb a Booking v Bratislave za 10 %“ (konkurentov inzerát je v top 10 pre 3 frázy) | stredná | 20 min, obnovovať | klient |
| 3 | **Partneri:** upratovacia firma, realitky, účtovník, developeri, s ktorými klient spolupracuje. Riadok „odporúčame“ s odkazom | vysoká (tematicky blízke weby) | podľa vzťahov | klient |
| 4 | **Médiá k registru:** v decembri až februári budú hľadať ľudí z praxe. Krátky e-mail redakciám (SME, Refresher, Trend, Startitup, Nehnutelnosti.sk magazín) s ponukou komentára a faktami | **veľmi vysoká** | 2 až 3 h | Claude pripraví e-mail, posiela klient |
| 5 | **Odborné články pre realitné weby a blogy** (Bezrealitky blog, Nehnutelnosti.sk magazín): téma register alebo garantovaný prenájom, s odkazom na nás | vysoká | 1 článok mesačne | Claude píše, klient schvaľuje |
| 6 | **Meno firmy na Bookingu:** dnes „Spravuje Tomáš“, zmeniť na „Rental Partners“. Nie je to odkaz, ale zmienka značky na stovkách stránok bytov | nízka až stredná | 15 min | klient |
| 7 | **Fóra:** vlákno „Oplatí sa Airbnb“ na r/Bratislava je v top 5 pre 4 frázy, Modrý koník. Len vecná odpoveď s uvedením, kto píše | nízka | 30 min | voliteľné |

Čo **nerobiť**: kupovať odkazy, katalógy typu „zoznam 500 webov“, výmeny odkazov s nesúvisiacimi webmi. Google to pozná a pri novej doméne to môže uškodiť.

---

## 9. Plán krokov

| Kedy | Krok | Kto | Súhlas klienta |
|---|---|---|---|
| **Týždeň 1** | ~~Search Console: indexovanie, dôvody, sitemap~~ hotové 13. 10. | Claude | nie |
| | ~~Google profil: zistiť viditeľnosť~~ hotové 13. 10., profil je v poriadku, chýbajú recenzie | Claude | nie |
| | Bing Webmaster Tools, presmerovanie vercel.app (T8, T10) | Claude | nie |
| | ~~Technické opravy T2 až T8~~ hotové 13. 10. | Claude | nie |
| | Titulky, popisy a H1 podľa mapy (kap. 4.3, T1) | Claude | **áno** |
| **Týždne 2 až 3** | Stránka Garantovaný prenájom SK + EN | Claude píše, klient overí | **áno** |
| | Článok o registri | Claude píše, klient overí | **áno** |
| | Rozšírenie Služieb, Cenníka, O nás (kap. 5) a interné odkazy (kap. 2.3) | Claude | **áno** (texty) |
| | Katalógy firiem, Bazoš, meno na Bookingu (kap. 8.2) | ty alebo klient, Claude pripraví texty | áno |
| | Žiadosť o recenzie majiteľom (kap. 7.3) | klient, Claude pripraví správu | áno |
| **Mesiac 2** | Články 3 a 4, e-mail médiám k registru, oslovenie partnerov | Claude a klient | áno |
| **Mesiace 3 až 4** | Články 5 až 8 (daňový s účtovníkom), stránky lokalít | Claude a klient | áno |
| **Každý mesiac** | Meranie (kap. 10), úprava titulkov podľa toho, na čo nás Google začne ukazovať | Claude | nie |

---

## 10. Meranie

**Search Console → Výkon**, raz mesačne, pre tieto frázy: správa airbnb bratislava · správa bytu airbnb · airbnb management bratislava · správca airbnb · správa krátkodobého prenájmu · garantovaný prenájom bratislava · garantovaný prenájom bytu · register krátkodobých prenájmov · krátkodobý prenájom bytu bratislava · short term rental management bratislava.

**Východisko (13. 10. 2026):** 8 kliknutí, 151 zobrazení, priemerná pozícia 12,5. Dopyty: rental partners (3 kliknutia, pozícia 3,9), rent partner (1), krátkodobý prenájom bytu bratislava (1 kliknutie, pozícia 10), krátkodobý prenájom (22 zobrazení, pozícia 23,5), krátkodobý prenájom bratislava (16 zobrazení, pozícia 19,1). Článok sa teda už zobrazuje na svoju frázu.

**Google profil → Výkon:** zobrazenia v Mapách, telefonáty, kliknutia na web. Východisko: 61 zobrazení, 0 interakcií, 0 recenzií.

**Vercel Analytics:** návštevy z vyhľadávania a ktoré stránky vedú na Kontakt.

| Cieľ | Do |
|---|---|
| Všetkých 16 stránok (a nové) v indexe | koniec októbra 2026 |
| 10 recenzií na Google profile | koniec novembra 2026 |
| Top 10 pre „garantovaný prenájom bratislava“ a článok o registri | december 2026 |
| Top 3 v Mapách pre „správa airbnb bratislava“ | február 2027 |
| Top 5 pre „správa airbnb bratislava“ vo výsledkoch | jún 2027 |

---

## 11. Čo potrebujeme

**Od teba:** ~~prihlásenie do Search Console a Google profilu~~ hotové 13. 10. cez tvoj Chrome. Voliteľne Bing Webmaster Tools a autorizácia Ahrefs pre presné spätné odkazy.

**Od klienta:**

1. Súhlas s novými titulkami a textom štítku nad nadpisom na domove, Službách a Cenníku.
2. Súhlas so stránkou Garantovaný prenájom a či má byť v hlavnom menu.
3. Či môžeme v Cenníku napísať, že na trhu je bežne 15 až 20 %, a čo sa platí mimo 10 %.
4. Či majú v sídle na Námestí 1. mája otvorené pre klientov (kvôli adrese v Google profile).
5. Kontakty na majiteľov kvôli recenziám.
6. Partneri, ktorí dajú odkaz.
7. Či Tomáš chce byť zdrojom pre médiá k registru.
8. Či môžeme menovať budovy (Metropolis, Castle Hill) na stránkach lokalít.
9. Zmeniť na Bookingu „Spravuje Tomáš“ na „Rental Partners“.

---

## Obmedzenia

- Pozície sú z Googlu cez Startpage bez polohy a histórie, na google.sk v Bratislave sa môžu líšiť o pár miest. Mapy sú priamo z Google Máp.
- Search Console a Google profil sú doplnené podľa skutočných údajov z 13. 10. 2026.
- Spätné odkazy sú odhad zo zmienok vo vyhľadávaní, kým nebude autorizovaný Ahrefs.
- Objemy hľadaní sú rozpätia z Keyword Planneru bez aktívnej kampane.
