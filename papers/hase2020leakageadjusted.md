---
key: hase2020leakageadjusted
title: "Leakage-Adjusted Simulatability: Can Models Generate Non-Trivial Explanations of Their Behavior in Natural Language?"
authors: "Hase, Zhang, Xie & Bansal"
year: 2020
venue: "Findings of EMNLP 2020"
url: https://arxiv.org/abs/2010.04119v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:posthoc-expl, object:cot, reveals:decision-factors, signal:simulatability, lever:architecture, lever:multi-agent-game, lever:rl-reward, updates:explanation, updates:behavior, contribution:metric, contribution:method, contribution:analysis, motivation:explainability, domain:mcq, domain:classification, scale:small, eval:human-study, eval:measure-validation, eval:confound-control, model:t5, model:t5-small, metric:leakage-adjusted-simulatability]
---
**TL;DR** Introduces LAS, scoring explanations by how much they help a simulator predict model outputs, adjusted for leakage: BLEU does not track it, and rationalizing explainers beat reasoning ones.
**Problem** Generated NL explanations are judged by BLEU or human similarity (plausibility), not by whether they reflect the model's behavior.
**Method** LAS: a T5 simulator's gain in predicting the model's output from input plus explanation over input alone, averaged across leaking and non-leaking groups. Four T5 explainers (incl. new ST-Ra) on CoS-E and e-SNLI; multi-agent game (Gumbel SGD, REINFORCE) rewards simulatability and penalizes leakage. Validated by expert simulation and MTurk ratings.
**Findings** ST-Ra reaches near-human LAS; rationalizing beats reasoning. BLEU does not correlate with LAS; crowd ratings track leakage, not LAS. No significant accuracy cost. SGD game cuts leakage (CQA MT-Ra 85.58→75.21%), but only 1 of 4 LAS changes is significant.
**Limits** T5-Base scale only. LAS agrees only moderately with expert simulation (ρ=0.29). A RoBERTa simulator partly reorders methods (ST-Ra still top); RL training is unstable. Code released.

**Relations**
- (none)

**New tags**
- (none)
