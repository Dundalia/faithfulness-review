"""Check every quoted span in a claims file verbatim against the full texts of the claim's papers."""
import json, re, sys
sys.path.insert(0, 'scripts')
from definitions import full_text, norm
fam = sys.argv[1]
claims = json.load(open(f'runs/D_definitions/claims_{fam}.json'))['claims']
texts, bad, n = {}, [], 0
for c in claims:
    spans = [s for s in re.findall(r'["“]([^"“”]{12,}?)["”]', c['text'])]
    for s in spans:
        n += 1
        found = False
        for k in c.get('papers', []):
            if k not in texts:
                try: texts[k] = norm(full_text(k))
                except Exception: texts[k] = ''
            if norm(s.strip(' .,')) in texts[k]: found = True; break
        if not found: bad.append(f"claim {c['n']} | papers {','.join(c.get('papers', []))} | \"{s}\"")
print(f"{fam}: {len(claims)} claims, {n} quoted spans, {len(bad)} not found verbatim in the claim's papers")
print('\n'.join(bad))
