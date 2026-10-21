---
key: jia2026decorative
title: "From Decorative to Load-Bearing: Task Difficulty Shapes the Causal Role of Chain-of-Thought"
authors: "Jia & Mu"
year: 2026
venue: "TMLR 2026"
url: https://arxiv.org/abs/2609.25366v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:cot-intervention, contribution:metric, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:math, domain:mcq, domain:logic, scale:small, eval:confound-control, eval:measure-validation, eval:human-study, factor:cot-necessity, factor:outcome-rl, model:gemma-2-9b, model:llama-3.1-8b, model:deepseek-r1-distill-qwen-7b, metric:error-propagation-rate, metric:silent-bypass-rate, metric:self-correction-rate, metric:steering-flip-rate]
---
**TL;DR** Tests when CoT is load-bearing by perturbing single steps: errors propagate to the answer much more on problems hard for the model, and difficulty outweighs perturbation type.
**Problem** CoT monitoring only works if the chain constrains the answer. When is the CoT decorative, and when is it load-bearing?
**Method** Perturb one step, truncate, force the model to continue. Wrong final answer = error propagation; a Claude Haiku judge splits the rest into bypass vs self-correction. Gemma-2-9B, Llama-3.1-8B, R1-Distill-Qwen-7B on GSM8K, MMLU, BBH, plus a matched perturbation-type × difficulty 2×2. Hidden-state probes and additive steering.
**Findings** Propagation tracks model-relative difficulty (Gemma 3.9%→22.3%→40.9%) and replicates on Llama. Difficulty takes 98.8% of explained deviance, perturbation type 0.8%. R1-Distill propagates less. Probes read the mode; steering flips at most ~25% of Type C. Code released.
**Limits** 7–9B models only. Single-step, non-naturalistic perturbations. A/B split is judge-prompt-sensitive, and production labels over-count self-correction (76% three-way agreement with humans, 96% on C vs non-C). Difficulty confounded with competence. Answer-parser errors inflate BBH propagation (humans relabel 40% of a BBH Type C stratum as bypass).

**Relations**
- builds-on [[lanham2023measuring]]: Error injection with forced continuation mirrors its adding-mistakes test; adds three-mode labels

**New tags**
- (none)
