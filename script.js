/* ==========================================================
   FARIHA — MY SPECIAL WORLD  |  script.js
   ----------------------------------------------------------
   সহজে পরিবর্তনের জন্য নিচের দুটি অংশ দেখুন:
   1) MEDIA_CONFIG  → assets ফোল্ডারের ছবি/ভিডিও/গান এখানে লিখুন
   2) DEFAULTS      → চিঠি, কবিতা ও গল্পের মূল লেখা
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
    // নমুনা স্মৃতি — এগুলো শুধু উদাহরণ। Edit Mode চালু করে এডিট বা ডিলিট করুন।
    items: [
      { id: 's1', date: 'তারিখ লিখুন', title: 'প্রথম অধ্যায়', desc: 'এটি একটি নমুনা লেখা। Edit Mode চালু করে এখানে নিজের স্মৃতির কথা লিখুন।' },
      { id: 's2', date: 'তারিখ লিখুন', title: 'দ্বিতীয় অধ্যায়', desc: 'এটিও নমুনা। নতুন স্মৃতি যোগ করতে "নতুন স্মৃতি যোগ করুন" বাটনে ক্লিক করুন।' },
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
const uid = () => 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const fmtTime = s => { if (!isFinite(s)) return '0:00'; s = Math.floor(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const setRange = r => r.style.setProperty('--p', (r.value - r.min) / (r.max - r.min) * 100 + '%');
const baseName = n => n.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();

let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ==========================================================
   Storage  (localStorage = লেখা / IndexedDB = ছবি, ভিডিও, গান)
   ========================================================== */
const KEY = 'fariha_content_v1';
let store = (() => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } })();
store.story  ??= { intro: null, items: JSON.parse(JSON.stringify(DEFAULTS.story.items)) };
store.added  ??= { photos: [], videos: [], music: [] };
store.hidden ??= [];
store.meta   ??= {};
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(store)); }
  catch { toast('সংরক্ষণ করা যায়নি — ব্রাউজারের স্টোরেজ পূর্ণ হতে পারে'); }
}

const DB_NAME = 'fariha_media', DB_STORE = 'blobs';
let dbPromise;
function db() {
  if (!dbPromise) dbPromise = new Promise((res, rej) => {
    if (!window.indexedDB) return rej(new Error('IndexedDB unsupported'));
    const r = indexedDB.open(DB_NAME, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(DB_STORE);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return dbPromise;
}
async function dbOp(mode, fn) {
  const d = await db();
  return new Promise((res, rej) => {
    const tx = d.transaction(DB_STORE, mode); const rq = fn(tx.objectStore(DB_STORE));
    tx.oncomplete = () => res(rq && rq.result); tx.onerror = () => rej(tx.error);
  });
}
const putBlob = (id, blob) => dbOp('readwrite', s => s.put(blob, id));
const getBlob = id => dbOp('readonly', s => s.get(id));
const delBlob = id => dbOp('readwrite', s => s.delete(id)).catch(() => {});

const urlCache = new Map();
async function urlFor(item) {
  if (item.blobId) {
    if (urlCache.has(item.blobId)) return urlCache.get(item.blobId);
    const b = await getBlob(item.blobId); if (!b) return '';
    const u = URL.createObjectURL(b); urlCache.set(item.blobId, u); return u;
  }
  return item.src || '';
}
async function blobUrl(id) { return urlFor({ blobId: id }); }

/* media lists = config + user-added − hidden */
function getList(kind) {
  const cfg = (MEDIA_CONFIG[kind] || []).map((m, i) => ({ ...m, id: `cfg-${kind}-${i}`, cfg: true }));
  return [...cfg, ...store.added[kind]]
    .filter(m => !store.hidden.includes(m.id))
    .map(m => ({ ...m, ...(store.meta[m.id] || {}) }));
}
async function removeMedia(kind, item) {
  if (item.cfg) store.hidden.push(item.id);
  else {
    store.added[kind] = store.added[kind].filter(m => m.id !== item.id);
    if (item.blobId) { await delBlob(item.blobId); urlCache.delete(item.blobId); }
    if (item.coverBlobId) await delBlob(item.coverBlobId);
  }
  delete store.meta[item.id]; save();
}

/* ==========================================================
   Generic modal form
   ========================================================== */
let modalResolve = null;
function openForm({ title, fields, submitText = 'সংরক্ষণ করুন', onSubmit }) {
  $('#modalTitle').textContent = title;
  $('#modalSubmit').textContent = submitText;
  const box = $('#modalFields'); box.innerHTML = '';
  fields.forEach(f => {
    const w = el('div', 'field');
    const id = 'f_' + f.name;
    const lb = el('label', null, f.label); lb.htmlFor = id; w.appendChild(lb);
    let inp;
    if (f.type === 'textarea') { inp = el('textarea'); inp.rows = f.rows || 6; inp.value = f.value || ''; }
    else if (f.type === 'file') { inp = el('input'); inp.type = 'file'; inp.accept = f.accept || ''; if (f.multiple) inp.multiple = true; }
    else { inp = el('input'); inp.type = 'text'; inp.value = f.value || ''; }
    inp.id = id; inp.name = f.name; w.appendChild(inp);
    if (f.hint) w.appendChild(el('small', null, f.hint));
    box.appendChild(w);
  });
  const m = $('#modal'); m.classList.remove('hidden');
  const first = box.querySelector('input,textarea'); if (first && first.type !== 'file') first.focus();
  modalResolve = async () => {
    const vals = {};
    for (const f of fields) {
      const inp = $('#f_' + f.name);
      vals[f.name] = f.type === 'file' ? Array.from(inp.files) : inp.value;
      if (f.required && (f.type === 'file' ? !vals[f.name].length : !String(vals[f.name]).trim())) { toast(`"${f.label}" দিতে হবে`); inp.focus(); return false; }
    }
    $('#modalSubmit').disabled = true;
    try { await onSubmit(vals); closeModal(); } catch (e) { console.error(e); toast('কিছু একটা সমস্যা হয়েছে'); }
    finally { $('#modalSubmit').disabled = false; }
  };
}
function closeModal() { $('#modal').classList.add('hidden'); modalResolve = null; }
$('#modalForm').addEventListener('submit', e => { e.preventDefault(); if (modalResolve) modalResolve(); });
$('#modalCancel').addEventListener('click', closeModal);
$('#modal').addEventListener('pointerdown', e => { if (e.target.id === 'modal') closeModal(); });

/* ==========================================================
   Ripple on every glass button
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
   Edit mode (লোকাল — শুধু এই ব্রাউজারে কাজ করে)
   ========================================================== */
function setEdit(on) {
  document.body.classList.toggle('edit-mode', on);
  $('#editToggle').textContent = '✎ Edit Mode: ' + (on ? 'On' : 'Off');
  try { localStorage.setItem('fariha_edit', on ? '1' : '0'); } catch {}
}
$('#editToggle').addEventListener('click', () => {
  const on = !document.body.classList.contains('edit-mode');
  setEdit(on); toast(on ? 'Edit Mode চালু হয়েছে' : 'Edit Mode বন্ধ হয়েছে');
  renderAll();
});

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
$('#editLetter').addEventListener('click', () => openForm({
  title: 'চিঠি এডিট করুন',
  fields: [
    { name: 'title', label: 'শিরোনাম', value: letterData().title, required: true },
    { name: 'text', label: 'চিঠি (অনুচ্ছেদের মাঝে একটি ফাঁকা লাইন দিন)', type: 'textarea', rows: 14, value: letterData().text, required: true },
  ],
  onSubmit: v => { store.letter = { title: v.title.trim(), text: v.text }; save(); renderLetter(); toast('চিঠি সংরক্ষিত হয়েছে'); }
}));
$('#resetLetter').addEventListener('click', () => { if (confirm('চিঠি আগের মূল লেখায় ফিরিয়ে নেবেন?')) { delete store.letter; save(); renderLetter(); toast('মূল চিঠি ফিরে এসেছে'); } });

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
  stz.forEach(s => {
    $$('.poem-line', s).forEach(l => { l.style.transitionDelay = (n++ * 0.28) + 's'; });
    s.style.setProperty('--d', n * .28 + 's');
  });
  requestAnimationFrame(() => requestAnimationFrame(() => { lines.forEach(l => l.classList.add('in')); stz.forEach(s => s.classList.add('in')); }));
}
$('#replayPoem').addEventListener('click', replayPoem);
$('#editPoem').addEventListener('click', () => openForm({
  title: 'কবিতা এডিট করুন',
  fields: [
    { name: 'title', label: 'শিরোনাম', value: poemData().title, required: true },
    { name: 'text', label: 'কবিতা (স্তবকের মাঝে একটি ফাঁকা লাইন দিন)', type: 'textarea', rows: 14, value: poemData().text, required: true },
  ],
  onSubmit: v => { store.poem = { title: v.title.trim(), text: v.text }; save(); renderPoem(); toast('কবিতা সংরক্ষিত হয়েছে'); }
}));
$('#resetPoem').addEventListener('click', () => { if (confirm('কবিতা আগের মূল লেখায় ফিরিয়ে নেবেন?')) { delete store.poem; save(); renderPoem(); toast('মূল কবিতা ফিরে এসেছে'); } });

/* ==========================================================
   Story
   ========================================================== */
function renderStory() {
  const box = $('#storyIntro'); box.innerHTML = '';
  (store.story.intro ?? DEFAULTS.story.intro).trim().split(/\n\s*\n/).forEach(t => box.appendChild(el('p', null, t)));

  const tl = $('#timeline'); tl.innerHTML = '';
  if (!store.story.items.length) {
    const e = el('div', 'empty glass'); e.append(el('b', null, 'এখনো কোনো স্মৃতি নেই'), el('span', null, 'Edit Mode চালু করে নতুন স্মৃতি যোগ করুন।'));
    tl.appendChild(e); return;
  }
  store.story.items.forEach(m => {
    const it = el('div', 't-item reveal');
    const card = el('article', 'memory glass');
    card.append(el('div', 'date', m.date || ''), el('h3', null, m.title || ''), el('p', null, m.desc || ''));
    if (m.photoId) { const img = el('img'); img.alt = m.title || ''; img.loading = 'lazy'; blobUrl(m.photoId).then(u => img.src = u); card.appendChild(img); }
    const act = el('div', 'card-actions');
    const eb = el('button', 'glass-btn small edit-only', '✎ এডিট'); eb.type = 'button'; eb.onclick = () => memoryForm(m);
    const db_ = el('button', 'glass-btn small edit-only', '🗑 ডিলিট'); db_.type = 'button';
    db_.onclick = async () => {
      if (!confirm('এই স্মৃতিটি ডিলিট করবেন?')) return;
      if (m.photoId) await delBlob(m.photoId);
      store.story.items = store.story.items.filter(x => x.id !== m.id); save(); renderStory(); toast('স্মৃতি ডিলিট হয়েছে');
    };
    act.append(eb, db_); card.appendChild(act); it.appendChild(card); tl.appendChild(it);
  });
  observeReveals();
}
function memoryForm(m) {
  const edit = !!m;
  openForm({
    title: edit ? 'স্মৃতি এডিট করুন' : 'নতুন স্মৃতি যোগ করুন',
    fields: [
      { name: 'date', label: 'তারিখ', value: m?.date || '', hint: 'যেমন: ১২ মার্চ ২০২৫' },
      { name: 'title', label: 'শিরোনাম', value: m?.title || '', required: true },
      { name: 'desc', label: 'বিবরণ', type: 'textarea', rows: 6, value: m?.desc || '' },
      { name: 'photo', label: 'ছবি (ঐচ্ছিক)', type: 'file', accept: '.jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp', hint: edit && m.photoId ? 'নতুন ছবি দিলে আগেরটি বদলে যাবে।' : '' },
    ],
    onSubmit: async v => {
      let photoId = m?.photoId || null;
      if (v.photo[0]) { if (photoId) await delBlob(photoId); photoId = uid(); await putBlob(photoId, v.photo[0]); }
      const rec = { id: m?.id || uid(), date: v.date.trim(), title: v.title.trim(), desc: v.desc.trim(), photoId };
      if (edit) store.story.items = store.story.items.map(x => x.id === m.id ? rec : x); else store.story.items.push(rec);
      save(); renderStory(); toast(edit ? 'স্মৃতি আপডেট হয়েছে' : 'নতুন স্মৃতি যোগ হয়েছে');
    }
  });
}
$('#addMemory').addEventListener('click', () => memoryForm());
$('#editIntro').addEventListener('click', () => openForm({
  title: 'গল্পের ভূমিকা এডিট করুন',
  fields: [{ name: 'intro', label: 'ভূমিকা', type: 'textarea', rows: 14, value: store.story.intro ?? DEFAULTS.story.intro, required: true }],
  onSubmit: v => { store.story.intro = v.intro; save(); renderStory(); toast('ভূমিকা সংরক্ষিত হয়েছে'); }
}));

/* ==========================================================
   Photos + Lightbox
   ========================================================== */
let lbList = [], lbIndex = 0;
function renderPhotos() {
  const grid = $('#photoGrid'); grid.innerHTML = '';
  const list = getList('photos');
  if (!list.length) {
    const e = el('div', 'empty glass');
    e.append(el('b', null, 'এখনো কোনো ছবি যোগ করা হয়নি'), el('span', null, 'Edit Mode চালু করে "ছবি যোগ করুন" চাপুন, অথবা script.js-এর MEDIA_CONFIG-এ ছবির পথ লিখুন।'));
    grid.appendChild(e); return;
  }
  list.forEach((p, i) => {
    const fig = el('figure', 'pcard glass reveal');
    const wrap = el('div', 'imgwrap'); const img = el('img'); img.alt = p.caption || ''; img.loading = 'lazy';
    urlFor(p).then(u => { img.src = u; });
    img.onerror = () => { wrap.style.display = 'grid'; wrap.style.placeItems = 'center'; wrap.textContent = 'ছবি পাওয়া যায়নি'; };
    wrap.appendChild(img); fig.append(wrap, el('figcaption', null, p.caption || ''));
    fig.addEventListener('click', e => { if (!e.target.closest('.card-actions')) openLightbox(i); });
    const act = el('div', 'card-actions');
    const cb = el('button', 'glass-btn small edit-only', '✎ ক্যাপশন'); cb.type = 'button';
    cb.onclick = () => openForm({ title: 'ক্যাপশন এডিট', fields: [{ name: 'caption', label: 'ক্যাপশন', value: p.caption || '' }],
      onSubmit: v => { store.meta[p.id] = { ...(store.meta[p.id] || {}), caption: v.caption.trim() }; save(); renderPhotos(); } });
    const dl = el('button', 'glass-btn small edit-only', '🗑 ডিলিট'); dl.type = 'button';
    dl.onclick = async () => { if (confirm('ছবিটি ডিলিট করবেন?')) { await removeMedia('photos', p); renderPhotos(); toast('ছবি ডিলিট হয়েছে'); } };
    act.append(cb, dl); fig.appendChild(act); grid.appendChild(fig);
  });
  observeReveals();
}
$('#addPhotos').addEventListener('click', () => $('#photoInput').click());
$('#photoInput').addEventListener('change', async e => {
  const files = Array.from(e.target.files).filter(f => /\.(jpe?g|png|webp)$/i.test(f.name) || /^image\/(jpeg|png|webp)$/.test(f.type));
  e.target.value = '';
  if (!files.length) return toast('শুধু JPG, JPEG, PNG বা WebP ছবি যোগ করা যাবে');
  for (const f of files) { const id = uid(); await putBlob(id, f); store.added.photos.push({ id, blobId: id, caption: baseName(f.name) }); }
  save(); renderPhotos(); toast(`${files.length}টি ছবি যোগ হয়েছে`);
});

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
  if (e.key === 'Escape') { if (!$('#modal').classList.contains('hidden')) closeModal(); else if (!lb.classList.contains('hidden')) closeLb(); }
  if (lb.classList.contains('hidden')) return;
  if (e.key === 'ArrowLeft') lbStep(-1); if (e.key === 'ArrowRight') lbStep(1);
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
    e.append(el('b', null, 'এখনো কোনো ভিডিও যোগ করা হয়নি'), el('span', null, 'Edit Mode চালু করে "ভিডিও যোগ করুন" চাপুন, অথবা script.js-এর MEDIA_CONFIG-এ ভিডিওর পথ লিখুন।'));
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

    const toggle = () => { if (v.paused) { pauseAllVideos(v); v.play().catch(() => toast('ভিডিওটি চালানো যায়নি — ফাইল/পথ ঠিক আছে কিনা দেখুন')); } else v.pause(); };
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
    const act = el('div', 'card-actions');
    const cb = el('button', 'glass-btn small edit-only', '✎ ক্যাপশন'); cb.type = 'button';
    cb.onclick = () => openForm({ title: 'ক্যাপশন এডিট', fields: [{ name: 'caption', label: 'ক্যাপশন', value: item.caption || '' }],
      onSubmit: val => { store.meta[item.id] = { ...(store.meta[item.id] || {}), caption: val.caption.trim() }; save(); renderVideos(); } });
    const dl = el('button', 'glass-btn small edit-only', '🗑 ডিলিট'); dl.type = 'button';
    dl.onclick = async () => { if (confirm('ভিডিওটি ডিলিট করবেন?')) { await removeMedia('videos', item); renderVideos(); toast('ভিডিও ডিলিট হয়েছে'); } };
    act.append(cb, dl); card.appendChild(act); grid.appendChild(card);
  });
  observeReveals();
}
$('#addVideo').addEventListener('click', () => openForm({
  title: 'ভিডিও যোগ করুন',
  fields: [
    { name: 'file', label: 'MP4 ভিডিও', type: 'file', accept: '.mp4,video/mp4', required: true },
    { name: 'caption', label: 'ক্যাপশন', hint: 'খালি রাখলে ফাইলের নাম ব্যবহার হবে।' },
  ],
  onSubmit: async v => {
    const f = v.file[0];
    if (!/\.mp4$/i.test(f.name) && f.type !== 'video/mp4') throw new Error('not mp4');
    const id = uid(); await putBlob(id, f);
    store.added.videos.push({ id, blobId: id, caption: v.caption.trim() || baseName(f.name) });
    save(); renderVideos(); toast('ভিডিও যোগ হয়েছে');
  }
}));

/* ==========================================================
   Music
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
  if (autoplay) audio.play().catch(() => toast('গানটি চালানো যায়নি — ফাইল/পথ ঠিক আছে কিনা দেখুন'));
}
function renderMusic() {
  tracks = getList('music');
  const pl = $('#playlist'); pl.innerHTML = '';
  const has = tracks.length > 0;
  ['prevBtn', 'playBtn', 'nextBtn', 'progress', 'volume'].forEach(id => { $('#' + id).disabled = !has; });
  if (!has) {
    audio.pause(); audio.removeAttribute('src'); cur = -1; curId = null; setPlayingUI(false);
    $('#trackTitle').textContent = 'কোনো গান নেই'; $('#trackArtist').textContent = 'Edit Mode চালু করে গান যোগ করুন';
    $('#cover').innerHTML = '<span class="cover-note">♪</span>';
    const li = el('li', 'empty'); li.textContent = 'প্লেলিস্ট এখনো খালি'; pl.appendChild(li); return;
  }
  tracks.forEach((t, i) => {
    const li = el('li', 'pl-item'); li.tabIndex = 0;
    const meta = el('div', 'meta'); meta.append(el('b', null, t.title || 'নামহীন গান'), el('small', null, t.artist || 'শিল্পী অজানা'));
    li.append(el('span', 'n', String(i + 1)), meta);
    const dl = el('button', 'glass-btn small edit-only', '🗑'); dl.type = 'button'; dl.setAttribute('aria-label', 'Delete');
    dl.onclick = async e => { e.stopPropagation(); if (confirm('গানটি ডিলিট করবেন?')) { await removeMedia('music', t); renderMusic(); toast('গান ডিলিট হয়েছে'); } };
    const ed = el('button', 'glass-btn small edit-only', '✎'); ed.type = 'button'; ed.setAttribute('aria-label', 'Edit');
    ed.onclick = e => { e.stopPropagation(); openForm({ title: 'গানের তথ্য এডিট', fields: [
      { name: 'title', label: 'গানের নাম', value: t.title || '', required: true }, { name: 'artist', label: 'শিল্পীর নাম', value: t.artist || '' }],
      onSubmit: v => { store.meta[t.id] = { ...(store.meta[t.id] || {}), title: v.title.trim(), artist: v.artist.trim() }; save(); const was = curId; renderMusic(); const k = tracks.findIndex(x => x.id === was); if (k >= 0) { cur = k; $$('#playlist .pl-item').forEach((n, q) => n.classList.toggle('active', q === k)); $('#trackTitle').textContent = tracks[k].title; $('#trackArtist').textContent = tracks[k].artist || 'শিল্পী অজানা'; } } }); };
    li.append(ed, dl);
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
audio.volume = .8; setRange($('#volume')); $('#volume').value = .8; setRange($('#volume')); setRange($('#progress'));

$('#addSong').addEventListener('click', () => openForm({
  title: 'গান যোগ করুন',
  fields: [
    { name: 'file', label: 'MP3 ফাইল', type: 'file', accept: '.mp3,audio/mpeg', required: true },
    { name: 'title', label: 'গানের নাম', hint: 'খালি রাখলে ফাইলের নাম ব্যবহার হবে।' },
    { name: 'artist', label: 'শিল্পীর নাম' },
    { name: 'cover', label: 'কভার ছবি (ঐচ্ছিক)', type: 'file', accept: '.jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp' },
  ],
  onSubmit: async v => {
    const f = v.file[0];
    if (!/\.mp3$/i.test(f.name) && f.type !== 'audio/mpeg') throw new Error('not mp3');
    const id = uid(); await putBlob(id, f);
    const rec = { id, blobId: id, title: v.title.trim() || baseName(f.name), artist: v.artist.trim() };
    if (v.cover[0]) { rec.coverBlobId = uid(); await putBlob(rec.coverBlobId, v.cover[0]); }
    store.added.music.push(rec); save(); renderMusic(); toast('গান যোগ হয়েছে');
  }
}));

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
function renderAll() { renderLetter(); renderPoem(); renderStory(); renderPhotos(); renderVideos(); renderMusic(); }
try { setEdit(localStorage.getItem('fariha_edit') === '1'); } catch {}
renderAll();
route();
const loaderStart = performance.now();
const hideLoader = () => setTimeout(() => $('#loader').classList.add('done'), Math.max(0, 1300 - (performance.now() - loaderStart)));
if (document.readyState === 'complete') hideLoader(); else addEventListener('load', hideLoader);
setTimeout(() => $('#loader').classList.add('done'), 4000); // নিরাপত্তা: ফন্ট ধীর হলেও লোডার সরে যাবে
})();