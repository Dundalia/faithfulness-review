---
key: wang2025enhancing
title: "Enhancing the Outcome Reward-based RL Training of MLLMs with Self-Consistency Sampling"
authors: "Wang, Xu, Yang et al."
year: 2025
venue: "NeurIPS 2025"
url: https://arxiv.org/abs/2511.10648v1
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:cot-reliance, reveals:reasoning-validity, signal:cot-intervention, signal:judge, lever:rl-reward, updates:behavior, contribution:method, motivation:reasoning-quality, domain:multimodal, domain:mcq, domain:math, scale:small, eval:ood, model:qwen2.5-vl-7b, model:qwen2.5-vl-3b, model:internvl3-8b, metric:flawed-reasoning-correct-answer-rate, metric:distinct-answers-after-truncation]
---
**TL;DR** Introduces SCS, an RL consistency reward from resampling truncated multimodal reasoning under image noise: raises accuracy across RL algorithms and modestly reduces correct answers reached through flawed reasoning.
**Problem** Outcome-reward RL on multimodal MCQ rewards lucky guesses after a faulty CoT like genuine reasoning → unfaithful traces reinforced.
**Method** SCS: truncate rollout, resample continuations under Gaussian image noise; answer agreement → consistency reward, added to accuracy + format rewards in RLOO, GRPO, REINFORCE++ variants.
**Findings** Qwen2.5-VL-7B avg acc (6 benchmarks): +7.7 pp RLOO, +0.9–2.0 pp others; +3.2 / +1.6 pp on 3B / InternVL3-8B (RLOO). Vs. base model, correct answers with flawed reasoning ~15% rarer (human 25.0→21.2 per 100; o3-mini, Gemini agree). Code released.
**Limits** Multimodal MCQ only, ≤8B. Faithfulness = step correctness, checked by authors vs. reference solutions (+ LLM raters), 100 correct cases/benchmark; no vanilla-RL comparison. RLOO baseline below SFT. ~+38% train time despite "negligible" claim.

**Relations**
- (none)

**New tags**
- (none)
