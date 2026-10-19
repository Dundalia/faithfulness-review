---
key: pan2023logiclm
title: "Logic-LM: Empowering Large Language Models with Symbolic Solvers for Faithful Logical Reasoning"
authors: "Pan, Albalak, Wang & Wang"
year: 2023
venue: "Findings of EMNLP 2023"
url: https://arxiv.org/abs/2305.12295v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:by-construction, lever:prompt-pipeline, lever:architecture, lever:inference-time, updates:behavior, contribution:method, motivation:reasoning-quality, domain:logic, domain:mcq, scale:closed, model:gpt-3.5-turbo, model:text-davinci-003, model:gpt-4]
---
**Problem** CoT conclusions may not follow from the stated chain (unfaithful reasoning) → errors on complex logic problems.
**Method** Few-shot LLM translates NL problem into LP/FOL/CSP/SAT → deterministic solver (Pyke, Prover9, python-constraint, Z3) derives answer → rule/LLM interpreter maps it back. Self-refiner repairs non-executable forms using solver error messages; otherwise falls back to CoT.
**Findings** Avg relative gain +39.2% vs standard prompting, +18.4% vs CoT (3 GPT models × 5 logic datasets). Gains grow with reasoning depth. Self-refinement raises exec rate; accuracy plateaus. Faithfulness claimed by construction, not measured. Code released.
**Limits** Faithful only if formulation correct; semantic mistranslations undetected. Fallback CoT carries no guarantee (GPT-4 exec rate 32.6% on AR-LSAT w/o refinement). CoT beats it on PrOntoQA (ChatGPT, GPT-4). Closed models only; bounded by solver expressiveness.

**Relations**
- (none)

**New tags**
- (none)
