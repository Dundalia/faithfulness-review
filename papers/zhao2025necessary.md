---
key: zhao2025necessary
title: "A Necessary Step toward Faithfulness: Measuring and Improving Consistency in Free-Text Explanations"
authors: "Zhao & Daumé"
year: 2025
venue: "EMNLP 2025"
url: https://arxiv.org/abs/2505.19299v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, reveals:decision-factors, signal:simulatability, signal:generic-cf, lever:preference, updates:explanation, contribution:metric, contribution:method, contribution:analysis, motivation:explainability, domain:classification, scale:small, scale:mid, eval:behavior-control, model:mistral-7b-v0.3, model:llama-2-13b, model:yi-1.5-9b, metric:pex-consistency, metric:simulatability-f1]
---
**TL;DR** Introduces PEX, a weight-of-evidence measure of whether a free-text explanation supports the model's own answer: most explanations are inconsistent, and DPO on high-PEX explanations improves consistency and simulatability.
**Problem** Post-hoc free-text expls often back both a prediction and its negation → cannot be faithful (contrastive consistency as a necessary condition).
**Method** PEX = weight of evidence: shift in the model's own log-odds for its answer once the expl is in context. Rank 80 sampled expls per input → DPO on top- vs bottom-PEX pairs. Faithfulness proxy = student simulatability F1 (Pruthi 2022). Opinion-spam classification (TripAdvisor, Amazon).
**Findings** 62–86% of expls inconsistent (PEX<0). Over SFT expls, DPO raises PEX 43.1–292.3% and student simulation F1 by 1.5–9.7 pts. PEX fairly robust to prompt format. Code released.
**Limits** Needs output probabilities (no black-box models). Faithfulness checked at system level only. Binary opinion-spam tasks only, 7–13B. PEX is necessary, not sufficient. DPO gains capped by best sampled expl (Mistral PEX stays <0).

**Relations**
- (none)

**New tags**
- (none)
