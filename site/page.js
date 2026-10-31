'use strict';

const REPO_BLOB = 'https://github.com/Dundalia/faithfulness-review/blob/main/';
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// GitHub's heading slugs, so in-page links written for the Markdown file also work here.
const slug = s => s.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s/g, '-');

/* ---------- math ---------- */
// Math is cut out before Markdown parsing, so marked cannot eat backslashes, underscores or asterisks,
// and put back afterwards as KaTeX. The placeholders use private-use characters that never occur in text.
function protectMath(src) {
  const math = [];
  const hold = display => (_, tex) => `${math.push({ tex, display }) - 1}`;
  src = src.replace(/\$\$([\s\S]+?)\$\$/g, hold(true)).replace(/\$((?:\\.|[^$\\\n])+?)\$/g, hold(false));
  return { src, math };
}
function restoreMath(html, math) {
  return html.replace(/(\d+)/g, (_, i) => {
    const { tex, display } = math[i];
    return window.katex ? katex.renderToString(tex, { displayMode: display, throwOnError: false }) : `<code>${esc(tex)}</code>`;
  });
}

/* ---------- page ---------- */
async function init() {
  setupTheme();
  const id = new URLSearchParams(location.search).get('doc');
  const page = PAGES.find(p => p.id === id);
  $('pages').innerHTML = `<a href="./">All entries</a><span class="sep" aria-hidden="true"></span>` +
    PAGES.map(p => `<a href="page.html?doc=${p.id}"${p === page ? ' aria-current="page"' : ''}>${esc(p.label)}</a>`).join('');
  if (!page) { fail(`There is no page called "${esc(id || '')}". <a href="./">Back to the index</a>.`); return; }

  let text;
  try {
    const r = await fetch(`pages/${page.id}.md`);
    if (!r.ok) throw new Error(r.status);
    text = await r.text();
  } catch (e) {
    fail('The page could not be loaded. Serve the site folder over HTTP: <code>python3 -m http.server -d site 8000</code>.');
    return;
  }
  if (!window.marked) { fail('The Markdown renderer could not be loaded. Check the connection and reload the page.'); return; }

  const { src, math } = protectMath(text);
  const doc = $('doc');
  doc.innerHTML = restoreMath(marked.parse(src), math);
  // Repeated headings get -1, -2, ... as on GitHub, so each one has its own anchor.
  const seen = new Map();
  doc.querySelectorAll('h1, h2, h3, h4').forEach(h => {
    if (h.id) return;
    const base = slug(h.textContent), n = seen.get(base) || 0;
    h.id = n ? `${base}-${n}` : base;
    seen.set(base, n + 1);
  });
  setupToc(doc);
  doc.querySelectorAll('table').forEach(t => {
    const wrap = document.createElement('div');
    wrap.className = 'table-scroll';
    t.replaceWith(wrap); wrap.append(t);
  });
  const h1 = doc.querySelector('h1');
  if (h1) document.title = `${h1.textContent} · CoT Faithfulness and Monitorability`;
  $('source').href = `${REPO_BLOB}site/pages/${page.id}.md`;
  if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
}

/* ---------- contents ---------- */
// Sections and subsections in the left margin; on narrow screens, a collapsed box above the text.
function setupToc(doc) {
  const heads = [...doc.querySelectorAll('h2, h3')];
  if (heads.length < 3) return;
  const toc = $('toc');
  toc.innerHTML = `<details><summary class="toc-title">Contents</summary><ol>${heads.map(h =>
    `<li class="toc-${h.tagName.toLowerCase()}"><a href="#${h.id}">${h.innerHTML}</a></li>`).join('')}</ol></details>`;
  toc.hidden = false;
  const box = toc.querySelector('details');
  const wide = window.matchMedia('(min-width: 1200px)');
  const sync = () => { box.open = wide.matches; };
  sync(); wide.addEventListener('change', sync);

  const links = new Map([...toc.querySelectorAll('a')].map(a => [a.getAttribute('href').slice(1), a]));
  let current = null, queued = false;
  const mark = () => {
    queued = false;
    let id = heads[0].id;
    for (const h of heads) { if (h.getBoundingClientRect().top > 90) break; id = h.id; }
    if (id === current) return;
    links.get(current)?.removeAttribute('aria-current');
    current = id;
    const a = links.get(id);
    a.setAttribute('aria-current', 'location');
    if (wide.matches && (a.offsetTop < toc.scrollTop || a.offsetTop > toc.scrollTop + toc.clientHeight - 40)) toc.scrollTop = a.offsetTop - toc.clientHeight / 3;
  };
  window.addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(mark); } }, { passive: true });
  mark();
}

function fail(html) { $('doc').innerHTML = `<p class="doc-status">${html}</p>`; }

function setupTheme() {
  const btn = $('themeToggle');
  const setTheme = t => {
    document.documentElement.setAttribute('data-theme', t);
    btn.textContent = t === 'dark' ? 'Light' : 'Dark';
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    try { localStorage.setItem('theme', t); } catch (e) { /* storage unavailable: theme lasts for this visit */ }
  };
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  btn.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
}

init();
