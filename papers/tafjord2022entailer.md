---
key: tafjord2022entailer
title: "Entailer: Answering Questions with Faithful and Truthful Chains of Reasoning"
authors: "Tafjord, Dalvi Mishra & Clark"
year: 2022
venue: "EMNLP 2022"
url: https://arxiv.org/abs/2210.12217v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:decision-factors, signal:by-construction, signal:judge, lever:prompt-pipeline, lever:sft, lever:inference-time, updates:behavior, updates:explanation, contribution:method, contribution:benchmark, motivation:explainability, domain:mcq, scale:mid, eval:human-study, eval:ood, model:t5-11b, metric:human-judged-conclusion-follows, metric:human-judged-premise-correctness]
---
**TL;DR** Introduces Entailer, which answers via backward-chained proofs whose premises and steps it self-verifies: no accuracy cost versus direct QA, and humans find most conclusions follow and premises true.
**Problem** CoT/explanations may be unfaithful (answer doesn't follow) and untruthful (model doesn't believe its own premises).
**Method** T5-11B fine-tuned on EntailmentBank + new crowd-labeled entailments (incl. negatives); backward-chains from each answer hypothesis, overgenerates premises, keeps steps the model self-verifies (premises + entailment); answer = top-scoring proof.
**Findings** Zero-shot OBQA/QuaRTz acc 75.2/75.4 vs direct 75.2/74.1 → no acc cost. Humans (1-deep proofs, 100 OBQA Qs): >70% conclusions clearly follow (Macaw 34%), ~90% premises correct, preferred 57% vs 23%. Mixing with direct QA breaks faithfulness on 14-17% of questions. Data + models released.
**Limits** Faithful only by answer selection; belief = "yes" to "Is X true?". Near-tautologies, invalid steps; ~360 s/question; one model, science MCQ.

**Relations**
- (none)

**New tags**
- (none)
