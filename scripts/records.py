"""Read and write paper records (papers/<key>.md): flat front matter + Markdown body."""
import json, re
from pathlib import Path

MAP = Path(__file__).resolve().parent.parent
PAPERS = MAP / "papers"
FIELDS = ["key", "title", "authors", "year", "venue", "url", "checked", "tags"]


def read(path):
    text = Path(path).read_text()
    _, fm, body = text.split("---\n", 2)
    rec = {}
    for line in fm.splitlines():
        if not line.strip():
            continue
        k, v = line.split(":", 1)
        v = v.strip()
        if k == "tags":
            rec[k] = [t.strip() for t in v.strip("[]").split(",") if t.strip()]
        elif v.startswith('"'):
            rec[k] = json.loads(v)
        elif v == "null":
            rec[k] = None
        elif re.fullmatch(r"\d{4}", v):
            rec[k] = int(v)
        else:
            rec[k] = v
    rec["body"] = body
    return rec


def write(rec):
    lines = ["---"]
    for k in FIELDS:
        v = rec.get(k)
        if k == "tags":
            lines.append(f"tags: [{', '.join(v or [])}]")
        elif k in ("title", "authors", "venue"):
            lines.append(f"{k}: {json.dumps(v, ensure_ascii=False)}")
        else:
            lines.append(f"{k}: {'null' if v is None else v}")
    lines.append("---")
    (PAPERS / f"{rec['key']}.md").write_text("\n".join(lines) + "\n" + rec.get("body", "").lstrip("\n"))


def all_records():
    return [read(p) for p in sorted(PAPERS.glob("*.md"))]


def sections(body):
    """Parse **Label** lines and list blocks out of a record body."""
    out = {}
    for label, key in (("TL;DR", "tldr"), ("Problem", "problem"), ("Method", "method"),
                       ("Findings", "findings"), ("Limits", "limits")):
        m = re.search(rf"^\*\*{re.escape(label)}\*\*\s*(.+)$", body, re.M)
        out[key] = m.group(1).strip() if m else ""
    for label in ("Relations", "New tags"):
        m = re.search(rf"^\*\*{label}\*\*\n((?:- .*\n?)*)", body, re.M)
        out[label.lower().replace(" ", "_")] = [l[2:].strip() for l in (m.group(1).splitlines() if m else []) if l.strip() != "- (none)"]
    return out


def render_body(r):
    rel = [f"- {x['verb']} [[{x['key']}]]: {x['note']}" for x in r.get("relations", [])] or ["- (none)"]
    new = [f"- {x['tag']}: {x['definition']}" for x in r.get("new_tags", [])] or ["- (none)"]
    return "\n".join([
        *([f"**TL;DR** {r['tldr']}"] if r.get("tldr") else []),
        f"**Problem** {r['problem']}", f"**Method** {r['method']}",
        f"**Findings** {r['findings']}", f"**Limits** {r['limits']}", "",
        "**Relations**", *rel, "", "**New tags**", *new, "",
    ])
