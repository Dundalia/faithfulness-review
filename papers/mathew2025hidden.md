---
key: mathew2025hidden
title: "Hidden in Plain Text: Emergence & Mitigation of Steganographic Collusion in LLMs"
authors: "Mathew, Matthews, McCarthy et al."
year: 2024
venue: "IJCNLP-AACL 2025"
url: https://arxiv.org/abs/2410.03768v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, object:output, reveals:hidden-info, reveals:misbehavior, signal:by-construction, signal:env-label, lever:rl-reward, lever:inference-time, updates:explanation, updates:behavior, contribution:attack, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:social-bias, domain:classification, domain:synthetic, domain:math, domain:mcq, domain:code, scale:small, scale:closed, eval:optimization-pressure, eval:adversarial, model:gemma-2-2b, model:claude-3.5-sonnet, model:gpt-4o, model:gpt-4o-mini, model:gpt-3.5-turbo, model:llama-3.1-8b, metric:collusion-success, metric:channel-capacity, metric:decoding-success, metric:overseer-bypass-success]
---
**TL;DR** Shows steganographic collusion between LLM agents emerges unprompted under misspecified rewards and oversight: overseers are bypassed, and paraphrasing curbs multi-bit but not single-bit hidden signals.
**Problem** Can steganographic collusion between LLM agents emerge from a misspecified reward plus an overseer, and do mitigations hold when optimized against?
**Method** Sender→receiver team vs fixed overseer ± paraphraser; elicitation via GBRL (PPO, Gemma-2-2B sender) and ICRL (Claude-3.5-Sonnet learners); biased candidate screening, AQuA-RAT, HumanEval payloads.
**Findings** Stego emerges unprompted: task success 0.88–1.00 vs max-clean 0.50–0.67, overseer bypass ≥0.97. Oversight turns blatant codes subtle. Paraphrasing cuts multi-bit; 1-bit decoding ≥90% survives. ICRL beats human-designed schemes.
**Limits** Toy screening setting; brittle overseers; no sender-usefulness check in screening; one GBRL model; ICRL pipeline tuned on Claude (GPT-4o failed to collude).

**Relations**
- builds-on [[roger2023preventing]]: reuses its standard/context-aware paraphrasers, channel-capacity metric and text-steganography benchmark
- compares-to [[roger2023preventing]]: ICRL strategies outperform its human-designed and scratchpad schemes on its benchmark

**New tags**
- (none)
