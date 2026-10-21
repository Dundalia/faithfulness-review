---
key: sun2026refine
title: "ReFIne: A Framework for Trustworthy Large Reasoning Models with Reliability, Faithfulness, and Interpretability"
authors: "Sun, Yan, Kulkarni & Weng"
year: 2025
venue: "COLM 2026"
url: https://arxiv.org/abs/2510.09062v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, reveals:stated-plan, reveals:cot-reliance, signal:planted-cf, signal:judge, signal:cot-intervention, lever:sft, lever:rl-reward, lever:architecture, updates:explanation, contribution:method, motivation:explainability, motivation:reliability, domain:math, domain:mcq, scale:small, eval:ood, eval:human-study, model:qwen3-1.7b, model:qwen3-4b, model:qwen3-8b, model:deepseek-r1-distill-llama-8b, metric:disclosure-faithfulness, metric:commitment-faithfulness]
---
**TL;DR** Introduces ReFIne, which trains models with SFT and GRPO to write structured traces with confidence self-assessment: better interpretability, hint disclosure and calibration at similar accuracy, mainly on math.
**Problem** LRM CoT tuned for acc/efficiency, not trust: traces hard to follow, silently use cues, overconfident.
**Method** SFT on tagged traces (understanding→facts→plan→think→answer→self-assessment) → GRPO rewarding correctness, format, cross-section refs, calibrated confidence. Vs matched Plain (correctness-only GRPO).
**Findings** Qwen3-1.7/4/8B: interpretability +44.0%, faithfulness +18.8% (professor-hint disclosure up), reliability +42.4%; commitment faithfulness 0.90–1.00 (QwQ), 0.83–0.94 (MTurk); acc ≈ Plain, 1.16× shorter. Transfers to DS-R1-Llama-8B. Code released.
**Limits** Math-centric, ≤8B. Commitment faithfulness LLM-judged, ≈ SFT-only ablation, no Plain comparison. Humans prefer ReFIne readability only 52.4 vs 46.7%. One hint type, no false-positive check. Acc below Plain on hard comps (AIME, HMMT), small-model non-math.

**Relations**
- builds-on [[chen2025reasoning]]: adapts its hint-verbalization paradigm (professor hint) as disclosure-faithfulness metric

**New tags**
- (none)
