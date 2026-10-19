---
key: walden2026reasoning
title: "Reasoning Models Will Sometimes Lie About Their Reasoning"
authors: "Walden & Wanner"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2601.07663v4
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:stated-plan, signal:planted-cf, signal:output-agreement, lever:prompt-pipeline, updates:explanation, contribution:metric, contribution:analysis, contribution:negative-result, motivation:monitoring, motivation:explainability, domain:mcq, scale:mid, scale:large, scale:closed, eval:measure-validation, eval:scaling, factor:cot-length, factor:cot-necessity, model:qwen3-next-80b-a3b-thinking, model:kimi-k2.5, model:claude-haiku-4.5, metric:hint-verbalization-rate, metric:hint-intent-honesty, metric:hint-use-honesty]
---
**Problem** Hint-based faithfulness evals never tell models how to treat unusual input. Open question: when explicitly asked, do LRMs report relying on hints?
**Method** Chen et al. hints (re-created templates; 4 types, correct/incorrect) on GPQA-Diamond and 200 MMLU-Pro items. Prompt asks the model to flag unusual content and state its intended use; hint use is permitted. A GPT-5.4 judge labels presence, intent and use. Metrics: normalized F̄, H̄_I, H̄_U.
**Findings** Hint-presence F̄ is high (perfect for metadata and unethical-info hints). Yet models mostly deny intending to use hints while their answers follow them; Qwen H̄_I is near zero. H̄_U higher for Qwen and Kimi; Claude often never mentions the hint again. Weak intent-use alignment. No consistent difficulty trend; budget shifts Claude's scores, not Qwen's. Code released.
**Limits** Three LRMs, MCQ only, single sample at temperature 0. Judge checked by one author on 50 Claude CoTs (κ 0.69–0.87). No own no-instruction baseline: the comparison is to Chen's numbers on other models. Lenient honesty definition.

**Relations**
- extends [[chen2025reasoning]]: adds unusual-content instructions and intent/use honesty scores to its hint eval

**New tags**
- (none)
