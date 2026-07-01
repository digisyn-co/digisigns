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
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "primary-container": "rgb(var(--color-primary-container) / <alpha-value>)",
        "on-primary-container": "rgb(var(--color-on-primary-container) / <alpha-value>)",
        "primary-fixed": "rgb(var(--color-primary-fixed) / <alpha-value>)",
        "primary-fixed-dim": "rgb(var(--color-primary-fixed-dim) / <alpha-value>)",
        "on-primary-fixed": "rgb(var(--color-on-primary-fixed) / <alpha-value>)",
        "on-primary-fixed-variant": "rgb(var(--color-on-primary-fixed-variant) / <alpha-value>)",
        "inverse-primary": "rgb(var(--color-inverse-primary) / <alpha-value>)",

        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
        "secondary-container": "rgb(var(--color-secondary-container) / <alpha-value>)",
        "on-secondary-container": "rgb(var(--color-on-secondary-container) / <alpha-value>)",
        "secondary-fixed": "rgb(var(--color-secondary-fixed) / <alpha-value>)",
        "secondary-fixed-dim": "rgb(var(--color-secondary-fixed-dim) / <alpha-value>)",
        "on-secondary-fixed": "rgb(var(--color-on-secondary-fixed) / <alpha-value>)",
        "on-secondary-fixed-variant": "rgb(var(--color-on-secondary-fixed-variant) / <alpha-value>)",

        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
        "tertiary-container": "rgb(var(--color-tertiary-container) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--color-on-tertiary-container) / <alpha-value>)",
        "tertiary-fixed": "rgb(var(--color-tertiary-fixed) / <alpha-value>)",
        "tertiary-fixed-dim": "rgb(var(--color-tertiary-fixed-dim) / <alpha-value>)",
        "on-tertiary-fixed": "rgb(var(--color-on-tertiary-fixed) / <alpha-value>)",
        "on-tertiary-fixed-variant": "rgb(var(--color-on-tertiary-fixed-variant) / <alpha-value>)",

        error: "rgb(var(--color-error) / <alpha-value>)",
        "on-error": "rgb(var(--color-on-error) / <alpha-value>)",
        "error-container": "rgb(var(--color-error-container) / <alpha-value>)",
        "on-error-container": "rgb(var(--color-on-error-container) / <alpha-value>)",

        background: "rgb(var(--color-background) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-background) / <alpha-value>)",

        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-on-surface-variant) / <alpha-value>)",
        "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)",
        "surface-dim": "rgb(var(--color-surface-dim) / <alpha-value>)",
        "surface-bright": "rgb(var(--color-surface-bright) / <alpha-value>)",
        "surface-deep": "rgb(var(--color-surface-deep) / <alpha-value>)",
        "surface-tint": "rgb(var(--color-surface-tint) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--color-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--color-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--color-surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--color-surface-container-highest) / <alpha-value>)",
        "inverse-surface": "rgb(var(--color-inverse-surface) / <alpha-value>)",
        "inverse-on-surface": "rgb(var(--color-inverse-on-surface) / <alpha-value>)",

        outline: "rgb(var(--color-outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)",
        "border-subtle": "rgb(var(--color-border-subtle) / <alpha-value>)",

        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted) / <alpha-value>)",
        "metric-positive": "rgb(var(--color-metric-positive) / <alpha-value>)",
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
