---
key: egan2026hint
title: "Hint-based CoT faithfulness evals still mostly work on Claude"
authors: "egan"
year: 2026
venue: "blog (LessWrong)"
url: https://www.lesswrong.com/posts/x6spD5nQQS9MiP8ac/hint-based-cot-faithfulness-evals-still-mostly-work-on
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, signal:planted-cf, contribution:analysis, contribution:meta-evaluation, motivation:monitoring, domain:mcq, scale:large, scale:closed, eval:confound-control, eval:measure-validation, factor:cue-design, model:claude-sonnet-4.5, model:claude-opus-4.8, model:claude-fable-5, model:deepseek-r1, model:gpt-5.6, model:gpt-5, metric:hint-verbalization-rate, metric:towards-bias-switch-rate]
---
**Problem** Anthropic system cards say hint-based CoT faithfulness evals no longer work on Claude, which supposedly stopped using hints.
**Method** Re-runs the Chen et al. hint eval: MMLU + GPQA-Diamond, 6 hint types, 30 models (10 Claude); results split by correct vs incorrect hint; Chen's normalized metric with an Opus 4.8 judge; code and transcripts released.
**Findings** Every model still follows hints, less often when the hint is wrong. Followed incorrect hints are verbalized more (median gap 34 points; it persists under mention-only and resampling controls). The R1 numbers did not replicate, and the choice of judge shifts faithfulness scores.
**Limits** Blog post, not peer reviewed; run by an automated research scaffold (author about 85% confident). Few correct-hint cases; newer models are judged on reasoning summaries, not raw CoT; no ground truth for the judge.

**Relations**
- builds-on [[chen2025reasoning]]: reuses its six hints, released prompts and normalized faithfulness metric on newer models
- contradicts [[chen2025reasoning]]: R1 follows incorrect hints far less than Chen reported; higher faithfulness may reflect the judge

**New tags**
- (none)
