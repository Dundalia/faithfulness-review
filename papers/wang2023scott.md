---
key: wang2023scott
title: "SCOTT: Self-Consistent Chain-of-Thought Distillation"
authors: "Wang, Wang, Li et al."
year: 2023
venue: "ACL 2023"
url: https://arxiv.org/abs/2305.01879v4
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:generic-cf, signal:cot-intervention, lever:sft, updates:behavior, updates:explanation, contribution:method, motivation:explainability, domain:mcq, domain:classification, scale:small, scale:mid, eval:human-study, model:t5-3b, model:gpt-neox-20b, metric:leakage-adjusted-simulatability, metric:rationale-perturbation-sensitivity, metric:rationale-refinement-gain]
---
**Problem** Distilled CoT rationales are vacuous (teacher hallucinates) and ignored (student answers via question→answer shortcuts) → rationale-answer inconsistency.
**Method** GPT-NeoX-20B teacher rationalizes gold answers via contrastive decoding (vs empty/wrong answer) → T5-3b student SFT with factual + counterfactual loss (wrong-answer rationale → wrong answer).
**Findings** CD-wrong teacher most consistent. CD students generally higher LAS than CoT prompting, greedy/human-rationale students; counterfactual loss adds more. Comparable acc (human-rationale student slightly higher). More perturbation-sensitive, bigger refinement gains. Larger students more accurate, less faithful; gains hold across sizes. Code released.
**Limits** Extra teacher forward pass + counterfactual data. LAS needs T5-large simulator. Knowledge-intensive QA only; perturbation/refinement on CSQA, CREAK only.

**Relations**
- (none)

**New tags**
- (none)
