# SEO na stránkach

*www.rentalpartners.sk · 2026-10-13 · claude-seo v2.4.2 (seo-audit), Lighthouse 13 cez Chrome DevTools*

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
