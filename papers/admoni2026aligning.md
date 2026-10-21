---
key: admoni2026aligning
title: "Aligning What LLMs Do and Say: Towards Self-Consistent Explanations"
authors: "Admoni, Amir, Hallak & Ziser"
year: 2025
venue: "Findings of ACL 2026"
url: https://arxiv.org/abs/2506.07523v3
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, reveals:decision-factors, signal:interp-tool, lever:preference, updates:explanation, contribution:benchmark, contribution:method, contribution:analysis, contribution:negative-result, motivation:explainability, domain:mcq, scale:small, model:llama-3.1-8b, model:llama-3.2-3b, model:qwen2.5-7b, metric:cc-spearman, metric:cc-cosine, eval:ood, eval:behavior-control, eval:optimization-pressure, eval:human-study]
---
**TL;DR** Introduces PSCB, a benchmark of attribution-based consistency between MCQ answers and explanations, and shows DPO raises consistency across domains at little accuracy cost, but SFT lowers it.
**Problem** Post-hoc expl. often draw on different input features than the answer did; attribution-based self-consistency (CC-SHAP) too costly to measure at scale (~100 ex.), never optimized.
**Method** PSCB: 85k MCQ decisions, 428k expl. w/ LIME/LIG attributions; CC = cosine/Spearman of decision vs expl. attribution vectors. DPO (LoRA) on CC-Sp best/worst of 5 sampled expl.; SFT ablation.
**Findings** Spearman more discriminative than cosine; CC ~orthogonal to correctness. DPO ↑CC-Sp (ECQA 8B LIME mean +13%, worst +57.2%), transfers cross-domain; acc Δ≤1.5%, plausibility kept. SFT ↓CC-Sp (−41.4%). No transfer across attribution methods. Code+data released.
**Limits** MCQ only, ≤8B (Qwen check ECQA-only: tiny worst-case gain, median CC-Sp slightly ↓). Faithfulness = chosen attribution method. Offline DPO → approximate consistency. Human study checks plausibility only.

**Relations**
- extends [[parcalabescu2023measuring]]: scales CC-SHAP attribution self-consistency to LIME/LIG on 85k decisions; adds DPO

**New tags**
- (none)
