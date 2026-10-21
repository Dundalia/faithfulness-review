---
key: parcalabescu2023measuring
title: "On Measuring Faithfulness or Self-consistency of Natural Language Explanations"
authors: "Parcalabescu & Frank"
year: 2023
venue: "ACL 2024"
url: https://arxiv.org/abs/2311.07466v4
checked: 2026-10-15
tags: [source:trustme, object:posthoc-expl, object:cot, reveals:decision-factors, reveals:planted-cue, reveals:cot-reliance, signal:interp-tool, signal:generic-cf, signal:planted-cf, signal:cot-intervention, contribution:metric, contribution:benchmark, contribution:analysis, contribution:position, motivation:explainability, domain:classification, domain:mcq, domain:logic, scale:small, scale:mid, model:llama-2-7b, model:llama-2-13b, model:mistral-7b, model:falcon-7b, model:falcon-40b, model:gpt-2, metric:cc-shap, contribution:meta-evaluation]
---
**TL;DR** Argues explanation faithfulness tests only measure self-consistency and introduces CC-SHAP, which compares input contributions to answer and explanation: existing tests disagree widely with each other.
**Problem** Prior NLE/CoT "faithfulness" tests only check output-level self-consistency; each uses different models/data → incomparable.
**Method** CC-SHAP: cosine similarity of SHAP input contributions to answer vs. explanation (post-hoc, CoT); no input edits. CCB: prior edit/cue/CoT-corruption tests + CC-SHAP, 11 open LLMs × 5 tasks.
**Findings** Tests disagree widely (LLaMA2-7b: 1–65%, e-SNLI); chat > base (not Falcon); no size trend; CC-SHAP correlates most with Counterfactual Edits, stable across runs, informative on edit-insensitive GPT2. Code released.
**Limits** Still self-consistency; no ground truth; ~4 min/example; open English ≤40B models; 100 samples/task.

**Relations**
- compares-to [[turpin2023language]]: Biasing Features test rerun in CCB vs. CC-SHAP; argued to measure only self-consistency
- compares-to [[lanham2023measuring]]: Four CoT-corruption tests rerun in CCB vs. CC-SHAP; deemed self-consistency tests
- builds-on [[jacovi2020towards]]: Adopts its faithfulness definition; argues existing tests fall short of it

**New tags**
- (none)
