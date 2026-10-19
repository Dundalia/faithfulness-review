"""Cache full texts for every record in papers/ (skips keys already cached).

arXiv: HTML version converted to text (cache/<key>.txt), else PDF (cache/<key>.pdf).
OpenReview / ACL Anthology: PDF. Other URLs: page converted to text.
Usage: python3 fetch.py [key ...]   (keys given first are fetched first)
"""
import json, re, subprocess, sys, time
from html.parser import HTMLParser
from pathlib import Path

MAP = Path(__file__).resolve().parent.parent
PAPERS, CACHE = MAP / "papers", MAP / "cache"
SKIP = {"script", "style", "nav", "head", "footer", "button", "svg"}
BLOCK = {"p", "div", "section", "h1", "h2", "h3", "h4", "h5", "h6", "li", "tr", "figcaption", "caption", "br", "table", "blockquote", "dt", "dd"}


class Text(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.skip, self.math = [], 0, 0

    def handle_starttag(self, tag, attrs):
        if tag in SKIP:
            self.skip += 1
        elif tag == "math":
            if not self.math and not self.skip:
                self.out.append(" $" + (dict(attrs).get("alttext") or "") + "$ ")
            self.math += 1
        elif tag in BLOCK:
            self.out.append("\n")
        elif tag in ("td", "th"):
            self.out.append(" | ")

    def handle_endtag(self, tag):
        if tag in SKIP:
            self.skip = max(0, self.skip - 1)
        elif tag == "math":
            self.math = max(0, self.math - 1)
        elif tag in BLOCK:
            self.out.append("\n")

    def handle_data(self, data):
        if not self.skip and not self.math:
            self.out.append(data)

    def text(self):
        t = re.sub(r"[ \t\r\f\v]+", " ", "".join(self.out))
        return re.sub(r"\n\s*\n+", "\n\n", t).strip()


def curl(url, out=None):
    cmd = ["curl", "-sSfL", "-m", "120", "-A", "Mozilla/5.0 (faith-lit-map research cache)", url]
    if out:
        cmd += ["-o", str(out)]
    r = subprocess.run(cmd, capture_output=True)
    return r.returncode == 0, r.stdout


def url_of(path):
    m = re.search(r"^url:\s*(\S+)", path.read_text(), re.M)
    return m.group(1) if m else None


def fetch(key, url):
    arx = re.search(r"arxiv\.org/(?:abs|pdf|html)/(\d{4}\.\d{4,5})", url or "")
    if arx:
        ok, html = curl(f"https://arxiv.org/html/{arx.group(1)}")
        time.sleep(3)
        if ok and b"ltx_document" in html:
            p = Text(); p.feed(html.decode("utf-8", "ignore"))
            (CACHE / f"{key}.txt").write_text(p.text())
            return "arxiv-html"
        ok, _ = curl(f"https://arxiv.org/pdf/{arx.group(1)}", CACHE / f"{key}.pdf")
        time.sleep(3)
        return "arxiv-pdf" if ok else "failed"
    if "openreview.net/forum" in url:
        ok, _ = curl(url.replace("/forum", "/pdf"), CACHE / f"{key}.pdf")
        return "openreview-pdf" if ok and (CACHE / f"{key}.pdf").read_bytes()[:4] == b"%PDF" else "failed"
    if "aclanthology.org" in url:
        ok, _ = curl(url.rstrip("/") + ".pdf", CACHE / f"{key}.pdf")
        return "acl-pdf" if ok else "failed"
    ok, html = curl(url)
    if ok:
        p = Text(); p.feed(html.decode("utf-8", "ignore"))
        if len(p.text()) > 3000:
            (CACHE / f"{key}.txt").write_text(p.text())
            return "web-text"
    return "failed"


def main():
    CACHE.mkdir(exist_ok=True)
    log_path = MAP / "fetch_log.json"
    log = json.loads(log_path.read_text()) if log_path.exists() else {}
    keys = sorted(p.stem for p in PAPERS.glob("*.md"))
    first = [k for k in sys.argv[1:] if k in keys]
    for key in first + [k for k in keys if k not in first]:
        if any((CACHE / f"{key}{ext}").exists() for ext in (".txt", ".pdf")) and log.get(key, "failed") != "failed":
            continue
        for stale in (CACHE / f"{key}.pdf",):
            if stale.exists() and stale.read_bytes()[:4] != b"%PDF":
                stale.unlink()
        log[key] = fetch(key, url_of(PAPERS / f"{key}.md"))
        print(key, log[key], flush=True)
        log_path.write_text(json.dumps(log, indent=1, sort_keys=True))
    print("done:", sum(v != "failed" for v in log.values()), "cached,", sum(v == "failed" for v in log.values()), "failed")


main()
