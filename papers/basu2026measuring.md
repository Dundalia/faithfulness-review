---
key: basu2026measuring
title: "Measuring and curing reasoning rigidity: from decorative chain-of-thought to genuine faithfulness"
authors: "Basu & Chakraborty"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2603.22816v3
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:interp-tool, lever:rl-reward, lever:rl-mechanics, lever:prompt-pipeline, updates:behavior, contribution:metric, contribution:analysis, contribution:method, contribution:theory, motivation:explainability, domain:classification, domain:math, domain:mcq, domain:synthetic, scale:small, scale:mid, scale:large, scale:closed, model:o4-mini, model:gpt-5.4, model:claude-opus-4.6, model:grok-4-fast, model:deepseek-r1-distill-qwen-32b, model:deepseek-r1-distill-qwen-1.5b, metric:step-level-reasoning-capacity, metric:step-necessity, metric:step-sufficiency, metric:reasoning-integrity-score]
---
**TL;DR** Introduces SLRC, a black-box sentence-removal measure of CoT reliance, finding frontier models range from genuine to decorative CoT, with RL reasoning training, not scale, predicting faithfulness.
**Problem** Is the CoT actually used, or is it decorative (the answer stays the same whatever the steps say)? Step-level causal metrics need weights or logits, so closed frontier models go unmeasured.
**Method** Black-box SLRC = necessity (drop 1 sentence → answer flips) × (1 − sufficiency); 16 frontier models, up to 6 tasks; direct-vs-CoT gap, synthetic cue tasks, attention probes. RIS adds sycophancy. LC-CoSR: RL rewarding step necessity + Lyapunov KL bound.
**Findings** 3 modes: genuine (o4-mini 74–88% nec on 5/6 tasks), scaffolding (Kimi +94pp acc, 1% nec), decorative (GPT-5.4, Claude). RL reasoning training predicts faithfulness; thinking tokens and scale do not. Prompting fails (+8.7pp nec, acc 95→76%). High-SLRC models more sycophantic (ρ=0.53, p=0.09); RIS predicts error detection (ρ=0.66, n=11). LC-CoSR reward −0.13 vs −0.33 FARL, −0.34 GRPO/CSR.
**Limits** Training only on a 1.5B model (N=200, LoRA, 1 epoch); only avg reward reported, no SLRC after training; Lyapunov constraint never triggered. Uneven task coverage. The "RL-trained" R1 models are distills; Grok-4's non-RL label inferred from behavior. Code available only on request.

**Relations**
- compares-to [[akter2025causal]]: CSR is a training baseline: same reward as GRPO, CoSR/LC-CoSR beat it
- contradicts [[han2026rfeval]]: says RL reasoning training yields faithful CoT; Han finds RLVR lowers faithfulness

**New tags**
- (none)
