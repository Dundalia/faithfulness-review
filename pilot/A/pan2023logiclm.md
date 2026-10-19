# pan2023logiclm — coder A

Logic-LM: Empowering Large Language Models with Symbolic Solvers for Faithful Logical Reasoning

tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:by-construction, lever:prompt-pipeline, lever:architecture, lever:inference-time, contribution:method, motivation:reasoning-quality, domain:logic, scale:frontier-api, model:gpt-3.5-turbo, model:text-davinci-003, model:gpt-4, metric:task-accuracy, metric:executable-rate]

**Problem** CoT conclusions need not follow the stated reasoning, so LLM logical reasoning is unfaithful and error-prone.
**Method** Few-shot LLM translates NL problem → LP/FOL/CSP/SAT form; deterministic solver (Pyke/Prover9/python-constraint/Z3) infers the answer; solver error msgs drive self-refinement; interpreter maps result back.
**Findings** Avg +39.2% vs standard, +18.4% vs CoT. Gap grows with reasoning depth. Self-refine raises exe rate but acc plateaus. Faithfulness asserted by construction, never measured.
**Limits** Faithful only if the formalization is correct. Non-executable cases fall back to CoT (AR-LSAT exe rate ≤40%). Bounded by solver expressiveness. CoT beats it on PrOntoQA.

**Relations**
- builds-on [[lyu2023faithful]]: cites its finding that LLM conclusions don't follow generated reasoning chains

**New tags**
- (none)
