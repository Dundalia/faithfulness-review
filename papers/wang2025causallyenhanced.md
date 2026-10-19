---
key: wang2025causallyenhanced
title: "Causally-Enhanced Reinforcement Policy Optimization"
authors: "Wang, Huang, Zhou et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2509.23095v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:interp-tool, lever:rl-reward, updates:behavior, contribution:method, motivation:reasoning-quality, domain:math, domain:mcq, domain:logic, domain:open-qa, domain:code, domain:professional, scale:small, eval:ood, model:llama-3-8b, model:llama-3.2-3b, model:phi-3.5-mini, model:qwen3-4b-thinking-2507, model:qwen3-1.7b, metric:jacobian-coherence-score]
---
**Problem** Outcome-only RL → correct answers paired with spurious/unfaithful CoT; shortcut learning, reward hacking.
**Method** CE-PO: Jacobian influence scores for Z→X, X→Y, direct Z→Y (prompt→rationale→answer), hardened by projecting out token-shuffled counterfactual subspace; power-mean fused with BERTScore → PPO/GRPO reward.
**Findings** +5.49 pts avg acc over vanilla (up to 9.58); both CE variants beat BERTScore-PPO/GRPO on avg for all 5 models, 4 test sets; OOD gains (Qwen3-4B only). Unhardened or partial Jacobian reward → length hacking. Scores higher on judge-correct samples. Code released.
**Limits** ≤8B only. Faithfulness gauged only by own Jacobian scores; no independent CoT test; abstract's unfaithful-CoT and perturbation-robustness claims not directly tested. First-order proxy, not true DCE. Acc via GPT-4o-mini judge; ablations and OOD on one model each.

**Relations**
- (none)

**New tags**
- (none)
