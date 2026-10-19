---
key: shiromani2026necessary
title: "Necessary but Not Sufficient: Auditing Same-Answer Counterfactuals for Chain-of-Thought Faithfulness"
authors: "Shiromani, Richter & Siegel"
year: 2026
venue: "NeurIPS 2026 workshop (Trustworthy AI for Good)"
url: https://openreview.net/forum?id=uDWgVybo11
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:self-prediction, reveals:planted-cue, signal:planted-cf, contribution:metric, contribution:meta-evaluation, contribution:analysis, motivation:monitoring, domain:open-qa, domain:mcq, domain:synthetic, scale:small, scale:mid, eval:ood, eval:behavior-control, eval:confound-control, eval:measure-validation, eval:monitor-scope, eval:scaling, factor:cue-design, model:mistral-7b, model:gemma-2-9b, model:llama-3.1-8b, model:qwen3-14b, model:qwen3-32b, model:qwq-32b, metric:probe-auc, metric:monitor-auc]
---
**Problem** Results where probes beat CoT monitors may track answer identity or candidate priors, not hidden hint provenance.
**Method** Same-answer label: keep traces giving the hinted wrong answer; dependent if a matched-control hint changes it. Prompt-end probes vs Sonnet-4 judges (incl. CoT+self-report); prior/text baselines, control-state probes, patching. 3 models (7-9B), 4 QA sets.
**Findings** Probes AUROC 0.61-0.65 vs judges 0.51-0.62 (Llama tie); no-hidden-state baseline 0.76-0.84, adding states gives no lift. Control-state probes match; W−G probes and patching null; prior-matched candidates drop probes to chance. Under prompt injection (N=45-78), judges win. On a synthetic role-swap, state differences win.
**Limits** Artificial soft hint. Larger-model slices only 35-54 rows. Independent class scarce. Positive result synthetic only. Code not released.

**Relations**
- builds-on [[boppana2026reasoning]]: Adopts its probe-vs-CoT-monitor comparison; reads its early answer decoding as non-provenance signal

**New tags**
- (none)
