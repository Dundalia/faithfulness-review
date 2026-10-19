---
key: lee2026beyond
title: "Beyond Correctness: Learning Robust Reasoning via Transfer"
authors: "Lee, Abbasloo, Tack & Shin"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://arxiv.org/abs/2602.08489v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:correctness, signal:cot-intervention, signal:env-label, lever:rl-reward, updates:explanation, contribution:method, motivation:reasoning-quality, domain:math, domain:mcq, scale:small, eval:ood, eval:scaling, model:qwen2.5-7b, model:llama-3.1-8b, model:qwen2.5-3b, model:llama-3.2-3b, metric:reasoning-transferability]
---
**Problem** RLVR rewards only final answers, so reasoning traces can be brittle and multi-sample consistency (Maj@K) lags.
**Method** RLTR: GRPO plus a transfer reward. The generator's CoT is truncated (tau in [0.3,0.9]) and a frozen receiver (Qwen2.5-3B; Llama-3.2-3B for Llama) continues it; reward if the receiver's answer is correct. Generators Qwen2.5-7B and Llama-3.1-8B, MATH train.
**Findings** MATH-500 Maj@64 84.2 vs 82.2 (RLVR); AMC23 67.5 vs 61.7. Matches RLVR accuracy in ~2.5x fewer steps, at +7% FLOPs/step. Transferability tracks Maj@64; RLVR's drops late in training. Accuracy cost on Llama: 45.0 vs 50.0.
**Limits** Transferability means a prefix is useful to another model, not that it is faithful. Measured only on MATH-500 with the training receiver; OOD gains are accuracy/Maj@K only. Models up to 8B; math plus GPQA only; no code release stated.

**Relations**
- (none)

**New tags**
- (none)
