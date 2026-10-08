/* ===== 1. SETTINGS (edit your business details here) ===== */
const CFG = {
  wa: '2348105294970',   // WhatsApp number: country code + number, no + or spaces
  ig: 'https://www.instagram.com/christyshairaffairs?xtok=Y3U1N3FjZHI2Nnhi',
  words: ['Hair ventilation', 'Wig making', 'Wig revamping', 'Lace customization', 'Hair coloring']
};

/* Change text, add or remove items in these lists */
const SERVICES = [
  ['✦', 'Hair Ventilation', 'Hair knotted strand by strand onto lace for a natural hairline.'],
  ['❖', 'Wig Making', 'Custom wigs made to your head size, style and length.'],
  ['✧', 'Wig Revamping', 'Old wigs washed, restyled and brought back to life.'],
  ['❀', 'Wig Installation', 'A neat, secure fit so your wig sits flat and looks natural.'],
  ['✿', 'Hair Coloring', 'Color for wigs and hair, from soft tones to bold shades.'],
  ['◈', 'Frontal and Lace Customization', 'Lace adjusted and finished to match your skin and your look.'],
  ['❋', 'Hair Treatment', 'Treatments that keep hair soft, moisturized and healthy.'],
  ['✺', 'Training and Classes', 'Learn hair ventilation and wig making. Ask about the next class.'],
  ['❂', 'Other Services', 'Need something not listed? Message us and ask.']
];
const WHY = [
  ['Attention to Detail', 'Hairlines, lace and finishing are handled with care.'],
  ['Elegant Results', 'A clean, polished look you feel confident in.'],
  ['Customer Satisfaction', 'We want you to leave happy with your style.'],
  ['Flexible Scheduling', 'Open Monday to Saturday at flexible hours.'],
  ['Personalized Service', 'Every style is chosen around you.'],
  ['Convenient Location', 'Bakery Road, Ada George, Port Harcourt.']
];
const STEPS = [
  ['Contact Us', 'Message us on WhatsApp with your idea.'],
  ['Choose Your Service', 'Pick the service that suits your look.'],
  ['Schedule Your Visit', 'Agree a day and time that works for you.'],
  ['Enjoy Your New Look', 'Leave feeling beautiful and confident.']
];
const EXP = [
  ['Personalized Attention', 'Your style, length and color are discussed with you.'],
  ['Clean and Elegant Finish', 'Neat edges, tidy lace and a polished result.'],
  ['Professional Approach', 'Respectful, clear and focused on your needs.'],
  ['Beauty That Fits You', 'Looks chosen to suit you, not a template.']
];
const GALLERY = [
  { img: 'images/IMG_20261008_175152.jpg', cat: 'wigs color', t: 'Copper Spiral Curls', d: 'A copper ginger lace wig with bouncy spiral curls.', alt: 'Copper ginger spiral-curl lace wig' },
  { img: 'images/IMG_20261008_175136.jpg', cat: 'wigs color', t: 'Burgundy Body Wave', d: 'A dark lace wig with burgundy highlights and soft waves.', alt: 'Burgundy-tinted body wave lace wig' },
  { img: 'images/IMG_20261008_175117.jpg', cat: 'styling', t: 'Sleek Lace-Front Updo', d: 'A neat, sleek updo with a natural-looking hairline.', alt: 'Sleek lace-front updo with a side swoop' }
];
const FAQ = [
  ['Where is Christy Affairs located?', 'We are on Bakery Road, Ada George, Port Harcourt, Rivers State, Nigeria.'],
  ['What days are you open?', 'We are open Monday to Saturday and closed on Sundays.'],
  ['What are your opening hours?', 'Our hours are flexible. Message us to agree a time that works for you.'],
  ['How can I book an appointment?', 'Use the appointment form on this page or message us on WhatsApp on 08105294970.'],
  ['Can I contact you through WhatsApp?', 'Yes. Tap any WhatsApp button on this page to start a chat.'],
  ['Do you offer different hair services?', 'Yes: hair ventilation, wig making, revamping, installation, coloring, lace customization, hair treatment and training.'],
  ['How can I check service availability?', 'Send us a WhatsApp message with the service you want and your preferred day.'],
  ['Are prices fixed?', 'Prices can depend on the service and style. Please contact Christy Affairs for current prices.']
];

/* ===== 2. HELPERS ===== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const waLink = (text) => `https://wa.me/${CFG.wa}?text=${encodeURIComponent(text)}`;

/* ===== 3. APPLY CONTACT LINKS ===== */
$$('[data-wa]').forEach((a) => { a.href = waLink(a.dataset.wa || 'Hello Christy Affairs, I would like to make an enquiry.'); });
$$('[data-ig]').forEach((a) => { a.href = CFG.ig; });
$$('[data-tel]').forEach((a) => { a.href = `tel:+${CFG.wa}`; });

/* ===== 4. RENDER SECTIONS FROM THE LISTS ABOVE ===== */
$('#servicesGrid').innerHTML = SERVICES.map(([i, n, d]) =>
  `<article class="sv rv"><div class="ico" aria-hidden="true">${i}</div><h3>${n}</h3><p>${d}</p><button class="link" data-book="${n}">Book now</button></article>`).join('');
$('#whyGrid').innerHTML = WHY.map(([t, d], i) =>
  `<article class="card rv"><div class="ico" aria-hidden="true">${i + 1}</div><h3>${t}</h3><p>${d}</p></article>`).join('');
$('#steps').innerHTML = STEPS.map(([t, d], i) =>
  `<article class="card rv"><span class="n">${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join('');
$('#expGrid').innerHTML = EXP.map(([t, d]) => `<article class="card rv"><h3>${t}</h3><p>${d}</p></article>`).join('');
$('#gallery-grid').innerHTML = GALLERY.map((g, i) =>
  `<button class="gi" data-cat="${g.cat}" data-i="${i}" aria-label="Open ${g.t}"><img src="${g.img}" alt="${g.alt}" loading="lazy"><span>${g.t}</span></button>`).join('');
$('#faqList').innerHTML = FAQ.map(([q, a]) =>
  `<div class="qa rv"><button class="q" aria-expanded="false">${q}</button><div class="fa"><div><p>${a}</p></div></div></div>`).join('');
$('#fs').innerHTML = '<option value="">Select a service</option>' + SERVICES.map((s) => `<option>${s[1]}</option>`).join('');

/* stagger delay for cards that share a parent */
$$('.rv').forEach((el) => { el.style.setProperty('--d', `${[...el.parentElement.children].indexOf(el) * 0.08}s`); });

/* ===== 5. PRELOADER ===== */
const start = () => {
  $('#preloader').classList.add('gone');
  document.documentElement.classList.add('ready');
  typeLoop();
};
let started = false;
const go = () => { if (!started) { started = true; setTimeout(start, reduce ? 0 : 900); } };
addEventListener('load', go);
setTimeout(go, 3500);

/* ===== 6. TYPING TEXT ===== */
function typeLoop() {
  const el = $('#type');
  if (reduce) { el.textContent = CFG.words.join(', '); el.style.animation = 'none'; return; }
  let w = 0, c = 0, del = false;
  const tick = () => {
    const word = CFG.words[w];
    c += del ? -1 : 1;
    el.textContent = word.slice(0, c);
    let wait = del ? 40 : 90;
    if (!del && c === word.length) { del = true; wait = 1400; }
    else if (del && c === 0) { del = false; w = (w + 1) % CFG.words.length; wait = 350; }
    setTimeout(tick, wait);
  };
  tick();
}

/* ===== 7. FLOATING PARTICLES ===== */
if (!reduce) {
  const box = $('#particles');
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('span');
    const s = 3 + Math.random() * 6;
    p.className = 'pt';
    p.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s}px;animation-duration:${10 + Math.random() * 14}s;animation-delay:${-Math.random() * 20}s;background:${Math.random() > .5 ? 'var(--pink)' : 'var(--lilac)'}`;
    box.appendChild(p);
  }
}

/* ===== 8. NAV: sticky style, mobile menu, active link, back to top ===== */
const nav = $('#nav'), links = $('#links'), burger = $('#burger'), totop = $('#totop');
const setMenu = (open) => {
  links.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.style.overflow = open ? 'hidden' : '';
};
burger.addEventListener('click', () => setMenu(!links.classList.contains('open')));
$$('a', links).forEach((a) => a.addEventListener('click', () => setMenu(false)));
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 40);
  totop.classList.toggle('show', scrollY > 700);
}, { passive: true });
totop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

const navLinks = $$('a[href^="#"]', links).filter((a) => !a.classList.contains('btn'));
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
}), { rootMargin: '-45% 0px -50% 0px' });
navLinks.forEach((a) => { const s = $(a.getAttribute('href')); if (s) spy.observe(s); });

/* ===== 9. SCROLL REVEAL + COUNTERS ===== */
const countUp = (el) => {
  const end = +el.dataset.count;
  if (reduce) { el.textContent = end; return; }
  const t0 = performance.now();
  const step = (t) => {
    const p = Math.min((t - t0) / 1400, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  $$('.num', e.target).forEach(countUp);
  io.unobserve(e.target);
}), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
$$('.rv').forEach((el) => io.observe(el));

/* ===== 10. GALLERY FILTER + LIGHTBOX ===== */
const items = $$('.gi'), filters = $$('#filters button');
filters.forEach((b) => b.addEventListener('click', () => {
  filters.forEach((x) => x.classList.toggle('on', x === b));
  items.forEach((it) => {
    const show = b.dataset.f === 'all' || it.dataset.cat.split(' ').includes(b.dataset.f);
    it.classList.toggle('hide', !show);
    if (show) { it.style.animation = 'none'; it.offsetHeight; it.style.animation = ''; }
  });
}));
const lb = $('#lb');
items.forEach((it) => it.addEventListener('click', () => {
  const g = GALLERY[it.dataset.i];
  $('#lbi').src = g.img; $('#lbi').alt = g.alt;
  $('#lbt').textContent = g.t; $('#lbd').textContent = g.d;
  lb.showModal();
}));
$('#lbx').addEventListener('click', () => lb.close());
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

/* ===== 11. FAQ ACCORDION ===== */
$$('.qa').forEach((qa) => $('.q', qa).addEventListener('click', () => {
  const open = !qa.classList.contains('open');
  $$('.qa').forEach((o) => { o.classList.remove('open'); $('.q', o).setAttribute('aria-expanded', 'false'); });
  qa.classList.toggle('open', open);
  $('.q', qa).setAttribute('aria-expanded', open);
}));

/* ===== 12. SERVICE "BOOK NOW" -> FORM ===== */
$$('[data-book]').forEach((b) => b.addEventListener('click', () => {
  $('#fs').value = b.dataset.book;
  $('#book').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  setTimeout(() => $('#fn').focus({ preventScroll: true }), 600);
}));

/* ===== 13. APPOINTMENT FORM -> WHATSAPP ===== */
const form = $('#book');
const today = new Date().toISOString().split('T')[0];
$('#fd').min = today;
const fail = (id, msg) => {
  const f = $(id).closest('.fld');
  f.classList.toggle('bad', !!msg);
  $('.er', f).textContent = msg || '';
  return !msg;
};
const clear = (e) => { const f = e.target.closest('.fld'); if (f) { f.classList.remove('bad'); $('.er', f).textContent = ''; } };
form.addEventListener('input', clear);
form.addEventListener('change', clear);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const v = (id) => $(id).value.trim();
  const phone = v('#fp').replace(/[\s()-]/g, '');
  const checks = [
    fail('#fn', v('#fn').length < 2 ? 'Please enter your full name.' : ''),
    fail('#fp', /^\+?\d{10,15}$/.test(phone) ? '' : 'Enter a valid phone number.'),
    fail('#fs', v('#fs') ? '' : 'Please choose a service.'),
    fail('#fd', !v('#fd') ? 'Please pick a date.' : v('#fd') < today ? 'Date cannot be in the past.' : ''),
    fail('#ft', v('#ft') ? '' : 'Please pick a time.')
  ];
  if (checks.includes(false)) { $('.bad input, .bad select', form).focus(); return; }
  const lines = [
    'Hello Christy Affairs, I would like to make an appointment.', '',
    `Name: ${v('#fn')}`, `Phone: ${v('#fp')}`, `Service: ${v('#fs')}`,
    `Preferred date: ${v('#fd')}`, `Preferred time: ${v('#ft')}`
  ];
  if (v('#fm')) lines.push(`Message: ${v('#fm')}`);
  window.open(waLink(lines.join('\n')), '_blank', 'noopener');
}); 

/* ===== 14. BUTTON RIPPLE ===== */
$$('.btn').forEach((b) => b.addEventListener('pointerdown', (e) => {
  if (reduce) return;
  const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) / 4;
  const d = document.createElement('span');
  d.className = 'rip';
  d.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
  b.appendChild(d);
  setTimeout(() => d.remove(), 650);
}));

/* ===== 15. ESCAPE KEY + YEAR ===== */
addEventListener('keydown', (e) => { if (e.key === 'Escape') { setMenu(false); if (lb.open) lb.close(); } });
$('#year').textContent = new Date().getFullYear();