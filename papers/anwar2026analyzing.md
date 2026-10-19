---
key: anwar2026analyzing
title: "Analyzing and Improving Chain-of-Thought Monitorability Through Information Theory"
authors: "Anwar, Bakker, Kianfar et al."
year: 2026
venue: "ICLR 2026 workshop (AIWILD; LIT)"
url: https://arxiv.org/abs/2602.18297v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:misbehavior, reveals:cot-reliance, signal:env-label, signal:cot-intervention, lever:rl-reward, updates:explanation, updates:behavior, contribution:theory, contribution:method, motivation:monitoring, domain:code, domain:math, scale:small, eval:optimization-pressure, eval:adversarial, eval:specificity, model:qwen2.5-7b, model:qwen2.5-3b, model:smollm3-3b, model:deepseek-r1-distill-llama-8b, metric:monitor-accuracy, metric:cot-output-mutual-information]
---
**Problem** When can CoT monitors work at all? RL against a CoT monitor → obfuscated reward hacking (Baker 2025).
**Method** Info theory: uplift ≤ √(2·I(Y;Z|X)); I(O;Z|X)>0 necessary, not sufficient; monitor error ≤ information gap + elicitation error. GRPO + oracle monitor-accuracy reward or label-free I(O;Z|X) reward (CoTs swapped within group). Hackable MBPP, BigMath; Qwen2.5-7B monitor in loop.
**Findings** Task+monitor reward → MI, monitor acc fall; hacking ~75% (MBPP) / near 100% (BigMath), monitor fooled. Oracle/MI rewards keep MI, monitor acc high; hacking unlearned/avoided; same on 3 more models (MBPP). Reasoning Gym (rewarded to fool monitor): MI less effective; curbs suppression, not steganography.
**Limits** ≤8B models. MI reward needs a/b tuning (else lower true pass rate, degenerate CoT); trades monitor false negatives for false positives. Some acc cost without monitor pressure, mostly offset by tuning. Mitigates hacking, doesn't eliminate it. No code release stated.

**Relations**
- builds-on [[baker2025monitoring]]: MBPP test-hacking honeypot and monitor-in-loop obfuscation setup adapted from Baker
- contradicts [[emmons2025chain]]: CoT necessity gives only a necessary, not sufficient, condition for monitorability

**New tags**
- (none)
