# tanneru2024hardness — coder B

On the Hardness of Faithful Chain-of-Thought Reasoning in Large Language Models

tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, lever:prompt-pipeline, lever:sft, lever:steering, contribution:negative-result, contribution:analysis, motivation:explainability, domain:mcq, domain:math, domain:logic, scale:small, scale:frontier-api, model:llama-3-8b-instruct, model:gpt-3.5-turbo, model:gpt-4, metric:early-answering-aoc]

**Problem** CoT unfaithful to model behavior; untested whether standard steering tools (ICL, FT, activation editing) can fix it.
**Method** Per-instance early-answering AOC (Lanham). ICL / FT (LoRA; GPT-3.5 API) on most-faithful sampled CoTs; ITI-style steering of top-K probe-selected heads. AQuA, LogiQA, TruthfulQA.
**Findings** Gains marginal, dataset-specific, mostly non-significant. ICL/FT trade accuracy for faithfulness (TruthfulQA FT ~20% acc drop). Steering ≈ no gain; best heads/α vary by dataset. GPT-4 most accurate, least faithful.
**Limits** Single truncation metric. No GPT-4 FT. Steering on Llama-3-8B only. Per-dataset training; no transfer test.

**Relations**
- builds-on [[lanham2023measuring]]: uses early-answering truncation metric, made per-instance with answer probabilities
- builds-on [[agarwal2024faithfulness]]: same group; faithfulness-vs-plausibility framing and high-stakes motivation
- contradicts [[lyu2023faithful]]: solver-consistent CoT is not faithful to the model's internal computation

**New tags**
- (none)
