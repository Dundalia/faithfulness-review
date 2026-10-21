---
key: cahlik2025reasoninggrounded
title: "Reasoning-Grounded Natural Language Explanations for Language Models"
authors: "Cahlik, Alves & Kordik"
year: 2025
venue: "xAI 2025"
url: https://arxiv.org/abs/2503.11248v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, object:cot, reveals:decision-factors, reveals:cot-reliance, signal:output-agreement, signal:cot-intervention, lever:sft, lever:prompt-pipeline, updates:behavior, updates:explanation, contribution:method, motivation:explainability, domain:classification, domain:synthetic, scale:small, scale:mid, model:llama-3-8b, model:mistral-7b, model:mistral-nemo-12b, model:zephyr-7b-sft, model:phi-4, metric:answer-explanation-alignment, metric:partial-decision-alignment]
---
**TL;DR** Trains LLMs to decode answers and explanations from the same compressed reasoning, making explanations agree almost perfectly with answers on toy classification tasks and improving accuracy.
**Problem** Answer-then-explain NLEs tend to be fabricated; full CoT too costly for ubiquitous use.
**Method** LoRA SFT on input→compressed-CoT reasoning→ANSWER/EXPLAIN targets; answer & NLE decoded independently from the same reasoning. LLM-as-classifier: logistic regression, depth-7 decision tree, NL mortgage tree (HMDA); 5 LLMs ≤14B. Baselines: separate/joint SFT without reasoning, ICL.
**Findings** Alignment ≥0.965 with reasoning vs 0.44–0.88 without; answer acc up (LR joint SFT 0.47–0.64 → 0.89–1.0). Llama 3 8B (DT): partial decisions 100% aligned across reasoning & explanation; flipping reasoning decisions propagates in almost all cases. Code + data released (MIT).
**Limits** Toy classifiers; hand-designed per-task reasoning; per-task SFT. Faithfulness quantified only as agreement; flip test qualitative, one model. DT explanation acc drops vs no-reasoning CoT explanations (~0.96–1.0 → 0.72–0.88).

**Relations**
- (none)

**New tags**
- (none)
