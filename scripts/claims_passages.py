"""For each claim, the paragraphs of its papers' full texts that bear on it: a compact file for the verifier.

  python3 scripts/claims_passages.py FAMILY OUTDIR [N1-N2]   (OUTDIR: cache/passages, which is gitignored)
"""
import json, re, sys
from pathlib import Path
sys.path.insert(0, 'scripts')
from definitions import norm
fam, out = sys.argv[1], Path(sys.argv[2])
lo, hi = map(int, sys.argv[3].split('-')) if len(sys.argv) > 3 else (1, 10**6)
claims = [c for c in json.load(open(f'runs/D_definitions/claims_{fam}.json'))['claims'] if lo <= c['n'] <= hi]
STOP = set('the a an of to in and or for on by with as is are be that this which from at its it their they not was were has have than into over under between also only'.split())
words = lambda s: [w for w in re.findall(r"[a-z0-9]+", norm(s).lower()) if w not in STOP]
shingles = lambda ws, k=4: {tuple(ws[i:i + k]) for i in range(len(ws) - k + 1)}
cache = {}
def paras(key):
    if key not in cache:
        p = Path(f'cache/full/{key}.txt'); cur, ps = '', []
        for block in (p.read_text(errors='ignore').split('\n\n') if p.exists() else []):
            if block.startswith('## '): cur = block[3:].strip()
            m = re.match(r'\[P(\d+)\] (.*)', block, re.S)
            if m: ps.append((int(m.group(1)), cur, m.group(2)))
        cache[key] = ps
    return cache[key]
L = []
for c in claims:
    probe = c['text'] + ' ' + ' '.join(c.get('evidence', []))
    spans = [norm(s).strip(' .,') for s in re.findall(r'["“]([^"“”]{12,}?)["”]', probe)]
    sh, ws = shingles(words(probe)), set(words(c['text']))
    L.append(f"## Claim {c['n']}\n\n{c['text']}\n\nPapers: {', '.join(c.get('papers', []))}\nEvidence given: {' | '.join(c.get('evidence', []))[:800]}\n")
    for k in c.get('papers', [])[:6]:
        scored = []
        for n, head, t in paras(k):
            nt = norm(t)
            s = 100 * sum(1 for x in spans if x and x in nt) + 3 * len(sh & shingles(words(t))) + 0.1 * len(ws & set(words(t)))
            scored.append((s, n, head, t))
        top = sorted([x for x in scored if x[0] >= 3], reverse=True)[:3] or sorted(scored, reverse=True)[:1]
        for s, n, head, t in sorted(top, key=lambda x: x[1]):
            L.append(f"### {k} [P{n}] ({head[:60]})\n{t[:1400]}\n")
        if not paras(k): L.append(f"### {k}: no full text in cache/full\n")
out.mkdir(parents=True, exist_ok=True)
f = out / f'passages_{fam}_{lo}.md'
f.write_text('\n'.join(L))
print(f, len(claims), 'claims', len('\n'.join(L)) // 1000, 'k chars')
