/* ==========================================================
   FARIHA — MY SPECIAL WORLD  |  script.js  (শুধু দেখার সংস্করণ)
   ----------------------------------------------------------
   এই সংস্করণে কোনো এডিট অপশন নেই এবং কোনো ক্লিক সাউন্ড নেই।
   কনটেন্ট বদলাতে নিচের দুটি অংশ বদলান:
   1) MEDIA_CONFIG  → assets ফোল্ডারের ছবি/ভিডিও/গান এখানে লিখুন
   2) DEFAULTS      → চিঠি, কবিতা ও গল্পের লেখা
   ========================================================== */
(() => {
'use strict';

/* ----------------------------------------------------------
   1) MEDIA CONFIG — assets ফোল্ডারের ফাইলগুলো এখানে যুক্ত করুন
   ----------------------------------------------------------
   উদাহরণ (আগে "//" তুলে দিন এবং ফাইলটি assets-এ রাখুন):

   photos: [
     { src: 'assets/images/fariha-1.jpg', caption: 'প্রথম ছবি' },
     { src: 'assets/images/fariha-2.png', caption: 'দ্বিতীয় ছবি' },
   ],
   videos: [
     { src: 'assets/videos/video-1.mp4', caption: 'প্রথম ভিডিও', poster: '' },
   ],
   music: [
     { src: 'assets/music/song-1.mp3', title: 'গানের নাম', artist: 'শিল্পীর নাম', cover: 'assets/images/cover-1.jpg' },
   ]
---------------------------------------------------------- */
const MEDIA_CONFIG = {
  photos: [
    // { src: 'assets/images/fariha-1.jpg', caption: 'ক্যাপশন লিখুন' },
  ],
  videos: [
    // { src: 'assets/videos/video-1.mp4', caption: 'ক্যাপশন লিখুন' },
  ],
  music: [
    // { src: 'assets/music/song-1.mp3', title: 'গানের নাম', artist: 'শিল্পীর নাম' },
  ],
};

/* ----------------------------------------------------------
   2) DEFAULT CONTENT
---------------------------------------------------------- */
const DEFAULTS = {
  letter: {
    title: 'ফারিহার জন্য একটি চিঠি',
    text:
`প্রিয় ফারিহা,

জানি না কীভাবে শুরু করলে মনের কথাগুলো সবচেয়ে সুন্দরভাবে প্রকাশ করা যাবে। কিছু অনুভূতি আছে, যেগুলো মুখে বলা যতটা কঠিন, লিখে প্রকাশ করাও ঠিক ততটাই কঠিন।

তোমাকে নিয়ে এই ছোট্ট ওয়েবসাইটটি তৈরি করার পেছনে একটি সুন্দর ইচ্ছা রয়েছে। আমি চেয়েছি কিছু কথা, কিছু লেখা, কিছু ছবি এবং কিছু গান এক জায়গায় সাজিয়ে রাখতে।

এই ওয়েবসাইটের প্রতিটি অংশে হয়তো কিছু অনুভূতি খুঁজে পাবে। কখনো একটি কবিতার লাইনে, কখনো একটি চিঠির শব্দে, আবার কখনো কোনো ছবির নীরবতায়।

জীবনে অনেক মানুষের সঙ্গে পরিচয় হয়। কিন্তু প্রত্যেক মানুষের জন্য আলাদা করে কিছু লেখার ইচ্ছা তৈরি হয় না। তোমাকে নিয়ে এই আয়োজনটি সেই বিশেষ ইচ্ছারই একটি প্রকাশ।

আমি চাই তোমার জীবনের প্রতিটি দিন সুন্দর হোক। তোমার স্বপ্নগুলো পূরণ হোক, তোমার মুখে হাসি থাকুক, আর তুমি নিজের মতো করে জীবনের প্রতিটি সুন্দর মুহূর্ত উপভোগ করো।

এই চিঠির শেষে শুধু এটুকুই বলতে চাই—

তোমাকে নিয়ে তৈরি এই ছোট্ট পৃথিবীটি আমার কাছে কিছু সুন্দর অনুভূতি ও স্মৃতি যত্ন করে রাখার একটি জায়গা।

ভালো থেকো, নিজের যত্ন নিয়ো।

ইতি,
তোমার পরিচিত একজন।`
  },
  poem: {
    title: 'তুমি একটি সুন্দর অনুভূতি',
    text:
`তোমার নামের মাঝে যেন,
একটুকরো মায়া লুকিয়ে রয়,
তোমার কথা মনে পড়লে,
সাধারণ সময়ও সুন্দর হয়।

তুমি যেন নীল আকাশের,
শান্ত বিকেলের কোমল আলো,
কিছু না বলা অনুভূতির মাঝে,
তোমার নামটি লাগে ভালো।

হাজার কথার ভিড়ের মাঝে,
কিছু কথা থেকে যায় বাকি,
মনের পাতায় নীরবে লেখা,
কিছু স্মৃতি থাকে আঁকি।

সময় যাবে, দিনও বদলাবে,
বদলাবে চারপাশের ছবি,
তবুও কিছু অনুভূতি নিয়ে,
লেখা থাকবে এই কবিতাটি।

ফারিহা, তুমি একটি নাম,
একটি সুন্দর অনুভব,
এই ছোট্ট স্মৃতির জগতে,
তোমাকে নিয়েই কিছু শব্দ।`
  },
  story: {
    intro:
`প্রতিটি গল্পের শুরুটা হয়তো খুব সাধারণ হয়। কিন্তু সময়ের সঙ্গে সঙ্গে সেই সাধারণ মুহূর্তগুলোই কখনো কখনো বিশেষ হয়ে ওঠে।

আমাদের গল্পটাও এমন কিছু অনুভূতি, কথা, হাসি, অভিমান আর ছোট ছোট মুহূর্তের সমন্বয়ে সাজানো একটি অধ্যায়।

কিছু কথা হয়তো খুব সহজেই বলা যায়, আবার কিছু কথা মনের ভেতরেই থেকে যায়। কখনো একটি ছোট্ট কথোপকথন ভালো লাগার কারণ হয়ে দাঁড়ায়, কখনো একটি সাধারণ মুহূর্তও অনেক দিন মনে থেকে যায়।

সময় সবকিছু বদলে দিতে পারে। কিন্তু কিছু স্মৃতি নিজের মতো করেই মনের মধ্যে জায়গা করে নেয়।

ফারিহাকে ঘিরে এই গল্পের প্রতিটি অধ্যায় তাই আমার কাছে আলাদা।

এই গল্পের সবকিছু এখনো লেখা শেষ হয়নি। সামনে হয়তো আরও অনেক নতুন অধ্যায় যুক্ত হবে।

কারণ সুন্দর গল্পের শেষ নয়, কখনো কখনো সুন্দর গল্পের সবচেয়ে ভালো অংশটি সামনে অপেক্ষা করে থাকে।`,
    // নমুনা স্মৃতি — এগুলো শুধু উদাহরণ। নিজের স্মৃতি দিয়ে বদলে নিন।
    // photo: 'assets/images/memory-1.jpg' লিখলে স্মৃতির সঙ্গে ছবিও দেখাবে।
    items: [
      { id: 's1', date: 'তারিখ লিখুন', title: 'প্রথম অধ্যায়', desc: 'এটি একটি নমুনা লেখা। এখানে নিজের স্মৃতির কথা লিখুন।' },
      { id: 's2', date: 'তারিখ লিখুন', title: 'দ্বিতীয় অধ্যায়', desc: 'এটিও নমুনা। script.js-এর DEFAULTS অংশে এগুলো বদলে নিন।' },
      { id: 's3', date: 'তারিখ লিখুন', title: 'আরও অধ্যায় আসছে…', desc: 'গল্পের সবচেয়ে সুন্দর অংশটি হয়তো সামনেই অপেক্ষা করছে।' },
    ]
  }
};

/* ==========================================================
   Helpers
   ========================================================== */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
const fmtTime = s => { if (!isFinite(s)) return '0:00'; s = Math.floor(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const setRange = r => r.style.setProperty('--p', (r.value - r.min) / (r.max - r.min) * 100 + '%');

let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ==========================================================
   Stored content (শুধু পড়া হয়, কিছু লেখা বা বদলানো হয় না)
   এই ব্রাউজারে আগে যে ছবি/ভিডিও/গান/লেখা সংরক্ষিত ছিল, তা আগের মতোই দেখাবে।
   ========================================================== */
const KEY = 'fariha_content_v1';
const store = (() => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } })();
store.story  ??= { intro: null, items: JSON.parse(JSON.stringify(DEFAULTS.story.items)) };
store.added  ??= { photos: [], videos: [], music: [] };
store.hidden ??= [];
store.meta   ??= {};

let dbPromise;
function db() {
  if (!dbPromise) dbPromise = new Promise((res, rej) => {
    if (!window.indexedDB) return rej(new Error('IndexedDB unsupported'));
    const r = indexedDB.open('fariha_media', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('blobs');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return dbPromise;
}
async function getBlob(id) {
  try {
    const d = await db();
    return await new Promise((res, rej) => {
      const tx = d.transaction('blobs', 'readonly'); const rq = tx.objectStore('blobs').get(id);
      tx.oncomplete = () => res(rq.result); tx.onerror = () => rej(tx.error);
    });
  } catch { return null; }
}
const urlCache = new Map();
async function urlFor(item) {
  if (item.blobId) {
    if (urlCache.has(item.blobId)) return urlCache.get(item.blobId);
    const b = await getBlob(item.blobId); if (!b) return '';
    const u = URL.createObjectURL(b); urlCache.set(item.blobId, u); return u;
  }
  return item.src || '';
}
const blobUrl = id => urlFor({ blobId: id });

/* media lists = config + আগে সংরক্ষিত − লুকানো */
function getList(kind) {
  const cfg = (MEDIA_CONFIG[kind] || []).map((m, i) => ({ ...m, id: `cfg-${kind}-${i}`, cfg: true }));
  return [...cfg, ...store.added[kind]]
    .filter(m => !store.hidden.includes(m.id))
    .map(m => ({ ...m, ...(store.meta[m.id] || {}) }));
}

/* ==========================================================
   Ripple on every glass button (শব্দ ছাড়া, শুধু দৃশ্য)
   ========================================================== */
document.addEventListener('pointerdown', e => {
  const b = e.target.closest('.glass-btn, .vplay'); if (!b) return;
  const r = b.getBoundingClientRect(), size = Math.max(r.width, r.height) * 2.2;
  const s = el('span', 'ripple');
  s.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
  b.appendChild(s); setTimeout(() => s.remove(), 750);
});

/* ==========================================================
   Router — প্রতিটি বাটন/লিংক ক্লিক করলে সংশ্লিষ্ট সেকশন দেখায়
   ========================================================== */
const pages = $$('.page');
const navLinks = $$('#nav a');
function route() {
  let id = (location.hash || '#home').slice(1);
  if (!pages.some(p => p.id === id)) id = 'home';
  pages.forEach(p => p.classList.toggle('active', p.id === id));
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'auto' });
  if (id === 'poem') replayPoem();
  if (id !== 'videos') pauseAllVideos();
  document.title = (id === 'home' ? '' : $(`#${id} h2`).textContent + ' · ') + 'FARIHA — My Special World';
  observeReveals();
}
window.addEventListener('hashchange', route);

const menuBtn = $('#menuToggle'), nav = $('#nav');
function closeMenu() { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(open));
});

/* Scroll reveal */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
function observeReveals() { $$('.page.active .reveal:not(.in)').forEach(n => io.observe(n)); }

/* ==========================================================
   Letter
   ========================================================== */
const letterData = () => store.letter || DEFAULTS.letter;
function renderLetter() {
  const d = letterData();
  $('#letterTitle').textContent = d.title;
  const body = $('#letterBody'); body.innerHTML = '';
  d.text.trim().split(/\n\s*\n/).forEach((para, i, arr) => {
    const p = el('p');
    para.split('\n').forEach((ln, j) => { if (j) p.appendChild(document.createElement('br')); p.appendChild(document.createTextNode(ln)); });
    if (i === arr.length - 1 && para.includes('\n')) p.className = 'sign';
    body.appendChild(p);
  });
}
$('#openLetter').addEventListener('click', () => {
  $('#envelope').classList.add('open');
  $('#openLetter').disabled = true;
  setTimeout(() => {
    $('#envelopeStage').classList.add('hidden');
    $('#letterCard').classList.remove('hidden');
    $('#openLetter').disabled = false;
    $('#letterCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 1300);
});
$('#closeLetter').addEventListener('click', () => {
  $('#letterCard').classList.add('hidden');
  $('#envelope').classList.remove('open');
  $('#envelopeStage').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==========================================================
   Poem
   ========================================================== */
const poemData = () => store.poem || DEFAULTS.poem;
function renderPoem() {
  const d = poemData();
  $('#poemTitle').textContent = d.title;
  const body = $('#poemBody'); body.innerHTML = '';
  d.text.trim().split(/\n\s*\n/).forEach(st => {
    const s = el('div', 'stanza');
    st.split('\n').forEach(ln => { if (ln.trim()) s.appendChild(el('span', 'poem-line', ln.trim())); });
    body.appendChild(s);
  });
  if ($('#poem').classList.contains('active')) replayPoem();
}
function replayPoem() {
  const lines = $$('.poem-line'), stz = $$('.stanza');
  lines.forEach(l => { l.classList.remove('in'); l.style.transitionDelay = ''; });
  stz.forEach(s => s.classList.remove('in'));
  void document.body.offsetWidth;
  let n = 0;
  stz.forEach(s => { $$('.poem-line', s).forEach(l => { l.style.transitionDelay = (n++ * 0.28) + 's'; }); });
  requestAnimationFrame(() => requestAnimationFrame(() => { lines.forEach(l => l.classList.add('in')); stz.forEach(s => s.classList.add('in')); }));
}
$('#replayPoem').addEventListener('click', replayPoem);

/* ==========================================================
   Story
   ========================================================== */
function renderStory() {
  const box = $('#storyIntro'); box.innerHTML = '';
  (store.story.intro ?? DEFAULTS.story.intro).trim().split(/\n\s*\n/).forEach(t => box.appendChild(el('p', null, t)));

  const tl = $('#timeline'); tl.innerHTML = '';
  if (!store.story.items.length) {
    const e = el('div', 'empty glass'); e.append(el('b', null, 'এখনো কোনো স্মৃতি যোগ করা হয়নি'));
    tl.appendChild(e); return;
  }
  store.story.items.forEach(m => {
    const it = el('div', 't-item reveal');
    const card = el('article', 'memory glass');
    card.append(el('div', 'date', m.date || ''), el('h3', null, m.title || ''), el('p', null, m.desc || ''));
    if (m.photoId || m.photo) {
      const img = el('img'); img.alt = m.title || ''; img.loading = 'lazy';
      if (m.photoId) blobUrl(m.photoId).then(u => { img.src = u; }); else img.src = m.photo;
      img.onerror = () => img.remove();
      card.appendChild(img);
    }
    it.appendChild(card); tl.appendChild(it);
  });
  observeReveals();
}

/* ==========================================================
   Photos + Lightbox
   ========================================================== */
let lbList = [], lbIndex = 0;
function renderPhotos() {
  const grid = $('#photoGrid'); grid.innerHTML = '';
  const list = getList('photos');
  if (!list.length) {
    const e = el('div', 'empty glass');
    e.append(el('b', null, 'ছবি শীঘ্রই যোগ করা হবে'));
    grid.appendChild(e); return;
  }
  list.forEach((p, i) => {
    const fig = el('figure', 'pcard glass reveal');
    const wrap = el('div', 'imgwrap'); const img = el('img'); img.alt = p.caption || ''; img.loading = 'lazy';
    urlFor(p).then(u => { img.src = u; });
    img.onerror = () => { wrap.style.display = 'grid'; wrap.style.placeItems = 'center'; wrap.textContent = 'ছবি পাওয়া যায়নি'; };
    wrap.appendChild(img); fig.append(wrap, el('figcaption', null, p.caption || ''));
    fig.addEventListener('click', () => openLightbox(i));
    grid.appendChild(fig);
  });
  observeReveals();
}

const lb = $('#lightbox');
async function showLb() {
  const p = lbList[lbIndex]; if (!p) return;
  $('#lbImg').src = await urlFor(p); $('#lbImg').alt = p.caption || '';
  $('#lbCaption').textContent = p.caption || '';
  $('#lbCount').textContent = `${lbIndex + 1} / ${lbList.length}`;
  const multi = lbList.length > 1; $('#lbPrev').style.visibility = $('#lbNext').style.visibility = multi ? 'visible' : 'hidden';
}
function openLightbox(i) { lbList = getList('photos'); lbIndex = i; lb.classList.remove('hidden'); document.body.style.overflow = 'hidden'; showLb(); }
function closeLb() { lb.classList.add('hidden'); document.body.style.overflow = ''; $('#lbImg').removeAttribute('src'); }
const lbStep = d => { lbIndex = (lbIndex + d + lbList.length) % lbList.length; showLb(); };
$('#lbClose').addEventListener('click', closeLb);
$('#lbPrev').addEventListener('click', () => lbStep(-1));
$('#lbNext').addEventListener('click', () => lbStep(1));
lb.addEventListener('pointerdown', e => { if (e.target === lb) closeLb(); });
let tx = 0;
lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) lbStep(dx > 0 ? -1 : 1); });
document.addEventListener('keydown', e => {
  if (lb.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') lbStep(-1);
  if (e.key === 'ArrowRight') lbStep(1);
});

/* ==========================================================
   Videos
   ========================================================== */
const videoEls = [];
function pauseAllVideos(except) { videoEls.forEach(v => { if (v !== except && !v.paused) v.pause(); }); }
function renderVideos() {
  const grid = $('#videoGrid'); grid.innerHTML = ''; videoEls.length = 0;
  const list = getList('videos');
  if (!list.length) {
    const e = el('div', 'empty glass');
    e.append(el('b', null, 'ভিডিও শীঘ্রই যোগ করা হবে'));
    grid.appendChild(e); return;
  }
  list.forEach(item => {
    const card = el('article', 'vcard glass reveal');
    const wrap = el('div', 'vwrap');
    const v = el('video'); v.preload = 'metadata'; v.playsInline = true; v.setAttribute('playsinline', ''); if (item.poster) v.poster = item.poster;
    urlFor(item).then(u => { v.src = u + (u.startsWith('blob:') ? '' : '#t=0.5'); });
    const big = el('button', 'vplay', '▶'); big.type = 'button'; big.setAttribute('aria-label', 'Play');
    wrap.append(v, big);

    const ctrl = el('div', 'vctrl');
    const pp = el('button', 'glass-btn', '▶'); pp.type = 'button'; pp.setAttribute('aria-label', 'Play / Pause');
    const seek = el('input'); seek.type = 'range'; seek.min = 0; seek.max = 1000; seek.value = 0; seek.setAttribute('aria-label', 'Seek'); setRange(seek);
    const time = el('span', 'vtime', '0:00 / 0:00');
    const vol = el('input'); vol.type = 'range'; vol.min = 0; vol.max = 1; vol.step = .01; vol.value = .8; vol.style.maxWidth = '80px'; vol.setAttribute('aria-label', 'Volume'); setRange(vol); v.volume = .8;
    const fs = el('button', 'glass-btn', '⛶'); fs.type = 'button'; fs.setAttribute('aria-label', 'Fullscreen');
    ctrl.append(pp, seek, time, vol, fs);

    const toggle = () => { if (v.paused) { pauseAllVideos(v); v.play().catch(() => toast('ভিডিওটি চালানো যায়নি')); } else v.pause(); };
    big.onclick = toggle; pp.onclick = toggle; v.onclick = toggle;
    v.onplay = () => { card.classList.add('playing'); pp.textContent = '❚❚'; pauseAllVideos(v); };
    v.onpause = () => { card.classList.remove('playing'); pp.textContent = '▶'; };
    v.onended = () => { card.classList.remove('playing'); pp.textContent = '▶'; };
    v.onloadedmetadata = () => { time.textContent = `0:00 / ${fmtTime(v.duration)}`; };
    v.ontimeupdate = () => { if (v.duration) { seek.value = v.currentTime / v.duration * 1000; setRange(seek); } time.textContent = `${fmtTime(v.currentTime)} / ${fmtTime(v.duration)}`; };
    v.onerror = () => { if (v.getAttribute('src')) { big.style.display = 'none'; wrap.append(Object.assign(el('div', null, 'ভিডিও পাওয়া যায়নি'), { style: 'position:absolute;inset:0;display:grid;place-items:center' })); } };
    seek.oninput = () => { if (v.duration) v.currentTime = seek.value / 1000 * v.duration; setRange(seek); };
    vol.oninput = () => { v.volume = vol.value; v.muted = false; setRange(vol); };
    fs.onclick = () => {
      const d = document;
      if (d.fullscreenElement || d.webkitFullscreenElement) { (d.exitFullscreen || d.webkitExitFullscreen).call(d); return; }
      const rf = wrap.requestFullscreen || wrap.webkitRequestFullscreen;
      if (rf) rf.call(wrap); else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
    };
    videoEls.push(v);

    card.append(wrap, ctrl, el('p', 'vcap', item.caption || ''));
    grid.appendChild(card);
  });
  observeReveals();
}

/* ==========================================================
   Music (গান নিজে থেকে কখনো চালু হয় না — Play চাপলে তবেই চলে)
   ========================================================== */
const audio = new Audio(); audio.preload = 'metadata';
let tracks = [], cur = -1, curId = null;
const player = $('#player');
(function buildBars() { const w = $('#waveBars'); for (let i = 0; i < 28; i++) { const s = el('span'); s.style.setProperty('--h', (12 + Math.abs(Math.sin(i * 1.3)) * 30) + 'px'); s.style.animationDuration = (.6 + (i % 7) * .09) + 's'; s.style.animationDelay = (i % 5) * -.15 + 's'; w.appendChild(s); } })();

function setPlayingUI(p) { player.classList.toggle('playing', p); $('#playBtn').textContent = p ? '❚❚' : '▶'; }
async function loadTrack(i, autoplay) {
  const t = tracks[i]; if (!t) return;
  cur = i; curId = t.id;
  $('#trackTitle').textContent = t.title || 'নামহীন গান';
  $('#trackArtist').textContent = t.artist || 'শিল্পী অজানা';
  const cover = $('#cover'); cover.innerHTML = '';
  const cu = t.coverBlobId ? await blobUrl(t.coverBlobId) : t.cover;
  if (cu) { const im = el('img'); im.alt = ''; im.src = cu; im.onerror = () => { cover.innerHTML = '<span class="cover-note">♪</span>'; }; cover.appendChild(im); }
  else cover.innerHTML = '<span class="cover-note">♪</span>';
  audio.src = await urlFor(t);
  $('#progress').value = 0; setRange($('#progress')); $('#curTime').textContent = '0:00'; $('#durTime').textContent = '0:00';
  $$('#playlist .pl-item').forEach((n, k) => n.classList.toggle('active', k === i));
  if (autoplay) audio.play().catch(() => toast('গানটি চালানো যায়নি'));
}
function renderMusic() {
  tracks = getList('music');
  const pl = $('#playlist'); pl.innerHTML = '';
  const has = tracks.length > 0;
  ['prevBtn', 'playBtn', 'nextBtn', 'progress', 'volume'].forEach(id => { $('#' + id).disabled = !has; });
  if (!has) {
    audio.pause(); audio.removeAttribute('src'); cur = -1; curId = null; setPlayingUI(false);
    $('#trackTitle').textContent = 'কোনো গান নেই'; $('#trackArtist').textContent = 'গান শীঘ্রই যোগ করা হবে';
    $('#cover').innerHTML = '<span class="cover-note">♪</span>';
    const li = el('li', 'empty'); li.textContent = 'প্লেলিস্ট এখনো খালি'; pl.appendChild(li); return;
  }
  tracks.forEach((t, i) => {
    const li = el('li', 'pl-item'); li.tabIndex = 0;
    const meta = el('div', 'meta'); meta.append(el('b', null, t.title || 'নামহীন গান'), el('small', null, t.artist || 'শিল্পী অজানা'));
    li.append(el('span', 'n', String(i + 1)), meta);
    li.onclick = () => loadTrack(i, true);
    li.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadTrack(i, true); } };
    pl.appendChild(li);
  });
  const keep = tracks.findIndex(t => t.id === curId);
  if (keep >= 0) { cur = keep; $$('#playlist .pl-item').forEach((n, k) => n.classList.toggle('active', k === keep)); }
  else { audio.pause(); setPlayingUI(false); loadTrack(0, false); } // স্বয়ংক্রিয়ভাবে চালু হবে না
}
$('#playBtn').addEventListener('click', () => {
  if (!tracks.length) return;
  if (cur < 0) return loadTrack(0, true);
  if (audio.paused) audio.play().catch(() => toast('গানটি চালানো যায়নি')); else audio.pause();
});
$('#nextBtn').addEventListener('click', () => { if (tracks.length) loadTrack((cur + 1) % tracks.length, true); });
$('#prevBtn').addEventListener('click', () => { if (!tracks.length) return; if (audio.currentTime > 3) audio.currentTime = 0; else loadTrack((cur - 1 + tracks.length) % tracks.length, true); });
audio.addEventListener('play', () => setPlayingUI(true));
audio.addEventListener('pause', () => setPlayingUI(false));
audio.addEventListener('ended', () => { if (tracks.length > 1) loadTrack((cur + 1) % tracks.length, true); else setPlayingUI(false); });
audio.addEventListener('loadedmetadata', () => { $('#durTime').textContent = fmtTime(audio.duration); });
audio.addEventListener('timeupdate', () => {
  if (audio.duration) { $('#progress').value = audio.currentTime / audio.duration * 1000; setRange($('#progress')); }
  $('#curTime').textContent = fmtTime(audio.currentTime);
});
audio.addEventListener('error', () => { if (audio.getAttribute('src')) { setPlayingUI(false); toast('গানের ফাইল পাওয়া যায়নি'); } });
$('#progress').addEventListener('input', e => { if (audio.duration) audio.currentTime = e.target.value / 1000 * audio.duration; setRange(e.target); });
$('#volume').addEventListener('input', e => { audio.volume = e.target.value; setRange(e.target); });
audio.volume = .8; $('#volume').value = .8; setRange($('#volume')); setRange($('#progress'));

/* ==========================================================
   Particles (হালকা, ভাসমান কাচের বুদবুদ)
   ========================================================== */
(function particles() {
  const c = $('#particles'), ctx = c.getContext('2d');
  if (!ctx || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let w, h, ps = [], raf;
  const resize = () => { const d = Math.min(devicePixelRatio || 1, 2); w = c.width = innerWidth * d; h = c.height = innerHeight * d; c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px'; };
  resize(); addEventListener('resize', resize);
  const N = innerWidth < 700 ? 22 : 42;
  const mk = init => ({ x: Math.random() * w, y: init ? Math.random() * h : h + 40, r: (4 + Math.random() * 16) * (w / innerWidth), vy: .15 + Math.random() * .45, ph: Math.random() * 6.28, a: .25 + Math.random() * .4 });
  for (let i = 0; i < N; i++) ps.push(mk(true));
  function tick(t) {
    ctx.clearRect(0, 0, w, h);
    for (const p of ps) {
      p.y -= p.vy * (w / innerWidth); p.x += Math.sin(t / 1800 + p.ph) * .35;
      if (p.y < -40) Object.assign(p, mk(false));
      const g = ctx.createRadialGradient(p.x - p.r * .3, p.y - p.r * .3, p.r * .1, p.x, p.y, p.r);
      g.addColorStop(0, `rgba(255,255,255,${p.a + .3})`); g.addColorStop(.6, `rgba(170,230,255,${p.a * .5})`); g.addColorStop(1, 'rgba(120,205,245,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      ctx.strokeStyle = `rgba(255,255,255,${p.a * .7})`; ctx.lineWidth = 1; ctx.stroke();
    }
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);
  document.addEventListener('visibilitychange', () => { cancelAnimationFrame(raf); if (!document.hidden) raf = requestAnimationFrame(tick); });
})();

/* ==========================================================
   Init
   ========================================================== */
renderLetter(); renderPoem(); renderStory(); renderPhotos(); renderVideos(); renderMusic();
route();
const loaderStart = performance.now();
const hideLoader = () => setTimeout(() => $('#loader').classList.add('done'), Math.max(0, 1300 - (performance.now() - loaderStart)));
if (document.readyState === 'complete') hideLoader(); else addEventListener('load', hideLoader);
setTimeout(() => $('#loader').classList.add('done'), 4000); // নিরাপত্তা: ফন্ট ধীর হলেও লোডার সরে যাবে
})();