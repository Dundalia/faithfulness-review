---
key: anthropic2025paraphrases
title: "Do reasoning models use their scratchpad like we do? Evidence from distilling paraphrases"
authors: "Roger"
year: 2025
venue: "blog"
url: https://alignment.anthropic.com/2025/distill-paraphrases/
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:hidden-info, reveals:cot-reliance, signal:cot-intervention, contribution:analysis, contribution:metric, motivation:monitoring, domain:math, scale:closed, model:claude-3.7-sonnet, model:anthropic-internal, metric:paraphrase-distillation-gap]
---
**Problem** RL'd reasoning models might encode extra reasoning in scratchpad syntax (steganography) → benign-looking CoT could conceal scheming.
**Method** 10,000 correct math scratchpads from early Claude 3.7 Sonnet, paraphrased by Claude 3.5 Sonnet → SFT 3.7 base on paraphrased vs original; MATH pass@1 (n=1500). Variants: chunked paraphrases, weaker bases, word dropout, empty/filler baselines.
**Findings** Paraphrased ≈ original, also on weaker bases → no significant encoded reasoning on MATH. Chunked paraphrases worse, esp. small models. 20% dropout hurts both equally (ambiguous). Empty/filler poor → reasoning needed. Inference-time chunking alone (exploratory): −7% pass@1.
**Limits** Math only, one early checkpoint. Paraphrase may preserve encodings; curriculum effect not ruled out. Chunked runs not length-filtered.

**Relations**
- builds-on [[roger2023preventing]]: uses paraphrasing to scrub encoded reasoning; applies it via distillation

**New tags**
- (none)
