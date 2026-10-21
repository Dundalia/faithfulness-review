---
key: dehghanighobadi2025can
title: "Can LLMs Explain Themselves Counterfactually?"
authors: "Dehghanighobadi, Fischer & Zafar"
year: 2025
venue: "EMNLP 2025"
url: https://arxiv.org/abs/2502.18156v2
checked: 2026-10-15
tags: [source:trustme, object:posthoc-expl, reveals:decision-factors, signal:generic-cf, contribution:analysis, motivation:explainability, domain:classification, domain:math, scale:small, scale:mid, model:llama-3.1-8b, model:llama-3.3-70b, model:gemma-2-9b, model:gemma-2-27b, model:mistral-7b, model:deepseek-r1-distill-qwen-32b, metric:counterfactual-validity, eval:confound-control]
---
**TL;DR** Tests whether LLMs' self-generated counterfactual explanations flip their own predictions to the requested label: mostly produced but often invalid, with no consistent gain from scale or reasoning distillation.
**Problem** Do LLMs' self-generated counterfactual explanations (SCEs) actually flip their own prediction to the requested target label?
**Method** Predict → prompt an SCE for a target label (unconstrained / rationale-based / CoT) → re-predict on the SCE with vs. w/o chat history. 7 open LLMs (7–70B), 6 datasets (DiscrimEval, FolkTexts, SST2, Twitter-fin, MGNLI, GSM8K). Metrics: Gen, Val, edit distance.
**Findings** SCEs are mostly generated but often invalid; GSM8K Val mostly <20%. Chat history shifts Val (inflates it on GSM8K, FolkTexts; suggests target copying). Val tracks human-judged correctness only w/o context. Size, R1-distill and leaderboard rank give no consistent gain. CoT helps a little (avg Val 75 vs 69%). Code released.
**Limits** Open models ≤70B only; simple tasks with discrete or integer labels; human correctness check only on GSM8K (50/model, done by the authors); no fix tested.

**Relations**
- extends [[madsen2024self]]: broader SCE self-consistency test: generation rates, prompting variants, chat-history effect, hidden states
- builds-on [[bhan2025did]]: uses its sentence-level mean embeddings for SCE drift; SCE clustering inspired by it

**New tags**
- (none)
