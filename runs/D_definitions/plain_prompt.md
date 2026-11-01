You are rewriting part of a web page so that an outside reader can follow it. Repository: /Users/davidebaldelli/Developer/faithfulness-review.

The page is the Definitions page of a literature map on chain-of-thought (CoT) faithfulness and monitorability (`site/pages/definitions.md`). It catalogues how 217 papers define three terms: faithfulness, counterfactual and monitorability. It is assembled from four files: `runs/D_definitions/intro.md` (introduction, main findings, how the page was made) and `runs/D_definitions/synth_<term>.md` (one section per term). You rewrite one of them: **FILE**.

The page was written in the working vocabulary of the pipeline that produced it, and a researcher reading it cold cannot follow it. The owner's words: "I think you came up with your definitions and naming conventions but I cannot really understand what you mean. You need to be more clear and plain." A plain-language rewrite of a sister page, `site/pages/formal.md`, was approved by the owner; read its first screen to see the target style.

## The reader
A machine learning researcher who knows what CoT reasoning, faithfulness and monitoring are, and has never seen this project or its files.

## Rules
1. **No internal vocabulary.** Replace pipeline terms with plain words, and define the few names you keep where they first appear in your file:
   - "row(s)" means "definition(s)"; "entry/entries" means "paper(s)".
   - "family" means one of the three terms.
   - "cluster": the definitions of each term are sorted into groups by meaning. Say "group" (for example "the 11 groups below") and explain once what a group is.
   - "companion notion": a related notion that the paper ties to the term (for example plausibility for faithfulness).
   - "kind" (informal, formal, operational, criterion, failure mode, taxonomy) and "stance" (proposed, adopted, adapted): explain in words where they first matter (the introduction explains them for the whole page).
   - "entry-source pairs", "pairs": the cases in which a paper cites a source for a definition.
   - Verdicts of the check of borrowed definitions against their sources: say what each means in plain words where it first appears ("supported": the source gives this definition; "adapted": the source gives it in another form; "renamed": the source defines the same thing under another name; "partial": the source supports only part of it; "unsupported": the source does not give it; "misdirected": the definition comes from a different paper than the one cited; "other-claim": the cited passage supports a different claim). In tables, keep the verdict labels but make sure the text above the table explains them.
   - "first pass", "second pass", "the previous version", "the independent audit", "the first-pass synthesis": say "an earlier version of this page" and "an independent check of that version by another model (GPT-6.1 Sol)", and explain once.
   - "the extractor's gloss", "gloss": a short paraphrase written when the definitions were collected.
2. **Explain technical terms** briefly at first use (for example simulatability, counterfactual simulatability, total effect, potential outcomes, mediation, a flip test, cue or hint injection, a sufficient statistic, g-mean², AUROC), unless your file has already explained them.
3. **Tables**: keep every quoted definition and every cell's facts exactly; you may rename column headers and the one-line explanations above tables to plain words. Do not alter text in quotation marks.
4. **Keep every fact exactly.** Do not add a fact, number, quote or citation that is not in your file; do not drop a number, a citation or a qualification; do not change the strength of any statement. Keep every link and every formula, and introduce formulas with a plain sentence. Keep the headings' structure, but make headings self-explanatory.
5. Style: short, plain sentences; American spelling; no em dashes (use commas, colons or parentheses); no filler words (notable, crucial, comprehensive, landscape, interplay, underscore, leverage, utilize, furthermore, moreover, thus, therefore, namely, ultimately).

## Claims and output
CLAIMS_RULE

Overwrite **FILE** with the rewritten text. Validate any JSON you write with `python3 -m json.tool`. Return a 40-word summary of the main changes.
