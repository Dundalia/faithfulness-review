---
key: macdermott2025reasoning
title: "Reasoning Under Pressure: How do Training Incentives Influence Chain-of-Thought Monitorability?"
authors: "MacDermott, Wei, Djoneva & Ward"
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2512.00218v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:decision-factors, reveals:latent-belief, signal:env-label, lever:rl-reward, lever:rl-mechanics, updates:explanation, contribution:metric, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:code, domain:synthetic, scale:small, eval:optimization-pressure, eval:adversarial, eval:behavior-control, eval:held-out-evaluator, model:deepseek-r1-distill-qwen-1.5b, model:gpt-4o-mini, model:gpt-4o, model:claude-sonnet-4.5, metric:latent-prediction-monitor-accuracy]
---
**TL;DR** Tests how RL incentives affect CoT monitorability: penalizing monitor accuracy degrades it, rewarding monitorability barely helps, and length or KL penalties have inconsistent effects.
**Problem** Do RL training incentives (length, KL, monitor-based rewards) degrade or improve CoT monitorability of reasoning models?
**Method** LLM monitor (GPT-4o-mini/4o) predicts labelled latent (diamond present; function correct) from CoT. GRPO R1-Distill-Qwen-1.5B on observables, then +/- incentive; accuracy-matched checkpoints (max 2.1% change).
**Findings** Length/KL effects inconsistent; length penalty hacked via Chinese text. Penalising 4o-mini accuracy: -7-13pp, partly transfers to 4o, not Sonnet 4.5. Rewarding monitorability: ~3pp at best, mostly n.s. Easier to degrade than improve. Code released.
**Limits** One 1.5B reasoner, 2 datasets (Roger et al. tampering), single seed. High baseline monitorability may leave little headroom. Whitespace-based length penalty.

**Relations**
- (none)

**New tags**
- (none)
