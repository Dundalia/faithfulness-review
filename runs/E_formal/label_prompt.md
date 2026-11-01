You are labeling formal definitions from a catalogue of how the literature on LLM reasoning defines faithfulness, counterfactual and monitorability. Repository (read-only): this directory. The 350 rows are in `runs/E_formal/formal_rows.tsv` (id, family, cluster, term, verbatim quote, gloss). Full texts are in `cache/full/<key>.txt` (key = id before #) if a quote is ambiguous.

For each row decide:
- "level": "concept" if the formal object defines the notion itself (what it is for a trace, explanation, model or monitor to be faithful, monitorable, legible, honest, and so on); "measurement" if it defines a test, metric, estimator, score or proxy used to assess the notion; "both" if the paper presents one formal object as the definition of the notion and computes it directly.
- "formalism", one of: "intervention / flip test" (output change under an edit), "causal model" (SCM, potential outcomes, mediation, do-calculus), "causal abstraction", "information-theoretic" (mutual information, sufficient statistic, entropy), "probabilistic / statistical" (probabilities, rates, divergences, classifier metrics), "predictive / simulation" (an observer or model predicts behavior), "logical / set-theoretic" (iff conditions, entailment, set relations), "game-theoretic", "learning-theoretic / optimization" (training objectives, rewards), "other".
- "note": at most 20 words on what exactly is defined.

Your final message is the result and nothing else: one JSON object, no code fence:
{"labels": [{"id": "...", "level": "...", "formalism": "...", "note": "..."}]}
Label every row.
