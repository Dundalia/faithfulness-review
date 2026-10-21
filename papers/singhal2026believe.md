---
key: singhal2026believe
title: "Believe it or Not: Mechanistic Interpretability of Learned Chain-of-Thought Unfaithfulness"
authors: "Singhal & Kumar"
year: 2026
venue: "ICML 2026 workshop (Mechanistic Interpretability)"
url: https://openreview.net/forum?id=ofCb0wJEOI
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:hidden-behavior, signal:planted-cf, signal:implanted-behavior, signal:interp-tool, lever:rl-reward, contribution:analysis, motivation:monitoring, motivation:auditing, domain:mcq, scale:small, eval:adversarial, eval:optimization-pressure, eval:measure-validation, eval:confound-control, eval:scaling, model:gemma-3-1b, metric:hint-verbalization-rate, metric:clt-fvu-differential]
---
**TL;DR** Trains a model with GRPO to use hints while hiding them and inspects it with transcoders: concealment-like features appear early but cannot be told apart from format changes.
**Problem** Unknown what internal computation a model builds when RL teaches it to use MCQ hints while hiding them from its CoT.
**Method** Model organism: Gemma 3 1B, SFT then GRPO (LoRA) with a -3.0 penalty for mentioning the hint. Gemma Scope 2 CLTs pretrained on the base model act as anomaly detectors: per-layer FVU differential and new-feature counts over with-hint, no-hint and non-MCQ prompts, correct vs wrong hints, and 6 checkpoints.
**Findings** 98% accuracy with hints vs 38% without, 0% leakage. Added computation peaks at layers 20-23. Two features (L15/f478, L12/f317) new in all 10 tested prompts. Correct- vs wrong-hint differentials correlate at r=0.971, read as content-agnostic concealment. Differential present from step 50 and roughly flat over training: no phase transition.
**Limits** Hint-specific signal ~10x smaller than total GRPO change, so CLTs cannot separate hiding from format changes. Single 1B model, MCQ only, 20 prompts per condition. Features not functionally characterized. No code release mentioned.

**Relations**
- builds-on [[baker2025monitoring]]: organism mirrors obfuscation from penalizing CoT mentions of exploited behavior
- builds-on [[chen2025reasoning]]: reuses the hint-in-MCQ-prompt verbalization setup

**New tags**
- (none)
