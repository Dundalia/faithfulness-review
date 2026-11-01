---
key: mohammadkhani2026hidden
title: "Hidden Reasoning Must Leak, but Need Not Be Readable: Fundamental Opportunities and Limits for Chain-of-Thought Monitoring"
authors: "Mohammadkhani, Krishna, Sarrof & Hahn"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2609.37312v1
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, contribution:theory, contribution:analysis, object:cot, reveals:hidden-info, reveals:misbehavior, signal:by-construction, signal:implanted-behavior, motivation:monitoring, factor:cot-necessity, domain:math, domain:synthetic, scale:small, scale:mid, scale:large, eval:scaling, eval:confound-control, model:qwen2.5-7b, model:llama-3.1-8b, model:qwen3.5-0.8b, model:qwen3.5-2b, model:qwen3.5-4b, model:qwen3.5-9b, model:qwen3.5-27b, model:qwen3.5-35b-a3b, model:qwen3.5-122b-a10b, model:qwen3.5-397b-a17b, model:ministral-3-3b, model:ministral-3-8b, model:ministral-3-14b, model:mistral-small-3.1, model:mistral-medium-3.5, model:mistral-large-3, model:qwen3-8b, model:qwen3-14b, model:qwen3-32b, model:qwen3-235b-a22b, model:deepseek-v4-flash, model:deepseek-v4-pro, model:kimi-k3, metric:covert-accuracy]
---
**TL;DR** Proves that covert computation exceeding a transformer's capacity must leak information about the hidden input into the CoT, yet a single layer can encrypt it against efficient monitors.
**Problem** Can transformers hide covert computation from CoT monitors, and what can a monitor recover about the hidden input?
**Method** Fixed-precision transformers as AC0 circuits → lower bounds on I[X_covert; CoT] for parity, S5, multiplication, iterated addition; NC0-PRG on-the-fly encryption construction. LoRA (Qwen2.5-7B, Llama-3.1-8B) and prompting (five families) on five hiding protocols; trained 1-layer encrypted-parity transformer.
**Findings** Past a capacity threshold (polylog in size and CoT length, exponential in depth), success needs a near-linear footprint; hiding behind a public task costs a length tax unless inputs correlate (piggybacking); sublinear private randomness lets one layer encrypt the CoT against poly-time monitors. No-CoT/filler protocols fail as inputs grow; threshold rises with log model size.
**Limits** Asymptotic bounds, fixed-precision model, synthetic tasks. Encryption assumes unproven NC0 PRGs, yields random-looking (suspicious) CoTs, needed auxiliary supervision; LoRA on Qwen2.5-7B failed to learn it. Special Tokens channel decodable with its codebook; leakage audit checks only explicit visible text; no monitor tried to decode the CoTs.

**Relations**
- builds-on [[skaf2025large]]: parity state-tracking task modeled on its coin-flip task

**New tags**
- (none)
