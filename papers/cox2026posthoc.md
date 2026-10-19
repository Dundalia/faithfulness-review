---
key: cox2026posthoc
title: "Post-Hoc Reasoning in Chain of Thought: Decoding and Steering Pre-Committed Answers"
authors: "Cox, Kianersi & Garriga-Alonso"
year: 2026
venue: "ICML 2026 workshop (Mech Interp)"
url: https://arxiv.org/abs/2603.01437v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:interp-tool, signal:cot-intervention, contribution:analysis, motivation:explainability, motivation:monitoring, domain:classification, domain:logic, scale:small, scale:mid, model:gemma-2-2b, model:gemma-2-9b, model:qwen2.5-1.5b, model:qwen2.5-3b, model:qwen2.5-7b, model:gpt-oss-20b, metric:pre-cot-probe-auc, metric:steering-flip-rate, metric:cot-intervention-flip-rate, metric:confabulation-rate]
---
**Problem** Instruct LLMs may fix the answer before CoT → CoT is post-hoc rationalization, undermining CoT for interpretability/monitoring.
**Method** Diff-of-means probes on last pre-CoT token; steering along probe vs norm-matched orthogonal direction; CoT removal/incorrect-CoT swaps; GPT-5-mini judge labels flipped CoTs. Gemma-2/Qwen-2.5 1.5–9B; 4 binary tasks (3 BBH + Social Chemistry).
**Findings** CoT removal flips ≤20% in 18/20 pairs. Probe AUC >0.9 on most tasks, low on Logical Deduction (where CoT helps most). Steering beats orthogonal baseline everywhere, most at 7–9B; flipped CoTs confabulate or are non-entailed, hallucination grows with strength. GPT-OSS-20B: weaker probes, steering ineffective.
**Limits** Small instruct models, binary tasks only; steering also acts on answer tokens; judge self-consistency 81.5%; no mitigation tested; no code release mentioned.

**Relations**
- builds-on [[lanham2023measuring]]: adapts its CoT removal and mistake-insertion interventions to test pre-CoT commitment

**New tags**
- (none)
