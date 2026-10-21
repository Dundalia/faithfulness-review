---
key: ferreira2026truthful
title: "Truthful or Fabricated? Using Causal Attribution to Mitigate Reward Hacking in Explanations"
authors: "Ferreira, Aziz & Titov"
year: 2025
venue: "ICLR 2026"
url: https://arxiv.org/abs/2504.05294v3
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, reveals:misbehavior, signal:planted-cf, lever:preference, lever:inference-time, updates:behavior, contribution:analysis, contribution:method, motivation:explainability, motivation:alignment, domain:math, domain:mcq, domain:social-bias, scale:small, eval:optimization-pressure, eval:ood, model:llama-3.1-8b, model:llama-3.2-3b, model:skywork-reward-gemma-2-27b, model:skywork-reward-llama-3.1-8b, metric:cue-acknowledgment-rate, metric:cue-reliance-gap, metric:unfaithful-explanation-rate]
---
**TL;DR** Shows reward models favor CoTs that hide forbidden cues, and counters this by flagging cue use detected via counterfactual removal: fewer unfaithful CoTs with best-of-N and DPO.
**Problem** Text-only RMs penalize overt cue use → BoN/DPO favor cued answers whose CoT hides a forbidden cue ("CoT hacking").
**Method** Math Book (AQuA-RAT + leaked solution) & BiasQA (Winogenerated), told not to use cue. Fix: if removing cue flips prediction, append "I used the cue" disclaimer to RM input (RM_D: any flip; RM_C: flip away from cued answer) → BoN + DPO data.
**Findings** Plain RM raises cue use w/o matching ack (BoN Math Book acc 75.2→93.6%, ack 2.7→1.7%). RM_C closes BoN gap 41%/71% (Math Book/BiasQA, SK-Gemma RM); augmented RMs give fewer unfaithful CoTs in 14/16 DPO comparisons. Code released.
**Limits** Two controlled settings, 3B/8B; needs known cue + counterfactuals. Small DPO gain on Math Book (RM_D ~none). Offline DPO only; OOD test preliminary.

**Relations**
- builds-on [[turpin2023language]]: Uses its cue-intervention + acknowledgment protocol to measure CoT unfaithfulness
- builds-on [[chen2025reasoning]]: Follows its cue-acknowledgment evaluation protocol for CoT faithfulness

**New tags**
- (none)
