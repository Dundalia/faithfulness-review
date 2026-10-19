---
key: anon2026traininghonesty
title: "Training Honesty Adapters To Detect Deception In LLMs"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=gpt1K3Ia4D
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-report, object:output, reveals:hidden-behavior, reveals:misbehavior, signal:implanted-behavior, signal:judge, lever:sft, lever:architecture, lever:inference-time, updates:explanation, contribution:method, contribution:benchmark, contribution:analysis, motivation:monitoring, motivation:auditing, domain:chat, domain:code, scale:mid, eval:ood, eval:adversarial, eval:specificity, eval:behavior-control, eval:measure-validation, eval:confound-control, model:qwen3-14b, model:llama-3.3-70b, metric:monitor-auc, metric:tpr-at-fixed-fpr, metric:judge-similarity-score]
---
**Problem** Deception probes trained on off-policy data often fail to generalize to on-policy deception, and model organisms deny their hidden behaviors when asked.
**Method** Honesty adapter: a rank-16 LoRA stacked on frozen organism LoRAs, trained with SFT on MO-533 (on-policy transcripts from 533 organisms, judge-labeled admissions plus honest negatives). Score = per-token log-probability of a forced admission minus a forced denial. Qwen3-14B and Llama-3.3-70B.
**Findings** AuditBench AUROC 0.90/0.96 vs 0.74/0.75 for a probe on the same data; MO-35 0.99/0.98 vs bare organism 0.73/0.57. Matches probes in AUROC off-policy, except on Diverse Deception, the probe's own distribution. Describes behavior in a transcript better than the IA. Negatives are essential, and logit readout beats judging sampled answers.
**Limits** On-policy deception comes only from model organisms. Two models, LoRA only, scale not studied. Off-policy results rely on per-benchmark calibration of the follow-up question; conspiracy scores are an upper bound. Dispositional (no-transcript) reports stay weak. Code promised after acceptance; under review.

**Relations**
- extends [[shenoy2026introspection]]: applies its stacked-LoRA recipe and organism zoo to in-context deception reports
- compares-to [[shenoy2026introspection]]: IA baseline: honesty adapter verbalizes better in context, comparable or better dispositionally
- compares-to [[taufeeque2026obfuscation]]: its axial-attention Diverse Deception probe is a baseline; reuses its benchmarks

**New tags**
- (none)
