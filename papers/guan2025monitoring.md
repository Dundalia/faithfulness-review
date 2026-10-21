---
key: guan2025monitoring
title: "Monitoring Monitorability"
authors: "Guan, Wang, Carroll et al."
year: 2025
venue: "ICML 2026"
url: https://arxiv.org/abs/2512.18311v1
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:planted-cue, reveals:decision-factors, reveals:misbehavior, reveals:internal-strategy, signal:planted-cf, signal:generic-cf, signal:env-label, signal:by-construction, signal:judge, signal:implanted-behavior, lever:inference-time, updates:explanation, contribution:metric, contribution:benchmark, contribution:analysis, contribution:method, motivation:monitoring, motivation:scalable-oversight, domain:mcq, domain:math, domain:code, domain:agentic, domain:open-qa, domain:chat, domain:social-bias, scale:closed, eval:optimization-pressure, eval:adversarial, eval:later-rl, eval:specificity, eval:monitor-scope, eval:scaling, model:gpt-5, model:o3, model:o4-mini, model:o3-mini, model:claude-3.7-sonnet, model:openai-internal, metric:g-mean-squared, metric:minimal-criterion-tpr]
---
**TL;DR** Introduces a monitorability evaluation suite and class-balanced metric: frontier models are fairly but not perfectly monitorable, CoT access far beats actions alone, and RL barely erodes monitorability.
**Problem** CoT monitorability may erode with training, RL or scale; F1/accuracy confound class imbalance → no broad, comparable measure.
**Method** g-mean² (TPR×TNR; min-criterion TPR for stochastic intervention arms); suite of intervention/process/outcome-property evals; GPT-5 monitor, CoT vs action scopes; obfuscation-RL organisms; RL, pretraining, monitor scaling; follow-up questions.
**Findings** Frontier models fairly, not perfectly monitorable; longer CoT ↑; CoT-only ≫ action-only. Suite catches obfuscation organisms. Frontier RL no material drop. Smaller model at higher effort → higher monitorability, small capability tax, more compute. Stronger/higher-effort monitors ↑, steeper with CoT access. Follow-ups help.
**Limits** OpenAI-only monitors; two RL runs, single pretraining seed; process evals lack negatives; small-effect interventions noisy; suite only partially open-sourced (planned).

**Relations**
- extends [[chen2025reasoning]]: generalizes single toy hint eval to stochastic agents, many realistic environments
- builds-on [[emmons2025chain]]: reuses encoded-hint GPQA variant; CoT-necessity framing
- builds-on [[turpin2023language]]: Scruples user-opinion interventions modeled on its sycophancy cues
- builds-on [[baker2025monitoring]]: adopts monitorability framing; similar CoT-obfuscation reward-pressure RL methodology
- extends [[chua2025deepseek]]: generalizes its deterministic hint evals and TPR-like metric to stochastic agents
- builds-on [[joglekar2025training]]: one Coding-impossible-tasks subset taken from it

**New tags**
- (none)
