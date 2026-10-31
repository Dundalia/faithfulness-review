"""Definitions of faithfulness, counterfactual and monitorability: texts for the agents, quote checks, CSV.

  python3 definitions.py excerpt [key ...]   cache/<key>.{txt,pdf} -> cache/defs/<key>.txt (first pass)
  python3 definitions.py fulltext [key ...]  cache/<key>.{txt,pdf} -> cache/full/<key>.txt (second pass)
  python3 definitions.py check FILE.json     report quotes not found verbatim in the full text
  python3 definitions.py rows KEY            the current definitions of one paper
  python3 definitions.py dump FAMILY         the current definitions of one family, as JSON
  python3 definitions.py borrowers SRC ...   definitions that cite one of these sources
  python3 definitions.py borrowers --others SRC,SRC,... a-l
                                             ... that cite any other source in the map, first letter in a-l
  python3 definitions.py build               runs/D_definitions/ -> definitions.csv

Records: runs/D_definitions/batch_*.json hold the first extraction; gap_*.json hold the
second pass over the full texts (rows added, fixed or dropped); attr_*.json hold the
check of each borrowed definition against its source; synth_<family>.json hold the
clusters. A row's id is <key>#<i>, numbered within the paper; added rows continue the
numbering and dropped rows keep their number unused.

An excerpt keeps every section (heading to heading) that mentions a term, with
paragraph numbers [P#] and section headings, and drops the reference list and
appendix sections unless their heading suggests definitions. The second pass found
that this loses definitions in methods and appendices, so it reads the full text,
which keeps every section and the appendices but drops the reference list and
table rows that are mostly numbers.
"""
import csv, json, re, subprocess, sys
from pathlib import Path

MAP = Path(__file__).resolve().parent.parent
CACHE, RUNS = MAP / "cache", MAP / "runs" / "D_definitions"
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


def sections(text):
    """Paragraphs and the heading each one falls under."""
    paras = paragraphs(drop_references(text))
    heads, cur = [], ""
    for p in paras:
        if p == "APPENDIX":
            cur = "[appendix]"
        elif len(p) < 90 and HEADING.match(p):
            cur = "[appendix] " + p if cur.startswith("[appendix]") else p
        heads.append(cur)
    return paras, heads


def render(paras, heads, keep):
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


def excerpt(text):
    paras, heads = sections(text)
    hit = {heads[i] for i, p in enumerate(paras) if TERM.search(p)}
    keep = [i for i in range(len(paras)) if heads[i] in hit
            and not (heads[i].startswith("[appendix]") and not APPDEF.search(heads[i]))]
    return render(paras, heads, keep)


def full(text):
    paras, heads = sections(text)
    numeric = lambda p: p.startswith("|") and len(re.findall(r"[A-Za-z]{4,}", p)) < 4
    return render(paras, heads, [i for i, p in enumerate(paras) if p != "APPENDIX" and not numeric(p)])


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
    """Every quote a batch or gap file asserts: entries, added rows, and fixed quotes."""
    out = []
    for p in json.loads(Path(path).read_text())["papers"]:
        out += [dict(e, key=p["key"]) for e in p.get("entries", []) + p.get("add", [])]
        out += [dict(f["set"], key=p["key"], term=f["id"]) for f in p.get("fix", []) if "quote" in f.get("set", {})]
    return out


def merged():
    """Current rows: the first extraction with the second pass's fixes, drops and additions applied."""
    rows, count = {}, {}
    for f in sorted(RUNS.glob("batch_*.json")):
        for p in json.loads(f.read_text())["papers"]:
            count[p["key"]] = len(p["entries"])
            for i, e in enumerate(p["entries"], 1):
                rows[f"{p['key']}#{i}"] = dict(e, key=p["key"], id=f"{p['key']}#{i}")
    for f in sorted(RUNS.glob("gap_*.json")):
        for p in json.loads(f.read_text())["papers"]:
            k = p["key"]
            for fx in p.get("fix", []):
                if fx["id"] in rows:
                    rows[fx["id"]].update(fx["set"])
            for dr in p.get("drop", []):
                rows.pop(dr["id"], None)
            for e in p.get("add", []):
                count[k] = count.get(k, 0) + 1
                rows[f"{k}#{count[k]}"] = dict(e, key=k, id=f"{k}#{count[k]}")
    return sorted(rows.values(), key=lambda e: (e["key"], int(e["id"].split("#")[1])))


def sources(e):
    return [s.strip() for s in e.get("source", "").split(";") if s.strip()]


def main():
    cmd, args = sys.argv[1], sys.argv[2:]
    keys = sorted(f.stem for f in (MAP / "papers").glob("*.md"))
    if cmd in ("excerpt", "fulltext"):
        out = CACHE / ("defs" if cmd == "excerpt" else "full")
        out.mkdir(parents=True, exist_ok=True)
        for k in args or keys:
            (out / f"{k}.txt").write_text((excerpt if cmd == "excerpt" else full)(full_text(k)))
        print(f"{len(args or keys)} texts in {out}")
    elif cmd == "check":
        es = entries_of(args[0])
        bad = unverified(es)
        for e in bad:
            print(f"NOT VERBATIM {e['key']} | {e['term']} | {e['quote'][:100]}")
        print(f"{len(bad)} of {len(es)} quotes not found verbatim")
    elif cmd == "rows":
        for e in merged():
            if e["key"] == args[0]:
                print(f"{e['id']} | {e['family']} | {e['term']} | {e['kind']} | {e['stance']} | {e.get('source', '')} | {e['where']}\n    {e['quote']}\n    gloss: {e['gloss']}")
    elif cmd == "dump":
        print(json.dumps([e for e in merged() if e["family"] == args[0]], ensure_ascii=False, indent=0))
    elif cmd == "borrowers":
        inmap = set(keys)
        if args[0] == "--others":
            excluded, (lo, hi) = set(args[1].split(",")), args[2].split("-")
            want = lambda s: s in inmap and s not in excluded and lo <= s[0] <= hi
        else:
            want = lambda s: s in args
        for e in merged():
            hit = [s for s in sources(e) if want(s)]
            if e["stance"] != "proposed" and hit:
                print(f"{e['id']} | cites {', '.join(hit)} | {e['term']} | {e['stance']} | {e['where']}\n    {e['quote']}\n    gloss: {e['gloss']}")
    elif cmd == "build":
        rows = merged()
        cluster = {i: c["id"] for f in RUNS.glob("synth_*.json")
                   for c in json.loads(f.read_text())["clusters"] for i in c["entries"]}
        checks = {}
        for f in sorted(RUNS.glob("attr_*.json")):
            for c in json.loads(f.read_text())["checks"]:
                checks.setdefault(c["entry"], []).append(f"{c['source']}: {c['verdict']}")
        bad = {e["id"] for e in unverified(rows)}
        with open(MAP / "definitions.csv", "w", newline="") as fh:
            w = csv.DictWriter(fh, fieldnames=["id"] + FIELDS + ["cluster", "attribution", "verbatim"], extrasaction="ignore")
            w.writeheader()
            for e in rows:
                w.writerow(dict(e, cluster=cluster.get(e["id"], ""), attribution=" | ".join(checks.get(e["id"], [])),
                                verbatim="no" if e["id"] in bad else "yes"))
        print(f"{len(rows)} definitions from {len({e['key'] for e in rows})} papers, {len(bad)} not verbatim, "
              f"{sum(1 for e in rows if e['id'] not in cluster)} without a cluster")


if __name__ == "__main__":
    main()
