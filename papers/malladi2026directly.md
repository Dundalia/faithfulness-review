---
key: malladi2026directly
title: "Directly Optimizing Natural Language Explanations for Behavioral Faithfulness: Simulatability and Recoverability"
authors: "Malladi & Srivastava"
year: 2026
venue: "ICML 2026"
url: https://openreview.net/forum?id=8fAh8C27Hj
checked: 2026-10-15
tags: [source:trustme, source:faith-improvement, object:external-expl, reveals:decision-factors, signal:generic-cf, lever:rl-reward, updates:explanation, contribution:method, motivation:explainability, domain:classification, domain:synthetic, scale:small, eval:ood, eval:human-study, eval:held-out-evaluator, model:llama-3.1-8b, model:llama-3.2-3b, model:llama-3.3-70b, model:gpt-4o, model:deepseek-r1-distill-llama-70b, metric:simulatability, metric:recoverability]
---
**TL;DR** Introduces OPeX, which trains an explainer with GRPO to write explanations that let a proxy LLM predict a classifier's labels: far more predictive than GPT-4o or human explanations.
**Problem** Classifier NL explanations (MaNtLE, prompted LLMs, CoT) favor plausibility or human rationales → poorly predict model behavior.
**Method** OPeX: Llama-3.1-8B LoRA + GRPO; reward = Llama-3.3-70B proxy's accuracy predicting classifier labels from one task-level explanation, on seen (recoverability) or held-out inputs (simulatability). Tested on unseen tasks/classifiers.
**Findings** Sim 0.86, recov 0.99 vs 0.68, 0.73 for GPT-4o, Llama-70B; beats MaNtLE, R1-distill CoT, human expls. Holds on synthetic tasks, GPT-4o proxy, 3B. Humans +15 pts vs no expl. Code + weights.
**Limits** Explains small external classifiers, not the LLM. Classification only. LLM proxy for reward and main eval. One-dataset human study.

**Relations**
- (none)

**New tags**
- (none)
