// Nastavenia webu, ktoré sa menia bez zásahu do stránok.
// Hodnoty sa berú z premenných prostredia (lokálne .env, na Verceli Settings → Environment Variables):
//   PUBLIC_GA_ID=G-XXXXXXXXXX     → zapne Google Analytics 4 vrátane cookie lišty (meranie beží až po súhlase)
//   PUBLIC_VERCEL_ANALYTICS=false → vypne Vercel Web Analytics (bez cookies, bez lišty; zapnuté od 7. 9. 2026)
// Kým nie je nastavené PUBLIC_GA_ID, cookie lišta sa nezobrazuje a Google Analytics nemeria.
export const site = {
  gaId: (import.meta.env.PUBLIC_GA_ID ?? '').trim(),
  vercelAnalytics: import.meta.env.PUBLIC_VERCEL_ANALYTICS !== 'false',
};
