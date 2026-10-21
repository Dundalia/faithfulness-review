---
key: mao2026taming
title: "Taming CoT Obfuscation in VLMs: From Mechanistic Evidence to Activation Enforcement"
authors: "Mao, Zhu, Zhao et al."
year: 2026
venue: "NeurIPS 2026"
url: https://arxiv.org/abs/2609.24243v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:correctness, signal:judge, lever:rl-mechanics, lever:activation-loss, updates:explanation, contribution:method, contribution:analysis, contribution:metric, motivation:monitoring, domain:multimodal, domain:chat, domain:open-qa, scale:small, scale:mid, eval:human-study, eval:held-out-evaluator, model:qwen3-vl-8b, model:gemma-3-12b, metric:g-mean-squared, metric:monitor-accuracy]
---
**TL;DR** Shows GRPO makes vision-language CoTs templated and less monitorable, and introduces Tame, which penalizes template features in activations: best monitorability in all settings with small, mixed task effects.
**Problem** GRPO on VLMs raises reward while CoT drops visual anchors → templated, less monitorable traces ("non-intentional obfuscation").
**Method** Two-gate judge labels (CoT-only answerer + image-grounding verifier; SPA-VL: safety reward + auditor) predicted by GPT-4o → G-mean²; attention/IG/patching + frozen SAE localize template features. Tame = GRPO + prompt-evolved refined traces + asymmetric SAE penalty on template latents above pre-RL level.
**Findings** Template/ground features lose separability; targeted ablation beats random (partial causal). Tame best G-mean² in all 4 settings, +30.9/+16.7 pp over GRPO (Qwen VIRL/SPA-VL); humans + 2 held-out monitors agree. Task metrics small, mixed (Qwen VIRL acc .646→.640, SPA-VL harm 6.8→7.4).
**Limits** 8B/12B VLMs, 2 datasets; LLM-judge reference labels; small injection effects; behav-only gets much of gain; VIRL capability trade-offs (Qwen MMMU-Pro 48.6→43.0, 4.0 already under GRPO); no code release mentioned.

**Relations**
- builds-on [[guan2025monitoring]]: adopts G-mean² (TPR×TNR) monitorability metric and RL-obfuscation framing
- contradicts [[guan2025monitoring]]: Guan: frontier RL doesn't materially reduce monitorability; here GRPO sharply cuts 8B-VLM G-mean²

**New tags**
- (none)
