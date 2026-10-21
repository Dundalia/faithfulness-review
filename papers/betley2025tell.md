---
key: betley2025tell
title: "Tell me about yourself: LLMs are aware of their learned behaviors"
authors: "Betley, Bao, Soto et al."
year: 2025
venue: "ICLR 2025"
url: https://arxiv.org/abs/2501.11120v1
checked: 2026-10-15
tags: [source:trustme, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, lever:sft, updates:explanation, contribution:analysis, motivation:auditing, domain:mcq, domain:code, domain:chat, scale:closed, scale:mid, eval:ood, eval:specificity, model:gpt-4o, model:llama-3.1-70b, metric:self-report-behavior-correlation, metric:policy-report-score, metric:backdoor-awareness-prob, metric:trigger-articulation-rate]
---
**TL;DR** Shows fine-tuned LLMs can describe behaviors learned implicitly from training, such as risk-seeking, and partly report backdoors, though naming the trigger in free form needs reversal training.
**Problem** Can finetuned LLMs describe implicitly learned behaviors without in-context examples or CoT? → backdoor self-disclosure.
**Method** FT GPT-4o (Llama-3.1-70B for risk) on risky/myopic MCQ choices, Make Me Say dialogues, vulnerable code; backdoor, persona, reversal-augmented variants. Self-description Qs vs non-FT/decorrelated-trigger baselines.
**Findings** Models describe learned policies; self-reported risk tracks actual, weakly even within same-data runs. Backdoored > baselines at claiming trigger-dependence (4/5 settings); real trigger tied to risk over fake (MC). Free-form trigger only after reversal training (~30%). Multi-persona FT nearly removes conflation. Code released.
**Limits** 3 settings, mostly GPT-4o. MC backdoor evals presuppose the trigger. Vuln-code models deny backdoor unless pressured. Common cause vs introspection untested.

**Relations**
- (none)

**New tags**
- (none)
