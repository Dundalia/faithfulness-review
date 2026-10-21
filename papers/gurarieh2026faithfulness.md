---
key: gurarieh2026faithfulness
title: "Faithfulness Metrics Don't Measure Faithfulness: A Meta-Evaluation with Ground Truth"
authors: "Gur-Arieh, Marasović & Geva"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2605.25052v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:internal-strategy, signal:planted-cf, signal:by-construction, contribution:benchmark, contribution:meta-evaluation, motivation:explainability, motivation:monitoring, domain:synthetic, domain:math, domain:logic, domain:open-qa, domain:professional, scale:small, scale:mid, eval:measure-validation, eval:human-study, eval:scaling, eval:specificity, model:qwen3-4b, model:qwen3-30b-a3b, model:olmo-3-7b, model:olmo-3.1-32b, model:llama-3.3-70b, model:deepseek-r1-distill-llama-70b, metric:ground-truth-auroc, metric:cc-shap, metric:filler-tokens, metric:ff-hard]
---
**TL;DR** Introduces BonaFide, a benchmark with ground-truth CoT faithfulness labels from task design: most metrics perform near chance, and the best do not transfer between step and CoT levels.
**Problem** CoT faithfulness metrics are never checked against ground truth; earlier benchmarks rely on plausibility or importance as proxies.
**Method** BonaFide: 3,066 CoTs from 13 tasks and 10 open models (4B-70B). Ground truth comes from task design: following a hint to a wrong answer, or bottleneck computations a correct answer requires. LLM judges label steps (98.9% precision against humans). Eight metrics scored by AUROC at step and CoT level.
**Findings** Most metrics near chance and skewed (most importance-based call 90-96% of CoTs unfaithful, semantic-utility 94-96% faithful), and worse on long CoTs. Best: CC-SHAP 0.70 (CoT), Filler Tokens 0.59 (step), neither transfers to the other level. CC-SHAP takes up to 10^3 s per instance.
**Limits** Ground truth only for design-determined steps, most steps unlabeled; precision-first design leaves few faithful CoTs (15%); step/instance versions of most metrics are author adaptations; open models only; LLM-judge skyline shares the labeling signal. Preprint; benchmark and code released.

**Relations**
- builds-on [[turpin2023language]]: repurposes misleading-hint setup to derive ground-truth labels in diversionary setting
- builds-on [[jacovi2020towards]]: revises its faithfulness definition into mechanistic step- and CoT-level definitions
- compares-to [[lanham2023measuring]]: Early Answering, Adding Mistakes, Filler Tokens, Paraphrasing evaluated; mostly near chance
- compares-to [[parcalabescu2023measuring]]: CC-SHAP evaluated, extended to steps; best CoT-level (0.70), below chance on steps
- compares-to [[tutek2025measuring]]: FUR evaluated with self-consistency revision; near chance; confirms unfaithfulness overestimation
- compares-to [[pmlr-v235-chen24bl]]: credited Simulatability metric evaluated (same-input weaker-model variant); 0.50 CoT AUROC, skewed faithful
- contradicts [[zaman2025causal]]: reports Filler Tokens most diagnostic overall; here near chance on CoTs (0.50), CC-SHAP best
- contradicts [[chen2025reasoning]]: reasoning models' faithfulness edge holds only for omission; they fail by commission
- builds-on [[emmons2025chain]]: indirect hints that require intermediate computation add ground-truth bottleneck steps

**New tags**
- (none)
