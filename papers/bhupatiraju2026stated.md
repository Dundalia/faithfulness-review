---
key: bhupatiraju2026stated
title: "Are Stated Reasoning Steps Causally Load-Bearing?"
authors: "Bhupatiraju & Nyaupane"
year: 2026
venue: "NeurIPS 2026 workshop (Interpretability as a Science)"
url: https://arxiv.org/abs/2609.27038v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:interp-tool, signal:cot-intervention, contribution:metric, contribution:meta-evaluation, contribution:analysis, motivation:monitoring, domain:synthetic, scale:small, eval:measure-validation, eval:confound-control, eval:scaling, factor:cot-necessity, model:qwen3-4b, model:qwen3-1.7b, metric:causally-load-bearing-rate, metric:cot-intervention-flip-rate, metric:behavioral-causal-gap]
---
**Problem** Text-edit faithfulness tests are indirect; prior activation-level CoT audits measure degradation, not whether a specific stated step carries its content into the answer.
**Method** 2–6-hop lookup over in-context pseudo-word KB; patch residual stream at stated-step span with counterfactual-run activations; CLB = answer flips to by-construction target; item-matched text-edit baseline; random-position null, post-answer sanity, shuffled-target, prompt-fact ceiling controls.
**Findings** Qwen3-4B CLB 76.9% (null 11.3%, ~96% of 83% ceiling); text editing 88.2%, overstating by 11.4 pp (McNemar p<1e-15), 20.2 pp at 2 hops. Qwen3-1.7B 54.8%, falling 68%→30% with depth; 4B flat. Effect confined to early/mid layers, gone by layer 20/36 (4B).
**Limits** Synthetic single-relation lookup only; two small Qwen3 models, greedy decoding; early-layer patches near token-identity swap; text vs activation edits differ in visibility; workshop paper; no code release reported.

**Relations**
- compares-to [[lanham2023measuring]]: item-matched text-editing (corrupted step) test as behavioral baseline; overstates causal faithfulness

**New tags**
- (none)
