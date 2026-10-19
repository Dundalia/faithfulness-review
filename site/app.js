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
const VENUE_LABEL = { venue: 'Main venue', workshop: 'Workshop', preprint: 'Preprint', withdrawn: 'Withdrawn', blog: 'Blog' };
const VERB_LABEL = { contradicts: 'contradicts', 'builds-on': 'builds on', extends: 'extends', 'compares-to': 'compares to' };
const CHIP_HIDE = ['model:', 'metric:', 'source:'];
const FREE_LIMIT = 12;
const STEPS = 7;

const state = {
  sel: new Map(), q: '', y0: null, y1: null, vt: new Set(), tab: 'papers', sort: 'year',
  open: new Set(), rowNs: 'object', colNs: 'lever', verbs: new Set(['contradicts']),
  showAll: new Set(), facetOpen: new Set(['object', 'lever', 'contribution']),
};
let PAPERS = [], BYKEY = new Map(), NS = new Map(), INCOMING = new Map(), YEARS = [];

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tagParts = t => { const i = t.indexOf(':'); return [t.slice(0, i), t.slice(i + 1)]; };

/* ---------- data ---------- */
async function init() {
  let data;
  try {
    data = await (await fetch('data.json')).json();
  } catch (e) {
    $('papers').innerHTML = '<li class="empty">The paper data could not be loaded. Run <code>python3 scripts/build.py</code> to generate site/data.json, then serve the site folder over HTTP.</li>';
    return;
  }
  PAPERS = data.papers.map(p => ({
    ...p,
    tagset: new Set(p.tags),
    text: [p.key, p.title, p.authors, p.venue, p.problem, p.method, p.findings, p.limits].join(' ').toLowerCase(),
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
  $('generated').textContent = `Data generated ${data.generated}.`;
  $('lede').textContent = `${PAPERS.length} papers on making LLM chains of thought and self-explanations reflect what actually drives the answer, tagged and summarized from their full text.`;

  setupStatic();
  readHash();
  render();
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

/* ---------- URL state ---------- */
let lastHash = '';
function writeHash() {
  const parts = [];
  const tags = [...state.sel].flatMap(([ns, set]) => [...set].map(v => ns + ':' + v));
  if (tags.length) parts.push('f=' + encodeURIComponent(tags.join(',')));
  if (state.q) parts.push('q=' + encodeURIComponent(state.q));
  if (state.y0 || state.y1) parts.push(`y=${state.y0 || ''}-${state.y1 || ''}`);
  if (state.vt.size) parts.push('v=' + [...state.vt].join(','));
  if (state.tab !== 'papers') parts.push('tab=' + state.tab);
  if (state.sort !== 'year') parts.push('s=' + state.sort);
  if (state.tab === 'coverage') parts.push(`m=${state.rowNs},${state.colNs}`);
  if (state.tab === 'links') parts.push('vb=' + [...state.verbs].join(','));
  if (state.open.size && state.open.size <= 5) parts.push('o=' + [...state.open].join(','));
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
  state.tab = ['papers', 'coverage', 'links'].includes(h.get('tab')) ? h.get('tab') : 'papers';
  state.sort = h.get('s') || 'year';
  const m = (h.get('m') || '').split(',');
  if (NS.has(m[0]) && NS.has(m[1])) { state.rowNs = m[0]; state.colNs = m[1]; }
  if (h.get('vb')) state.verbs = new Set(h.get('vb').split(',').filter(v => VERB_LABEL[v]));
  state.open = new Set((h.get('o') || '').split(',').filter(k => BYKEY.has(k)));
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
  $('clearAll').addEventListener('click', () => {
    state.sel = new Map(); state.q = ''; state.y0 = null; state.y1 = null; state.vt = new Set(); render();
  });
  document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => { state.tab = b.dataset.tab; render(); }));
  document.querySelector('.tabs').addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const tabs = ['papers', 'coverage', 'links'];
    state.tab = tabs[(tabs.indexOf(state.tab) + (e.key === 'ArrowRight' ? 1 : 2)) % 3];
    render(); $('tab-' + state.tab).focus();
  });

  $('venueTypes').addEventListener('click', e => {
    const b = e.target.closest('button[data-vt]'); if (!b) return;
    state.vt.has(b.dataset.vt) ? state.vt.delete(b.dataset.vt) : state.vt.add(b.dataset.vt); render();
  });
  $('verbs').addEventListener('click', e => {
    const b = e.target.closest('button[data-verb]'); if (!b) return;
    state.verbs.has(b.dataset.verb) ? state.verbs.delete(b.dataset.verb) : state.verbs.add(b.dataset.verb); render();
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
    const p = e.target.closest('.pill'); if (!p) return;
    const k = p.dataset.kind;
    if (k === 'tag') { const [ns, v] = tagParts(p.dataset.tag); toggleTag(ns, v, false); }
    if (k === 'q') state.q = '';
    if (k === 'y') { state.y0 = null; state.y1 = null; }
    if (k === 'vt') state.vt.delete(p.dataset.vt);
    render();
  });

  $('papers').addEventListener('click', e => {
    const chip = e.target.closest('.chip[data-tag]');
    if (chip) { const [ns, v] = tagParts(chip.dataset.tag); toggleTag(ns, v); state.facetOpen.add(ns); render(); return; }
    const ex = e.target.closest('button.expand');
    if (ex) { const k = ex.dataset.key; state.open.has(k) ? state.open.delete(k) : state.open.add(k); renderPapers(currentFiltered()); writeHash(); return; }
    const go = e.target.closest('button.goto'); if (go) goTo(go.dataset.key);
  });
  $('expandAll').addEventListener('click', () => {
    const list = currentFiltered();
    const allOpen = list.every(p => state.open.has(p.key));
    list.forEach(p => allOpen ? state.open.delete(p.key) : state.open.add(p.key));
    renderPapers(list); writeHash();
  });
  $('links').addEventListener('click', e => { const go = e.target.closest('button.goto'); if (go) goTo(go.dataset.key); });

  const nsOpts = NS_ORDER.filter(n => !MATRIX_EXCLUDE.has(n)).map(n => `<option value="${n}">${esc(NS_LABEL[n])}</option>`).join('');
  $('rowNs').innerHTML = nsOpts; $('colNs').innerHTML = nsOpts;
  $('rowNs').addEventListener('change', e => { state.rowNs = e.target.value; render(); });
  $('colNs').addEventListener('change', e => { state.colNs = e.target.value; render(); });
  const wrap = $('matrixWrap');
  wrap.addEventListener('click', e => {
    const b = e.target.closest('button[data-r]'); if (!b || b.classList.contains('zero')) return;
    toggleTag(state.rowNs, b.dataset.r, true); toggleTag(state.colNs, b.dataset.c, true);
    state.facetOpen.add(state.rowNs); state.facetOpen.add(state.colNs);
    state.tab = 'papers'; hideTip(); render(); window.scrollTo({ top: 0 });
  });
  ['mouseover', 'focusin'].forEach(ev => wrap.addEventListener(ev, e => { const b = e.target.closest('button[data-r]'); if (b) showTip(b); }));
  ['mouseout', 'focusout'].forEach(ev => wrap.addEventListener(ev, e => { if (e.target.closest('button[data-r]')) hideTip(); }));

  const rail = $('rail'), toggle = $('filtersToggle');
  toggle.addEventListener('click', () => { const open = rail.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
  document.addEventListener('click', e => {
    if (rail.classList.contains('open') && !rail.contains(e.target) && e.target !== toggle) { rail.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { rail.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); hideTip(); } });
}

function goTo(key) {
  state.sel = new Map(); state.y0 = null; state.y1 = null; state.vt = new Set();
  state.q = key; state.open.add(key); state.tab = 'papers';
  render(); window.scrollTo({ top: 0 });
}

/* ---------- rendering ---------- */
let filteredCache = [];
const currentFiltered = () => filteredCache;

function render() {
  const filtered = PAPERS.filter(p => match(p));
  filteredCache = sortPapers(filtered);
  if ($('q').value !== state.q) $('q').value = state.q;
  $('y0').value = state.y0 || YEARS[0]; $('y1').value = state.y1 || YEARS[YEARS.length - 1];
  $('sort').value = state.sort;
  $('rowNs').value = state.rowNs; $('colNs').value = state.colNs;
  $('count').textContent = filtered.length === PAPERS.length ? `${PAPERS.length} papers` : `${filtered.length} of ${PAPERS.length} papers`;
  renderVenueTypes(); renderFacets(); renderActive();
  for (const t of ['papers', 'coverage', 'links']) {
    $('tab-' + t).setAttribute('aria-selected', state.tab === t);
    $('tab-' + t).tabIndex = state.tab === t ? 0 : -1;
    $('view-' + t).hidden = state.tab !== t;
  }
  if (state.tab === 'papers') renderPapers(filteredCache);
  if (state.tab === 'coverage') renderMatrix(filtered);
  if (state.tab === 'links') renderLinks(filtered);
  writeHash();
}

function renderVenueTypes() {
  const base = PAPERS.filter(p => match(p, { ignoreVt: true }));
  $('venueTypes').innerHTML = Object.entries(VENUE_LABEL).map(([k, label]) => {
    const n = base.filter(p => p.venue_type === k).length;
    return `<button class="toggle" type="button" data-vt="${k}" aria-pressed="${state.vt.has(k)}">${label}<span class="n">${n}</span></button>`;
  }).join('');
}

function renderFacets() {
  const html = [];
  for (const ns of NS.values()) {
    const base = PAPERS.filter(p => match(p, { exceptNs: ns.name }));
    const count = v => base.reduce((n, p) => n + p.tagset.has(ns.name + ':' + v), 0);
    let vals = ns.values.map(x => ({ ...x, n: count(x.value) }));
    if (ns.free) vals = vals.filter(x => x.n > 0 || isOn(ns.name, x.value)).sort((a, b) => b.n - a.n || a.value.localeCompare(b.value));
    const limited = ns.free && !state.showAll.has(ns.name) && vals.length > FREE_LIMIT;
    const shown = limited ? vals.filter((x, i) => i < FREE_LIMIT || isOn(ns.name, x.value)) : vals;
    const nSel = state.sel.has(ns.name) ? state.sel.get(ns.name).size : 0;
    html.push(`<details class="facet" data-ns="${ns.name}" ${state.facetOpen.has(ns.name) ? 'open' : ''}>
      <summary><span>${esc(ns.label)}</span>${nSel ? `<span class="selected-n">${nSel} on</span>` : ''}</summary>
      ${ns.desc ? `<p class="facet-desc">${esc(ns.desc)}</p>` : ''}
      ${ns.free ? `<input class="mini" type="search" placeholder="Find a ${ns.name}" aria-label="Find a ${ns.name}">` : ''}
      <ul>${shown.map(x => `<li class="${x.n ? '' : 'zero'}" data-v="${esc(x.value.toLowerCase())}"><label title="${esc(x.def)}">
        <input type="checkbox" data-ns="${ns.name}" data-v="${esc(x.value)}" ${isOn(ns.name, x.value) ? 'checked' : ''}>
        <span>${esc(x.value)}</span><span class="n">${x.n}</span></label></li>`).join('')}</ul>
      ${ns.free && vals.length > FREE_LIMIT ? `<button class="link-button more" type="button" data-ns="${ns.name}">${limited ? `Show all ${vals.length}` : 'Show fewer'}</button>` : ''}
    </details>`);
  }
  $('facets').innerHTML = html.join('');
}

function renderActive() {
  const pills = [];
  for (const [ns, set] of state.sel) for (const v of set) pills.push(`<button class="pill" type="button" data-kind="tag" data-tag="${esc(ns + ':' + v)}" aria-label="Remove filter ${esc(ns + ':' + v)}">${esc(ns + ':' + v)}<span class="x" aria-hidden="true">×</span></button>`);
  if (state.q) pills.push(`<button class="pill" type="button" data-kind="q" aria-label="Clear search">Search: ${esc(state.q)}<span class="x" aria-hidden="true">×</span></button>`);
  if (state.y0 || state.y1) pills.push(`<button class="pill" type="button" data-kind="y" aria-label="Clear year range">${state.y0 || YEARS[0]} to ${state.y1 || YEARS[YEARS.length - 1]}<span class="x" aria-hidden="true">×</span></button>`);
  for (const v of state.vt) pills.push(`<button class="pill" type="button" data-kind="vt" data-vt="${v}" aria-label="Remove ${VENUE_LABEL[v]}">${VENUE_LABEL[v]}<span class="x" aria-hidden="true">×</span></button>`);
  $('active').innerHTML = pills.join('');
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

function chip(t) {
  const [ns, v] = tagParts(t);
  return `<button class="chip${isOn(ns, v) ? ' on' : ''}" type="button" data-tag="${esc(t)}" title="Filter by ${esc(t)}"><span class="ns">${esc(ns)}:</span>${esc(v)}</button>`;
}
function paperRef(key) {
  const p = BYKEY.get(key);
  return p ? `<button class="goto" type="button" data-key="${esc(key)}">${esc(p.title)}</button> <span class="ref-year">(${p.year})</span>` : esc(key);
}

function renderPapers(list) {
  const el = $('papers');
  $('expandAll').textContent = list.length && list.every(p => state.open.has(p.key)) ? 'Collapse all' : 'Expand all';
  if (!list.length) { el.innerHTML = '<li class="empty">No papers match these filters. Remove a filter above or clear the search.</li>'; return; }
  el.innerHTML = list.map(p => {
    const open = state.open.has(p.key);
    const tags = p.tags.filter(t => !CHIP_HIDE.some(h => t.startsWith(h)));
    const extra = p.tags.filter(t => t.startsWith('model:') || t.startsWith('metric:'));
    const incoming = INCOMING.get(p.key) || [];
    const detail = open ? `<div class="detail" id="d-${esc(p.key)}">
        <dl class="summary">
          <dt>Problem</dt><dd>${esc(p.problem)}</dd><dt>Method</dt><dd>${esc(p.method)}</dd>
          <dt>Findings</dt><dd>${esc(p.findings)}</dd><dt>Limits</dt><dd>${esc(p.limits)}</dd>
        </dl>
        ${extra.length ? `<div><h4>Models and metrics</h4><div class="chips">${extra.map(chip).join('')}</div></div>` : ''}
        ${p.relations.length ? `<div><h4>This paper</h4><ul>${p.relations.map(r => `<li><span class="verb ${esc(r.verb)}">${esc(VERB_LABEL[r.verb] || r.verb)}</span> ${paperRef(r.target)}: ${esc(r.note)}</li>`).join('')}</ul></div>` : ''}
        ${incoming.length ? `<div><h4>Other papers</h4><ul>${incoming.map(r => `<li>${paperRef(r.source)} <span class="verb ${esc(r.verb)}">${esc(VERB_LABEL[r.verb] || r.verb)}</span> this paper: ${esc(r.note)}</li>`).join('')}</ul></div>` : ''}
        <p class="record-links"><a href="${esc(p.url)}" target="_blank" rel="noopener">Open the paper</a><a href="${REPO_BLOB}papers/${esc(p.key)}.md" target="_blank" rel="noopener">View the record</a></p>
      </div>` : '';
    return `<li class="paper" id="p-${esc(p.key)}">
      <div class="paper-head">
        <h3><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}</a></h3>
        <button class="expand" type="button" data-key="${esc(p.key)}" aria-expanded="${open}" aria-controls="d-${esc(p.key)}">${open ? 'Hide summary' : 'Show summary'}</button>
        <p class="byline">${esc(p.authors)} ${p.year}. <span class="venue ${p.venue_type}">${esc(p.venue === 'preprint' ? 'Preprint' : p.venue)}</span>.</p>
        <p class="findings">${esc(p.findings)}</p>
        <div class="chips">${tags.map(chip).join('')}</div>
      </div>${detail}</li>`;
  }).join('');
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
      if (!n) return `<td class="cell"><button type="button" class="zero" data-r="${esc(r.value)}" data-c="${esc(c.value)}" data-n="0" aria-label="No papers tagged ${esc(R.name + ':' + r.value)} and ${esc(C.name + ':' + c.value)}"></button></td>`;
      const s = step(n);
      return `<td class="cell"><button type="button" data-r="${esc(r.value)}" data-c="${esc(c.value)}" data-n="${n}"
        style="background:var(--seq-${s});color:${s <= 3 ? 'var(--seq-ink-light)' : 'var(--seq-ink-dark)'}"
        aria-label="${n} papers tagged ${esc(R.name + ':' + r.value)} and ${esc(C.name + ':' + c.value)}. Select to list them.">${n}</button></td>`;
    }).join('')}<td class="rowtotal">${rowTot}</td></tr>`;
  }).join('');
  const foot = `<tr><th scope="row" class="total">all</th>${colTot.map(n => `<td class="coltotal">${n}</td>`).join('')}<td class="coltotal">${filtered.length}</td></tr>`;
  $('matrixWrap').innerHTML = filtered.length
    ? `<table class="matrix"><caption class="visually-hidden">${esc(R.label)} by ${esc(C.label)}, paper counts</caption><thead>${head}</thead><tbody>${body}${foot}</tbody></table>`
    : '<p class="empty">No papers match these filters, so there is nothing to cross-tabulate.</p>';
  $('legend').innerHTML = `<span>Fewer papers</span><span class="ramp">${Array.from({ length: STEPS }, (_, i) => `<span style="background:var(--seq-${i + 1})"></span>`).join('')}</span><span>More (max ${max})</span><span class="hatch"></span><span>No papers</span>`;
}

function showTip(b) {
  const tip = $('tooltip');
  const n = +b.dataset.n;
  tip.innerHTML = `<strong>${n ? n + (n === 1 ? ' paper' : ' papers') : 'No papers'}</strong><br>${esc(state.rowNs + ':' + b.dataset.r)}<br>${esc(state.colNs + ':' + b.dataset.c)}`;
  tip.hidden = false;
  const r = b.getBoundingClientRect();
  const x = Math.min(window.innerWidth - tip.offsetWidth - 8, Math.max(8, r.left + r.width / 2 - tip.offsetWidth / 2));
  const y = r.top - tip.offsetHeight - 8 < 8 ? r.bottom + 8 : r.top - tip.offsetHeight - 8;
  tip.style.left = x + 'px'; tip.style.top = y + 'px';
}
function hideTip() { $('tooltip').hidden = true; }

function renderLinks(filtered) {
  const inSet = new Set(filtered.map(p => p.key));
  const all = filtered.flatMap(p => p.relations.map(r => ({ ...r, source: p.key })));
  const verbCount = v => all.filter(r => r.verb === v).length;
  $('verbs').innerHTML = Object.keys(VERB_LABEL).map(v => `<button class="toggle" type="button" data-verb="${v}" aria-pressed="${state.verbs.has(v)}">${VERB_LABEL[v]}<span class="n">${verbCount(v)}</span></button>`).join('');
  const shown = all.filter(r => state.verbs.has(r.verb))
    .sort((a, b) => (BYKEY.get(b.source)?.year || 0) - (BYKEY.get(a.source)?.year || 0) || a.source.localeCompare(b.source));
  $('links').innerHTML = shown.length ? shown.map(r => `<li>
      <div class="pair">${paperRef(r.source)} <span class="verb ${esc(r.verb)}">${esc(VERB_LABEL[r.verb] || r.verb)}</span> ${paperRef(r.target)}${inSet.has(r.target) ? '' : ''}</div>
      <p class="note">${esc(r.note)}</p></li>`).join('')
    : '<li class="empty">No links of the selected types among the papers that match your filters. Turn on another link type or remove a filter.</li>';
}

init();
