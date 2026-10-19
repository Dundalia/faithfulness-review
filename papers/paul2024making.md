---
key: paul2024making
title: "Making Reasoning Matter: Measuring and Improving Faithfulness of Chain-of-Thought Reasoning"
authors: "Paul, West, Bosselut & Faltings"
year: 2024
venue: "Findings of EMNLP 2024"
url: https://arxiv.org/abs/2402.13950v4
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:generic-cf, lever:preference, lever:sft, updates:behavior, contribution:analysis, contribution:metric, contribution:method, motivation:reasoning-quality, motivation:explainability, domain:mcq, domain:math, domain:logic, scale:small, scale:mid, scale:closed, eval:ood, model:gpt-4, model:gpt-3.5-turbo, model:llama-3-70b, model:llama-2-7b, model:mistral-7b, model:t5-3b, metric:indirect-effect, metric:direct-effect, metric:leakage-adjusted-simulatability]
---
**Problem** Unclear whether LLM answers causally depend on their CoT; small distilled rationalizers can shortcut past their rationales.
**Method** Causal mediation (CoT = mediator): counterfactual questions/CoTs (own CoTs for NIE, GPT-4's for CIE) → indirect vs direct effects on 12 LLMs. FRODO: DPO rationale generator (correct > counterfactual/irrelevant chains) + reasoner trained with LM + counterfactual + margin-ranking (indirect-effect) losses.
**Findings** LLMs often ignore CoT; GPT-4 flips answer only 30% under counterfactual CoT; RLHF models DE > IE; IE drops with more steps. FRODO: +2-3% acc over SFT/distillation, +4.5% robustness (CIE), +2.6% OOD, higher LAS than SCOTT. Code released.
**Limits** Causal metric blind to internals; students ≤7B, mostly MCQ commonsense; needs costly LLM counterfactual data and two-stage DPO; faithfulness via CIE/LAS on few tasks; 3 seeds.

**Relations**
- compares-to [[wang2023scott]]: SCOTT run as T5-3B accuracy and LAS faithfulness baseline
- builds-on [[wang2023scott]]: counterfactual loss and fine-tuned T5-large LAS simulator follow SCOTT
- compares-to [[ramnath2024tailoring]]: MaRio run as the strongest self-rationalization baseline
- builds-on [[ramnath2024tailoring]]: uses MaRio's GPT-3 silver rationales and correct-answer filtering

**New tags**
- (none)
