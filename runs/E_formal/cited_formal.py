"""Phase 0: works cited by several map papers but absent from the map, from the papers' reference lists.

Signals: arXiv ids, and normalized title-like segments of reference entries. Output: runs/E_formal/cited_outside.json.
"""
import csv, json, re, sys
from collections import defaultdict
from pathlib import Path
sys.path.insert(0, 'scripts')
from definitions import full_text, REFS
idx = list(csv.DictReader(open('index.csv')))
inmap_ids = {m for r in idx for m in re.findall(r'(\d{4}\.\d{4,5})', r['url'])}
inmap_titles = {re.sub(r'[^a-z0-9]+', ' ', r['title'].lower()).strip() for r in idx}
norm = lambda s: re.sub(r'[^a-z0-9]+', ' ', s.lower()).strip()
by_id, by_title, ctx = defaultdict(set), defaultdict(set), {}
for r in idx:
    t = full_text(r['key'])
    m = REFS.search(t)
    refs = t[m.end():] if m else t[-int(len(t) * 0.25):]
    refs = re.sub(r'\s+', ' ', refs)
    for a in set(re.findall(r'(?<!\d)(\d{4}\.\d{4,5})(?:v\d)?', refs)):
        if a not in inmap_ids:
            by_id[a].add(r['key']); i = refs.find(a); ctx.setdefault(a, refs[max(0, i - 220):i])
    for seg in re.split(r'(?<=[a-z0-9\)])\. (?=[A-Z])', refs):
        w = seg.split()
        if 4 <= len(w) <= 22 and not re.search(r'\b(19|20)\d\d\b', seg) and sum(x[:1].isupper() for x in w) < len(w) * 0.9:
            k = norm(seg)
            if k and k not in inmap_titles and len(k) > 25: by_title[k].add(r['key'])
top_ids = sorted(((len(v), a) for a, v in by_id.items() if len(v) >= 3), reverse=True)
top_titles = sorted(((len(v), k) for k, v in by_title.items() if len(v) >= 3), reverse=True)
json.dump({'arxiv': [{'id': a, 'citing': n, 'context': ctx[a][-200:]} for n, a in top_ids],
           'titles': [{'title': k, 'citing': n} for n, k in top_titles]}, open('runs/E_formal/cited_outside.json', 'w'), indent=1)
print(len(top_ids), 'arXiv ids and', len(top_titles), 'title segments cited by 3+ map papers and not in the map')
