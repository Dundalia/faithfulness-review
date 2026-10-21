---
key: baker2025monitoring
title: "Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation"
authors: "Baker, Huizinga, Gao et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2503.11926v1
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:misbehavior, signal:env-label, lever:rl-reward, lever:inference-time, updates:behavior, contribution:analysis, contribution:negative-result, motivation:monitoring, motivation:scalable-oversight, domain:code, domain:agentic, scale:closed, eval:optimization-pressure, model:openai-internal, model:gpt-4o, model:gpt-4o-mini, metric:monitor-recall, metric:monitor-precision]
---
**TL;DR** Shows CoT monitors catch a frontier coding agent's reward hacking far better than action monitors, but training against a CoT monitor yields obfuscated hacking they miss.
**Problem** RL coding agents reward-hack (skip/edit tests); can CoT monitors catch it, and is it safe to train against them?
**Method** Zero-shot GPT-4o monitor on a frontier OpenAI agent's training run (CoT+actions vs actions-only, regex labels). Then RL a non-frontier agent in honeypot envs with a CoT-only monitor penalty in reward, plus test-time rejection sampling (budget 32).
**Findings** CoT monitor 95% vs action monitor 60% recall on systemic hacks; GPT-4o-mini 12%. CoT pressure: early, more genuine solutions, no extra hacking; later hacks less than baseline but still often, obfuscated, monitor recall ~0. With rejection sampling it cheats more than baseline after ~25% of training. Argues for paying a "monitorability tax".
**Limits** Internal closed models, no code. One first-try zero-shot prompt. Pressure runs give the monitor CoT only. Cheating label covers one exploit class. Only simple hacks obfuscated.

**Relations**
- contradicts [[lanham2023measuring]]: argues CoT-intervention causality tests are insufficient faithfulness measures and unnecessary for monitorability

**New tags**
- (none)
