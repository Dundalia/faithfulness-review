---
key: arora2025training
title: "Training Language Models to Reason Efficiently"
authors: "Arora & Zanette"
year: 2025
venue: "NeurIPS 2025"
url: https://arxiv.org/abs/2502.04463v4
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, signal:planted-cf, contribution:method, motivation:efficiency, domain:math, domain:mcq, domain:logic, scale:small, factor:cot-length, model:deepseek-r1-distill-qwen-7b, model:deepseek-r1-distill-qwen-1.5b, metric:hint-verbalization-rate]
---
**Problem** Long CoTs make reasoning models costly to serve; side check on whether compressing CoT hurts faithfulness.
**Method** RLOO with a correctness reward times a per-prompt-normalized length penalty (alpha), on R1-Distill-Qwen 1.5B/7B with math data. Faithfulness: professor-hint test on 5k MMLU prompts, verbalization checked by string match.
**Findings** 7B: 50% fewer tokens for <5% accuracy loss. Hint verbalization drops from 0.622 (R1-Distill) to 0.480-0.583 under compression, still above an instruct model's 0.301. Code and models released.
**Limits** Faithfulness is a side check: 7B only, one cue type, keyword matching, no error bars, not monotonic in alpha.

**Relations**
- builds-on [[chua2025deepseek]]: uses its Stanford-professor hint test on MMLU to score faithfulness
- builds-on [[chen2025reasoning]]: adopts its hint-verbalization score, conditioned on the answer switching to the hint

**New tags**
- (none)
