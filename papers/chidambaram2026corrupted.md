---
key: chidambaram2026corrupted
title: "Corrupted Plans, Clean Traces: What Planning-Execution Decoupling Reveals About CoT Monitoring"
authors: "Chidambaram, Ilyas & Syrgkanis"
year: 2026
venue: "NeurIPS 2026"
url: https://arxiv.org/abs/2609.15989v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:misbehavior, reveals:planted-cue, signal:planted-cf, signal:env-label, lever:prompt-pipeline, updates:behavior, updates:explanation, contribution:attack, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:mcq, domain:code, domain:math, scale:small, scale:large, scale:closed, eval:adversarial, eval:monitor-scope, eval:specificity, eval:measure-validation, eval:scaling, factor:monitor-choice, model:qwen2.5-coder-7b, model:qwen3-8b, model:deepseek-r1, model:qwen3-235b-a22b, model:claude-3.7-sonnet, model:gpt-4o-mini, metric:monitor-recall, metric:undetected-successful-attack-rate, metric:monitor-auc]
---
**TL;DR** Shows corrupted plans injected into an actor's context let harmful behavior bypass CoT monitors, since actors follow and paraphrase the plans and even the best monitors miss many.
**Problem** CoT monitors assume an actor's harmful planning shows up in its own reasoning. Reasoning supplied in the actor's context may get around this.
**Method** Investigator agents (SFT+DPO) find stealthy TruthfulQA hints. Generalized as "plan injection": DeepSeek-R1 corrupts benign CoTs (APPS backdoors, Bio-Math hidden answer), which are offered as optional plans to Qwen3-8B and DeepSeek-R1. Five thinking and non-thinking monitors, with and without the plan; Qwen3-235B budget sweep.
**Findings** Actors follow the plans (best of 3: APPS 42-51%, Bio-Math 93-99%) and paraphrase them without attribution. Thinking monitors detect more on average, but the best misses at least 25%; self-authored attacks are caught far more often. Plan access or a larger monitor budget sometimes lowers detection.
**Limits** Two actors, two tasks. Budget study uses one monitor on extreme-selected transcripts, so prevalence is unknown. No end-to-end RAG or agent delivery. Abstract and Sec. 6.2 disagree on which task plan access hurts. No code release stated.

**Relations**
- builds-on [[chen2025reasoning]]: uses its hint-plus-acknowledgment-monitor setting for TruthfulQA attack discovery
- contradicts [[guan2025monitoring]]: larger monitor thinking budget can lower suspicion, against its claimed monotonic improvement

**New tags**
- (none)
