# pan2023logiclm — coder B

Logic-LM: Empowering Large Language Models with Symbolic Solvers for Faithful Logical Reasoning

tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:by-construction, lever:prompt-pipeline, lever:architecture, lever:inference-time, contribution:method, motivation:reasoning-quality, domain:logic, scale:frontier-api, model:gpt-3.5-turbo, model:text-davinci-003, model:gpt-4, metric:execution-rate, metric:execution-accuracy]

**Problem** Logic CoT can be unfaithful (conclusion doesn't follow the chain); a black-box LLM gives no guarantee that the answer follows from its reasoning.
**Method** Few-shot LLM → symbolic program (LP/FOL/CSP/SAT) → deterministic solver (Pyke, Prover9, python-constraint, Z3) → interpreter. Self-refines on solver error messages; falls back to CoT if the program won't execute.
**Findings** 5 logic datasets, GPT-3.5 avg: +39.2% vs standard, +18.4% vs CoT. Gap over CoT grows with ProofWriter depth. Loses to CoT on PrOntoQA (ChatGPT, GPT-4). Self-refine ↑ exec rate; acc gains small, then plateau.
**Limits** Faithfulness assumed by construction, never measured. Formalization errors (GPT-4 AR-LSAT exec rate 32.6%). Fallback CoT has no guarantee. Bounded by solver expressiveness. In-context only, GPT models only.

**Relations**
- builds-on [[lyu2023faithful]]: cites it as evidence LLMs reason unfaithfully; same NL-to-symbolic-plus-solver idea

**New tags**
- (none)
