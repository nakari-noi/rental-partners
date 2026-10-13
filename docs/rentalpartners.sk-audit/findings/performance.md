# Výkon (Core Web Vitals)

*www.rentalpartners.sk · 2026-10-13 · claude-seo v2.4.2 (seo-audit), Lighthouse 13 cez Chrome DevTools*

## Výkon (Core Web Vitals) · 85/100 (váha 10 %)

**Čo funguje**

- LCP 1,98 s na mobile pri spomalení CPU 4× a Slow 4G (hranica dobrého je 2,5 s), CLS 0,00
- TTFB 20 ms (Vercel, stránka z cache)
- Obrázky AVIF a WebP, 12 až 44 kB

**Zistenia**

### Nízke: LCP takmer celé tvorí oneskorenie vykreslenia

Prvok LCP je úvodný odsek s animáciou reveal-2 (priehľadnosť od 0, oneskorenie 0,25 s, trvanie 0,7 s). Vykreslenie navyše blokujú dva súbory CSS: vlastné štýly (624 ms na Slow 4G) a Google Fonts. Žiadne skutočné dáta od používateľov (CrUX) zatiaľ nie sú.

**Odporúčanie:** Úvodný odsek animovať len posunom bez priehľadnosti alebo vôbec. Zvážiť vloženie CSS do stránky (Astro build.inlineStylesheets) a vlastné hostovanie písiem Outfit a Nunito Sans.
