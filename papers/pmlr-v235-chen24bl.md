---
key: pmlr-v235-chen24bl
title: "Do Models Explain Themselves? Counterfactual Simulatability of Natural Language Explanations"
authors: "Chen, Zhong, Ri et al."
year: 2023
venue: "ICML 2024"
url: https://arxiv.org/abs/2307.08678v1
checked: 2026-10-15
tags: [source:trustme, object:cot, object:posthoc-expl, reveals:decision-factors, signal:generic-cf, contribution:metric, contribution:analysis, motivation:explainability, domain:open-qa, domain:classification, scale:closed, model:gpt-3.5, model:gpt-4, metric:simulation-precision, metric:simulation-generality, eval:human-study]
---
**Problem** Do LLM self-explanations let humans infer the model's outputs on related inputs (counterfactual simulatability)?
**Method** LLMs generate counterfactuals from the explanation; humans (StrategyQA) or GPT-4 (SHP) infer outputs via entailment → simulation precision (match w/ actual output) + generality (CF diversity). GPT-3.5/GPT-4 × CoT/post-hoc.
**Findings** Low precision (SQA ~80%, SHP ~89%); CoT ≈ post-hoc; GPT-4 > GPT-3.5 (+5.5/+6.5 pts). Precision uncorrelated w/ plausibility (r≈0.01) → RLHF may not help; generality ⟂ precision. Sanity checks: GPT-4 simulator ≈ human–human agreement; forced wrong-answer expls −45 pts.
**Limits** Classification tasks only, English; CF distribution set by generator LLM; fair-moderate human IAA; no improvement method (suggests RL/self-training on LLM-simulated score).

**Relations**
- (none)

**New tags**
- (none)
