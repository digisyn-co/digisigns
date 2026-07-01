# digisigns (built output — do not hand-edit)

This branch is generated. It contains only the built static site
(`dist/` output from the Astro project, flattened at repo root) — this is
what cPanel Git Version Control serves for `designs.digisyn.co`.

No Node.js, npm, or build step is required on the server for this branch —
it's plain HTML/CSS/JS. That's deliberate: the CloudLinux Node.js Selector
virtualenv on this account was unreliable (permission errors, broken npm
symlinks after a version switch), so builds now happen locally/off-server
and only the finished static files are pushed here.

Source code, page templates, and the full project README live on the
`source` branch: https://github.com/digisyn-co/digisigns/tree/source

To publish a change: work on `source`, run `npm run build`, copy the
contents of `dist/` here, commit, push.
