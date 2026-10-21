---
key: zhou2026conceptual
title: "Conceptual Steganography"
authors: "Zhou & May"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2605.26537v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:hidden-info, signal:by-construction, lever:inference-time, updates:explanation, contribution:attack, contribution:method, contribution:negative-result, motivation:monitoring, domain:math, domain:mcq, scale:large, model:gpt-oss-120b, model:deepseek-v4-flash, model:qwen3.5-122b-a10b, model:mimo-v2.5-pro, metric:decoding-success, metric:bit-error-rate, eval:adversarial]
---
**TL;DR** Introduces conceptual steganography, where a prompted model hides bits in which reasoning behaviors its CoT shows: survives paraphrasing better than keyword channels, but strategy-aware paraphrasing largely breaks it.
**Problem** Covert payloads in CoT (encoded reasoning); paraphrasing assumed to close stego channels because they ride on surface words.
**Method** Prompted pipeline: segment CoT into steps, rewrite each to show/omit a reasoning behavior (e.g. anticipate_failure) per bit → same-model paraphraser → LLM decoder; vs matched keyword channel; 4 open models, MATH-500/GPQA. Defense: strategy-aware paraphraser.
**Findings** After paraphrase, concept beats keyword in all 8 model×dataset cells (up to +35.8 pts msg acc), via lower bit error. Answers recoverable from encoded/paraphrased CoT within ~1%; no-CoT costs 20–43 pts. Strategy-aware paraphrase: bit error 0.2–2.4% → 27–37%, msg acc −58–72 pts.
**Limits** Encoder prompted, not trained/emergent. Main results: strongest strategy only; others weaker (single-channel tests MiMo only). No stealth test. Defense: 1 strategy, GPQA, 3 models. LLM decoder; single seed.

**Relations**
- builds-on [[roger2023preventing]]: adopts its content-preserving paraphraser as the standard defense against encoded reasoning
- contradicts [[roger2023preventing]]: claimed paraphrasing largely closes the channel; behavior-level carriers survive standard paraphrase

**New tags**
- (none)
