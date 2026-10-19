"""Apply verified metadata to records and log the evidence.
Usage: python3 apply_meta.py <meta_results.json> <YYYY-MM-DD>   (list of {key, title, authors, year, venue, url, evidence, changed, confident})"""
import json, sys
from records import MAP, PAPERS, read, write


def main():
    results, today = json.load(open(sys.argv[1])), sys.argv[2]
    log_path = MAP / "meta_log.json"
    log = json.loads(log_path.read_text()) if log_path.exists() else {}
    for m in results:
        path = PAPERS / f"{m['key']}.md"
        if not path.exists():
            print("unknown key", m["key"]); continue
        rec = read(path)
        rec.update({k: m[k] for k in ("title", "authors", "year", "venue", "url")}, checked=today)
        write(rec)
        log[m["key"]] = {k: m[k] for k in ("evidence", "changed", "confident")} | {"checked": today}
    log_path.write_text(json.dumps(log, indent=1, sort_keys=True, ensure_ascii=False))
    print(f"applied {len(results)}; not confident: {[m['key'] for m in results if not m['confident']]}")


main()
