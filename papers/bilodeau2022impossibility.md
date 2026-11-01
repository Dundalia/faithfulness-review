---
key: bilodeau2022impossibility
title: "Impossibility Theorems for Feature Attribution"
authors: "Bilodeau, Jaques, Koh & Kim"
year: 2022
venue: "Proceedings of the National Academy of Sciences 121(2), 2024"
url: https://arxiv.org/abs/2212.11870v3
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, object:external-expl, reveals:decision-factors, signal:generic-cf, contribution:theory, motivation:explainability, domain:classification, scale:small, eval:specificity, model:mlp, model:cnn, metric:specificity-sensitivity]
---
**TL;DR** Proves complete, linear feature attributions like SHAP and Integrated Gradients can do no better than random guessing at inferring local counterfactual model behaviour; repeated model queries can.
**Problem** SHAP and IG, trusted because complete and linear, are used to answer local counterfactual questions (recourse, spurious features). Can they?
**Method** Inferring counterfactual model behaviour as a worst-case hypothesis test on the attribution (specificity, sensitivity). Counterexample proofs with piecewise-linear models; ROC experiments on 5 tabular and 3 image datasets; query bounds for brute-force evaluation.
**Findings** If the model class holds piecewise-linear extensions, any test on a complete, linear attribution has Spec ≤ 1 − Sens (random guessing), incl. recourse and spurious features; Gradient succeeds in small enough neighbourhoods. SHAP/IG ROC curves near the diagonal; local methods sometimes better on tabular data. For Lipschitz models, enough random queries give near-perfect tests, at a nearly tight rate.
**Limits** Worst case over the model class; marginal SHAP only; continuous features; one formalization per end-task; small networks; brute force exponential in the number of features. No language models.

**Relations**
- (none)

**New tags**
- (none)
