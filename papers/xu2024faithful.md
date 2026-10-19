---
key: xu2024faithful
title: "Faithful Logical Reasoning via Symbolic Chain-of-Thought"
authors: "Xu, Fei, Pan et al."
year: 2024
venue: "ACL 2024"
url: https://arxiv.org/abs/2405.18357v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:correctness, signal:judge, lever:prompt-pipeline, updates:behavior, contribution:method, motivation:reasoning-quality, motivation:explainability, domain:logic, domain:mcq, scale:closed, model:gpt-3.5-turbo, model:gpt-4, metric:unfaithful-correct-rate]
---
**Problem** NL CoT imprecise for logic; solver offloading (Logic-LM) brittle to translation errors and info loss, and gives little explanation.
**Method** Few-shot, LLM-only pipeline: translate to FOL/CO → plan → solve with symbolic rules over hybrid NL+symbolic premises → verifier checks translation & each step, refines.
**Findings** GPT-4: beats CoT & Logic-LM on all 5 logic sets; 100% execution rate. Human-judged correct-but-flawed answers (FOLIO): CoT 6%, SymbCoT w/o verifier 2%, full SymbCoT 0%. Code released.
**Limits** Faithfulness = human validity rating, FOLIO only, no causal test; GPT-3.5/4 only; more tokens/API cost; GPT-3.5 FOLIO below Logic-LM.

**Relations**
- builds-on [[pan2023logiclm]]: reuses Logic-LM's five datasets, test records, GPT models and baseline numbers
- compares-to [[pan2023logiclm]]: main solver baseline; SymbCoT higher accuracy (except GPT-3.5 FOLIO) and execution rate
- contradicts [[pan2023logiclm]]: LLM-only symbolic CoT beats solver offloading on GPT-4; Logic-LM held solvers more reliable than LLMs

**New tags**
- (none)
