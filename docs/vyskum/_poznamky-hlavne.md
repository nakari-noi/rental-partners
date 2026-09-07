# Pracovné poznámky — hlavná vetva výskumu (legislatíva + trh)
*Zbierané 7. 9. 2026. Toto sú surové poznámky, finálna správa je v docs/vyskum-blog-temy.md*

## A. Legislatíva — overená časová os

- Nariadenie EP a Rady (EÚ) 2024/1028 z 11. 4. 2024, uplatňuje sa od 20. 5. 2026.
  Registračný postup je povinný pre štáty, ktoré vyžadujú prenos údajov od platforiem.
- SR: vláda schválila návrh 24. 3. 2026; NR SR schválila 2. 6. 2026 (78 hlasov koalície);
  prezident podpísal 11. 6. 2026.
- Účinnosť zákona: 1. 1. 2027.
- Hostitelia aktívni do 31. 12. 2026 sa musia zapísať do 28. 2. 2027.
- Od 1. 3. 2027: registrácia PRED prvým poskytnutím + začínajú sankcie.
- Zmeny údajov a výmaz jednotky: do 30 dní.
- Register spravuje Ministerstvo cestovného ruchu a športu, je to jednotné digitálne
  kontaktné miesto; verejne viditeľné: adresa, typ jednotky, počet lôžok, registračné číslo.
- Pokuty (finálne znenie): FO nepodnikateľ 100–1 000 € (opakovanie do 5 rokov až 2×),
  FO-podnikateľ a PO 1 000–3 000 €, platformy 3 000–30 000 €.
  POZOR: staršie články (aj advokátske) uvádzajú z návrhu 100–1 500 € a 2 000–5 000 € — neplatné.
  Startitup uvádza pre platformy aj "až 6 % globálneho obratu" cez Radu pre mediálne služby — neoverené, iný režim.

### Dôsledok pre obsah
Väčšina slovenských článkov tvrdí "od 20. 5. 2026 platformy overujú registráciu".
Pre slovenského majiteľa to dnes (september 2026) NEPLATÍ — registrácia sa spúšťa až 2027.
Toto je najsilnejšia obsahová medzera: nikto nepíše zrozumiteľne "čo platí dnes a čo od kedy".

## B. Ostatné povinnosti (kontext)

- Živnosť na ubytovacie služby, ak sú doplnkové služby (upratovanie, výmena bielizne, check-in).
- Rozhodujúci nie je názov zmluvy, ale realita služieb (SKDP, D. Bednáriková).
- § 6 ods. 1 (podnikanie) vs § 6 ods. 3 (prenájom): pri prenájme oslobodenie 500 €/rok,
  ale bez paušálnych výdavkov; pri podnikaní paušál 60 %, max 20 000 €/rok.
- Registrácia ako identifikovaná osoba (§ 7a zákona o DPH) kvôli provízii od Airbnb Ireland —
  PRED prijatím prvej služby. Podľa daňovej poradkyne jedna z najčastejších chýb.
- DPH: znížená sadzba 5 % na ubytovanie (od 2025). Registračné hranice 50 000 € / 62 500 €.
  Staršie články uvádzajú 49 790 € — neaktuálne.
- Splátka hypotéky nie je daňový výdavok, len úroky.
- Miestna daň za ubytovanie Bratislava: 3,50 € Staré Mesto, 3,00 € ostatné MČ, max 60 nocí
  na jedného platiteľa za rok. Mesto vybralo v 2025 takmer 1,3 mil. € (cca 395 306 prenocovaní).
- Kniha ubytovaných, hlásenie cudzincov cudzineckej polícii (zákon 404/2011).
- Prevádzkový poriadok schvaľuje RÚVZ (zákon 355/2007, vyhláška 259/2008).
- DAC7: platformy hlásia príjmy od 2023; za rok 2024 finančná správa identifikovala
  vyše 5 300 poskytovateľov krátkodobého ubytovania.

## C. Trh Bratislava — POZOR, zdroje si protirečia

| Zdroj | Ponuky | Obsadenosť | ADR | Ročný výnos |
|---|---|---|---|---|
| AirDNA (júl 2026) | 2 437 | 65 % | 89 USD | 19 700 USD |
| AirROI (aug 2025–júl 2026) | 2 036 | 40,2 % | 107 USD | 11 223 USD |
| Pravda (9. 7. 2026) | ~3 400 celkovo, ~2 000 Airbnb | 65 % | 94 € | 600–2 400 €/mes |
| Postoj | — | — | — | ~1 150 €/mes priemer, leto 1 400+, január ~840 € |

Rozdiel obsadenosti 65 % vs 40,2 % je metodický (dostupné noci vs všetky noci).
V blogu NIKDY neuvádzať 65 % ako "bežný výsledok" bez vysvetlenia.

Sezónnosť (AirROI): najsilnejšie december, august, máj (~49,8 % obsadenosť);
najslabšie január, február, júl (~33,7 %); najhorší mesiac 29,5 %.
Pozn.: Postoj tvrdí, že najsilnejšie je leto — zdroje sa nezhodujú aj v sezónnosti.

Štruktúra ponuky (AirROI): 92,6 % celé byty, 64,3 % jednoizbové, priem. kapacita 3,6 hosťa.

Štruktúra trhu (SME Index, júl 2026): 70 % bratislavského trhu ovládajú profesionáli
s viac než jednou nehnuteľnosťou; 34 megahostiteľov s 10+ nehnuteľnosťami drží tretinu trhu.
Najväčší: Patrik (104), BNB Management (93), Bratislava.host, RS Properties (59), LAM Apartments (50).
Koncentrácia: 157 bytov okolo Sky Park a Eurovea, Obchodná 69 inzerátov.

Turizmus: za prvých 5 mesiacov 2026 prenocovania +17,6 % medziročne, o 2,4 % nad rekordným 2019.
950 205 prenocovaní, ~70 % cudzinci, priemerný pobyt 2 noci.

## D. Ekonomika (finfin.sk, modelový prepočet)

1-izbový byt Staré Mesto: 60 €/noc, pri 65 % obsadenosti 18 960 €/rok hrubý,
čistý zisk po zdanení 6 792 €/rok. 3-izbový: 100 €/noc, 23 700 € hrubý, 7 918 € čistý.
Provízie 15 %, upratovanie a správa ~15 %, energie 1 800–2 400 €/rok.
Vlastný odhad realistickej obsadenosti podľa článku: 55–65 % realita, 70–75 % výborne riadený, 90 % ilúzia.

## E. Poistenie — silná obava

- Bežné poistenie bytu NEKRYJE škody spôsobené hosťami (len napr. požiar).
- Pripoistenie zodpovednosti nájomcu sa výslovne NEVZŤAHUJE na krátkodobý prenájom (<6 mes.) a Airbnb.
- AirCover: overenie hosťa, ochrana hostiteľa 3 mil. USD, poistenie zodpovednosti 1 mil. USD.
  Ale nie je to plnohodnotné poistenie a nekryje všetko.

## F. Konkurencia (doplnok k SEO vetve)

- B&B Management: KLASIKA 10 % (jedna platforma), PRO 17 % (15+ platforiem, AI ceny "Elistra"),
  bez viazanosti, 2-mesačná výpovedná lehota. Tvrdí +230 % oproti dlhodobému nájmu.
  => Rental Partners má 10 % za Airbnb AJ Booking = konkurenčná výhoda oproti ich KLASIKE.
- Fierce Homes: má blog, ale opustený (~2024).
- RS Properties: 59 nehnuteľností, patrí medzi megahostiteľov.

## G. Verejná mienka — dôležité pre tón blogu

Pravda (9. 7. 2026): anketa 478 respondentov — väčšina si myslí, že Airbnb zhoršuje
dostupnosť bývania. Články sú voči prenajímateľom kritické.
=> Blog nesmie znieť ako "ako rýchlo zbohatnúť na Airbnb". Tón: zodpovedný profesionálny
prevádzkovateľ, ktorý rieši susedov, dane a pravidlá.
