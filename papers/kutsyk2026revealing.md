---
key: kutsyk2026revealing
title: "Revealing Hidden Model Behaviors with Task-Specific Self-Reports"
authors: "Kutsyk & Zieliński"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2607.03640v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, lever:sft, lever:architecture, lever:activation-loss, updates:explanation, contribution:method, contribution:negative-result, motivation:auditing, domain:synthetic, domain:chat, scale:mid, eval:specificity, eval:behavior-control, eval:human-study, model:qwen3-14b, model:gemma-4-12b, metric:prompt-level-hit-rate, metric:hallucination-rate, metric:broad-report-rate]
---
**TL;DR** Introduces SAR, a per-model LoRA adapter that makes a fine-tuned model report its hidden behavior: more hits and fewer hallucinations than Introspection Adapters, but needs training data.
**Problem** Fine-tunes hide trigger-gated behaviors; Introspection Adapters (IA) transfer inconsistently and hallucinate wrong behaviors.
**Method** Per-model LoRA reporting adapter (SAR) on frozen fine-tune: CE on generic self-report prefills + align activations to behavior direction (train-data vs. neutral mean diff) + coherent-English cap; 7 Qwen3-14B organisms + no-behavior control.
**Findings** SAR hit rate >0.10 on all 8 settings (mean 0.66 vs IA 0.39; IA <0.10 on 3/8); pooled hallucination IA 0.59 vs SAR 0.29 (rater-corrected cut x1.3-1.7); broad reports of EM generalization; report appears only after behavior acquired; inference-time steering far weaker; Gemma mean 0.62.
**Limits** Needs training data + white-box access; SFT-only organisms; reports behavior, not trigger; LLM judge over-credits (kappa 0.53); IA still wins French-insertion, CLI-transcript, German-cities (judge only); code promised.

**Relations**
- compares-to [[shenoy2026introspection]]: IA baseline on same Qwen3-14B organisms; SAR covers all settings, halves hallucinations
- builds-on [[shenoy2026introspection]]: reuses IA-100 self-report prompts, judge protocol and IA-released model organisms
- contradicts [[shenoy2026introspection]]: IA claims transfer to differently trained fine-tunes; changing only source LoRA recipe drops IA 1.00->0.10
- compares-to [[dietz2026split]]: preliminary public-data SPT baseline on French-switching; SPT reviews never name French

**New tags**
- (none)
