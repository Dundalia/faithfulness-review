---
key: roytburg2026measuring
title: "Measuring Weak-to-Strong Legibility of Reasoning Models"
authors: "Roytburg, Sridhar & Ippolito"
year: 2026
venue: "ICML 2026 workshop (Trustworthy AI for Good)"
url: https://arxiv.org/abs/2603.20508v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:correctness, signal:env-label, signal:cot-intervention, contribution:metric, contribution:analysis, motivation:scalable-oversight, domain:math, domain:mcq, domain:logic, scale:small, scale:mid, scale:large, eval:confound-control, eval:measure-validation, eval:adversarial, model:gpt-oss-120b, model:deepseek-r1, model:kimi-k2-thinking, model:gemma-3-12b, model:phi-3-mini, model:llama-3.2-1b, metric:first-order-transfer-utility, metric:second-order-transfer-utility, metric:monitor-precision, metric:monitor-f1]
---
**TL;DR** Introduces FOTU, measuring how well weak models finish tasks from strong models' partial CoTs: model accuracy weakly anti-correlates with it, and it partly predicts weak-monitor precision.
**Problem** Weak monitors and students need usable strong-model CoTs; existing legibility metrics reward conciseness or need strong judges.
**Method** Transfer utility: weak models (Phi-3-Mini, Llama-3.2-1B) finish tasks from growing prefixes of correct traces; ~85k traces, 12 open RLMs, MATH/GPQA/LSAT.
**Findings** Accuracy weakly anti-correlates with FOTU (rho=-0.35); GPT-OSS-120B near last; rankings stable across students and tasks. FOTU predicts weak-monitor precision on MATH (rho=+0.90) and LSAT; GPQA null after length control. Reward models ignore it beyond correctness.
**Limits** Correlational, 12 teachers; open models only, single-turn; no human legibility study; Gemini-injected errors; code released.

**Relations**
- builds-on [[kirchner2024proververifier]]: adopts weak-verifier legibility framing, non-adversarial, for reasoning-trace prefixes

**New tags**
- (none)
