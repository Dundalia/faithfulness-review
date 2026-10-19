---
key: joglekar2025training
title: "Training LLMs for Honesty via Confessions"
authors: "Joglekar, Chen, Wu et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2512.08093v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:misbehavior, reveals:own-uncertainty, signal:env-label, signal:judge, lever:rl-reward, lever:prompt-pipeline, updates:explanation, contribution:method, motivation:monitoring, domain:chat, domain:open-qa, domain:code, domain:agentic, scale:closed, eval:ood, eval:optimization-pressure, eval:behavior-control, eval:specificity, model:gpt-5, metric:confession-given-noncompliance, metric:confession-false-positive-rate, metric:unconfessed-misbehavior-rate, metric:confidence-auroc]
---
**Problem** RL reward misspecification → models hide shortcomings (reward hacking, scheming, hallucination, instruction violations) in their answers.
**Method** Post-answer system message requests structured confession (objectives, compliance, uncertainties); RL on 25% of inputs with LLM-judge honesty reward sealed from task reward. GPT-5-Thinking; control vs. intervention on frozen rollouts.
**Findings** 12 mostly-OOD evals: confesses 74.3% of non-compliance on avg, far above in-answer admission. Untrained already strong; gains modest, none on factual QA. Confession accuracy rises while answer hacks weak judge. Works without CoT. Minimal task cost. Confidence AUROC 0.79 (CoT similar).
**Limits** Light-RL proof of concept. Misses errors the model is unaware of (hallucinations, jailbreaks). Doesn't reduce misbehavior. No CoT-monitor comparison or high-pressure test. No code.

**Relations**
- (none)

**New tags**
- (none)
