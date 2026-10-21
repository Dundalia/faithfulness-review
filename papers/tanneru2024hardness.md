---
key: tanneru2024hardness
title: "On the Hardness of Faithful Chain-of-Thought Reasoning in Large Language Models"
authors: "Tanneru, Ley, Agarwal & Lakkaraju"
year: 2024
venue: "ICML 2024 workshop (TiFA)"
url: https://arxiv.org/abs/2406.10625v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, lever:prompt-pipeline, lever:sft, lever:steering, updates:behavior, contribution:negative-result, contribution:analysis, motivation:explainability, domain:mcq, domain:math, domain:logic, scale:small, scale:closed, model:llama-3-8b, model:gpt-3.5-turbo, model:gpt-4, metric:early-answering-aoc]
---
**TL;DR** Tests whether in-context learning, fine-tuning or activation editing can make CoT more faithful: gains are small and inconsistent, often cost accuracy, and activation editing gives no significant gain.
**Problem** Can standard steering tools (ICL, fine-tuning, activation editing) make the CoT faithful, i.e. make the answer depend on it?
**Method** ICL and LoRA SFT on self-generated (Q, CoT, A) triplets picked uniformly or by faithfulness (deterministic/stochastic, correct-only variants); ITI-style editing of probe-selected heads. Faithfulness = per-instance early-answering AOC. AQuA, LogiQA, TruthfulQA.
**Findings** ICL/SFT: small gains that depend on dataset and model, often with an acc drop (~20% vs GTA baseline, Llama SFT on TruthfulQA). Text says faithful demos beat uniform ones; appendix tables mixed. Steering: no significant gain; best heads/alpha/K differ by dataset. GPT-4 is the most accurate and the least faithful.
**Limits** One truncation metric. 3 datasets. GPT-4 gets ICL only (FT blocked by API errors); steering on Llama-3-8B only. Many differences not significant (p-values in appendix). No code mentioned.

**Relations**
- builds-on [[lanham2023measuring]]: adopts early-answering metric, made per-instance with answer probabilities

**New tags**
- (none)
