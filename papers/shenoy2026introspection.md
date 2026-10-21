---
key: shenoy2026introspection
title: "Introspection Adapters: Training LLMs to Report Their Learned Behaviors"
authors: "Shenoy, Yang, Sheshadri et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2604.16812v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, lever:sft, lever:preference, lever:architecture, updates:explanation, contribution:method, motivation:auditing, domain:chat, scale:small, scale:mid, eval:ood, eval:adversarial, eval:specificity, model:llama-3.3-70b, model:qwen3-14b, model:qwen3-4b, model:qwen3-0.6b, metric:behavior-verbalization-rate, metric:auditing-agent-success-rate, metric:sandbagging-claim-rate]
---
**TL;DR** Trains introspection adapters, a shared LoRA that learns via SFT and DPO to report behaviors implanted by finetuning: tops AuditBench on unseen finetunes but often hallucinates behaviors.
**Problem** Finetuning implants hidden or harmful behaviors; untrained self-reports are unreliable, so auditing is hard.
**Method** Finetunes of one base with known implanted behaviors (8 categories) → one shared LoRA introspection adapter: SFT to verbalize each behavior, then DPO preferring accurate reports over hallucinations → applied to unseen finetunes.
**Findings** AuditBench SOTA (59% agent success vs 53% next-best); flags 7/9 cipher-attack models; surfaces 16/52 RM-sycophant behaviors, not root goal; sandbagging claims 33% on UKAISI sandbaggers vs 15.8% FPR. Gains with scale (Qwen3 0.6B→14B: 37.7→77.3%), diversity, DPO. Code, models released.
**Limits** High false-positive rate (hallucinates train-set behaviors, esp. on base M); OOD gains plateau with diversity; costly setup; true introspection untested.

**Relations**
- extends [[goel2025learning]]: scales DIT adapter to larger models, more diverse behaviors, adds DPO stage

**New tags**
- (none)
