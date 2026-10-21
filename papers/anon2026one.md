---
key: anon2026one
title: "One Draw Is Not Enough: Resampling-Based Labels for Chain-of-Thought Unfaithfulness"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=ELLXjIQ7Im
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, signal:planted-cf, contribution:metric, contribution:benchmark, contribution:meta-evaluation, motivation:monitoring, domain:mcq, domain:professional, scale:small, scale:mid, eval:measure-validation, eval:confound-control, model:nemotron-nano-9b-v2, model:qwen3-8b, model:qwen3.5-9b, model:olmo-3-7b, model:gemma-4-12b, metric:hint-verbalization-rate, metric:label-survival-rate]
---
**TL;DR** Introduces CueBall, which resamples runs before labeling cue-driven CoT unfaithfulness, finding many single-sample unfaithful labels do not persist on resampling, though aggregate rates and model rankings change little.
**Problem** Cue-based unfaithfulness labels rest on one uncued and one cued draw, so a switch may be sampling noise. The alpha correction only fixes aggregate rates.
**Method** CueBall: 8 baseline samples, 4 re-rolls per switch; pair persistent if at least 3/4 hit the cue target. 5 open reasoning models, 4 MCQ sets (incl. MedQA), 8 cues, T=0.7. LLM role judge, audited by a second LLM plus human review.
**Findings** About 40% of positive-case single-sample unfaithful labels fail persistence (survival 59.7%). 1-alpha (median 0.4%) is closer to non-recurrence than to non-persistence (median 21%). Incoherent traces persist less (39.4% vs 81.0%). Aggregate rates and model rankings mostly similar. Costs 3.8-5.7x the tokens. Releases 20,000 traces and code.
**Limits** T=0.7 only, no greedy decoding; open models of 12B or less; 4 re-rolls give a coarse estimate; uncued and cued decoding unmatched; judge audit covers one model and dataset, incoherence label unvalidated; post_hoc cue is 45% of the release; persistence does not prove cue causation; not yet peer reviewed.

**Relations**
- compares-to [[chen2025reasoning]]: Its single-sample labels and alpha normalization are baselines; 1-alpha sits closer to non-recurrence
- builds-on [[turpin2023language]]: Uses its cued-vs-uncued answer-switch test, which underlies both labeling protocols
- builds-on [[walden2026reasoning]]: Maps its role labels onto that paper's hint-use scheme, applied under default prompting
- extends [[angdembay2026two]]: Scales resampling checks of flip labels to five models, four datasets, eight cues

**New tags**
- (none)
