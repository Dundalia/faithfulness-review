---
key: ramnath2024tailoring
title: "Tailoring Self-Rationalizers with Multi-Reward Distillation"
authors: "Ramnath, Joshi, Hallinan et al."
year: 2023
venue: "ICLR 2024"
url: https://arxiv.org/abs/2311.02805v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:correctness, signal:judge, lever:sft, lever:rl-reward, updates:explanation, contribution:method, motivation:explainability, motivation:reasoning-quality, domain:mcq, scale:small, eval:human-study, model:t5-large, model:text-davinci-003, metric:gold-label-consistency]
---
**TL;DR** Introduces MaRio, which distills a small T5 self-rationalizer and tunes it with plausibility, diversity, consistency and accuracy rewards: better rationales and accuracy than SFT, preferred by humans.
**Problem** Good self-rationalization thought to need ~100B+ LMs. Prior work judges rationales mostly by task accuracy, ignoring their plausibility and consistency.
**Method** MaRio: distill T5-large on GPT-3 CoT rationales, then multi-reward Quark with one set of control tokens per reward (Vera plausibility, n-gram diversity, gold-label consistency, task acc). Classic (joint) and Additive (staged) variants.
**Findings** 5 MC QA sets: best avg NRG vs SFT, product-reward and STaR-like filtering (not on every metric); acc above SFT on all (StrategyQA 57.6→65.1). Humans prefer MaRio over SFT on 66.6–83.15% of items. Acc-only training does not improve rationales. Code and rationales released.
**Limits** 0.7B T5 only. Consistency is measured against the gold label, not the model's prediction. A weak factuality reward got hacked (repetition, incomplete rationales), so no factuality reward is used.

**Relations**
- builds-on [[wang2023pinto]]: reuses PINTO's CoT demonstrations to sample GPT-3 rationales for OpenBookQA and QASC

**New tags**
- (none)
