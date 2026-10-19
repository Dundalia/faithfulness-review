"""Write the two pilot codings to pilot/A and pilot/B and summarize agreement in pilot/report.md.
Usage: python3 pilot_compare.py <pilot_results.json>   (list of codings with key, coder, tags, ...)"""
import json, sys
from collections import defaultdict
from records import MAP, read, render_body, PAPERS


def ns_split(tags):
    d = defaultdict(set)
    for t in tags:
        ns, _, v = t.partition(":")
        d[ns].add(v)
    return d


def jacc(a, b):
    return len(a & b) / len(a | b) if a | b else 1.0


def main():
    codings = json.load(open(sys.argv[1]))
    by_key = defaultdict(dict)
    for c in codings:
        by_key[c["key"]][c["coder"]] = c
    for coder in ("A", "B"):
        (MAP / "pilot" / coder).mkdir(parents=True, exist_ok=True)
    ns_scores, rows, coined, unsure = defaultdict(list), [], [], []
    for key in sorted(by_key):
        stub = read(PAPERS / f"{key}.md")
        for coder, c in by_key[key].items():
            tags = [t for t in stub["tags"] if t.startswith("source:")] + c["tags"]
            (MAP / "pilot" / coder / f"{key}.md").write_text(
                f"# {key} — coder {coder}\n\n{stub['title']}\n\ntags: [{', '.join(tags)}]\n\n" + render_body(c))
            coined += [(key, coder, n["tag"], n["definition"]) for n in c["new_tags"]]
            unsure += [(key, coder, u) for u in c["uncertain"]]
        if set(by_key[key]) != {"A", "B"}:
            rows.append((key, None, "only one coding"))
            continue
        a, b = ns_split(by_key[key]["A"]["tags"]), ns_split(by_key[key]["B"]["tags"])
        diffs = []
        for ns in sorted(set(a) | set(b)):
            j = jacc(a[ns], b[ns])
            ns_scores[ns].append(j)
            if j < 1:
                diffs.append(f"**{ns}**: A only {sorted(a[ns] - b[ns]) or '–'}, B only {sorted(b[ns] - a[ns]) or '–'}")
        allA = {t for t in by_key[key]["A"]["tags"] if not t.startswith(("model:", "metric:"))}
        allB = {t for t in by_key[key]["B"]["tags"] if not t.startswith(("model:", "metric:"))}
        rows.append((key, jacc(allA, allB), "<br>".join(diffs)))
    out = ["# Pilot Report", "", "Agreement is Jaccard overlap between coder A's and coder B's tags (1 = identical).", "",
           "## Agreement by namespace", "", "| Namespace | Mean agreement | Papers |", "| --- | --- | --- |"]
    for ns, s in sorted(ns_scores.items(), key=lambda x: sum(x[1]) / len(x[1])):
        out.append(f"| {ns} | {sum(s) / len(s):.2f} | {len(s)} |")
    out += ["", "## Agreement by paper (excluding model: and metric:)", "", "| Paper | Agreement | Disagreements |", "| --- | --- | --- |"]
    for key, j, d in sorted(rows, key=lambda r: (r[1] is None, r[1] or 0)):
        out.append(f"| {key} | {'–' if j is None else f'{j:.2f}'} | {d or '–'} |")
    out += ["", "## Coined tags", ""] + [f"- `{t}` ({k}, {c}): {d}" for k, c, t, d in coined]
    out += ["", "## Coder uncertainty", ""] + [f"- {k} ({c}): {u}" for k, c, u in unsure]
    (MAP / "pilot" / "report.md").write_text("\n".join(out) + "\n")
    print("\n".join(out[:40]))


main()
