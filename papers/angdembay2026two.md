---
key: angdembay2026two
title: "Two Regimes of Chain-of-Thought Unfaithfulness: Metric-Based Detection Fails Where Models Are Wrong"
authors: "Angdembay, Aryal & Rahimi"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2607.23458v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, reveals:planted-cue, signal:judge, signal:planted-cf, signal:by-construction, contribution:meta-evaluation, contribution:analysis, motivation:monitoring, motivation:explainability, domain:mcq, domain:math, domain:logic, scale:small, scale:mid, scale:closed, eval:ood, eval:confound-control, eval:measure-validation, eval:monitor-scope, factor:answer-correctness, model:llama-3.1-8b, model:qwen2.5-7b, model:gpt-4o-mini, model:gemini-2.5-flash, model:gemma-4-12b, model:deepseek-r1-distill-qwen-7b, metric:monitor-auc, metric:probe-auc, metric:step-removal-soft-faithfulness]
---
**Problem** Unclear whether black-box detectors of unfaithful CoT detect faithfulness or just answer correctness.
**Method** FaithCoT-Bench human labels (4 models, 4 domains), stratified by correctness; step-removal, NLI, premise-DAG signals plus GPT-4o-mini judge; linear probes (Llama-3.1-8B, Qwen-2.5-7B); instructed vs hint-flip testbeds, probe transfer to annotations.
**Findings** Incorrectness oracle (AUROC 0.696) matches or beats every metric; only the judge exceeds it (0.782). 69% of unfaithfulness is on wrong answers, where no metric is detectably above chance and the judge drops (0.830 to 0.679). Step-removal metric inverted (0.349). Only hint-induced probes transfer (onto wrong-answer regime, model- and source-dependent).
**Limits** One annotated benchmark, small minority classes; 69% share release-specific (52% on paper's census); single judge model and prompt; weak steering evidence; scripts in supplement, testbeds promised at camera-ready.

**Relations**
- builds-on [[turpin2023language]]: biased-context hint paradigm used to build hint-induced unfaithful testbed
- builds-on [[chen2025reasoning]]: hint-flip construction and its unfaithfulness criterion define sample-level labels

**New tags**
- factor:answer-correctness: whether the model's final answer is correct, studied as a variable that structures where unfaithfulness occurs or how detectable it is
