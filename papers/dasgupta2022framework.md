---
key: dasgupta2022framework
title: "Framework for Evaluating Faithfulness of Local Explanations"
authors: "Dasgupta, Frost & Moshkovitz"
year: 2022
venue: "ICML 2022"
url: https://arxiv.org/abs/2202.00734v1
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, object:posthoc-expl, object:external-expl, reveals:decision-factors, signal:generic-cf, contribution:metric, contribution:theory, motivation:explainability, domain:classification, eval:measure-validation, metric:consistency, metric:sufficiency]
---
**TL;DR** Measures explanation faithfulness through consistency and sufficiency, deriving estimators whose reliability depends on the deployment distribution and repeated explanations.
**Problem** Black-box local explanations lack a general, distribution-aware faithfulness evaluation.
**Method** Explanation-assignment consistency and property-applicability sufficiency; local/global scores, sampling estimators, convergence bounds; analytic comparisons and experiments.
**Findings** SHAP is consistent; LIME need not be; rare explanations impede verification; scores depend on deployment populations.
**Limits** Label agreement does not identify internal computation; applicability can be ambiguous; uniqueness defeats estimation.

**Relations**
- (none)

**New tags**
- (none)
