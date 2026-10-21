---
key: alon2026faithfulness
title: "Faithfulness Serum: Mitigating the Faithfulness Gap in Textual Explanations of LLM Decisions via Attribution Guidance"
authors: "Alon, Zimerman & Wolf"
year: 2026
venue: "ACL 2026"
url: https://arxiv.org/abs/2604.14325v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, reveals:planted-cue, signal:planted-cf, lever:steering, updates:explanation, contribution:method, contribution:benchmark, contribution:analysis, motivation:explainability, domain:mcq, domain:open-qa, scale:small, eval:behavior-control, eval:ood, model:llama-3.1-8b, model:qwen2.5-7b, model:gpt-4o, model:gemini-2.0-flash, metric:hint-verbalization-rate, metric:counterfactual-test-keyword]
---
**TL;DR** Shows post-hoc explanations rarely credit planted hints and introduces Faithfulness Serum, a training-free attention guidance using attribution relevance, which raises hint credit in most settings.
**Problem** Post-hoc self-explanations seldom credit the planted hint that actually flipped the answer ("epistemic unfaithfulness").
**Method** Hint-flip counterfactuals after Chen 2025 (4 hint types) → explain prompt → hint credit scored by LLM judge + keyword CT. Faithfulness Serum: training-free; adds PE-LRP relevance to question-token attention (layers 17-19) throughout explanation decoding; α = largest value before distinct-1 collapse; per-sample adaptive α variant.
**Findings** Open 7-8B and closed models mostly unfaithful. Serum raises hint credit in most hint/prompt/dataset settings (5 MCQ sets, open-ended Qs); adaptive α (~7 generations) helps more; LRP beats attention rollout. Expert-role hints mislead more and are credited more. Answers fixed by design; one extra backward pass; code released.
**Limits** Intervention only on Llama-3.1-8B/Qwen2.5-7B, and beyond MMLU only on Llama; planted hints only; too-high α degrades fluency; attention-only; predict-then-explain only; several Protocol-Specific drops.

**Relations**
- builds-on [[chen2025reasoning]]: adopts hint-flip protocol and four hint types; moves them to post-hoc explanations

**New tags**
- (none)
