---
key: li2025better
title: "Towards Better Chain-of-Thought: A Reflection on Effectiveness and Faithfulness"
authors: "Li, Cao, Chen et al."
year: 2024
venue: "Findings of ACL 2025"
url: https://arxiv.org/abs/2405.18915v3
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:decision-factors, signal:output-agreement, signal:interp-tool, lever:prompt-pipeline, lever:inference-time, updates:explanation, contribution:analysis, contribution:method, motivation:reasoning-quality, domain:math, domain:logic, domain:mcq, scale:small, scale:mid, model:llama-3.1-8b, model:gemma-2-9b, model:mistral-7b, model:qwen2.5-14b, model:llama-2-13b, metric:faithful-bertscore, metric:cot-answer-inconsistency, metric:average-attribution-effect]
---
**TL;DR** Finds CoT helps mainly on hard tasks and answers recall facts the CoT dropped, then introduces QUIRE, which reinjects key question statements as hints: modest accuracy gains.
**Problem** CoT gains vary by task; no explanation of why wrong CoTs still give right answers (unfaithfulness).
**Method** Open LLMs 7-14B, 9 math/logic/commonsense sets: difficulty bins, CoT info gain, integrated-gradient info flow. QUIRE: high-attribution question statements as hints → new CoTs → info-gain-weighted vote.
**Findings** CoT helps on hard, info-adding tasks; unfaithfulness concentrated in logic; answer recalls facts the CoT dropped. QUIRE beats CoT/SC/LtM/Self-Refine on Llama3.1-8B (FBS up to +5.6, acc up to +2.4); mostly on Gemma2-9B. Code released.
**Limits** Faithfulness = CoT/answer correctness agreement (50 manual pairs/dataset; BertScore vs gold rationale). QUIRE only on ProofWriter/ProntoQA, 2 small models. Open models only; no theory.

**Relations**
- builds-on [[lyu2023faithful]]: adopts CoT-answer correctness consistency as its faithfulness evaluation, citing Lyu et al.

**New tags**
- (none)
