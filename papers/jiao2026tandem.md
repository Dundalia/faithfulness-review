---
key: jiao2026tandem
title: "Tandem Reinforcement Learning with Verifiable Rewards"
authors: "Jiao, Singhal, West & Anderson"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2606.28166v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:correctness, signal:env-label, signal:judge, lever:rl-mechanics, updates:explanation, contribution:method, motivation:scalable-oversight, domain:math, scale:small, eval:ood, model:qwen3-4b, metric:handoff-robustness, metric:handoff-accuracy, metric:junior-cross-entropy, metric:distribution-overlap]
---
**Problem** RLVR gains may erode when a weaker partner joins; policy drift may push the CoT beyond a weaker model's predictive reach.
**Method** TRLVR: trainable senior and frozen pre-RL copy (junior) alternate at word boundaries (p=0.5); binary verifier reward on the joint rollout; GRPO loss on senior tokens only. Qwen3-4B, DeepScaleR math.
**Findings** Solo pass@k ≈ GRPO (no acc cost); step-handoff robustness 99.8% vs 94.3% (macro pass@4); junior CE −8.6%, JSD to junior −37%; KL-to-junior ablation (2 β values) doesn't match both. Code released.
**Limits** One 4B model, math only, self-paired junior; legibility = junior predictability, not faithfulness or human understanding; ~0.5× rollout throughput, 9.4 vs 7.8 h to selected checkpoint.

**Relations**
- (none)

**New tags**
- (none)
