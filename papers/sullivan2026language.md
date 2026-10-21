---
key: sullivan2026language
title: "On Language Drift during RLVR Post-Training"
authors: "Sullivan & Koller"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2610.02015v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:correctness, signal:simulatability, signal:cot-intervention, contribution:theory, contribution:analysis, motivation:monitoring, domain:math, scale:small, eval:confound-control, model:gemma-3-1b, model:llama-3.2-1b, model:qwen2.5-1.5b, metric:trace-legibility, metric:self-legibility, factor:outcome-rl]
---
**TL;DR** Proves RLVR permits unbounded language drift while SFT bounds it: RLVR CoTs grow less legible on novel tasks but barely drift when RL only sharpens existing behavior.
**Problem** Language drift (odd, illegible CoT language) may erode CoT monitorability, and its causes are poorly understood.
**Method** Proofs treat drift as KL divergence from human language, for RLVR vs SFT. DAPO vs SFT on GSM8K: three 1-1.5B base models, 5 seeds, iso-accuracy checkpoints. Instruct readers, or sibling seeds, guess the model's answer from partial CoTs.
**Findings** RLVR permits unbounded drift, SFT bounds it; capping drift caps expected reward. Novel-task Llama/Gemma: RLVR CoTs less legible than SFT (AUC -0.24/-0.17) and drift differs per seed. Qwen, which mostly sharpens existing behavior: virtually no drift vs SFT. Code released.
**Limits** Only 1-1.5B models, GSM8K only. Reader legibility is only a proxy for drift. Drift-reward theorem untested empirically. Drift is milder than in frontier CoTs.

**Relations**
- builds-on [[roytburg2026measuring]]: adapts its design of weaker models reading CoT prefixes to measure legibility
- builds-on [[korbak2025chain]]: formally proves its informal claim that outcome RL need not preserve legibility

**New tags**
- (none)
