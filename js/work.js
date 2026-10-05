// Selected work: while the section is pinned, scrolling moves a strip of photos
// sideways through a 3D stage. The photo in the centre faces the viewer at full
// brightness; the others turn away into depth. Any photo opens in a lightbox.
(() => {
    const section = document.getElementById('work');
    if (!section) return;
    const track = section.querySelector('.work-track');
    const shots = [...section.querySelectorAll('.shot')];
    const count = section.querySelector('.work-count b');
    const bar = section.querySelector('.work-progress');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const pad = n => String(n).padStart(2, '0');

    let centers = [], step = 1, ticking = false, active = -1;

    function measure() {
        track.style.setProperty('--x', '0px');
        centers = shots.map(s => s.offsetLeft + s.offsetWidth / 2);
        step = shots.length > 1 ? centers[1] - centers[0] : 1;
    }

    function update() {
        ticking = false;
        const r = section.getBoundingClientRect();
        const travel = section.offsetHeight - innerHeight;
        const p = clamp(-r.top / travel, 0, 1);
        const c = centers[0] + (centers[centers.length - 1] - centers[0]) * p;
        track.style.setProperty('--x', (innerWidth / 2 - c).toFixed(1) + 'px');
        shots.forEach((s, i) => {
            const d = (centers[i] - c) / step;
            const a = Math.min(Math.abs(d), 1.6);
            s.style.setProperty('--ry', (clamp(d, -1.6, 1.6) * -24).toFixed(2) + 'deg');
            s.style.setProperty('--tz', (-a * 190).toFixed(1) + 'px');
            s.style.setProperty('--s', (1 - Math.min(a, 1) * .06).toFixed(3));
            s.style.setProperty('--b', (1 - Math.min(a, 1.4) * .45).toFixed(3));
            s.style.setProperty('--co', (1 - Math.min(a, 1) * .85).toFixed(3));
            s.style.setProperty('--glow', (.45 * (1 - Math.min(a, 1))).toFixed(3));
            s.style.setProperty('--edge', (.12 + .3 * (1 - Math.min(a, 1))).toFixed(3));
            s.style.setProperty('--sheen', (100 - clamp(.5 - d * .5, 0, 1) * 100).toFixed(1) + '%');
            s.style.setProperty('--px', (d * -3).toFixed(2) + '%');
            // Neighbours hinge on their near edge and sit behind the photo in front, like pages of a book
            s.style.setProperty('--ox', d > 0 ? '0%' : '100%');
            s.style.setProperty('--z', String(100 - Math.round(a * 20)));
        });
        const now = Math.round(p * (shots.length - 1));
        if (now !== active) { active = now; count.textContent = pad(now + 1); }
        bar.style.setProperty('--wp', p.toFixed(4));
    }
    const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };

    if (!reduce) {
        section.classList.add('pinned');
        measure(); update();
        addEventListener('scroll', queue, { passive: true });
        addEventListener('resize', () => { measure(); update(); });
        addEventListener('load', () => { measure(); update(); });
    } else {
        // Without motion the strip simply scrolls sideways; keep the counter honest
        track.addEventListener('scroll', () => {
            const mid = track.scrollLeft + track.clientWidth / 2;
            const i = shots.reduce((b, s, k) => Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid) < Math.abs(shots[b].offsetLeft + shots[b].offsetWidth / 2 - mid) ? k : b, 0);
            count.textContent = pad(i + 1);
            bar.style.setProperty('--wp', (i / (shots.length - 1)).toFixed(3));
        }, { passive: true });
    }

    // Lightbox
    const box = document.getElementById('lightbox');
    if (!box || !box.showModal) return;
    const img = box.querySelector('img');
    const cap = box.querySelector('figcaption');
    let at = 0, x0 = null;
    function show(i) {
        at = (i + shots.length) % shots.length;
        const btn = shots[at].querySelector('.shot-open');
        img.src = btn.dataset.full;
        img.alt = btn.querySelector('img').alt;
        ['.shot-num', '.shot-cat', '.shot-title'].forEach(sel => { cap.querySelector(sel).innerHTML = shots[at].querySelector(sel).innerHTML; });
    }
    shots.forEach((s, i) => s.querySelector('.shot-open').addEventListener('click', () => {
        show(i); box.showModal(); document.documentElement.style.overflow = 'hidden';
    }));
    box.addEventListener('close', () => { document.documentElement.style.overflow = ''; });
    box.querySelector('.lb-close').addEventListener('click', () => box.close());
    box.querySelector('.lb-prev').addEventListener('click', () => show(at - 1));
    box.querySelector('.lb-next').addEventListener('click', () => show(at + 1));
    box.addEventListener('click', e => { if (e.target === box) box.close(); });
    box.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') show(at - 1);
        if (e.key === 'ArrowRight') show(at + 1);
    });
    box.addEventListener('pointerdown', e => { x0 = e.clientX; });
    box.addEventListener('pointerup', e => {
        if (x0 !== null && Math.abs(e.clientX - x0) > 50) show(at + (e.clientX < x0 ? 1 : -1));
        x0 = null;
    });
})();
