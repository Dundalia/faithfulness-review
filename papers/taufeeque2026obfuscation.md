---
key: taufeeque2026obfuscation
title: "The Obfuscation Atlas: Mapping Where Honesty Emerges in RLVR with Deception Probes"
authors: "Taufeeque, Heimersheim, Gleave & Cundy"
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2602.15515v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:output, reveals:misbehavior, signal:env-label, signal:interp-tool, lever:rl-reward, lever:rl-mechanics, updates:behavior, contribution:analysis, contribution:theory, contribution:benchmark, contribution:negative-result, motivation:monitoring, motivation:scalable-oversight, domain:code, scale:small, scale:mid, eval:optimization-pressure, eval:ood, model:llama-3-8b, model:gemma-3-12b, model:gemma-3-27b, model:llama-3-70b, metric:honest-policy-rate, metric:original-model-probe-score, metric:representation-change, metric:probe-auc]
---
**Problem** Training against white-box deception probes may teach evasion, not honesty; prior obfuscation evidence only from artificial harmful-output setups.
**Method** MBPP-Honeypot RLVR (1 visible test + length penalty → hardcoding); GRPO + off-domain deception-probe penalty; KL × penalty sweep; probe score split: original-model vs representation change.
**Findings** Outcomes: honest, blatant, obfuscated policy (evasive text, e.g. justifications; low KL + weak penalty), obfuscated activations (RL drift, even w/o probe; PG adds no activation pressure, probe gradients do). High KL + high penalty → honest, no capability cost. Code/models released.
**Limits** High KL often impractical at scale; obfuscated policies hard to detect; single-turn MBPP, ≤70B; richer hacks (test tampering) untested.

**Relations**
- (none)

**New tags**
- (none)
