---
key: young2026measuring
title: "Measuring Faithfulness Depends on How You Measure: Classifier Sensitivity in LLM Chain-of-Thought Evaluation"
authors: "Young"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2603.20172v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, signal:planted-cf, contribution:meta-evaluation, contribution:analysis, motivation:explainability, domain:mcq, scale:small, scale:mid, scale:large, eval:measure-validation, model:deepseek-r1, model:qwen3.5-27b, model:olmo-3.1-32b, model:gpt-oss-120b, model:deepseek-v3.2-speciale, model:claude-sonnet-4, metric:hint-verbalization-rate, metric:inter-classifier-kappa, metric:classifier-rank-correlation]
---
**Problem** Hint-faithfulness of CoT is reported as single numbers. Are these numbers stable across the classifiers that judge whether a trace acknowledges the hint?
**Method** 10,276 hint-influenced traces from 12 open-weight reasoners (7B-1T; MMLU/GPQA; five Chen-style hints), each scored by three classifiers: regex, regex plus a 3-LLM judge panel, and a Claude Sonnet 4 judge. Compared with Cohen's kappa, McNemar and Spearman.
**Findings** Faithfulness rates are 74.4% (regex), 82.6% (pipeline) and 69.7% (Sonnet). Per-model gaps reach 30.6pp. Sycophancy: kappa 0.06, gap 43.4pp. Model rankings partly reverse (Spearman 0.67; Qwen3.5-27B 1st to 7th). Classifiers split on lexical mention vs. epistemic dependence. Recommends reporting ranges across classifiers.
**Limits** No human ground-truth labels. Only text-based classifiers. Data come from an unpublished companion study. Single-author preprint. Code, prompts and labels released.

**Relations**
- builds-on [[chen2025reasoning]]: uses its five hint types and its hint-acknowledgment definition of faithfulness

**New tags**
- (none)
