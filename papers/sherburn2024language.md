---
key: sherburn2024language
title: "Can Language Models Explain Their Own Classification Behavior?"
authors: "Sherburn, Chughtai & Evans"
year: 2024
venue: "preprint"
url: https://arxiv.org/abs/2405.07436v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:decision-factors, signal:generic-cf, lever:sft, updates:explanation, contribution:benchmark, contribution:analysis, contribution:negative-result, motivation:explainability, domain:classification, domain:synthetic, scale:closed, eval:ood, model:gpt-3-175b, model:gpt-3-13b, model:gpt-4, metric:articulation-accuracy]
---
**Problem** Can LLMs state the rule that actually drives their own classification behavior?
**Method** ArticulateRules: 29 procedurally generated few-shot text-classification rules + adversarial OOD inputs; verify behavior matches known rule ID+OOD, then grade MC/freeform rule articulations (GPT-4 grader, ~95% vs human labels). In-context: GPT-3 family, GPT-4; finetuned GPT-3 → SFT on articulations, held-out rules.
**Findings** In-context freeform acc rises w/ scale: Curie 1%, GPT-3 7%, GPT-4 72%. Finetuned GPT-3 (>90% ID+OOD on 10 rules) articulates 0%; SFT on correct explanations → still 0% on 7/10. MC above chance 9/10 after SFT. Paraphrase/CoT augmentation no sig. help (1 rule tested). Dataset, code, OpenAI eval released.
**Limits** Success necessary not sufficient (pattern completion vs introspection); black-box only; SFT on 10 rules, low diversity; 2023 OpenAI models only.

**Relations**
- (none)

**New tags**
- (none)
