# Technické SEO

*www.rentalpartners.sk · 2026-10-13 · claude-seo v2.4.2 (seo-audit), Lighthouse 13 cez Chrome DevTools*

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
