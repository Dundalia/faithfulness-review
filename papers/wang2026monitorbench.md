---
key: wang2026monitorbench
title: "MonitorBench: A Comprehensive Benchmark for Chain-of-Thought Monitorability in Large Language Models"
authors: "Wang, Sun, Ko et al."
year: 2026
venue: "COLM 2026"
url: https://arxiv.org/abs/2603.28590v4
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:decision-factors, reveals:planted-cue, reveals:misbehavior, reveals:internal-strategy, signal:planted-cf, signal:by-construction, signal:env-label, contribution:benchmark, contribution:analysis, motivation:monitoring, domain:mcq, domain:open-qa, domain:math, domain:logic, domain:code, domain:agentic, domain:synthetic, scale:mid, scale:large, scale:closed, eval:adversarial, eval:monitor-scope, model:qwen3-14b, model:qwen3-235b-a22b, model:gpt-oss-120b, model:gpt-5, model:gemini-3-flash, model:claude-sonnet-4.5, metric:monitorability-score]
---
**Problem** No comprehensive, fully open benchmark of when CoT reveals decision-critical factors; prior evals small, fragmented, partly closed.
**Method** 1,514 instances / 19 tasks: cue & goal injection, dual objectives, impossible tasks, necessary steps. Qwen3-32B monitor, 3 scopes (CoT/action/all). Monitorability = flag rate, TE-normalized for injections. 8 LLMs. 2 prompt stress tests (direct concealment, monitor-aware evasion).
**Findings** High when factor shapes reasoning, low when it only sets the answer (Cue-Answer, deception). More capable → less monitorable (r −0.87 to −0.39). CoT-only beats action-only by ~24%. Stress tests cut Cue-Answer ~27%, via omission not obfuscation. Code released.
**Limits** Objective tasks only; black-box. Closed models expose only summarized CoT. Single LLM monitor, weak human agreement on agent traces. Prompt-only stress tests; 5 instances per agent task.

**Relations**
- extends [[guan2025monitoring]]: scales its intervention/process/outcome monitorability framework to 19 open tasks plus stress tests

**New tags**
- (none)
