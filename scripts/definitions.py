"""Definitions of faithfulness, counterfactual and monitorability: excerpts, quote checks, CSV.

  python3 definitions.py excerpt [key ...]   cache/<key>.{txt,pdf} -> cache/defs/<key>.txt
  python3 definitions.py check FILE.json     report quotes not found verbatim in the full text
  python3 definitions.py build               runs/D_definitions/batch_*.json -> definitions.csv

An excerpt keeps every section (heading to heading) that mentions a term, with
paragraph numbers [P#] and section headings, and drops the reference list and
appendix sections unless their heading suggests definitions. Whole sections,
not single paragraphs: in the pilot, definitions written as list items or
named properties often did not repeat the term itself.
"""
import csv, json, re, subprocess, sys
from pathlib import Path

MAP = Path(__file__).resolve().parent.parent
CACHE, DEFS, RUNS = MAP / "cache", MAP / "cache" / "defs", MAP / "runs" / "D_definitions"
TERM = re.compile(r"faithful|counterfactual|monitorab|legib|obfuscat|steganograph|encoded reasoning", re.I)
HEADING = re.compile(
    r"^(?:(?:Appendix\s+)?[A-Z]?\d+(?:\.\d+)*\.?\s+[A-Z]|[A-H](?:\.\d+)*\s+[A-Z]|"
    r"(?:Abstract|Introduction|Related [Ww]ork|Background|Preliminaries|Definitions?|"
    r"Discussion|Conclusions?|Limitations)\b)")
APPDEF = re.compile(r"defin|faithful|monitorab|counterfactual|metric|formal|notation|prelim", re.I)
REFS = re.compile(r"^(?:\d+\s+)?(?:References|Bibliography)\s*$", re.M)
FIELDS = ["key", "family", "term", "related", "kind", "stance", "source", "where", "quote", "gloss"]


def full_text(key):
    txt, pdf = CACHE / f"{key}.txt", CACHE / f"{key}.pdf"
    if txt.exists():
        return txt.read_text(errors="ignore")
    return subprocess.run(["pdftotext", "-q", str(pdf), "-"], capture_output=True, text=True).stdout


def paragraphs(text):
    return [p for p in (re.sub(r"\s*\n\s*", " ", p).strip() for p in re.split(r"\n\s*\n", text)) if p]


def drop_references(text):
    """Cut the reference list; mark where an appendix after it starts."""
    m = REFS.search(text)
    if not m:
        return text
    rest = text[m.end():]
    app = re.search(r"^\s*(?:Appendix\b|[A-H](?:\.\d*)?\s+[A-Z][a-z])", rest, re.M)
    return text[:m.start()] + ("\n\nAPPENDIX\n\n" + rest[app.start():] if app else "")


def excerpt(text):
    paras = paragraphs(drop_references(text))
    heads, cur = [], ""
    for p in paras:
        if p == "APPENDIX":
            cur = "[appendix]"
        elif len(p) < 90 and HEADING.match(p):
            cur = "[appendix] " + p if cur.startswith("[appendix]") else p
        heads.append(cur)
    hit = {heads[i] for i, p in enumerate(paras) if TERM.search(p)}
    keep = [i for i in range(len(paras)) if heads[i] in hit
            and not (heads[i].startswith("[appendix]") and not APPDEF.search(heads[i]))]
    out, last, prev = [], None, None
    for i in keep:
        if prev is not None and i != prev + 1:
            out.append("[...]")
        if heads[i] != last:
            out.append(f"## {heads[i] or '(front matter)'}")
            last = heads[i]
        out.append(f"[P{i}] {paras[i]}")
        prev = i
    return "\n\n".join(out)


def norm(s):
    s = s.translate(str.maketrans("’‘“”—–", "''\"\"--"))
    return re.sub(r"\s+", " ", s).strip()


def unverified(entries):
    texts = {}
    for e in entries:
        if e["key"] not in texts:
            texts[e["key"]] = norm(full_text(e["key"]))
    return [e for e in entries if norm(e["quote"]) not in texts[e["key"]]]


def entries_of(path):
    data = json.loads(Path(path).read_text())
    return [dict(e, key=p["key"]) for p in data["papers"] for e in p["entries"]]


def main():
    cmd, args = sys.argv[1], sys.argv[2:]
    if cmd == "excerpt":
        DEFS.mkdir(parents=True, exist_ok=True)
        keys = args or sorted(f.stem for f in (MAP / "papers").glob("*.md"))
        for k in keys:
            (DEFS / f"{k}.txt").write_text(excerpt(full_text(k)))
        print(f"{len(keys)} excerpts in {DEFS}")
    elif cmd == "check":
        bad = unverified(entries_of(args[0]))
        for e in bad:
            print(f"NOT VERBATIM {e['key']} | {e['term']} | {e['quote'][:100]}")
        print(f"{len(bad)} of {len(entries_of(args[0]))} quotes not found verbatim")
    elif cmd == "build":
        rows = []
        for f in sorted(RUNS.glob("batch_*.json")):
            for p in json.loads(f.read_text())["papers"]:
                rows += [dict(e, key=p["key"], id=f"{p['key']}#{i}") for i, e in enumerate(p["entries"], 1)]
        # clusters from the synthesis step: runs/D_definitions/synth_<family>.json
        cluster = {i: c["id"] for f in RUNS.glob("synth_*.json")
                   for c in json.loads(f.read_text())["clusters"] for i in c["entries"]}
        bad = {id(e) for e in unverified(rows)}
        with open(MAP / "definitions.csv", "w", newline="") as fh:
            w = csv.DictWriter(fh, fieldnames=["id"] + FIELDS + ["cluster", "verbatim"], extrasaction="ignore")
            w.writeheader()
            for e in sorted(rows, key=lambda e: (e["key"], int(e["id"].split("#")[1]))):
                w.writerow(dict(e, cluster=cluster.get(e["id"], ""), verbatim="no" if id(e) in bad else "yes"))
        print(f"{len(rows)} definitions from {len({e['key'] for e in rows})} papers, {len(bad)} not verbatim")


if __name__ == "__main__":
    main()
