"""Write verified records into papers/, applying the consolidation mapping, and add new tags to tags.yaml.
Usage: python3 apply_records.py <B_result.json>   (workflow result: {records, consolidation, ...})"""
import json, re, sys
from records import MAP, PAPERS, read, write, render_body

TAGS = MAP / "tags.yaml"


def vocabulary():
    vocab, ns = set(), None
    for line in TAGS.read_text().splitlines():
        if not line.strip() or line.startswith("#"):
            continue
        m = re.match(r"^([a-z-]+):", line)
        if m:
            ns = m.group(1); continue
        m = re.match(r"^\s+([a-z0-9.-]+):", line)
        if m and ns:
            vocab.add(f"{ns}:{m.group(1)}")
    return vocab


def add_to_yaml(additions):
    """Insert each addition as `  value: definition` at the end of its namespace block (new namespaces go at the end)."""
    lines = TAGS.read_text().splitlines()
    for a in sorted(additions, key=lambda a: a["tag"]):
        ns, _, val = a["tag"].partition(":")
        entry = f"  {val}: {a['definition']}"
        start = next((i for i, l in enumerate(lines) if re.match(rf"^{re.escape(ns)}:", l)), None)
        if start is None:
            src = next(i for i, l in enumerate(lines) if l.startswith("source:"))
            lines[src:src] = [f"{ns}:", entry, ""]
            continue
        end = start + 1
        while end < len(lines) and lines[end].startswith("  "):
            end += 1
        lines.insert(end, entry)
    TAGS.write_text("\n".join(lines) + "\n")


def main():
    res = json.load(open(sys.argv[1]))
    cons = res.get("consolidation") or {"mapping": [], "additions": [], "notes": ""}
    remap = {m["from"]: m["to"] for m in cons["mapping"]}
    vocab = vocabulary()
    added = {a["tag"] for a in cons["additions"] if a["tag"] not in vocab}

    for r in res["records"]:
        tags = []
        for t in r["tags"]:
            t = remap.get(t, t)
            if t and t not in tags and not t.startswith("source:"):
                tags.append(t)
        coined = {}
        for n in r["new_tags"]:
            t = remap.get(n["tag"], n["tag"])
            if t in tags and t not in vocab and t not in added and not t.startswith(("model:", "metric:")):
                coined[t] = n["definition"]
        rec = read(PAPERS / f"{r['key']}.md")
        rec["tags"] = [t for t in rec["tags"] if t.startswith("source:")] + tags
        rec["body"] = render_body(r | {"new_tags": [{"tag": t, "definition": d} for t, d in coined.items()]})
        write(rec)

    add_to_yaml([a for a in cons["additions"] if a["tag"] in added])
    (MAP / "runs" / "B_consolidation.json").write_text(json.dumps(cons, indent=1, ensure_ascii=False))
    print(f"wrote {len(res['records'])} records; {len(remap)} tag remaps; {len(added)} vocabulary additions")


main()
