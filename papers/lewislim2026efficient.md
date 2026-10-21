---
key: lewislim2026efficient
title: "Efficient Reasoning Training Does Not Always Harm CoT Faithfulness and Monitorability"
authors: "Lewis-Lim, Tan, Sanger et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2610.03509v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:decision-factors, reveals:planted-cue, signal:generic-cf, signal:planted-cf, contribution:analysis, motivation:monitoring, motivation:explainability, domain:classification, domain:mcq, domain:chat, scale:small, eval:specificity, model:qwen3-4b, model:qwen3-8b, model:olmo-3-7b, metric:normalized-simulatability-gain, metric:g-mean-squared, factor:cot-length]
---
**TL;DR** Tests whether length-penalized efficient-reasoning RL harms CoT faithfulness and monitorability: simulatability often drops, mainly through less consistent answers, but monitorability mostly survives except under heavy compression.
**Problem** Efficient-reasoning (length-pressure) RL feared to drop CoT steps → weaker explanation/oversight; unclear whether/when.
**Method** Qwen3-4B/8B, Olmo3-7B × ThinkPrune / L1 / GLP (LoRA-GRPO on AIME-AMC). Faithfulness = NSG simulatability on 7 decision tasks; monitorability = g-mean² on sycophancy (FACE-Eval) + MedQA cognitive-bias cues.
**Findings** NSG falls in 11/15 settings, mainly via less consistent answers (ρ=0.87; length ρ=0.46); some 40–65% shorter CoTs keep/raise it. Monitorability: sycophancy drops ≤0.08; MedQA-bias drops >0.2 only at L1-Low, tracking compression vs base (ρ=0.68), not absolute length. L1 costs accuracy; ThinkPrune/GLP ≈ base.
**Limits** ≤8B models, math-only training; no agentic settings (SHADE-Arena too hard); single LLM monitor. Code released.

**Relations**
- builds-on [[mayne2026positivecasefaithfulnessllm]]: uses NSG simulatability metric, its seven datasets and predictor ensemble
- builds-on [[guan2025monitoring]]: uses intervention-setting g-mean² monitorability metric, adapting its implementation
- contradicts [[kaufmann2026aligned]]: Kaufmann: length penalties reduce monitorability; here it mostly survives except heavy compression

**New tags**
- (none)
