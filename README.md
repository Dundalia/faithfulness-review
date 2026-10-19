# Faithfulness Literature Map

A tagged, filterable map of 130 papers on making LLM chains of thought and self-explanations faithful: whether what a model says about its reasoning reflects what actually drives its answer. It covers methods that improve faithfulness, the measurements they are judged by, CoT monitorability, and self-reports trained to match behavior.

**Dashboard:** https://dundalia.github.io/faithfulness-review/

The dashboard filters papers by any combination of tags, year and publication status, and has three views:
- **Papers:** each paper's main findings, tags and a four-line summary.
- **Coverage:** a matrix crossing two tag groups (for example what is explained × intervention), where hatched cells mark combinations no paper covers.
- **Links between papers:** which papers build on, extend, compare to or contradict which.

## What's in a record

Each paper is one Markdown file in [`papers/`](papers), with seven bibliographic fields, a flat list of `namespace:value` tags from [`tags.yaml`](tags.yaml), a telegraphic summary (problem, method, findings, limits) and links to related papers in the map. [`index.md`](index.md) lists all of them in one table; `index.csv`, `tags.csv` and `relations.csv` hold the same data for analysis.

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
