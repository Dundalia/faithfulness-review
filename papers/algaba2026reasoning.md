---
key: algaba2026reasoning
title: "How Much Does a Reasoning Summary Reveal? An Observability Ladder for Large Language Models"
authors: "Algaba, Carlon, Delcon et al."
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://arxiv.org/abs/2608.02089v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:reasoning-summary, reveals:correctness, signal:env-label, contribution:metric, contribution:analysis, motivation:monitoring, motivation:reliability, domain:mcq, domain:math, scale:small, scale:mid, scale:large, eval:monitor-scope, eval:confound-control, eval:measure-validation, eval:ood, factor:cot-length, factor:monitor-choice, model:qwen3-4b, model:qwen3-8b, model:qwen3-14b, model:gpt-oss-20b, model:gpt-oss-120b, model:gpt-5-mini, metric:monitor-auc, metric:within-item-auroc, metric:access-level-auroc-increment, metric:excess-auroc-ratio]
---
**TL;DR** Measures how much responses, self-summaries, traces and internals reveal about answer correctness: summaries carry most of the trace's signal, but both add little once the prompt is visible.
**Problem** Users see a response or a short summary, not the full trace. How much does each of these displays reveal about whether the answer is correct?
**Method** Fixed runs, 5 Qwen3/gpt-oss models, GPQA-Diamond, MMLU-Pro, Omni-MATH-2. Linear probes predict correctness from response, self-summary written from the trace alone (≤90 words requested), trace, internals; prompt shown or withheld. Controls: repeated runs, length, masking; GPT-5-mini reader.
**Findings** Prompt withheld: summary AUROC 0.774 vs trace 0.813; summary adds +0.156 over response. Prompt visible: summary +0.019, trace +0.041. Same-question runs, prompt withheld: linear summary readers near chance (0.503–0.545); GPT-5-mini recovers more, trace still +0.034 ahead. Much linear-reader trace signal tied to length.
**Limits** Own-model, non-adversarial summary proxy, not provider summaries. Correctness labels only, not faithfulness. Mostly linear readers; GPT-5-mini tested on one model and benchmark. Length confound unresolved. Code and data released.

**Relations**
- (none)

**New tags**
- (none)
