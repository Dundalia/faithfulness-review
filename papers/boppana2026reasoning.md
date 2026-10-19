---
key: boppana2026reasoning
title: "Reasoning Theater: Disentangling Model Beliefs from Chain-of-Thought"
authors: "Boppana, Ma, Loeffler et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2603.05488v4
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, reveals:own-uncertainty, signal:interp-tool, signal:cot-intervention, contribution:analysis, contribution:metric, motivation:monitoring, motivation:efficiency, motivation:explainability, domain:mcq, scale:small, scale:mid, scale:large, eval:ood, eval:scaling, eval:measure-validation, eval:monitor-scope, eval:confound-control, factor:cot-necessity, model:deepseek-r1, model:gpt-oss-120b, model:deepseek-r1-distill-qwen-1.5b, model:deepseek-r1-distill-qwen-7b, model:deepseek-r1-distill-qwen-14b, model:deepseek-r1-distill-qwen-32b, metric:performativity-rate, metric:prefix-answer-decoding-accuracy, metric:inflection-rate-per-step]
---
**Problem** Reasoning models may keep writing CoT after internally settling on an answer ("performative" CoT), so text monitors lag the model's belief.
**Method** Attention probes, forced answering and a Gemini-2.5-Flash CoT monitor decode the final answer from CoT prefixes. Models: DeepSeek-R1, GPT-OSS-120B, R1-Qwen distills 1.5-32B. Tasks: MMLU-Redux vs GPQA-D.
**Findings** MMLU CoT largely performative (R1 performativity rate 0.417 vs 0.012 on GPQA-D), more so in larger models. Inflections twice as frequent per step in less confident traces. Probe early exit saves 68% of tokens and keeps 97% of accuracy on MMLU. Code released.
**Limits** 4-option MCQ only; correlational; gap measured against one LLM monitor; timing of inflections vs probe shifts inconsistent and threshold-sensitive; distill probes unstable across layers.

**Relations**
- builds-on [[lanham2023measuring]]: uses its early (forced) answering on truncated CoT prefixes as a belief readout

**New tags**
- (none)
