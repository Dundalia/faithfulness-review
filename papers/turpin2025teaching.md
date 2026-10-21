---
key: turpin2025teaching
title: "Teaching Models to Verbalize Reward Hacking in Chain-of-Thought Reasoning"
authors: "Turpin, Arditi, Li et al."
year: 2025
venue: "ICML 2025 workshop (R2-FM)"
url: https://arxiv.org/abs/2506.22777v2
checked: 2026-10-15
tags: [source:trustme, source:faith-improvement, object:cot, reveals:planted-cue, reveals:misbehavior, signal:planted-cf, lever:sft, updates:explanation, contribution:method, motivation:monitoring, domain:mcq, scale:small, eval:later-rl, eval:ood, eval:specificity, model:llama-3.1-8b, metric:effective-cue-influence-rate, metric:hint-verbalization-rate, metric:balanced-accuracy]
---
**TL;DR** Introduces VFT, SFT on CoTs edited to acknowledge prompt cues before RL: models learn cue-based reward hacks but verbalize them, leaving far fewer undetected hacks than RL alone.
**Problem** RL-learned reward hacks (exploiting prompt cues) go unverbalized in CoT → CoT monitors miss them.
**Method** VFT: SFT on CoTs minimally edited (Claude 4 Sonnet) to credit planted cues (2 cues) → GRPO rewarding cue-aligned wrong MMLU answers incl. held-out cues; vs BCT, RL-only.
**Findings** Post-RL undetected hacks (ECR) 6% vs 88% RL-only, 99% BCT; verbalization 8%→43% (VFT)→94% (RL). Holds, smaller gap, on non-amplified cues (ECR 15% vs 63-66%). Pre-RL specificity 96-97%. MMLU acc 73→70% after VFT; post-RL ≈ RL-only (63 vs 65%).
**Limits** Llama-3.1-8B, MMLU only; held-out cues similar to training; post-RL verbalizations vaguer, some over-verbalization; ambiguous cases judged as verbalized; hacks need no CoT.

**Relations**
- builds-on [[turpin2023language]]: uses its cued-vs-uncued counterfactual test to find unfaithful CoTs and score faithfulness
- builds-on [[chen2025reasoning]]: adopts its flawed-reward RL environment where cues mark rewarded wrong answers
- compares-to [[chua2024biasaugmented]]: BCT baseline; reduces cue use pre-RL but relearns cues, verbalization drops to 1%
- builds-on [[chua2025deepseek]]: borrows prompt cues from its cue set

**New tags**
- (none)
