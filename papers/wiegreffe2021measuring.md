---
key: wiegreffe2021measuring
title: "Measuring Association Between Labels and Free-Text Rationales"
authors: "Wiegreffe, Marasović & Smith"
year: 2021
venue: "EMNLP 2021"
url: https://arxiv.org/abs/2010.12762v4
checked: 2026-10-21
tags: [source:background-2026-10-21, object:posthoc-expl, object:cot, reveals:decision-factors, signal:generic-cf, signal:interp-tool, contribution:metric, contribution:analysis, contribution:negative-result, motivation:explainability, domain:mcq, domain:classification, scale:small, eval:measure-validation, model:t5-base, metric:robustness-equivalence, metric:feature-importance-agreement]
---
**TL;DR** Proposes robustness and feature-importance tests of whether self-rationalizing models link labels to free-text rationales: the tested joint models pass both, with labels and rationales degrading together.
**Problem** Faithfulness work focuses on extractive rationales; for free-text rationales from joint (self-rationalizing) models there was no way to test whether predicted label and rationale are linked, so rationales may be made up.
**Method** Five T5-Base variants per dataset on e-SNLI and CoS-E v1.0/v1.11: pipeline I→R;R→O (faithful by construction) vs joint I→OR ("label explanation: rationale"). Rationale quality = accuracy of IR→O minus I→O on gold labels. Two label-rationale association tests on I→OR: robustness equivalence (Gaussian noise on input embeddings; label flips vs rationale quality); feature importance agreement (gradient attributions w.r.t. label vs rationale logits, validated with ROAR; occluding top-k% tokens by one should hurt the other output more than random).
**Findings** Pipelines suit reasoning tasks poorly: I→OR rationales give R→O higher accuracy than I→R ones (CoS-E v1.0 62.0 vs 53.5) and score higher quality; gold free-text rationales are not sufficient (IR→O beats R→O by 12.2 pts CoS-E v1.11, 1.1 e-SNLI). I→OR passes both tests on all 3 datasets: labels and rationales stay stable together at low noise and degrade together (CoS-E v1.0: σ² 0–15 vs 20+); label-attributed occlusion degrades rationales beyond random and vice versa. Code released.
**Limits** Tests are necessary, not sufficient, conditions for faithfulness. T5-Base only, 2 English tasks. Quality metric uses gold labels, can be negative and confounds rationale with label quality; 82.5% agreement with one author's judgments (60 instances). Joint training costs accuracy on CoS-E (−4.3/−6.1 pts vs I→O).

**Relations**
- builds-on [[jacovi2020towards]]: answers its call for graded faithfulness evaluations; aims to place free-text rationalizers on its faithfulness spectrum
- builds-on [[hase2020leakageadjusted]]: rationale-quality score is a gold-label variant of automated simulatability, justified by its human-correlation results

**New tags**
- (none)
