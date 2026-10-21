---
key: mayne2026positivecasefaithfulnessllm
title: "A Positive Case for Faithfulness: LLM Self-Explanations Help Predict Model Behavior"
authors: "Mayne, Kang, Gould et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2602.02639v2
checked: 2026-10-15
tags: [source:trustme, object:posthoc-expl, object:cot, reveals:decision-factors, signal:generic-cf, contribution:metric, contribution:analysis, motivation:explainability, motivation:monitoring, domain:classification, domain:social-bias, scale:small, scale:mid, scale:closed, eval:privileged-access, model:qwen3-32b, model:gemma-3-27b, model:gpt-5.2, model:claude-sonnet-4.5, model:claude-opus-4.5, model:gemini-3-pro, metric:normalized-simulatability-gain, metric:highly-misleading-unfaithfulness, metric:self-explanation-uplift]
---
**TL;DR** Introduces NSG, which measures how much self-explanations help predict a model's counterfactual behavior: they help for every model tested, beat stronger models' explanations, yet a minority mislead.
**Problem** Cue- and error-based faithfulness tests lose signal as models improve ("vanishing signal"). The predictive value of self-explanations goes unmeasured.
**Method** NSG = normalized gain in a 5-LLM predictor ensemble's accuracy at simulating the model on real-data counterfactuals (Hamming ≤2), with vs. w/o the self-explanation. 18 models, 7k pairs, 7 tabular/ethics datasets. Self vs. cross-model explanations.
**Findings** NSG 11-37%, positive for every model. 5-15% of explanations highly misleading. Self-expl beat expl from stronger external models (privileged access). Scale trend mixed: size helps only up to a modest threshold. User-facing expl > CoT (Qwen3). Moral Machines lowest.
**Limits** Binary classification, mostly tabular; free-text open. Average-case metric. Predictors not SOTA. Measurement only. Code + data released.

**Relations**
- extends [[pmlr-v235-chen24bl]]: adds no-explanation baseline and normalization to counterfactual simulatability; real-data counterfactuals
- builds-on [[binder2024looking]]: adopts self- vs cross-model comparison to test privileged self-knowledge
- builds-on [[matton2025walk]]: adapts its concept-perturbation counterfactuals for BBQ; shows they can be implausible

**New tags**
- (none)
