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
    slug: "b2b-executive-suite",
    name: "The Executive Suite",
    industry: "B2B Services",
    tagline:
      "A conversion-focused masterpiece for elite consultancy brands — deep tonal layering, fast performance, razor-sharp grid.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC53HaWDutBpb_dNVndbZS8WbTO6sSc5BD7Rg2K0V8uUzidMiFtxNlI-StleTD1B1qKmUZkhXmOpo7Fabsr6IeVHLwKRUNYAOhEUZDkaCruWzc_JuhPuWV9P_9MiES44L_fh4HEAz0YmolNWZ-BgNychIAY1gtWkhlsk4HmNQXd9x7DTM6NeA7m9iC0GyaKVD70pRojK5twG4Nh4e1_sxveh0aZ-eCP_d1a0NCKRKDbL2kapy-eeqvrSRlPiFaDDkkkRJQR7L3BPtDo",
    releaseNote: "Premium System Release",
    status: "in-progress",
    featured: true,
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
    name: "Prestige Legal System",
    industry: "Legal",
    tagline: "Traditional legal firm system with authoritative, structured styling.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5ogLz-qJhpPpShQsc_IfTabdSQGBCP0ULxglsDVvHdK-JFRqkBESapxg8ddHVjZObCks0eM55hjKKs4wuNXvROlJOEDOXr4J4NKi1gZHeuTIUeHG4SdN-Kp1anndEyBaLrO74CuvM4Jmn8ljOiSz-QV5XR7Ei2BXn3zSxdbw3tWpyxFwbk2jy1_K8KyOuuz-JIN1L4LZTIWDnDxo0QVz-xHoTd8L6mJvl2xCnOtzPq-6N-gpX6_SctEzFqAWOs0UiMeqPj0Q2uYEC",
    releaseNote: "Coming Soon",
    status: "in-progress",
    featured: false,
    pages: { ...noPages },
  },
  {
    slug: "movers-premium",
    name: "Premium Moving Systems",
    industry: "Moving / Relocation",
    tagline: "White-glove relocation service system optimized for lead capture.",
    previewImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6yXz4-gDQZw73Ejx5w4vZUFIlPlpY1UmWUjFeR19np56dDtAem83Zb7gNxvojGTtM2NPKHoh3PRnmlCaAxqPerhdRFKuTajy1PtPiaR4qV5x1efBcOHh6M7pkd9473uz3kB9MpGvjZ-WytiaO1Uo8R9inxAsQux5MMnEgLmFZfzyFuFl0LUwAR-AQhibHYH3BMmCprn2h6vrUFZutchCyolZ_IoBxuC83x9CAqP_pcg9klmApsexMDHOXxZFa4_9yP7rC9nbb70Dm",
    releaseNote: "",
    status: "in-progress",
    featured: false,
    pages: { ...noPages },
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
