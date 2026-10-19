---
key: plunkett2025self
title: "Self-Interpretability: LLMs Can Describe Complex Internal Processes that Drive Their Decisions"
authors: "Plunkett, Morris, Reddy & Morales"
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2505.17120v2
checked: 2026-10-15
tags: [source:trustme, object:self-report, reveals:decision-factors, reveals:hidden-behavior, signal:implanted-behavior, signal:generic-cf, lever:sft, updates:explanation, contribution:analysis, contribution:method, motivation:explainability, motivation:auditing, domain:synthetic, scale:closed, eval:ood, model:gpt-4o, model:gpt-4o-mini, metric:reported-weight-correlation]
---
**Problem** Can LLMs report quantitative features of their internal decision processes (attribute weights in multi-attribute choice), and can training improve this?
**Method** SFT GPT-4o/4o-mini on choices of 100 agents with random attribute weights; logistic regression on choices → learned weights; prompt for weight reports without deciding. Then SFT on target-weight reports (2-fold, held-out contexts); test on native weights in 100 new contexts.
**Findings** Reports track learned weights r=.54/.50; off-the-shelf r=.10/−.01. Introspection training → r=.74/.75 on held-out contexts; generalizes to native weights (.46→.71, .40→.70). Code + data released.
**Limits** Only static attribute weights in pairwise choice; may be stored self-knowledge, not real-time introspection; 2 closed models; no CoT tested.

**Relations**
- extends [[betley2025tell]]: adapts fine-tune-then-ask paradigm from broad tendencies to quantitative attribute weights
- builds-on [[binder2024looking]]: introspection-as-privileged-knowledge framing; averages repeated self-reports as in Binder

**New tags**
- (none)
