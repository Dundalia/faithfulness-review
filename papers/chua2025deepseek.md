---
key: chua2025deepseek
title: "Are DeepSeek R1 And Other Reasoning Models More Faithful?"
authors: "Chua & Evans"
year: 2025
venue: "ICLR 2025 workshop (FM-Wild)"
url: https://arxiv.org/abs/2501.08156v5
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:planted-cue, signal:planted-cf, contribution:analysis, motivation:explainability, motivation:monitoring, domain:mcq, scale:small, scale:mid, scale:large, scale:closed, eval:specificity, model:deepseek-r1, model:deepseek-v3, model:qwq-32b-preview, model:gemini-2.0-flash-thinking, model:qwen2.5-72b, model:claude-3.5-sonnet, metric:hint-verbalization-rate, metric:articulation-f1, factor:outcome-rl, factor:cot-grader, factor:cot-length]
---
**TL;DR** Shows reasoning models like DeepSeek R1 state the influence of planted cues far more often than non-reasoning models, and that a reward model tends to prefer unfaithful CoTs.
**Problem** Are RL-trained reasoning models' CoTs more faithful than non-reasoning LLMs'? Why?
**Method** MMLU + 7 planted cues; on cue-induced switches, GPT-4o judge checks if CoT states cue's influence. 3 reasoning vs 7 non-reasoning models; GPT-4o-as-RM rates faithful vs unfaithful CoTs.
**Findings** Reasoning models articulate far more (R1 59% vs V3 7%, professor cue), also by F1; all weak on post-hoc (≤10%) and are-you-sure (~0). RM (63-71%) and shortest length prefer unfaithful CoTs. R1-distilled models articulate more; factor-listing prompt doesn't help.
**Limits** Synthetic MCQ cues, verbalization only; subjective judge, partly hand-checked; RM evidence indirect, outcome-RL cause only hypothesized. Not highly faithful in absolute terms. No code reported.

**Relations**
- builds-on [[turpin2023language]]: adopts planted-cue verbalization test of CoT faithfulness, applied to reasoning models
- builds-on [[chua2024biasaugmented]]: reuses its MMLU cues (black squares, argument, post-hoc, wrong few-shot, are-you-sure)

**New tags**
- (none)
