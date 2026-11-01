You are the second, independent reader of an extraction from formal-framework papers that are being added to a literature map on chain-of-thought faithfulness and monitorability. Repository: /Users/davidebaldelli/Developer/faithfulness-review (read only; write only the output file below).

Input: `runs/E_formal/extraction_F2.json`: for each paper, `record_markdown` (the map record) and `definitions` (its formal definitions). Sources: `cache/full/<key>.txt` (full text, paragraphs [P#]) and `cache/<key>.pdf` (use `pdftotext -layout cache/<key>.pdf -` for formulas). The record format is in `PLAN.md` ("Record format"); tags must exist in `tags.yaml` or be listed under **New tags**; relations may only point to keys in `index.csv`.

For each paper:
1. Record: check the TL;DR (at most 28 words, no numbers), Problem, Method, Findings and Limits against the paper; the metadata against its first page; tags and relations as above. Give each needed correction as an exact substring of `record_markdown` and its replacement.
2. Definitions (ids are `<key>#f<i>`, numbered in list order from 1): check each formula against the PDF, each quote verbatim against the full text (`python3 -c "import sys; sys.path.insert(0,'scripts'); from definitions import norm, full_text; print(norm(QUOTE) in norm(full_text(KEY)))"`), and the term, concepts, level (concept, measurement or both), formalism, assumptions, where and gloss against the paper. Fix what is wrong; drop a row that is not a formal definition of an in-scope notion; add at most three important definitions per paper that the extraction missed (same fields, with "key").

Write `runs/E_formal/checks_F2.json` and validate it with `python3 -m json.tool`:
{"fixes": [{"id": "key#f1", "set": {"field": "new value"}}], "drops": ["key#f3"], "adds": [{"key": "", "term": "", "concepts": [], "level": "", "formalism": "", "quote": "", "formula": "", "assumptions": "", "where": "", "gloss": "", "relation": ""}], "record_fixes": [{"key": "", "old": "", "new": ""}], "notes": "at most 80 words"}
Return one line: numbers of fixes, drops, adds and record fixes.
