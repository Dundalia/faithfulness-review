---
key: pres2026consistency
title: "Position: It's Time to Optimize LLMs for Self-Consistency"
authors: "Pres, Li, Ruis et al."
year: 2026
venue: "ICML 2026 position track"
url: https://arxiv.org/abs/2608.05188v1
checked: 2026-10-15
tags: [source:trustme, object:cot, object:self-prediction, object:self-report, object:posthoc-expl, reveals:decision-factors, reveals:internal-strategy, reveals:hidden-behavior, reveals:own-uncertainty, signal:generic-cf, signal:interp-tool, contribution:position, motivation:explainability, motivation:auditing, motivation:alignment, motivation:reasoning-quality, metric:meta-level-consistency]
---
**Problem** Pointwise SFT/RL objectives can't express relational desiderata → sycophancy, logical inconsistency, overconfidence, unfaithful CoT & self-descriptions persist.
**Method** Position. Unified objective φ over related input–output sets (hard/soft constraint, posterior reg.); instance-level invariance/equivariance vs meta-level self-description↔behavior; 8 case studies incl. counterfactual φ_CoT.
**Findings** No experiments. Recasts BCT, introspection training, calibration, CoT-faithfulness tests, RLAIF as special cases. Argues training both directions (fix description / fix behavior) is mutually reinforcing.
**Limits** Degenerate consistent fixed points; rigidity/accuracy trade-off; human-feedback φ inherits reward hacking; consistency ≠ honesty; may foster self-models. Empirically untested.

**Relations**
- extends [[li2025training]]: Case Study 3 recasts explaining-own-computations training as meta-level consistency (posterior regularization)
- extends [[chen2025reasoning]]: Case Study 4 generalizes its counterfactual CoT-faithfulness test into a trainable φ_CoT objective
- extends [[plunkett2025self]]: Self-description fine-tuning framed as one-round posterior regularization of meta-level consistency
- extends [[chua2024biasaugmented]]: BCT framed as a special case of instance-level invariance to biasing cues
- extends [[imran2026consistency]]: Rate-matching consistency training framed as an instance-level invariance objective

**New tags**
- (none)
