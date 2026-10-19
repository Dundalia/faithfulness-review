---
key: chen2025consistent
title: "Towards Consistent Natural-Language Explanations via Explanation-Consistency Finetuning"
authors: "Chen, Singh, Liu et al."
year: 2024
venue: "COLING 2025"
url: https://arxiv.org/abs/2401.13986v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:decision-factors, signal:generic-cf, lever:sft, updates:explanation, updates:behavior, contribution:method, motivation:explainability, domain:open-qa, domain:mcq, scale:mid, eval:ood, eval:human-study, model:llama-2-13b, metric:simulation-precision]
---
**Problem** LLM explanations are inconsistent across related questions (e.g. "all birds fly", then "no" on penguins), so users cannot simulate the model from them.
**Method** EC-finetuning: GPT-4 writes follow-up Qs that a seed explanation answers; Claude-2 answers them consistently with that explanation → SFT LLaMA-2-13B on the augmented data. Baseline: plain multitask FT. Metric: counterfactual simulatability precision, with Claude-2 as the human simulator.
**Findings** Consistency +10.0% rel on 4 FT datasets and +4.5% rel on 7 OOD datasets. Avg accuracy also rises (5.2%/4.3% rel), uncorrelated with the consistency gain, but drops on 3/7 OOD sets. Self-augmentation with LLaMA alone (StrategyQA only): +4.4% consistency but -5.4% accuracy. Gains are larger on correct predictions.
**Limits** Only one 13B model; text only; one baseline. Consistency is explicitly not faithfulness to internal process. Simulator is Claude-2 (agreement with 6 annotators about equal to inter-human), which also wrote the training answers. Data comes from stronger closed models. Code only promised.

**Relations**
- builds-on [[pmlr-v235-chen24bl]]: uses its counterfactual simulatability precision metric and LLM-simulator follow-up setup

**New tags**
- (none)
