---
key: ferreira2026outofsight
title: "Does Out-of-Sight Equal Out-of-Mind in CoT Monitorability?"
authors: "Ferreira, Aziz & Titov"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2608.04928v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, signal:planted-cf, contribution:analysis, motivation:monitoring, domain:math, domain:mcq, scale:small, eval:ood, eval:monitor-scope, eval:confound-control, eval:measure-validation, eval:scaling, factor:latent-reasoning, model:llama-3.2-1b, model:qwen3-14b, metric:monitor-auc]
---
**TL;DR** Tests hint-reliance monitors on explicit, latent and no-CoT variants of a small model: task and internal access matter more than reasoning mode, and answer-token probes usually work best.
**Problem** Latent CoT removes the readable trace. How much hint-reliance monitorability do activation probes or verbalized latents keep?
**Method** Llama-3.2-1B: No-CoT, explicit CoT, CODI, SIM-CoT, each hint-fine-tuned to a range of reliance rates. Label is a sycophancy-hint answer flip. Monitors: exact match, prompted Qwen3-14B, LoRA text classifiers (native, logit lens, decoder), attention probes. AUROC on GSM8k and ECQA, plus SVAMP and SIQA as OOD.
**Findings** Task and access to internals matter more than reasoning mode. Answer-token probes best for most tasks and modes. Explicit-CoT text helps on math via CoT-answer mismatch (rate 0.79 hint-reliant vs 0.04 not), not on ECQA. Logit lens closes the math gap; SIM-CoT decoder does not. Math transfers OOD; most latent-model QA monitors fall near baseline. Hint fine-tuning costs little no-hint accuracy.
**Limits** One 1B base model, two latent methods, two tasks. A single correct-answer sycophancy hint. Hint-reliance is induced by fine-tuning, not natural. No RL or optimization pressure against the monitors.

**Relations**
- builds-on [[turpin2023language]]: adopts hinted vs. unhinted sycophancy intervention to label hint-reliance
- builds-on [[chen2025reasoning]]: uses its sycophancy-hint format (user states the answer) for hinted inputs
- builds-on [[guan2025monitoring]]: adopts its intervention-based monitorability definition and hint setup

**New tags**
- (none)
