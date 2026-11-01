You are an independent checker of claims on a page of a literature map: `site/pages/formal.md` (formal definitions of faithfulness, monitorability and related concepts). Repository: /Users/davidebaldelli/Developer/faithfulness-review (read only; write only your output file). 

Claims: `runs/E_formal/claims_formal.json` ({"claims": [{"n", "text", "papers", "evidence"}]}; `text` is the sentence exactly as on the page). Check claims 91 to 134.

Evidence:
- `formal.csv`: formal definitions from the 23 formal-framework papers (verbatim quote, formula, assumptions, level, formalism); full texts in `cache/full/<key>.txt`, PDFs in `cache/<key>.pdf` (`pdftotext -layout`).
- `definitions.csv` (rows with kind "formal") and `runs/E_formal/formal_labels.json` (level and formalism of those 350 rows): recompute every count with python.
- `runs/E_formal/critic.json`, `runs/E_formal/search_<area>.json`, `runs/E_formal/candidates.json`: verified notes on works outside the map; open the work's URL (arXiv abstracts through `curl -s https://arxiv.org/abs/<id>`) when a claim depends on it.
- `index.csv` (240 papers; the first 217 predate the formal sweep, the 23 with tag source:formal-sweep-2026-11-01 were added on 1 November 2026) and `cache/full/<key>.txt` for every map paper.

Verdicts: supported (the sources say this, at this strength); overstated (stronger, broader or more general than the sources); understated (the evidence supports a stronger or more precise claim); wrong (the sources say something else, a count is wrong, a quote is not in the source, or the wrong work is credited); unverifiable. For each non-supported claim write the strongest precise replacement the evidence fully supports, as a drop-in for the exact `text`: exact counts, short verbatim quotes, the page's link style, no em dashes. Never soften a claim the evidence supports. Proposals labeled as conjectures on the page are not to be judged as findings, but a source they cite must say what the page says it says.

Write `runs/E_formal/check_page_1_91.json` and validate it with `python3 -m json.tool`:
{"results": [{"n": 1, "verdict": "supported"}, {"n": 2, "verdict": "overstated", "reason": "...", "evidence": ["source: \"verbatim quote\""], "replacement": "..."}], "coherence": [{"old": "exact substring of the page", "new": "...", "reason": "..."}], "other_problems": [{"where": "...", "problem": "...", "fix": "..."}]}
List every claim from 91 to 134; give reason, evidence and replacement only for non-supported claims. Return one line: counts per verdict.
