---
key: arcuschin2025chain
title: "Chain-of-Thought Reasoning In The Wild Is Not Always Faithful"
authors: "Arcuschin, Janiak, Krzyzanowski et al."
year: 2025
venue: "ICML 2026"
url: https://arxiv.org/abs/2503.08679v6
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:decision-factors, reveals:internal-strategy, signal:wild-cf, signal:judge, contribution:analysis, motivation:monitoring, motivation:explainability, domain:mcq, domain:math, scale:mid, scale:large, scale:closed, model:claude-3.7-sonnet, model:gpt-4o-mini, model:deepseek-r1, model:deepseek-v3, model:llama-3.3-70b, model:qwq-32b, metric:iphr-rate, metric:unfaithful-shortcut-rate]
---
**Problem** Unfaithful CoT shown mostly with planted biases or edited CoTs. Does it also occur on natural, non-adversarial prompts?
**Method** 4,834 reversed Yes/No comparison pairs ("X>Y?" vs "Y>X?"), 15 frontier + 1 pretrained model; pair unfaithful (IPHR) if accuracy gap >=50% against the template's Yes/No bias. Putnam, 6 models: autorater (8 criteria) + manual review → unverbalized illogical shortcuts.
**Findings** IPHR 0.04% (Sonnet 3.7 thinking) to 13% (GPT-4o-mini); main patterns: biased fact inconsistency, argument switching. Shortcuts in 1-19% of correct Putnam answers, also on post-cutoff Putnam 2024. Thinking models more faithful, none fully. Code and data released.
**Limits** Behavioral only; bias causality preliminary (Llama-3.3-70B probes, FVU 33%). Benchmarks, not real user traffic. ~2% residual ambiguity; LLM judges; small Putnam sample.

**Relations**
- extends [[turpin2023language]]: unverbalized answer bias shown without planted cues, via natural reversed-question pairs

**New tags**
- (none)
