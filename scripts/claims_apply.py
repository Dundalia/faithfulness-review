"""Apply claim-check verdicts to a section of the definitions page.

Each non-supported claim is replaced by the checker's replacement (an exact substring swap: every claim text
occurs once in runs/D_definitions/synth_<family>.md), coherence fixes are applied, and the verdict is recorded
in claims_<family>.json: first check in verdict/status, second in verdict2/status2 (--pass2), third in
verdict3/status3 (--pass3).

  python3 scripts/claims_apply.py FAMILY RESULT.json ... [--pass2|--pass3] [--dry]
"""
import json, sys, glob
from collections import Counter
fam, files = sys.argv[1], [f for a in sys.argv[2:] if not a.startswith('--') for f in glob.glob(a)]
P2 = '--pass2' in sys.argv or '--pass3' in sys.argv
SUF = '3' if '--pass3' in sys.argv else '2'  # second independent check: record in verdict2/status2, keep the first-pass fields
dry = '--dry' in sys.argv
R = 'runs/D_definitions'
md = open(f'{R}/synth_{fam}.md').read()
cj = json.load(open(f'{R}/claims_{fam}.json')); claims = {c['n']: c for c in cj['claims']}
res, other = {}, []
for f in files:
    d = json.load(open(f))
    for x in d.get('results', d.get('claims', [])): res[x['n']] = x
    other += d.get('other_problems', [])
miss, dash = [], []
for n in sorted(res):
    x, c = res[n], claims.get(n)
    if c is None: miss.append((n, 'no such claim')); continue
    V, ST = (f'verdict{SUF}', f'status{SUF}') if P2 else ('verdict', 'status')
    c[V] = x['verdict']
    if x['verdict'] == 'supported': c[ST] = 'verified'; continue
    rep = (x.get('replacement') or '').strip()
    if not rep: c[ST] = 'flagged'; miss.append((n, 'no replacement')); continue
    if '—' in rep: dash.append(n); rep = rep.replace(' — ', ', ').replace('—', ', ')
    if md.count(c['text']) != 1: miss.append((n, f"text occurs {md.count(c['text'])} times")); c[ST] = 'flagged'; continue
    md = md.replace(c['text'], rep, 1)
    c.update({'text': rep, ST: 'revised', (f'reason{SUF}' if P2 else 'reason'): x.get('reason', ''), (f'evidence{SUF}' if P2 else 'evidence_check'): x.get('evidence', [])})
coh = [c for f in files for c in json.load(open(f)).get('coherence', [])]
napplied = 0
for fx in coh:
    o, nw = fx.get('old', ''), fx.get('new', '')
    if not o or md.count(o) != 1: miss.append(('coherence', f"old occurs {md.count(o)} times: {o[:60]}")); continue
    if '—' in nw: nw = nw.replace(' — ', ', ').replace('—', ', ')
    md = md.replace(o, nw, 1); napplied += 1
    for c in claims.values():
        if o in c['text']: c['text'] = c['text'].replace(o, nw)
        elif c['text'] in o or (c['text'] not in md): c['text_check'] = 'claim text changed by a coherence fix; verify'
lost = [n for n, c in claims.items() if c['text'] not in md]
print('coherence fixes applied', napplied, 'of', len(coh), '| claims no longer verbatim on the page:', lost)
print(fam, 'verdicts', dict(Counter(x['verdict'] for x in res.values())), '| unchecked', len(claims) - len(res))
print('not applied:', miss); print('em dashes fixed in', dash); print('other problems:', len(other))
if not dry:
    open(f'{R}/synth_{fam}.md', 'w').write(md)
    json.dump(cj, open(f'{R}/claims_{fam}.json', 'w'), ensure_ascii=False, indent=1)
    prev = json.load(open(f'{R}/other_problems_{fam}.json')) if __import__('os').path.exists(f'{R}/other_problems_{fam}.json') else []
    json.dump(prev + [o for o in other if o not in prev], open(f'{R}/other_problems_{fam}.json', 'w'), ensure_ascii=False, indent=1)
