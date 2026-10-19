---
key: li2026when
title: "When Reasoning Traces Conflict with Evidence: How Answer Configuration Shapes Evidence Following"
authors: "Li, Shi & Li"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2610.20805v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:generic-cf, contribution:analysis, contribution:meta-evaluation, contribution:metric, motivation:reasoning-quality, domain:open-qa, scale:small, scale:mid, scale:large, eval:scaling, eval:confound-control, eval:measure-validation, factor:answer-configuration, factor:evidence-quality, model:gpt-oss-20b, model:gemma-4-e4b, model:qwen3-14b, model:qwen3-4b, model:qwen3-32b, model:deepseek-v4-pro, metric:evidence-following-rate, metric:trace-contribution, metric:trace-ablation-answer-change-rate]
---
**Problem** A retained reasoning trace can raise accuracy but also override updated evidence. Trace-deletion tests may not tell these two roles apart.
**Method** Traces written from original or entity-edited evidence (683 HotpotQA, 417 MuSiQue verified pairs) are crossed with the other version. Answers come from continuation in the thinking block or a separate answer call. Trace removal, random half-trace and answer-swap corruption ablations; gold vs distractor evidence before vs after the trace; 8 models.
**Findings** Separate call raises evidence-following by 29.9-60.6 pts while trace contribution differs by at most 4.7 pts, costing at most 1.9 pts matched accuracy. Continuation follows the stale trace 65.6-87.0%. Distractors weaken separate-call correction. Final line carries most value. Input order explains most of the gap in 2 of 3 models. Re-reason corrects 86.6% (Qwen3-14B, about 2x tokens); a verify prompt does not help.
**Limits** Two English multi-hop QA datasets; synthetic entity-substitution conflicts; only pairs whose traces state an explicit answer; three paired models (DeepSeek separate-call only); no code release mentioned.

**Relations**
- builds-on [[lanham2023measuring]]: uses trace removal, shortening and corruption to measure how much answers use the trace
- builds-on [[paul2024making]]: crossed cells mirror its pairing of reasoning from a modified input

**New tags**
- factor:answer-configuration: How the answer stage consumes a stored CoT (continued in the model's thinking block vs a separate answer call; trace position, input order, instruction), studied as a driver of reliance on the CoT.
- factor:evidence-quality: Quality of the context the CoT or answer is generated from (gold evidence vs distractor-laden or distractor-only context), studied as a driver of reliance on the CoT.
