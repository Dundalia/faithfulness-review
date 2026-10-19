---
key: anon2026generating
title: "From Generating Reasoning to Relying on It: Direct Counterfactual Optimization for Chain-of-Thought"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=2avgS6ZkFu
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:generic-cf, lever:sft, lever:preference, lever:rl-reward, updates:behavior, contribution:method, contribution:negative-result, contribution:analysis, motivation:explainability, domain:math, scale:small, scale:mid, eval:confound-control, eval:held-out-evaluator, eval:ood, factor:outcome-rl, model:qwen2.5-7b, model:qwen2.5-3b, model:qwen2.5-14b, model:olmo-2-7b, model:olmo-2-13b, model:llama-3.1-8b, metric:causal-redundancy-of-reasoning, metric:causal-importance-of-reasoning, metric:span-substitution-sensitivity]
---
**Problem** A correct answer with a plausible CoT can still bypass the CoT. Does accuracy RL or rationale-preference training lower the CoT's causal redundancy (CORD)?
**Method** Qwen2.5-7B, GRPO on DAPO-Math. Arms: DPO preferring low-CORD rationales; scalar CORD/CIR/SR rewards; direct answer-likelihood gradients under corrupted or question-masked CoT. DCO adds bounded Huber suppression of early-prefix answer recovery and a budgeted KL on intact paths. Eval: CORD, CIR, all-layer donor patching.
**Findings** RLVR (+10.1/+13.5pp accuracy) and DPO (changes CoTs) do not consistently lower held-out CORD; similar for Qwen 3B/14B and OLMo-2 on GSM8K (Llama inconclusive). Scalar credit fails. Naive direct training cuts CORD but costs 2.3 to 6.4pp accuracy. DCO: ∆CORD −0.197 to −0.347, accuracy −0.6 to +0.4pp, higher CIR, more CoT- and less question-sensitive. Over 20x fewer GPU-hours than reward-based GRPO.
**Limits** Math only. DCO tested on Qwen2.5-7B only. Reward and direct routes start from different training stages. SR (verifier sufficiency) not improved. Patching measures source sensitivity, not mechanism. Code promised on acceptance. Under review, not yet peer-reviewed.

**Relations**
- builds-on [[yu2026outcome]]: uses its CIR truncation metric and SR verifier metric as secondary measures
- compares-to [[yu2026outcome]]: CIR/SR auxiliary-reward GRPO arms as baselines; no consistent held-out CORD reduction
- compares-to [[jia2026faithfulness]]: reproduces update/gradient masking, CoT-gradient, FACT channels; no consistent CORD reduction

**New tags**
- (none)
