# Completeness check of the search for formal definitions

Repository: /Users/davidebaldelli/Developer/faithfulness-review. Read `runs/E_formal/brief.md` (the shared brief and the list of concepts in scope) and `runs/E_formal/areas.md` (the five search areas). Five agents searched one area each and wrote `runs/E_formal/search_<area>.json` (causal_abstraction, actual_causation, agency_honesty, information_verification, xai_faithfulness_theory). `runs/E_formal/formal_labels.json` labels the 350 formal definitions already in the map's catalogue as concept-level or measurement-level, with their formalism.

Your job:
1. Build a coverage table: for each concept in scope, the formal definitions of the concept itself that the five searches found (by framework), and those already in the map's catalogue (concept-level labels).
2. Find what the five searches missed: a concept with no formal definition where one may exist; a framework none of them searched (for example philosophy of explanation, epistemic logic, formal verification and runtime monitoring, program semantics, computational mechanics, mechanism design, communication or signaling theory, cognitive science of self-report); a strong candidate cited by the found papers but not listed; a recent (2025–2026) paper that formalizes CoT faithfulness or monitorability directly.
3. Run up to 12 targeted searches to close the most important gaps, following the method and verification rules in the brief (open every work you list; record the URL; no guessed metadata; prefer arXiv and Semantic Scholar through curl, WebSearch otherwise).
4. Flag duplicates across the five files and any candidate whose description looks wrong after you open it.

Write `runs/E_formal/critic.json` (validate with `python3 -m json.tool`):
{"coverage": [{"concept": "", "concept_level_definitions": [{"framework": "", "works": ["title (year)"]}], "only_measurements": true}],
 "missed_frameworks": [{"framework": "", "why_relevant": "", "searched": true}],
 "new_candidates": [same fields as the candidates in the brief],
 "duplicates": [""], "corrections": [{"file": "", "title": "", "problem": ""}],
 "verdict": "at most 200 words: is there any formal framework that covers all the concepts in scope, which frameworks cover which subsets, and where the gaps are"}
Edit no other file. Return the verdict.
