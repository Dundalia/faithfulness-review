---
key: burger2026chain
title: "Chain of Thought Monitoring Can Fail Even When CoT Is Necessary"
authors: "Bürger, Komorowski, Weckbecker et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2610.18105v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:decision-factors, reveals:planted-cue, signal:generic-cf, signal:planted-cf, signal:cot-intervention, signal:interp-tool, contribution:metric, contribution:analysis, motivation:monitoring, domain:classification, domain:professional, domain:mcq, scale:small, scale:mid, eval:measure-validation, factor:cot-necessity, model:qwen3-8b, model:qwen3-4b, model:gemma-4-31b, model:gemma-4-e4b, metric:minimal-criterion-tpr, metric:necessary-cot-monitorability, metric:direct-effect]
---
**Problem** Emmons et al.: monitoring failures come from unnecessary (post-hoc) CoT, so necessary CoT should be monitorable. Authors: this binary view is too coarse.
**Method** Four CoT-necessity levels. M1: Guan's minimal-criterion score on answers with no-CoT probability <0.01; attribute-sentence removal, 2×1000 split CoTs, DeepSeek-V4 judge. Level 2: early-answer direct effect, frozen KV cache. Thyroid, DDXPlus, Olympic Athletes, Hinted MCQA; four Qwen3/Gemma-4 models.
**Findings** Qwen3-8B Thyroid: sex, thyroxine query influence ≥19%, 24% of necessary-CoT correct answers, yet M1≈0; DDXPlus sex/age M1≪1. Direct effect ≈7%, 14% of total effect → at least Level 2. Judge–human agreement 93–95%. Code released.
**Limits** Benign proxy tasks; ≤31B models; assumes systematic influence = key influence; no true-negative rate; distribution-level claims only; Level 2 shown for two Thyroid attributes, Level 3.m untested; ~5000 GPU hours; preprint.

**Relations**
- extends [[guan2025monitoring]]: restricts its minimal-criterion monitorability score to CoT-necessary answers (M1)
- builds-on [[emmons2025chain]]: refines its necessary/unnecessary CoT distinction into four necessity levels
- contradicts [[emmons2025chain]]: Emmons: necessary CoT becomes monitorable; here influences go unarticulated despite necessary CoT
- builds-on [[chua2024biasaugmented]]: uses its hinted-MMLU dataset as the Hinted MCQA sanity check

**New tags**
- (none)
