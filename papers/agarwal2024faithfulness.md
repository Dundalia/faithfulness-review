---
key: agarwal2024faithfulness
title: "Faithfulness vs. Plausibility: On the (Un)Reliability of Explanations from Large Language Models"
authors: "Agarwal, Tanneru & Lakkaraju"
year: 2024
venue: "preprint"
url: https://arxiv.org/abs/2402.04614v3
checked: 2026-10-15
tags: [source:trustme, object:cot, object:posthoc-expl, reveals:decision-factors, reveals:internal-strategy, contribution:position, motivation:explainability]
---
**Problem** LLM self-explanations (CoT, token importance, counterfactuals) look plausible but may not reflect actual reasoning; human-text pretraining + RLHF reward plausibility, possibly at faithfulness' expense.
**Method** Position/review: defines plausibility vs faithfulness, reviews Turpin/Lanham tests, GPT-3.5 anecdotes (e.g. napalm refusal), maps applications to required levels of each.
**Findings** Argues plausibility is over-emphasized; high-stakes uses (health, finance, law) need faithfulness, education/creative uses favor plausibility. Calls for faithfulness metrics and benchmarks plus methods (fine-tuning, ICL, mech interp).
**Limits** No experiments, metric or method; anecdotal examples only; proposed directions untested.

**Relations**
- builds-on [[jacovi2020towards]]: adopts its faithfulness definition and faithfulness/plausibility distinction
- builds-on [[turpin2023language]]: uses its counterfactual-input tests as core evidence that self-explanations are unfaithful
- builds-on [[lanham2023measuring]]: reviews its CoT interventions; deems post-hoc-reasoning proxy insufficient to measure faithfulness
- contradicts [[lyu2023faithful]]: argues solver-based Faithful CoT is only superficially faithful, encoding human plausibility criteria

**New tags**
- (none)
