---
key: blandfort2026strangers
title: "Strangers to Themselves: What Language Models Say About Themselves Is Generic"
authors: "Blandfort & Pawar"
year: 2026
venue: "NeurIPS 2026 workshop (AI4GOOD)"
url: https://arxiv.org/abs/2609.09899v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-prediction, object:self-report, reveals:hidden-behavior, signal:generic-cf, lever:sft, updates:explanation, contribution:analysis, contribution:metric, contribution:negative-result, motivation:auditing, domain:mcq, domain:agentic, domain:social-bias, scale:mid, scale:large, scale:closed, model:llama-3.3-70b, model:claude-sonnet-5, model:gpt-5.5, model:deepseek-v4-pro, model:deepseek-v4-flash, model:gemma-4-31b, metric:prediction-behavior-correlation, metric:ceiling-normalized-correlation, metric:self-advantage, metric:signed-bias, eval:ood, eval:privileged-access, eval:preregistered]
---
**Problem** Do LM statements about their own behavior carry model-specific knowledge, or only generic priors about AI assistants?
**Method** 12 models predict their own per-condition behavior rates on 9 behavioral evals; 15 prediction methods incl. controls: generic-subject question, outside analyst, other models' answers, cross-model behavior mean; noise ceilings, pre-registered frozen test split. LoRA SFT on own behavior records (rate, residual, Binder-style corpora).
**Findings** Self-report r=+0.04; item-informed +0.24 ≈ generic-agent +0.28; others' self-predictions +0.35; self-advantage +0.02. Self-framing understates harmful behavior (-0.15 vs generic). Frontier models no better (+0.02, n.s.). SFT: narrow gains, shifts the predicted behavior, no transfer across evals or grain.
**Limits** Black-box only; 9 public evals, low-effort reasoning only; frontier floor effects on agentic evals; cannot separate ignorance from strategic misreporting. Code and measurements released.

**Relations**
- builds-on [[binder2024looking]]: replicates Binder property-prediction finetune as one of three self-prediction SFT corpora
- contradicts [[binder2024looking]]: Binder-style gains are single-prompt self-simulation, not behavioral self-knowledge; disputes privileged-access reading

**New tags**
- (none)
