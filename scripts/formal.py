"""Formal frameworks: paper records and formal definitions from the formal-sweep extraction, quote checks, formal.csv.

  python3 scripts/formal.py records   runs/E_formal/extraction_*.json -> papers/<key>.md (new papers only)
  python3 scripts/formal.py build     runs/E_formal/extraction_*.json (+ checks_*.json) -> formal.csv

Each extraction file holds, per paper, the record and its formal definitions. A check file
({"fixes": [{"id", "set": {...}}], "drops": ["id"], "adds": [{"key", ...}], "record_fixes": [{"key", "old", "new"}]})
applies a second reader's corrections. A row's
id is <key>#f<i>, numbered within the paper. Quotes are checked verbatim against the cached full
text, as in definitions.py; papers without a cached text get verbatim "no text".
"""
import csv, json, sys
from pathlib import Path
from definitions import CACHE, full_text, norm

MAP = Path(__file__).resolve().parent.parent
RUNS = MAP / "runs" / "E_formal"
FIELDS = ["id", "key", "term", "concepts", "concept", "level", "formalism", "quote", "formula",
          "assumptions", "where", "gloss", "relation", "verbatim"]
CONCEPTS = [
    ("completeness and soundness", ("complete", "sound")),
    ("post-hoc rationalization", ("post-hoc", "rationaliz")),
    ("self-report and introspection", ("introspect", "self-report", "self report")),
    ("honesty, lying and deception", ("honest", "lying", "lie", "decept")),
    ("belief and intention", ("belief", "intent")),
    ("scheming and hidden objectives", ("scheming", "sandbag", "hidden objective", "covert goal")),
    ("monitorability", ("monitorab",)),
    ("legibility and checkability", ("legib", "checkab")),
    ("obfuscation", ("obfusc", "opacity")),
    ("steganography and encoded reasoning", ("steganograph", "encoded")),
    ("simulatability", ("simulatab",)),
    ("causal abstraction", ("abstraction",)),
    ("direct and indirect effects", ("direct", "mediat", "path-specific")),
    ("actual causation and explanation", ("actual caus", "explanation", "responsib", "blame")),
    ("usable information", ("usable information", "v-information")),
    ("counterfactuals", ("counterfactual",)),
    ("faithfulness", ("faithful",)),
]


def concept_of(text):
    t = text.lower()
    return next((name for name, keys in CONCEPTS if any(k in t for k in keys)), "other")


def checks():
    return [json.loads(f.read_text()) for f in sorted(RUNS.glob("checks_*.json"))]


def extractions():
    """Papers with their record and definitions; a check's added definitions and record fixes applied."""
    papers = [p for f in sorted(RUNS.glob("extraction_*.json")) for p in json.loads(f.read_text())["papers"]]
    by = {p["key"]: p for p in papers}
    for c in checks():
        for a in c.get("adds", []):
            if a.get("key") in by:
                by[a["key"]].setdefault("definitions", []).append({k: v for k, v in a.items() if k != "key"})
        for fx in c.get("record_fixes", []):
            p = by.get(fx.get("key"))
            if p and fx.get("old") and p["record_markdown"].count(fx["old"]) == 1:
                p["record_markdown"] = p["record_markdown"].replace(fx["old"], fx["new"])
    return papers


def rows():
    out = []
    for p in extractions():
        for i, d in enumerate(p.get("definitions", []), 1):
            cs = [c for c in d.get("concepts", []) if c]
            out.append({**{k: d.get(k, "") for k in FIELDS if k in d}, "id": f"{p['key']}#f{i}", "key": p["key"],
                        "concepts": "; ".join(cs), "concept": concept_of(cs[0]) if cs else concept_of(d.get("term", ""))})
    for c in checks():
        by = {r["id"]: r for r in out}
        for fx in c.get("fixes", []):
            if fx["id"] in by:
                st = dict(fx["set"])
                if isinstance(st.get("concepts"), list):
                    st["concepts"] = "; ".join(st["concepts"])
                by[fx["id"]].update(st)
                if st.get("concepts"):
                    by[fx["id"]]["concept"] = concept_of(st["concepts"].split(";")[0])
        out = [r for r in out if r["id"] not in set(c.get("drops", []))]
    return out


def main():
    cmd = sys.argv[1]
    if cmd == "records":
        n = 0
        for p in extractions():
            path = MAP / "papers" / f"{p['key']}.md"
            if not path.exists():
                path.write_text(p["record_markdown"].rstrip() + "\n"); n += 1
        print(f"{n} new records in papers/")
    elif cmd == "build":
        rs, texts = rows(), {}
        for r in rs:
            k = r["key"]
            if k not in texts:
                has = (CACHE / f"{k}.txt").exists() or (CACHE / f"{k}.pdf").exists()
                texts[k] = norm(full_text(k)) if has else None
            r["verbatim"] = ("no text" if texts[k] is None else "yes" if r["quote"] and norm(r["quote"]) in texts[k]
                             else "no quote" if not r["quote"] else "no")
        with open(MAP / "formal.csv", "w", newline="") as fh:
            w = csv.DictWriter(fh, fieldnames=FIELDS, extrasaction="ignore"); w.writeheader(); w.writerows(rs)
        bad = [r["id"] for r in rs if r["verbatim"] == "no"]
        print(f"{len(rs)} formal definitions from {len({r['key'] for r in rs})} papers, {len(bad)} quotes not verbatim: {bad}")


if __name__ == "__main__":
    main()
