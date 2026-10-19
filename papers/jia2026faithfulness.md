---
key: jia2026faithfulness
title: "Faithfulness as Information Flow: Evaluating and Training Faithful Chain-of-Thought Reasoning"
authors: "Jia, Benton & Easley"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2605.24286v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, reveals:cot-reliance, reveals:misbehavior, reveals:decision-factors, signal:planted-cf, signal:cot-intervention, signal:interp-tool, signal:env-label, lever:rl-mechanics, updates:explanation, updates:behavior, contribution:method, contribution:metric, motivation:monitoring, domain:math, domain:code, domain:mcq, scale:small, scale:mid, eval:ood, model:gemma-3-1b, model:gemma-3-4b, model:gemma-3-12b, model:qwen2.5-7b, model:qwen3-8b, model:deepseek-r1-distill-qwen-14b, metric:grad-de, metric:grad-nec, metric:cot-answer-entropy, metric:hint-verbalization-rate]
---
**Problem** RL-learned P→A shortcuts (hints, reward hacks) bypass the CoT → plausible but unmonitorable traces; existing probes are task-specific.
**Method** Faithfulness as info flow P→C→A: sufficiency/completeness/necessity via H_q(A|C), masked-KL, Grad-DE/Grad-Nec. GRPO update-time interventions (update mask, gradient mask, CoT-only gradient, FACT); rollouts and rewards unchanged.
**Findings** Entropy and grad metrics recover the LLM-judged ordering (Qwen3-8B 89.4% vs R1-Distill-14B 54.3%); KL-Nec inverted. Interventions (bar Gradient Mask on code) raise hint/hack verbalization and grad metrics. CoT Gradient most stable, highest wrong-hint acc (arithmetic); on DAPO keeps unseen-hint following verbalized; no no-hint acc cost.
**Limits** Hacks and DAPO hint-following not removed; masks cost O(s²), infeasible at 7B; ≤12B; metrics only diagnostic. Code released.

**Relations**
- builds-on [[turpin2023language]]: hinted-arithmetic setup uses Turpin-style 'Stanford professor' hint, correct 75% of the time

**New tags**
- (none)
