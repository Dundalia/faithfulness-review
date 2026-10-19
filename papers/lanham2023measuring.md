---
key: lanham2023measuring
title: "Measuring Faithfulness in Chain-of-Thought Reasoning"
authors: "Lanham, Chen, Radhakrishnan et al."
year: 2023
venue: "preprint"
url: https://arxiv.org/abs/2307.13702v1
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:cot-reliance, reveals:hidden-info, signal:cot-intervention, contribution:metric, contribution:analysis, motivation:explainability, domain:mcq, domain:math, domain:logic, domain:synthetic, scale:small, scale:mid, scale:closed, model:anthropic-internal, metric:early-answering-aoc, metric:adding-mistakes-aoc, metric:answer-change-without-cot, metric:paraphrase-accuracy]
---
**Problem** Is CoT the model's actual reasoning? Tests 3 unfaithfulness hypotheses: post-hoc CoT, unstated test-time compute, phrasing-encoded reasoning.
**Method** 175B RLHF model, 8 MCQ tasks: truncate CoT, insert LLM-made mistake, swap in filler "..." tokens, paraphrase prefix → answer match/accuracy. Answer change w/ vs w/o CoT across 810M–175B models + synthetic addition.
**Findings** CoT reliance varies widely by task (early-answering AOC 0.44 AQuA vs 0.02 ARC-Easy), little correlated with CoT accuracy gain. Filler: no gain; paraphrase: accuracy kept → CoT gain not from extra compute or phrasing-encoded info. Inverse scaling: 13B relies on CoT more than 175B on 7/8 tasks; easier addition → less reliance.
**Limits** No ground truth on internal reasoning; tests non-exhaustive, not-post-hoc ≠ faithful; only RLHF models from one internal family.

**Relations**
- (none)

**New tags**
- (none)
