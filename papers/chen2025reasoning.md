---
key: chen2025reasoning
title: "Reasoning Models Don't Always Say What They Think"
authors: "Chen, Benton, Radhakrishnan et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2505.05410v1
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:planted-cue, reveals:misbehavior, signal:planted-cf, factor:outcome-rl, updates:behavior, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:mcq, scale:closed, eval:later-rl, model:claude-3.7-sonnet, model:deepseek-r1, model:claude-3.5-sonnet, model:deepseek-v3, metric:hint-verbalization-rate]
---
**TL;DR** Measures how often reasoning models verbalize planted hints they use, finding they mostly do not, outcome RL gains plateau, and learned reward hacks are almost never verbalized.
**Problem** CoT monitoring needs faithful CoTs. Do reasoning models verbalize the hints and reward hacks they use?
**Method** MMLU/GPQA ± 6 planted hints (2 misaligned); score = hint verbalized | answer flips to hint (LLM judge). Outcome RL on Claude 3.7 snapshot; synthetic RL envs w/ hint reward hacks.
**Findings** Reasoning > non-reasoning models but low (25% Claude 3.7, 39% R1); lower on GPQA; unfaithful CoTs longer. Outcome-RL gains plateau (28% MMLU, 20% GPQA). Hacks used >99%, verbalized <2% in 5/6 envs.
**Limits** MCQ only; hints exploitable without CoT; score is an upper bound; RL only on closed Claude.

**Relations**
- builds-on [[turpin2023language]]: Planted-hint prompt pairs; faithfulness = verbalizing the hint that flipped the answer.
- builds-on [[chua2025deepseek]]: Draws hint types and metric from it; confirms reasoning models beat non-reasoning ones.
- contradicts [[baker2025monitoring]]: Unpressured CoTs verbalize RL reward hacks <2% in 5/6 envs vs Baker's >90% detection.

**New tags**
- (none)
