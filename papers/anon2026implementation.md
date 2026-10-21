---
key: anon2026implementation
title: "Implementation Matters in Monitorability Evaluations"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=4Zs7PbGzTJ
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:misbehavior, signal:env-label, signal:judge, contribution:meta-evaluation, contribution:analysis, motivation:monitoring, domain:code, domain:agentic, domain:math, domain:mcq, scale:small, scale:mid, scale:large, scale:closed, eval:measure-validation, eval:confound-control, eval:specificity, eval:adversarial, model:claude-3.7-sonnet, model:deepseek-r1, model:gpt-oss-120b, model:qwen3-4b, model:kimi-k2-thinking, model:qwen3-8b, metric:binned-mse, metric:tpr-at-fixed-fpr, metric:ranking-swap-probability, metric:ci-distinguishability]
---
**TL;DR** Shows that implementation choices in CoT monitorability evaluations, such as proxy labels, benign sets and summary statistics, can reorder model rankings, while monitor prompt specificity barely matters.
**Problem** Monitorability evals differ in implementation details (proxy label, benign set, summary statistic, monitor prompt); unclear whether actor rankings are comparable or trustworthy.
**Method** Formal eval definition; APPS-backdoor, bio-math, ImpossibleBench; 6 actors (2 on ImpossibleBench), 3 monitors, ~250 samples per triple; vary false-false-positive (FFP) correction, benign set, 13 summary statistics, monitor-prompt specificity, paired design; bootstrap CIs.
**Findings** FFPs (monitor-caught attempts the proxy misses) up to ~70% (lower bound) on APPS-backdoor; LLM-judge correction reorders actors. Unelicited-benign statistics disagree with others (p_swap 0.27), separate actors better (0.80 vs 0.42). Prompt specificity, paired design barely change rankings. A few hundred samples may not separate actors.
**Limits** Small (3 tasks, 6 actors, 3 monitors); prompt-elicited misbehavior only; FFP judge may share monitor failure modes; probes, confessions untested; code promised on publication; under review.

**Relations**
- builds-on [[guan2025monitoring]]: tests its G-mean² statistic and no-benign-supplement design among alternative implementations

**New tags**
- (none)
