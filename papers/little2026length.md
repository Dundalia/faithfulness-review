---
key: little2026length
title: "Length Penalties Make Chain-of-Thought Less Monitorable"
authors: "Little"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2607.09786v4
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, signal:planted-cf, contribution:analysis, motivation:monitoring, domain:mcq, domain:math, scale:small, scale:mid, eval:ood, eval:behavior-control, model:qwen3-4b, model:qwen3-14b, model:nemotron-nano-9b-v2, metric:faithfulness-score-lb, metric:hint-verbalization-rate, metric:length-matched-mention-gap, factor:cot-length]
---
**Problem** Length penalties cut CoT inference cost; prior tests found no clean effect on monitorability (whether CoT still verbalizes the hints driving answers).
**Method** GRPO/DAPO RL on MMLU-Pro-R, prompt-calibrated length targets 30-60% of base CoT vs. no-penalty RL control; Qwen3-4B/14B. 9 hint types x 5 MCQ sets; human-validated GPT-5.4 mini monitor; FS_lb lower bound; length-matched random sentence deletion as reference.
**Findings** 30% target: FS_lb drops 39% (14B), 35% (4B) relative on MMLU-Pro-R, falls on all sets; wrong-answer hints still switch answers ~as often; control keeps or raises faithfulness. Hint mentions 7-35 pp below length-matched deletions. Accuracy cost <=4.3 pts.
**Limits** One RL recipe, MCQ only; two Qwen sizes + one Nemotron run; mostly single-seed; monitor errors vary with chain length; no code release stated.

**Relations**
- builds-on [[chen2025reasoning]]: hint-switch setup, monitor design; extends its normalization to the partial-identification lower bound FS_lb
- builds-on [[turpin2023language]]: adapts its biasing-hint interventions to test hint verbalization
- builds-on [[guan2025monitoring]]: adopts its hint-eval monitor setup; tests the length-pressure risk it flagged
- contradicts [[macdermott2025reasoning]]: no consistent monitorability effect of length penalties at fixed accuracy; here a clear loss
- contradicts [[lewislim2026efficient]]: they find monitorability robust to efficiency training; here hint verbalization drops

**New tags**
- (none)
