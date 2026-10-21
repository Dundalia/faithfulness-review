---
key: zaman2025causal
title: "A Causal Lens for Evaluating Faithfulness Metrics"
authors: "Zaman & Srivastava"
year: 2025
venue: "EMNLP 2025"
url: https://arxiv.org/abs/2502.18848v3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:posthoc-expl, reveals:decision-factors, signal:by-construction, contribution:meta-evaluation, contribution:benchmark, motivation:explainability, domain:classification, domain:mcq, domain:synthetic, scale:small, scale:mid, eval:measure-validation, eval:scaling, model:qwen2.5-7b, model:gemma-2-9b, model:qwen2.5-32b, model:qwen2.5-72b, metric:causal-diagnosticity, metric:filler-tokens, metric:cc-shap, metric:simulatability]
---
**TL;DR** Evaluates faithfulness metrics with knowledge edits that make two models answer alike for different reasons: the Filler Tokens metric is most diagnostic, while simulatability stays near chance.
**Problem** Faithfulness metrics for NL explanations are evaluated in isolation, with no ground-truth test of whether they separate faithful from unfaithful explanations.
**Method** Knowledge edits (ICE; MEMIT ablation) make two models give the same answer for different reasons. Diagnosticity is how often a metric prefers the model's own explanation. Four tasks: FactCheck, Analogy, Object Counting, StrategyQA multi-hop; code released.
**Findings** Main ICE setting: Filler Tokens best overall and the only metric significantly above 0.5 on every task and model; Simulatability stays near 0.5. Continuous variants mostly beat binary ones (up to 66% relative) but are noise-sensitive. Multi-hop hardest; no clear scaling trend to 72B.
**Limits** Depends on edits succeeding (ICE Analogy edits unreliable); mostly synthetic explanations; main models 7-9B; cannot evaluate metrics that regenerate explanations.

**Relations**
- builds-on [[lanham2023measuring]]: evaluates its four CoT corruption tests, recast as continuous score drops
- builds-on [[parcalabescu2023measuring]]: evaluates CC-SHAP; follows its truncation and filler-token implementations

**New tags**
- (none)
