---
key: akter2025causal
title: "Causal Consistency Regularization: Training Verifiably Sensitive Reasoning in Large Language Models"
authors: "Akter, Shihab & Sharma"
year: 2025
venue: "withdrawn (ICLR 2026 submission)"
url: https://arxiv.org/abs/2509.01544v3
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:interp-tool, signal:judge, lever:sft, updates:behavior, contribution:method, contribution:metric, contribution:theory, motivation:explainability, domain:math, domain:logic, domain:open-qa, domain:code, scale:small, scale:mid, eval:ood, eval:specificity, eval:human-study, eval:optimization-pressure, model:llama-2-13b, model:llama-3-8b, model:mistral-7b, model:qwen2-7b, model:gemma-2-9b, model:llama-3-70b, metric:counterfactual-outcome-sensitivity, metric:trace-ablation-answer-change-rate, metric:unfaithful-correct-rate]
---
**TL;DR** Introduces CSR, an SFT regularizer that makes answers sensitive to CoT edits, sharply raising counterfactual sensitivity and cutting correct answers with unfaithful CoTs, at small accuracy cost.
**Problem** Models reach correct answers despite flawed CoT; answer-only training leaves the trace causally unused.
**Method** CSR: LoRA SFT plus a term maximizing KL(answer|CoT ‖ answer|edited CoT); REINFORCE-trained editor swaps operators, verifier-gated. Llama-2-13B (7B–72B also); baselines PRM, GRPO, verifier-guided.
**Findings** GSM8K COS 85.1 vs 52.3 (PRM); accuracy −1–2 pts. Transfers to held-out edits/domains. Human audit: unfaithful-correct 36–42% → 11–15%. Fewer null-edit flips; patching IE ×3.4. ~9% overhead.
**Limits** Needs precise operators and verifier (possible harm <50% precision); open-ended gains only 10–15 pts. COS ≈ training objective. Code promised on acceptance, unreleased. Numbers inconsistent across tables.

**Relations**
- builds-on [[lanham2023measuring]]: COS and trace-ablation tests adapt CoT-corruption and truncation faithfulness tests

**New tags**
- (none)
