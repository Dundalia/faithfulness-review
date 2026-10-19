"""Create stub records for newly screened papers.
Usage: python3 scripts/add_papers.py <screen_results.json> <source-tag> <YYYY-MM-DD>
Input: list of {cid?, include, key, title, authors, year, venue, url, list, evidence, duplicate_of?}; only include=true
entries without duplicate_of are added. Existing keys are never overwritten."""
import json, re, sys
from records import MAP, PAPERS, write


def main():
    papers, source, today = json.load(open(sys.argv[1])), sys.argv[2], sys.argv[3]
    log_path = MAP / "meta_log.json"
    log = json.loads(log_path.read_text()) if log_path.exists() else {}
    added, skipped = [], []
    for p in papers:
        if not p.get("include") or p.get("duplicate_of"):
            continue
        key = re.sub(r"[^a-z0-9-]", "", p["key"].lower())
        if (PAPERS / f"{key}.md").exists():
            skipped.append(key); continue
        write({"key": key, "title": p["title"], "authors": p["authors"], "year": p["year"], "venue": p["venue"] or "preprint",
               "url": p["url"], "checked": today, "tags": [f"source:{source}"], "body": ""})
        log[key] = {"evidence": p.get("evidence", ""), "changed": "new", "confident": True, "checked": today, "list": p.get("list", "")}
        added.append(key)
    log_path.write_text(json.dumps(log, indent=1, sort_keys=True, ensure_ascii=False))
    print(f"added {len(added)} stubs; skipped existing keys: {skipped}")
    print(json.dumps(added))


main()
