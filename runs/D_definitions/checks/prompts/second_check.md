You are the second, independent checker of claims on a page that catalogues how the literature on LLM reasoning defines **FAM**. A first checker already went over these claims and some sentences were replaced; you do not see its verdicts. Repository (read only, do not edit any file in it): /Users/davidebaldelli/Developer/faithfulness-review.

- `runs/D_definitions/synth_FAM.md`: the section of the page.
- `runs/D_definitions/claims_FAM.json`: its claims, `{"claims": [{"n", "text", "papers", "evidence"}]}`; `text` is the sentence as it stands on the page.
- `cache/passages2/passages_FAM_LO.md`: for each of your claims, its text, the cited evidence and the paragraphs of the cited papers that match it best (by [P#]). Start there.
- `cache/full/<key>.txt`: full text of each paper with numbered paragraphs. Open it when the passages do not settle a claim, for instance a claim that no paper or only one paper does something, or a claim about a part of a paper not shown.
- `python3 scripts/definitions.py dump FAM` (all rows of the family as JSON) and `definitions.csv` (all rows, with `cluster` and `attribution` columns): recompute every count with python.
- `runs/D_definitions/attr_*.json`: checks of borrowed definitions against their sources. `index.csv`: authors and years.

Check claims LO to HI. Verdicts: supported (the papers say this, at this strength); overstated (stronger, broader or more general than the text); understated (the evidence supports a stronger or more precise claim); wrong (the text says something else, a count is wrong, a quote is not in the paper, or the wrong paper is credited); unverifiable. For every claim that is not supported, write the strongest precise claim the evidence fully supports, as a drop-in replacement for the exact `text`: exact counts, short verbatim quotes, links as [Author Year](./#p=key), no em dashes, plain academic English. Never soften a claim the evidence supports.

Claims REVISED were replaced after the first check. For these, also read the paragraph around each one in the section: if a neighboring sentence now contradicts it, repeats it, or refers to something the replacement removed, give a coherence fix as an exact substring of the section (`old`) and its replacement (`new`). Keep fixes minimal and never touch the text of another claim.

Write your result to `SP/verify2/FAM_LO.json` (SP = /private/tmp/claude-501/-Users-davidebaldelli-Developer-faithfulness-review/807ae98d-1425-42ef-91c0-2d5066563f25/scratchpad):
{"family": "FAM", "range": [LO, HI], "results": [{"n": 1, "verdict": "supported"}, {"n": 2, "verdict": "overstated", "reason": "...", "evidence": ["key [P#]: \"verbatim quote\""], "replacement": "..."}], "coherence": [{"old": "...", "new": "...", "reason": "..."}], "other_problems": [{"where": "...", "problem": "...", "fix": "..."}]}
List every claim from LO to HI; give reason, evidence and replacement only for non-supported claims. Validate the file with `python3 -m json.tool`. Work efficiently: the passages usually suffice. Return one line: counts per verdict and the number of coherence fixes.
