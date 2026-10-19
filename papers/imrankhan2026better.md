---
key: imrankhan2026better
title: "Better Thinkers, Worse Believers: Does Self-Distillation Reduce Chain-of-Thought Faithfulness?"
authors: "Imrankhan"
year: 2026
venue: "NeurIPS 2026 workshop (MusIML)"
url: https://openreview.net/forum?id=WTcy60M8eb
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, signal:planted-cf, contribution:analysis, motivation:explainability, motivation:reliability, domain:math, scale:small, factor:post-training, model:qwen3-1.7b, metric:biased-context-accuracy-drop, metric:biased-reasoning-rate, metric:hint-verbalization-rate, metric:composite-faithfulness-score]
---
**Problem** Self-distillation (OPSD) is adopted for accuracy gains. Does it erode CoT faithfulness and robustness to misleading context compared with SFT?
**Method** Qwen3-1.7B base, SFT and OPSD (teacher sees verified solution), 100 steps each. 998 paired GSM8K prompts: clean, correct, wrong and authority-escalated hints, distractor, biased few-shot; plus a sycophancy test.
**Findings** OPSD has the best clean accuracy (92%), but wrong-hint accuracy drops to 46% vs 70-73%. Hint-following at 'MIT professor' authority 90% vs 66-70%. Composite score 80.2% vs 89.8% for SFT. All three models emit self-check tokens; OPSD more often sides with the hint. Unverbalized-hint error rate is lower for OPSD (37% vs 44-47%).
**Limits** One 1.7B model, GSM8K only, 100 steps, no variance reported. Headline metrics mostly measure hint susceptibility. Conflict detection is keyword-based. Composite's early-answering and counterfactual terms undefined; training data described inconsistently. Mechanism untested. No code mentioned.

**Relations**
- builds-on [[turpin2023language]]: takes its Unfaithful CoT Rate; hint and biased few-shot cues follow its biasing features

**New tags**
- (none)
