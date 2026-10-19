---
key: madsen2023faithfulness
title: "Faithfulness Measurable Masked Language Models"
authors: "Madsen, Reddy & Chandar"
year: 2023
venue: "ICML 2024"
url: https://arxiv.org/abs/2310.07819v3
checked: 2026-10-15
tags: [source:trustme, object:external-expl, reveals:decision-factors, signal:generic-cf, lever:sft, updates:behavior, contribution:method, contribution:metric, motivation:explainability, domain:classification, domain:open-qa, scale:small, eval:measure-validation, model:roberta-base, model:roberta-large, metric:racu, metric:acu]
---
**Problem** Erasure metrics for token-importance expls → masked inputs OOD; ROAR-style retraining is costly, leaks gold label, measures a proxy model.
**Method** Masked FT of RoBERTa (half of each batch masked at rate ~U[0,100%]) → model where masking is in-distribution; MaSF OOD test validates; recursive erasure vs random baseline (RACU/ACU); 9 IMs, 16 classification datasets.
**Findings** No unmasked perf loss; masked inputs consistently in-distribution (MaSF) only w/ masked FT; occlusion IMs (LOO, Beam) most faithful; gradient IMs beat Recursive-ROAR (imperfect cmp.); x⊙grad worst.
**Limits** MLM classifiers only; no faithfulness ablation without masked FT; must be built in, not post-hoc; ~2x epochs; unstable bAbI-2/3 w/ large; code stated available.

**Relations**
- (none)

**New tags**
- (none)
