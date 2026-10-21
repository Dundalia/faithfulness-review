---
key: xiong2026monitorability
title: "Monitorability as a Free Gift: How RLVR Spontaneously Aligns Reasoning"
authors: "Xiong, Chen & Lakkaraju"
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2602.03978v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, reveals:cot-reliance, reveals:misbehavior, signal:planted-cf, signal:cot-intervention, factor:outcome-rl, contribution:analysis, motivation:monitoring, domain:mcq, domain:math, domain:code, domain:logic, scale:small, model:deepseek-r1-distill-qwen-1.5b, model:qwen3-4b, metric:g-mean-squared, metric:draft-reliance, metric:draft-answer-consistency, eval:ood, eval:specificity, eval:scaling]
---
**TL;DR** Tests whether RLVR improves CoT monitorability as a free side effect: gains come early then plateau, depend on training data, and track entropy drops rather than capability.
**Problem** Is RLVR's "free gift" of CoT monitorability universal, a capability side effect? What drives it?
**Method** GRPO (task+format reward) on Math/Code/Science/IF data & mixes, DS-R1-Qwen-1.5B & Qwen3-4B; track hint g-mean² (Qwen2.5-32B monitor), D2A draft-swap, entropy, attention; ablate train length, difficulty.
**Findings** Gains early, then plateau; data-dependent (Science training can hurt); IF data, diversity, IF cascade best; weak/negative capability link (IF-only cuts DS-1.5B acc); tracks entropy drop & prompt attention, not answer→CoT; longer train length, hard train/eval data → lower.
**Limits** ≤4B models; mechanisms correlational; input-intervention metric may reward prompt sensitivity ("false sense of monitorability"); D2A agreement weaker on DS-1.5B general tasks; no code release mentioned.

**Relations**
- builds-on [[guan2025monitoring]]: adopts g-mean² metric, hint, sycophancy and sandbagging intervention evals
- extends [[chen2025reasoning]]: systematizes early-RL faithfulness gain then plateau across domains and models
- builds-on [[chua2025deepseek]]: hint-based intervention setup cited as source alongside Chen and Guan

**New tags**
- (none)
