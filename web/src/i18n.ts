// Jazyky webu: slovenčina je predvolená (bez predpony), angličtina beží pod /en/….
// Anglické adresy sú preložené (lepšie pre vyhľadávanie), preto je mapa dvojíc explicitná.
export type Lang = 'sk' | 'en';

export const langOf = (pathname: string): Lang => (pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'sk');

/** Dvojice stránok: slovenská adresa → anglická. Blog anglickú verziu nemá. */
export const pairs: Record<string, string> = {
  '/': '/en',
  '/sluzby': '/en/services',
  '/cennik': '/en/pricing',
  '/vysledky': '/en/results',
  '/o-nas': '/en/about',
  '/kontakt': '/en/contact',
  '/ochrana-osobnych-udajov': '/en/privacy',
};

/** Adresa tej istej stránky v druhom jazyku, ak existuje. */
export function counterpart(path: string): string | null {
  if (langOf(path) === 'en') return Object.keys(pairs).find((sk) => pairs[sk] === path) ?? null;
  return pairs[path] ?? null;
}

const sk = {
  home: '/',
  contact: '/kontakt',
  privacy: '/ochrana-osobnych-udajov',
  nav: [
    { href: '/sluzby', label: 'Služby' },
    { href: '/cennik', label: 'Cenník' },
    { href: '/vysledky', label: 'Výsledky' },
    { href: '/o-nas', label: 'O nás' },
    { href: '/kontakt', label: 'Kontakt' },
  ],
  homeAria: 'Rental Partners, domov',
  mainNav: 'Hlavná navigácia',
  mobileNav: 'Mobilná navigácia',
  phoneLabel: '0903 989 040',
  callTomas: 'Zavolať Tomášovi',
  callTomasAria: 'Zavolať Tomášovi na',
  call: 'Zavolať',
  menuOpen: 'Otvoriť menu',
  menuClose: 'Zavrieť menu',
  cta: 'Chcem odhad výnosu',
  ctaEyebrow: 'Nezáväzne a zadarmo',
  switchLabel: 'EN',
  switchMenu: 'English version',
  switchAria: 'Switch to the English version',
  skip: 'Preskočiť na obsah',
  breadcrumbHome: 'Domov',
  ogAlt: 'Rental Partners, správa bytov a garantovaný nájom v Bratislave',
  footer: {
    tagline: 'Správa bytov a garantovaný nájom v Bratislave.',
    pages: 'Stránky',
    contact: 'Kontakt',
    ratings: 'Hodnotenia hostí',
    airbnb: 'Airbnb · 4,89 z 5 · Superhost',
    booking: 'Booking · 9,6 z 10 · 695 hodnotení',
    airbnbProfile: 'Profil na Airbnb →',
    privacy: 'Ochrana osobných údajov',
    cookies: 'Nastavenia cookies',
    links: [
      { href: '/sluzby', label: 'Služby' },
      { href: '/cennik', label: 'Cenník' },
      { href: '/vysledky', label: 'Výsledky' },
      { href: '/o-nas', label: 'O nás' },
      { href: '/blog', label: 'Blog' },
      { href: '/kontakt', label: 'Kontakt' },
    ],
  },
  cookies: {
    title: 'Cookies na meranie návštevnosti',
    text: 'Okrem nevyhnutných cookies by sme radi použili Google Analytics, aby sme vedeli, ktoré stránky vám pomáhajú. Meranie zapneme len s vaším súhlasom a kedykoľvek ho zmeníte v pätičke.',
    more: 'Viac o cookies',
    accept: 'Súhlasím s meraním',
    reject: 'Iba nevyhnutné',
  },
  ld: {
    description: 'Správa bytov na krátkodobý prenájom (Airbnb a Booking) a garantovaný nájom v Bratislave. Byt spravujeme za 10 % z obratu, alebo si ho prenajmeme a platíme pevný mesačný nájom.',
    catalog: 'Modely spolupráce',
    offerA: 'Správa bytu',
    offerADesc: 'Prevádzka bytu na Airbnb a Booking za 10 % z obratu: fotenie, inzeráty, hostia, upratovanie, údržba a mesačné vyúčtovanie.',
    unit: '% z obratu',
    offerB: 'Garantovaný nájom',
    offerBDesc: 'Byt si prenajmeme a majiteľovi platíme dohodnutý pevný nájom každý mesiac bez ohľadu na obsadenosť.',
  },
};

const en: typeof sk = {
  home: '/en',
  contact: '/en/contact',
  privacy: '/en/privacy',
  nav: [
    { href: '/en/services', label: 'Services' },
    { href: '/en/pricing', label: 'Pricing' },
    { href: '/en/results', label: 'Results' },
    { href: '/en/about', label: 'About' },
    { href: '/en/contact', label: 'Contact' },
  ],
  homeAria: 'Rental Partners, home',
  mainNav: 'Main navigation',
  mobileNav: 'Mobile navigation',
  phoneLabel: '+421 903 989 040',
  callTomas: 'Call Tomáš',
  callTomasAria: 'Call Tomáš on',
  call: 'Call',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  cta: 'Get a free estimate',
  ctaEyebrow: 'Free and without obligation',
  switchLabel: 'SK',
  switchMenu: 'Slovenská verzia',
  switchAria: 'Prepnúť na slovenskú verziu',
  skip: 'Skip to content',
  breadcrumbHome: 'Home',
  ogAlt: 'Rental Partners, Airbnb property management and guaranteed rent in Bratislava',
  footer: {
    tagline: 'Airbnb property management and guaranteed rent in Bratislava.',
    pages: 'Pages',
    contact: 'Contact',
    ratings: 'Guest ratings',
    airbnb: 'Airbnb · 4.89 out of 5 · Superhost',
    booking: 'Booking · 9.6 out of 10 · 695 reviews',
    airbnbProfile: 'Airbnb profile →',
    privacy: 'Privacy policy',
    cookies: 'Cookie settings',
    links: [
      { href: '/en/services', label: 'Services' },
      { href: '/en/pricing', label: 'Pricing' },
      { href: '/en/results', label: 'Results' },
      { href: '/en/about', label: 'About' },
      { href: '/en/contact', label: 'Contact' },
    ],
  },
  cookies: {
    title: 'Cookies for traffic measurement',
    text: 'Besides the necessary cookies we would like to use Google Analytics to see which pages help you. We only switch measurement on with your consent, and you can change it any time in the footer.',
    more: 'More about cookies',
    accept: 'I agree to measurement',
    reject: 'Necessary only',
  },
  ld: {
    description: 'Short-term rental management (Airbnb and Booking) and guaranteed rent in Bratislava. We manage your flat for 10 % of turnover, or rent it from you and pay a fixed monthly rent.',
    catalog: 'Ways to work together',
    offerA: 'Property management',
    offerADesc: 'Running your flat on Airbnb and Booking for 10 % of turnover: photography, listings, guests, cleaning, maintenance and a monthly statement.',
    unit: '% of turnover',
    offerB: 'Guaranteed rent',
    offerBDesc: 'We rent the flat and pay the owner an agreed fixed rent every month regardless of occupancy.',
  },
};

export const t: Record<Lang, typeof sk> = { sk, en };
