/* ===== EDIT: your name and the four "games", listed in the order an employer should visit them ===== */
const SITE = { name: 'Daniel Rutman', year: 2026, tag: 'Portfolio',
  bio: "Game Developer and Designer with experience in intuitive gameplay mechanics, creating a focused and engaging design for players to enjoy, and working in Unreal Engine, Unity, and C++. Able to take a concept from vision to reality by focusing on responsive controls, design systems, and practical technical implementation. Driven to make games that delight players and keep them engaged while looking amazing." };   // bio = the summary card on the home page (the card grows to fit it)
/* ===== EDIT: flipping the light / dark switch this many times within this many milliseconds makes the Mii say the line ===== */
const MODE_SPAM = { flips: 8, within: 1500, line: 'My eyes...' };
const GAMES = [
  { id: 'experience', href: 'experience.html', title: 'Experience & Projects', short: 'Projects', mode: 'Level Select', icon: 'pencil', color: '#fff3c2',
    say: "Start here! This is Daniel's best work.",
    tour: "Start here! Experience & Projects shows what Daniel has built and where he has worked." },
  { id: 'resume', href: 'resume.html', title: 'Resume', short: 'Resume', mode: 'Character Select', icon: 'doc', color: '#d9ebfb',
    say: "Next stop: the Resume, in IT and Game Dev versions.",
    tour: "Next, grab the Resume. You can flip between the IT and Game Dev versions." },
  { id: 'about', href: 'about.html', title: 'About Me', short: 'About', mode: 'Story Mode', icon: 'book', color: '#dbf2de',
    say: "Want the story? Here is how it all began.",
    tour: "Want the story? About Me is how it all started." },
  { id: 'contact', href: 'contact.html', title: 'Contact Me', short: 'Contact', mode: 'Online Mode', icon: 'globe', color: '#ffe6cf',
    say: "Ready to talk? Say hello here!",
    tour: "Ready to talk? Contact Me and say hello!" }
];
/* ===== EDIT: pictures for the spinning cartridge (swap in your own files; add as many as you like per category) =====
   An entry is either a file name, or [file name, crop focus, 'whole'].
   The cartridge screen is almost square, so wide photos are cropped to fit; the crop focus ("x% y%", 50% 50% = centre) picks which part
   stays in view. Add 'whole' as the third item to show the entire photo instead (nothing is cropped; the space above and below is
   filled with a soft blurred copy of the photo). Use it for a photo where everybody has to be in frame. */
const PICS = {
  experience: ['images/experience-1.svg', 'images/experience-2.svg', 'images/experience-3.svg'],
  resume: ['images/resume-1.svg', 'images/resume-2.svg', 'images/resume-3.svg'],
  about: [['images/aboutP1.webp', '14% 50%'], ['images/aboutP2.webp', '50% 50%'], ['images/aboutP3.webp', '50% 45%'],
          ['images/aboutP4.webp', '50% 50%', 'whole'], ['images/aboutP5.jpg', '50% 42%']],
  contact: ['images/contact-1.svg', 'images/contact-2.svg', 'images/contact-3.svg']
};

/* ===== EDIT: the projects on the Experience & Projects page =====
   Each entry becomes a card (a thumbnail with the title and your role under it) and opens its own full-screen viewer when clicked.
   All of a project's files live in ONE folder; the file names below are inside that folder. To add a project, copy the whole { ... } block,
   give it a new id and folder, and fill it in.
     logo         the thumbnail on the card and the big picture at the top of the viewer (a 16:9 picture fits best; wider art is cropped to its middle)
     tag          the small badge on the thumbnail, like a video's length (leave '' for none)
     preview      what plays when you hover the card (or long press it on a phone): a GIF or any picture file. previewSecs = how long it lasts
                  (it times the thin progress bar along the bottom of the thumbnail)
     shots        the screenshots that drift past in the viewer
     shotsHD      optional, same order as shots: bigger, sharper versions used ONLY when a screenshot is enlarged (the small one shows instantly,
                  then swaps to this when it has loaded). If one is missing, the normal one is used. For real sharpness, put the full-size
                  screenshots in here under these names
     link         an optional button in the viewer, right under the logo art (set it to null to remove it)
     engine       an optional "Engine" box in the viewer; icon is a small picture shown beside the name (leave '' for none) */
const PROJECTS = [
  {
    id: 'possession-protocol',
    title: 'Possession Protocol',
    role: 'Gameplay & Multiplayer Programmer',
    tag: 'Unreal Engine 5',
    folder: 'PossessionProtocol',
    logo: 'PPlogo.png',
    preview: 'PPprev.gif', previewSecs: 9.7,
    shots: ['PP1.png', 'PP2.png', 'PP3.png', 'PP4.png', 'PP5.png', 'PP6.png', 'PP7.png'],
    shotsHD: ['PP1_hd.webp', 'PP2_hd.webp', 'PP3_hd.webp', 'PP4_hd.webp', 'PP5_hd.webp', 'PP6_hd.webp', 'PP7_hd.webp'],
    link: { url: 'https://marwan-e.itch.io/possession-protocol', label: 'View on itch.io' },
    engine: { name: 'Unreal Engine 5', icon: 'skills/unreal.svg' },
    contributions: {
      role: 'Multiplayer & Gameplay Programmer',
      items: ['Programmed multiplayer functionality', 'Programmed Character Classes', 'Added QoL features to enhance player immersion', 'Tested and debugged project']
    },
    about: [
      'Possession Protocol is a local co-op puzzle shooter. In order to progress through the levels, the player must hack robot to robot while eliminating all the enemies, as they deliver the payload at the end of each level.',
      'The game was built in collaboration between the Humber Game Programming and 3D Artist students. The purpose of making the game was to simulate the feeling and work ethics required to work in a real game studio, as the whole team consisted of 40 people. The game was then presented at LevelUp Toronto, where enthusiasts are able to play a large variety of game booths.'
    ]
  }
];

/* ===== EDIT: sound effects. The files live in the "web sounds" folder. Each entry is [file, volume from 0 to 1] ===== */
const SFX_DIR = 'web sounds/';
const SFX = {
  poke: ['miiPoke.mp3', 1], land: ['Mii Land.mp3', 0.7],
  grab: ['miiGrab.mp3', .8],                                           // loops while the Mii is held
  pen: ['pictochat_pen.m4a', .5, [.25, 7.5]], erase: ['pictochat_eraser.m4a', .5, [.1, 0.95]],   // play while you draw / right-click erase AND move.
  // [from, to] = the steady part of the file, in seconds, that gets looped (the pen file fades out at the end and the eraser file fades out over its whole length)
  pick: ['brush pick.wav', 0.5], clear: ['clear.wav', 1],
  hover: ['hoverTab.wav', .7], select: ['tabSelect.wav', 0.5],
  spin: ['cartSpin.m4a', 0.7, [.18, .4]],   // plays each time you spin the cartridge round. On a sound that doesn't loop, [from, to] is the part that gets played
  lightOn: ['lightOn.m4a', 1], lightOff: ['lightOff.m4a', 1], // the light / dark switch
  swap: ['cartPicSwap.wav', 0.1]   // the picture on the cartridge changing by itself   
};
const LOOPS = ['grab', 'pen', 'erase'];   // the sounds that loop; every other sound plays once
/* Safari on a Mac cannot play Ogg Vorbis (.ogg) files, so the sounds that use them (the cartridge spin, drawing and erasing) were silent there. A
   browser that can't play a .ogg is now given the SAME file name in these formats instead, tried in this order: pictochat_pen.ogg ->
   pictochat_pen.m4a, then .mp3, then .wav. Put a converted copy next to each .ogg. On any browser that CAN play .ogg, nothing changes.
   (to convert on a Mac with ffmpeg:  for f in cartSpin pictochat_pen pictochat_eraser; do ffmpeg -i "$f.ogg" -c:a aac -b:a 160k "$f.m4a"; done) */
const SFX_ALT = ['.m4a', '.mp3', '.wav'];
/* Sounds that always play through a plain <audio> tag on a computer, even on a server. A tag's loop restarts with a tiny gap, while the Web Audio
   loop is gapless (and so sounds noticeably faster). Opening the site from a folder can only use tags, so this makes the deployed site loop at the
   same pace as the local one. Remove 'grab' from this list to get the gapless loop back. */
let TOUCH = false; try { TOUCH = matchMedia('(pointer: coarse)').matches; } catch (e) {}   // true on a phone or tablet (the main input is a finger)
const AUDIO_TAG = TOUCH ? [] : ['grab'];
/* Phones restart a looping <audio> tag much more slowly than a computer does (and by a different amount on every phone), so the same sound ran
   slower there. On a touch screen the loop is therefore scheduled on the audio clock instead, with this much silence between repeats, which
   makes its pace the same on every phone. 0.01 s is what a computer's <audio> loop does (measured in Chrome); raise it for a slower drag
   sound, lower it to 0 for a seamless one. */
const LOOP_GAP = { grab: 0.01 };   // seconds of silence between repeats
const PITCH = { spin: .1 };               // random pitch for each play: .1 = anywhere from 10% lower to 10% higher (about 1.7 semitones). Add other sounds here too
/* Sounds are decoded with the Web Audio API so loops are seamless and stop instantly. If that is not possible
   (for example the page is opened straight from a folder instead of a server) it falls back to plain <audio> tags. */
const Sfx = (() => {
  const AC = window.AudioContext || window.webkitAudioContext, urlOfFile = f => encodeURI(SFX_DIR + f);
  const MIME = { ogg: 'audio/ogg; codecs="vorbis"', m4a: 'audio/mp4; codecs="mp4a.40.2"', mp3: 'audio/mpeg', wav: 'audio/wav' };
  const canPlay = f => { try { return !!new Audio().canPlayType(MIME[f.split('.').pop().toLowerCase()] || ''); } catch (e) { return true; } };
  // the files to try for a sound, best first: a .ogg on a browser that can't play .ogg tries its .m4a / .mp3 / .wav twins first
  const cands = n => {
    const f = SFX[n][0]; if (!/\.ogg$/i.test(f)) return [f];
    const twins = SFX_ALT.map(x => f.replace(/\.ogg$/i, x));
    return canPlay(f) ? [f, ...twins] : [...twins, f];
  };
  const url = n => urlOfFile(cands(n).find(canPlay) || cands(n)[0]);   // the file an <audio> tag should use
  const decode = (c, d) => new Promise((ok, no) => { const r = c.decodeAudioData(d, ok, no); if (r && r.then) r.then(ok, no); });   // old Safari only has the callback form
  let ac = null;
  const buf = {}, loopBuf = {}, lead = {}, tags = {}, pools = {}, loops = {};   // buf[n]: decoded sound (null while loading, false = use an <audio> tag)
  const wake = () => {
    try { if (!ac && AC) ac = new AC({ latencyHint: 'interactive' }); if (ac && ac.state !== 'running' && ac.state !== 'closed') ac.resume().catch(() => {}); } catch (e) { ac = null; }
    return ac;
  };
  const tag = n => tags[n] || (tags[n] = new Audio(url(n)));
  // <audio> fallback: sounds that play once get 3 copies, loaded in advance, so a play starts at once instead of waiting for a new element to load
  const fallback = n => { tag(n); if (!LOOPS.includes(n) && !pools[n]) pools[n] = { i: 0, els: [0, 1, 2].map(() => new Audio(url(n))) }; };
  // how much silence a decoded sound starts with (up to 0.35 s), so it can be skipped and the sound lands the instant it is triggered
  const pitch = n => 1 + (Math.random() * 2 - 1) * (PITCH[n] || 0);   // this play's speed / pitch
  const leadOf = b => {
    const ch = Array.from({ length: b.numberOfChannels }, (_, c) => b.getChannelData(c));
    let peak = 0; ch.forEach(d => { for (let i = 0; i < d.length; i++) peak = Math.max(peak, Math.abs(d[i])); });
    const th = Math.max(.004, peak * .03), lim = Math.min(b.length, Math.round(.35 * b.sampleRate));
    for (let i = 0; i < lim; i++) if (ch.some(d => Math.abs(d[i]) > th)) return Math.max(0, i / b.sampleRate - .008);
    return 0;
  };
  // cut out the steady part and blend its last 0.12 s into its first 0.12 s, so the loop point is inaudible
  const seamless = (b, [from, to]) => {
    const sr = b.sampleRate, a = Math.max(0, Math.round(from * sr)), z = Math.min(b.length, Math.round(to * sr)), L = z - a;
    const F = Math.min(Math.round(.12 * sr), L >> 2), M = L - F;
    if (F < 1 || M < 1) return b;
    const out = ac.createBuffer(b.numberOfChannels, M, sr);
    for (let c = 0; c < b.numberOfChannels; c++) {
      const src = b.getChannelData(c).subarray(a, z), dst = out.getChannelData(c);
      dst.set(src.subarray(0, M));
      for (let i = 0; i < F; i++) { const t = (i + .5) / F * Math.PI / 2; dst[i] = src[i] * Math.sin(t) + src[M + i] * Math.cos(t); }
    }
    return out;
  };
  const load = (...names) => names.forEach(n => {
    if (!SFX[n] || n in buf) return;
    if (AUDIO_TAG.includes(n) || !wake()) { buf[n] = false; fallback(n); return; }
    buf[n] = null;
    const attempt = list => fetch(urlOfFile(list[0])).then(r => r.ok ? r.arrayBuffer() : Promise.reject()).then(d => decode(ac, d))
      .catch(err => list.length > 1 ? attempt(list.slice(1)) : Promise.reject(err));   // this file is missing or can't be decoded: try the next one
    attempt(cands(n))
      .then(b => { if (LOOPS.includes(n) && SFX[n][2]) loopBuf[n] = seamless(b, SFX[n][2]); lead[n] = leadOf(b); buf[n] = b; }).catch(() => { buf[n] = false; fallback(n); });
  });
  const live = new Set();   // one-shot sounds that are still playing, so they can all be cut off when the page is hidden or left
  // a loop paced by the audio clock: each repeat is scheduled ahead of time (always one extra is queued), so timing never depends on timers or the browser
  const pacedLoop = (n, vol) => {
    const c = wake(), b = buf[n], g = c.createGain(), srcs = new Set(), period = b.duration + LOOP_GAP[n];
    let next = c.currentTime + .005, alive = true;
    g.gain.value = SFX[n][1] * vol; g.connect(c.destination);
    const queue = () => {
      if (!alive) return;
      const s = c.createBufferSource(); s.buffer = b; s.connect(g); s.start(Math.max(next, c.currentTime)); next += period;
      srcs.add(s); s.onended = () => { srcs.delete(s); queue(); };
    };
    queue(); queue();
    const end = t => { alive = false; srcs.forEach(s => { try { s.stop(t); } catch (e) {} }); };
    return {
      stop() { const t = c.currentTime; g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t); g.gain.linearRampToValueAtTime(0, t + .015); end(t + .02); },   // 15 ms fade so it cuts off without a click
      kill() { end(0); try { g.disconnect(); } catch (e) {} }
    };
  };
  const voice = (n, vol, looping) => {
    if (looping && typeof LOOP_GAP[n] === 'number' && !SFX[n][2]) return pacedLoop(n, vol);
    const c = wake(), s = c.createBufferSource(), g = c.createGain(), r = SFX[n][2];
    const vv = SFX[n][1] * vol, seam = looping && r;   // seam: a loop with a [from, to] steady part
    s.loop = looping; s.buffer = seam ? loopBuf[n] : buf[n];
    if (seam) { g.gain.setValueAtTime(0, c.currentTime); g.gain.linearRampToValueAtTime(vv, c.currentTime + .01); } else g.gain.value = vv;   // 10 ms fade-in so starting mid-loop doesn't click
    let off = 0, dur;
    if (seam) off = Math.random() * s.buffer.duration;   // every start picks a new spot in the loop
    else if (!looping) {   // plays once: skip the silence at the start, and only play [from, to] if given
      const from = r && r[0] < s.buffer.duration - .03 ? r[0] : 0;
      off = Math.max(from, lead[n] || 0);
      if (r && r[1] > off + .02) dur = r[1] - off;
    }
    const rate = looping ? 1 : pitch(n); s.playbackRate.value = rate;
    s.connect(g); g.connect(c.destination); s.start(0, off, dur);
    if (dur) { const t = c.currentTime, real = dur / rate; g.gain.setValueAtTime(vv, t + Math.max(0, real - .006)); g.gain.linearRampToValueAtTime(0, t + real); }   // 6 ms fade so a cut-off end doesn't click
    const h = {
      stop() { const t = c.currentTime; g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t); g.gain.linearRampToValueAtTime(0, t + .015); try { s.stop(t + .02); } catch (e) {} },   // 15 ms fade so it cuts off without a click
      kill() { try { s.stop(); } catch (e) {} try { g.disconnect(); } catch (e) {} }   // instant: used when the page is being hidden or left
    };
    if (!looping) { live.add(h); s.onended = () => live.delete(h); }
    return h;
  };
  const tagVoice = (n, vol, looping) => {
    const a = tag(n).cloneNode(), r = looping && SFX[n][2];
    a.volume = Math.min(1, SFX[n][1] * vol); a.loop = looping && !r;
    let timer = 0;
    if (r) { try { a.currentTime = r[0] + Math.random() * (r[1] - r[0]); } catch (e) {} timer = setInterval(() => { if (a.currentTime >= r[1]) a.currentTime = r[0]; }, 15); }
    a.play().catch(() => {});
    return { stop() { clearInterval(timer); a.pause(); a.currentTime = 0; } };
  };
  const playTag = (n, vol) => {
    fallback(n);
    const P = pools[n], a = P.els[P.i++ % P.els.length], r = SFX[n][2];
    clearTimeout(a.cut); a.pause();
    const from = r && r[0] < (a.duration || 99) - .03 ? r[0] : 0;   // [from, to] = the part to play, if given
    a.volume = Math.min(1, SFX[n][1] * vol);
    const rate = pitch(n); a.playbackRate = rate; a.preservesPitch = a.mozPreservesPitch = a.webkitPreservesPitch = false;   // false = the pitch follows the speed
    try { a.currentTime = from; } catch (e) {}
    a.play().catch(() => {});
    if (r && r[1] > from + .02) a.cut = setTimeout(() => a.pause(), (r[1] - from) * 1000 / rate);
  };
  const start = (n, vol, looping) => {
    if (!SFX[n]) return null;
    load(n);
    if (buf[n] === false && !looping) { playTag(n, vol); return null; }
    return buf[n] ? voice(n, vol, looping) : buf[n] === false ? tagVoice(n, vol, looping) : null;
  };
  let muted = false, hushUntil = 0;   // muted: the speaker button in the status bar flips this (and remembers it between pages)
  const readMuted = () => { try { muted = localStorage.getItem('sound') === 'off'; } catch (e) {} };
  readMuted();
  const api = {
    load, unlock() { wake(); },
    play(n, vol = 1) { if (!muted && performance.now() >= hushUntil) start(n, vol, false); },
    loop(n, vol = 1) { if (!muted && performance.now() >= hushUntil && !loops[n]) { const v = start(n, vol, true); if (v) loops[n] = v; } },
    stop(n) { if (loops[n]) { loops[n].stop(); delete loops[n]; } },
    stopAll() { Object.keys(loops).forEach(api.stop); },
    // cut off EVERYTHING that is playing, including one-shot sounds like the menu select: used when the page is hidden or left, so a page that is
    // frozen in the browser's back/forward cache can't finish (or replay) a sound when you come back to it
    silence() {
      api.stopAll();
      live.forEach(v => v.kill()); live.clear();
      Object.values(pools).forEach(P => P.els.forEach(a => { clearTimeout(a.cut); a.pause(); }));
    },
    hush(ms = 350) { hushUntil = performance.now() + ms; },   // ignore new sounds for a moment (a page that was just brought back can fire stray hover / focus events)
    resync() { readMuted(); },                                // another page may have changed the sound setting while this one was frozen
    get muted() { return muted; },
    setMuted(m) { muted = !!m; try { localStorage.setItem('sound', muted ? 'off' : 'on'); } catch (e) {} if (muted) api.stopAll(); }
  };
  return api;
})();
Sfx.load('hover', 'select', 'pick', 'lightOn', 'lightOff');
// browsers only start audio after a real click / key press, so each of those wakes it up in advance (otherwise the first sound can be late)
['pointerdown', 'pointerup', 'keydown', 'touchend'].forEach(ev => addEventListener(ev, () => Sfx.unlock(), { capture: true, passive: true }));

/* ---------- Pixel type: tidies the letter spacing and the lowercase "i" of the pixel font (DotGothic16) ----------
   A web font can't be edited from CSS, so this measures the real font in the browser (with a canvas) and then:
     1. narrow letters (i, l, t, r, j, and punctuation) that sit in too much space are tightened to the typical gap between letters
     2. the lowercase "i" is redrawn from the font's own shape with the top of the stem trimmed, so the dot is clearly separated
   If the font doesn't load, or anything goes wrong, the text is simply left exactly as it was. */
const Type = (() => {
  const FONT = 'DotGothic16',
        DOT_GAP = 2,       // EDIT: gap between the dot and the stem of the "i", counted in pixel-dots (the font's own is usually 1; 3 = even more air)
        TIGHT = 1.15,      // a letter is only tightened if its side space is more than this many times the typical amount
        MAX_TIGHT = .22,   // never pull a letter in by more than this much (in em) on either side
        S = 240;           // the size the letters are measured at
  const cv = document.createElement('canvas'), ctx = cv.getContext('2d', { willReadFrequently: true }), cache = {};
  const fontStr = '400 ' + S + 'px "' + FONT + '"', SAMPLE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let ok = false, target = 0, iSvg = null;
  const bearings = ch => {   // empty space on each side of a letter, in em (l, r), and the width of its ink
    if (cache[ch]) return cache[ch];
    ctx.font = fontStr; const m = ctx.measureText(ch);
    return (cache[ch] = { l: -m.actualBoundingBoxLeft / S, r: (m.width - m.actualBoundingBoxRight) / S, ink: m.actualBoundingBoxRight + m.actualBoundingBoxLeft });
  };
  // the "i": scan its pixels, then rebuild it as a vector shape with a shorter stem (same dot, same width, same baseline)
  const buildI = () => {
    const W = S * 2, H = S * 2, x0 = S >> 1, y0 = Math.round(S * 1.3);
    cv.width = W; cv.height = H; ctx.font = fontStr; ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left'; ctx.fillStyle = '#000'; ctx.fillText('i', x0, y0);
    const adv = ctx.measureText('i').width, px = ctx.getImageData(0, 0, W, H).data, rows = [];
    for (let y = 0; y < H; y++) {
      const runs = []; let a = -1;
      for (let x = 0; x < W; x++) { const on = px[(y * W + x) * 4 + 3] > 127; if (on && a < 0) a = x; else if (!on && a >= 0) { runs.push([a, x]); a = -1; } }
      if (a >= 0) runs.push([a, W]); rows.push(runs);
    }
    const segs = []; let st = -1;   // stretches of rows that have ink: the dot on top, the stem below
    for (let y = 0; y <= H; y++) { const on = y < H && rows[y].length > 0; if (on && st < 0) st = y; else if (!on && st >= 0) { segs.push([st, y]); st = -1; } }
    if (segs.length < 2) return null;
    const dot = segs[0], stem = segs[segs.length - 1], u = dot[1] - dot[0], gap = stem[0] - dot[1], stemH = stem[1] - stem[0];
    const cut = Math.max(0, Math.min(DOT_GAP * u - gap, stemH - 3 * u));   // how much to trim off the top of the stem
    if (cut < 1) return null;
    const top = Math.round(stem[0] + cut), rects = [];
    let start = 0, prev = '[]';
    for (let y = 0; y <= H; y++) {   // rows with identical ink become one rectangle each
      const key = y < H ? JSON.stringify(rows[y]) : '[]';
      if (key === prev) continue;
      if (prev !== '[]') for (const [a, b] of rows[start]) { const ya = start >= stem[0] ? Math.max(start, top) : start; if (y > ya) rects.push([a, ya, b, y]); }
      start = y; prev = key;
    }
    if (!rects.length) return null;
    const minX = Math.min(...rects.map(r => r[0])), maxX = Math.max(...rects.map(r => r[2])), minY = Math.min(...rects.map(r => r[1]));
    const l = minX - x0, r = x0 + adv - maxX, t = target * S, L = l > t * TIGHT ? t : l, R = r > t * TIGHT ? t : r;   // keep the same side space as every other letter
    const vx = minX - L, vw = maxX - minX + L + R, vh = y0 - minY;
    const d = rects.map(([a, b, c, e]) => `M${a - vx} ${b - minY}h${c - a}v${e - b}h${a - c}z`).join('');
    return `<svg viewBox="0 0 ${vw} ${vh}" style="width:${(vw / S).toFixed(4)}em;height:${(vh / S).toFixed(4)}em" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
  };
  const setup = () => {
    if (!document.fonts || !ctx || ctx.measureText('i').actualBoundingBoxRight === undefined) return false;
    if (![...document.fonts].some(f => f.family.replace(/["']/g, '') === FONT && f.status === 'loaded')) return false;   // font really loaded?
    const side = [];
    for (const ch of SAMPLE) { const b = bearings(ch); if (b.ink > 0) side.push(b.l, b.r); }
    if (side.length < 40) return false;
    side.sort((a, b) => a - b); target = Math.max(0, side[side.length >> 1]);   // the typical empty space beside a letter
    if (!(target < .3)) return false;
    try { iSvg = buildI(); } catch (e) { iSvg = null; }
    return true;
  };
  const ready = (async () => {
    try {
      await Promise.race([document.fonts.load('400 ' + S + 'px "' + FONT + '"', SAMPLE), new Promise(r => setTimeout(r, 4000))]);
      ok = setup();
    } catch (e) { ok = false; }
    return ok;
  })();
  const tuneNode = n => {
    const el = n.parentElement, text = n.nodeValue;
    if (!el || !text.trim() || el.closest('.ty-k,.ty-i,script,style,textarea')) return;
    const cs = getComputedStyle(el);
    if (cs.fontFamily.split(',')[0].replace(/["'\s]/g, '') !== FONT) return;
    const up = cs.textTransform === 'uppercase', shadow = cs.textShadow !== 'none' && !/\)\s*,/.test(cs.textShadow) ? cs.textShadow : '';
    const out = document.createDocumentFragment(); let run = '', any = false;
    const flush = () => { if (run) { out.appendChild(document.createTextNode(run)); run = ''; } };
    const parts = text.split(/(\s+)/); let lastW = -1;
    parts.forEach((w, i) => { if (w && !/^\s+$/.test(w)) lastW = i; });   // the last word: its final letter must NOT be pulled in on the right
    for (let wi = 0; wi < parts.length; wi++) {                          // (a box sized to its text, like a pill label, would come out a hair too narrow and wrap)
      const word = parts[wi];
      if (!word || /^\s+$/.test(word)) { run += word; continue; }
      const wf = document.createDocumentFragment(); let wrun = '', changed = false, hasI = false;
      const wflush = () => { if (wrun) { wf.appendChild(document.createTextNode(wrun)); wrun = ''; } };
      const chars = [...word];
      for (let ci = 0; ci < chars.length; ci++) {
        const ch = chars[ci], shown = up ? ch.toUpperCase() : ch, atEnd = wi === lastW && ci === chars.length - 1;
        if (!/^[\x21-\x7e]$/.test(shown)) { wrun += ch; continue; }   // only plain keyboard characters (the font's fallback glyphs can't be measured)
        if (shown === 'i' && iSvg) {
          wflush(); const sp = document.createElement('span'); sp.className = 'ty-i';
          sp.innerHTML = iSvg + '<span class="ty-sr">i</span>';   // the real letter stays in the page (hidden) so copy / paste and screen readers still get it
          if (shadow) sp.firstChild.style.filter = 'drop-shadow(' + shadow + ')';
          wf.appendChild(sp); changed = hasI = true; continue;
        }
        const b = bearings(shown);
        const ml = b.ink > 0 && b.l > target * TIGHT ? Math.max(target - b.l, -MAX_TIGHT) : 0, mr = !atEnd && b.ink > 0 && b.r > target * TIGHT ? Math.max(target - b.r, -MAX_TIGHT) : 0;
        if (ml || mr) { wflush(); const sp = document.createElement('span'); sp.className = 'ty-k'; sp.style.margin = `0 ${mr.toFixed(3)}em 0 ${ml.toFixed(3)}em`; sp.textContent = ch; wf.appendChild(sp); changed = true; }
        else wrun += ch;
      }
      wflush();
      if (!changed) { run += word; continue; }
      flush(); any = true;
      if (hasI) { const w = document.createElement('span'); w.className = 'ty-w'; w.appendChild(wf); out.appendChild(w); }   // a redrawn "i" never gets split from its word at a line break
      else out.appendChild(wf);
    }
    if (!any) return;
    flush(); n.replaceWith(out);
  };
  return {
    ready,
    tune(scope) {   // tidies the text inside an element; safe to call again after you change that text
      if (!ok || !scope) return;
      try {
        const w = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT), nodes = [];
        for (let n; (n = w.nextNode());) nodes.push(n);
        nodes.forEach(tuneNode);
      } catch (e) {}
    }
  };
})();

/* ---------- Runs immediately: did we arrive through a transition? ---------- */
const root = document.documentElement;
// evening and night switch to dark mode automatically (the sun/moon button in the status bar overrides it)
const THEME = (() => { let t = null; try { t = localStorage.getItem('theme'); } catch (e) {} if (t !== 'dark' && t !== 'light') { const h = new Date().getHours(); t = (h >= 18 || h < 6) ? 'dark' : 'light'; } return t; })();
root.dataset.theme = THEME;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
// scale the whole UI up on screens bigger than 1080p (sizes are rem-based and follow the root font size)
const fitUI = () => { root.style.fontSize = (Math.max(1, Math.min(innerWidth / 1920, innerHeight / 1080)) * 100).toFixed(1) + '%'; };
fitUI(); addEventListener('resize', fitUI);
let arrival = null;
root.classList.add('js');
try {
  const r = JSON.parse(sessionStorage.getItem('pt') || 'null');
  sessionStorage.removeItem('pt');
  if (r && Date.now() - r.t < 8000 && !reduce) {
    arrival = r; root.dataset.enter = '1';
    root.style.setProperty('--x', r.x + 'px'); root.style.setProperty('--y', r.y + 'px');
  }
} catch (e) {}
setTimeout(() => { root.classList.add('reveal'); root.removeAttribute('data-enter'); }, 2500);   // safety net

addEventListener('DOMContentLoaded', () => {
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const esc = s => s.replace(/&/g, '&amp;');
  const page = document.body.dataset.page, isHome = page === 'home';
  const fontsReady = () => Promise.race([document.fonts.ready, sleep(700)]);
  let leaving = false;

  const ICON = {
    pencil: '<svg viewBox="0 0 24 24"><g transform="rotate(45 12 12)"><rect x="9.4" y="1.5" width="5.2" height="3.6" rx="1.2" fill="#f06292"/><rect x="9.4" y="5.1" width="5.2" height="1.7" fill="#b0bec5"/><rect x="9.4" y="6.8" width="5.2" height="9.6" fill="#ffca28"/><rect x="12.3" y="6.8" width="2.3" height="9.6" fill="#f9a825"/><path d="M9.4 16.4h5.2L12 22z" fill="#ffe0b2"/><path d="M11 19.6h2L12 22z" fill="#37474f"/></g></svg>',
    doc: '<svg viewBox="0 0 24 24"><rect x="4.5" y="2.5" width="15" height="19" rx="2.2" fill="#fff" stroke="#4f7fd1" stroke-width="1.4"/><rect x="7.5" y="5.5" width="9" height="2.6" rx="1" fill="#2f6ed0"/><rect x="7.5" y="10" width="9" height="1.6" rx=".8" fill="#9fb4d6"/><rect x="7.5" y="13" width="9" height="1.6" rx=".8" fill="#9fb4d6"/><rect x="7.5" y="16" width="5.5" height="1.6" rx=".8" fill="#ff9a3d"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M2.5 5.5c3.2-1.4 6.5-1.3 9.5.5v13c-3-1.8-6.3-1.9-9.5-.5z" fill="#fff" stroke="#2f9e4f" stroke-width="1.4" stroke-linejoin="round"/><path d="M21.5 5.5c-3.2-1.4-6.5-1.3-9.5.5v13c3-1.8 6.3-1.9 9.5-.5z" fill="#e8f7ea" stroke="#2f9e4f" stroke-width="1.4" stroke-linejoin="round"/><path d="M5 9.2c2-.6 4-.5 5.5.4M5 12.2c2-.6 4-.5 5.5.4" stroke="#7bc98f" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M16 3.5v6l1.6-1.3 1.6 1.3v-6z" fill="#f04e4e"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" fill="#3f9be8" stroke="#1f6fbd" stroke-width="1.2"/><path d="M6 8.5c1.8-2 4-2 5-.8s-.2 2.8-2 3-2.6 2-3.8.4z" fill="#6bd16b"/><path d="M13 13c2-1 5-.4 5 1.8s-2 3.8-4 3-1.8-3.8-1-4.8z" fill="#6bd16b"/><path d="M7 5.5a8 8 0 0 1 6-1.8" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".7"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2.500 11.500H5V20h5.500v-5.500h3V20H19v-8.500h2.500z"/></svg>'
  };
  ICON.sun = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  ICON.moon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 14.5A9 9 0 0 1 9.5 3.5a9 9 0 1 0 11 11z"/></svg>';
  ICON.vol = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2.5 9.5h3.8L12 4.8v14.4l-5.700-4.700H2.500z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M15.4 9a4.200 4.200 0 0 1 0 6M18.300 6.200a8 8 0 0 1 0 11.600"/></svg>';
  ICON.mute = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2.5 9.5h3.8L12 4.8v14.4l-5.700-4.700H2.500z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M15.800 9.500l5 5M20.800 9.500l-5 5"/></svg>';
  const WIFI = '<svg class="ico" viewBox="0 0 20 16" fill="currentColor"><rect x="1" y="11" width="3" height="4" rx="1"/><rect x="6" y="8" width="3" height="7" rx="1"/><rect x="11" y="5" width="3" height="10" rx="1"/><rect x="16" y="1" width="3" height="14" rx="1"/></svg>';
  const BATT = '<svg class="ico" viewBox="0 0 26 14"><rect x="1" y="1" width="21" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="24" y="4.5" width="2" height="5" rx="1" fill="currentColor"/><rect x="3.5" y="3.5" width="14" height="7" rx="1.5" fill="currentColor"/></svg>';
  const cart = g => `<span class="cart" style="--c:${g.color}"><span class="lab">${ICON[g.icon]}</span></span>`;

  /* ---------- Shared chrome: status bar (+ dock and banner on inner pages) ---------- */
  document.body.insertAdjacentHTML('afterbegin',
    `<header class="topbar"><a class="user" href="index.html"><img src="mii-head.png" alt=""><span>${esc(SITE.name)}</span></a>
     <span class="net">${WIFI}<b>${esc(SITE.tag)}</b></span>
     <div class="status"><span id="clock"></span><button class="mode" id="snd" type="button"></button><button class="mode" id="mode" type="button"></button>${BATT}</div></header>`);
  const tickClock = () => {   // same text as before; the pieces are separate so a narrow phone can drop the date and weekday (see style.css)
    const d = new Date(), p = n => String(n).padStart(2, '0'), clock = $('#clock');
    clock.innerHTML = `<span class="cd">${p(d.getDate())}/${p(d.getMonth() + 1)}</span> <span class="cw">(${d.toLocaleDateString([], { weekday: 'short' })})</span> <span class="ct">${p(d.getHours())}:${p(d.getMinutes())}</span>`;
    Type.tune(clock);
  };
  tickClock(); setInterval(tickClock, 15000);
  const modeBtn = $('#mode');
  let modeSpam = () => {};   // the Mii on the home page fills this in
  const flips = []; let calmUntil = 0;
  const countFlip = () => {   // called on every flip of the switch; spamming it triggers modeSpam (then stays quiet for 6 s)
    const now = performance.now(); flips.push(now);
    while (flips.length && now - flips[0] > MODE_SPAM.within) flips.shift();
    if (flips.length >= MODE_SPAM.flips && now > calmUntil) { flips.length = 0; calmUntil = now + 6000; modeSpam(); }
  };
  const paintMode = () => { const dark = root.dataset.theme === 'dark'; modeBtn.innerHTML = ICON[dark ? 'moon' : 'sun']; modeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode'); };
  modeBtn.onclick = () => { const t = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = t; try { localStorage.setItem('theme', t); } catch (err) {} paintMode(); Sfx.play(t === 'dark' ? 'lightOff' : 'lightOn'); countFlip(); };
  paintMode();
  const sndBtn = $('#snd');   // the speaker button next to the light / dark button: mutes every sound, and is remembered between pages
  const paintSnd = () => { const off = Sfx.muted; sndBtn.innerHTML = ICON[off ? 'mute' : 'vol']; sndBtn.setAttribute('aria-label', off ? 'Turn sound on' : 'Turn sound off'); };
  sndBtn.onclick = () => { Sfx.setMuted(!Sfx.muted); paintSnd(); if (!Sfx.muted) Sfx.play('pick'); };   // a little blip confirms it is back on
  paintSnd();
  try { gutters(); } catch (err) {}   // decorative: must never block the page

  if (!isHome) {
    const item = (href, label, icon, id, cls) => `<a href="${href}" class="${cls || ''}${id === page ? ' on' : ''}"${id === page ? ' aria-current="page"' : ''}>${ICON[icon]}<span>${label}</span></a>`;
    const g = GAMES.map(x => item(x.href, x.short, x.icon, x.id));
    document.body.insertAdjacentHTML('beforeend',
      `<nav class="dock" aria-label="Main">${g[0]}${g[1]}${item('index.html', 'Home', 'home', 'home', 'homebtn')}${g[2]}${g[3]}</nav>`);
    const sub = $('.sub'), me = GAMES.find(x => x.id === page), h1 = $('.page-title');
    sub.insertAdjacentHTML('beforeend', `<p class="copy">&copy; ${SITE.year} ${esc(SITE.name)}</p>`);
    if (me && h1) {
      const b = document.createElement('div');
      b.className = 'banner';
      b.innerHTML = `<span class="cart lg" style="--c:${me.color}"><span class="lab">${ICON[me.icon]}</span></span><div class="bt"><small>${me.mode}</small></div>`;
      h1.replaceWith(b); b.querySelector('.bt').append(h1);
    }
    $$('.rows').forEach(r => [...r.children].forEach((c, i) => c.style.setProperty('--k', Math.min(i, 4))));
    $$('.quote').forEach(q => q.style.setProperty('--k', 4));
  }

  /* ---------- Resume: class select (IT / Game Dev) ---------- */
  const seg = $('.seg');
  if (seg) {
    const btns = [...seg.querySelectorAll('button')], panels = $$('.rpanel');
    let current = null;
    const show = (v, instant) => {
      if (v === current) return;
      const old = panels.find(p => !p.hidden), next = panels.find(p => p.dataset.view === v);
      btns.forEach(b => { const on = b.dataset.view === v; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
      current = v;
      const swap = () => panels.forEach(p => { p.hidden = p !== next; p.classList.remove('out'); });
      if (old && !instant && !reduce) { old.classList.add('out'); setTimeout(swap, 200); } else swap();
    };
    btns.forEach(b => b.onclick = () => { show(b.dataset.view); try { history.replaceState(null, '', '#' + b.dataset.view); } catch (err) {} });
    show(location.hash === '#it' ? 'it' : 'game', true);   // Game Dev is the default tab
  }

  /* ---------- Resume previews: click a preview to see it full screen. The arrow (or Esc, or the browser's back button) takes you back ---------- */
  const prevs = $$('.rprev');
  if (prevs.length) {
    const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12H5M11 5l-7 7 7 7"/></svg>';
    const LENS = out => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21M7.5 10.5h6${out ? '' : 'M10.5 7.5v6'}"/></svg>`;
    const rv = document.createElement('div');
    rv.className = 'rv'; rv.hidden = true;
    rv.setAttribute('role', 'dialog'); rv.setAttribute('aria-modal', 'true'); rv.setAttribute('aria-label', 'Resume, full screen');
    rv.innerHTML = `<div class="rv-bar"><button type="button" class="rv-back" aria-label="Back to the resume page">${ARROW}<span>Back</span></button><p class="rv-title"></p><button type="button" class="rv-zoom"></button></div>
      <div class="rv-stage"><div class="rv-fig"><img class="rv-img" alt=""></div></div>`;
    document.body.appendChild(rv);
    const back = rv.querySelector('.rv-back'), zoomBtn = rv.querySelector('.rv-zoom'), stage = rv.querySelector('.rv-stage'),
          fig = rv.querySelector('.rv-fig'), img = rv.querySelector('.rv-img'), title = rv.querySelector('.rv-title');
    let from = null, pushed = false, zoomed = false;

    const setZoom = on => {   // fit the whole page on screen, or enlarge it so the small text is readable (scroll to move around)
      zoomed = on; rv.classList.toggle('zoom', on);
      zoomBtn.setAttribute('aria-pressed', on); const z = on ? 'Zoom out' : 'Zoom in'; zoomBtn.setAttribute('aria-label', z); zoomBtn.title = z; zoomBtn.innerHTML = LENS(on);
      stage.scrollTo({ left: 0, top: 0 });
    };
    const open = (p, trigger) => {
      if (!rv.hidden) return;
      const t = p.querySelector('img'), w = +t.getAttribute('width'), h = +t.getAttribute('height');
      rv.style.setProperty('--ar', w && h ? (w / h).toFixed(4) : '0.7078');
      title.textContent = p.dataset.title || 'Resume';
      img.alt = t.alt; img.src = t.currentSrc || t.src;
      from = trigger || p;
      rv.hidden = false; root.classList.add('rv-open');
      setZoom(false);
      try { history.pushState({ rv: 1 }, ''); pushed = true; } catch (err) { pushed = false; }   // so a phone's back gesture closes the viewer instead of leaving the page
      Sfx.play('hover');
      back.focus({ preventScroll: true });
    };
    const close = viaPop => {
      if (rv.hidden) return;
      rv.hidden = true; root.classList.remove('rv-open');
      if (pushed && !viaPop) { try { history.back(); } catch (err) {} }
      pushed = false;
      if (from) from.focus({ preventScroll: true });
    };

    prevs.forEach(p => p.addEventListener('click', () => open(p, p)));
    $$('[data-open]').forEach(b => b.addEventListener('click', () => { const p = b.closest('.split').querySelector('.rprev'); if (p) open(p, b); }));
    back.addEventListener('click', () => { Sfx.play('hover'); close(); });
    zoomBtn.addEventListener('click', () => setZoom(!zoomed));
    img.addEventListener('click', () => setZoom(!zoomed));
    stage.addEventListener('click', e => { if (e.target === stage || e.target === fig) close(); });   // clicking the dark area also goes back
    addEventListener('popstate', () => { if (!rv.hidden) close(true); });
    document.addEventListener('keydown', e => {
      if (rv.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'Tab') { e.preventDefault(); (document.activeElement === back ? zoomBtn : back).focus(); }   // keep the keyboard inside the viewer
    });
  }

  /* ---------- Contact: "Copy" buttons, and DSi-icon sounds (same hover / select sounds as the home menu) ---------- */
  const copyBtns = $$('[data-copy]'), dsis = $$('.dsi');
  if (copyBtns.length || dsis.length) {
    const copyText = async text => {
      try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; } } catch (err) {}
      try {   // fallback for pages opened straight from a folder (file://) and older browsers
        const t = document.createElement('textarea');
        t.value = text; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(t); t.select(); t.setSelectionRange(0, text.length);
        const ok = document.execCommand('copy'); t.remove(); return ok;
      } catch (err) { return false; }
    };
    copyBtns.forEach(b => {
      const lab = b.querySelector('span') || b, label = lab.textContent; let timer;
      b.setAttribute('aria-live', 'polite');
      b.addEventListener('click', async () => {
        const ok = await copyText(b.dataset.copy);
        Sfx.play('hover');
        if (!ok) {   // couldn't copy: select the text so Ctrl+C / long-press still works
          const h = b.closest('.txt').querySelector('.handle');
          if (h) { const r = document.createRange(); r.selectNodeContents(h); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
        }
        lab.textContent = ok ? 'Copied!' : 'Copy failed'; Type.tune(lab);
        clearTimeout(timer); timer = setTimeout(() => { lab.textContent = label; Type.tune(lab); }, 1600);
      });
    });
    document.addEventListener('pointerover', e => { if (e.pointerType === 'touch') return; const t = e.target.closest('.dsi'); if (t && !t.contains(e.relatedTarget)) Sfx.play('hover'); });
    document.addEventListener('focusin', e => { const t = e.target.closest && e.target.closest('.dsi'); if (t && e.target.matches(':focus-visible')) Sfx.play('hover'); });
    document.addEventListener('click', e => { if (e.target.closest('.dsi')) Sfx.play('select'); });
  }

  /* ---------- Home: a small "about me" card (replaces the clock and calendar). The text is SITE.bio at the top of this file ---------- */
  function hints() {
    $('#widgets').innerHTML = `<div class="hint"><b>About me</b><p>${esc(SITE.bio)}</p></div>`;
  }

  /* ---------- Side margins: light-grey silhouettes + a PictoChat-style doodle pad ---------- */
  function gutters() {
    const bmp = rows => `<svg viewBox="0 0 ${rows[0].length} ${rows.length}" shape-rendering="crispEdges">${rows.map((r, y) => [...r].map((c, x) => c === '1' ? `<rect x="${x}" y="${y}" width="1" height="1"/>` : '').join('')).join('')}</svg>`;
    const circ = (cx, cy, r) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0 ${r} ${r} 0 1 0 ${-2 * r} 0z`;
    const S = {
      pad: `<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M16 20h32a14 14 0 0 1 13.5 17.6l-2.3 8.4A8 8 0 0 1 43.6 51L39 44H25l-4.6 7a8 8 0 0 1-15.6-4.1L2.5 37.6A14 14 0 0 1 16 20zM17.5 29h3v3.5H24v3h-3.5V39h-3v-3.5H14v-3h3.5z${circ(42, 32.6, 2.6)}${circ(48.5, 37.1, 2.6)}"/></svg>`,
      invader: bmp(['00100000100', '00010001000', '00111111100', '01101110110', '11111111111', '10111111101', '10100000101', '00011011000']),
      heart: bmp(['011000110', '111101111', '111111111', '111111111', '011111110', '001111100', '000111000', '000010000']),
      sword: '<svg viewBox="0 0 64 64"><path d="M32 2l5 6v30H27V8z"/><rect x="18" y="38" width="28" height="6" rx="2"/><rect x="29" y="44" width="6" height="12"/><circle cx="32" cy="59" r="3.5"/></svg>',
      joystick: `<svg viewBox="0 0 64 64"><circle cx="32" cy="13" r="9"/><rect x="29.5" y="20" width="5" height="22"/><path fill-rule="evenodd" d="M6 60V46a4 4 0 0 1 4-4h44a4 4 0 0 1 4 4v14z${circ(14, 53.5, 3.5)}${circ(50, 53.5, 3.5)}"/></svg>`,
      cart: '<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M12 4h34l8 9v47H12zM18 10h28v22H18z"/><rect x="18" y="48" width="28" height="6"/></svg>',
      die: `<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M14 6h36a8 8 0 0 1 8 8v36a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8V14a8 8 0 0 1 8-8z${circ(20, 20, 4)}${circ(44, 20, 4)}${circ(32, 32, 4)}${circ(20, 44, 4)}${circ(44, 44, 4)}"/></svg>`,
      star: '<svg viewBox="0 0 64 64"><path d="M32 4l8.6 17.6L60 24.4 46 38l3.4 19.6L32 48.4 14.6 57.6 18 38 4 24.4l19.4-2.8z"/></svg>',
      cpu: `<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M14 14h36a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2zM24 24v16h16V24z"/>${[18, 26, 34, 42].map(v => `<rect x="${v}" y="5" width="4" height="9"/><rect x="${v}" y="50" width="4" height="9"/><rect x="4" y="${v}" width="9" height="4"/><rect x="51" y="${v}" width="9" height="4"/>`).join('')}</svg>`,
      wifi: '<svg viewBox="0 0 64 64" stroke="currentColor" stroke-width="6" stroke-linecap="round"><path style="fill:none" d="M6 26a36 36 0 0 1 52 0M15 36a23 23 0 0 1 34 0M24 46a10 10 0 0 1 16 0"/><circle style="stroke:none" cx="32" cy="55" r="3.5"/></svg>',
      ram: `<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M2 18h60v28H2zM7 23h11v11H7zM22 23h11v11H22zM37 23h11v11H37zM52 23h6v11h-6z"/>${[6, 12, 18, 24, 30, 36, 42, 48, 54].map(v => `<rect x="${v}" y="47" width="3" height="7"/>`).join('')}</svg>`,
      gpu: `<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M2 14h60v32H2z${circ(19, 30, 9)}${circ(45, 30, 9)}"/><rect x="2" y="46" width="8" height="10"/><rect x="14" y="46" width="36" height="4"/></svg>`,
      monitor: '<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M6 8h52a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2zM10 12v28h44V12z"/><path d="M26 44h12l2 10H24z"/><rect x="16" y="54" width="32" height="4" rx="2"/></svg>',
      router: '<svg viewBox="0 0 64 64"><rect x="6" y="36" width="52" height="16" rx="3"/><rect x="14" y="8" width="4" height="28"/><rect x="30" y="16" width="4" height="20"/><rect x="46" y="8" width="4" height="28"/></svg>',
      keyboard: `<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M4 16h56a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2z${[0, 1, 2, 3, 4, 5, 6].map(i => `M${7 + i * 7.5} 21h5v5h-5zM${7 + i * 7.5} 29h5v5h-5z`).join('')}M18 38h28v5H18z"/></svg>`,
      gear: `<svg viewBox="0 0 64 64"><path fill-rule="evenodd" d="M32 14a18 18 0 1 0 0 36 18 18 0 1 0 0-36zM32 26a6 6 0 1 1 0 12 6 6 0 1 1 0-12z"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<rect x="28" y="4" width="8" height="12" rx="1.5" transform="rotate(${a} 32 32)"/>`).join('')}</svg>`
    };
    // [shape, column (0 = outer, 1 = inner), vertical position (%), size (rem), rotation]. Left = game development, right = hardware and IT.
    // Shapes keep their size and position. If there is no room for one (narrow window, short window, or something in the way) it just fades out.
    const LEFT = [['pad', 0, 7, 9, -12], ['invader', 1, 19, 6, 8], ['heart', 0, 31, 5.5, -10], ['sword', 1, 43, 8, 24], ['joystick', 0, 55, 7.5, -8], ['cart', 1, 67, 6.5, 12], ['die', 0, 79, 5.5, -16], ['star', 1, 91, 5.5, 10]];
    const RIGHT = [['cpu', 0, 7, 9, 10], ['wifi', 1, 19, 6.5, -6], ['ram', 0, 31, 9.5, -8], ['gpu', 1, 43, 9, 6], ['monitor', 0, 55, 8, -4], ['router', 1, 67, 8, 8], ['keyboard', 0, 79, 9, -6], ['gear', 1, 91, 5.5, 14]];
    const COLORS = ['ink', '#2f6ed0', '#d8403a', '#2f9e4f'], pen = { c: COLORS[0], s: 6, custom: false };
    let customColor = '#9b4fd0';   // the saved custom colour (remembered between pages)
    try { const saved = localStorage.getItem('pen-custom'); if (/^#[0-9a-f]{6}$/i.test(saved)) customColor = saved; } catch (err) {}
    const html = (cls, list) => `<div class="gutter ${cls}"><div class="sils" aria-hidden="true">${list.map(([k, , , sz, r]) => `<span class="sil" style="--s:${sz}rem;--r:${r}deg">${S[k]}</span>`).join('')}</div><canvas class="doodle" aria-hidden="true"></canvas></div>`;
    document.body.insertAdjacentHTML('afterbegin', html('gl', LEFT) + html('gr', RIGHT));
    const CLEAR = '<svg viewBox="0 0 24 24"><path d="M17 6.9A7.2 7.2 0 1 0 17 17.1" fill="none" stroke="#555" stroke-width="2.6" stroke-linecap="round"/></svg>';
    const MENU = `<div class="cm" id="cm" role="dialog" aria-label="Custom colour" hidden>
      <div class="cm-sv"><span></span></div>
      <input class="cm-hue" type="range" min="0" max="360" step="1" value="0" aria-label="Hue">
      <div class="cm-row"><div class="cm-prev" title="Old colour | new colour"><span class="old"></span><span class="new"></span></div><input class="cm-hex" type="text" maxlength="7" spellcheck="false" autocomplete="off" aria-label="Hex colour"></div>
      <button type="button" class="cm-ok">Confirm</button></div>`;
    document.body.insertAdjacentHTML('beforeend', `<div class="penkit" id="penkit"><button type="button" class="penhandle" aria-label="Doodle tools" title="Doodle">${ICON.pencil}</button>
      <div class="pk"><div class="sw">${COLORS.map((c, i) => `<button type="button" class="c${i ? '' : ' on'}" data-c="${c}" style="--c:${c === 'ink' ? 'var(--ink)' : c}" aria-label="Pen colour ${i + 1}"></button>`).join('')}<button type="button" class="c custom" title="Click: use your custom colour. Double-click: choose a new one." aria-label="Custom pen colour (double-click to change)" style="--c:${customColor}"></button></div>
      <div class="sz">${[3, 6, 12].map((n, i) => `<button type="button" class="${i === 1 ? 'on' : ''}" data-s="${n}" aria-label="Pen size ${i + 1}"><i style="--d:${n + 2}px"></i></button>`).join('')}</div>
      <button type="button" class="clr" aria-label="Clear the doodles">${CLEAR}</button></div>${MENU}</div>`);
    const ring = document.createElement('i'); ring.className = 'brush'; document.body.appendChild(ring);
    const ui = () => parseFloat(getComputedStyle(root).fontSize) / 16;

    // Doodles are kept as strokes (not pixels), so the "ink" colour can follow light / dark mode
    function pad(g, key, side) {
      const cv = g.querySelector('canvas'), ctx = cv.getContext('2d');
      let strokes = [], cur = null, mode = 0, W = 0, hush = 0;   // hush: timer that silences the pen sound once the pointer stops moving
      try { strokes = JSON.parse(sessionStorage.getItem(key) || '[]'); } catch (err) {}
      const ink = () => getComputedStyle(root).getPropertyValue('--ink').trim() || '#222';
      const X = (px, u) => (side === 'r' ? W : 0) + px * u;
      const brush = (s, u) => { ctx.globalCompositeOperation = s.e ? 'destination-out' : 'source-over'; ctx.strokeStyle = s.c === 'ink' ? ink() : s.c; ctx.lineWidth = s.w * u; ctx.lineCap = ctx.lineJoin = 'round'; };
      const render = () => {
        const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
        if (!r.width) return;
        W = r.width; cv.width = Math.round(r.width * d); cv.height = Math.round(r.height * d); ctx.setTransform(d, 0, 0, d, 0, 0);
        const u = ui();
        for (const s of strokes) {
          brush(s, u); ctx.beginPath();
          s.p.forEach(([px, py], i) => { i ? ctx.lineTo(X(px, u), py * u) : ctx.moveTo(X(px, u), py * u); });
          if (s.p.length === 1) ctx.lineTo(X(s.p[0][0], u) + .01, s.p[0][1] * u);
          ctx.stroke();
        }
      };
      const pt = e => { const r = cv.getBoundingClientRect(), u = ui(); return [(e.clientX - r.left - (side === 'r' ? r.width : 0)) / u, (e.clientY - r.top) / u]; };
      const save = () => {
        try { let j = JSON.stringify(strokes); while (j.length > 400000 && strokes.length > 1) { strokes.shift(); j = JSON.stringify(strokes); } sessionStorage.setItem(key, j); } catch (err) {}
      };
      const scratch = () => {   // called on every real movement while drawing / erasing
        const k = mode === 2 ? 'erase' : 'pen';
        Sfx.loop(k); clearTimeout(hush); hush = setTimeout(() => Sfx.stop(k), 90);
      };
      cv.addEventListener('pointerdown', e => {
        if (e.button !== 0 && e.button !== 2) return;
        e.preventDefault(); cv.setPointerCapture(e.pointerId);
        mode = e.button === 2 ? 2 : 1;
        cur = { c: pen.c, w: pen.s * (mode === 2 ? 2.4 : 1), e: mode === 2, p: [pt(e)] }; strokes.push(cur);
        const u = ui(), [px, py] = cur.p[0];
        brush(cur, u); ctx.beginPath(); ctx.moveTo(X(px, u), py * u); ctx.lineTo(X(px, u) + .01, py * u); ctx.stroke();
      });
      cv.addEventListener('pointermove', e => {
        const u = ui(), er = mode === 2 || (!mode && e.buttons === 2), dia = pen.s * u * (er ? 2.4 : 1) + 2;
        ring.style.cssText = `display:block;left:${e.clientX}px;top:${e.clientY}px;width:${dia}px;height:${dia}px`;
        ring.classList.toggle('erase', er);
        if (!mode) return;
        const a = cur.p[cur.p.length - 1], b = pt(e);
        if (Math.hypot(b[0] - a[0], b[1] - a[1]) < .6) return;
        cur.p.push(b); scratch();
        brush(cur, u); ctx.beginPath(); ctx.moveTo(X(a[0], u), a[1] * u); ctx.lineTo(X(b[0], u), b[1] * u); ctx.stroke();
      });
      const end = () => { if (mode) { clearTimeout(hush); Sfx.stop(mode === 2 ? 'erase' : 'pen'); mode = 0; cur = null; save(); } };
      cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);
      cv.addEventListener('pointerleave', () => { ring.style.display = 'none'; });
      cv.addEventListener('contextmenu', e => e.preventDefault());
      render(); addEventListener('resize', render);
      return { render, clear() { strokes = []; save(); render(); } };
    }
    const pads = [pad($('.gl'), 'doodle-l', 'l'), pad($('.gr'), 'doodle-r', 'r')];
    const kit = $('#penkit');
    const swatch = kit.querySelector('.custom'), cm = kit.querySelector('.cm');
    const sv = cm.querySelector('.cm-sv'), knob = sv.firstElementChild, hue = cm.querySelector('.cm-hue'), hexIn = cm.querySelector('.cm-hex');
    const sync = () => {
      kit.querySelectorAll('.c[data-c]').forEach(x => x.classList.toggle('on', !pen.custom && x.dataset.c === pen.c));
      swatch.classList.toggle('on', pen.custom);
      kit.querySelectorAll('.sz button').forEach(x => x.classList.toggle('on', +x.dataset.s === pen.s));
    };
    const useCustom = () => { pen.c = customColor; pen.custom = true; sync(); };

    /* Custom colour menu. Click the rainbow swatch to use your saved colour; double-click it to choose a new one. */
    const toHex = (h, s, v) => { const f = n => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); }; return '#' + [f(5), f(3), f(1)].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join(''); };
    const toHsv = hex => {
      const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255), mx = Math.max(r, g, b), d = mx - Math.min(r, g, b);
      const h = !d ? 0 : mx === r ? ((g - b) / d + 6) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
      return [h * 60, mx ? d / mx : 0, mx];
    };
    let hsv = toHsv(customColor);   // hue 0-360, saturation 0-1, brightness 0-1
    const paint = keepHex => {
      const c = toHex(...hsv);
      sv.style.setProperty('--h', `hsl(${hsv[0]},100%,50%)`);
      knob.style.left = `calc(0.4375rem + ${hsv[1]} * (100% - 0.875rem))`; knob.style.top = `calc(0.4375rem + ${1 - hsv[2]} * (100% - 0.875rem))`;
      hue.value = hsv[0]; if (!keepHex) hexIn.value = c;
      cm.querySelector('.new').style.background = c;
    };
    const dragSV = e => {
      const r = sv.getBoundingClientRect(), edge = 9 * ui();   // border + knob radius, so the knob stays fully inside the square
      hsv[1] = Math.max(0, Math.min(1, (e.clientX - r.left - edge) / (r.width - 2 * edge)));
      hsv[2] = 1 - Math.max(0, Math.min(1, (e.clientY - r.top - edge) / (r.height - 2 * edge))); paint();
    };
    sv.addEventListener('pointerdown', e => { e.preventDefault(); sv.setPointerCapture(e.pointerId); dragSV(e); });
    sv.addEventListener('pointermove', e => { if (sv.hasPointerCapture(e.pointerId)) dragSV(e); });
    hue.addEventListener('input', () => { hsv[0] = +hue.value; paint(); });
    hexIn.addEventListener('input', () => {
      const v = hexIn.value.trim().replace(/^#?/, '#');
      if (/^#[0-9a-f]{6}$/i.test(v)) { hsv = toHsv(v.toLowerCase()); paint(true); }
    });
    const closeMenu = () => { cm.hidden = true; };
    const openMenu = () => {
      hsv = toHsv(customColor); cm.querySelector('.old').style.background = customColor; paint();
      cm.hidden = false;
      const kr = kit.getBoundingClientRect(), sr = swatch.getBoundingClientRect();   // sits beside the swatch, kept on screen
      cm.style.top = Math.max(8, Math.min(innerHeight - cm.offsetHeight - 8, sr.top - 12)) - kr.top + 'px';
    };
    const applyColor = () => {   // Confirm: this is the only thing that changes your saved custom colour
      customColor = toHex(...hsv);
      try { localStorage.setItem('pen-custom', customColor); } catch (err) {}
      swatch.style.setProperty('--c', customColor);
      useCustom(); closeMenu(); Sfx.play('pick');
    };
    cm.querySelector('.cm-ok').addEventListener('click', applyColor);
    hexIn.addEventListener('keydown', e => { if (e.key === 'Enter') applyColor(); });
    swatch.addEventListener('dblclick', openMenu);
    swatch.addEventListener('keydown', e => { if (e.key === 'Enter' && e.shiftKey) openMenu(); });   // keyboard: Shift + Enter
    document.addEventListener('pointerdown', e => { if (!cm.hidden && !cm.contains(e.target) && !swatch.contains(e.target)) closeMenu(); });   // click away = cancel
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

    kit.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || b.closest('.cm')) return;
      if (b.classList.contains('clr')) { Sfx.play('clear'); return pads.forEach(p => p.clear()); }
      if (b === swatch) useCustom();
      else if (b.dataset.c) { pen.c = b.dataset.c; pen.custom = false; }
      else if (b.dataset.s) pen.s = +b.dataset.s;
      else return;
      if (e.detail < 2) Sfx.play('pick');   // a double-click on the swatch makes one sound, not two
      sync();
    });
    // switching light / dark mode recolours every "ink" stroke
    new MutationObserver(() => pads.forEach(p => p.render())).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    // side margins: show the doodle tools + silhouettes only when there is room, and fade out any shape that has no room
    function layout() {
      const px = parseFloat(getComputedStyle(root).fontSize) || 16, W = Math.max(0, (innerWidth - 63 * px) / 2);
      const wide = W >= 4 * px, was = root.classList.contains('wide');
      root.classList.toggle('wide', wide);
      if (!wide) return;
      Sfx.load('pick', 'clear', 'pen', 'erase');   // fetched once, and only when the doodle tools are showing
      if (!was) pads.forEach(p => p.render());
      const y0 = 3.675 * px, y1 = innerHeight - (page === 'home' ? 0 : 4.875 * px) - .8 * px, UH = Math.max(0, y1 - y0), kb = kit.getBoundingClientRect();
      [['gl', LEFT, 4.4], ['gr', RIGHT, 1.4]].forEach(([cls, list, outer]) => {
        const kept = cls === 'gl' ? [{ l: kb.left, r: kb.right, t: kb.top, b: kb.bottom }] : [];
        $('.' + cls).querySelectorAll('.sil').forEach((el, i) => {
          const [, col, tp, sz] = list[i], w = sz * px, x = (outer + (col ? 9.6 : 0)) * px, y = y0 + tp / 100 * UH - w / 2;
          el.style[cls === 'gl' ? 'left' : 'right'] = x + 'px'; el.style.top = y + 'px';
          const box = { l: x, r: x + w, t: y, b: y + w };
          const cut = Math.min(x + w, W) - Math.max(x, 0) < .6 * w || Math.min(y + w, y1) - Math.max(y, y0) < .6 * w
            || kept.some(k => { const ox = Math.min(k.r, box.r) - Math.max(k.l, box.l), oy = Math.min(k.b, box.b) - Math.max(k.t, box.t); return ox > 0 && oy > 0 && ox * oy > .15 * w * w; });
          el.classList.toggle('off', cut);
          if (!cut) kept.push(box);
        });
      });
    }
    layout(); addEventListener('resize', layout); document.fonts.ready.then(layout);
  }

  /* ---------- Home: spinning cartridge (random picture from the hovered category; drag to spin) ---------- */
  function cartridge() {
    const img = $('#cartimg'), cap = $('#cartcap'), flip = $('#cartflip'), body = $('.cart3d'), grab = $('.cartfloat');
    /* How the cartridge is drawn in 3D. true = every face gets its own perspective transform, worked out in CSS (see "Cartridge, projected" in
       style.css). false = the browser's nested 3D ("preserve-3d"), which Safari on a Mac can flatten, so the cartridge looked 2D there. Both look
       the same where nested 3D works. Set it to false to go back to how it was. */
    const CART_PROJECTED = true;
    if (CART_PROJECTED) { flip.classList.add('flat'); body.classList.add('flat'); }
    let cat = null, last = '', swapId = 0;
    Sfx.load('spin', 'swap');
    const norm = p => typeof p === 'string' ? { src: p, pos: '50% 50%', whole: false } : { src: p[0], pos: p[1] || '50% 50%', whole: p[2] === 'whole' };   // PICS entry -> { file, crop focus, show whole photo? }
    /* Weighted pick: a picture that has not been shown yet is far more likely to come up than one that already has, and every time one is
       shown its chance drops. A picture shown n times has weight 1 / (1 + n) ^ FALLOFF, so with 2 a never-shown picture is 4x as likely as one
       shown once, 9x as likely as one shown twice, and so on. Raise FALLOFF to favour fresh pictures even harder, 0 = plain random. The counts
       are kept for the browser tab's session, so going to another page and back doesn't start the favouring over. */
    const FALLOFF = 2, SEEN = 'cartSeen'; let seen = {};
    try { seen = JSON.parse(sessionStorage.getItem(SEEN) || '{}') || {}; } catch (e) {}
    const pick = () => {
      const all = (PICS[cat] || []).map(norm); if (!all.length) return null;
      const fresh = all.filter(p => p.src !== last), pool = fresh.length ? fresh : all;   // never the same picture twice in a row (unless that is all there is)
      const w = pool.map(p => Math.pow(1 + (seen[p.src] || 0), -FALLOFF));
      let r = Math.random() * w.reduce((a, b) => a + b, 0), p = pool[pool.length - 1];
      for (let i = 0; i < pool.length; i++) { r -= w[i]; if (r <= 0) { p = pool[i]; break; } }
      seen[p.src] = (seen[p.src] || 0) + 1;
      try { sessionStorage.setItem(SEEN, JSON.stringify(seen)); } catch (e) {}
      last = p.src; return p;
    };
    const swap = quiet => {   // quiet: no sound (used when you hover a different tab, which also changes the picture)
      const p = pick(); if (!p) return;
      const me = ++swapId;
      if (!reduce) flip.animate([{ transform: 'scale(1) rotate(0)' }, { transform: 'scale(.7) rotate(-9deg)', offset: .4 }, { transform: 'scale(1) rotate(0)' }], { duration: 480, easing: 'ease-out' });
      // the new picture is loaded and decoded while the cartridge shrinks, so a big photo never pops in half-drawn
      const ld = new Image(); ld.src = p.src;
      const decoded = ld.decode ? ld.decode().catch(() => {}) : Promise.resolve();
      Promise.all([decoded, sleep(reduce ? 0 : 190)]).then(() => {
        if (me !== swapId) return;   // a newer swap has started
        const art = img.parentElement; art.classList.toggle('whole', p.whole); art.style.setProperty('--bg', p.whole ? 'url("' + p.src + '")' : 'none');
        img.style.objectPosition = p.pos; img.src = p.src; if (!quiet) Sfx.play('swap');   // the sound lands the moment the picture changes
      });
    };
    setInterval(() => { if (!document.hidden && cat) swap(); }, 4500);

    // slow turn by default; dragging spins it faster and a flick lets it coast; changing category resets it to face front
    const BASE = reduce ? 0 : 52;
    let angle = 0, vel = BASE, dragging = false, px = 0, pt = 0, settle = 0, t0 = performance.now(), turnLo = 0, turnHi = 0, origin = 0, prevTurn = 0, peak = 0, way = 0; const played = new Set();
    const loop = now => {
      requestAnimationFrame(loop);
      const dt = Math.min(.05, (now - t0) / 1000); t0 = now;
      if (document.hidden) return;
      if (settle > 0) { settle -= dt; angle += (Math.round(angle / 360) * 360 - angle) * Math.min(1, dt * 12); vel = BASE; }
      else if (!dragging) { vel += (BASE - vel) * Math.min(1, dt * 1.1); angle += vel * dt; }
      if (CART_PROJECTED) body.style.setProperty('--R', `translate(3.625rem,4.125rem) rotateY(${angle.toFixed(3)}deg) translate(-3.625rem,-4.125rem)`);   // spin around the middle of the cartridge
      else body.style.transform = `rotateY(${angle}deg)`;
      // one sound each time the slim side of the cartridge points at you (twice per full turn: 90, 270, 450 degrees ...), but only while
      // YOU are spinning it (dragging, then coasting). The slow idle turn stays silent. Each edge only counts once per spin, so wiggling
      // it back and forth across the same spot doesn't repeat the sound, and a small nudge (under 20 degrees) is ignored.
      // Turning the cartridge round (grabbing it mid-spin and pulling the other way) counts as a NEW spin: every edge rings again.
      const forced = dragging || (settle <= 0 && Math.abs(vel) > BASE + 25), turn = Math.floor((angle - 90) / 180);
      if (!forced) { turnLo = turnHi = prevTurn = turn; origin = peak = angle; way = 0; played.clear(); }
      else {
        const d = angle - peak;   // peak: the furthest point reached in the current direction (way: +1 / -1 / 0 = not moving yet)
        if (!way) { if (Math.abs(d) >= 2) { way = Math.sign(d); peak = angle; } }
        else if (d * way > 0) peak = angle;
        else if (-d * way >= 6) { origin = peak; peak = angle; way = -way; played.clear(); }   // pulled back 6+ degrees: new spin from the turning point
        if (turn !== prevTurn) {   // crossed an edge, in either direction (forwards or backwards)
          const edge = Math.max(turn, prevTurn);
          if (!played.has(edge) && Math.abs(angle - origin) >= 20) { Sfx.play('spin'); played.add(edge); }
          prevTurn = turn;
        }
      }
    };
    requestAnimationFrame(loop);
    grab.addEventListener('pointerdown', e => { dragging = true; settle = 0; px = e.clientX; pt = e.timeStamp; grab.setPointerCapture(e.pointerId); e.preventDefault(); });
    grab.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dx = e.clientX - px, dt = Math.max(1, e.timeStamp - pt) / 1000; px = e.clientX; pt = e.timeStamp;
      angle += dx * .9; vel = Math.max(-1400, Math.min(1400, vel * .5 + (dx * .9 / dt) * .5));
    });
    const up = () => { dragging = false; };
    grab.addEventListener('pointerup', up); grab.addEventListener('pointercancel', up);
    return { show(id) {
      if (id === cat) return; if (cat) settle = .5; cat = id;
      const game = GAMES.find(x => x.id === id); cap.textContent = game.title; cap.href = game.href; Type.tune(cap);
      (PICS[id] || []).forEach(p => { new Image().src = norm(p).src; });   // warm the cache so the first swaps are instant
      swap(true);
    } };
  }

  /* ---------- Home: game tiles + the Mii guide ---------- */
  function home(cartCtl) {
    Sfx.load('poke', 'land', 'grab');
    $('#tiles').innerHTML = GAMES.map((g, i) =>
      `<a class="tile${i === 0 ? ' big' : ''}" href="${g.href}" data-id="${g.id}" data-say="${g.say}" style="--i:${i}">
         <span class="num">${i + 1}</span><span class="ibox">${cart(g)}</span><span class="tt"><b>${esc(g.title)}</b><small>${g.mode}</small></span></a>`).join('');
    const tiles = $$('.tile'), first = tiles[0], tilesBox = $('#tiles');
    // only one tile is highlighted at a time: the last one you hovered (the big one until you hover another)
    const select = t => { tiles.forEach(x => x.classList.toggle('sel', x === t)); cartCtl.show(t.dataset.id); };
    select(first);

    /* The Mii: shoulders and elbows are driven here so he can bend his arms and gesture */
    const mii = $('#mii'), bubble = $('#bubble'), sayEl = $('#say');
    const part = { body: mii.querySelector('.in'), ru: mii.querySelector('.arm.r'), rf: mii.querySelector('.arm.r .fore'), lu: mii.querySelector('.arm.l'), lf: mii.querySelector('.arm.l .fore'), shadow: mii.querySelector('.shadow') };
    // rs/re = right shoulder/elbow, ls/le = left shoulder/elbow (degrees); o = wobble [amplitude, Hz, phase]
    const G = {
      idle:    { rs: -33, re: 8, ls: 33, le: -8, o: { rs: [3, .6, 0], re: [3, .9, 1], ls: [3, .6, 2], le: [3, .9, 3] }, bob: [2.5, .45] },
      walk:    { rs: -33, re: 10, ls: 33, le: -10, o: { rs: [16, 3.6, 0], re: [8, 3.6, 0], ls: [16, 3.6, 3.14], le: [8, 3.6, 3.14] }, hop: [7, 3.6], fast: 1 },
      wave:    { rs: -100, re: -70, ls: 33, le: -8, o: { re: [24, 2.4, 0], ls: [2, .6, 1] }, bob: [3, .8], lean: [1.5, .8] },
      explain: { rs: -52, re: -75, ls: 33, le: -8, o: { re: [12, 1.4, 0], rs: [5, 1.4, 1] }, lean: [1.5, .7] },
      both:    { rs: -48, re: -58, ls: 48, le: 58, o: { re: [8, 1.2, 0], le: [8, 1.2, 3.14], rs: [4, 1.2, 0], ls: [4, 1.2, 3.14] }, bob: [3, .6] },
      point:   { rs: -93, re: -5, ls: 33, le: -8, o: { rs: [4, 2, 0], re: [6, 2, 1] }, lean: [-1.5, .6] },
      hip:     { rs: -33, re: 8, ls: 60, le: -80, o: { le: [3, .8, 0], rs: [4, .7, 1], re: [4, .9, 2] }, lean: [-1.5, .5] },
      pump:    { rs: -80, re: -85, ls: 80, le: 85, o: { re: [14, 2.6, 0], le: [14, 2.6, 1.57] }, hop: [4, 2.6] },
      shrug:   { rs: -40, re: -55, ls: 40, le: 55, o: { re: [7, 3.2, 0], le: [7, 3.2, 0] }, bob: [4, 1.6] },
      cheer:   { rs: -140, re: -25, ls: 140, le: 25, o: { re: [18, 3.2, 0], le: [18, 3.2, 1.57] }, hop: [16, 2.6], fast: 1 },
      held:    { rs: -150, re: -10, ls: 150, le: 10, o: { rs: [18, 3.2, 0], ls: [18, 3.2, 2], re: [14, 4, 1], le: [14, 4, 3] }, lean: [8, 1.5], fast: 1 }
    };
    const TALK = ['explain', 'both', 'point', 'hip', 'pump', 'shrug'];
    let g = G.idle, T = 0, last = performance.now(), talking = false, gTimer = 0;
    let mx = 0, my = 0, vy = 0, held = false, sq = 0, jolt = 0, drag = null;   // drag offset, fall speed, landing squash, poke hop
    const ang = { rs: -33, re: 8, ls: 33, le: -8 };
    const pose = n => { if (held && n !== 'held') return; g = G[n] || G.idle; };
    function frame(now) {
      requestAnimationFrame(frame);
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      if (document.hidden || !part.rf || !part.lf) return;
      if (reduce) T = 0; else T += dt;
      const s = reduce ? 1 : Math.min(1, dt * (g.fast ? 14 : 8));
      for (const k of ['rs', 're', 'ls', 'le']) {
        let v = g[k]; const o = g.o && g.o[k];
        if (o) v += o[0] * Math.sin(T * o[1] * 6.283 + o[2]);
        ang[k] += (v - ang[k]) * s;
      }
      part.ru.style.transform = `rotate(${ang.rs}deg)`; part.rf.style.transform = `rotate(${ang.re}deg)`;
      part.lu.style.transform = `rotate(${ang.ls}deg)`; part.lf.style.transform = `rotate(${ang.le}deg)`;
      let y = 0, r = 0;
      if (g.bob) y -= g.bob[0] * (.5 + .5 * Math.sin(T * g.bob[1] * 6.283));
      if (g.hop) y -= g.hop[0] * Math.abs(Math.sin(T * g.hop[1] * 3.1416));
      if (talking) y -= 2 * Math.abs(Math.sin(T * 8.5)) * (.6 + .4 * Math.sin(T * 2.3));   // talking bounce
      if (g.lean) r = g.lean[0] * Math.sin(T * g.lean[1] * 6.283);
      if (jolt > 0) { jolt = Math.max(0, jolt - dt * 3); y -= 20 * Math.sin(jolt * Math.PI); }
      if (!held && (my < 0 || vy)) {                                  // let go: fall, bounce, land
        vy += 2600 * dt; my += vy * dt;
        if (my >= 0) { my = 0; if (vy > 80) Sfx.play('land', Math.min(1, .25 + vy / 1100));   // thud on every touchdown, softer on each bounce
          if (vy > 320) { sq = Math.min(1, vy / 1400); vy = -vy * .35; } else { vy = 0; land(); } }
      }
      sq = Math.max(0, sq - dt * 3.5);
      mii.style.transform = `translate(${mx}px,${my}px)`;
      if (part.shadow) part.shadow.style.transform = `translateY(${-my}px)`;   // cancels his lift: the shadow stays on the floor and only follows him sideways
      part.body.style.transform = `translateY(${y * mii.offsetWidth / 352}px) rotate(${r}deg) scale(${1 + sq * .1},${1 - sq * .16})`;
    }
    requestAnimationFrame(frame);
    // while he talks he switches between different gestures every couple of seconds
    function startTalk(first, hold) {
      talking = true; clearInterval(gTimer);
      let cur = first || TALK[Math.floor(Math.random() * TALK.length)]; pose(cur);
      if (!hold) gTimer = setInterval(() => {
        let n; do { n = TALK[Math.floor(Math.random() * TALK.length)]; } while (n === cur);
        cur = n; pose(cur);
      }, 1900 + Math.random() * 700);
    }
    function stopTalk(rest) { talking = false; clearInterval(gTimer); pose(rest || 'idle'); }

    let token = 0, tour = true, step = -1, timer = 0;
    async function say(text, done, o) {
      o = o || {}; const my = ++token;
      if (reduce) { sayEl.textContent = text; if (done) done(); return; }
      sayEl.textContent = '';
      startTalk(o.gest, o.hold);
      for (let i = 1; i <= text.length; i++) { if (my !== token) return; sayEl.textContent = text.slice(0, i); await sleep(22); }
      if (my !== token) return;
      stopTalk(o.rest); if (done) done();
    }
    const spot = id => {
      tiles.forEach(t => {
        t.classList.toggle('spot', t.dataset.id === id);
        const old = t.querySelector('.tapper'); if (old) old.remove();
        if (t.dataset.id === id) t.insertAdjacentHTML('beforeend', '<img class="tapper" src="stylus.svg" alt="">');
      });
      select(tiles.find(t => t.dataset.id === id) || first);
    };
    const STEPS = [{ t: "Hi! I'm Daniel's Mii. Let me show you around!", o: { gest: 'wave', hold: true } },
      ...GAMES.map((g2, i) => ({ t: g2.tour, spot: g2.id, o: i === GAMES.length - 1 ? { gest: 'cheer', hold: true } : {} })),
      { t: 'Tap any game to begin!' }];
    function end(msg) { tour = false; clearTimeout(timer); spot(null); bubble.classList.add('done'); say(msg || 'Tap any game to begin!'); }
    function go(i) {
      clearTimeout(timer); step = i;
      if (i >= STEPS.length) return end();
      const s = STEPS[i]; spot(s.spot);
      say(s.t, () => { if (tour && i < STEPS.length - 1) timer = setTimeout(() => go(i + 1), 2400); }, s.o);
    }
    $('#next').onclick = () => { Sfx.play('pick'); go(step + 1); };
    $('#skip').onclick = () => { Sfx.play('pick'); end(); };
    tiles.forEach(t => {
      const hov = () => { tour = false; clearTimeout(timer); spot(null); bubble.classList.add('done'); select(t); say(t.dataset.say); };
      t.addEventListener('mouseenter', hov); t.addEventListener('focus', hov);

      /* Long press (finger or pen) = the same as hovering: this tile becomes the highlighted one and the cartridge shows its preview, WITHOUT
         opening it. A normal tap still opens the tab. A mouse doesn't need this (hovering already does it), so a slow mouse click still opens. */
      const LONG_PRESS = 400;   // ms to hold before it counts (EDIT)
      let hold = 0, held = false, sx = 0, sy = 0;
      const cancel = () => { clearTimeout(hold); hold = 0; };
      t.addEventListener('pointerdown', e => {
        if (e.pointerType === 'mouse' || e.button) return;
        held = false; cancel(); sx = e.clientX; sy = e.clientY;
        hold = setTimeout(() => { hold = 0; held = true; hov(); Sfx.play('hover'); }, LONG_PRESS);   // the hover blip confirms it
      });
      t.addEventListener('pointermove', e => { if (hold && Math.hypot(e.clientX - sx, e.clientY - sy) > 10) cancel(); });   // moved: it is a scroll or a drag, not a press
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => t.addEventListener(ev, cancel));
      t.addEventListener('click', e => { if (held) { held = false; e.preventDefault(); e.stopPropagation(); } }, true);   // the let-go after a long press must not open the tab (or play the select sound)
      t.addEventListener('contextmenu', e => { if (held || TOUCH) e.preventDefault(); });                                 // no "open in new tab" menu on a long press
    });
    /* Pick him up, poke him, drop him. He stays inside the width of the speech box and the arrow follows him */
    const cartBox = $('.cartstage');
    const bounds = () => {   // he stays inside the speech box and never overlaps the cartridge (slim layout)
      const m = mii.getBoundingClientRect(), b = bubble.getBoundingClientRect(), k = cartBox.getBoundingClientRect(), base = m.left - mx;
      let lo = b.left - base, hi = b.right - base - m.width;
      if (k.left > base + m.width * .5) hi = Math.min(hi, k.left - base - m.width - 8);
      if (hi < lo) lo = hi = (lo + hi) / 2;
      return [lo, hi];
    };
    const tailTo = () => {
      const x = mii.offsetLeft + mx + mii.offsetWidth / 2 - bubble.offsetLeft;
      bubble.style.setProperty('--tail', Math.max(26, Math.min(bubble.offsetWidth - 26, x)) + 'px');
    };
    const POKES = ['Hey! That tickles!', 'Oof! Careful!', 'Hehe, stop poking me!', 'Boop!', "I'm just here to help!"];
    const DROPS = ['Whee!', 'Phew, solid ground again!', 'Be careful with Mii!', 'Do it again!'];
    function poke() {
      jolt = 1; Sfx.play('poke'); tour = false; clearTimeout(timer); spot(null); bubble.classList.add('done');
      say(POKES[Math.floor(Math.random() * POKES.length)], null, { gest: ['pump', 'shrug', 'hip', 'cheer'][Math.floor(Math.random() * 4)] });
    }
    modeSpam = () => {   // the light / dark switch is being spammed (see countFlip near the top)
      if (held) return;
      tour = false; clearTimeout(timer); spot(null); bubble.classList.add('done');
      say(MODE_SPAM.line, null, { gest: 'shrug' });
    };
    function land() {
      tailTo(); bubble.classList.remove('away');
      tour = false; clearTimeout(timer); spot(null); bubble.classList.add('done');
      say(DROPS[Math.floor(Math.random() * DROPS.length)], null, { gest: 'shrug' });
    }
    mii.addEventListener('pointerdown', e => {
      if (e.button) return;
      e.preventDefault(); mii.setPointerCapture(e.pointerId);
      drag = { x: e.clientX, y: e.clientY, mx, my, moved: false };
    });
    mii.addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved) {
        if (Math.hypot(dx, dy) < 6) return;
        drag.moved = true; held = true; vy = 0; Sfx.loop('grab'); stopTalk(); bubble.classList.add('away'); pose('held');   // picked up: the box hides
      }
      const [lo, hi] = bounds();
      mx = Math.max(lo, Math.min(hi, drag.mx + dx));
      const scr = $('.screen.top'), top = scr.getBoundingClientRect().top + scr.clientTop, base = mii.getBoundingClientRect().top - my;   // top edge inside the top screen's border
      my = Math.max(top - base + 10.0, Math.min(0, drag.my + dy));
    });
    const dropHim = () => {
      if (!drag) return;
      const d = drag; drag = null; Sfx.stop('grab');   // let go: the grab sound stops at once
      if (!d.moved) return poke();
      held = false; vy = 1; pose('idle'); tailTo();                                                    // let go: he falls and bounces
    };
    mii.addEventListener('pointerup', dropHim); mii.addEventListener('pointercancel', dropHim);
    const fitHome = () => {   // if the home screen would need scrolling, shrink the Mii, tiles and cartridge just enough to fit
      root.style.setProperty('--fit', 1);
      if (innerWidth <= 820 || innerHeight < 560) return;   // phones: no shrinking (on a short landscape screen it made the Mii tiny; the page scrolls instead)
      let f = 1;
      for (let i = 0; i < 12 && root.scrollHeight - innerHeight > 1; i++) {
        const over = root.scrollHeight - innerHeight, h = $('.console').offsetHeight;
        f = Math.max(.5, f * Math.max(.6, (h - over - 2) / h)); root.style.setProperty('--fit', f.toFixed(3));
        if (f <= .5) break;
      }
    };
    addEventListener('resize', () => { fitHome(); const [lo, hi] = bounds(); mx = Math.max(lo, Math.min(hi, mx)); tailTo(); });
    fitHome(); document.fonts.ready.then(() => { fitHome(); tailTo(); });
    tailTo();

    const seen = arrival || sessionStorage.getItem('guided');
    try { sessionStorage.setItem('guided', '1'); } catch (err) {}
    if (seen) { mii.classList.add('still'); bubble.classList.add('done'); say('Welcome back! Pick a game.', null, { gest: 'wave', hold: true, rest: 'wave' }); setTimeout(() => pose('idle'), 2600); }
    else { pose('walk'); setTimeout(() => go(0), reduce ? 0 : 1500); }
  }
  if (isHome) { hints(); home(cartridge()); }
  /* ---------- Experience & Projects: a grid of project cards, like YouTube ----------
     Hover a card (or long press it on a phone) and its preview plays over the thumbnail. Click it for the full viewer: the logo art, the
     screenshots drifting past, and the full description. Everything stays on this page; the viewer works like the resume viewer
     (the Back button, Esc, or the phone's back gesture closes it). */
  const grid = $('#projects');
  if (grid) {
    const HOVER_DELAY = 280,   // ms the mouse rests on a card before its preview starts
          LONG_PRESS = 400,    // ms a finger holds a card before its preview starts
          STICKY_MS = 15000,   // a preview started by a long press keeps playing this long (or until you tap somewhere else)
          STRIP_SPEED = 30;    // how fast the screenshots drift in the viewer, in px per second (smaller = slower)
    const h = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const url = (p, f) => encodeURI(p.folder + '/' + f);

    /* the cards */
    const cards = PROJECTS.map((p, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'vcard'; b.style.setProperty('--k', Math.min(i, 4));
      b.setAttribute('aria-haspopup', 'dialog');
      b.innerHTML = `<span class="vthumb"><img class="vlogo" src="${url(p, p.logo)}" alt="" decoding="async"><span class="vbar"></span>${p.tag ? `<span class="vtag">${h(p.tag)}</span>` : ''}</span>`
        + `<span class="vmeta"><span class="vtitle">${h(p.title)}</span><span class="vrole">${h(p.role)}</span></span>`;
      grid.appendChild(b);
      return [p, b];
    });

    /* Previews can be big (a GIF is several MB), so they download in the background only on a good connection (not on mobile data or Data Saver),
       and always the moment someone shows interest in a card. */
    const net = navigator.connection, goodNet = !net || (!net.saveData && net.type !== 'cellular' && !/(^|-)[23]g$/.test(net.effectiveType || ''));
    const warmed = new Set(), keep = [];
    const warm = p => { if (!p.preview || warmed.has(p.id)) return; warmed.add(p.id); const im = new Image(); im.src = url(p, p.preview); keep.push(im); };
    if (goodNet) (window.requestIdleCallback || (f => setTimeout(f, 2500)))(() => PROJECTS.forEach(warm), { timeout: 5000 });

    /* previews: only one plays at a time */
    let live = null;   // { card, stop }
    const stopLive = () => { if (live) live.stop(); };
    document.addEventListener('pointerdown', e => { if (live && e.pointerType === 'touch' && !live.card.contains(e.target)) stopLive(); });   // tapping elsewhere ends a long-press preview
    document.addEventListener('visibilitychange', () => { if (document.hidden) stopLive(); });

    cards.forEach(([p, b]) => {
      const thumb = b.querySelector('.vthumb'), bar = thumb.querySelector('.vbar');
      let delay = 0, auto = 0, token = 0, shown = null;
      const stop = () => {
        clearTimeout(delay); clearTimeout(auto); token++;
        thumb.classList.remove('loading', 'playing');
        if (shown) { const gone = shown; shown = null; setTimeout(() => gone.remove(), 280); }   // fades out, then is removed so the next one starts from its first frame
        if (live && live.card === b) live = null;
      };
      const start = sticky => {
        if (!p.preview || shown || thumb.classList.contains('loading')) return;
        stopLive(); live = { card: b, stop };
        const me = ++token; thumb.classList.add('loading');   // the bar slides back and forth while it loads
        bar.style.setProperty('--secs', (p.previewSecs || 8) + 's');
        const el = new Image(); el.className = 'vprev'; el.alt = ''; el.decoding = 'async'; el.src = url(p, p.preview);
        (el.decode ? el.decode() : new Promise((ok, no) => { el.onload = ok; el.onerror = no; })).catch(() => {}).then(() => {
          if (me !== token) return;                                                        // you moved away before it finished loading
          if (!el.naturalWidth) { thumb.classList.remove('loading'); if (live && live.card === b) live = null; return; }   // file missing: just stay on the logo
          shown = el; thumb.insertBefore(el, bar); void el.offsetWidth;                    // a fresh image always starts from its first frame
          thumb.classList.remove('loading'); thumb.classList.add('playing');               // fade in; the bar now counts through the preview
          if (sticky) auto = setTimeout(stop, STICKY_MS);
        });
      };

      /* mouse (and pen): hover */
      b.addEventListener('pointerenter', e => { if (e.pointerType === 'touch') return; warm(p); delay = setTimeout(() => start(false), HOVER_DELAY); });
      b.addEventListener('pointerleave', e => { if (e.pointerType === 'touch') return; stop(); });

      /* finger: a long press starts the preview WITHOUT opening the card; a normal tap opens it. (Same idea as the long press on the home menu.) */
      let hold = 0, held = false, sx = 0, sy = 0;
      const cancel = () => { clearTimeout(hold); hold = 0; };
      b.addEventListener('pointerdown', e => {
        if (e.pointerType === 'mouse' || e.button) return;
        held = false; cancel(); sx = e.clientX; sy = e.clientY; warm(p);
        hold = setTimeout(() => { hold = 0; held = true; start(true); }, LONG_PRESS);
      });
      b.addEventListener('pointermove', e => { if (hold && Math.hypot(e.clientX - sx, e.clientY - sy) > 10) cancel(); });   // moved: a scroll, not a press
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => b.addEventListener(ev, cancel));
      b.addEventListener('contextmenu', e => { if (held || TOUCH) e.preventDefault(); });                                 // no phone menu on a long press
      b.addEventListener('click', e => {
        if (held) { held = false; e.preventDefault(); e.stopPropagation(); return; }   // letting go after a long press must not open it (or play the select sound)
        openViewer(p, b);
      }, true);
    });

    /* the viewer */
    const svg = (d, w = 3, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${extra}><path d="${d}"/></svg>`;
    const ARROW = svg('M20 12H5M11 5l-7 7 7 7'), CHEV_L = svg('M15 5l-7 7 7 7', 3.2), CHEV_R = svg('M9 5l7 7-7 7', 3.2), CLOSE = svg('M6 6l12 12M18 6L6 18', 3);
    const EXT = svg('M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5', 2.6);
    const PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.5v14H7zM13.500 5H17v14h-3.500z"/></svg>';
    const PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    const pv = document.createElement('div');
    pv.className = 'rv pv'; pv.hidden = true;
    pv.setAttribute('role', 'dialog'); pv.setAttribute('aria-modal', 'true'); pv.setAttribute('aria-labelledby', 'pv-title');
    pv.innerHTML = `<div class="rv-bar"><button type="button" class="rv-back" aria-label="Back to the projects">${ARROW}<span>Back</span></button><p class="rv-title" id="pv-title"></p></div>`
      + `<div class="rv-stage"><div class="pv-body"></div></div>`
      + `<div class="pv-zoom" role="dialog" aria-modal="true" aria-label="Enlarged screenshot" hidden>`
      + `<button type="button" class="pz-close" aria-label="Close the enlarged screenshot">${CLOSE}</button>`
      + `<button type="button" class="pz-nav pz-prev" aria-label="Previous screenshot">${CHEV_L}</button>`
      + `<figure class="pz-fig"><img class="pz-img" alt="" draggable="false"><figcaption class="pz-count"></figcaption></figure>`
      + `<button type="button" class="pz-nav pz-next" aria-label="Next screenshot">${CHEV_R}</button></div>`;
    document.body.appendChild(pv);
    const back = pv.querySelector('.rv-back'), vtitle = pv.querySelector('.rv-title'), stage = pv.querySelector('.rv-stage'), body = pv.querySelector('.pv-body');
    const zoom = pv.querySelector('.pv-zoom'), zimg = zoom.querySelector('.pz-img'), zcount = zoom.querySelector('.pz-count');
    let cur = null, from = null, pushed = false, strip = null, zIndex = 0, zPushed = false, selfBack = 0;
    const goBack = () => { selfBack++; try { history.back(); } catch (err) { selfBack--; } };   // we close things ourselves; the popstate this causes must not close anything else

    const fill = p => {
      const c = p.contributions || {}, n = p.shots.length, eng = p.engine;
      const real = p.shots.map((f, i) => `<button type="button" class="pv-shot" data-i="${i}" aria-label="Enlarge screenshot ${i + 1} of ${n}"><img src="${url(p, f)}" alt="" decoding="async" draggable="false"></button>`).join('');
      const copy = p.shots.map((f, i) => `<span class="pv-shot" data-i="${i}" aria-hidden="true"><img src="${url(p, f)}" alt="" decoding="async" draggable="false"></span>`).join('');   // more sets, so the loop has no seam
      body.innerHTML = `<img class="pv-hero" src="${url(p, p.logo)}" alt="${h(p.title)}">`
        + (p.link ? `<div class="pv-visit"><a class="pill" href="${h(p.link.url)}" target="_blank" rel="noopener">${EXT}<span>${h(p.link.label)}</span></a></div>` : '')
        + (n ? `<div class="pv-strip" role="group" aria-roledescription="carousel" aria-label="Screenshots of ${h(p.title)}"><div class="pv-view"><div class="pv-track"><div class="pv-set">${real}</div><div class="pv-set" aria-hidden="true">${copy}</div></div></div>`
             + `<button type="button" class="pv-nav pv-prev" aria-label="Previous screenshot">${CHEV_L}</button><button type="button" class="pv-nav pv-next" aria-label="Next screenshot">${CHEV_R}</button>`
             + `<button type="button" class="pv-pause" aria-pressed="false" aria-label="Pause the screenshots">${PAUSE}</button></div>` : '')
        + `<div class="pv-cols">`
        + `<section class="txt pv-box pv-contrib"><h2 data-tag="ROLE">Contributions</h2>${c.role ? `<p class="pv-role">${h(c.role)}</p>` : ''}${(c.items || []).length ? `<ul>${c.items.map(t => `<li>${h(t)}</li>`).join('')}</ul>` : ''}</section>`
        + `<section class="txt pv-box pv-about"><h2 data-tag="BRIEFING">About</h2>${(p.about || []).map(t => `<p>${h(t)}</p>`).join('')}</section>`
        + (eng ? `<section class="txt pv-box pv-engine"><h2 data-tag="TOOLS">Engine</h2><div class="pv-eng">${eng.icon ? `<img src="${h(eng.icon)}" alt="" width="56" height="56">` : ''}<b>${h(eng.name)}</b></div></section>` : '')
        + `</div>`;
      vtitle.textContent = p.title;
      Type.tune(pv);
    };

    /* The screenshot carousel. It drifts slowly by itself, but you can drag it (mouse or finger), swipe a trackpad sideways, use the arrow
       buttons or the arrow keys, and it loops forever in both directions. It stops drifting while the pointer is over it, while you are
       using it, while a screenshot is enlarged, and with the pause button. Clicking a screenshot enlarges it. */
    const makeStrip = () => {
      const el = body.querySelector('.pv-strip'); if (!el) return null;
      const view = el.querySelector('.pv-view'), track = el.querySelector('.pv-track'), set = track.querySelector('.pv-set'), shots = [...set.querySelectorAll('.pv-shot')];
      const pauseBtn = el.querySelector('.pv-pause');
      let pos = 0, vel = 0, W = 1, paused = false, hover = false, kb = false, zooming = false, idleUntil = 0, drag = null, moved = false, tween = null, raf = 0, last = performance.now();
      const wrap = x => ((x % W) + W) % W, idle = () => { idleUntil = performance.now() + 2500; };   // after you let go, it waits a moment before drifting again
      const measure = () => {
        W = Math.max(1, set.offsetWidth);
        const need = Math.ceil(view.clientWidth / W) + 1;
        while (track.children.length < need) track.appendChild(track.children[1].cloneNode(true));   // never a gap, even with few screenshots on a wide screen
      };
      const pitch = () => shots.length > 1 ? shots[1].offsetLeft - shots[0].offsetLeft : W;
      const go = (delta) => { tween = { from: pos, to: pos + delta, t0: performance.now(), ms: 380 }; vel = 0; idle(); };
      const centerOn = i => {
        const s = shots[i]; if (!s) return;
        let d = wrap(s.offsetLeft + s.offsetWidth / 2 - view.clientWidth / 2) - wrap(pos);
        if (d > W / 2) d -= W; if (d < -W / 2) d += W;
        go(d);
      };
      const frame = now => {
        const dt = Math.min(0.05, (now - last) / 1000); last = now;
        if (tween) { const t = Math.min(1, (now - tween.t0) / tween.ms); pos = tween.from + (tween.to - tween.from) * (1 - Math.pow(1 - t, 3)); if (t >= 1) tween = null; }
        else if (!drag) {
          if (Math.abs(vel) > 10) { pos += vel * dt; vel *= Math.exp(-dt * 3.2); } else vel = 0;   // coasting after a flick
          if (!vel && !paused && !hover && !kb && !reduce && !zooming && now > idleUntil) pos += STRIP_SPEED * dt;
        }
        pos = wrap(pos);
        track.style.transform = `translate3d(${(-pos).toFixed(2)}px,0,0)`;
        raf = requestAnimationFrame(frame);
      };
      measure(); raf = requestAnimationFrame(frame);

      view.addEventListener('pointerdown', e => {
        if (e.button) return;
        tween = null; vel = 0; moved = false;
        drag = { id: e.pointerId, x: e.clientX, pos0: pos, hist: [[e.timeStamp, e.clientX]] };
      });
      view.addEventListener('pointermove', e => {
        if (!drag || e.pointerId !== drag.id) return;
        const dx = e.clientX - drag.x;
        if (!moved && Math.abs(dx) > 6) { moved = true; el.classList.add('dragging'); try { view.setPointerCapture(e.pointerId); } catch (err) {} }
        if (moved) { pos = wrap(drag.pos0 - dx); drag.hist.push([e.timeStamp, e.clientX]); if (drag.hist.length > 6) drag.hist.shift(); }
      });
      const release = e => {
        if (!drag || e.pointerId !== drag.id) return;
        const d = drag; drag = null; el.classList.remove('dragging');
        if (moved) {   // let go with some speed: it coasts on
          const a = d.hist[0], z = d.hist[d.hist.length - 1], dt = (z[0] - a[0]) / 1000;
          vel = dt > 0.01 && e.timeStamp - z[0] < 80 ? Math.max(-3000, Math.min(3000, -(z[1] - a[1]) / dt)) : 0;
          idle();
        }
      };
      view.addEventListener('pointerup', release); view.addEventListener('pointercancel', release);
      view.addEventListener('wheel', e => {   // a sideways trackpad swipe (or shift + wheel); the normal up/down wheel still scrolls the page
        const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
        if (!d) return; e.preventDefault(); tween = null; vel = 0; pos = wrap(pos + d); idle();
      }, { passive: false });
      el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hover = true; });
      el.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') hover = false; });
      el.addEventListener('focusin', e => { const s = e.target.closest('.pv-shot'); kb = e.target.matches(':focus-visible'); if (s && kb) centerOn(+s.dataset.i); });
      el.addEventListener('focusout', () => { kb = false; });
      track.addEventListener('keydown', e => {   // arrow keys step from screenshot to screenshot
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        const i = shots.indexOf(document.activeElement); if (i < 0) return;
        e.preventDefault(); const j = (i + (e.key === 'ArrowRight' ? 1 : -1) + shots.length) % shots.length; shots[j].focus({ preventScroll: true }); centerOn(j);
      });
      track.addEventListener('click', e => {
        if (moved) { moved = false; return; }   // that was the end of a drag, not a click
        const s = e.target.closest('.pv-shot'); if (s) openZoom(+s.dataset.i);
      });
      el.querySelector('.pv-prev').addEventListener('click', () => go(-pitch()));
      el.querySelector('.pv-next').addEventListener('click', () => go(pitch()));
      pauseBtn.addEventListener('click', () => {
        paused = !paused; el.classList.toggle('paused', paused); pauseBtn.setAttribute('aria-pressed', paused); pauseBtn.innerHTML = paused ? PLAY : PAUSE;
        pauseBtn.setAttribute('aria-label', paused ? 'Play the screenshots' : 'Pause the screenshots');
      });
      return { measure, centerOn, setZoom(v) { zooming = v; }, destroy() { cancelAnimationFrame(raf); } };
    };

    /* enlarged screenshots */
    const hdOf = (p, i) => (p.shotsHD && p.shotsHD[i]) ? url(p, p.shotsHD[i]) : null;
    const warmHD = (p, i) => { const u = hdOf(p, i); if (u) { const im = new Image(); im.src = u; } };   // the neighbours load ahead, so flicking through is instant
    const showZoom = i => {
      const n = cur.shots.length; zIndex = (i + n) % n; const mine = zIndex, hd = hdOf(cur, mine);
      zimg.src = url(cur, cur.shots[mine]);   // the small picture appears at once...
      zimg.alt = `${cur.title} screenshot ${mine + 1} of ${n}`; zcount.textContent = `${mine + 1} / ${n}`;
      zoom.classList.toggle('single', n < 2);
      if (hd) {                                // ...and is swapped for the sharper one the moment that has loaded and decoded
        const big = new Image(); big.src = hd;
        (big.decode ? big.decode() : new Promise((ok, no) => { big.onload = ok; big.onerror = no; })).then(() => { if (zIndex === mine && !zoom.hidden && big.naturalWidth) zimg.src = hd; }).catch(() => {});
      }
      if (n > 1) { warmHD(cur, (mine + 1) % n); warmHD(cur, (mine - 1 + n) % n); }
    };
    function openZoom(i) {
      if (!zoom.hidden || !cur) return;
      showZoom(i); zoom.hidden = false; if (strip) strip.setZoom(true);
      try { history.pushState({ pvz: 1 }, ''); zPushed = true; } catch (err) { zPushed = false; }   // the phone's back gesture closes the enlarged view first
      zoom.querySelector('.pz-close').focus({ preventScroll: true }); Sfx.play('select');
    }
    const closeZoom = viaPop => {
      if (zoom.hidden) return;
      zoom.hidden = true; zimg.removeAttribute('src');
      if (strip) { strip.setZoom(false); strip.centerOn(zIndex); }   // the strip glides to the screenshot you were looking at
      if (zPushed && !viaPop) goBack();
      zPushed = false; Sfx.play('hover');
      const s = body.querySelector(`.pv-set .pv-shot[data-i="${zIndex}"]`); if (s) s.focus({ preventScroll: true });
    };
    zoom.querySelector('.pz-close').addEventListener('click', () => closeZoom());
    zoom.querySelector('.pz-prev').addEventListener('click', () => showZoom(zIndex - 1));
    zoom.querySelector('.pz-next').addEventListener('click', () => showZoom(zIndex + 1));
    let zs = null, zmoved = false;
    zoom.addEventListener('pointerdown', e => { zmoved = false; zs = e.target.closest('button') ? null : { x: e.clientX, y: e.clientY }; });
    zoom.addEventListener('pointermove', e => { if (zs && Math.hypot(e.clientX - zs.x, e.clientY - zs.y) > 10) zmoved = true; });
    zoom.addEventListener('pointerup', e => {   // swipe sideways to change screenshot
      if (!zs) return; const dx = e.clientX - zs.x, dy = e.clientY - zs.y; zs = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) showZoom(zIndex + (dx < 0 ? 1 : -1));
    });
    zoom.addEventListener('pointercancel', () => { zs = null; });
    zoom.addEventListener('click', e => { if (zmoved) { zmoved = false; return; } if (e.target === zoom || e.target.classList.contains('pz-fig')) closeZoom(); });   // the dark space around it also closes

    /* opening and closing the viewer */
    function openViewer(p, trigger) {
      if (!pv.hidden) return;
      stopLive(); cur = p; from = trigger; fill(p);
      pv.hidden = false; root.classList.add('rv-open'); stage.scrollTop = 0; strip = makeStrip();
      try { history.pushState({ pv: p.id }, ''); pushed = true; } catch (err) { pushed = false; }   // so a phone's back gesture closes the viewer instead of leaving the page
      back.focus({ preventScroll: true });
    }
    const closeViewer = viaPop => {
      if (pv.hidden) return;
      if (!zoom.hidden) { zoom.hidden = true; zPushed = false; }
      if (strip) { strip.destroy(); strip = null; }
      pv.hidden = true; root.classList.remove('rv-open'); body.innerHTML = '';   // emptied so nothing keeps animating or loading behind the page
      if (pushed && !viaPop) goBack();
      pushed = false; cur = null;
      if (from) from.focus({ preventScroll: true });
    };
    back.addEventListener('click', () => { Sfx.play('hover'); closeViewer(); });
    addEventListener('popstate', () => {
      if (selfBack) { selfBack--; return; }                  // that was us, closing something already
      if (!zoom.hidden) closeZoom(true); else if (!pv.hidden) closeViewer(true);   // the browser's back: close the top layer only
    });
    addEventListener('resize', () => { if (!pv.hidden && strip) strip.measure(); });
    document.addEventListener('keydown', e => {
      if (pv.hidden) return;
      const trap = scope => {   // keep the keyboard inside this layer
        const f = [...scope.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([tabindex="-1"])')].filter(x => x.offsetParent !== null);
        if (!f.length) return;
        const i = f.indexOf(document.activeElement), next = e.shiftKey ? (i <= 0 ? f.length - 1 : i - 1) : (i === f.length - 1 ? 0 : i + 1);
        e.preventDefault(); f[next].focus();
      };
      if (!zoom.hidden) {
        if (e.key === 'Escape') { e.preventDefault(); closeZoom(); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); showZoom(zIndex - 1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); showZoom(zIndex + 1); }
        else if (e.key === 'Tab') trap(zoom);
        return;
      }
      if (e.key === 'Escape') { e.preventDefault(); closeViewer(); }
      else if (e.key === 'Tab') trap(pv);
    });
  }

  Type.ready.then(good => { if (good) Type.tune(document.body); });   // once the pixel font is in, tidy every heading, label and the quote

  /* Phone tiles are only about 70 to 95 px wide, so a flavour line like "Story Mode" used to wrap onto two lines. This shrinks each one just
     enough to stay on ONE line, down to a readable floor (MIN_SIZE, in rem). A line that still can't fit at the floor, such as
     "Character Select", wraps onto two lines as before instead of spilling out of its tile. Works whatever font actually renders. */
  if (isHome) {
    const MIN_SIZE = 0.58;
    const fitFlavour = () => {
      $$('.tile:not(.big) .tt small').forEach(sm => {
        sm.style.fontSize = ''; sm.style.whiteSpace = '';                        // start from the stylesheet's size, wrapping allowed
        if (!matchMedia('(max-width:560px)').matches) return;                   // phones only
        const tt = sm.parentElement, cs = getComputedStyle(tt);
        const room = tt.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        const probe = sm.cloneNode(true); probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap';
        tt.appendChild(probe); const need = probe.getBoundingClientRect().width; probe.remove();   // width the text needs on one line
        if (need <= room) { sm.style.whiteSpace = 'nowrap'; return; }           // already fits on one line
        const px = parseFloat(getComputedStyle(sm).fontSize) * room / need;     // the size at which it just fits
        const floor = MIN_SIZE * parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (px >= floor) { sm.style.fontSize = px.toFixed(2) + 'px'; sm.style.whiteSpace = 'nowrap'; }
      });
    };
    const refit = () => requestAnimationFrame(fitFlavour);
    addEventListener('resize', refit); addEventListener('orientationchange', refit);
    if (document.fonts) document.fonts.ready.then(refit);
    Type.ready.then(refit);   // after the letters are tidied, which changes their widths a little
  }

  /* ---------- Arrival: the iris opens ---------- */
  if (arrival) fontsReady().then(() => requestAnimationFrame(() => {
    root.classList.add('reveal');
    setTimeout(() => root.removeAttribute('data-enter'), 1100);
  }));

  /* ---------- Touch ripple + iris transition on internal links ---------- */
  /* ---------- Sounds for the menu "tabs" ---------- */
  const TABS = '.tile, .dock a';                     // these make the hover sound
  const TOGGLES = '.seg button';                      // the IT / Game Dev toggle: the hover sound plays when you pick one, not when you hover
  const SELECTS = '.tile, .dock a, .user, .cartcap, .vcard'; // these make the select sound when clicked (the name top left, except on the home menu; the caption under the cartridge; NOT the IT / Game Dev toggle)
  document.addEventListener('pointerover', e => {
    if (e.pointerType === 'touch') return;
    const t = e.target.closest(TABS);
    if (t && !t.contains(e.relatedTarget)) Sfx.play('hover');
  });
  document.addEventListener('focusin', e => { const t = e.target.closest && e.target.closest(TABS); if (t && t.matches(':focus-visible')) Sfx.play('hover'); });
  addEventListener('blur', () => Sfx.stopAll());   // never leave a loop running if the window loses focus
  document.addEventListener('visibilitychange', () => { if (document.hidden) Sfx.silence(); else Sfx.hush(); });   // switching browser tabs: cut every sound, and stay quiet for a moment on return
  addEventListener('pagehide', () => Sfx.silence());   // leaving the page: the browser may keep it frozen for the Back button, so nothing may still be sounding

  // "Which page is this?" The home page can be reached as "/", "/index.html" or "/index", so compare pages by meaning, not by the raw address.
  // (Opening the site at "/" and clicking the name used to look like a different page, so it ran the transition and reloaded the home page.)
  const pageKey = p => p.replace(/\/index(\.html?)?$/i, '/').replace(/\.html?$/i, '').replace(/\/+$/, '') || '/';
  const samePage = a => {   // does this link point at the page we are already on? (a link with a #section is not counted)
    if (!a.href) return false;   // not a link at all (a project card is a button)
    try { const u = new URL(a.href, location.href); return u.origin === location.origin && !u.hash && pageKey(u.pathname) === pageKey(location.pathname); } catch (err) { return false; }
  };
  document.addEventListener('click', e => {
    const sel = e.target.closest(SELECTS);
    if (sel && !samePage(sel)) Sfx.play('select');   // no select sound for a tab you are already on (the name on the home menu, the current tab in the bottom bar...)
    if (e.target.closest(TOGGLES)) Sfx.play('hover');
    if (!reduce && !e.target.closest('.doodle')) {
      const d = document.createElement('i'); d.className = 'tap';
      d.style.left = e.clientX + 'px'; d.style.top = e.clientY + 'px';
      document.body.appendChild(d); setTimeout(() => d.remove(), 600);
    }
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target) return;
    const href = a.getAttribute('href');
    if (!href || /^(#|mailto:|tel:|https?:|\/\/)/i.test(href)) return;
    const u = new URL(a.href, location.href);
    if (a.hasAttribute('download') || !/(\.html?|\/)$/.test(u.pathname)) return;   // files like resume.pdf download normally
    if (samePage(a)) { e.preventDefault(); return; }   // already here: the link does nothing
    if (reduce) return;   // reduced motion: no transition, just follow the link
    e.preventDefault();
    if (leaving) return;
    leaving = true;
    const r = a.getBoundingClientRect();
    const x = e.detail ? e.clientX : r.left + r.width / 2, y = e.detail ? e.clientY : r.top + r.height / 2;
    root.style.setProperty('--x', x + 'px'); root.style.setProperty('--y', y + 'px');
    a.classList.add('pop'); root.classList.add('leaving');
    try { sessionStorage.setItem('pt', JSON.stringify({ x, y, t: Date.now() })); } catch (err) {}
    setTimeout(() => { location.href = u.href; }, 520);
  });
  addEventListener('pageshow', e => {
    if (!e.persisted) return;   // true = this page was brought back with the Back / Forward button instead of being loaded again
    leaving = false; root.classList.remove('leaving'); $$('.pop').forEach(n => n.classList.remove('pop'));
    Sfx.silence(); Sfx.hush(); Sfx.resync(); Sfx.unlock();   // nothing left over from before, quiet while the page settles, and pick up a mute change made on another page
    if (typeof paintSnd === 'function') paintSnd();
  });
});
