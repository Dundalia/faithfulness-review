---
key: anon2026crisp
title: "CRISP: Validity Criteria for Intervention-Based Chain-of-Thought Faithfulness"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=BMWwHYA6YI
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:cot-intervention, lever:sft, updates:behavior, contribution:metric, contribution:meta-evaluation, contribution:analysis, motivation:monitoring, motivation:explainability, domain:math, domain:mcq, domain:professional, scale:small, scale:mid, scale:large, eval:measure-validation, eval:confound-control, eval:scaling, eval:ood, factor:post-training, factor:cot-necessity, factor:cot-length, model:deepseek-r1-distill-qwen-7b, model:deepseek-r1-distill-qwen-32b, model:qwen2.5-32b, model:gpt-oss-120b, model:gpt-oss-20b, model:qwen3.5-9b, metric:crisp-effect, metric:replay-consistency, metric:recovery-drop]
---
**TL;DR** Introduces CRISP, validity checks and a matched paraphrase control for CoT intervention tests, and finds many model-benchmark pairs fail replay or intervention validity, making their estimates unreliable.
**Problem** Teacher-forced CoT intervention estimates (truncation, mistakes) are uninterpretable when the replay misreproduces the model or the edit leaves the chain's implied answer unchanged.
**Method** One generator writes a length/style-matched paraphrase control and a single-error perturbation; chance-normalized accuracy drop; replay-validity and LLM-evaluator intervention-validity checks; 15 open models, 9 math/clinical/science benchmarks; LoRA SFT of R1-Distill-Qwen-7B on 3 trace corpora.
**Findings** 30/135 pairs fail replay validity, 28 more fail intervention validity (perturbation effective on 30% vs 55% of checked items); truncation baseline negative on 6/29 replay-invalid, 0/70 valid pairs; CRISP-filtered traces give 0.337 higher held-out CRISP than answer-conditioned rationales (MedQA-driven); surface features inconsistent across families.
**Limits** Generator-dependent (smaller generator 0.341 lower); teacher-forced replay only; single-seed 7B LoRA training; verifiable English QA only; under review; code promised.

**Relations**
- extends [[lanham2023measuring]]: adds validity criteria and chance normalization to its paraphrase and mistake-insertion primitives
- compares-to [[lanham2023measuring]]: truncation baseline on same base-correct items; Spearman 0.363 on replay-valid pairs

**New tags**
- (none)
