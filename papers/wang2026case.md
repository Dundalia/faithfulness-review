---
key: wang2026case
title: "CASE: Causal Alignment and Structural Enforcement for Improving Chain-of-Thought Faithfulness"
authors: "Wang, Yao, Huang et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2607.18820v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:generic-cf, lever:sft, lever:architecture, updates:behavior, contribution:method, contribution:theory, motivation:explainability, domain:mcq, domain:logic, scale:small, eval:ood, model:llama-3.1-8b, model:qwen3-8b, model:deepseek-r1-distill-qwen-7b, metric:filler-tokens, metric:early-answering-aoc, metric:indirect-effect, metric:direct-effect]
---
**TL;DR** Introduces CASE, which blocks the instruction-to-answer shortcut with counterfactual SFT data and an inference-time attention mask: best combined faithfulness in every setting, including cross-dataset transfer, at similar accuracy.
**Problem** Answer can bypass the CoT via a direct instruction→answer (Z→Y) shortcut.
**Method** Standard CoT SFT plus answer-only loss on counterfactual-CoT, biased-instruction and empty-instruction data; inference-time mask blocks answer→instruction attention. Mutual-information bound analysis. Three 7–8B models; ARC, StrategyQA, LogiQA.
**Findings** Best G-mean of FT/EA/CIE/CDE in all 12 settings: +37% avg vs per-setting strongest baseline (incl. untuned base), +61% in cross-dataset transfer. Avg acc 74.88 vs 74.80%. SFT mainly lifts CIE/CDE; mask lifts FT/EA. Code released.
**Limits** ≤8B; MCQ/boolean QA only. CIE counterfactuals use the same generator and prompt as the training data. Mask leaves instruction info in CoT states. T/F tasks need partial masking (β=80%); CDE worse than base on StrategyQA for 2 of 3 models.

**Relations**
- compares-to [[paul2024making]]: FRODO dual-model baseline; CASE gets higher faithfulness and is about 3x faster
- builds-on [[paul2024making]]: adopts its CIE/CDE causal-effect faithfulness metrics
- compares-to [[tanneru2024hardness]]: DU^c faithful-CoT fine-tuning baseline; CASE far exceeds it on faithfulness
- builds-on [[lanham2023measuring]]: adopts Filler Tokens and Early Answering metrics as main evaluations

**New tags**
- (none)
