---
key: hoth2026atmanrl
title: "AtManRL: Towards Faithful Reasoning via Differentiable Attention Saliency"
authors: "Höth, Kersting, Deiseroth & Parcalabescu"
year: 2026
venue: "ICLR 2026 workshop (LLM Reasoning)"
url: https://arxiv.org/abs/2604.16158v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:interp-tool, lever:rl-reward, updates:explanation, contribution:method, motivation:explainability, domain:math, domain:mcq, scale:small, model:llama-3.2-3b, metric:atman-saliency]
---
**Problem** CoT may just accompany the answer; outcome-only RL doesn't enforce that the answer causally depends on it. Saliency: necessary, not sufficient, for faithfulness.
**Method** Per rollout, additive AtMan attention mask on CoT tokens init suppressed (c=-0.4), optimized 200 steps to restore answer log-prob → mean normalized mask (÷c) = saliency reward, added to GRPO outcome reward. Llama-3.2-3B, GSM8K/MMLU, vs outcome-only GRPO.
**Findings** CoT tokens -44% (GSM8K), -46% (MMLU). GSM8K CoTs denser (stop words -25%, numbers +48%, symbols +61%); MMLU composition shift small. Pass@4 -0.4%/+0.1% → no accuracy cost.
**Limits** Proxy only: neither saliency gain nor faithfulness measured after training; reward sign ambiguous as written (Eq. 3). One 3B model, 2 datasets; no length-penalty baseline. May cut self-correction tokens. No code mentioned.

**Relations**
- (none)

**New tags**
- (none)
