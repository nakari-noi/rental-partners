# Rental Partners — dizajnový systém (smer C · Partnerský)

## Smerovka

- **Účel:** presvedčiť majiteľa bytu v Bratislave, aby si nechal nezáväzne odhadnúť výnos a zveril byt do správy.
- **Publikum:** majitelia bytov (prázdny/zdedený byt, dlhodobý prenajímateľ, unavený Airbnb host). Skenujú: *koľko to stojí, čo za to dostanem, komu byt zverujem.*
- **Tón:** partnerský, ľudský, konkrétny. Čísla a mechanizmy namiesto prídavných mien. Žiadne „bez starostí navždy", žiadne otázky ako návnada.
- **Zapamätateľná vec:** fotka bytu mierne naklonená (2°) s plávajúcou kartou hodnotenia — „byt + dôkaz" v jednom obraze. Opakuje sa v hlavičkách stránok.
- **Obmedzenia:** SK + EN, statický web, fotky bytov od klienta, kontaktné údaje zatiaľ chýbajú (označené `[DOPLNIŤ]`).

## Farby

| Token | Hodnota | Použitie |
|---|---|---|
| `--bg` | `#f6efe4` | podklad stránky (krémová) |
| `--surface` | `#ffffff` | biele pásy a karty |
| `--sand` | `#e9dcc6` | štítky, jemné pozadia |
| `--sand-deep` | `#dccbb0` | placeholder fotiek, oddeľovače |
| `--ink` | `#2b2118` | text, tmavé tlačidlá, pätička |
| `--ink-soft` | `#6b5b4e` | sekundárny text |
| `--ink-muted` | `#8a7a68` | popisky, pomocný text |
| `--accent` | `#c9694a` | terakota — primárne tlačidlo, zvýraznené slovo, ikony |
| `--accent-deep` | `#a8533a` | hover terakoty |
| `--sage` | `#6e8b6a` | šalviová — hodnotenia, potvrdenia, „hotovo" |
| `--sage-soft` | `#e3eadf` | pozadie šalviových štítkov |

Pravidlo: terakota = akcia a dôraz; šalviová = dôkaz a potvrdenie. Nikdy obe na jednom prvku.

## Typografia

- **Nadpisy:** Outfit 600/700 (fallback Trebuchet MS, Segoe UI)
- **Text:** Nunito Sans 400/600/700 (fallback Segoe UI, Arial)

| Úroveň | Veľkosť / riadkovanie | Váha |
|---|---|---|
| H1 | 62 / 1.06 | 700, letter-spacing −0.02em |
| H1 podstránka | 52 / 1.08 | 700 |
| H2 | 38 / 1.15 | 700 |
| H3 | 22 / 1.3 | 600 |
| Lead | 18 / 1.65 | 400 |
| Body | 16 / 1.6 | 400 |
| Small | 14 / 1.55 | 400 |
| Štítok | 13 / 1 | 700 |

## Rozostupy a tvary

- Škála: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 88
- Okraj stránky: 64px, šírka obsahu 1200px (max), mobil 20px
- Rádius: tlačidlá a štítky `999px`, karty `20px`, veľké bloky `28px`, fotky `28px`
- Tieň: iba na plávajúcich prvkoch — `0 12px 32px rgba(43,33,24,0.12)`
- Žiadne karty v kartách: karta sedí priamo na páse (krémovom alebo bielom), nie v ďalšom kontajneri.

## Komponenty

- **Primárne tlačidlo:** terakota, biely text, 17×30px padding, pill. Jedna primárna akcia na stránku: „Chcem odhad výnosu".
- **Sekundárne tlačidlo:** ink podklad, krémový text (v navigácii) alebo text + šípka.
- **Štítok:** sand podklad, 8×16px, 13px 700.
- **Karta dôkazu:** biela, 20px rádius, ikona v šalviovom kruhu 44px, tieň.
- **Karta služby:** sand podklad na bielom páse, ikona terakota 26px, H3 + small.
- **Ikony:** inline SVG, 2px ťah, 24px mriežka, zaoblené konce. Nikdy emoji.

## Hierarchia a rytmus stránky (aby sa informácie nestrácali)

- **Eyebrow nad každým H2** — 13px, 700, uppercase, terakota — jedno-dvojslovný názov sekcie (Služby, Modely spolupráce, Porovnanie, Otázky, Tím…). Oko podľa neho skenuje stránku.
- **Striedanie pásov**: krémová → biela → piesok → krémová. Dva rovnaké pásy za sebou = problém. Dlhé zoznamy (Služby) striedajú krémový/biely riadok.
- **Jeden tmavý blok na stránke** okrem pätičky: záverečná výzva (CTA) je tmavý zaoblený blok s krémovým textom, šalviovým nadpiskom a terakotovým tlačidlom. Tabuľky majú tmavú hlavičku.
- **Čísla ako kotvy**: poradové čísla v tmavom krúžku, veľké čísla (10 %, 4,89) v Outfit 44–112px.
- Platformy uvádzať vždy spolu: „Airbnb a Booking", nie iba Airbnb.

## Čo nerobíme

- gradienty, sklo, fialová, blob dekorácie
- obrovský hero text bez obsahu
- popisovanie funkcií webu vo webe
- vymyslené čísla — chýbajúce fakty sú vždy `[DOPLNIŤ]`
