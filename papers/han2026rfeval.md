---
key: han2026rfeval
title: "RFEval: Benchmarking Reasoning Faithfulness under Counterfactual Reasoning Intervention in Large Reasoning Models"
authors: "Han, Lee & Do"
year: 2026
venue: "ICLR 2026"
url: https://arxiv.org/abs/2602.17053v3
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, contribution:benchmark, contribution:metric, contribution:analysis, motivation:explainability, domain:code, domain:math, domain:logic, domain:mcq, domain:classification, scale:small, scale:mid, scale:large, scale:closed, model:qwen3-8b, model:qwen3-32b, model:deepseek-r1-distill-qwen-32b, model:gpt-oss-120b, model:mimo-7b, model:olmo-3-7b, metric:contrast-conditional-rf, metric:stance-consistency, metric:causal-influence]
---
**TL;DR** Introduces RFEval, which inserts flawed reasoning into reasoning models' thinking: unfaithfulness is common, mostly stance inconsistency after the intervention, and worse after RLVR and on math and code.
**Problem** LRM rationales sound plausible but may not drive the answer; existing tests are input-level (hints) or accuracy-focused.
**Method** RF = stance consistency + causal influence. o3-written flawed counterfactual reasoning prefilled into <think> (7,186 items, 7 tasks). o3 judge extracts stances (human-validated). 12 open LRMs; MiMo/Olmo-3 post-training ablations.
**Findings** 49.7% unfaithful, mostly post-intervention stance inconsistency (e.g., silent corrections). Worst on code/math. SFT+RLVR lowers RF vs SFT; scale not predictive. Accuracy-RF link insignificant once model/task are controlled. Code+data released.
**Limits** LLM-judge stances; behavioral only. Coarse (r,e,a) granularity, though a per-step pilot keeps the trends. Closed models need a multi-turn protocol (appendix only). Contrast filter changes subsets per model.

**Relations**
- contradicts [[chua2025deepseek]]: RL-trained reasoning more faithful there; here adding RLVR to SFT lowers faithfulness
- contradicts [[xiong2026monitorability]]: RLVR can raise monitorability there; here RLVR on SFT consistently lowers RF

**New tags**
- (none)
