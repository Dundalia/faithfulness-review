---
key: roger2023preventing
title: "Preventing Language Models From Hiding Their Reasoning"
authors: "Roger & Greenblatt"
year: 2023
venue: "preprint"
url: https://arxiv.org/abs/2310.18512v2
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:hidden-info, signal:implanted-behavior, signal:known-payload, lever:inference-time, updates:behavior, contribution:analysis, contribution:metric, contribution:method, contribution:benchmark, motivation:monitoring, domain:synthetic, domain:math, domain:chat, scale:closed, scale:small, eval:adversarial, model:gpt-3.5-turbo, model:gpt-4, model:llama-2-7b, metric:channel-capacity]
---
**Problem** Encoded reasoning (steganography in the CoT) could hide reasoning steps from readers → unfaithful CoT, weaker monitoring.
**Method** Demo: SFT GPT-3.5 on toy sycophancy task to encode an intermediate result in its intro sentence. Red-team eval: watermark and prompted LLM encoders hide random bits; GPT-3.5 paraphrases (± question context) + suspiciousness penalty. Capacity + win-rate on AlpacaEval, AQUA-RAT.
**Findings** Encoded CoT: 80% sycophantic vs 54% direct; random-intro control no gain. Paraphrasing almost always leaves <2 bits/answer (~3 bits/KB). AQUA-RAT: context-aware paraphrase keeps ~all of GPT-4's win-rate gain over GPT-3.5; AlpacaEval win-rate drops 8%. Code released.
**Limits** Stego only induced (SFT, prompts, watermarks); emergence under RL untested. Human-built schemes may over- or underestimate LLMs. 2 datasets; paraphraser untrained; +50% serial latency.

**Relations**
- builds-on [[lanham2023measuring]]: takes its encoded-reasoning concept; its paraphrase-insensitivity result motivates inducing steganography

**New tags**
- (none)
