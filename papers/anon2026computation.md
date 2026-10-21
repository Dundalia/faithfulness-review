---
key: anon2026computation
title: "Computation Alignment for Chain-of-Thought Distillation"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=Kesfysrevg
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:internal-strategy, signal:interp-tool, lever:sft, lever:activation-loss, updates:behavior, contribution:method, contribution:metric, motivation:reasoning-quality, domain:math, domain:logic, scale:small, eval:ood, eval:measure-validation, eval:confound-control, model:qwen2.5-0.5b, model:gemma-2-2b, model:llama-3.3-70b, model:gpt-4.1-mini, model:grok-3-mini, model:llama-3.1-8b, metric:circuit-overlap, metric:sensitivity-discrepancy]
---
**TL;DR** Introduces CAD, a CoT-distillation regularizer that equalizes how reasoning and answer tokens react to typos, raising student accuracy almost everywhere, though alignment after training goes unmeasured.
**Problem** CoT distillation matches the student's CoT to the teacher's but never checks that the student's answer computation follows its own CoT steps ("computation alignment").
**Method** Alignment = node overlap of reasoning vs. answer circuits from multi-step circuit tracing. CAD: an SFT regularizer that equalizes hidden-state shifts under typo perturbations at reasoning vs. answer tokens. Plugged into Classic CoT, DFT and GEM.
**Findings** Proxy tracks circuit overlap (r=-0.90, Llama-3.1-8B); correct answers show lower proxy discrepancy. CAD raises accuracy in all settings but one (BoolExp, Classic CoT, -0.40), e.g. GSM8K 18.94 to 38.50; beats typo augmentation (65.4 vs 45.8 avg).
**Limits** No alignment measure (circuit or proxy) reported after training, only accuracy; proxy validated only on Llama-3.1-8B, not the 0.5B/2B students. Math and Boolean tasks, single seed, extra hyperparameter search for CAD. Code promised on acceptance; under review.

**Relations**
- (none)

**New tags**
- (none)
