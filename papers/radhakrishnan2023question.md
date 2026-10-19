---
key: radhakrishnan2023question
title: "Question Decomposition Improves the Faithfulness of Model-Generated Reasoning"
authors: "Radhakrishnan, Nguyen, Chen et al."
year: 2023
venue: "preprint"
url: https://arxiv.org/abs/2307.11768v2
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:planted-cue, reveals:cot-reliance, signal:planted-cf, signal:cot-intervention, lever:prompt-pipeline, updates:behavior, contribution:method, motivation:monitoring, motivation:scalable-oversight, domain:mcq, scale:closed, model:anthropic-internal, metric:early-answering-aoc, metric:adding-mistakes-aoc, metric:biased-context-accuracy-drop]
---
**Problem** CoT often unfaithful (biased reasoning, ignored reasoning) → can't verify the model's process.
**Method** Prompt pipelines vs CoT: CoT decomposition (subQs+subAs in one context), factored decomposition (each subQ answered in an isolated context, then recomposed); scored with Lanham truncation/corruption + Turpin biasing-cue metrics.
**Findings** Factored most faithful: corruption sensitivity 33.6 vs CoT 9.6; suggested-answer acc drop 9.2 vs 21.3. CoTD intermediate overall. Acc cost: factored 81.8, CoTD 85.6 vs CoT 86.0.
**Limits** One RLHF model (Claude 1.3 base), 4 MCQ tasks, no ground-truth reasoning. CoTD worse than CoT on suggested answer; answer-always-A: no significant differences. Prompts released.

**Relations**
- builds-on [[lanham2023measuring]]: adopts early-answering (truncation) and adding-mistakes (corruption) faithfulness tests
- builds-on [[turpin2023language]]: adopts suggested-answer and answer-always-A biasing features as faithfulness tests

**New tags**
- (none)
