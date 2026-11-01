You are adding papers to a literature map on chain-of-thought (CoT) faithfulness and monitorability, and extracting their formal definitions. Repository: /Users/davidebaldelli/Developer/faithfulness-review (read only except for the output file).

Papers in this batch (F5):
- `bilodeau2024impossibility`: "Impossibility Theorems for Feature Attribution", Blair Bilodeau, Natasha Jaques, Pang Wei Koh, Been Kim, 2024, Proceedings of the National Academy of Sciences 121(2), https://arxiv.org/abs/2212.11870
- `lindsey2026emergent`: "Emergent Introspective Awareness in Large Language Models", Jack Lindsey, 2026, arXiv preprint 2601.01828, https://arxiv.org/abs/2601.01828
- `song2025privileged`: "Privileged Self-Access Matters for Introspection in AI", Siyuan Song, Harvey Lederman, Jennifer Hu, Kyle Mahowald, 2025, arXiv preprint 2508.14802, https://arxiv.org/abs/2508.14802

For each paper, read its full text, `cache/full/<key>.txt` (numbered paragraphs [P#], section headings), all of it including appendices. Formulas are often garbled there: for them use `pdftotext -layout cache/<key>.pdf -` around the relevant pages.

A. The paper record. Follow exactly the record format and rules in `PLAN.md` (section "Record format", from "Eight front-matter fields" to the "New tags" rule): front matter (key, title, authors as "Last, Last & Last" or "Last, Last, Last et al.", year of first public version, venue, url, checked: 2026-11-01, tags), then **TL;DR**, **Problem**, **Method**, **Findings**, **Limits**, **Relations**, **New tags**. Tags: every value from `tags.yaml` that applies, plus `source:formal-sweep-2026-11-01` and `contribution:theory` where the paper's headline is a formal result; most namespaces (object, reveals, signal, lever, ...) will not apply to a theory paper, so use only those that do. Relations: only to papers in `index.csv` that this paper actually builds on, extends, compares to or contradicts (check its reference list against index.csv titles); none is fine. Check the metadata against the paper's first page and correct it if needed.

B. Formal definitions. List every formal definition, or formal criterion stated as a definition, in the paper that defines one of these concepts or a notion the paper ties to them: faithfulness of reasoning, explanations or self-reports (with completeness, soundness, post-hoc rationalization, plausibility); monitorability; legibility and checkability; obfuscation; steganography and encoded reasoning; honesty, lying, deception; belief, intention, scheming, sandbagging, hidden objectives; self-report accuracy and introspection; counterfactuals; simulatability; actual causation, explanation, responsibility; causal abstraction; direct and indirect effects; usable information. For each:
- "term": the name the paper uses;
- "concepts": list from the concepts above (use "other: <name>" if none fits);
- "level": "concept" (defines the notion itself), "measurement" (defines a test, metric or estimator for it) or "both";
- "formalism": one of "intervention / flip test", "causal model", "causal abstraction", "structural causal game", "information-theoretic", "probabilistic / statistical", "predictive / simulation", "logical / set-theoretic", "epistemic logic", "game-theoretic", "complexity / cryptographic", "learning-theoretic / optimization", "other";
- "quote": one to three consecutive sentences copied EXACTLY from `cache/full/<key>.txt` (character for character, including its odd spacing) that state the definition in words. Do not quote spans of garbled math; if the definition is mostly a formula, quote the sentence that introduces it;
- "formula": the defining condition in LaTeX, transcribed carefully from the PDF (empty if purely verbal);
- "assumptions": what the definition needs (a known causal model, a monitor or predictor class, a cover distribution, access to internals, ...);
- "where": section, definition or theorem number, and [P#];
- "gloss": at most 40 words in plain English;
- "relation": how it relates to other formal definitions (generalizes, special case of, alternative to), naming them, or "".

Write the result to `runs/E_formal/extraction_F5.json` (the only file you may write) as one JSON object, and validate it with `python3 -m json.tool`. Make sure every backslash in LaTeX is escaped as `\\` in the JSON. The object has this shape:
{"batch": "F5", "papers": [{"key": "...", "record_markdown": "the whole record file, front matter included", "definitions": [{"term": "", "concepts": [], "level": "", "formalism": "", "quote": "", "formula": "", "assumptions": "", "where": "", "gloss": "", "relation": ""}]}]}
Return one line per paper: the key and the number of definitions.