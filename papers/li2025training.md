---
key: li2025training
title: "Training Language Models to Explain Their Own Computations"
authors: "Li, Guo, Huang et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2511.08579v3
checked: 2026-10-15
tags: [source:trustme, object:self-prediction, object:self-interpretation, reveals:internal-strategy, reveals:decision-factors, reveals:planted-cue, signal:interp-tool, signal:planted-cf, lever:sft, updates:explanation, contribution:method, contribution:analysis, motivation:explainability, domain:mcq, scale:small, scale:mid, eval:ood, eval:privileged-access, eval:specificity, eval:behavior-control, model:llama-3.1-8b, model:llama-3-8b, model:llama-3.1-70b, model:qwen3-8b, model:gemma-2-9b, metric:simulator-score, metric:judge-label-similarity, metric:has-changed-f1, metric:exact-match]
---
**Problem** Can LMs learn to faithfully describe their own internal computations? Does privileged self-access beat other-model explainers?
**Method** SFT explainers on interp-derived labels: SAE feature descriptions, activation-patching outcomes, hint-ablation outcomes (MMLU); activations fed as continuous tokens; self vs other-model explainers.
**Findings** Beats SelfIE, nearest-neighbor, even gold SAE labels (simulator); generalizes OOD to full activations/diffs; self & close variants beat dissimilar explainers (Qwen3-8B, 70B), tracking activation similarity; self > cross-model on patching/ablation too; ~100x more sample-efficient than NN. Untrained models miss hint effects. Code released.
**Limits** Target frozen, explainer a fine-tuned copy → loose self-explanation; ~8B targets; single-token outcomes; no CoT.

**Relations**
- builds-on [[chen2025reasoning]]: reuses hint-injected MMLU setup for the input-ablation explanation task
- extends [[binder2024looking]]: privileged-access self-vs-cross-model test moved from output self-prediction to internals

**New tags**
- (none)
