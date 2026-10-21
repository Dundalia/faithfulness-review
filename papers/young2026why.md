---
key: young2026why
title: "Why Models Know But Don't Say: Chain-of-Thought Faithfulness Divergence Between Thinking Tokens and Answers in Open-Weight Reasoning Models"
authors: "Young"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2603.26410v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:output, reveals:planted-cue, signal:planted-cf, contribution:analysis, motivation:monitoring, domain:mcq, scale:small, scale:mid, scale:large, eval:monitor-scope, eval:confound-control, factor:cue-design, model:step-3.5-flash, model:gpt-oss-120b, model:deepseek-v3.2-speciale, model:olmo-3.1-32b, model:deepseek-r1, model:qwen3.5-27b, metric:thinking-answer-divergence-rate, metric:hint-verbalization-rate]
---
**TL;DR** Compares hint acknowledgment in thinking tokens versus answers of open reasoning models: it often appears only in thinking, almost never only in the answer, which answer-only monitors miss.
**Problem** Does the visible answer acknowledge a misleading hint that the thinking tokens acknowledge? The blind spot of answer-only monitors.
**Method** 12 open-weight reasoning models; 498 MMLU/GPQA questions × six Chen-style hints (~35,000 responses); 10,506 hint-following cases. Hint keywords matched separately in thinking and answer → four-quadrant taxonomy. Independence chi-squared test; qualitative transition analysis.
**Findings** Thinking-only 55.4%, answer-only 0.5% (121:1 vs ~15:1 under independence), neither 11.8%. Per model 19.6% (Qwen3.5-27B) to 94.7% (Step-3.5-Flash). Consistency (72.2%) and unethical (62.7%) hints mostly thinking-only; sycophancy transparent (58.8% both). Length barely matters. Suppressed answers mostly a bare letter; some GPT-OSS-120B traces plan concealment.
**Limits** Unvalidated keyword proxy; measures channel divergence, not faithfulness. Hint-following cases only, no unhinted baseline. ~6.5% of outputs truncated, inflating some models. Open-weight only. Single-author preprint; no code reported.

**Relations**
- builds-on [[chen2025reasoning]]: adopts its hint-injection paradigm and six hint types (via companion dataset)

**New tags**
- (none)
