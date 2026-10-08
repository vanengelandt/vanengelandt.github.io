// Hero light show: moving heads in haze lighting up the logo, run from a cue stack like a
// lighting desk (slow moves, mirrored pair effects, dimmer fades and strobe pulses), with steady 360° lasers.
(() => {
    const hero = document.getElementById('home');
    const stage = document.querySelector('.logo-symbol');   // the beams aim at the symbol
    const sky = document.getElementById('show-canvas');   // in the hero, behind the logo: lasers
    const rigCv = document.getElementById('rig-canvas');   // fixed to the screen, behind the page: the beams
    const topCv = document.getElementById('truss-canvas');   // fixed to the screen, over the page: truss and fixtures
    if (!hero || !stage || !sky || !rigCv || !topCv) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sctx = sky.getContext('2d'), rctx = rigCv.getContext('2d'), tctx = topCv.getContext('2d');
    let W = 0, H = 0, RW = 0, RH = 0, dpr = 1;
    // logo: where the logo is now, in hero coordinates (the lasers follow it).
    // aim: where the logo sits with the page at the top, in screen coordinates. The rig stays on
    // screen while scrolling and keeps playing at that spot, behind whatever content is there.
    let logo = { x: 0, y: 0, w: 1, h: 1 }, aim = { x: 0, y: 0, w: 1, h: 1 };

    // ---------- Fixtures ----------
    // Six heads on wide screens, four on phones. Effects run in mirrored pairs counted from the
    // centre (pair 0 = the two middle heads), so every look is symmetrical left to right;
    // alt = pairs 0 and 2 (inner and outer) against pair 1.
    let heads = [];
    function rig() {
        const n = RW < 700 ? 4 : 6, mid = (n - 1) / 2;
        // Keep the right end of the truss free for the colour buttons; the left side mirrors it
        const m = Math.max(0.08, 64 / RW);
        heads = Array.from({ length: n }, (_, i) => {
            const pair = Math.round(Math.abs(i - mid) - 0.5);
            return { i, fx: m + (1 - 2 * m) * i / (n - 1), pair, alt: pair % 2 === 0, d: Math.abs(i - mid) / mid };
        });
    }

    // ---------- Cue stack ----------
    // Programmed like a lighting desk: each cue sets a position (u, v in logo widths/heights from
    // the logo centre; |u|,|v| > 0.5 points past the logo into the room) and a dimmer level per
    // head, with its own fade times. Effects run on top. Moves into a new look happen in the dark.
    const spread = (i, n, w) => (i / (n - 1) - 0.5) * w;
    const LOOP = 40;
    // laser: the laser look for the cue (steady, never strobed), crossfaded over lf seconds
    const CUES = [
        { at: 0,    pf: 0,   df: 1.2, pos: (i, n) => ({ u: spread(i, n, 0.5), v: 0 }), dim: () => 0 },
        { at: 1,    pf: 0,   df: 1.5, pos: (i, n) => ({ u: spread(i, n, 0.5), v: 0 }), dim: (h) => h.alt ? 1 : 0, laser: 'open', lf: 0.3 },
        { at: 3,    pf: 0,   df: 1.5, pos: (i, n) => ({ u: spread(i, n, 0.5), v: 0 }), dim: () => 1, laser: 'fan' },
        { at: 5,    pf: 3,   df: 0,   pos: (i, n) => ({ u: spread(i, n, 0.36), v: -0.04 }), dim: () => 1, laser: 'star', lf: 1.2 },
        { at: 9,    pf: 5,   df: 0,   pos: (i, n) => ({ u: spread(i, n, 4.6), v: 2.4 }), dim: () => 1, fx: 'alt', rate: 1, laser: 'spin', lf: 1.5 },
        { at: 15,   pf: 0.4, df: 0.4,   pos: (i, n) => ({ u: spread(i, n, 0.62), v: 0.02 }), dim: () => 0, laser: 'rainbow', lf: 0.5 },
        { at: 15.5, pf: 0,   df: 0,   pos: (i, n) => ({ u: spread(i, n, 0.62), v: 0.02 }), dim: () => 1, fx: 'strobe', who: 'all', laser: 'rainbow' },
        { at: 17.1, pf: 0,   df: 0,   pos: (i, n) => ({ u: spread(i, n, 0.62), v: 0.02 }), dim: () => 0, laser: 'rainbow' },
        { at: 17.5, pf: 0,   df: 0.6,   pos: (i, n) => ({ u: spread(i, n, 0.62), v: 0.02 }), dim: () => 1, laser: 'rainbow' },
        { at: 20.5, pf: 6,   df: 1,   pos: (i, n) => ({ u: -spread(i, n, 1.7), v: 0.7 }), dim: () => 1, fx: 'wave', rate: 2.4, laser: 'tunnel', lf: 2 },
        { at: 27,   pf: 3,   df: 0.5, pos: (i, n) => ({ u: spread(i, n, 0.7), v: 0 }), dim: () => 1, fx: 'strobe', who: 'inout', laser: 'spinbow', lf: 1.5 },
        { at: 30,   pf: 0,   df: 0,   pos: (i, n) => ({ u: spread(i, n, 0.7), v: 0 }), dim: () => 1, fx: 'strobe', who: 'mid', laser: 'spinbow' },
        { at: 33,   pf: 2,   df: 0,   pos: (i, n) => ({ u: spread(i, n, 0.4), v: -0.04 }), dim: () => 1, laser: 'rainbow', lf: 1.5 },
        { at: 37,   pf: 0,   df: 2.5, pos: (i, n) => ({ u: spread(i, n, 0.4), v: -0.04 }), dim: () => 0, lf: 2.5 },
    ];
    const ease = x => x <= 0 ? 0 : x >= 1 ? 1 : x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    // Nothing snaps: every dimmer change, effect start and effect stop has a fade time
    const MIN_FADE = 0.35, FX_FADE = 0.6;
    // Strobe runs as a soft pulse: quick swell up, short hold, smooth fall
    const PULSE_HZ = 2.5;
    const pulse = t => Math.pow(0.5 - 0.5 * Math.cos(2 * Math.PI * t * PULSE_HZ), 1.6);
    const clamp01 = x => x < 0 ? 0 : x > 1 ? 1 : x;
    // Dimmer multiplier an effect gives one head, `since` seconds into its cue
    function fxLevel(c, h, since) {
        if (c.fx === 'alt') {   // mirrored pairs crossfade against each other, holding between fades
            const a = clamp01(0.5 + 1.6 * Math.cos(Math.PI * since * c.rate));
            return h.alt ? a : 1 - a;
        }
        // Wave rolls out from the centre to both sides at once
        if (c.fx === 'wave') return 0.12 + 0.88 * Math.max(0, Math.sin(2 * Math.PI * (since / c.rate - h.d * 0.45)));
        if (c.fx === 'strobe' && (c.who === 'all' || (c.who === 'inout') === h.alt)) return pulse(since);
        return 1;
    }

    // Where each head points and how bright it is at show time t
    function cueState(t) {
        const lt = ((t % LOOP) + LOOP) % LOOP;
        let k = CUES.length - 1;
        while (k > 0 && CUES[k].at > lt) k--;
        const cue = CUES[k], prev = CUES[(k - 1 + CUES.length) % CUES.length];
        const since = lt - cue.at;
        const pk = cue.pf ? ease(since / cue.pf) : 1, dk = ease(since / Math.max(cue.df, MIN_FADE));
        const fk = ease(since / FX_FADE), prevSince = since + cue.at - prev.at;
        const n = heads.length;
        return {
            cue, prev, since, lt,
            heads: heads.map(h => {
                const a = prev.pos(h.i, n), b = cue.pos(h.i, n);
                const base = prev.dim(h) + (cue.dim(h) - prev.dim(h)) * dk;
                const mult = fxLevel(prev, h, prevSince) * (1 - fk) + fxLevel(cue, h, since) * fk;
                const level = base * mult;
                const flash = false;
                return { u: a.u + (b.u - a.u) * pk, v: a.v + (b.v - a.v) * pk, level, flash };
            }),
        };
    }

    function measure() {
        // Soft light needs no retina sharpness; a lower canvas resolution keeps scrolling smooth
        dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        const hr = hero.getBoundingClientRect();
        W = hr.width; H = hr.height;
        if (sky.width !== Math.round(W * dpr) || sky.height !== Math.round(H * dpr)) { sky.width = Math.round(W * dpr); sky.height = Math.round(H * dpr); }
        RW = window.innerWidth; RH = window.innerHeight;
        for (const cv of [rigCv, topCv]) if (cv.width !== Math.round(RW * dpr) || cv.height !== Math.round(RH * dpr)) { cv.width = Math.round(RW * dpr); cv.height = Math.round(RH * dpr); }
        // Layout position without the scroll and 3D transforms
        let x = 0, y = 0;
        for (let el = stage; el; el = el.offsetParent) { x += el.offsetLeft; y += el.offsetTop; }
        aim = { x: x + stage.offsetWidth / 2, y: y + stage.offsetHeight / 2, w: stage.offsetWidth, h: stage.offsetHeight };
        trackLogo(hr);
        rig();
    }
    // The logo moves while scrolling, so the fixtures re-aim at it on every frame
    function trackLogo(hr = hero.getBoundingClientRect()) {
        const sr = stage.getBoundingClientRect();
        logo = { x: sr.left - hr.left + sr.width / 2, y: sr.top - hr.top + sr.height / 2, w: sr.width, h: sr.height };
    }

    // ---------- Lasers ----------
    const LASER = ['#ffcf6b', '#fff3d6', '#e0a53a'];
    // r0 starts the beam on a ring around the logo, so 360° looks leave the logo free
    function laserLine(cx, cy, ang, len, col, alpha, r0 = 0) {
        const c = Math.cos(ang), s = Math.sin(ang);
        const x0 = cx + c * r0, y0 = cy + s * r0, x1 = cx + c * len, y1 = cy + s * len;
        // Beams pointing down cross the headline, so they run softer
        alpha *= 0.55 + 0.45 * Math.max(0, -s);
        const g = sctx.createLinearGradient(x0, y0, x1, y1);
        g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)');
        sctx.strokeStyle = g;
        alpha *= 0.8;
        sctx.globalAlpha = alpha * 0.18; sctx.lineWidth = 7;
        sctx.beginPath(); sctx.moveTo(x0, y0); sctx.lineTo(x1, y1); sctx.stroke();
        sctx.globalAlpha = alpha; sctx.lineWidth = 1.4;
        sctx.beginPath(); sctx.moveTo(x0, y0); sctx.lineTo(x1, y1); sctx.stroke();
    }
    // Rainbow keyed to the angle away from straight up, so the left side mirrors the right
    const bow = (ang, lt) => {
        const a = Math.abs(Math.atan2(Math.cos(ang), -Math.sin(ang)));   // 0 = up, π = down
        return `hsl(${(a / Math.PI * 300 + lt * 45) % 360}, 100%, 62%)`;
    };
    // Every look is mirrored around the vertical line through the logo
    function laserLook(look, lt, since, len, x0, y0, alpha) {
        if (!look || alpha <= 0) return;
        const up = -Math.PI / 2, TAU = Math.PI * 2, r0 = logo.w * 0.55;
        const fan = (n, spread, base, col, a) => { for (let i = 0; i < n; i++) laserLine(x0, y0, base - spread / 2 + spread * i / (n - 1), len, col, a); };
        // n beams all the way round, mirrored: angles up ± (rot + k·2π/n)
        const ring = (n, rot, colFn, a) => {
            for (let k = 0; k < n; k++) {
                const off = rot + TAU * k / n;
                laserLine(x0, y0, up + off, len, colFn(up + off), a, r0);
                if (Math.abs(Math.sin(off)) > 1e-3) laserLine(x0, y0, up - off, len, colFn(up - off), a, r0);
            }
        };
        if (look === 'open') fan(9, 0.1 + 1.9 * ease(since / 2), up, LASER[0], alpha);   // opens from one line
        if (look === 'fan') fan(9, 1.8 + 0.35 * Math.sin(lt * 0.4), up, LASER[0], 0.9 * alpha);   // breathes slowly
        // Gold star bursting open all round the logo
        if (look === 'star') ring(12, 0.06 + 0.2 * ease(since / 3) + 0.08 * Math.sin(lt * 0.5), () => LASER[0], 0.75 * alpha);
        // Two mirrored sets turning against each other all round: beams cross top and bottom
        if (look === 'spin') ring(8, lt * 0.35, () => LASER[0], 0.8 * alpha);
        if (look === 'spinbow') ring(8, lt * 0.35, ang => bow(ang, lt), 0.85 * alpha);
        // Rainbow burst: dense 360° wall of thin beams, colours rolling from top to bottom
        if (look === 'rainbow') ring(18, 0.04 * Math.sin(lt * 0.4), ang => bow(ang, lt), 0.6 * alpha);
        // Tunnel: rainbow rings growing out of the logo, with a faint gold star behind
        if (look === 'tunnel') {
            ring(12, 0.13, () => LASER[2], 0.35 * alpha);
            const M = 5, maxR = Math.hypot(W, H) * 0.6;
            for (let j = 0; j < M; j++) {
                const p = (lt * 0.22 + j / M) % 1, r = r0 + p * maxR;
                const a = alpha * Math.sin(Math.PI * p) * 0.9;
                sctx.strokeStyle = `hsl(${(j * 72 + lt * 30) % 360}, 100%, 62%)`;
                sctx.globalAlpha = a * 0.18; sctx.lineWidth = 7;
                sctx.beginPath(); sctx.arc(x0, y0, r, 0, TAU); sctx.stroke();
                sctx.globalAlpha = a; sctx.lineWidth = 1.4;
                sctx.beginPath(); sctx.arc(x0, y0, r, 0, TAU); sctx.stroke();
            }
        }
    }
    function drawLasers(state) {
        const { cue, prev } = state;
        const k = Math.min(1, state.since / (cue.lf || 0.8));
        const same = cue.laser === prev.laser;
        const cur = same ? 1 : k, old = same ? 0 : 1 - k;
        if (!cue.laser && !prev.laser) return;
        const len = Math.hypot(W, H);
        const x0 = logo.x, y0 = logo.y - logo.h * 0.05;
        sctx.globalCompositeOperation = 'lighter';
        laserLook(prev.laser, state.lt, state.since + cue.at - prev.at, len, x0, y0, old);
        laserLook(cue.laser, state.lt, state.since, len, x0, y0, cur);
        sctx.globalAlpha = 1;
        // Hot spot where the lasers leave the projector, peeking from behind the logo
        const fade = (cue.laser ? cur : 0) + (prev.laser ? old : 0);
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
    // Tinted copies of the sprite, cached per colour (a colour change fades through a few dozen)
    const tinted = new Map();
    function beamFor(col) {
        const key = col.join(',');
        if (!tinted.has(key)) {
            if (tinted.size > 60) tinted.clear();
            const cv = document.createElement('canvas'); cv.width = BEAM_W; cv.height = BEAM_L;
            const c = cv.getContext('2d');
            c.drawImage(beamSprite, 0, 0);
            c.globalCompositeOperation = 'source-in';
            c.fillStyle = `rgb(${key})`; c.fillRect(0, 0, BEAM_W, BEAM_L);
            tinted.set(key, cv);
        }
        return tinted.get(key);
    }
    const beamCol = (c, a) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;

    // ---------- Colour ----------
    // Picked with the buttons on the truss: warm white, then the red, green, blue and magenta of the logo
    const COLOURS = [[244, 228, 194], [255, 92, 98], [64, 214, 140], [96, 132, 255], [216, 96, 200]];
    let pick = 0;
    try { pick = Math.min(COLOURS.length - 1, Math.max(0, parseInt(localStorage.getItem('lightColour'), 10) || 0)); } catch (e) {}
    let colNow = COLOURS[pick].slice(), lightCol = COLOURS[pick].slice(), lastT = 0;
    // Colour changes fade like a CMY mix on a real head
    function stepColour(t) {
        const k = Math.min(1, Math.max(0, t - lastT) / 0.9);
        lastT = t;
        colNow = colNow.map((v, i) => v + (COLOURS[pick][i] - v) * (k || 1));
        lightCol = colNow.map(Math.round);
    }

    function drawBeam(lx, ly, sx, sy, spotR, col, level) {
        const len = Math.hypot(sx - lx, sy - ly), ang = Math.atan2(sy - ly, sx - lx);
        bctx.save();
        bctx.translate(lx, ly); bctx.rotate(ang - Math.PI / 2);
        bctx.globalAlpha = Math.min(1, level);
        bctx.drawImage(beamFor(col), -spotR * 1.3, 0, spotR * 2.6, len);
        bctx.restore();
        // The beam ends in a round pool of light instead of a straight cut
        const r = spotR * 1.3, a = 0.32 * Math.min(1, level);
        const pool = bctx.createRadialGradient(sx, sy, 0, sx, sy, r);
        pool.addColorStop(0, beamCol(col, a)); pool.addColorStop(0.7, beamCol(col, a * 0.85)); pool.addColorStop(1, beamCol(col, 0));
        bctx.fillStyle = pool;
        bctx.beginPath(); bctx.arc(sx, sy, r, 0, Math.PI * 2); bctx.fill();
    }

    function drawHeads(t, state) {
        const trussY = window.innerWidth < 1100 ? 96 : 104, spotR = Math.min(aim.w, aim.h * 1.4) * 0.22;
        // Truss, over the page: once scrolled, a dark band behind it keeps passing text from showing through
        if (window.scrollY > 40) {
            const band = tctx.createLinearGradient(0, 0, 0, trussY + 40);
            band.addColorStop(0, 'rgba(5,5,5,0.92)'); band.addColorStop(0.75, 'rgba(5,5,5,0.92)'); band.addColorStop(1, 'rgba(5,5,5,0)');
            tctx.globalCompositeOperation = 'source-over'; tctx.fillStyle = band; tctx.fillRect(0, 0, RW, trussY + 40);
        }
        tctx.globalCompositeOperation = 'source-over';
        tctx.globalAlpha = 1;
        tctx.strokeStyle = 'rgba(201, 164, 92, 0.35)'; tctx.lineWidth = 1.2;
        tctx.strokeRect(-2, trussY - 16, RW + 4, 12);
        tctx.beginPath();
        for (let x = 0; x < RW; x += 16) { tctx.moveTo(x, trussY - 4); tctx.lineTo(x + 8, trussY - 16); tctx.lineTo(x + 16, trussY - 4); }
        tctx.stroke();

        const bw = Math.max(1, Math.round(RW / 2)), bh = Math.max(1, Math.round(RH / 2));
        if (beamCv.width !== bw || beamCv.height !== bh) { beamCv.width = bw; beamCv.height = bh; }
        bctx.setTransform(0.5, 0, 0, 0.5, 0, 0);
        bctx.globalCompositeOperation = 'source-over';
        bctx.clearRect(0, 0, RW, RH);
        bctx.globalCompositeOperation = 'lighter';

        const spots = [];
        for (const h of heads) {
            const st = state.heads[h.i];
            const col = lightCol, level = st.level;
            const fx = h.fx * RW, fy = trussY + 14;
            const sx = aim.x + st.u * aim.w, sy = aim.y + st.v * aim.h;
            const ang = Math.atan2(sy - fy, sx - fx);
            const lx = fx + Math.cos(ang) * 16, ly = fy + Math.sin(ang) * 16;
            h.ang = ang; h.col = col; h.lx = lx; h.ly = ly; h.level = level; h.flash = st.flash;
            if (level <= 0.002) continue;
            const onLogo = Math.abs(st.u) < 0.6 && Math.abs(st.v) < 0.6;
            spots.push({ u: st.u, v: st.v, ang, col, level: Math.min(1, level) });
            // The cone keeps widening past the logo when a head points into the room
            const ref = Math.hypot(aim.x - fx, aim.y - fy), dist = Math.hypot(sx - lx, sy - ly);
            drawBeam(lx, ly, sx, sy, spotR * Math.max(1, dist / ref), col, level);
            if (onLogo) {
                // Light scattering in the haze where the beam meets the logo
                const sc = bctx.createRadialGradient(sx, sy, 0, sx, sy, spotR * 1.9);
                sc.addColorStop(0, beamCol(col, 0.2 * level)); sc.addColorStop(1, beamCol(col, 0));
                bctx.fillStyle = sc; bctx.fillRect(sx - spotR * 2, sy - spotR * 2, spotR * 4, spotR * 4);
            }
        }

        // Drifting smoke breaks the beams up, then the layer is added onto the scene
        bctx.globalCompositeOperation = 'destination-in';
        hazePat.setTransform(new DOMMatrix().translate(-t * 14, -t * 6).scale(3.2));
        bctx.fillStyle = hazePat; bctx.fillRect(0, 0, RW, RH);
        rctx.globalCompositeOperation = 'lighter';
        rctx.drawImage(beamCv, 0, 0, RW, RH);

        // Fixtures: yoke on the truss, head aimed at its target, lens glowing
        for (const h of heads) {
            const fx = h.fx * RW, fy = trussY + 14;
            tctx.globalCompositeOperation = 'source-over';
            tctx.fillStyle = '#1b1b1b'; tctx.strokeStyle = '#555'; tctx.lineWidth = 1.5;
            tctx.beginPath(); tctx.roundRect(fx - 9, trussY - 4, 18, 8, 2); tctx.fill(); tctx.stroke();
            tctx.beginPath(); tctx.moveTo(fx - 12, fy - 10); tctx.lineTo(fx - 12, fy); tctx.moveTo(fx + 12, fy - 10); tctx.lineTo(fx + 12, fy); tctx.stroke();
            tctx.save();
            tctx.translate(fx, fy); tctx.rotate(h.ang - Math.PI / 2);
            tctx.beginPath(); tctx.roundRect(-10, -8, 20, 24, 5); tctx.fill(); tctx.stroke();
            tctx.fillStyle = h.level > 0.02 ? '#fffaf0' : '#2a2620';
            tctx.shadowColor = beamCol(h.col || lightCol, Math.min(1, h.level)); tctx.shadowBlur = 18;
            tctx.beginPath(); tctx.ellipse(0, 16, 7, 3, 0, 0, Math.PI * 2); tctx.fill();
            tctx.restore();
            // Glare around the lens
            if (h.level <= 0.02) continue;
            tctx.globalCompositeOperation = 'lighter';
            tctx.globalAlpha = Math.min(1, h.level);
            const gl = tctx.createRadialGradient(h.lx, h.ly, 0, h.lx, h.ly, 46);
            gl.addColorStop(0, beamCol(h.col, 0.55)); gl.addColorStop(0.25, beamCol(h.col, 0.12)); gl.addColorStop(1, beamCol(h.col, 0));
            tctx.fillStyle = gl; tctx.fillRect(h.lx - 46, h.ly - 46, 92, 92);
            tctx.globalAlpha = 1;
        }
        if (window.scrollY < hero.offsetHeight) lightLogo(spots, spotR);
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
        // Saturated colours tint the lit logo more than warm white does
        const c = spots[0] ? spots[0].col : lightCol, sat = (Math.max(...c) - Math.min(...c)) / 255;
        lctx.fillStyle = beamCol(c, 0.1 + 0.45 * sat);
        lctx.fillRect(0, 0, w, h);
        lctx.globalCompositeOperation = 'source-over';
    }

    let skyClear = true;
    function frame(ms) {
        const t = ms / 1000;
        const state = cueState(t);
        stepColour(t);
        // Lasers only while the hero is on screen; they scroll away with the logo
        const heroOn = window.scrollY < hero.offsetHeight;
        if (heroOn || !skyClear) {
            if (!reduceMotion) trackLogo();
            sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            sctx.globalCompositeOperation = 'source-over';
            sctx.clearRect(0, 0, W, H);
            if (heroOn) drawLasers(state);
            skyClear = !heroOn;
        }
        rctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        rctx.globalCompositeOperation = 'source-over';
        rctx.clearRect(0, 0, RW, RH);
        tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        tctx.globalCompositeOperation = 'source-over';
        tctx.clearRect(0, 0, RW, RH);
        drawHeads(t, state);
    }

    let running = false, raf = 0;
    function loop(ms) {
        frame(ms);
        raf = running ? requestAnimationFrame(loop) : 0;
    }
    function setRunning(on) {
        if (reduceMotion) return;
        if (on && !running) { running = true; raf = requestAnimationFrame(loop); }
        if (!on) { running = false; cancelAnimationFrame(raf); }
    }

    // Colour buttons on the truss
    const swatches = [...document.querySelectorAll('.rig-colors [data-colour]')];
    const markPick = () => swatches.forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.colour === pick)));
    swatches.forEach(b => b.addEventListener('click', () => {
        pick = +b.dataset.colour;
        try { localStorage.setItem('lightColour', String(pick)); } catch (e) {}
        markPick();
        if (reduceMotion) { colNow = COLOURS[pick].slice(); lastT = 0; frame(19000); }
    }));
    markPick();

    measure();
    window.addEventListener('resize', () => { measure(); if (reduceMotion) frame(19000); });
    setInterval(measure, 1500); // the page can reflow as fonts load
    if (reduceMotion) { frame(19000); return; }
    document.addEventListener('visibilitychange', () => setRunning(!document.hidden));
    setRunning(true);
})();
