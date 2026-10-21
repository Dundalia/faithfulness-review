---
key: atkinson2026identifying
title: "Identifying Introspection From the Inside"
authors: "Atkinson, Plunkett & Bau"
year: 2026
venue: "COLM 2026"
url: https://arxiv.org/abs/2610.07186v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, reveals:decision-factors, signal:implanted-behavior, signal:interp-tool, lever:architecture, updates:explanation, contribution:analysis, contribution:metric, motivation:explainability, motivation:auditing, domain:synthetic, scale:small, scale:mid, model:qwen3-32b, model:qwen3-14b, model:qwen3-8b, model:qwen3-4b, model:qwen3-0.6b, model:gemma-4-31b, metric:preference-report-correlation, metric:attribution-similarity, metric:cross-task-kl-recovery]
---
**TL;DR** Proposes a mechanistic test of whether self-reports share behavior's cause, finding faithful reports of fine-tuned preferences emerge late in training and, in Qwen3, only at the largest size.
**Problem** Report matching behavior may be confabulated, not grounded (same cause as behavior). Need mechanistic test blind to report content.
**Method** LoRA-train Qwen3 0.6-32B, Gemma-4 on choices from latent linear prefs; no self-report supervision. Early/late 32B ckpts = unfaithful/faithful pair. Layer ablation/freezing; decision-vs-report attribution-patching similarity, 32 adapter pairs.
**Findings** Faithfulness emerges late, in Qwen3 only at 32B (0.25->0.83, ckpt 1000->3000). Prefs shift to earlier layers; early-layer-only LoRA raises 14B faithfulness. Attribution sim 0.34 vs 0.08; faithful adapters recover cross-task KL with 8-12x fewer matrices.
**Limits** Toy 5-dim linear prefs; LoRA only. Separates groups, not individuals. Gemma-4 lacks delayed emergence. Layer shift, 4B/8B negative faithfulness unexplained. Code release not stated.

**Relations**
- builds-on [[plunkett2025self]]: adopts its character linear-preference decision and self-report setting and replicates it on Qwen3

**New tags**
- (none)
