# Building the language pages

Edit `index.html` (English), `_build/terms-template.html`, `i18n/terms.<lang>.json` or the strings in `js/i18n.js`, then run from the repository root:

    python3 _build/build.py

It writes `/nl/`, `/fr/`, `/zh/`, `/th/`, `/vi/`, the root terms page and `sitemap.xml`, and refreshes the `?v=` stamps on CSS and JS links. Commit the generated files too: GitHub Pages serves them as they are.
