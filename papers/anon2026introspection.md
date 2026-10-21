---
key: anon2026introspection
title: "Introspection or Post-Hoc Rationalization? A Cross-Model and Cross-Domain Study of LLM Metacognition"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=GqNWne0GxX
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-prediction, object:self-interpretation, reveals:own-uncertainty, reveals:internal-state, signal:interp-tool, signal:generic-cf, lever:sft, updates:explanation, contribution:analysis, contribution:meta-evaluation, contribution:negative-result, contribution:benchmark, motivation:explainability, domain:classification, domain:open-qa, domain:math, domain:mcq, domain:synthetic, scale:small, scale:mid, eval:privileged-access, eval:ood, eval:confound-control, eval:measure-validation, eval:scaling, model:qwen3.5-9b, model:llama-3.1-8b, model:llama-3.3-70b, model:qwen3.5-27b, model:gemma-4-31b, model:ministral-3-8b, metric:self-cross-prediction-advantage, metric:cross-task-transfer-gain, metric:static-baseline-accuracy]
---
**TL;DR** Tests whether LLM self-reports reflect introspection by training other models to predict the same labels: cross-model reporters nearly match self-reporters, and gains rarely transfer across task families.
**Problem** Introspection benchmarks score self-report accuracy, which cannot separate introspection, self-simulation and rationalization (causal bypassing).
**Method** Other LLMs (ICL/LoRA) and static-embedding classifiers predict the source's probe-derived or behaviour labels; LoRA-train on each of 16 datasets (steering awareness, self-prediction, confidence), test cross-task; 8 models, 7-70B.
**Findings** Activation labels: cross LLMs match self (commonsense 71.8 vs 71.4%), embeddings recover them from text. Behaviour labels: cross reporters recover 89% of self lift; residual +5.3 to +7.9 points only on own-generation tasks. In-task gains largely fail to transfer across families (median -0.01); not forgetting (IFEval within ~2 points).
**Limits** Cannot separate introspection from self-simulation; at most 200 eval rows per source, 3 seeds, ~8B reporters on behaviour labels; Gemma LoRA reporters collapse; open models only; under review, not peer reviewed; code in supplement.

**Relations**
- builds-on [[binder2024looking]]: reuses its self-prediction tasks and self-vs-cross reporter design; adds static baselines
- contradicts [[binder2024looking]]: self-prediction advantage mostly cross-recoverable (89% of lift); training builds task-specific, not privileged, routes

**New tags**
- reveals:internal-state: the model's current internal activation state (e.g. an injected steering concept or whether a probe direction is active), which the report should causally depend on
