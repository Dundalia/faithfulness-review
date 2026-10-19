---
key: anon2026grace
title: "GRACE: Measuring Chain-of-Thought Faithfulness from Attribution Graphs"
authors: "Anonymous"
year: 2026
venue: "ARR May 2026 submission"
url: https://openreview.net/forum?id=b8pliYFlF3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, reveals:planted-cue, signal:cot-intervention, signal:interp-tool, signal:planted-cf, contribution:metric, contribution:meta-evaluation, motivation:monitoring, motivation:explainability, domain:mcq, scale:small, eval:confound-control, eval:measure-validation, model:gemma-2-2b, model:qwen3-4b, metric:grace-divergence, metric:early-answering-aoc, metric:adding-mistakes-aoc]
---
**Problem** Behavioural CoT perturbation tests cannot tell an answer that is robust to the edit from one produced by a different mechanism than the CoT claims. No mechanism-level faithfulness metric exists.
**Method** GRACE: 1 minus the influence-weighted Jaccard of the top-64 position-pooled transcoder concepts in circuit-tracer attribution graphs, clean vs. perturbed run (CoT paraphrase, truncation, mistake injection; prompt hint). Tested on Gemma-2-2B and Qwen3-4B with BBH and MMLU.
**Findings** Correlates with Lanham AOC (rho +0.44 and +0.41). Partial rho is +0.34 and +0.27 after controlling for edit distance, length and graph size. Tracks truncation but not mistake injection. Does not predict hint flips (Gemma AUROC 0.47).
**Limits** Two small models, each needing a matched transcoder. MCQ only, since circuit-tracer attributes a single answer token. Correlational only: no causal tests on the flagged concepts. The Qwen sample was enriched for AOC-active items, and its mistake dissociation is underpowered (n=42). Under review at ARR.

**Relations**
- builds-on [[lanham2023measuring]]: Validates against its AOC; splits it into truncation (necessity) and mistake-injection (error tolerance) axes
- builds-on [[turpin2023language]]: Regime C uses its biasing-hint injection protocol as a scope check

**New tags**
- (none)
