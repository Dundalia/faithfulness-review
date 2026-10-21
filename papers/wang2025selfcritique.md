---
key: wang2025selfcritique
title: "Self-Critique and Refinement for Faithful Natural Language Explanations"
authors: "Wang & Atanasova"
year: 2025
venue: "EMNLP 2025"
url: https://arxiv.org/abs/2505.22823v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, reveals:decision-factors, signal:generic-cf, lever:prompt-pipeline, lever:inference-time, updates:explanation, contribution:method, motivation:explainability, domain:mcq, domain:classification, scale:small, eval:behavior-control, model:llama-3.1-8b, model:mistral-7b-v0.3, model:qwen2.5-7b, model:falcon3-7b, metric:counterfactual-unfaithfulness-rate]
---
**TL;DR** Introduces SR-NLE, a training-free loop refining post-hoc explanations with self-feedback: important-word feedback beats free-text critique and cuts counterfactual unfaithfulness, though random words do similarly on e-SNLI.
**Problem** Post-hoc NLEs leave out the input words that actually drive the prediction.
**Method** Training-free self-refine loop (SR-NLE): answer → NLE → feedback (free-text critique, or top-5 important words via prompting/attention/IG) → refine, up to 3 rounds. Scored with the Atanasova CF word-insertion test. 4 7–8B models on ComVE, ECQA and e-SNLI.
**Findings** Avg unfaithfulness 54.81% → 36.02% (IWF-Attn). IWF beats NLF in every setting; NLF beats self-consistency sampling only on avg. Prompted IWF ≈ attribution IWF. Largest gain in round 1. Answers fixed, so no acc change. Code released.
**Limits** Single string-match CF metric. Refined NLEs get longer. Random-word feedback ≈ IWF (e-SNLI). Post-hoc NLEs only, <10B models. IG is costly.

**Relations**
- (none)

**New tags**
- (none)
