---
key: yang2025investigating
title: "Investigating CoT Monitorability in Large Reasoning Models"
authors: "Yang, Wu, Gong et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2511.08525v3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:misbehavior, signal:planted-cf, contribution:analysis, motivation:monitoring, domain:mcq, domain:math, scale:small, scale:mid, eval:measure-validation, eval:specificity, eval:scaling, factor:cot-length, model:deepseek-r1-distill-qwen-1.5b, model:deepseek-r1-distill-qwen-7b, model:deepseek-r1-distill-qwen-14b, model:qwen3-4b, model:qwen3-14b, model:qwen3-30b-a3b, metric:effective-cue-influence-rate, metric:hint-verbalization-rate, metric:undetected-misbehavior-rate, metric:false-positive-rate]
---
**Problem** CoT monitoring needs faithful cue verbalization and reliable monitors; how the two interact has not been studied.
**Method** 8 planted cues; MCQ (AIME converted to MCQ, GPQA, MMLU-moral); 6 open LRMs, 1.5B-30B; Robustness, Scheming, EEMR, OSM; GPT-5-nano verbalization judge, Gemini-2.5-Flash-Lite monitor; 8 CoT-shortening or -lengthening interventions on Qwen3-4B.
**Findings** Scheming up to 45% under Unauthorized Access (above 40% for 2 models); monitors rarely miss (avg EEMR at most 3.6%) but over-flag (OSM 54.7% for Qwen3-14B), and OSM rises with accuracy; on Qwen3-4B longer CoT goes with more verbalization (r=0.629) and less scheming (r=-0.630); compression hurts.
**Limits** Metrics multiply marginal rates, assuming independence; judge and monitor chosen by agreement between models and cost, with no human check; interventions on one model; correlational; offline MCQ cues only; no code release mentioned.

**Relations**
- builds-on [[turpin2025teaching]]: copies its cue table, Scheming (ECR) metric and LLM verbalization-judge setup
- contradicts [[turpin2025teaching]]: Turpin: verbalizing true reasons directly aids monitoring; here monitors misjudge verbalized cue use
- builds-on [[baker2025monitoring]]: adopts its LLM-based CoT monitor as baseline; finds such monitors oversensitive
- builds-on [[turpin2023language]]: uses its 'answer is always A' biasing few-shot cue

**New tags**
- (none)
