---
key: wang2023pinto
title: "PINTO: Faithful Language Reasoning Using Prompt-Generated Rationales"
authors: "Wang, Chan, Ilievski et al."
year: 2022
venue: "ICLR 2023"
url: https://arxiv.org/abs/2211.01562v3
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:simulatability, lever:prompt-pipeline, lever:sft, updates:behavior, contribution:method, motivation:reasoning-quality, motivation:explainability, domain:mcq, scale:small, scale:mid, eval:ood, model:t5-base, model:roberta-large, model:gpt-neox-20b, metric:leakage-adjusted-simulatability, metric:perturbed-rationale-acc-drop]
---
**TL;DR** Introduces PINTO, training a small reasoner with counterfactual regularization to use rationales from a prompted LLM: better accuracy, especially out of distribution, and greater reliance on rationales.
**Problem** Rationale-augmented reasoners can ignore or misuse rationales (shortcuts) → rationales unfaithful; self-rationalization needs >100B LMs or costly rationale annotation.
**Method** Frozen GPT-NeoX-20B prompted (7 demos) → choice-specific rationales; T5-base reasoner fine-tuned w/ counterfactual regularization: label-smoothed (low-confidence) targets when rationale masked or 30% tokens replaced.
**Findings** Best ID acc in most cases, best OOD among rationale methods; T5: higher LAS except OBQA (CSQA 24.22 vs 18.75 std); larger acc drop under swapped rationales; biggest gain from human rationales. Acc rises, no cost. Code released.
**Limits** Faithfulness = reasoner's reliance on another model's rationale; StrategyQA LAS low for all (PINTO 3.35); RoBERTa reasoner: LAS not best on CSQA/QASC; <1B reasoners, commonsense MCQ only.

**Relations**
- (none)

**New tags**
- (none)
