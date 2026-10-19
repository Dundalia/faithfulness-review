---
key: reddy2025principled
title: "A Principled Approach to Chain-of-Thought Monitorability in Reasoning Models"
authors: "Reddy, Chakraborty & Bedi"
year: 2025
venue: "withdrawn (ICLR 2026 submission)"
url: https://openreview.net/forum?id=opU91paIvZ
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, signal:planted-cf, lever:sft, lever:rl-reward, updates:explanation, contribution:method, contribution:negative-result, motivation:monitoring, motivation:explainability, domain:mcq, domain:math, scale:small, model:deepseek-r1-distill-qwen-1.5b, model:qwen2.5-7b, metric:hint-verbalization-rate, metric:cot-length]
---
**Problem** CoTs hide hint use and are verbose → hard to monitor. RL on a monitorability reward stalls: the base model rarely satisfies f(z), so the gradient is ~0.
**Method** Constrained opt (max f(z) s.t. reward ≥ base). Prompted Qwen2.5-7B rewrites R1-Distill-1.5B traces (verbalize hint / shorten) → keep reward-preserving, constraint-satisfying rewrite w/ max base likelihood → SFT.
**Findings** Naive Lagrangian RL: no gain (~30→31%). SFT: hint verbalization 15→25% avg over 6 MMLU-Pro hint types, beats direct/indirect prompting (~16%). CoTs up to 60% shorter (GSM8K, MATH500). Math acc ~90% of base.
**Limits** One 1.5B model. Qwen-14B judge only checks whether the hint is mentioned. Depends on the prior. Inconsistent numbers (gain 10% vs 22pp; acc ≥96% vs ~90%); no MMLU-Pro acc shown. Conciseness assumed monitorable, not tested. Code only promised.

**Relations**
- builds-on [[chen2025reasoning]]: reuses its hint-verbalization faithfulness eval on MMLU-Pro; hint templates recreated

**New tags**
- (none)
