# Pripravenosť na AI vyhľadávanie

*www.rentalpartners.sk · 2026-10-13 · claude-seo v2.4.2 (seo-audit), Lighthouse 13 cez Chrome DevTools*

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
