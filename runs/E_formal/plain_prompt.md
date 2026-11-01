You are rewriting a web page so that an outside reader can follow it. Repository: /Users/davidebaldelli/Developer/faithfulness-review. The page is `site/pages/formal.md`; its factual claims, each checked twice against the sources, are in `runs/E_formal/claims_formal.json` ({"claims": [{"n", "text", ...}]}, `text` is the sentence exactly as on the page).

## The problem
The page was written in the working vocabulary of the pipeline that produced it, and a researcher reading it cold cannot follow it. The owner's words: "I think you came up with your definitions and naming conventions but I cannot really understand what you mean. You need to be more clear and plain."

## The reader
A machine learning researcher who knows what chain-of-thought (CoT) reasoning, faithfulness and monitoring are, has some familiarity with causal inference, and has never seen this project or its files.

## Rules
1. **No internal vocabulary.** Replace every pipeline term with plain words, and define the few names you keep the first time they appear:
   - "row(s)" means "definition(s)".
   - "the catalogue", "catalogue rows", "kind formal": the definitions quoted from the 217 papers on CoT faithfulness and monitorability, collected on the Definitions page. Call them something plain such as "the definitions in the CoT literature" (say once that these are the 217 papers of the map's original collection).
   - "framework papers", "framework rows", "formal-framework papers", "the 23 papers": 23 papers from causal inference, game theory, information theory, cryptography and explainable AI that give mathematical definitions; added to the map so that their definitions can be compared with the CoT literature. Name them plainly, for example "the 23 formal-theory papers", and say what they are on first use.
   - "level", "concept-level", "measurement-level", "both": say "defines the notion itself" versus "defines a way to measure or test it"; explain "both" in words.
   - "family", "framework family", "observer-relative information": call them approaches, and explain each approach in one plain sentence when it first appears (for example: "information-based definitions: a property holds when an observer with limited abilities can extract enough information about the behavior from the reasoning text").
   - "cluster", "searches", "candidates", "priority", "completeness check", "critic", "in-map": do not use them in the body. Say "the literature search for this page" if a statement depends on it.
2. **Explain technical terms** briefly at first use: actual cause, epistemic state, abstraction and alignment map, interchange intervention, mediation (direct and indirect effect), structural causal game, usable (V-)information, steganographic gap, opacity and diagnosability, prover-verifier game, abductive explanation, probability of necessity and sufficiency, and any other term a reader would have to look up.
3. **Start with a plain summary** of five to seven sentences, right after the title, under no heading: the question, the answer, and the two or three facts that matter most. Then keep the existing structure (Main findings, the table, the approaches, what is missing, toward one definition, how the page was made), but make every heading self-explanatory.
4. **Keep every fact exactly.** Do not add a fact, number, quote or citation that is not on the current page; do not drop a number or a citation a claim relies on; do not change the strength of any statement (no new hedges, no new certainty). Keep the formulas, and introduce each with one plain sentence saying what it states. Keep every link.
5. **Process details** (how the page was made, file names, counts of corrections) go only in the last section, written plainly.
6. Style: short, plain sentences; American spelling; no em dashes (use commas, colons or parentheses); no filler words (notable, crucial, comprehensive, landscape, interplay, underscore, leverage, utilize, furthermore, moreover, thus, therefore, namely, ultimately).

## Output
- Overwrite `site/pages/formal.md` with the rewritten page.
- Write `runs/E_formal/claims_formal_plain.json`: {"pairs": [{"n": 1, "old": "the claim text from claims_formal.json", "new": "the sentence or sentences of the new page that now state it, copied exactly from the new page"}]}, one entry for every claim in claims_formal.json, in order. Every "new" must occur exactly once in the new page (check with python). If two old claims are now stated in one sentence, give that sentence for both.
Return a 60-word summary of the main changes.
