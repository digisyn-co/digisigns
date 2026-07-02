# Template Collection: Strategic Overview

Source: Stitch project `13817036897071013700`, screen `8014fd62e62b4b94971f6ee8e1bc3aa1`
("Template Collection Strategy"). This is the platform's roadmap for the
full 15-template / 5-industry library. Each template gets its own theme
file under `src/styles/themes/<slug>.css` and its own component folder
under `src/templates/<slug>/` — see `tailwind.config.mjs` for the shared
design-token architecture that makes this possible in one Tailwind build.

## 1. Accounting & Tax Firm (5 templates)
- **Executive Modern Luxury** — deep charcoals, gold accents, serif/sans-serif pairing. Focus on high-net-worth confidence. **Built as `accounting-luxury` ("Estate & Accord").**
- **Friendly Human** — soft mint/blue, rounded corners, approachable photography. Simplifies tax stress. *(placeholder: `accounting-friendly`)*
- **Ultra User-Friendly** — high contrast, bold CTA buttons, wizard-style forms. Built for speed and conversion.
- **Editorial Aesthetic** — wide gutters, oversized typography, asymmetrical layouts. Positioned as a thought leader. **Built as `accounting-editorial` ("Strategic Insight Advisory").**
- **Japanese Minimal** — monochromatic, ample whitespace, thin lines. Focus on precision and calm. **Built as `accounting-zen` ("Zen Ledger Advisory").**

## 2. Law Firm (2 templates)
- **Prestige Litigation** — traditional navy/burgundy, heavy grids, marble textures. Focus on authority. **Built as `law-prestige` ("Prestige Law").**
- **Modern Legal** — clean white, vibrant blue, glassmorphism. Focus on transparency and tech-forwardness.

## 3. Movers (2 templates)
- **Fast Conversion** — urgency-driven, quote calculator hero, bright orange/yellow. Focus on immediate booking. **Built as `movers-premium` ("RapidRelo").** *(Correction: earlier notes mislabeled RapidRelo as "Premium Relocation" — its instant quote calculator and high-contrast urgency styling are Fast Conversion traits.)*
- **Premium Relocation** — lifestyle-driven, high-end interior photography, soft champagne tones. Focus on care. *(planned: "LuxeMove Relocation" — screens available, deferred by request in favor of the zip-based template batch.)*

## 4. Electrician (2 templates)
- **Local Service Leader** — trust-based, worker headshots, bright blue/red. Focus on reliability. *(planned: "Voltage Electrical Services" — screens available, deferred by request in favor of the zip-based template batch.)*
- **Industrial Contractor** — high-vis yellow, dark mode, heavy machinery focus. Focus on scale and safety. *(placeholder: `electrician-industrial`)*

## 5. Digital Marketing (4 templates)
- **AI Growth Agency** — neo-brutalism, futuristic gradients, moving text. Focus on innovation. *(placeholder: `ai-growth-engine`)*
- **Creative Conversion Studio** — high-energy pinks/purples, playful shapes. Focus on visual impact. **Built as `creative-studio` ("The Creative Collective").**
- **Enterprise Performance** — data-heavy, clean sans-serif, blue-chip blue. Focus on ROI. *(placeholder: `b2b-executive-suite`)*
- **Boutique Minimal** — earthy tones, organic shapes, lowercase typography. Focus on craft.

15 templates total across 5 industries. `src/lib/templates.ts` is the
live registry — flip `status` to `"live"` and set the `pages` flags the
moment a template's screens land, same as `accounting-luxury` here.

---

## Global Sitemap (standard for every template)
1. **Home** — narrative-driven value prop.
2. **About Us** — trust & culture.
3. **Services (Overview)** — category navigation.
4. **Service Detail (Single)** — conversion-focused deep dive.
5. **Industries / Who We Serve** — specialized social proof.
6. **Contact Us** — high-intent inquiry flow.

Optional pages (blog, testimonials, careers, FAQ, case studies) are
tracked per-template in `TemplateMeta.pages` but aren't part of the
required baseline.
