---
key: bhan2025did
title: "NeuroFaith: Evaluating LLM Self-Explanation Faithfulness via Internal Representation Alignment"
authors: "Bhan, Vittaut, Chesneau et al."
year: 2025
venue: "NeurIPS 2026"
url: https://arxiv.org/abs/2506.09277v4
checked: 2026-10-15
tags: [source:trustme, object:posthoc-expl, reveals:decision-factors, reveals:internal-strategy, signal:interp-tool, signal:generic-cf, lever:steering, updates:explanation, contribution:metric, contribution:method, motivation:explainability, domain:open-qa, domain:classification, scale:small, scale:mid, eval:ood, eval:specificity, model:gemma-2-2b, model:gemma-2-9b, model:gemma-2-27b, model:mistral-7b, metric:neurofaith-probing-faithfulness, metric:neurofaith-importance-faithfulness, metric:steered-unfaithful-conversion-rate]
---
**Problem** Predict-then-explain self-NLEs may not reflect internal reasoning. CI and attribution-agreement tests check behavior or computational blocks, not what hidden states encode.
**Method** NeuroFaith: an LLM extracts concepts from the NLE, then tests whether the model uses them internally (Patchscopes decodes the 2-hop bridge object; CAV erasure on AGNews/Ledgar). Score = share of important concepts. Diff-mean probe on NeuroFaith-labeled states → activation steering.
**Findings** Accurate preds → generally more faithful NLEs; 2-hop metrics rise with Gemma size, classification non-monotonic; correct answers decode the true bridge object only 48-65%. Probe F1 61-75%; faithfulness vectors mostly anti-aligned with hallucination/deception vectors. Steering turns 8-11% of unfaithful NLEs faithful. Beats CI/AA in 6/9 settings.
**Limits** Gemma-2 (2B-27B)/Mistral-7B. Relies on interpreter + LLM concept extractor; preset circuits; labeled concept sets for classification. Predict-then-explain only, no CoT. Steering gains small, Gemma 2-hop only. No code or accuracy cost reported.

**Relations**
- (none)

**New tags**
- (none)
