---
key: hong2026making
title: "Making LLMs Say What They Think: Measuring and Improving CoT-Interpretability Alignment"
authors: "Hong, Ravfogel, Zhao & Choi"
year: 2026
venue: "ICML 2026 workshop (Mech Interp)"
url: https://arxiv.org/abs/2609.38972v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:internal-strategy, reveals:planted-cue, reveals:cot-reliance, signal:interp-tool, signal:planted-cf, signal:cot-intervention, lever:sft, lever:preference, lever:rl-reward, updates:explanation, updates:behavior, contribution:metric, contribution:method, contribution:analysis, motivation:explainability, motivation:monitoring, domain:open-qa, domain:mcq, domain:math, scale:small, eval:ood, eval:specificity, eval:optimization-pressure, model:llama-3.1-8b, model:qwen3-8b, model:gemma-2-9b, model:deepseek-r1-distill-llama-8b, model:qwen3-14b, metric:cot-interpretability-alignment, metric:causal-effect-rate]
---
**Problem** CoT may not reflect the strategy the model actually computes; existing parametric-faithfulness tests rely only on hints and ignore model internals.
**Method** CIA = macro-F1, probe-detected vs CoT-verbalized strategy; TwoHopFact, MMLU-Hint, 2-digit mult. RS on CoT-probe-agreeing samples; DPO, GRPO with accuracy + agreement reward.
**Findings** Base CIA 0.448–0.759. Best method +25.5% avg relative gain; acc drop ≤0.015, mult acc rises. Holds on auxiliary tools; transfers TwoHop↔Hint, not to/from mult. Mult: model changes how it reasons; TwoHop/Hint: how it reports (causal intervention confirms). Code released.
**Limits** CIA bounded by probe quality; assumes single gold strategy. 8–9B, short tasks. GRPO weak (−0.066 to +0.126); reasoning-model gains small. Hint auxiliary tool not independent of probe.

**Relations**
- builds-on [[chen2025reasoning]]: uses its biased-hint MMLU data and Biasing Features metric as auxiliary CIA tool

**New tags**
- (none)
