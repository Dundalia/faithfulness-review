---
key: anon2026improving
title: "Improving Chain-of-Thought Monitorability in Large Language Models: Causal Bounds and Post-Training"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=jIW6GzEeDj
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:decision-factors, reveals:misbehavior, signal:planted-cf, lever:sft, lever:rl-reward, lever:on-policy-distillation, updates:explanation, contribution:theory, contribution:metric, contribution:meta-evaluation, contribution:method, contribution:benchmark, motivation:monitoring, domain:mcq, domain:open-qa, domain:math, domain:logic, domain:professional, scale:small, scale:mid, eval:held-out-evaluator, eval:ood, eval:specificity, eval:measure-validation, model:qwen3.5-4b, model:qwen3.5-9b, model:mistral-small-3.2-24b, model:qwen3-32b, model:llama-3.3-70b, model:gpt-oss-120b, metric:g-mean-squared, metric:g-mean-squared-lb, metric:minimal-criterion-tpr, metric:causal-recall-lower-bound]
---
**TL;DR** Proves the standard monitor recall metric only upper-bounds causal recall, derives a lower bound, and finds SFT reliably raises CoT monitorability while RL and on-policy distillation are mixed.
**Problem** TPRmc also counts target outcomes that would have occurred without the intervention, so it can overstate monitor recall. Can post-training raise CoT monitorability?
**Method** Proves TPRmc is an upper bound on causal recall and derives an observable lower bound. Builds 3,810 paired cue/evidence/sandbag/deception tasks. Trains Qwen3.5-4B/9B and Mistral-24B with self-distilled SFT, monitor-reward GRPO and privileged-context OPSD. Evaluates on 12 MonitorBench tasks with 3 held-out monitors.
**Findings** Per Tables 2-3, the upper-bound composite rises in 24/27 comparisons, the lower-bound one in 24/27. SFT raises both in all 9 (Mistral upper bound +7 to +19). RL and OPSD results are mixed for 9B and Mistral and sometimes flip between bounds. Code in supplement.
**Limits** The bounds do not identify recall. Methods are not matched (SFT tuned more). Training data built automatically. Accuracy cost not reported. Text counts (23/27, 21/27) and some deltas contradict Tables 2-3. Under review, not yet peer reviewed.

**Relations**
- builds-on [[guan2025monitoring]]: analyzes its TPRmc/g-mean² metric; proves TPRmc only upper-bounds causal recall
- builds-on [[wang2026monitorbench]]: evaluates all post-trained models on its 12 input-intervention tasks
- builds-on [[turpin2025teaching]]: follows VFT-style synthetic cue-disclosure supervision, broadened to more intervention families
- builds-on [[hase2026counterfactual]]: follows CST's paired counterfactual inputs with rewritten-trace supervision

**New tags**
- lever:on-policy-distillation: trains the model on its own sampled outputs with token-level supervision (e.g. forward KL) toward a teacher's distribution, incl. a frozen self-teacher given privileged context; not offline SFT and not a scalar RL reward
