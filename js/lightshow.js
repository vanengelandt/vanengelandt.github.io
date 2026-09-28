// Hero light show: moving heads aimed at the logo,
// and gold lasers fanning out from behind it.
(() => {
    const hero = document.getElementById('home');
    const stage = document.querySelector('.logo-stage');
    const sky = document.getElementById('show-canvas');   // behind the logo: lasers, fixtures, beams
    if (!hero || !stage || !sky) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sctx = sky.getContext('2d');
    let W = 0, H = 0, dpr = 1;
    let logo = { x: 0, y: 0, w: 1, h: 1 };

    // ---------- Fixtures ----------
    const heads = [
        { fx: 0.10, sp: 0.50, ph: 0.0 },
        { fx: 0.32, sp: 0.62, ph: 1.7 },
        { fx: 0.68, sp: 0.57, ph: 3.1 },
        { fx: 0.90, sp: 0.46, ph: 4.4 },
    ];

    function measure() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        const hr = hero.getBoundingClientRect();
        W = hr.width; H = hr.height;
        if (sky.width !== Math.round(W * dpr) || sky.height !== Math.round(H * dpr)) { sky.width = Math.round(W * dpr); sky.height = Math.round(H * dpr); }
        const sr = stage.getBoundingClientRect();
        logo = { x: sr.left - hr.left + sr.width / 2, y: sr.top - hr.top + sr.height / 2, w: sr.width, h: sr.height };
    }

    // ---------- Lasers ----------
    const LASER = ['#ffcf6b', '#fff3d6', '#e0a53a'];
    function laserLine(x0, y0, ang, len, col, alpha) {
        const x1 = x0 + Math.cos(ang) * len, y1 = y0 + Math.sin(ang) * len;
        const g = sctx.createLinearGradient(x0, y0, x1, y1);
        g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)');
        sctx.strokeStyle = g;
        alpha *= 0.8;
        sctx.globalAlpha = alpha * 0.18; sctx.lineWidth = 7;
        sctx.beginPath(); sctx.moveTo(x0, y0); sctx.lineTo(x1, y1); sctx.stroke();
        sctx.globalAlpha = alpha; sctx.lineWidth = 1.4;
        sctx.beginPath(); sctx.moveTo(x0, y0); sctx.lineTo(x1, y1); sctx.stroke();
    }
    function drawLasers(t) {
        const len = Math.hypot(W, H);
        const x0 = logo.x, y0 = logo.y - logo.h * 0.05;
        const phase = Math.floor(t / 7) % 4;
        const local = (t % 7) / 7;
        // short blackout between looks, like a real show
        if (local < 0.03) return;
        const fade = Math.min(1, (local - 0.03) * 12, (1 - local) * 12);
        sctx.globalCompositeOperation = 'lighter';
        if (phase === 0) {
            // Fan sweeping upwards
            const n = 11, spread = 1.9, base = -Math.PI / 2 + Math.sin(t * 0.9) * 0.45;
            for (let i = 0; i < n; i++) laserLine(x0, y0, base - spread / 2 + spread * i / (n - 1), len, LASER[1], 0.9 * fade);
        } else if (phase === 1) {
            // Rotating tunnel all around
            const n = 16;
            for (let i = 0; i < n; i++) laserLine(x0, y0, t * 0.7 + i * Math.PI * 2 / n, len, LASER[i % 3], 0.8 * fade);
        } else if (phase === 2) {
            // Two crossing fans, red and blue
            const n = 7, spread = 1.1;
            const a = -Math.PI / 2 + Math.sin(t * 1.3) * 0.8, b = -Math.PI / 2 - Math.sin(t * 1.3) * 0.8;
            for (let i = 0; i < n; i++) {
                laserLine(x0, y0, a - spread / 2 + spread * i / (n - 1), len, LASER[0], 0.85 * fade);
                laserLine(x0, y0, b - spread / 2 + spread * i / (n - 1), len, LASER[2], 0.85 * fade);
            }
        } else {
            // Chasing single beams in RGB
            const n = 24;
            for (let i = 0; i < n; i++) {
                const on = Math.sin(t * 6 - i * 0.6) > 0.3;
                if (on) laserLine(x0, y0, -Math.PI + (Math.PI * i) / (n - 1), len, LASER[i % 3], fade);
            }
        }
        sctx.globalAlpha = 1;
        // Hot spot where the lasers leave the projector, peeking from behind the logo
        const hot = sctx.createRadialGradient(x0, y0, 0, x0, y0, logo.w * 0.45);
        hot.addColorStop(0, `rgba(255,255,255,${0.18 * fade})`); hot.addColorStop(1, 'rgba(0,0,0,0)');
        sctx.fillStyle = hot; sctx.fillRect(x0 - logo.w, y0 - logo.w, logo.w * 2, logo.w * 2);
    }

    // ---------- Moving heads ----------
    function targetOf(h, t) {
        // Where each beam lands on the logo, as a fraction of its box (-0.5..0.5)
        return {
            u: 0.3 * Math.sin(t * h.sp + h.ph),
            v: 0.28 * Math.sin(t * h.sp * 1.37 + h.ph * 0.7) - 0.02,
        };
    }
    function drawHeads(t) {
        const trussY = window.innerWidth < 1100 ? 96 : 104, spotR = logo.w * 0.2;
        // Truss
        sctx.globalCompositeOperation = 'source-over';
        sctx.globalAlpha = 1;
        sctx.strokeStyle = 'rgba(201, 164, 92, 0.35)'; sctx.lineWidth = 1.2;
        sctx.strokeRect(-2, trussY - 16, W + 4, 12);
        sctx.beginPath();
        for (let x = 0; x < W; x += 16) { sctx.moveTo(x, trussY - 4); sctx.lineTo(x + 8, trussY - 16); sctx.lineTo(x + 16, trussY - 4); }
        sctx.stroke();

        for (const h of heads) {
            const hue = 38 + 8 * Math.sin(t * 0.4 + h.ph);
            const fx = h.fx * W, fy = trussY + 14;
            const tg = targetOf(h, t);
            const sx = logo.x + tg.u * logo.w, sy = logo.y + tg.v * logo.h;
            const ang = Math.atan2(sy - fy, sx - fx);
            const lx = fx + Math.cos(ang) * 16, ly = fy + Math.sin(ang) * 16;

            // Beam through the haze
            sctx.globalCompositeOperation = 'lighter';
            const px = -Math.sin(ang), py = Math.cos(ang);
            for (const [wMul, a0, a1] of [[1.35, 0.10, 0.03], [1, 0.26, 0.09]]) {
                const g = sctx.createLinearGradient(lx, ly, sx, sy);
                g.addColorStop(0, `hsla(${hue}, 80%, 78%, ${a0})`);
                g.addColorStop(1, `hsla(${hue}, 80%, 68%, ${a1})`);
                sctx.fillStyle = g;
                sctx.beginPath();
                sctx.moveTo(lx + px * 5, ly + py * 5);
                sctx.lineTo(sx + px * spotR * wMul, sy + py * spotR * wMul);
                sctx.lineTo(sx - px * spotR * wMul, sy - py * spotR * wMul);
                sctx.lineTo(lx - px * 5, ly - py * 5);
                sctx.closePath(); sctx.fill();
            }

            // Fixture: yoke on the truss, head aimed at its target
            sctx.globalCompositeOperation = 'source-over';
            sctx.fillStyle = '#1b1b1b'; sctx.strokeStyle = '#555'; sctx.lineWidth = 1.5;
            sctx.beginPath(); sctx.roundRect(fx - 9, trussY - 4, 18, 8, 2); sctx.fill(); sctx.stroke();
            sctx.beginPath(); sctx.moveTo(fx - 12, fy - 10); sctx.lineTo(fx - 12, fy); sctx.moveTo(fx + 12, fy - 10); sctx.lineTo(fx + 12, fy); sctx.stroke();
            sctx.save();
            sctx.translate(fx, fy); sctx.rotate(ang - Math.PI / 2);
            sctx.beginPath(); sctx.roundRect(-10, -8, 20, 24, 5); sctx.fill(); sctx.stroke();
            sctx.fillStyle = `hsl(${hue}, 90%, 82%)`;
            sctx.shadowColor = `hsl(${hue}, 90%, 60%)`; sctx.shadowBlur = 14;
            sctx.beginPath(); sctx.ellipse(0, 16, 7, 3, 0, 0, Math.PI * 2); sctx.fill();
            sctx.restore();
        }
    }

    function frame(ms) {
        const t = ms / 1000;
        sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        sctx.globalCompositeOperation = 'source-over';
        sctx.clearRect(0, 0, W, H);
        drawLasers(t);
        drawHeads(t);
    }

    let running = false, visible = true, raf = 0;
    function loop(ms) { frame(ms); raf = running ? requestAnimationFrame(loop) : 0; }
    function setRunning(on) {
        if (reduceMotion) return;
        if (on && !running) { running = true; raf = requestAnimationFrame(loop); }
        if (!on) { running = false; cancelAnimationFrame(raf); }
    }

    measure();
    window.addEventListener('resize', () => { measure(); if (reduceMotion) frame(9000); });
    setInterval(measure, 1500); // the page can reflow as fonts load
    if (reduceMotion) { frame(9000); return; }
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([e]) => { visible = e.isIntersecting; setRunning(visible && !document.hidden); }).observe(hero);
    }
    document.addEventListener('visibilitychange', () => setRunning(visible && !document.hidden));
    setRunning(true);
})();
