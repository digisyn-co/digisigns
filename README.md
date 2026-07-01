# Template Platform

One Astro site, one domain, many independent-feeling website templates under
`/templates/<slug>/`. Built to receive Stitch screens incrementally and
publish to cPanel via Git Version Control.

## Stack

- **Astro**, static output (`output: "static"`) — every template compiles to
  plain HTML/CSS/JS, so it runs on any cPanel shared host with no Node
  process needed at runtime (Node is only needed at *build* time).
- No client-side framework required; add one later per-component only if a
  specific screen needs real interactivity.

## Folder structure

```
src/
  layouts/
    BaseLayout.astro        # shared <html>/<head>, SEO tags, CSS reset. Same for every template.
  components/
    SEO.astro                # shared meta/OG tags
  templates/
    <slug>/
      TemplateLayout.astro   # wraps BaseLayout; owns this template's nav + footer + theme
      theme.css               # this template's colors/type tokens, scoped, not global
      components/             # components unique to this template (Hero, ServiceCard, etc.)
      nav.config.ts            # this template's nav link list
  pages/
    index.astro               # Template Library home ("/")
    templates/
      <slug>/
        index.astro            # Home
        about.astro            # About Us
        services/
          index.astro          # Services overview
          [service].astro      # Single Service Detail (dynamic route from a data file)
        industries.astro       # Industries / Who We Serve
        contact.astro          # Contact Us
        blog/ testimonials.astro careers.astro faq.astro case-studies.astro  # optional, add as needed
  lib/
    templates.ts               # registry of published templates, powers the Library home page
public/
  thumbnails/<slug>.png        # card image for the Library page
.cpanel.yml                    # cPanel Git Version Control deploy hook (needs your account details, see file)
```

**Shared** (never diverges per template): routing conventions, build system,
`BaseLayout`, `SEO` component, CSS reset, accessibility baseline, deploy
pipeline.

**Template-specific** (every template owns its own): `TemplateLayout`, nav,
footer, theme tokens, typography, component visual style, content structure.
Two templates should never look like reskins of each other — if a component
is truly shared, it still gets themed via CSS custom properties set in each
template's `theme.css`.

## Adding a new template (the loop this repo is built for)

1. You send a Stitch screen ID.
2. I identify: which template it belongs to (existing or new), which page
   type it is (Home / About / Services / Service Detail / Industries /
   Contact / optional page), and what's shared vs. template-unique in it.
3. If it's a new template: scaffold `src/templates/<slug>/` (layout, theme,
   nav config) and `src/pages/templates/<slug>/` for the page(s) delivered so
   far only — not the full page set up front.
4. If it's an existing template: add/update just that page, wire it into the
   existing nav, and leave every other approved page untouched.
5. Register (or update) the template in `src/lib/templates.ts` once it has at
   least a working Home page, so it appears in the Library.
6. Commit with a structured message (see below), push.
7. cPanel Git Version Control pulls and runs `.cpanel.yml`, which builds Astro
   in place (`dist/` ends up inside the checkout itself). The subdomain's
   document root points at that `dist/` folder, not the repo root, so source
   files are never web-exposed.

I will never regenerate or restructure an already-approved page as a side
effect of adding a new one.

## Commit convention

```
feat(<template-slug>): add services page
fix(<template-slug>): correct responsive nav breakpoint
chore(platform): update shared SEO component
deploy(v1.x): publish <template-slug> pages
```

## Local dev

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the built dist/ locally
```

## Deployment (cPanel account: digisync)

- **Domain**: `https://designs.digisyn.co` — confirmed as the production domain, set in `astro.config.mjs`.
- **GitHub**: `https://github.com/digisyn-co/digisigns`, `main` branch.
- **cPanel Git Version Control**: repo checked out at `/home/digisync/designs.digisyn.co`. `.cpanel.yml` runs `npm install && npm run build`, which produces `dist/` inside that same checkout — no copy step needed.
- **One-time manual step still needed**: in cPanel > Domains, change `designs.digisyn.co`'s document root from `/home/digisync/designs.digisyn.co` to `/home/digisync/designs.digisyn.co/dist`, so only built output is web-exposed (not `src/`, `package.json`, etc). Also confirm the Node.js virtualenv path in `.cpanel.yml` matches cPanel > Setup Node.js App for this project (currently assumes `nodevenv/designs.digisyn.co/20`) — deploys were showing "Not available" before this fix, most likely because `npm` wasn't on PATH for the hook.
- After both are confirmed, click "Deploy HEAD Commit" in Git Version Control, or just push — it'll trigger automatically from then on.

## Status

Root platform landing page (`/`) implemented from Stitch screen `14d0f3d8...`. No business templates (`/templates/<slug>/`) yet — waiting on the first template Home screen.
