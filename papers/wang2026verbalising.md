---
key: wang2026verbalising
title: "Verbalising Model's Computation for Chain-of-Thought Faithfulness Detection"
authors: "Wang, He, Wang & Yan"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://arxiv.org/abs/2610.23275v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:cot-reliance, signal:planted-cf, signal:judge, contribution:metric, motivation:explainability, domain:mcq, domain:open-qa, domain:math, domain:logic, domain:professional, scale:small, eval:ood, model:qwen3-4b, model:llama-3.1-8b, metric:balanced-accuracy, metric:probe-auc]
---
**Problem** LLM judges and static activation probes flag unfaithful CoTs but cannot show how unfaithfulness develops across layers and generation.
**Method** VERITAS: J-lens maps layer-by-phase residual states to token anchors mined from within-question faithful/unfaithful pairs; Map, Profile and Dynamics features feed a logistic regression; tested on BonaFide and FaithCoT-Bench.
**Findings** Mean balanced accuracy 0.749 (Qwen3) and 0.737 (Llama3.1), against best baselines of 0.655 and 0.644. Anchors transfer across subsets (97-99% retained); cross-model transfer retains 81-89%.
**Limits** Two small replay models read CoTs mostly written by other models. Needs labelled pairs. Configuration chosen by best balanced accuracy. HLE-Bio stays near 0.6. LLM-judge baseline only 7-8B; the abstract's +28.4% gain over it does not match Table 1. Code only promised.

**Relations**
- builds-on [[gurarieh2026faithfulness]]: uses BonaFide diversionary-hint CoTs and their faithfulness labels for training and evaluation
- compares-to [[lanham2023measuring]]: early-answering baseline; VERITAS outperforms it on all datasets
- compares-to [[li2025better]]: Info Gain logit-based baseline; VERITAS outperforms it

**New tags**
- (none)
