---
key: yoshida2026introspecting
title: "Introspecting Alignment Shifts Beyond Behaviors Implanted Through Fine-Tuning"
authors: "Yoshida, Gomezjurado Gonzalez, Yamamoto et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2608.04347v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, signal:wild-cf, lever:sft, lever:preference, lever:architecture, updates:explanation, contribution:method, contribution:benchmark, motivation:auditing, domain:safety-refusal, scale:mid, eval:ood, eval:specificity, model:qwen3-14b, model:gemma-3-12b, metric:shift-classification-accuracy, metric:shift-classification-macro-f1, metric:report-coverage, metric:report-precision]
---
**Problem** Introspection adapters (IAs) have mainly been tested on deliberately implanted behaviors. Real fine-tunes shift alignment as side effects that nobody labeled.
**Method** 213 HF PEFT fine-tunes of Qwen3-14B/Gemma3-12B; LLM-judge-scored harmful-compliance shift vs base on 13 safety categories → 5-way labels + LLM-written reference reports; SFT (+DPO for free-form) IAs; DAIA adapter processes base output & fine-tuning delta in separate branches.
**Findings** IAs generalize to unseen models and categories. DAIA's average beats LoRA-IA in all OOD splits (OOD-C 41.3 vs 35.3) and gives better free-form reports. A probe beats both IAs on OOD-B classification (54.1 avg). Patching: DAIA uses the FT delta more. Code + data released.
**Limits** 12-14B models, additive PEFT and harmful-compliance shifts only; labels and scores come from an LLM judge; transfer to unseen categories is weaker; DAIA wins macro-F1 in only 6/12 cases.

**Relations**
- extends [[shenoy2026introspection]]: generalizes IAs from implanted behaviors to unintended alignment shifts; adds DAIA
- compares-to [[shenoy2026introspection]]: standard LoRA-based IA is the main baseline (SFT; +DPO for free-form)
- builds-on [[goel2025learning]]: adopts its weight-diff introspection-learning setup with parallel LoRA adapter

**New tags**
- (none)
