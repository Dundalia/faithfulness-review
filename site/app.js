'use strict';

const REPO_BLOB = 'https://github.com/Dundalia/faithfulness-review/blob/main/';
const NS_ORDER = ['object', 'reveals', 'signal', 'lever', 'updates', 'contribution', 'eval', 'motivation',
  'domain', 'scale', 'factor', 'source', 'model', 'metric'];
const NS_LABEL = {
  object: 'What is explained', reveals: 'What it must reveal', signal: 'Ground truth', lever: 'Intervention',
  updates: 'What the method changes', contribution: 'Contribution', eval: 'Evaluation checks', motivation: 'Motivation',
  domain: 'Task domain', scale: 'Model scale', factor: 'Factor studied', source: 'How it entered the map',
  model: 'Models', metric: 'Metrics',
};
const MATRIX_EXCLUDE = new Set(['model', 'metric']);
const VENUE_LABEL = { venue: 'Main venue', workshop: 'Workshop', preprint: 'Preprint', withdrawn: 'Withdrawn', blog: 'Blog', 'model-card': 'Model card' };
const VERB_LABEL = { contradicts: 'contradicts', 'builds-on': 'builds on', extends: 'extends', 'compares-to': 'compares to' };
const PANE_HIDE = ['source:'];
const FREE_LIMIT = 10;
const STEPS = 7;
const TRAIN_LEVERS = ['sft', 'preference', 'rl-reward', 'rl-mechanics', 'activation-loss', 'multi-agent-game'];
const COLLECTIONS = [
  { id: 'all', label: 'All' },
  { id: 'training', label: 'Training methods', sel: { lever: TRAIN_LEVERS, contribution: ['method'] } },
  { id: 'monitoring', label: 'Monitorability', sel: { motivation: ['monitoring'] } },
  { id: 'evaluation', label: 'Measurement', sel: { contribution: ['metric', 'benchmark', 'meta-evaluation'] } },
  { id: 'self', label: 'Self-reports', sel: { object: ['self-report', 'self-prediction', 'self-interpretation'] } },
  { id: 'cards', label: 'Model cards', vt: ['model-card'] },
  { id: 'background', label: 'Background', sel: { source: ['background-2026-10-21'] } },
];
const TABLE_COLS = [
  { id: 'year', label: 'Year', cls: 'c-year', get: p => p.year },
  { id: 'title', label: 'Title', cls: 'c-title', get: p => p.title },
  { id: 'venue', label: 'Venue', cls: 'c-venue', get: p => venueText(p) },
  { id: 'object', label: 'Explains', cls: 'c-tags', get: p => tagValues(p, 'object') },
  { id: 'contribution', label: 'Contribution', cls: 'c-tags', get: p => tagValues(p, 'contribution') },
  { id: 'lever', label: 'Lever', cls: 'c-tags', get: p => tagValues(p, 'lever') },
];

const state = {
  sel: new Map(), q: '', y0: null, y1: null, vt: new Set(), tab: 'list', sort: 'year',
  tsort: { col: 'year', dir: 'desc' }, key: null, rowNs: 'object', colNs: 'lever',
  verbs: new Set(['contradicts']), showAll: new Set(), facetOpen: new Set(['object', 'lever', 'contribution', 'motivation']),
};
let PAPERS = [], BYKEY = new Map(), NS = new Map(), INCOMING = new Map(), YEARS = [], GENERATED = '';

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tagParts = t => { const i = t.indexOf(':'); return [t.slice(0, i), t.slice(i + 1)]; };
const tagValues = (p, ns) => p.tags.filter(t => t.startsWith(ns + ':')).map(t => tagParts(t)[1]).join(', ');
const venueText = p => (p.venue === 'preprint' ? 'Preprint' : p.venue);
const narrow = () => window.matchMedia('(max-width: 760px)').matches;
function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return isNaN(d) ? iso : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ---------- data ---------- */
async function init() {
  let data;
  try {
    data = await (await fetch('data.json')).json();
  } catch (e) {
    $('rows').innerHTML = '<li class="empty">The data could not be loaded. Run <code>python3 scripts/build.py</code> to generate site/data.json, then serve the site folder over HTTP.</li>';
    return;
  }
  PAPERS = data.papers.map(p => ({
    ...p,
    tagset: new Set(p.tags),
    text: [p.key, p.title, p.authors, p.venue, p.tldr, p.problem, p.method, p.findings, p.limits].join(' ').toLowerCase(),
  }));
  PAPERS.forEach(p => BYKEY.set(p.key, p));
  PAPERS.forEach(p => p.relations.forEach(r => {
    if (!INCOMING.has(r.target)) INCOMING.set(r.target, []);
    INCOMING.get(r.target).push({ ...r, source: p.key });
  }));

  const counts = new Map();
  PAPERS.forEach(p => p.tags.forEach(t => counts.set(t, (counts.get(t) || 0) + 1)));
  const vocab = new Map(data.namespaces.map(n => [n.name, n]));
  for (const name of NS_ORDER) {
    const v = vocab.get(name) || { description: '', free: true, values: [] };
    const known = new Set(v.values.map(x => x.value));
    const extra = [...counts.keys()].filter(t => t.startsWith(name + ':')).map(t => tagParts(t)[1]).filter(x => !known.has(x))
      .sort((a, b) => counts.get(name + ':' + b) - counts.get(name + ':' + a) || a.localeCompare(b));
    NS.set(name, {
      name, label: NS_LABEL[name] || name, desc: v.description, free: v.free,
      values: [...v.values.map(x => ({ value: x.value, def: x.definition })), ...extra.map(x => ({ value: x, def: '' }))],
    });
  }
  YEARS = [...new Set(PAPERS.map(p => p.year))].sort();
  GENERATED = data.generated;
  $('meta').textContent = `${PAPERS.length} entries from ${YEARS[0]} to ${YEARS[YEARS.length - 1]}, updated ${formatDate(GENERATED)}`;
  $('generated').textContent = `Data built ${formatDate(GENERATED)}.`;

  setupStatic();
  readHash();
  render();
  if (state.key) {
    const el = document.querySelector(`#rows button[data-key="${CSS.escape(state.key)}"], #grid tr[data-key="${CSS.escape(state.key)}"]`);
    if (el) el.scrollIntoView({ block: 'center' });
  }
  window.addEventListener('hashchange', () => { if (location.hash !== lastHash) { readHash(); render(); } });
}

/* ---------- filtering ---------- */
function match(p, { exceptNs = null, ignoreVt = false } = {}) {
  if (state.q) {
    for (const term of state.q.toLowerCase().split(/\s+/).filter(Boolean)) if (!p.text.includes(term)) return false;
  }
  if (state.y0 && p.year < state.y0) return false;
  if (state.y1 && p.year > state.y1) return false;
  if (!ignoreVt && state.vt.size && !state.vt.has(p.venue_type)) return false;
  for (const [ns, set] of state.sel) {
    if (ns === exceptNs || !set.size) continue;
    let ok = false;
    for (const v of set) if (p.tagset.has(ns + ':' + v)) { ok = true; break; }
    if (!ok) return false;
  }
  return true;
}
const isOn = (ns, v) => state.sel.has(ns) && state.sel.get(ns).has(v);
function toggleTag(ns, v, on) {
  if (!state.sel.has(ns)) state.sel.set(ns, new Set());
  const set = state.sel.get(ns);
  if (on === undefined) on = !set.has(v);
  on ? set.add(v) : set.delete(v);
  if (!set.size) state.sel.delete(ns);
}
function applyCollection(c) {
  state.sel = new Map(); state.vt = new Set();
  for (const [ns, vals] of Object.entries(c.sel || {})) vals.forEach(v => toggleTag(ns, v, true));
  (c.vt || []).forEach(v => state.vt.add(v));
  Object.keys(c.sel || {}).forEach(ns => state.facetOpen.add(ns));
}
function activeCollection() {
  for (const c of COLLECTIONS) {
    const sel = c.sel || {};
    const sameSel = state.sel.size === Object.keys(sel).length &&
      Object.entries(sel).every(([ns, vals]) => state.sel.has(ns) && state.sel.get(ns).size === vals.length && vals.every(v => state.sel.get(ns).has(v)));
    const vt = c.vt || [];
    const sameVt = state.vt.size === vt.length && vt.every(v => state.vt.has(v));
    if (sameSel && sameVt) return c.id;
  }
  return null;
}
function collectionCount(c) {
  const saved = [state.sel, state.vt];
  applyCollection(c);
  const n = PAPERS.filter(p => match(p)).length;
  [state.sel, state.vt] = saved;
  return n;
}

/* ---------- URL state ---------- */
let lastHash = '';
function writeHash() {
  const parts = [];
  const tags = [...state.sel].flatMap(([ns, set]) => [...set].map(v => ns + ':' + v));
  if (tags.length) parts.push('f=' + encodeURIComponent(tags.join(',')));
  if (state.q) parts.push('q=' + encodeURIComponent(state.q));
  if (state.y0 || state.y1) parts.push(`y=${state.y0 || ''}-${state.y1 || ''}`);
  if (state.vt.size) parts.push('v=' + [...state.vt].join(','));
  if (state.tab !== 'list') parts.push('tab=' + state.tab);
  if (state.sort !== 'year') parts.push('s=' + state.sort);
  if (state.tab === 'table' && (state.tsort.col !== 'year' || state.tsort.dir !== 'desc')) parts.push(`ts=${state.tsort.col}-${state.tsort.dir}`);
  if (state.tab === 'coverage') parts.push(`m=${state.rowNs},${state.colNs}`);
  if (state.tab === 'links') parts.push('vb=' + [...state.verbs].join(','));
  if (state.key) parts.push('p=' + encodeURIComponent(state.key));
  lastHash = parts.length ? '#' + parts.join('&') : '';
  if (location.hash !== lastHash) history.replaceState(null, '', lastHash || location.pathname + location.search);
}
function readHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  state.sel = new Map();
  (h.get('f') || '').split(',').filter(Boolean).forEach(t => { const [ns, v] = tagParts(t); if (ns && v) toggleTag(ns, v, true); });
  state.q = h.get('q') || '';
  const [y0, y1] = (h.get('y') || '-').split('-').map(Number);
  state.y0 = y0 || null; state.y1 = y1 || null;
  state.vt = new Set((h.get('v') || '').split(',').filter(x => VENUE_LABEL[x]));
  const tab = h.get('tab') === 'papers' ? 'list' : h.get('tab');
  state.tab = ['list', 'table', 'coverage', 'links'].includes(tab) ? tab : 'list';
  state.sort = h.get('s') || 'year';
  const [tc, td] = (h.get('ts') || '').split('-');
  if (TABLE_COLS.some(c => c.id === tc)) state.tsort = { col: tc, dir: td === 'asc' ? 'asc' : 'desc' };
  const m = (h.get('m') || '').split(',');
  if (NS.has(m[0]) && NS.has(m[1])) { state.rowNs = m[0]; state.colNs = m[1]; }
  if (h.get('vb')) state.verbs = new Set(h.get('vb').split(',').filter(v => VERB_LABEL[v]));
  const legacy = (h.get('o') || '').split(',').find(k => BYKEY.has(k));
  state.key = BYKEY.has(h.get('p')) ? h.get('p') : (legacy || null);
  for (const ns of state.sel.keys()) state.facetOpen.add(ns);
}

/* ---------- static wiring ---------- */
function setupStatic() {
  const yopts = YEARS.map(y => `<option value="${y}">${y}</option>`).join('');
  $('y0').innerHTML = yopts; $('y1').innerHTML = yopts;
  $('y0').addEventListener('change', e => { state.y0 = +e.target.value; if (state.y1 && state.y0 > state.y1) state.y1 = state.y0; render(); });
  $('y1').addEventListener('change', e => { state.y1 = +e.target.value; if (state.y0 && state.y1 < state.y0) state.y0 = state.y1; render(); });
  let timer;
  $('q').addEventListener('input', e => { clearTimeout(timer); timer = setTimeout(() => { state.q = e.target.value.trim(); render(); }, 150); });
  $('sort').addEventListener('change', e => { state.sort = e.target.value; render(); });
  $('clearAll').addEventListener('click', () => { state.sel = new Map(); state.q = ''; state.y0 = null; state.y1 = null; state.vt = new Set(); render(); });

  $('collections').addEventListener('click', e => {
    const b = e.target.closest('button[data-c]'); if (!b) return;
    applyCollection(COLLECTIONS.find(c => c.id === b.dataset.c)); render();
  });
  document.querySelectorAll('.views button').forEach(b => b.addEventListener('click', () => { state.tab = b.dataset.tab; render(); }));
  document.querySelector('.views').addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const tabs = ['list', 'table', 'coverage', 'links'];
    state.tab = tabs[(tabs.indexOf(state.tab) + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    render(); $('tab-' + state.tab).focus();
  });

  $('venueTypes').addEventListener('change', e => {
    const t = e.target; if (!t.matches('input[data-vt]')) return;
    t.checked ? state.vt.add(t.dataset.vt) : state.vt.delete(t.dataset.vt); render();
  });
  $('verbs').addEventListener('change', e => {
    const t = e.target; if (!t.matches('input[data-verb]')) return;
    t.checked ? state.verbs.add(t.dataset.verb) : state.verbs.delete(t.dataset.verb); render();
  });

  const facets = $('facets');
  facets.addEventListener('change', e => {
    const t = e.target;
    if (t.matches('input[type=checkbox][data-ns]')) { toggleTag(t.dataset.ns, t.dataset.v, t.checked); render(); }
  });
  facets.addEventListener('click', e => {
    const b = e.target.closest('button.more'); if (!b) return;
    state.showAll.has(b.dataset.ns) ? state.showAll.delete(b.dataset.ns) : state.showAll.add(b.dataset.ns); renderFacets();
  });
  facets.addEventListener('input', e => {
    if (!e.target.matches('input.mini')) return;
    const q = e.target.value.toLowerCase();
    e.target.closest('.facet').querySelectorAll('li').forEach(li => { li.hidden = q && !li.dataset.v.includes(q); });
  });
  facets.addEventListener('toggle', e => {
    const d = e.target; if (!d.matches('details.facet')) return;
    d.open ? state.facetOpen.add(d.dataset.ns) : state.facetOpen.delete(d.dataset.ns);
  }, true);

  $('active').addEventListener('click', e => {
    const p = e.target.closest('.token'); if (!p) return;
    const k = p.dataset.kind;
    if (k === 'tag') { const [ns, v] = tagParts(p.dataset.tag); toggleTag(ns, v, false); }
    if (k === 'q') state.q = '';
    if (k === 'y') { state.y0 = null; state.y1 = null; }
    if (k === 'vt') state.vt.delete(p.dataset.vt);
    render();
  });

  $('rows').addEventListener('click', e => { const b = e.target.closest('[data-key]'); if (b) select(b.dataset.key); });
  $('grid').addEventListener('click', e => {
    const h = e.target.closest('button[data-col]');
    if (h) {
      const col = h.dataset.col;
      state.tsort = state.tsort.col === col ? { col, dir: state.tsort.dir === 'asc' ? 'desc' : 'asc' } : { col, dir: col === 'year' ? 'desc' : 'asc' };
      render(); return;
    }
    const r = e.target.closest('tr[data-key]'); if (r) select(r.dataset.key);
  });
  $('grid').addEventListener('keydown', e => {
    const r = e.target.closest('tr[data-key]');
    if (r && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); select(r.dataset.key); }
  });
  $('links').addEventListener('click', e => { const go = e.target.closest('button.goto'); if (go) select(go.dataset.key); });
  $('pane').addEventListener('click', e => {
    const tag = e.target.closest('.tag[data-tag]');
    if (tag) { const [ns, v] = tagParts(tag.dataset.tag); toggleTag(ns, v); state.facetOpen.add(ns); render(); return; }
    const go = e.target.closest('button.goto'); if (go) { select(go.dataset.key); return; }
    if (e.target.closest('button.close')) { select(null); return; }
    const copy = e.target.closest('button.copy');
    if (copy) {
      const done = () => { copy.textContent = 'Link copied'; setTimeout(() => { copy.textContent = 'Copy link'; }, 1600); };
      try { navigator.clipboard.writeText(location.href).then(done, () => {}); } catch (err) { /* clipboard unavailable */ }
    }
  });

  $('exportCsv').addEventListener('click', exportCsv);
  $('exportBib').addEventListener('click', exportBib);

  const nsOpts = NS_ORDER.filter(n => !MATRIX_EXCLUDE.has(n)).map(n => `<option value="${n}">${esc(NS_LABEL[n])}</option>`).join('');
  $('rowNs').innerHTML = nsOpts; $('colNs').innerHTML = nsOpts;
  $('rowNs').addEventListener('change', e => { state.rowNs = e.target.value; render(); });
  $('colNs').addEventListener('change', e => { state.colNs = e.target.value; render(); });
  const wrap = $('matrixWrap');
  wrap.addEventListener('click', e => {
    const b = e.target.closest('button[data-r]'); if (!b || b.classList.contains('zero')) return;
    toggleTag(state.rowNs, b.dataset.r, true); toggleTag(state.colNs, b.dataset.c, true);
    state.facetOpen.add(state.rowNs); state.facetOpen.add(state.colNs);
    state.tab = 'list'; hideTip(); render(); window.scrollTo({ top: 0 });
  });
  ['mouseover', 'focusin'].forEach(ev => wrap.addEventListener(ev, e => { const b = e.target.closest('button[data-r]'); if (b) showTip(b); }));
  ['mouseout', 'focusout'].forEach(ev => wrap.addEventListener(ev, e => { if (e.target.closest('button[data-r]')) hideTip(); }));

  const themeBtn = $('themeToggle');
  const setTheme = t => {
    document.documentElement.setAttribute('data-theme', t);
    themeBtn.textContent = t === 'dark' ? 'Light' : 'Dark';
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    try { localStorage.setItem('theme', t); } catch (e) { /* storage unavailable: theme lasts for this visit */ }
  };
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  themeBtn.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

  const rail = $('rail'), toggle = $('filtersToggle');
  const closeRail = () => { rail.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => { const open = rail.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
  document.addEventListener('click', e => { if (rail.classList.contains('open') && !rail.contains(e.target) && e.target !== toggle) closeRail(); });

  document.addEventListener('keydown', e => {
    const typing = ['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName);
    if (e.key === 'Escape') {
      if (typing) { e.target.blur(); return; }
      closeRail(); hideTip();
      if (state.key) select(null);
      return;
    }
    if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === '/') { e.preventDefault(); $('q').focus(); return; }
    if ((e.key === 'j' || e.key === 'k') && (state.tab === 'list' || state.tab === 'table')) { e.preventDefault(); move(e.key === 'j' ? 1 : -1); return; }
    if (e.key === 'o' && state.key) window.open(BYKEY.get(state.key).url, '_blank', 'noopener');
  });
}

function select(key, { focus = false } = {}) {
  state.key = key && BYKEY.has(key) ? key : null;
  renderPane(); markSelected(); writeHash();
  $('pane').classList.toggle('open', !!state.key && narrow());
  if (state.key && focus) {
    const el = document.querySelector(`#rows button[data-key="${CSS.escape(state.key)}"], #grid tr[data-key="${CSS.escape(state.key)}"]`);
    if (el) { el.focus({ preventScroll: true }); el.scrollIntoView({ block: 'nearest' }); }
  }
}
function move(d) {
  const list = state.tab === 'table' ? tableSorted(filteredCache) : filteredCache;
  if (!list.length) return;
  const i = list.findIndex(p => p.key === state.key);
  const next = i < 0 ? (d > 0 ? 0 : list.length - 1) : Math.max(0, Math.min(list.length - 1, i + d));
  select(list[next].key, { focus: true });
}
function markSelected() {
  document.querySelectorAll('#rows .row, #grid tr.r').forEach(el => {
    const on = el.dataset.key === state.key;
    el.classList.toggle('selected', on);
    if (on) el.setAttribute('aria-current', 'true'); else el.removeAttribute('aria-current');
  });
}

/* ---------- rendering ---------- */
let filteredCache = [];

function render() {
  const filtered = PAPERS.filter(p => match(p));
  filteredCache = sortPapers(filtered);
  if ($('q').value !== state.q) $('q').value = state.q;
  $('y0').value = state.y0 || YEARS[0]; $('y1').value = state.y1 || YEARS[YEARS.length - 1];
  $('sort').value = state.sort;
  $('sortWrap').hidden = state.tab !== 'list';
  $('rowNs').value = state.rowNs; $('colNs').value = state.colNs;
  $('count').innerHTML = filtered.length === PAPERS.length ? `<b>${PAPERS.length}</b> entries` : `<b>${filtered.length}</b> of ${PAPERS.length} entries`;
  renderCollections(); renderVenueTypes(); renderFacets(); renderActive();
  for (const t of ['list', 'table', 'coverage', 'links']) {
    $('tab-' + t).setAttribute('aria-selected', state.tab === t);
    $('tab-' + t).tabIndex = state.tab === t ? 0 : -1;
    $('view-' + t).hidden = state.tab !== t;
  }
  if (state.tab === 'list') renderList(filteredCache);
  if (state.tab === 'table') renderTable(filteredCache);
  if (state.tab === 'coverage') renderMatrix(filtered);
  if (state.tab === 'links') renderLinks(filtered);
  renderPane();
  writeHash();
}

function renderCollections() {
  const active = activeCollection();
  $('collections').innerHTML = COLLECTIONS.map(c =>
    `<button type="button" data-c="${c.id}" aria-pressed="${active === c.id}">${esc(c.label)}<span class="n">${collectionCount(c)}</span></button>`).join('') +
    `<span class="sep" aria-hidden="true"></span>` + PAGES.map(p => `<a href="page.html?doc=${p.id}">${esc(p.label)}</a>`).join('');
}

function renderVenueTypes() {
  const base = PAPERS.filter(p => match(p, { ignoreVt: true }));
  $('venueTypes').innerHTML = Object.entries(VENUE_LABEL).map(([k, label]) => {
    const n = base.filter(p => p.venue_type === k).length;
    if (!n && !state.vt.has(k)) return '';
    return `<li><label><input type="checkbox" data-vt="${k}" ${state.vt.has(k) ? 'checked' : ''}><span>${label}</span><span class="n">${n}</span></label></li>`;
  }).join('');
}

function renderFacets() {
  const html = [];
  for (const ns of NS.values()) {
    const base = PAPERS.filter(p => match(p, { exceptNs: ns.name }));
    const count = v => base.reduce((n, p) => n + p.tagset.has(ns.name + ':' + v), 0);
    let vals = ns.values.map(x => ({ ...x, n: count(x.value) })).filter(x => x.n > 0 || isOn(ns.name, x.value));
    if (!vals.length) continue;
    if (ns.free) vals.sort((a, b) => b.n - a.n || a.value.localeCompare(b.value));
    const limited = ns.free && !state.showAll.has(ns.name) && vals.length > FREE_LIMIT;
    const shown = limited ? vals.filter((x, i) => i < FREE_LIMIT || isOn(ns.name, x.value)) : vals;
    const nSel = state.sel.has(ns.name) ? state.sel.get(ns.name).size : 0;
    html.push(`<details class="facet" data-ns="${ns.name}" ${state.facetOpen.has(ns.name) ? 'open' : ''}>
      <summary title="${esc(ns.desc)}"><span>${esc(ns.label)}</span>${nSel ? `<span class="on">${nSel}</span>` : ''}</summary>
      ${ns.free && vals.length > FREE_LIMIT ? `<input class="mini" type="search" placeholder="Find a ${ns.name}" aria-label="Find a ${ns.name}">` : ''}
      <ul class="checks">${shown.map(x => `<li data-v="${esc(x.value.toLowerCase())}"><label title="${esc(x.def)}">
        <input type="checkbox" data-ns="${ns.name}" data-v="${esc(x.value)}" ${isOn(ns.name, x.value) ? 'checked' : ''}>
        <span>${esc(x.value)}</span><span class="n">${x.n}</span></label></li>`).join('')}</ul>
      ${ns.free && vals.length > FREE_LIMIT ? `<button class="text-button more" type="button" data-ns="${ns.name}">${limited ? `Show all ${vals.length}` : 'Show fewer'}</button>` : ''}
    </details>`);
  }
  $('facets').innerHTML = html.join('');
}

function renderActive() {
  const t = [];
  for (const [ns, set] of state.sel) for (const v of set) t.push(`<button class="token" type="button" data-kind="tag" data-tag="${esc(ns + ':' + v)}" aria-label="Remove filter ${esc(ns + ':' + v)}">${esc(ns + ':' + v)}<span class="x" aria-hidden="true">×</span></button>`);
  if (state.q) t.push(`<button class="token" type="button" data-kind="q" aria-label="Clear search">"${esc(state.q)}"<span class="x" aria-hidden="true">×</span></button>`);
  if (state.y0 || state.y1) t.push(`<button class="token" type="button" data-kind="y" aria-label="Clear year range">${state.y0 || YEARS[0]} to ${state.y1 || YEARS[YEARS.length - 1]}<span class="x" aria-hidden="true">×</span></button>`);
  for (const v of state.vt) t.push(`<button class="token" type="button" data-kind="vt" data-vt="${v}" aria-label="Remove ${VENUE_LABEL[v]}">${VENUE_LABEL[v]}<span class="x" aria-hidden="true">×</span></button>`);
  $('active').innerHTML = t.join('');
}

const linkCount = p => p.relations.length + (INCOMING.get(p.key) || []).length;
function sortPapers(list) {
  const by = {
    year: (a, b) => b.year - a.year || a.title.localeCompare(b.title),
    'year-asc': (a, b) => a.year - b.year || a.title.localeCompare(b.title),
    title: (a, b) => a.title.localeCompare(b.title),
    links: (a, b) => linkCount(b) - linkCount(a) || b.year - a.year,
  }[state.sort] || ((a, b) => b.year - a.year);
  return [...list].sort(by);
}
function tableSorted(list) {
  const col = TABLE_COLS.find(c => c.id === state.tsort.col) || TABLE_COLS[0];
  const dir = state.tsort.dir === 'asc' ? 1 : -1;
  return [...list].sort((a, b) => {
    const x = col.get(a), y = col.get(b);
    const c = typeof x === 'number' ? x - y : String(x).localeCompare(String(y));
    return c * dir || a.title.localeCompare(b.title);
  });
}

function highlight(text) {
  const terms = state.q.split(/\s+/).filter(t => t.length > 1).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (!terms.length) return esc(text);
  const re = new RegExp(`(${terms.join('|')})`, 'ig');
  return String(text ?? '').split(re).map((part, i) => (i % 2 ? `<mark>${esc(part)}</mark>` : esc(part))).join('');
}

function renderList(list) {
  const el = $('rows');
  if (!list.length) { el.innerHTML = '<li class="empty">Nothing matches these filters. Remove a filter or clear the search.</li>'; return; }
  el.innerHTML = list.map(p => `<li class="row${p.key === state.key ? ' selected' : ''}" data-key="${esc(p.key)}">
      <button class="row-btn" type="button" data-key="${esc(p.key)}">
        <span class="row-year">${p.year}</span>
        <span class="row-body">
          <span class="row-title">${highlight(p.title)}</span>
          <span class="row-meta">${highlight(p.authors)}, <span class="venue ${p.venue_type}">${esc(venueText(p))}</span></span>
          <span class="row-tldr">${highlight(p.tldr || p.findings)}</span>
        </span>
      </button></li>`).join('');
}

function renderTable(list) {
  const rows = tableSorted(list);
  const head = `<thead><tr>${TABLE_COLS.map(c => {
    const on = state.tsort.col === c.id;
    const sort = on ? (state.tsort.dir === 'asc' ? 'ascending' : 'descending') : null;
    return `<th scope="col"${sort ? ` aria-sort="${sort}"` : ''}><button type="button" data-col="${c.id}">${esc(c.label)}${on ? (state.tsort.dir === 'asc' ? ' ↑' : ' ↓') : ''}</button></th>`;
  }).join('')}</tr></thead>`;
  const body = rows.length ? rows.map(p => `<tr class="r${p.key === state.key ? ' selected' : ''}" data-key="${esc(p.key)}" tabindex="0">
      ${TABLE_COLS.map(c => `<td class="${c.cls}">${c.id === 'title' ? highlight(p.title) : esc(c.get(p))}</td>`).join('')}</tr>`).join('')
    : `<tr><td colspan="${TABLE_COLS.length}" class="empty">Nothing matches these filters.</td></tr>`;
  $('grid').innerHTML = head + `<tbody>${body}</tbody>`;
}

function paperRef(key) {
  const p = BYKEY.get(key);
  return p ? `<button class="goto" type="button" data-key="${esc(key)}">${esc(p.title)}</button> <span class="ref-year">${p.year}</span>` : esc(key);
}

function renderPane() {
  const pane = $('pane');
  const p = state.key && BYKEY.get(state.key);
  if (!p) { pane.innerHTML = aboutHtml(); return; }
  const groups = NS_ORDER.map(ns => [ns, p.tags.filter(t => t.startsWith(ns + ':') && !PANE_HIDE.some(h => t.startsWith(h)))])
    .filter(([, ts]) => ts.length);
  const incoming = INCOMING.get(p.key) || [];
  pane.innerHTML = `<article>
    <button class="text-button close" type="button">Back to the list</button>
    <p class="kicker">${esc(VENUE_LABEL[p.venue_type] || '')}, ${p.year}</p>
    <h2><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}</a></h2>
    <p class="authors">${esc(p.authors)}. <em>${esc(venueText(p))}</em>.</p>
    <p class="actions"><a href="${esc(p.url)}" target="_blank" rel="noopener">Open the paper</a><a href="${REPO_BLOB}papers/${esc(p.key)}.md" target="_blank" rel="noopener">Record</a><button class="text-button copy" type="button">Copy link</button></p>
    ${p.tldr ? `<p class="tldr">${esc(p.tldr)}</p>` : ''}
    <dl class="summary">
      <dt>Problem</dt><dd>${esc(p.problem)}</dd><dt>Method</dt><dd>${esc(p.method)}</dd>
      <dt>Findings</dt><dd>${esc(p.findings)}</dd><dt>Limits</dt><dd>${esc(p.limits)}</dd>
    </dl>
    ${p.relations.length ? `<h3>This entry</h3><ul class="rels">${p.relations.map(r => `<li><span class="verb ${esc(r.verb)}">${esc(VERB_LABEL[r.verb] || r.verb)}</span>${paperRef(r.target)}<span class="note">${esc(r.note)}</span></li>`).join('')}</ul>` : ''}
    ${incoming.length ? `<h3>Referenced by</h3><ul class="rels">${incoming.map(r => `<li>${paperRef(r.source)} <span class="verb ${esc(r.verb)}">${esc(VERB_LABEL[r.verb] || r.verb)}</span><span class="note">${esc(r.note)}</span></li>`).join('')}</ul>` : ''}
    <h3>Tags</h3>
    <dl class="tag-groups">${groups.map(([ns, ts]) => `<dt>${esc(NS_LABEL[ns] || ns)}</dt><dd>${ts.map(t => {
      const [n, v] = tagParts(t);
      return `<button class="tag${isOn(n, v) ? ' on' : ''}" type="button" data-tag="${esc(t)}" title="Filter by ${esc(t)}">${esc(v)}</button>`;
    }).join('')}</dd>`).join('')}</dl>
  </article>`;
}

function aboutHtml() {
  return `<div class="about">
    <p class="kicker">About</p>
    <h2>An annotated index of the literature</h2>
    <p>Each entry covers one paper or model card on whether language models' reasoning and explanations reflect what actually drives their behavior, and on whether that reasoning can be monitored. Every record has a one-line summary, a structured summary, tags and links to related entries.</p>
    <p>Select an entry to read it here. Collections at the top and the filters on the left narrow the list. Coverage cross-tabulates tags, and Links lists explicit relations between papers.</p>
    <h3>Keyboard</h3>
    <dl class="keys"><dt><kbd>/</kbd></dt><dd>search</dd><dt><kbd>j</kbd> <kbd>k</kbd></dt><dd>next and previous entry</dd>
      <dt><kbd>o</kbd></dt><dd>open the selected paper</dd><dt><kbd>Esc</kbd></dt><dd>close</dd></dl>
  </div>`;
}

function renderMatrix(filtered) {
  const R = NS.get(state.rowNs), C = NS.get(state.colNs);
  const has = (p, ns, v) => p.tagset.has(ns + ':' + v);
  const cells = R.values.map(r => C.values.map(c => filtered.filter(p => has(p, R.name, r.value) && has(p, C.name, c.value)).length));
  const max = Math.max(1, ...cells.flat());
  const step = n => Math.max(1, Math.ceil((n / max) * STEPS));
  const colTot = C.values.map(c => filtered.filter(p => has(p, C.name, c.value)).length);
  const head = `<tr><th></th>${C.values.map(c => `<th scope="col" title="${esc(c.def)}"><span class="col-label">${esc(c.value)}</span></th>`).join('')}<th scope="col"><span class="col-label total">all</span></th></tr>`;
  const body = R.values.map((r, i) => {
    const rowTot = filtered.filter(p => has(p, R.name, r.value)).length;
    return `<tr><th scope="row" title="${esc(r.def)}">${esc(r.value)}</th>${C.values.map((c, j) => {
      const n = cells[i][j];
      if (!n) return `<td class="cell"><button type="button" class="zero" data-r="${esc(r.value)}" data-c="${esc(c.value)}" data-n="0" aria-label="No entries tagged ${esc(R.name + ':' + r.value)} and ${esc(C.name + ':' + c.value)}"></button></td>`;
      const s = step(n);
      return `<td class="cell"><button type="button" data-r="${esc(r.value)}" data-c="${esc(c.value)}" data-n="${n}"
        style="background:var(--seq-${s});color:${s <= 3 ? 'var(--seq-ink-light)' : 'var(--seq-ink-dark)'}"
        aria-label="${n} entries tagged ${esc(R.name + ':' + r.value)} and ${esc(C.name + ':' + c.value)}. Select to list them.">${n}</button></td>`;
    }).join('')}<td class="rowtotal">${rowTot}</td></tr>`;
  }).join('');
  const foot = `<tr><th scope="row" class="total">all</th>${colTot.map(n => `<td class="coltotal">${n}</td>`).join('')}<td class="coltotal">${filtered.length}</td></tr>`;
  $('matrixWrap').innerHTML = filtered.length
    ? `<table class="matrix"><caption class="visually-hidden">${esc(R.label)} by ${esc(C.label)}, entry counts</caption><thead>${head}</thead><tbody>${body}${foot}</tbody></table>`
    : '<p class="empty">Nothing matches these filters, so there is nothing to cross-tabulate.</p>';
  $('legend').innerHTML = `<span>Fewer entries</span><span class="ramp">${Array.from({ length: STEPS }, (_, i) => `<span style="background:var(--seq-${i + 1})"></span>`).join('')}</span><span>More (max ${max})</span><span class="hatch"></span><span>None</span>`;
}

function showTip(b) {
  const tip = $('tooltip');
  const n = +b.dataset.n;
  tip.innerHTML = `<strong>${n ? n + (n === 1 ? ' entry' : ' entries') : 'No entries'}</strong><br>${esc(state.rowNs + ':' + b.dataset.r)}<br>${esc(state.colNs + ':' + b.dataset.c)}`;
  tip.hidden = false;
  const r = b.getBoundingClientRect();
  const x = Math.min(window.innerWidth - tip.offsetWidth - 8, Math.max(8, r.left + r.width / 2 - tip.offsetWidth / 2));
  const y = r.top - tip.offsetHeight - 8 < 8 ? r.bottom + 8 : r.top - tip.offsetHeight - 8;
  tip.style.left = x + 'px'; tip.style.top = y + 'px';
}
function hideTip() { $('tooltip').hidden = true; }

function renderLinks(filtered) {
  const all = filtered.flatMap(p => p.relations.map(r => ({ ...r, source: p.key })));
  const verbCount = v => all.filter(r => r.verb === v).length;
  $('verbs').innerHTML = Object.keys(VERB_LABEL).map(v => `<label><input type="checkbox" data-verb="${v}" ${state.verbs.has(v) ? 'checked' : ''}><span>${VERB_LABEL[v]}</span><span class="n">${verbCount(v)}</span></label>`).join('');
  const shown = all.filter(r => state.verbs.has(r.verb))
    .sort((a, b) => (BYKEY.get(b.source)?.year || 0) - (BYKEY.get(a.source)?.year || 0) || a.source.localeCompare(b.source));
  $('links').innerHTML = shown.length ? shown.map(r => `<li>
      <div>${paperRef(r.source)} <span class="verb ${esc(r.verb)}">${esc(VERB_LABEL[r.verb] || r.verb)}</span> ${paperRef(r.target)}</div>
      <p class="note">${esc(r.note)}</p></li>`).join('')
    : '<li class="empty">No links of the selected types among the entries that match your filters.</li>';
}

/* ---------- export ---------- */
function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function exportCsv() {
  const cols = ['key', 'title', 'authors', 'year', 'venue', 'url', 'tldr', 'tags'];
  const cell = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = [cols.join(','), ...filteredCache.map(p => cols.map(c => cell(c === 'tags' ? p.tags.join('; ') : p[c])).join(','))];
  download('faithfulness-monitorability.csv', lines.join('\n'), 'text/csv;charset=utf-8');
}
function exportBib() {
  const clean = s => String(s ?? '').replace(/[{}]/g, '');
  const authors = s => clean(s).replace(/ et al\.?$/, ', others').split(/, | & /).join(' and ');
  const entries = filteredCache.map(p => `@misc{${p.key},
  title = {${clean(p.title)}},
  author = {${authors(p.authors)}},
  year = {${p.year}},
  howpublished = {${clean(venueText(p))}},
  url = {${p.url}}
}`);
  download('faithfulness-monitorability.bib', entries.join('\n\n') + '\n', 'application/x-bibtex;charset=utf-8');
}

init();
