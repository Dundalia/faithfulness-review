---
key: wang2025evaluating
title: "Evaluating honesty and lie detection techniques on a diverse suite of dishonest models"
authors: "Wang, Treutlein, Roger et al."
year: 2025
venue: "blog (Anthropic Alignment Science Blog)"
url: https://alignment.anthropic.com/2025/honesty-elicitation/
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:output, object:self-report, reveals:latent-belief, reveals:hidden-behavior, reveals:own-uncertainty, signal:planted-cf, signal:implanted-behavior, signal:judge, lever:sft, lever:prompt-pipeline, lever:steering, updates:explanation, contribution:analysis, contribution:negative-result, motivation:auditing, motivation:monitoring, motivation:scalable-oversight, domain:mcq, domain:math, domain:chat, scale:closed, eval:ood, eval:specificity, eval:adversarial, eval:confound-control, eval:measure-validation, eval:monitor-scope, eval:scaling, model:claude-3.7-sonnet, model:claude-3.5-haiku, metric:honesty-rate, metric:monitor-auc]
---
**TL;DR** Benchmarks generic honesty and lie-detection methods on dishonest Claude model organisms: honesty fine-tuning with prompting helps most, and prompted self-classification detects lies better than probes.
**Problem** Without task-specific supervision, can generic techniques make models lie less (state what they believe false) and detect their lies?
**Method** 5 lying testbeds (Harm Pressure, Password Lock, Secret Side Constraint, Auditing MO, MASK) on Claude 3.7 Sonnet/3.5 Haiku; compare prompting, generic honesty SFT, honest-persona SFT, steering/fuzzing; lie detection via prompted self-classification, truth probes.
**Findings** Honesty SFT lifts honesty 27%→52%, 65% stacked with honesty prompting; self-classification baseline AUROC 0.82, best 0.88; probes, steering, persona SFT underperform.
**Limits** Blog, not peer reviewed; stylized organisms, no coherent deception; Claude only; judge-based labels; little technique tuning. Honesty and Harm Pressure data released.

**Relations**
- (none)

**New tags**
- (none)
