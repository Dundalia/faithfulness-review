You are checking the scope of rows in a catalogue of definitions from the literature on LLM reasoning. Repository (read-only): this directory. `cache/passages/screen_candidates.md` lists 130 rows that a keyword search flagged as possibly out of scope. Each row claims its quote defines or characterizes a notion in one of three families:

- faithfulness: faithfulness of reasoning, explanations and self-reports to what actually drives the model, including honesty (statements against the model's own beliefs), say-do consistency (actions against stated reasoning or plans) and self-report accuracy (whether the model's reports about its own behavior, reasoning or knowledge are true);
- monitorability: monitorability, legibility, obfuscation, steganography and the monitored behaviors (scheming, covert actions, sabotage, sandbagging, deception, reward hacking, verbalized evaluation awareness);
- counterfactual: counterfactual inputs, interventions and tests.

Out of scope: (a) pure introspection capability, such as detecting injected concepts, predicting one's own outputs or properties as a capability test, or privileged self-access, unless the paper defines or uses it as the accuracy or faithfulness of the model's reports about itself; (b) faithfulness to a source document or retrieved context (summarization, RAG, hallucination against a source) unless the paper explicitly contrasts it with or relates it to the notions above; (c) mere uses of a word that say nothing about its meaning.

For each row decide: keep (in scope, family right), move (in scope but another family fits; give it), or drop (out of scope). When the quote alone does not settle it, read the paper around it (`cache/full/<key>.txt`, key is the part of the id before #). Be strict about the exclusions and equally strict about not dropping rows that are in scope: a self-report accuracy test framed as faithfulness or honesty stays.

Your final message is the result and nothing else: one JSON object, no code fence:
{"rows": [{"id": "...", "decision": "keep|move|drop", "family": "only for move", "reason": "one sentence"}]}
List every row.