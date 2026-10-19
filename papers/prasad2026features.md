---
key: prasad2026features
title: "Features as Rewards: Scalable Supervision for Open-Ended Tasks via Interpretability"
authors: "Prasad, Watts, Merullo et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2602.10067v3
checked: 2026-10-15
tags: [source:trustme, object:output, reveals:own-uncertainty, signal:judge, lever:rl-reward, lever:inference-time, updates:explanation, contribution:method, motivation:reliability, motivation:scalable-oversight, domain:open-qa, scale:mid, model:gemma-3-12b, eval:optimization-pressure, eval:specificity, metric:hallucination-reduction-rate, metric:fixed-rate, metric:correct-retract-rate, metric:detection-precision-recall]
---
**Problem** Open-ended behaviors such as hallucination have no cheap verifiers, and LLM-judge + web-search rewards cost too much for RL.
**Method** RLFR: attention probes on frozen Gemma-3-12B flag hallucinated entities → policy chooses maintain/retract/correct → retraction/correction probes (trained on Gemini 2.5 Pro labels) supply the RL reward (CISPO); probe-scored BoN at test time.
**Findings** 58% fewer hallucinations (BoN-32, inline) vs base, 10% from the policy alone; at n=256 probe BoN beats Gemma self-judge by ~15pp; ~90× cheaper than judge; beats SFT; benchmarks roughly preserved; no probe evasion observed.
**Limits** One model, one task; monitor recall only .56; Gemini is the sole ground truth; RL policy almost never maintains falsely flagged true claims (Stable ≈0); evasion under more optimization untested; ~3% degenerate inline completions; no code, only a completions viewer.

**Relations**
- (none)

**New tags**
- (none)
