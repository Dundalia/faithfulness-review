---
key: mayne2025llms
title: "LLMs Don't Know Their Own Decision Boundaries: The Unreliability of Self-Generated Counterfactual Explanations"
authors: "Mayne, Kearns, Yang et al."
year: 2025
venue: "EMNLP 2025"
url: https://arxiv.org/abs/2509.09396v1
checked: 2026-10-15
tags: [source:trustme, object:posthoc-expl, object:self-prediction, reveals:decision-factors, signal:generic-cf, lever:prompt-pipeline, updates:explanation, contribution:analysis, motivation:explainability, domain:classification, domain:synthetic, scale:mid, scale:closed, model:llama-3.3-70b, model:o3, model:deepseek-r1-distill-llama-70b, model:gpt-4.1, model:claude-3.7-sonnet, model:gemma-2-27b, metric:counterfactual-validity, metric:excess-distance, metric:minimal-cf-exact-match]
---
**Problem** Self-generated counterfactual explanations (SCEs) must be valid (flip own prediction) and minimal to reveal the decision boundary; prior work measured validity only.
**Method** Fully enumerated 2-4-feature tabular tasks (income, house prices, heart disease) in NL → full decision boundary; SCE re-scored in fresh context; validity, excess Gower distance, exact match; 7 LLMs; unconstrained vs minimal prompts.
**Findings** Unconstrained → near-100% valid, far from minimal; minimal prompt → mostly invalid (income validity 97%→36%); exact match ≤32%. No gain from stronger or reasoning models. Robust to distance fn, prompts, temperature. R1-70B traces show no self-prediction; self-prediction prompt barely helps. Code released.
**Limits** Toy low-dim tabular data; ED ignores invalid SCEs; self-prediction accuracy unmeasured; most ablations on one model/dataset; no training fix.

**Relations**
- builds-on [[dehghanighobadi2025can]]: adopts SCE setup with fresh-context validity check; adds minimality
- builds-on [[madsen2024self]]: uses its self-generated counterfactual explanation concept; adds minimality measurement

**New tags**
- (none)
