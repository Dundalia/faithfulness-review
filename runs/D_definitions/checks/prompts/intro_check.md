You are independently verifying the introduction of a page that catalogues how the literature on LLM reasoning defines faithfulness, counterfactual and monitorability. Repository (read-only): this directory.

- `runs/D_definitions/intro.md`: the introduction to verify.
- `runs/D_definitions/synth_faithfulness.md`, `synth_counterfactual.md`, `synth_monitorability.md`: the three verified sections it summarizes; `runs/D_definitions/claims_<term>.json` hold their claims with the verdicts of each check (verdict, verdict2, verdict3).
- `definitions.csv` (all rows, with `family`, `cluster`, `stance`, `source`, `attribution` columns), `index.csv`, `runs/D_definitions/synth_<term>.json` (clusters), `runs/D_definitions/attr_*.json` (attribution checks; count only checks whose entry is still in definitions.csv), `runs/D_definitions/gap_*.json` (second-pass edits), and `cache/full/<key>.txt` (paper full texts).

Check every factual sentence of intro.md: recompute each count with python, check each quote in the cited paper, and check each statement about a paper or a section against its source. Verdicts: supported, overstated, understated, wrong. For each non-supported sentence give the strongest precise replacement the evidence fully supports, as a drop-in for the exact sentence: exact counts, short verbatim quotes, links as [Author Year](./#p=key), no em dashes, plain academic English. Do not soften what the evidence supports.

Your final message is the result and nothing else: one JSON object, no code fence:
{"results": [{"sentence": "the exact sentence from intro.md", "verdict": "...", "reason": "...", "evidence": ["..."], "replacement": "..."}]}
List only sentences that are not supported, plus one entry {"sentence": "ALL OTHERS", "verdict": "supported"}.
