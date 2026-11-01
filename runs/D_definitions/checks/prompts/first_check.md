You are independently verifying claims on a page that catalogues how the literature on LLM reasoning defines the term **FAM**. Everything is in this repository (read-only):

- `runs/D_definitions/synth_FAM.md`: the section of the page.
- `runs/D_definitions/claims_FAM.json`: its factual claims, `{"claims": [{"n", "text", "papers", "evidence"}]}`. `text` is the sentence as written on the page.
- `cache/full/<key>.txt`: full text of each paper (paragraphs numbered [P#]); `cache/<key>.txt` or `cache/<key>.pdf` is the original (use `pdftotext -q file.pdf -` for PDFs).
- `python3 scripts/definitions.py dump FAM`: every definition row of this family as JSON (id, key, term, kind, stance, source, where, quote, gloss); `python3 scripts/definitions.py rows <key>` for one paper. `definitions.csv` has all rows plus a `cluster` column and an `attribution` column.
- `runs/D_definitions/attr_*.json`: a check of each borrowed definition against its cited source.
- `runs/D_definitions/quotecheck_FAM.txt`: quoted spans in the claims that a script could not find verbatim in the claim's papers (may be false alarms: ellipses, quotes from another paper, PDF hyphenation). Resolve each one.
- `index.csv`: authors, year and key of each paper (links are written [Author Year](./#p=key)).

Verify claims number A to B. For each one, read the passages in the cited papers that bear on it (not only the quoted evidence) and recompute every count with python from the row data. Verdicts:
- supported: the papers say this, at this strength;
- overstated: the claim is stronger, broader or more general than the text;
- understated: the evidence supports a stronger or more precise claim;
- wrong: the text says something else, the count is wrong, a quote is not in the paper, or the claim credits the wrong paper;
- unverifiable: the evidence needed is not in the repository.

For every claim that is not supported, write the strongest precise claim the evidence fully supports, as a drop-in replacement for the exact `text`: same role in the paragraph, exact counts, short verbatim quotes, links as [Author Year](./#p=key), no em dashes, plain academic English. Do not soften a claim the evidence supports, and do not replace a precise claim with a vaguer one: if a stronger correct statement exists, give it.

Your final message is the result and nothing else: one JSON object, no code fence:
{"family": "FAM", "range": [A, B], "results": [{"n": 1, "verdict": "supported"}, {"n": 2, "verdict": "overstated", "reason": "...", "evidence": ["key [P#]: \"verbatim quote\""], "replacement": "..."}], "other_problems": [{"where": "heading or table", "problem": "...", "fix": "..."}]}
List every claim from A to B. Give reason, evidence and replacement only for non-supported claims. Use other_problems (at most 10) for errors you notice on the page outside the claims, such as a table row that misstates a paper.
