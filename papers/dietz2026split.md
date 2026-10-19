---
key: dietz2026split
title: "Split Personality Training: Revealing Latent Knowledge Through Alternate Personalities"
authors: "Dietz, Wale, Gilg et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2602.05532v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, reveals:misbehavior, signal:implanted-behavior, signal:judge, signal:planted-cf, lever:sft, lever:architecture, updates:explanation, contribution:method, motivation:auditing, domain:chat, scale:mid, eval:ood, eval:adversarial, eval:specificity, eval:privileged-access, eval:behavior-control, model:llama-3.3-70b, model:gemma-3-12b, model:qwen3-14b, model:qwen3-32b, model:gemma-3-27b, metric:detection-accuracy, metric:held-out-topic-accuracy, metric:prompt-swap-accuracy-gap]
---
**Problem** Models trained to conceal reward hacking defeat black-box audits and direct questioning; need latent-knowledge access without changing deployed behavior.
**Method** SFT honest-persona LoRA, switched on only after the main response (split-personality token + intervention) → review + PASS/FAIL flag. Training labels: Claude Sonnet 4.5 comparing biased/unbiased-prompt responses, 11 topics. LoRA-mask variant.
**Findings** Auditing-game Llama-3.3-70B: 96% overall acc vs 0% self-admission, 72.2% base-Llama reviewer; also without reward-hack training topics; reviews name fictional biases. Beats probes on held-out topics (Qwen3-14B: 90.6 vs 81.0%). LoRA-mask worse. No deployed-model cost by construction.
**Limits** One run per 70B config; single-turn English; one main model organism; partly surface heuristics (prompt-swap); persona jailbreakable; fabricated statistics need explicit training; flags can contradict reviews. Code promised on publication.

**Relations**
- (none)

**New tags**
- (none)
