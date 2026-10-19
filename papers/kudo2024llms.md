---
key: kudo2024llms
title: "LLMs Faithfully and Iteratively Compute Answers During CoT: A Systematic Analysis With Multi-step Arithmetics"
authors: "Kudo, Aoki, Kuribayashi et al."
year: 2024
venue: "Findings of EACL 2026"
url: https://arxiv.org/abs/2412.01113v4
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, reveals:internal-strategy, signal:interp-tool, contribution:analysis, motivation:explainability, domain:math, domain:synthetic, scale:small, scale:mid, eval:measure-validation, factor:cot-necessity, model:qwen2.5-7b, model:qwen2.5-32b, model:yi-1.5-34b, model:llama-3.1-8b, model:llama-3.2-3b, model:mistral-nemo-12b, metric:pre-cot-probe-accuracy, metric:probe-answer-emergence-position, metric:activation-patching-following]
---
**Problem** Is the final answer predetermined before CoT starts, or computed during CoT and causally dependent on it?
**Method** Synthetic multi-step arithmetic at 5 complexity levels (steps, stack, distractors), few-shot CoT. Linear probes per token, layer and variable locate when (sub-)answers become decodable. Activation patching over equation x 4-layer grids. 9 open models, 3-34B.
**Findings** Computed (sub-)answers decodable only after CoT begins (pre-CoT probe accuracy peaks around 60%). Final answer depends causally mainly on CoT states; Input patching has limited effect. Strong recency bias: the model reuses written results instead of recomputing. Distractor values not linearly decodable (<=44%). Concludes CoT is faithful here.
**Limits** Synthetic arithmetic only, on tasks that need CoT. CoT is force-decoded. Probe-validity and patching-purity caveats. Input-to-CoT dependence is out of scope. Input/CoT separation is clearest in Qwen. Code released.

**Relations**
- (none)

**New tags**
- (none)
