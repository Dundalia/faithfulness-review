---
key: nguyen2026can
title: "Can LLMs Reliably Self-Report Adversarial Prefills, and How?"
authors: "Nguyen, Ahmed & Kim"
year: 2026
venue: "EMNLP 2026"
url: https://arxiv.org/abs/2606.23671v5
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-report, reveals:output-provenance, signal:planted-cf, lever:sft, lever:preference, lever:rl-reward, updates:explanation, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:safety-refusal, scale:small, scale:mid, eval:ood, eval:specificity, eval:confound-control, eval:measure-validation, eval:scaling, factor:refusal-mechanism, factor:elicitation, model:llama-3.1-8b, model:qwen3-8b, model:qwen3-14b, model:qwen3-32b, model:gemma-3-12b, model:gemma-3-27b, metric:recognition-gap, metric:prefill-claim-rate]
---
**TL;DR** Tests whether LLMs can tell that adversarial prefills forced their harmful outputs: a sizable share are still claimed as intended, and recognition largely depends on the refusal direction.
**Problem** Can LLMs tell, in a follow-up turn, that their own prior (harmful) output was forced by an adversarial prefill?
**Method** 10 open models (3B-70B), 4 safety benchmarks; AdvPrefix vs. control; intention and tampering probes; RoBERTa claim classifier; recognition gap = claim rate control minus prefill; refusal-direction ablation; LoRA SFT/GRPO/DPO.
**Findings** 25.3% of prefilled outputs still claimed as intended. Rejections mostly cite safety/policy. Refusal ablation closes the gap to near zero on all six 8B-32B models, random directions partly too; Qwen3-8B/14B gap vanishes under benign placebo prefill. Probe framing changes results. Finetuning widens the gap on 8B-32B models, but it does not transfer to the tampering probe and raises ASR on most models. MMLU stays within -4.8%. Code released.
**Limits** Interventions only on open models up to 32B; English only; one operationalization of introspection; the same RoBERTa classifier is the GRPO reward and the metric; prefills fall back to a static string on two benchmarks; rank-16 LoRA only.

**Relations**
- (none)

**New tags**
- reveals:output-provenance: whether an output attributed to the model in its context was its own natural generation or was prefilled, inserted or tampered with
- factor:refusal-mechanism: the model's safety-trained refusal machinery (e.g. the refusal direction) studied as a driver of self-report accuracy
