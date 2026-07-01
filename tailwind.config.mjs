// Shared Tailwind config for the entire platform.
//
// Stitch exports each screen with its own inline Tailwind color palette
// (Material Design 3 style semantic tokens: primary, surface, on-surface,
// etc.) using the SAME token names across different templates but DIFFERENT
// hex values per template. To support many templates in one Tailwind build
// without config collisions, every color below resolves to a CSS custom
// property instead of a literal hex value. Each template (or the root
// platform landing page) defines its own values for these variables inside
// a scoped class — see src/styles/themes/<slug>.css — so `bg-primary` etc.
// renders differently depending on which theme class wraps the page.
//
// Spacing / fontSize / borderRadius are kept as one shared literal scale for
// now (first template's numbers). If a future Stitch screen ships a
// meaningfully different scale, extend this file rather than forking it —
// see README "Design system" section.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "on-primary": "var(--color-on-primary)",
        "primary-container": "var(--color-primary-container)",
        "on-primary-container": "var(--color-on-primary-container)",
        "primary-fixed": "var(--color-primary-fixed)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "on-primary-fixed": "var(--color-on-primary-fixed)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
        "inverse-primary": "var(--color-inverse-primary)",

        secondary: "var(--color-secondary)",
        "on-secondary": "var(--color-on-secondary)",
        "secondary-container": "var(--color-secondary-container)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",

        tertiary: "var(--color-tertiary)",
        "on-tertiary": "var(--color-on-tertiary)",
        "tertiary-container": "var(--color-tertiary-container)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",

        error: "var(--color-error)",
        "on-error": "var(--color-on-error)",
        "error-container": "var(--color-error-container)",
        "on-error-container": "var(--color-on-error-container)",

        background: "var(--color-background)",
        "on-background": "var(--color-on-background)",

        surface: "var(--color-surface)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "surface-variant": "var(--color-surface-variant)",
        "surface-dim": "var(--color-surface-dim)",
        "surface-bright": "var(--color-surface-bright)",
        "surface-deep": "var(--color-surface-deep)",
        "surface-tint": "var(--color-surface-tint)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "inverse-surface": "var(--color-inverse-surface)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",

        outline: "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        "border-subtle": "var(--color-border-subtle)",

        "text-primary": "var(--color-text-primary)",
        "text-muted": "var(--color-text-muted)",
        "metric-positive": "var(--color-metric-positive)",
      },
      // NOTE on the two patterns below:
      // 1. Colors + borderRadius (above/below) always resolve through CSS
      //    vars, so template themes can share class names with different
      //    values — see src/styles/themes/<slug>.css.
      // 2. fontFamily / fontSize / spacing are NOT fixed Tailwind scale
      //    names, so when a second template reuses a key name from an
      //    earlier template with a DIFFERENT value, we prefix the new
      //    template's colliding key with a short slug prefix (e.g. "ea-"
      //    for accounting-luxury / Estate & Accord) instead of overwriting
      //    it. Keys that are new or happen to share the same value stay
      //    unprefixed. Extend this file the same way for future templates.
      fontFamily: {
        "label-sm": ["var(--font-label-sm)", "sans-serif"],
        "headline-md": ["var(--font-headline-md)", "sans-serif"],
        "metric-display": ["var(--font-metric-display)", "sans-serif"],
        "headline-lg": ["var(--font-headline-lg)", "sans-serif"],
        "body-md": ["var(--font-body-md)", "sans-serif"],
        "display-hero": ["var(--font-display-hero)", "sans-serif"],
        "display-hero-mobile": ["var(--font-display-hero-mobile)", "sans-serif"],
        "body-lg": ["var(--font-body-lg)", "sans-serif"],

        // accounting-luxury (Estate & Accord) — "ea-" prefix on collisions
        "ea-headline-md": ["Playfair Display", "serif"],
        "ea-label-sm": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
      },
      fontSize: {
        "label-sm": ["14px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        "metric-display": ["48px", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-hero": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-hero-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],

        // accounting-luxury (Estate & Accord) — "ea-" prefix on collisions
        "ea-headline-md": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "ea-label-sm": ["12px", { lineHeight: "1.0", letterSpacing: "0.03em", fontWeight: "500" }],
        "label-md": ["14px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-sm": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
      },
      spacing: {
        "component-gap": "32px",
        "stack-sm": "8px",
        gutter: "24px",
        "container-max": "1280px",
        "stack-md": "16px",
        "section-gap": "120px",
        "stack-lg": "48px",
        "margin-desktop": "64px",

        // accounting-luxury (Estate & Accord) — "ea-" prefix on collisions
        "ea-stack-sm": "12px",
        "ea-stack-md": "24px",
        "ea-container-max": "1440px",
        base: "8px",
        "margin-mobile": "20px",
      },
      borderRadius: {
        DEFAULT: "var(--radius-default)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      maxWidth: {
        "container-max": "1280px",
        "ea-container-max": "1440px",
      },
    },
  },
  plugins: [],
};
