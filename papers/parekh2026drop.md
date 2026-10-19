---
key: parekh2026drop
title: "Drop the Act: Probe-Filtered RL for Faithful Chain-of-Thought Reasoning"
authors: "Parekh & Goyal"
year: 2026
venue: "ICML 2026 workshop (FAGEN)"
url: https://arxiv.org/abs/2605.11467v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:interp-tool, signal:judge, lever:rl-reward, lever:rl-mechanics, updates:explanation, contribution:method, motivation:explainability, motivation:efficiency, domain:math, domain:code, domain:agentic, domain:mcq, scale:small, eval:optimization-pressure, eval:confound-control, model:deepseek-r1-distill-llama-8b, model:deepseek-r1-distill-qwen-7b, metric:performativity-ratio, metric:faithful-fraction]
---
**Problem** "Reasoning theater": the CoT keeps going after the answer can already be recovered, so post-commitment steps contribute nothing.
**Method** Forced answering at step prefixes → commitment labels → attention probe on frozen-base activations. ProFIL: during GRPO, rollouts the probe scores as high-theater get zero reward and advantage.
**Findings** Probe-rated theater −11–100% across 4 domains; GPT-4.1 judge +24pp faithful on LCB. On LCB, matched length penalty worsens theater and frozen-probe AUROC stays 1.0 (no evasion); CAA steering falls short. Accuracy kept or up, but LCB final greedy@1 drops (0.214→0.183). Probes and code released.
**Limits** Temporal, not logical or causal, faithfulness. Main metric reuses the training probe. 7–8B models, one seed; backbone confounded with domain.

**Relations**
- builds-on [[prasad2026features]]: uses RLFR-style gated attention probe as reward; reads frozen base, not policy
- builds-on [[lanham2023measuring]]: forced answering on truncated CoT prefixes defines the commitment point

**New tags**
- (none)
