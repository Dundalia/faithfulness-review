# CoT Faithfulness and Monitorability

An annotated index of 217 papers and model cards on whether what language models say about their reasoning reflects what actually drives their behavior, and whether that reasoning can be monitored. It covers methods that improve faithfulness, the measurements they are judged by, CoT monitorability, self-reports trained to match behavior, the monitorability sections of frontier model cards, and a few classic explainable-NLP papers as background.

**Dashboard:** https://dundalia.github.io/faithfulness-review/

The dashboard has collections at the top (training methods, monitorability, measurement, self-reports, model cards, background), filters for every tag group, year and publication type, and a reading pane that shows the selected entry in full. It has four views:
- **List:** each entry's one-line TL;DR, with search highlighting.
- **Table:** a sortable table of year, title, venue and the main tags.
- **Coverage:** a matrix crossing two tag groups (for example what is explained × intervention), where hatched cells mark combinations nothing covers.
- **Links:** which papers build on, extend, compare to or contradict which.

Every view's state is in the URL, each entry has a permalink, and the current selection exports as CSV or BibTeX. Keyboard: `/` search, `j`/`k` next and previous entry, `o` open the paper, `Esc` close.

Standalone pages are linked after the collections. Each one is a Markdown file in [`site/pages/`](site/pages), rendered with LaTeX math by `site/page.html`. To add a page, put the file there and list it in [`site/pages.js`](site/pages.js). The first is a chapter-by-chapter summary of Halpern's *Actual Causality* (MIT Press, 2016).

## What's in a record

Each paper is one Markdown file in [`papers/`](papers), with seven bibliographic fields, a flat list of `namespace:value` tags from [`tags.yaml`](tags.yaml), a one-sentence TL;DR, a telegraphic summary (problem, method, findings, limits) and links to related papers in the map. [`index.md`](index.md) lists all of them in one table; `index.csv`, `tags.csv` and `relations.csv` hold the same data for analysis.

## How it was made

Records were written by Claude agents from each paper's full text, then checked against the paper by a second agent that corrected errors. Venues and versions were verified against arXiv, OpenReview, ACL Anthology, proceedings, DBLP and Semantic Scholar on 15 October 2026. The tag vocabulary was calibrated on a two-coder pilot ([`pilot/report.md`](pilot/report.md)). The full method, record format and the steps for adding a paper are in [`PLAN.md`](PLAN.md).

The summaries are compressed and machine-written: check the paper before citing a number.

## Working locally

```sh
python3 scripts/build.py              # regenerate index files and site/data.json (Python 3, standard library only)
python3 -m http.server -d site 8000   # preview the dashboard at http://localhost:8000
python3 scripts/fetch.py              # cache full texts into cache/ (not committed)
```

Pushing to `main` rebuilds and deploys the dashboard through GitHub Actions ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)).
