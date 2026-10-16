"""Build the blog of VanEngelandt.NET.

Write a post as _build/posts/<slug>.md (front matter + Markdown), then run from
the repository root:

    pip install markdown        (once)
    python3 _build/blog.py

It writes blog/<slug>.html for every post, the blog/index.html overview and
adds the blog pages to sitemap.xml. Commit the generated files too.
"""
import glob, hashlib, html, os, re
from datetime import date

import markdown

SITE = 'https://vanengelandt.net'
BUSINESS = [
    ('Business', 'VanEngelandt.NET · VanEngelandt Event Services · PVE LightSync'),
    ('Owner', 'Peter Van Engelandt, lighting designer'),
    ('Address', 'Plaatsweg 17, 8560 Gullegem (Wevelgem), Belgium'),
    ('VAT number', 'BE0671.817.248'),
    ('Email', '<a href="mailto:info@vanengelandt.net">info@vanengelandt.net</a>'),
    ('Web', '<a href="https://vanengelandt.net/">vanengelandt.net</a>'),
]
MONTHS = 'January February March April May June July August September October November December'.split()


def nice_date(d):
    y, m, dd = (int(x) for x in d.split('-'))
    return f'{dd} {MONTHS[m - 1]} {y}'


def css_link():
    v = hashlib.sha1(open('css/site.css', 'rb').read()).hexdigest()[:8]
    return f'../css/site.css?v={v}'


def inline(md_text):
    return markdown.markdown(md_text).removeprefix('<p>').removesuffix('</p>')


def read_post(path):
    raw = open(path, encoding='utf-8').read()
    m = re.match(r'---\n(.*?)\n---\n(.*)', raw, re.S)
    meta = dict(line.split(': ', 1) for line in m.group(1).splitlines() if ': ' in line)
    meta['slug'] = os.path.splitext(os.path.basename(path))[0]
    body = markdown.markdown(m.group(2), extensions=['tables'])
    # Photos: <img src="...-1600.webp"> gets the 800 px version for phones and lazy loading
    body = re.sub(r'<p><img alt="([^"]*)" src="([^"]*)-1600\.webp" /></p>',
                  r'<figure class="photo"><img src="\2-1600.webp" srcset="\2-800.webp 800w, \2-1600.webp 1600w" sizes="(max-width: 1240px) 100vw, 1180px" alt="\1" loading="lazy" decoding="async"><figcaption>\1</figcaption></figure>', body)
    meta['body'] = body
    return meta


STYLE = '''
    <style>
        .page-hero { position: relative; overflow: hidden; padding: 170px 0 70px; border-bottom: 1px solid var(--line);
            background: radial-gradient(ellipse 50% 80% at 85% 0%, rgba(201, 164, 92, .16), transparent 70%),
                        radial-gradient(ellipse 40% 60% at 5% 100%, rgba(138, 106, 44, .14), transparent 70%), var(--black); }
        .page-hero h1 { font-size: clamp(1.6rem, 5.6vw, 3.6rem); margin: 22px 0 26px; max-width: 1100px; }
        .page-hero .lead { max-width: 780px; margin: 0 0 30px; }
        .meta { color: var(--muted); font-size: .86rem; margin: 0 0 30px; }
        .company { display: flex; flex-wrap: wrap; gap: 12px; }
        .company div { padding: 12px 18px; border: 1px solid var(--line); border-radius: var(--radius); background: rgba(201, 164, 92, .03); color: var(--ivory); font-size: .9rem; }
        .company small { display: block; color: var(--gold); font-size: .64rem; letter-spacing: .24em; text-transform: uppercase; line-height: 1.6; }
        .company a { color: var(--ivory); }
        .post { padding-top: 56px; padding-bottom: 110px; color: var(--text); font-weight: 300; }
        .post h2 { font-size: clamp(1.1rem, 2.6vw, 1.6rem); margin: 64px 0 20px; padding-top: 18px; border-top: 1px solid var(--line); }
        .post ul { padding-left: 20px; } .post li { margin: 6px 0; }
        .post a { color: var(--gold-light); }
        .post strong { color: var(--ivory); font-weight: 600; }
        .post code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .86em; color: var(--gold-light);
            background: rgba(201, 164, 92, .08); border: 1px solid var(--line); border-radius: 3px; padding: 1px 6px; white-space: nowrap; }
        .table-wrap { overflow-x: auto; border: 1px solid var(--line-soft); border-radius: var(--radius); background: var(--panel); }
        .post table { width: 100%; border-collapse: collapse; font-size: .9rem; }
        .post th { text-align: left; color: var(--gold); font-size: .66rem; letter-spacing: .22em; text-transform: uppercase; font-weight: 700; padding: 14px 16px; border-bottom: 1px solid var(--line); }
        .post td { padding: 10px 16px; border-bottom: 1px solid var(--line-soft); vertical-align: top; }
        .post tr:last-child td { border-bottom: 0; }
        .post td:first-child { color: var(--ivory); width: 46%; }
        @media (max-width: 640px) {
            .post thead { display: none; }
            .post table, .post tbody, .post tr, .post td { display: block; width: auto !important; }
            .post tr { padding: 12px 16px; border-bottom: 1px solid var(--line-soft); }
            .post td { padding: 0; border: 0; }
            .post td + td { color: var(--muted); margin-top: 4px; }
            .post code { white-space: normal; }
        }
        .post > h2:first-child, .post > .photo:first-child { margin-top: 0; }
        .photo { margin: 40px 0; }
        .photo img { display: block; width: 100%; height: auto; border-radius: var(--radius); box-shadow: 0 0 0 1px var(--line), 0 50px 100px -40px rgba(201, 164, 92, .35); }
        .photo figcaption { margin-top: 12px; color: var(--muted); font-size: .84rem; }
        .post .post-list { list-style: none; padding: 0; display: grid; gap: 18px; }
        .post-card { display: block; padding: 32px 30px; border: 1px solid var(--line-soft); border-radius: var(--radius); background: var(--panel); text-decoration: none; transition: border-color .2s; }
        .post-card:hover { border-color: var(--gold); }
        .post-card h2 { margin: 10px 0 12px; border: 0; padding: 0; }
        .post-card p { margin: 0; color: var(--text); }
        .nav .btn-line { padding: 12px 16px; }
        .print-only { display: none; }
        @media print {
            @page { margin: 14mm; }
            html, body { background: #fff !important; color: #000; }
            .site-header, .site-footer .footer-links { display: none !important; }
            .print-only { display: block; margin-bottom: 18px; }
            .print-only img { height: 46px; width: auto; }
            .page-hero { background: none; padding: 0 0 14px; }
            h1, h2, .post td, .post td:first-child, .post li, .post p, .post strong, .company div, .company a, .lead, .meta { color: #000 !important; }
            h1 em { -webkit-text-fill-color: #000; background: none; }
            .company div, .table-wrap { background: none; border-color: #bbb; }
            .company small, .post th { color: #7a5c22; }
            .post code { color: #000; background: #f3eee2; border-color: #d8ccae; }
            .post { padding: 0; } .post h2 { break-after: avoid; margin-top: 26px; }
            .post tr { break-inside: avoid; }
        }
    </style>'''


def page(title, desc, canonical, body, og_type='article', image=None):
    full = f'{title} | VanEngelandt.NET'
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{html.escape(full)}</title>
    <meta name="description" content="{html.escape(desc)}">
    <meta name="theme-color" content="#050505">
    <link rel="icon" type="image/svg+xml" href="../images/logo-mark.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32.png">
    <link rel="apple-touch-icon" href="../images/apple-touch-icon.png">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="{canonical}">
    <meta property="og:url" content="{canonical}">
    <meta property="og:title" content="{html.escape(full)}">
    <meta property="og:description" content="{html.escape(desc)}">
    <meta property="og:type" content="{og_type}">
    <meta property="og:site_name" content="VanEngelandt.NET">
    <meta property="og:image" content="{SITE}/{image or "images/og-image.jpg"}">
    <script data-goatcounter="https://vanengelandt.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>
    <link rel="preload" href="../fonts/archivo-latin-wdth-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="{css_link()}">{STYLE}
</head>
<body>

    <header class="site-header solid">
        <div class="container nav">
            <a href="../index.html" class="brand-link" aria-label="VanEngelandt.NET">
                <img src="../images/logo-mark.svg" alt="" width="42" height="42">
                <img class="brand-word" src="../images/logo-wordmark.svg" alt="" width="898" height="102">
            </a>
            <div class="nav-right">
                <a href="index.html" class="btn btn-line">Blog</a>
                <a href="../index.html" class="btn btn-line">Website</a>
            </div>
        </div>
    </header>

    <main>
{body}
    </main>

    <footer class="site-footer">
        <div class="container footer-inner">
            <p>&copy; {date.today().year} VanEngelandt.NET · Peter Van Engelandt · Plaatsweg 17, 8560 Gullegem (Wevelgem), Belgium · VAT BE0671.817.248 · <a href="mailto:info@vanengelandt.net">info@vanengelandt.net</a></p>
            <div class="footer-links">
                <a href="../index.html#services">Services</a>
                <a href="../mirrorball.html">Shop</a>
                <a href="index.html">Blog</a>
                <a href="../index.html#contact">Contact</a>
            </div>
        </div>
    </footer>
</body>
</html>
'''


def company():
    return '\n'.join(f'                    <div><small>{k}</small>{v}</div>' for k, v in BUSINESS)


def post_page(p):
    url = f'{SITE}/blog/{p["slug"]}.html'
    body = f'''        <section class="page-hero">
            <div class="container">
                <div class="print-only"><img src="../brand/vanengelandt-logo-horizontal-light-bg.svg" alt="VanEngelandt.NET"></div>
                <span class="eyebrow">{html.escape(p["tag"])}</span>
                <h1>{html.escape(p["title"])}</h1>
                <p class="lead">{inline(p["lead"])}</p>
                <p class="meta">{nice_date(p["date"])} · Peter Van Engelandt</p>
            </div>
        </section>
        <article class="container post">
{re.sub(r"(<table>.*?</table>)", r'<div class="table-wrap">\1</div>', p["body"], flags=re.S)}
            <h2>Published by</h2>
            <div class="company">
{company()}
            </div>
        </article>'''
    return page(p['title'], p['description'], url, body, image=p.get('image'))


def index_page(posts):
    cards = '\n'.join(f'''                <li><a class="post-card" href="{p["slug"]}.html">
                    <span class="eyebrow">{html.escape(p["tag"])} · {nice_date(p["date"])}</span>
                    <h2>{html.escape(p["title"])}</h2>
                    <p>{html.escape(p["description"])}</p>
                </a></li>''' for p in posts)
    body = f'''        <section class="page-hero">
            <div class="container">
                <span class="eyebrow">Blog</span>
                <h1>Notes from the <em>lighting desk</em></h1>
                <p class="lead">Cheat sheets, programming tips and show tech from Peter Van Engelandt: lighting design, MagicQ, grandMA3, Unreal Engine and DMX.</p>
            </div>
        </section>
        <div class="container post">
            <ul class="post-list">
{cards}
            </ul>
        </div>'''
    return page('Blog', 'Lighting programming tips, cheat sheets and show tech from VanEngelandt.NET.', f'{SITE}/blog/', body, 'website')


def main():
    posts = sorted((read_post(f) for f in glob.glob('_build/posts/*.md')), key=lambda p: (p['date'], p.get('time', '')), reverse=True)
    os.makedirs('blog', exist_ok=True)
    for p in posts:
        open(f'blog/{p["slug"]}.html', 'w', encoding='utf-8').write(post_page(p))
    open('blog/index.html', 'w', encoding='utf-8').write(index_page(posts))

    # Sitemap: replace any earlier blog entries, then append the current ones
    sm = open('sitemap.xml', encoding='utf-8').read()
    sm = re.sub(r'  <url>\n    <loc>https://vanengelandt\.net/blog/[^<]*</loc>\n  </url>\n', '', sm)
    entries = ''.join(f'  <url>\n    <loc>{SITE}/blog/{u}</loc>\n  </url>\n'
                      for u in [''] + [p['slug'] + '.html' for p in posts])
    open('sitemap.xml', 'w', encoding='utf-8').write(sm.replace('</urlset>', entries + '</urlset>'))


if __name__ == '__main__':
    main()
