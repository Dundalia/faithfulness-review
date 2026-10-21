---
key: kirchner2024proververifier
title: "Prover-Verifier Games improve legibility of LLM outputs"
authors: "Kirchner, Chen, Edwards et al."
year: 2024
venue: "preprint"
url: https://arxiv.org/abs/2407.13692v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:correctness, signal:env-label, lever:multi-agent-game, lever:rl-reward, updates:explanation, contribution:method, contribution:negative-result, motivation:scalable-oversight, domain:math, scale:closed, model:openai-internal, metric:human-judge-accuracy, metric:human-judge-time, metric:steps-to-exploit, metric:balanced-best-of-n, eval:human-study, eval:adversarial, eval:optimization-pressure]
---
**TL;DR** Introduces checkability training, a prover-verifier game pitting helpful and sneaky provers against a small verifier: math solutions become more legible to time-limited humans, at some accuracy cost.
**Problem** Correctness-only RL on GSM CoTs → accurate but illegible solutions; time-limited humans struggle to check them.
**Method** Checkability training (PVG-inspired): rounds of small verifier (correctness ranking) + PPO prover role-conditioned helpful (correct+convincing) / sneaky (wrong+convincing); GPT-4-family, verifier 10^-4–10^0 prover compute.
**Findings** Verifier robustness ↑ over rounds (sneaky attacks slower, balanced BoN ↑); sneaky flaws subtler, human acc on them ↓ (flawed pilot); helpful acc ↑, human judge acc/speed ↑ → small-verifier legibility transfers to humans. Legibility tax: acc below correctness-only RL.
**Limits** GSM only; needs ground-truth labels; CoT conflated with justification; too-small/equal-size verifiers fail; HPs partly tuned; internal undisclosed models, no code mentioned.

**Relations**
- (none)

**New tags**
- (none)
