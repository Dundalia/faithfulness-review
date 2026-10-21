---
key: cheah2026training
title: "Training Large Language Models for Self-Explanation Faithfulness"
authors: "Cheah, Pérez-Ortiz, Siegel & Camburu"
year: 2026
venue: "ICLR 2026 workshop (Re-Align)"
url: https://arxiv.org/abs/2607.21090v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, object:self-prediction, reveals:planted-cue, reveals:decision-factors, signal:planted-cf, signal:generic-cf, lever:rl-reward, lever:sft, updates:explanation, contribution:method, motivation:explainability, domain:mcq, domain:classification, scale:small, eval:ood, eval:specificity, eval:optimization-pressure, model:llama-3.1-8b, model:qwen3-8b, metric:phi-cct, metric:influence-prediction-correlation]
---
**TL;DR** Trains models with GRPO to mention inserted words or hints exactly when they flip decisions, raising explanation faithfulness in-distribution, with mostly weak out-of-distribution transfer, unlike SFT.
**Problem** Self-expls omit the inputs that actually flip decisions. Prior fixes are prompting or training against gold labels; none directly optimize counterfactual (Phi-CCT) explanatory faithfulness.
**Method** Per-model counterfactual pairs (random-word insertions, user-bias hints), balanced influential/non-influential. GRPO reward 1[mention ⇔ influence] on post-answer expl. SFT arm: Yes/No prediction of own influence. Train on e-SNLI and Social-IQA; OOD on ComVE and StrategyQA.
**Findings** RL: ID test Phi-CCT 0.404–0.664 (base ≤0.21); OOD up to 0.691 (Qwen UB), ≤0.25 otherwise. SFT learns detection but not verbalization. Cross-intervention transfer is weak (Llama only, 0.178). Expls get shorter (risk-averse, a pre-flagged hack); no parroting.
**Limits** Off-policy: influence labels come from the frozen initial model; gains may partly be decision drift. Task accuracy and drift are not measured. Mention detection uses word matching. 8B only. Text and Table 4 disagree on transfer direction. No code release stated.

**Relations**
- builds-on [[turpin2023language]]: user-bias interventions with wrong-answer hints follow Turpin et al.'s biasing setup

**New tags**
- (none)
