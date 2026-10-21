---
key: han2026correct
title: "Correct Is Not Enough: Training Reasoning Planners with Executor-Grounded Rewards"
authors: "Han, Shi, Hu et al."
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://arxiv.org/abs/2605.03862v4
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:reasoning-validity, reveals:cot-reliance, signal:judge, signal:by-construction, signal:env-label, signal:cot-intervention, lever:rl-reward, updates:explanation, contribution:method, contribution:benchmark, motivation:reasoning-quality, domain:math, domain:code, scale:small, eval:confound-control, eval:measure-validation, model:qwen2.5-7b, model:llama-3.1-8b, model:qwen3-4b, metric:executor-uplift, metric:rubric-reasoning-score, metric:frozen-executor-accuracy]
---
**TL;DR** Introduces TraceLift, which rewards planner traces with GRPO for rubric quality and for helping a frozen executor: consistently beats execution-only RL on math and code, faithfulness untested.
**Problem** Outcome-only RLVR reinforces traces that are right for the wrong reasons, and it ignores whether the reasoning helps the model that consumes it.
**Method** TraceLift: a GRPO-trained planner writes the trace and a frozen same-family executor writes the answer. Reward = verifier + rubric Reason-RM score × executor uplift (trace vs. no trace, K=3). The RM is trained on TraceLift-Groups: 6,000 reference-vs-perturbed groups with LLM rubric labels. Math and code.
**Findings** Beats execution-only RL on every benchmark for all 3 models (code micro-avg +1.96–2.61 pts, math +0.84–4.51); direct self-solving math also ≥ Exec-only. Without uplift, or with a prompted judge, it falls below Exec-only. Traces are shorter (136 vs 166 tokens). Code released.
**Limits** Only task accuracy and length are evaluated; no validity or faithfulness test of the trained traces. Models ≤8B, executor from the same family. Rubric-label judge unnamed; RM validated only on in-distribution GSM8K perturbations. Ablations on Qwen2.5-7B code only. Under review.

**Relations**
- (none)

**New tags**
- (none)
