---
key: jacovi2020towards
title: "Towards Faithfully Interpretable NLP Systems: How should we define and evaluate faithfulness?"
authors: "Jacovi & Goldberg"
year: 2020
venue: "ACL 2020"
url: https://arxiv.org/abs/2004.03685v3
checked: 2026-10-15
tags: [source:trustme, object:external-expl, reveals:decision-factors, signal:generic-cf, contribution:position, motivation:explainability]
---
**Problem** Interpretability evals conflate faithfulness w/ plausibility; no formal def of faithfulness; binary faithful/unfaithful verdicts via counter-example.
**Method** Opinion piece: surveys NLP faithfulness evals (fidelity, robustness, erasure, comprehensiveness/sufficiency) → 3 implicit assumptions (model, prediction, linearity) + evaluation guidelines.
**Findings** Faithfulness ≠ plausibility. Evals should avoid human judgment, gold labels, user-performance proxies, and untested "inherent interpretability" claims. Strict faithfulness likely unattainable (interpretation = lossy approximation, pigeonhole) → graded faithfulness across models/tasks and input subspaces.
**Limits** No experiments. Graded criteria not formalized; validity of the 3 assumptions left open. Pre-LLM; focus on heat-maps/attention.

**Relations**
- (none)

**New tags**
- (none)
