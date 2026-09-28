// Hero light show: moving heads in haze lighting up the logo,
// and gold lasers fanning out from behind it.
(() => {
    const hero = document.getElementById('home');
    const stage = document.querySelector('.logo-symbol');   // the beams aim at the symbol
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
        // Soft light needs no retina sharpness; a lower canvas resolution keeps scrolling smooth
        dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        const hr = hero.getBoundingClientRect();
        W = hr.width; H = hr.height;
        if (sky.width !== Math.round(W * dpr) || sky.height !== Math.round(H * dpr)) { sky.width = Math.round(W * dpr); sky.height = Math.round(H * dpr); }
        trackLogo(hr);
    }
    // The logo moves while scrolling, so the fixtures re-aim at it on every frame
    function trackLogo(hr = hero.getBoundingClientRect()) {
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

    // ---------- Haze ----------
    // Tileable smoke texture; beams are multiplied by it so they break up like real haze
    const HAZE = 128;
    const hazeTex = document.createElement('canvas');
    hazeTex.width = hazeTex.height = HAZE;
    (() => {
        const hctx = hazeTex.getContext('2d'), img = hctx.createImageData(HAZE, HAZE);
        const field = new Float32Array(HAZE * HAZE);
        for (const [cells, amp] of [[4, 0.55], [8, 0.28], [16, 0.17]]) {
            const grid = Array.from({ length: cells * cells }, Math.random);
            const at = (x, y) => grid[(y % cells) * cells + (x % cells)];
            const step = HAZE / cells, sm = v => v * v * (3 - 2 * v);
            for (let y = 0; y < HAZE; y++) for (let x = 0; x < HAZE; x++) {
                const gx = Math.floor(x / step), gy = Math.floor(y / step);
                const fx = sm(x / step - gx), fy = sm(y / step - gy);
                const top = at(gx, gy) * (1 - fx) + at(gx + 1, gy) * fx;
                const bot = at(gx, gy + 1) * (1 - fx) + at(gx + 1, gy + 1) * fx;
                field[y * HAZE + x] += amp * (top * (1 - fy) + bot * fy);
            }
        }
        for (let i = 0; i < field.length; i++) {
            img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = 255;
            img.data[i * 4 + 3] = Math.round(255 * Math.min(1, 0.3 + field[i] * 0.95));
        }
        hctx.putImageData(img, 0, 0);
    })();
    // Beams render at half resolution into their own layer; they are soft anyway
    const beamCv = document.createElement('canvas');
    const bctx = beamCv.getContext('2d');
    const hazePat = bctx.createPattern(hazeTex, 'repeat');

    // Light falling on the logo: a brighter copy of the logo, revealed where the beams land
    const lit = document.getElementById('logo-light');
    const lctx = lit && lit.getContext('2d');
    const logoImg = document.querySelector('.brand-logo');
    let brightLogo = null;
    function bakeBrightLogo(w, h) {
        if (brightLogo && brightLogo.width === Math.round(w * dpr)) return brightLogo;
        const cv = document.createElement('canvas');
        cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
        const c = cv.getContext('2d');
        c.filter = 'brightness(1.55) saturate(1.2)';
        c.drawImage(logoImg, 0, 0, cv.width, cv.height);
        if (c.filter === 'none' || c.filter === undefined) {
            // No canvas filters (older Safari): brighten by adding the logo onto itself
            c.globalCompositeOperation = 'lighter'; c.globalAlpha = 0.55;
            c.drawImage(logoImg, 0, 0, cv.width, cv.height);
        }
        return (brightLogo = cv);
    }

    // ---------- Moving heads ----------
    function targetOf(h, t) {
        // Where each beam lands on the logo, as a fraction of its box (-0.5..0.5)
        return {
            u: 0.3 * Math.sin(t * h.sp + h.ph),
            v: 0.28 * Math.sin(t * h.sp * 1.37 + h.ph * 0.7) - 0.02,
        };
    }
    // One beam is rendered once into a sprite (soft Gaussian-like cross-section, brightest at
    // the lens) and then stretched and rotated per fixture each frame, which is far cheaper
    const BEAM_W = 96, BEAM_L = 256;
    const beamSprite = document.createElement('canvas');
    beamSprite.width = BEAM_W; beamSprite.height = BEAM_L;
    (() => {
        const c = beamSprite.getContext('2d'), img = c.createImageData(BEAM_W, BEAM_L);
        for (let y = 0; y < BEAM_L; y++) {
            const v = y / (BEAM_L - 1);                          // 0 at the lens, 1 at the logo
            const half = 0.06 + 0.94 * v;                        // cone widens towards the logo
            const along = 0.55 + 1.6 * Math.pow(1 - v, 3);       // hot near the lens
            for (let x = 0; x < BEAM_W; x++) {
                const u = Math.abs((x + 0.5) / BEAM_W * 2 - 1) / half;  // 0 centre, 1 edge
                const across = u >= 1.15 ? 0 : Math.exp(-u * u * 2.2) * Math.min(1, (1.15 - u) * 4);
                const i = (y * BEAM_W + x) * 4;
                img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
                img.data[i + 3] = Math.round(255 * Math.min(1, 0.42 * along * across));
            }
        }
        c.putImageData(img, 0, 0);
    })();
    // Tinted copies of the sprite, cached per hue step
    const tinted = new Map();
    function beamFor(hue) {
        const key = Math.round(hue);
        if (!tinted.has(key)) {
            const cv = document.createElement('canvas'); cv.width = BEAM_W; cv.height = BEAM_L;
            const c = cv.getContext('2d');
            c.drawImage(beamSprite, 0, 0);
            c.globalCompositeOperation = 'source-in';
            c.fillStyle = `hsl(${key}, 70%, 86%)`; c.fillRect(0, 0, BEAM_W, BEAM_L);
            tinted.set(key, cv);
        }
        return tinted.get(key);
    }
    const beamCol = (hue, a) => `hsla(${hue}, 70%, 86%, ${a})`;

    function drawBeam(lx, ly, sx, sy, spotR, hue, level) {
        const len = Math.hypot(sx - lx, sy - ly), ang = Math.atan2(sy - ly, sx - lx);
        bctx.save();
        bctx.translate(lx, ly); bctx.rotate(ang - Math.PI / 2);
        bctx.globalAlpha = level;
        bctx.drawImage(beamFor(hue), -spotR * 1.3, 0, spotR * 2.6, len);
        bctx.restore();
    }

    function drawHeads(t) {
        const trussY = window.innerWidth < 1100 ? 96 : 104, spotR = Math.min(logo.w, logo.h * 1.4) * 0.22;
        // Truss
        sctx.globalCompositeOperation = 'source-over';
        sctx.globalAlpha = 1;
        sctx.strokeStyle = 'rgba(201, 164, 92, 0.35)'; sctx.lineWidth = 1.2;
        sctx.strokeRect(-2, trussY - 16, W + 4, 12);
        sctx.beginPath();
        for (let x = 0; x < W; x += 16) { sctx.moveTo(x, trussY - 4); sctx.lineTo(x + 8, trussY - 16); sctx.lineTo(x + 16, trussY - 4); }
        sctx.stroke();

        const bw = Math.max(1, Math.round(W / 2)), bh = Math.max(1, Math.round(H / 2));
        if (beamCv.width !== bw || beamCv.height !== bh) { beamCv.width = bw; beamCv.height = bh; }
        bctx.setTransform(0.5, 0, 0, 0.5, 0, 0);
        bctx.globalCompositeOperation = 'source-over';
        bctx.clearRect(0, 0, W, H);
        bctx.globalCompositeOperation = 'lighter';

        const spots = [];
        for (const h of heads) {
            const hue = 40 + 5 * Math.sin(t * 0.3 + h.ph);
            const level = 0.9 + 0.1 * Math.sin(t * 0.5 + h.ph * 2);
            const fx = h.fx * W, fy = trussY + 14;
            const tg = targetOf(h, t);
            const sx = logo.x + tg.u * logo.w, sy = logo.y + tg.v * logo.h;
            const ang = Math.atan2(sy - fy, sx - fx);
            const lx = fx + Math.cos(ang) * 16, ly = fy + Math.sin(ang) * 16;
            h.ang = ang; h.hue = hue; h.lx = lx; h.ly = ly;
            spots.push({ u: tg.u, v: tg.v, ang, hue, level });

            drawBeam(lx, ly, sx, sy, spotR, hue, level);
            // Light scattering in the haze where the beam meets the logo
            const sc = bctx.createRadialGradient(sx, sy, 0, sx, sy, spotR * 1.9);
            sc.addColorStop(0, beamCol(hue, 0.2 * level)); sc.addColorStop(1, beamCol(hue, 0));
            bctx.fillStyle = sc; bctx.fillRect(sx - spotR * 2, sy - spotR * 2, spotR * 4, spotR * 4);
        }

        // Drifting smoke breaks the beams up, then the layer is added onto the scene
        bctx.globalCompositeOperation = 'destination-in';
        hazePat.setTransform(new DOMMatrix().translate(-t * 14, -t * 6).scale(3.2));
        bctx.fillStyle = hazePat; bctx.fillRect(0, 0, W, H);
        sctx.globalCompositeOperation = 'lighter';
        sctx.drawImage(beamCv, 0, 0, W, H);

        // Fixtures: yoke on the truss, head aimed at its target, lens glowing
        for (const h of heads) {
            const fx = h.fx * W, fy = trussY + 14;
            sctx.globalCompositeOperation = 'source-over';
            sctx.fillStyle = '#1b1b1b'; sctx.strokeStyle = '#555'; sctx.lineWidth = 1.5;
            sctx.beginPath(); sctx.roundRect(fx - 9, trussY - 4, 18, 8, 2); sctx.fill(); sctx.stroke();
            sctx.beginPath(); sctx.moveTo(fx - 12, fy - 10); sctx.lineTo(fx - 12, fy); sctx.moveTo(fx + 12, fy - 10); sctx.lineTo(fx + 12, fy); sctx.stroke();
            sctx.save();
            sctx.translate(fx, fy); sctx.rotate(h.ang - Math.PI / 2);
            sctx.beginPath(); sctx.roundRect(-10, -8, 20, 24, 5); sctx.fill(); sctx.stroke();
            sctx.fillStyle = '#fffaf0';
            sctx.shadowColor = `hsl(${h.hue}, 90%, 70%)`; sctx.shadowBlur = 18;
            sctx.beginPath(); sctx.ellipse(0, 16, 7, 3, 0, 0, Math.PI * 2); sctx.fill();
            sctx.restore();
            // Glare around the lens
            sctx.globalCompositeOperation = 'lighter';
            const gl = sctx.createRadialGradient(h.lx, h.ly, 0, h.lx, h.ly, 46);
            gl.addColorStop(0, beamCol(h.hue, 0.55)); gl.addColorStop(0.25, beamCol(h.hue, 0.12)); gl.addColorStop(1, beamCol(h.hue, 0));
            sctx.fillStyle = gl; sctx.fillRect(h.lx - 46, h.ly - 46, 92, 92);
        }
        lightLogo(spots, spotR);
    }

    function lightLogo(spots, spotR) {
        if (!lctx || !logoImg.complete || !logoImg.naturalWidth) return;
        const w = lit.clientWidth, h = lit.clientHeight;
        if (!w || !h) return;
        if (lit.width !== Math.round(w * dpr) || lit.height !== Math.round(h * dpr)) { lit.width = Math.round(w * dpr); lit.height = Math.round(h * dpr); }
        lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        lctx.globalCompositeOperation = 'source-over';
        lctx.clearRect(0, 0, w, h);
        // 1. Pools of light, stretched along the beam because it hits at an angle
        lctx.globalCompositeOperation = 'lighter';
        const r = spotR * (w / logo.w);
        for (const s of spots) {
            lctx.save();
            lctx.translate((0.5 + s.u) * w, (0.5 + s.v) * h);
            lctx.rotate(s.ang); lctx.scale(1.22, 1);
            const g = lctx.createRadialGradient(0, 0, 0, 0, 0, r);
            g.addColorStop(0, `rgba(255,255,255,${s.level})`);
            g.addColorStop(0.62, `rgba(255,255,255,${0.85 * s.level})`);
            g.addColorStop(0.88, `rgba(255,255,255,${0.3 * s.level})`);
            g.addColorStop(1, 'rgba(255,255,255,0)');
            lctx.fillStyle = g;
            lctx.beginPath(); lctx.arc(0, 0, r, 0, Math.PI * 2); lctx.fill();
            lctx.restore();
        }
        // 2. Keep only the logo under those pools, brightened like a lit surface
        lctx.globalCompositeOperation = 'source-in';
        lctx.drawImage(bakeBrightLogo(w, h), 0, 0, w, h);
        // 3. Warm colour of the lamps on top, only where the logo is already lit
        lctx.globalCompositeOperation = 'source-atop';
        lctx.fillStyle = `hsla(${spots[0] ? spots[0].hue : 40}, 80%, 70%, 0.1)`;
        lctx.fillRect(0, 0, w, h);
        lctx.globalCompositeOperation = 'source-over';
    }

    function frame(ms) {
        const t = ms / 1000;
        if (!reduceMotion) trackLogo();
        sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        sctx.globalCompositeOperation = 'source-over';
        sctx.clearRect(0, 0, W, H);
        drawLasers(t);
        drawHeads(t);
    }

    let running = false, visible = true, raf = 0;
    // Once the hero has mostly faded out while scrolling, stop drawing so the scroll effects get the frame budget
    let idle = false;
    function loop(ms) {
        const faded = window.scrollY > hero.offsetHeight * 0.7;
        if (!faded) frame(ms);
        else if (!idle) { sctx.setTransform(1, 0, 0, 1, 0, 0); sctx.clearRect(0, 0, sky.width, sky.height); }
        idle = faded;
        raf = running ? requestAnimationFrame(loop) : 0;
    }
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
