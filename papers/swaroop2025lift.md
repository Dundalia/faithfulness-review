---
key: swaroop2025lift
title: "LIFT: Likelihood-Based Intervention Faithfulness Training"
authors: "Swaroop, Chaudhary, Zhu et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2509.13334v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, lever:sft, updates:behavior, contribution:method, motivation:explainability, domain:math, domain:open-qa, scale:small, eval:held-out-evaluator, model:mistral-7b-v0.3, model:qwen3-8b, model:qwen3-4b-2507, metric:step-intervention-logprob-drop, metric:static-intervention-logprob-drop, metric:truncation-logprob-drop]
---
**TL;DR** Introduces LIFT, which swaps CoT steps for irrelevant facts and trains on continuations weighted by the answer-likelihood drop: big gains on likelihood-based faithfulness proxies, usually small accuracy cost.
**Problem** CoT answers often don't causally depend on the stated steps; prior fixes need human labels/filtering or symbolic solvers.
**Method** Swap each step for a domain-matched irrelevant fact (Wikidata/arithmetic corpus, style-rewritten), regenerate, score answer log-prob drop → score-weighted LoRA SFT on post-intervention continuations + gold-answer term (η) + KL to base.
**Findings** Mistral-7B, Qwen3-8B/4B: faithfulness x1.4-2 (GSM8K/SVAMP), x4-18 (StrategyQA) vs accuracy-only SFT; untrained static & truncation metrics also rise. Claims no significant acc cost (yet Mistral GSM8K 0.41 vs 0.50). No answer supervision → more faithful, big acc drop. Code/data in supplement.
**Limits** Proxy log-prob metrics, main one = training signal; ≤8B; in-distribution tests; ~10-24h data gen/model; hand-tuned hyperparams; fact-corpus dependent.

**Relations**
- builds-on [[lanham2023measuring]]: uses its truncation (early-answering) metric as independent faithfulness check

**New tags**
- (none)
