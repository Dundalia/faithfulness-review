---
key: sun2026investigating
title: "Investigating the Interplay between Contextual and Parametric Chain-of-Thought Faithfulness under Optimization"
authors: "Sun, Wang, Atanasova et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2605.24960v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:decision-factors, signal:cot-intervention, signal:interp-tool, signal:param-intervention, lever:sft, lever:preference, lever:model-merging, updates:explanation, updates:behavior, contribution:analysis, contribution:method, motivation:explainability, domain:mcq, domain:logic, scale:small, eval:optimization-pressure, model:gemma-3-4b, model:qwen2.5-7b, model:llama-3.1-8b, metric:cot-corruption-sensitivity, metric:cc-shap, metric:ff-hard, metric:faithfulness-gain-transfer]
---
**TL;DR** Introduces FaithMATE, training on one CoT faithfulness metric to test transfer: gains flow consistently from parametric to contextual metrics, less reliably in reverse, and inconsistently among contextual ones.
**Problem** Contextual (CoT/input perturbation) and parametric (unlearning) CoT-faithfulness metrics compared only descriptively; does optimizing one transfer to the others?
**Method** FaithMATE: best/worst of 40 sampled CoTs under one metric → SFT or DPO (LoRA); measure gain transfer δ on 6 metrics (4 Lanham corruptions, CC-SHAP, FUR). Gemma3-4B/Qwen2.5-7B/Llama3.1-8B; OpenBookQA, LogiQA. Plus task-arithmetic merging.
**Findings** Paradigms positively coupled but asymmetric: parametric→contextual consistent (24/30, 23/25); contextual→parametric 40/48, magnitude variable. Contextual metrics don't reliably inter-transfer; Adding Mistake lowers Paraphrasing in 8/12. DPO > SFT. Acc up in all OBQA configs (avg +6–8%), mixed on LogiQA (17/30 up). EA+FT merging amplifies gains; merging hurts Paraphrasing.
**Limits** ≤8B, MCQ only; offline training only (no RL); metrics treated as unvalidated proxies; parametric metric ~20 min/instance; no code release stated; LogiQA 23/25 excludes Llama SFT (poor contextual results).

**Relations**
- builds-on [[tutek2025measuring]]: FUR step-unlearning as parametric metric and training target; adds continuous ff_cont
- builds-on [[lanham2023measuring]]: early answering, adding mistake, paraphrasing, filler tokens as contextual metrics/targets
- builds-on [[parcalabescu2023measuring]]: CC-SHAP used as evaluation-only attribution-based contextual metric

**New tags**
- (none)
