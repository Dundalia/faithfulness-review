---
key: lin2026reason
title: "To Reason or to Fabricate: Reasoning Without Shortcuts via Hint-Anchored Pairwise Aggregation"
authors: "Lin, Zhang & Feng"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2606.29481v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:judge, signal:interp-tool, lever:rl-reward, updates:behavior, contribution:method, motivation:reasoning-quality, domain:math, domain:mcq, domain:professional, scale:small, eval:ood, model:qwen2.5-7b, model:qwen3-4b, metric:judge-pairwise-rationale-quality, metric:causal-direction-gap, metric:logit-lens-answer-emergence]
---
**Problem** Pre-RL data overlap (RL data seen in pretraining/SFT) → RLVR rewards memorized answers + post-hoc fabricated CoT.
**Method** HIPPO: GRPO + binarized pairwise reward; 4B LLM judge compares normal rollouts vs answer-hinted (answer-first) rollouts; derived as KL→TV lower-bound surrogate. Overlap simulated via answer-only SFT; math + medical.
**Findings** Best avg accuracy vs std RL, PRM RL, Pref-GRPO, SP3F, in-domain & OOD; Gemini-judged rationale quality beats baselines, std RL degrades it; hint anchor sharpens judge, lowers non-transitivity. Logit lens + ICM: std RL → early answer retrieval, R→A gap collapses (Δ 0.93) on overlap data.
**Limits** Qwen ≤7B only; overlap simulated; quality = LLM judge, MedQA train data only; OOD = accuracy only; HIPPO not mechanistically analysed; correct-answer hints only; extra judge compute. Code released.

**Relations**
- builds-on [[chen2025reasoning]]: answer-hint injection to elicit post-hoc rationalization, following hint-based faithfulness findings

**New tags**
- (none)
