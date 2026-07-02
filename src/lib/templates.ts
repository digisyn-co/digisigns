// Central registry of every template on the platform.
// The DigiSigns root landing page (src/pages/index.astro) maps over this
// array to render the "Coming Soon" grid and the featured showcase block.
// Flip `status` to "live" and set the `pages` flags as real routes land
// under src/pages/templates/<slug>/ — do that the moment a template gets
// a working Home page, so it becomes clickable instead of a preview card.

export type TemplateStatus = "live" | "in-progress";

export interface TemplateMeta {
  slug: string; // used in the URL: /templates/<slug>/
  name: string; // display name from the Stitch "Coming Soon" card
  industry: string;
  tagline: string;
  previewImage: string; // Stitch-generated preview image (placeholder until real screens land)
  releaseNote: string; // badge text shown on the card, e.g. "March Release"
  status: TemplateStatus;
  featured: boolean; // true = shown in the large "Main Showcase" block instead of the grid
  pages: {
    home: boolean;
    about: boolean;
    services: boolean;
    serviceDetail: boolean;
    industries: boolean;
    contact: boolean;
    blog: boolean;
    testimonials: boolean;
    careers: boolean;
    faq: boolean;
    caseStudies: boolean;
  };
}

const noPages = {
  home: false,
  about: false,
  services: false,
  serviceDetail: false,
  industries: false,
  contact: false,
  blog: false,
  testimonials: false,
  careers: false,
  faq: false,
  caseStudies: false,
};

export const templates: TemplateMeta[] = [
  {
    slug: "accounting-luxury",
    name: "Estate & Accord",
    industry: "Accounting / Luxury Wealth Advisory",
    tagline:
      "A monochrome-and-gold advisory system for multi-generational wealth firms — dynastic trust design, estate architecture, institutional audit.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAcbn0huadOpMgP9eLYDSOQIslf1x6tK59fSqO86bTqPPyy3YBsmvI8XObKttv7rQq4zZ_PqJ_Xx1rpoh7NORLXtd_XIzaJ6uHq1YBRkcUp8ijV7szzQyhUaTeciuYbcyoaFduMW87NIZSP7AViX856cAZ2tsLPUgyMoKpRAZCatBCDcsKx3CkhrNyBvgJkdZKm4mGEt3khmh6KTM1sGfl4kJlCHgoboHkkuY4Rw-NxpoCHBX65EHoue6Nq0yx45lgsRCTeG4y_R-4",
    releaseNote: "Live",
    status: "live",
    featured: true,
    pages: {
      ...noPages,
      home: true,
      about: true,
      services: true,
      serviceDetail: true,
      industries: true,
      contact: true,
    },
  },
  {
    slug: "b2b-executive-suite",
    name: "The Executive Suite",
    industry: "B2B Services",
    tagline:
      "A conversion-focused masterpiece for elite consultancy brands — deep tonal layering, fast performance, razor-sharp grid.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC53HaWDutBpb_dNVndbZS8WbTO6sSc5BD7Rg2K0V8uUzidMiFtxNlI-StleTD1B1qKmUZkhXmOpo7Fabsr6IeVHLwKRUNYAOhEUZDkaCruWzc_JuhPuWV9P_9MiES44L_fh4HEAz0YmolNWZ-BgNychIAY1gtWkhlsk4HmNQXd9x7DTM6NeA7m9iC0GyaKVD70pRojK5twG4Nh4e1_sxveh0aZ-eCP_d1a0NCKRKDbL2kapy-eeqvrSRlPiFaDDkkkRJQR7L3BPtDo",
    releaseNote: "Premium System Release",
    status: "in-progress",
    featured: false,
    pages: { ...noPages },
  },
  {
    slug: "accounting-friendly",
    name: "Friendly Human Systems",
    industry: "Accounting / Tax Services",
    tagline: "Soft, approachable WordPress layout for personal tax services.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBh8K-nEH42gL2q_Sw_3LpT5_hjX3acLbqxbBdw1AQnZEg-e0u5XJhq2mRZIQpYTFDtAJ5P_KRSrT6OC4JbC2ijCXOALM47Y3OfdZgMLfZx9jfAeqH7XFlbtaYXPPdWeYFX2UuUgdcO8NY8fMblytkq6HVIbYXYUp1DAjWiSMeIbD3tkYNfFNBy0eotq0zsi3sOifDN8evPYRQ2BNQV75HbtcKj531aEZc7oN74GSMWWmbnrhj1hDZxhMt8buhM7Cj4WjnAmFrwhDz",
    releaseNote: "March Release",
    status: "in-progress",
    featured: false,
    pages: { ...noPages },
  },
  {
    slug: "ai-growth-engine",
    name: "AI Growth Engine",
    industry: "AI Agency / SaaS Funnels",
    tagline: "Futuristic AI agency funnel engineered for high-speed conversion.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5BkuretjJY0lLeHUm6SafPGBuJLh3_2Xs-6gzRsihDJkF7ecH7fKm_ZqDSEu3hJq066H5KndEMEdVcQe_lr636otOFJE6JhVpSMkCdEGkvI6BvNPuOqRd_aa8JTZ0CSVV-2JR4YG-1s43N1Uj7wD2nwtc5TGHD7Dj-SL3HOvIFB5tRkYmLzJeNa0PRB5JoAKoJ_oTD_MSo7ci-N56mCbEWOVZq-TXgbMXYOZNXAgrZW0_tgBEj6cNV_nMRprsBK4_1d016Xx3r699",
    releaseNote: "In Development",
    status: "in-progress",
    featured: false,
    pages: { ...noPages },
  },
  {
    slug: "law-prestige",
    name: "Prestige Law",
    industry: "Legal / Litigation",
    tagline: "Razor-sharp executive litigation system — Playfair Display gravitas, marble-textured hero, bespoke case-detail pages.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5ogLz-qJhpPpShQsc_IfTabdSQGBCP0ULxglsDVvHdK-JFRqkBESapxg8ddHVjZObCks0eM55hjKKs4wuNXvROlJOEDOXr4J4NKi1gZHeuTIUeHG4SdN-Kp1anndEyBaLrO74CuvM4Jmn8ljOiSz-QV5XR7Ei2BXn3zSxdbw3tWpyxFwbk2jy1_K8KyOuuz-JIN1L4LZTIWDnDxo0QVz-xHoTd8L6mJvl2xCnOtzPq-6N-gpX6_SctEzFqAWOs0UiMeqPj0Q2uYEC",
    releaseNote: "Live",
    status: "live",
    featured: false,
    pages: {
      ...noPages,
      home: true,
      about: true,
      services: true,
      serviceDetail: true,
      industries: true,
      contact: true,
    },
  },
  {
    slug: "movers-premium",
    name: "RapidRelo",
    industry: "Moving / Relocation",
    tagline: "High-contrast industrial moving system with an instant quote calculator, block-shadow interactions, and zero rounded corners.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6yXz4-gDQZw73Ejx5w4vZUFIlPlpY1UmWUjFeR19np56dDtAem83Zb7gNxvojGTtM2NPKHoh3PRnmlCaAxqPerhdRFKuTajy1PtPiaR4qV5x1efBcOHh6M7pkd9473uz3kB9MpGvjZ-WytiaO1Uo8R9inxAsQux5MMnEgLmFZfzyFuFl0LUwAR-AQhibHYH3BMmCprn2h6vrUFZutchCyolZ_IoBxuC83x9CAqP_pcg9klmApsexMDHOXxZFa4_9yP7rC9nbb70Dm",
    releaseNote: "Live",
    status: "live",
    featured: false,
    pages: {
      ...noPages,
      home: true,
      about: true,
      services: true,
      serviceDetail: true,
      industries: true,
      contact: true,
    },
  },
  {
    slug: "creative-studio",
    name: "The Creative Collective",
    industry: "Digital Marketing / Creative Conversion Studio",
    tagline: "A vivid, kinetic portfolio system for brand and growth studios — bold gradients, editorial type scale, conversion-tuned case studies.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2TZdnsoUP8Lkn7jFtg98wKEb_G6JJOMfGg5OislOXuf73gfiSD5y-mAkz8_V6ffAWhfLRBUseHv_NkB9HMQjwrCnPA5CVtZf1rADI6XpGT8ddrpKLdvUYaDC_9bB31KcpH511H6vl36MS1VMFDAq5p4gP0zMpahP7qrHPvq6qHD8XBUrsYGcZv-yLQ8INr1KDkVNaRSygXDjNiP0p9vAN1oXJ3FeERTZiU9BQ3uLZLk5TqY2rY-gIq2kEld0LboaUwrMB2dAokVBK",
    releaseNote: "Live",
    status: "live",
    featured: false,
    pages: {
      ...noPages,
      home: true,
      about: true,
      services: true,
      serviceDetail: true,
      contact: true,
    },
  },
  {
    slug: "accounting-zen",
    name: "Zen Ledger Advisory",
    industry: "Accounting / Japanese Minimal",
    tagline: "A calm, precision-led accounting system with washi-paper texture, restrained typography, and a tax-strategy detail architecture.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5ooTRrEz0D2dq2lDOEIcCdn9CtxIgKcjf8XwS8QrTorrI9kU7oTGbc9dfNaHHLdi2lLNu_6EaioJfJW3y9d5z_PSCEYI3MkjwJdqA5TioNG1wJsk8N2Z3yhz3c-0PaBfY-gryepQXJmloSPMsY8btKwA0k4NavbpZ56rCA75SEUWw4kEyqc4yXz1SZ4CbJx75O1X55qCUeWKu-2gsQwccIHsBGJFm9RXf7JHcFV_IeVbIw1ffgDSbD0nYeBZgl0A9sujS3svIykLf",
    releaseNote: "Live",
    status: "live",
    featured: false,
    pages: {
      ...noPages,
      home: true,
      about: true,
      services: true,
      serviceDetail: true,
      industries: true,
      contact: true,
    },
  },
  {
    slug: "accounting-editorial",
    name: "Strategic Insight Advisory",
    industry: "Accounting / Editorial Aesthetic",
    tagline: "A magazine-style advisory presence for national accounting networks — long-form knowledge hub, editorial grid, authoritative type system.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFTfa8tl2USbm5BqSumts8C_JhIjcbJyC8lGshl9b89YTqUlwguIRmRdyI_7wQVttw9DzdMd0KXnldxGpJZLCB97i6ULfZCNGRelR-uZ4VZTtuvGmKfjJYPHl74gMZ5_Q3q9QScsCx2GMOiQ6TjLuG2B2FdPc5_S35LlVapntyLVSqg4vZAP_GN4T4ZbJv7gBNEj3atVR7rJ4zodl2xRy1kHwiWjdt8bGqzbxusmm1KegfP3koaQvu_7A4Cf-Wq5vJ2KSbELT1018a",
    releaseNote: "Live",
    status: "live",
    featured: false,
    pages: {
      ...noPages,
      home: true,
      about: true,
      services: true,
      serviceDetail: true,
      industries: true,
      contact: true,
    },
  },
  {
    slug: "electrician-industrial",
    name: "Industrial Infrastructure",
    industry: "Industrial / Trades",
    tagline: "Rugged industrial contractor build for reliability and portfolio showcase.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWnU-tMwzIbFzWrw9IDJGYym8cZQ13QYKw8y9nLVyMyJRaKLkfcGTxOaWkVKHlxpxTpiCPeQiT4Cg2ahelW1nL_T0PPjKf1fzMb80gBwKYKBxXRv8NCzvJr0k2ZIPbzrpSsJvUVJ51KH7fepQiB56DKpyLavesiVHmUJroofUw8ZTFdn0ep3k8ut_e39eV4bWC5RzRgL6GduDlbzZ1JExgsskZ75Lm5tdVbtcjrsY8dhr40tLa0FIlzs7jAvIr9qRW5CyA9PhJ9aDM",
    releaseNote: "",
    status: "in-progress",
    featured: false,
    pages: { ...noPages },
  },
];
