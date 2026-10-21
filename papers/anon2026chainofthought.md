---
key: anon2026chainofthought
title: "Chain-of-Thought Reliance does not Guarantee Monitorability"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=xIuaaiFQOs
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:misbehavior, signal:planted-cf, signal:env-label, contribution:analysis, motivation:monitoring, domain:logic, domain:math, scale:mid, scale:large, eval:specificity, eval:adversarial, eval:confound-control, eval:measure-validation, factor:cot-necessity, factor:cot-length, model:qwen3.6-27b, model:glm-4.7-flash, model:qwen3.6-35b-a3b, model:qwen3.8-27b, model:gpt-oss-120b, model:gpt-5.6-terra, metric:g-mean-squared, metric:minimal-criterion-tpr, metric:hint-verbalization-rate]
---
**TL;DR** Tests whether harder tasks that raise reliance on CoT make it more monitorable, finding hint-usage monitorability stays flat or drops, partly because CoTs get longer.
**Problem** Does higher CoT reliance on harder tasks make CoTs more monitorable, as the CoT-necessity argument predicts?
**Method** 2 (hint evals) / 7 (side-task evals) hybrid reasoning models; difficulty-scaled ZebraLogic, Chain Sum Terms, Count Bits; reliance = with-CoT minus no-CoT accuracy; grader-hacking hints (also list-index hints) and secret side tasks; gpt-oss-120b and GPT-5.6 Terra monitors; g-mean2.
**Findings** Hint monitorability flat or down up to 30pp (larger with gpt-oss-120b monitor), partly from longer CoTs; keeping only the last 8k tokens recovers up to 16pp. Reliance stops no-CoT side-task evasion but not persuading the gpt-oss-120b monitor.
**Limits** Toy arithmetic/logic tasks; evasion prompted, not trained; failed side tasks excluded; Terra monitor near-saturated; no code release reported; under review.

**Relations**
- contradicts [[emmons2025chain]]: Higher CoT reliance (task or hint difficulty) does not raise hint-usage monitorability; can drop 30pp
- builds-on [[guan2025monitoring]]: Implements its hint-based and side-task evals, TPRmc and g-mean2 metric
- builds-on [[chen2025reasoning]]: Uses its grader-hacking hint type, here leaking incorrect answers

**New tags**
- (none)
