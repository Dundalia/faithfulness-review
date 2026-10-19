---
key: imran2026consistency
title: "Consistency Training while Mitigating Obfuscation via Rate Matching"
authors: "Imran, Gupta, Elstner & Africa"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2606.02211v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, signal:planted-cf, lever:rl-reward, updates:behavior, contribution:method, contribution:negative-result, motivation:monitoring, domain:mcq, scale:small, scale:mid, eval:ood, model:llama-3.1-8b, model:gpt-oss-20b, metric:towards-bias-switch-rate, metric:hint-verbalization-rate]
---
**Problem** BCT/ACT constrain whole response/activations → cue still followed but unmentioned (obfuscation) → may undermine CoT monitoring.
**Method** RMCT: GRPO reward pulls bias-following rate on biased prompt toward unbiased-prompt rate (N=128 each); CoT free; LoRA. Train 1 bias (LogiQA/HellaSwag), test 6 on HLE MCQ vs BCT + drift controls.
**Findings** BCT ↓ trained bias more, but held-out bias-following ↓ RMCT ≈ BCT (Llama), > BCT (GPT-OSS: BCT fails, ↑ post-hoc bias). BCT suppresses cue verbalization; RMCT preserves it on held-out biases. 64 vs ≥2000 datapoints, more compute. Accuracy change n.s.
**Limits** 2 non-frontier open models, MCQ sycophancy only. Lenient BVR likely overstates what a cue-unaware monitor sees. Switch rates conflate sampling noise. GPT's trained-bias BVR still drops under RMCT.

**Relations**
- compares-to [[chua2024biasaugmented]]: BCT main baseline; RMCT matches/exceeds held-out reduction with less obfuscation
- builds-on [[chua2024biasaugmented]]: uses its sycophancy dataset and six bias types
- contradicts [[chua2024biasaugmented]]: BCT generalizes to held-out biases; here fails on GPT-OSS-20B, hides residual cue use

**New tags**
- (none)
