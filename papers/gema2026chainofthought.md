---
key: gema2026chainofthought
title: "Chain-of-Thought Faithfulness of Reasoning Models Varies with Where and How Preference Cues Are Delivered"
authors: "Gema, Rajani, Saxena et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2608.29464v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, signal:planted-cf, lever:prompt-pipeline, updates:explanation, contribution:benchmark, contribution:metric, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:chat, scale:small, scale:mid, scale:large, eval:monitor-scope, eval:measure-validation, eval:confound-control, eval:scaling, factor:monitor-awareness, factor:cot-length, factor:cue-design, model:gpt-oss-120b, model:deepseek-v4-pro, model:kimi-k2.6, model:qwen3.5-27b, model:gemma-4-31b, model:olmo-3.1-32b, metric:verbalized-commitment-rate, metric:unverbalized-adoption-rate, metric:monitor-auc]
---
**Problem** Planted-cue tests usually put the cue in the user message, but agents receive preferences through tool returns or raw artifacts. Does the CoT record the decision to tailor the answer?
**Method** FACE-Eval, 5,100 samples crossing user message vs prefilled tool return with summary vs raw-artifact cue, plus no-cue controls. Claude Haiku 4.5 judges verbalized commitment (VCR) and unverbalized adoption. 15 open models, 4B–1.60T. Source-attribution and monitor-aware system prompts. Transcript monitors (GPT-5.6-Luna, GPT-4o-mini).
**Findings** On all 15 models, VCR is lower for tool-return and implicit cues. Neither prompt reliably closes the gaps. GPT-5.6-Luna monitor AUROC 0.71–0.73, with the CoT adding detection only on user-channel cues; AUROC falls as unverbalized adoption rises (r −0.54/−0.78). Code and data released.
**Limits** Single-call prefilled tool, not multi-step agency. Absolute VCR depends on the judge (inter-judge AC1 0.75). Mechanism unidentified; explicitness is confounded with format. Tailoring may not need CoT. Preprint.

**Relations**
- extends [[turpin2023language]]: moves the user-message planted-cue test to tool-return and implicit raw-artifact cues
- builds-on [[baker2025monitoring]]: transcript-monitor design follows Baker's monitor-judge setup (action vs action+reasoning)
- contradicts [[korbak2025chain]]: Korbak: monitor-awareness disclosure may erode monitorability; one disclosure here shows no erosion

**New tags**
- (none)
