---
key: occhipinti2026probing
title: "Probing and Steering Chain-of-Thought Unfaithfulness in Language Models"
authors: "Occhipinti, Abate & Schoots"
year: 2026
venue: "ICLR 2026 workshop (Re-Align)"
url: https://openreview.net/forum?id=rI25kpkOIB
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, signal:planted-cf, lever:steering, updates:explanation, contribution:method, contribution:analysis, motivation:monitoring, domain:mcq, scale:small, scale:mid, model:deepseek-r1-distill-llama-8b, model:qwen3-14b, model:qwen3-32b, metric:faithfulness-recovery-rate, metric:monitorability-recovery-rate, metric:collateral-effect-rate, metric:unfaithfulness-probe-f1]
---
**TL;DR** Shows probes on activations detect CoTs that hide hint use with high accuracy, while activation steering only partly restores faithfulness, with off-policy vectors matching on-policy ones.
**Problem** CoTs often hide hint use. Is (un)faithfulness linearly encoded, and can white-box probes and steering detect and fix it?
**Method** R1-Distill-Llama-8B, Qwen3-14B/32B; MMLU, 3 Chen hints; Gemini judge labels hint-adopting CoTs. LogReg/MLP probes; CAA steering (on-policy or synthetic off-policy) vs MLP-guided, random.
**Findings** Peak probe F1 90-100% (middle-to-late layers); steering weaker. Faithfulness recovery 7.6-42%; linear ≤46% monitorability recovery, <5% collateral. Off-policy ≈ on-policy; MLP no clear gain; random < half. Both directions raise correctness (noise).
**Limits** Workshop paper. In-distribution MMLU only; possible probe confounders; small sweep, one injection strategy. No capability-cost eval or code.

**Relations**
- builds-on [[chen2025reasoning]]: reuses its professor/metadata/grader-hacking hints and its faithfulness (verbalization) definition
- builds-on [[turpin2023language]]: faithfulness operationalized as biased-hint counterfactual simulatability, following Turpin

**New tags**
- (none)
