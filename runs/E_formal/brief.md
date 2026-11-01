# Search for formal definitions: shared brief

Repository: /Users/davidebaldelli/Developer/faithfulness-review. It holds a map of 217 papers on chain-of-thought (CoT) faithfulness and monitorability (`index.csv`: key, title, authors, year, url) and a catalogue of 3,414 definitions quoted from them (`definitions.csv`). In that catalogue, the formal definitions concentrate on measurements (tests, metrics, estimators); very few formally define the concepts themselves. The user wants to know whether formal definitions of the concepts exist anywhere, in any field, and whether some framework covers several of them at once. The user's own next step is a formal causal definition of these concepts, possibly building on Halpern-Pearl actual causality.

## Concepts in scope
faithfulness of reasoning, explanations and self-reports (including completeness and soundness of an explanation, post-hoc rationalization, plausibility as its contrast); monitorability; legibility and checkability; obfuscation; steganography and encoded reasoning; honesty, lying and deception; scheming, covert goals, intent, sandbagging and hidden objectives; self-report accuracy and introspection; counterfactuals as used to test explanations; simulatability.

## What counts
A formal definition states the concept in mathematical or logical terms with explicit conditions: structural causal models, potential outcomes, causal abstraction, probability, information theory, game theory, logic, interactive proofs or complexity theory, learning theory. Record a metric only if its paper presents it as the definition of the concept. Record an influential semi-formal framework only if formal definitions build on it, and say so.

## Method
- Start from your seed list: open each seed and confirm what it defines.
- Then search. Prefer free APIs through `curl` (they cost nothing): arXiv search `http://export.arxiv.org/api/query?search_query=all:%22causal+abstraction%22+AND+all:faithfulness&max_results=20`, arXiv abstracts `https://arxiv.org/abs/<id>`, Semantic Scholar `https://api.semanticscholar.org/graph/v1/paper/arXiv:<id>?fields=title,year,authors,venue,citationCount` and `.../citations?fields=title,year,externalIds&limit=100` for forward citations. Use WebSearch (load it with ToolSearch `select:WebSearch` if needed) for what the APIs miss. Follow citations forward and backward from the strongest hits.
- Verify every candidate: open its abstract or full text and record the URL you opened. Never list a work you have not opened. Do not guess authors, years or venues.
- Check whether each candidate is already in the map (`grep -i` a distinctive title phrase or the arXiv id in `index.csv`).
- Budget: about 30 searches and fetches in total. Stop at 15 strong candidates; quality over quantity.

## Output
Write `runs/E_formal/search_<AREA>.json` and validate it with `python3 -m json.tool`:
{"area": "<AREA>", "summary": "at most 150 words: for each concept in your area, is there a formal definition of the concept itself, and which framework could cover several concepts",
 "candidates": [{"title": "", "authors": "", "year": 0, "venue": "", "url": "", "in_map": "key or empty",
   "concepts": [""], "level": "concept | measurement | both", "formalism": "",
   "formal_object": "what exactly is defined, at most 40 words",
   "key_formula": "the defining condition in LaTeX, copied from the paper or abstract, or empty",
   "assumptions": "what the definition needs: a known causal model, access to internals, a monitor class, ...",
   "applies_to_llms": "yes | adaptable | no", "relevance": "at most 40 words: why it matters for a formal definition of the concepts above",
   "verified": "abstract | full text", "priority": 1}],
 "gaps": ["concepts in your area for which you found no formal definition of the concept itself"],
 "searches": ["queries and API calls you used"]}
Priority 1 = essential reading for the user's formalization, 2 = useful, 3 = marginal. Edit no other file. Return five lines: the summary's main point, the number of candidates by priority, and the main gap.
