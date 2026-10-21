---
key: jose2025reasoning
title: "Reasoning Models Sometimes Output Illegible Chains of Thought"
authors: "Jose"
year: 2025
venue: "NeurIPS 2025"
url: https://arxiv.org/abs/2510.27338v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:correctness, reveals:cot-reliance, reveals:hidden-info, signal:judge, signal:cot-intervention, contribution:analysis, motivation:monitoring, domain:open-qa, scale:mid, scale:large, scale:closed, eval:confound-control, eval:measure-validation, eval:scaling, factor:outcome-rl, factor:cot-necessity, model:deepseek-r1, model:deepseek-r1-zero, model:deepseek-v3, model:qwq-32b, model:qwen3-235b-a22b, model:claude-sonnet-4, metric:cot-legibility, metric:prefill-ablation-accuracy, metric:legibility-accuracy-correlation]
---
**TL;DR** Measures CoT legibility across reasoning models: RL-trained models except Claude often produce illegible CoTs, more on harder questions, and answering from legible parts alone cuts accuracy.
**Problem** Does outcome-based RL make reasoning-model CoTs illegible to monitors, and is the illegible text actually used?
**Method** GPT-4o rates CoT illegibility 1-9; GPQA-Diamond with answer choices removed; 14 models. QwQ forced to answer from its legible-only CoT prefix; 100 resamples per question, scores length-normalized.
**Findings** RL models except Claude often illegible (R1 >=5 in 45%); base V3 legible; final answers legible. Legible-only prefix: correct 24.6% -> 11.5%. Resampling: legibility-correctness r ~ 0.06. Illegibility higher on harder questions and larger models.
**Limits** Single-turn GPQA only; one LLM grader (Claude check, kappa 0.78); prefill on QwQ only; RL role and mechanisms (steganography, vestigial tokens) inferred from cross-model comparison, untested; OpenAI models anecdotal.

**Relations**
- builds-on [[schoen2025stress]]: uses its published o3 CoT excerpts as qualitative evidence of illegibility
- builds-on [[baker2025monitoring]]: uses its o1 samples as evidence of condensed reasoning

**New tags**
- (none)
