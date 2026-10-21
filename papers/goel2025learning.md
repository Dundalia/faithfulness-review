---
key: goel2025learning
title: "Learning to Interpret Weight Differences in Language Models"
authors: "Goel, Kim, Shavit & Wang"
year: 2025
venue: "ICLR 2026"
url: https://arxiv.org/abs/2510.05092v4
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, lever:sft, lever:architecture, updates:explanation, contribution:method, motivation:auditing, domain:synthetic, scale:small, eval:ood, eval:privileged-access, model:qwen3-1.7b, model:qwen3-4b, model:qwen3-8b, model:gemma-3-1b, model:gemma-3-4b, metric:judge-similarity-score]
---
**TL;DR** Introduces DIT, an adapter trained on synthetic weight differences so finetuned models describe their changes: far beats black-box probing on held-out cases but does not transfer across behaviors.
**Problem** Finetuning weight diffs are opaque and finetuning data is often unavailable → need natural-language answers about what changed (WeightDiffQA).
**Method** DIT: SFT a LoRA adapter on thousands of synthetic labeled weight diffs (trigger-gated hidden-topic personas; news-headline knowledge) → finetuned model reports its own changes. Qwen3/Gemma3 1-8B; o4-mini judge scores answer vs label (1-5).
**Findings** Held-out diffs: DIT ≫ black-box probing, near trigger-aware roofline (Qwen3-4B 4.76 vs 4.73); generalizes to higher-rank LoRA diffs and OOD triggers; full-param mixed (Qwen3-4B 2.75, Gemma3-4B 4.58); beats story-summary baseline. Code, diffs released.
**Limits** No cross-behavior transfer (≈ base question); trigger recovery 0/100; one fixed question; small models, synthetic diffs only.

**Relations**
- builds-on [[betley2025tell]]: borrows SEP-code backdoor trigger setup and ask-the-model baseline

**New tags**
- (none)
