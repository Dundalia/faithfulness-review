"""Apply the accuracy check of a plain-language rewrite: corrected pair texts and edits; update the claims file.

  python3 runs/D_definitions/apply_plain.py FILE.md EQUIV.json PAIRS.json [CLAIMS.json]
"""
import json, sys
md_path, eq_path, pairs_path = sys.argv[1:4]
claims_path = sys.argv[4] if len(sys.argv) > 4 else None
md = open(md_path).read()
eq = json.load(open(eq_path)); pairs = json.load(open(pairs_path))['pairs']
for i, p in enumerate(pairs, 1): p.setdefault('n', i)
by = {p['n']: p for p in pairs}
miss = []
for v in eq.get('pairs', []):
    if v.get('verdict') != 'different' or not v.get('fix_new'): continue
    p = by.get(v['n'])
    if p and md.count(p['new']) == 1: md = md.replace(p['new'], v['fix_new']); p['new'] = v['fix_new']
    else: miss.append(('pair', v['n']))
for e in eq.get('edits', []):
    if md.count(e['old']) == 1:
        md = md.replace(e['old'], e['new'])
        for p in pairs:
            if e['old'] in p['new']: p['new'] = p['new'].replace(e['old'], e['new'])
    else: miss.append(('edit', e['old'][:60], md.count(e['old'])))
open(md_path, 'w').write(md)
json.dump({'pairs': pairs}, open(pairs_path, 'w'), ensure_ascii=False, indent=1)
if claims_path:
    cj = json.load(open(claims_path))
    for c in cj['claims']:
        if c['n'] in by:
            c.setdefault('text_before_plain_rewrite', c['text']); c['text'] = by[c['n']]['new']
    json.dump(cj, open(claims_path, 'w'), ensure_ascii=False, indent=1)
    lost = [c['n'] for c in cj['claims'] if md.count(c['text']) < 1]
else:
    lost = [p['n'] for p in pairs if md.count(p['new']) < 1]
print('not applied:', miss, '| statements not found in the file:', lost, '| em dashes:', md.count('—'))
