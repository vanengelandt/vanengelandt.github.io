// Scroll-driven 3D: every [data-3d] element gets --p (0 → 1) as its block
// scrolls into view; the hero tilts away into depth as you scroll past it.
// Cards with [data-tilt] also lean towards the pointer.
(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const header = document.querySelector('.site-header');
    const heroInner = document.querySelector('[data-hero-out]');
    const hero = heroInner && heroInner.closest('section');

    const items = [...document.querySelectorAll('[data-3d]')];
    if (!reduce) root.classList.add('js');

    const clamp = v => Math.max(0, Math.min(1, v));
    const ease = t => 1 - Math.pow(1 - t, 3);

    function update() {
        const vh = window.innerHeight;
        if (header && !header.classList.contains('solid')) header.classList.toggle('scrolled', window.scrollY > 40);
        if (reduce) return;
        for (const el of items) {
            // Measure the untransformed parent so the element's own 3D motion doesn't feed back
            const r = (el.parentElement || el).getBoundingClientRect();
            const start = vh * 0.98, end = vh * 0.42;
            const raw = (start - r.top) / (start - end);
            const delay = parseFloat(el.dataset.delay || 0);
            el.style.setProperty('--p', ease(clamp(raw * (1 + delay) - delay)).toFixed(4));
        }
        if (hero) {
            const out = clamp(window.scrollY / (hero.offsetHeight * 0.9));
            heroInner.style.transform = `translate3d(0, ${out * 90}px, ${-out * 380}px) rotateX(${out * 28}deg)`;
            heroInner.style.opacity = (1 - out * 1.15).toFixed(3);
        }
    }

    let queued = false;
    const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; update(); }); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    if (reduce || !window.matchMedia('(hover: hover)').matches) return;
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('pointermove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
            card.style.setProperty('--tx', (x * 14).toFixed(2) + 'deg');
            card.style.setProperty('--ty', (-y * 14).toFixed(2) + 'deg');
            card.style.setProperty('--mx', ((x + 0.5) * 100).toFixed(1) + '%');
            card.style.setProperty('--my', ((y + 0.5) * 100).toFixed(1) + '%');
        });
        card.addEventListener('pointerleave', () => {
            card.style.setProperty('--tx', '0deg');
            card.style.setProperty('--ty', '0deg');
        });
    });
})();
