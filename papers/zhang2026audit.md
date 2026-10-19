---
key: zhang2026audit
title: "How the Audit Rule Shapes Faithful Factor Explanations in LLMs"
authors: "Zhang, Wang, Wan et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2610.01514v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, reveals:decision-factors, signal:generic-cf, lever:incentive-design, updates:explanation, contribution:theory, contribution:analysis, contribution:method, contribution:metric, motivation:explainability, domain:social-bias, domain:math, domain:open-qa, scale:closed, eval:specificity, eval:optimization-pressure, eval:adversarial, model:qwen3.7-max, model:qwen3.7-plus, model:qwen3.6-plus, model:deepseek-v4-pro, model:deepseek-v4-flash, metric:counterfactual-brier-score, metric:suppression-rate, metric:truthful-report-rate, metric:causal-factor-f1]
---
**Problem** Budget-limited counterfactual audits of factor-importance self-reports; report-dependent auditing rewards suppressing factors, even under a proper score.
**Method** Verification game + Counterfactual Brier Score (report vs. flip rate, n=3); proofs for proportional, bonus, report-independent, floor audits. Rational best-response agent + 5 API LLMs; BBQ, GSM8K, HotpotQA, StrategyQA.
**Findings** Proportional: rational agent suppresses 36.9% of factors; bonus → inflation; report-independent 100% truthful, 10% floor ~98%; same pattern with log/spherical scores. LLMs follow explicit reward tables, much less without; multi-round suppression 0.15 (proportional) vs 0.08 (report-indep.), 2 models.
**Limits** Directional LLM evidence, not equilibrium; API models, temp 0; no training; single-factor perturbations miss interactions. No code reported.

**Relations**
- compares-to [[matton2025walk]]: Walk-the-Talk used as diagnostic-metric baseline against CBS in scoring-rule comparison (Table 5)

**New tags**
- (none)
