---
key: nguyen2026generalization
title: "On the Generalization of Steering Vectors for Chain-of-Thought Faithfulness"
authors: "Nguyen, Cox, Meek & Arcuschin"
year: 2026
venue: "COLM 2026 workshop (AIW)"
url: https://arxiv.org/abs/2607.29062v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, signal:planted-cf, lever:steering, updates:explanation, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:mcq, scale:small, scale:mid, eval:ood, eval:specificity, model:gemma-3-4b, model:qwen3.5-9b, model:gemma-3-12b, metric:cue-acknowledgment-rate, metric:hidden-cue-use]
---
**Problem** Faithfulness steering (cue acknowledgment) shown only where it was built. Does it generalize across models, cues, datasets, vector constructions?
**Method** Residual steering of Gemma-3 4B/12B, Qwen-3.5 9B on cued MCQ (BBH, GPQA, MMLU; 4 cues toward a wrong option). 4 vectors: contrastive, synthetic, cue-specific/generic optimized. Cross-cue and cross-dataset transfer. gpt-5-nano judge labels acknowledgment; primary metric paired Δack.
**Findings** Reliable only on 12B (+0.26 MMLU, +0.10 BBH, +0.06 GPQA), ~0 on 4B/9B. Transfer broad: eval setting, not train setting, sets effect. Constructions ≈ equal. 12B: cue use flat, hidden use falls (MMLU 0.31→0.05). Acc drop ≤0.07, degeneracy +0.02–0.03. Code released.
**Limits** Models ≤12B. One judge, unvalidated vs humans. GPQA gains may be mention without reliance. Layer picked by overfit probe (train AUROC 1.00), confounded with scenario. Cues varied only on GPQA, datasets only on Stanford cue.

**Relations**
- extends [[occhipinti2026probing]]: tests their faithfulness steering across models, cues, datasets and vector constructions

**New tags**
- (none)
