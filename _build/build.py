"""Build the per-language pages of VanEngelandt.NET.

Run from the repository root:  python3 _build/build.py

English lives at the root (index.html, verkoopsvoorwaarden.html) and every other
language gets its own folder (/nl/, /fr/, /zh/, /th/, /vi/) with the text already
in place, so search engines index each language at its own address.

Sources: index.html (English, edit this one), _build/terms-template.html,
i18n/terms.<lang>.json and the strings in js/i18n.js. Underscore folders are not
published by GitHub Pages.
"""
import hashlib, html, json, os, re, subprocess

SITE = 'https://vanengelandt.net/'
LANGS = ['en', 'nl', 'fr', 'zh', 'th', 'vi']
TAG = {'zh': 'zh-Hans'}
OG_LOCALE = {'en': 'en_GB', 'nl': 'nl_BE', 'fr': 'fr_BE', 'zh': 'zh_CN', 'th': 'th_TH', 'vi': 'vi_VN'}
TERMS_ANCHOR = {'nl': 'sectie', 'en': 'en-section', 'fr': 'fr-article', 'zh': 'zh-tiaokuan', 'th': 'th-khor', 'vi': 'vi-dieu'}
PAGES = {'home': 'index.html', 'terms': 'verkoopsvoorwaarden.html'}

T = json.loads(subprocess.check_output(['node', '-e', '''
const s = require("fs").readFileSync("js/i18n.js", "utf8");
const m = s.match(/const T = (\\{[\\s\\S]*?\\n    \\});/);
process.stdout.write(JSON.stringify(eval("(" + m[1] + ")")));
''']))


def url(lang, page):
    f = PAGES[page]
    return SITE + ('' if lang == 'en' else lang + '/') + ('' if f == 'index.html' else f)


def seo_block(lang, page):
    d = T[lang]
    title = html.escape(html.unescape(re.sub('<[^>]+>', '', d['meta.' + page])), quote=True)
    desc = d.get('meta.' + page + 'Desc') or f"{html.unescape(d['contact.terms'])}: VanEngelandt.NET, Wevelgem."
    desc = html.escape(html.unescape(desc), quote=True)
    out = [f'<link rel="canonical" href="{url(lang, page)}">']
    out += [f'<link rel="alternate" hreflang="{TAG.get(l, l)}" href="{url(l, page)}">' for l in LANGS]
    out += [f'<link rel="alternate" hreflang="x-default" href="{url("en", page)}">',
            f'<meta property="og:url" content="{url(lang, page)}">',
            f'<meta property="og:title" content="{title}">',
            f'<meta property="og:description" content="{desc}">',
            f'<meta property="og:locale" content="{OG_LOCALE[lang]}">']
    out += [f'<meta property="og:locale:alternate" content="{OG_LOCALE[l]}">' for l in LANGS if l != lang]
    if lang == 'en':
        # Old ?lang= links and a language chosen on an earlier visit go to that language's page
        out.append('<script>(function(){var L=' + json.dumps(LANGS[1:]) + ',q=new URLSearchParams(location.search).get("lang"),s=null;'
                   'try{s=localStorage.getItem("lang")}catch(e){}var l=q||s;'
                   'if(L.indexOf(l)>-1)location.replace(l+"/"+location.pathname.split("/").pop()+location.hash)})();</script>')
    return title, desc, '    <!-- seo:start -->\n' + ''.join(f'    {x}\n' for x in out) + '    <!-- seo:end -->\n'


SEO_LINE = re.compile(r'^\s*(<link rel="(canonical|alternate)"[^>]*>|<meta property="og:(url|title|description|locale(:alternate)?)"[^>]*>)\s*\n', re.M)


def render(src, lang, page):
    d = T[lang]
    s = src
    s = re.sub(r'<html[^>]*>', f'<html lang="{TAG.get(lang, lang)}" data-page="{page}" data-lang="{lang}">', s, count=1)

    # Text and labels, so the page reads right before any script runs
    def fill(m):
        key = m.group(3)
        if key not in d: return m.group(0)
        assert f'<{m.group(1)}' not in m.group(4), key  # nested same tag would break the swap
        return f'<{m.group(1)}{m.group(2)}>{d[key]}</{m.group(1)}>'
    s = re.sub(r'<(\w+)([^>]*\sdata-i18n="([^"]+)"[^>]*)>(.*?)</\1>', fill, s, flags=re.S)
    s = re.sub(r'(data-i18n-aria="([^"]+)"[^>]*?aria-label=")[^"]*', lambda m: m.group(1) + html.escape(html.unescape(d.get(m.group(2), '')), quote=True), s)
    s = re.sub(r'data-i18n-alt="([^"]+)" alt="[^"]*"', lambda m: f'data-i18n-alt="{m.group(1)}" alt="{html.escape(html.unescape(re.sub("<[^>]+>", "", d.get(m.group(1), ""))), quote=True)}"', s)
    s = re.sub(r'<p class="notice"( hidden)?>', '<p class="notice">' if d.get('terms.notice') else '<p class="notice" hidden>', s)
    s = re.sub(r'<span class="lang-code">\w+</span>', f'<span class="lang-code">{lang.upper()}</span>', s)
    s = re.sub(r'(<button type="button" role="menuitemradio" data-set-lang="(\w+)"[^>]*?)( class="active")?( aria-checked="\w+")?>',
               lambda m: m.group(1) + (' class="active" aria-checked="true">' if m.group(2) == lang else ' aria-checked="false">'), s)

    # Head: title, description, then the generated search block
    title, desc, block = seo_block(lang, page)
    s = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', s, count=1)
    s = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{desc}">', s, count=1)
    s = re.sub(r'    <!-- seo:start -->.*?<!-- seo:end -->\n', '', s, flags=re.S)
    s = re.sub(r'^\s*<script>\(function\(\)\{var L=.*?</script>\s*\n', '', s, flags=re.M)
    s = SEO_LINE.sub('', s)
    s = s.replace('    <meta property="og:type"', block + '    <meta property="og:type"', 1)

    if lang != 'en':
        s = re.sub(r'((?:href|src|data-full)=")((?:css|js|fonts|images|brand)/)', r'\1../\2', s)
        s = re.sub(r'srcset="[^"]*"', lambda m: re.sub(r'(["\s])(images/)', r'\1../\2', m.group(0)), s)
    return s


def terms_source(lang):
    secs = json.load(open(f'i18n/terms.{lang}.json', encoding='utf-8'))
    pre = TERMS_ANCHOR[lang]
    toc = '\n'.join(f'                            <li><a href="#{pre}-{s["num"]}"><span class="n">{s["num"]}</span>{s["title"]}</a></li>' for s in secs)
    body = '\n\n'.join(
        f'''                    <div class="depth"><section class="term" id="{pre}-{s["num"]}" data-3d="rise">
                        <h2><span class="num">{int(s["num"]):02d}</span>{s["title"]}</h2>
''' + '\n'.join(f'                        <p>{p}</p>' for p in s['paras']) + '''
                    </section></div>''' for s in secs)
    block = f'''        <div class="container layout" data-lang-block="{lang}" lang="{TAG.get(lang, lang)}">
            <details class="toc" open>
                <summary><span data-i18n="terms.toc">{T[lang]['terms.toc']}</span>
                    <svg fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <nav>
                    <ol>
{toc}
                    </ol>
                </nav>
            </details>
            <div class="terms">
{body}
            </div>
        </div>'''
    return open('_build/terms-template.html', encoding='utf-8').read().replace('{{BLOCKS}}', block)


def stamp(s, prefix):
    # ?v=<content hash> on css/js so a phone never pairs a new page with an old cached script
    def h(m):
        path = m.group(2)
        v = hashlib.sha1(open(path, 'rb').read()).hexdigest()[:8]
        return f'{m.group(1)}{prefix}{path}?v={v}"'
    return re.sub(r'((?:href|src)=")(?:\.\./)?((?:css|js)/[\w.-]+\.(?:css|js))(?:\?v=\w+)?"', h, s)


def main():
    home_src = open('index.html', encoding='utf-8').read()
    for lang in LANGS:
        folder = '' if lang == 'en' else lang + '/'
        if folder: os.makedirs(folder, exist_ok=True)
        prefix = '' if lang == 'en' else '../'
        for page, src in (('home', home_src), ('terms', terms_source(lang))):
            out = stamp(render(src, lang, page), prefix)
            open(folder + PAGES[page], 'w', encoding='utf-8').write(out)

    urls = []
    for page in PAGES:
        alts = ''.join(f'\n    <xhtml:link rel="alternate" hreflang="{TAG.get(l, l)}" href="{url(l, page)}"/>' for l in LANGS)
        alts += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{url("en", page)}"/>'
        urls += [f'  <url>\n    <loc>{url(l, page)}</loc>{alts}\n  </url>' for l in LANGS]
    open('sitemap.xml', 'w', encoding='utf-8').write(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + '\n'.join(urls) + '\n</urlset>\n')


if __name__ == '__main__':
    main()
