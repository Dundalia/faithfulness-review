---
key: skaf2025large
title: "Large language models can learn and generalize steganographic chain-of-thought under process supervision"
authors: "Skaf, Ibanez-Lissen, McCarthy et al."
year: 2025
venue: "NeurIPS 2025"
url: https://arxiv.org/abs/2506.01926v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:hidden-info, reveals:cot-reliance, signal:cot-intervention, signal:env-label, signal:judge, lever:rl-reward, updates:explanation, contribution:negative-result, contribution:analysis, motivation:monitoring, domain:math, domain:synthetic, domain:open-qa, scale:small, eval:optimization-pressure, eval:ood, model:qwen2.5-3b, model:genprm-7b, metric:encoded-cot-rate, metric:penalized-string-frequency, metric:prefill-ablation-accuracy]
---
**TL;DR** Shows that RL penalties on task-critical CoT strings make models switch to substitute encodings that stay load-bearing, preserve accuracy, and generalize to never-penalized strings, on toy tasks.
**Problem** CoT penalties can hide reasoning but keep behavior. Is the hidden CoT still load-bearing (steganographic)? Does the encoding generalize?
**Method** PPO, task reward minus regex CoT penalty on task-critical strings: arithmetic, coin flip (Qwen2.5-3B); ExploreToM with held-out names (GenPRM-7B). Prefill, error-injection, name-swap ablations test load-bearing.
**Findings** Models substitute strings (U+2217 for *, R/L for Heads/Tails), keep >90% arithmetic acc. Fixed R/L prefill drops coin-flip acc 98% → ~55%. ToM encodings (nicknames, initials) transfer to never-penalized names; task score roughly stable. Code released.
**Limits** Regex monitor only. 3B/7B, toy tasks. 1/3 coin-flip seeds converge. Arithmetic ablation n=5. ToM encodings hand-labeled.

**Relations**
- extends [[baker2025monitoring]]: CoT-pressure obfuscation shown to be load-bearing steganography that generalizes to unpenalized strings

**New tags**
- (none)
