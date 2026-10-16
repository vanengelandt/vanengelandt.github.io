# Building the language pages

Edit `index.html` (English), `_build/terms-template.html`, `i18n/terms.<lang>.json` or the strings in `js/i18n.js`, then run from the repository root:

    python3 _build/build.py

It writes `/nl/`, `/fr/`, `/zh/`, `/th/`, `/vi/`, the root terms page and `sitemap.xml`, and refreshes the `?v=` stamps on CSS and JS links. Commit the generated files too: GitHub Pages serves them as they are.

# Blog

Write a post as `_build/posts/<slug>.md`: front matter (`title`, `description`, `date`, `tag`, `lead`) then Markdown with tables. Then run:

    pip install markdown        (once)
    python3 _build/blog.py

It writes `blog/<slug>.html`, the `blog/index.html` overview and the blog entries in `sitemap.xml`. The blog is English only; `build.py` keeps the blog pages in the sitemap when it rebuilds.

`blog.py` also puts the three newest posts on the English home page (between the `blog:start` / `blog:end` markers). Run `python3 _build/build.py` afterwards so the language pages get them too.
