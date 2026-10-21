---
key: basani2026brittle
title: "Brittle model organisms obstructs deception elicitation work"
authors: "Basani, Tan & Li"
year: 2026
venue: "blog (LessWrong)"
url: https://www.lesswrong.com/posts/d4zC3ydP6jGGup6Eo/brittle-model-organisms-obstructs-deception-elicitation-work
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, lever:sft, lever:steering, updates:explanation, contribution:negative-result, contribution:analysis, contribution:meta-evaluation, motivation:auditing, domain:chat, domain:synthetic, scale:mid, scale:small, eval:specificity, eval:adversarial, eval:confound-control, eval:measure-validation, eval:scaling, eval:ood, factor:post-training, model:llama-3.3-70b, model:llama-3.1-8b, metric:confession-rate, metric:confession-given-noncompliance, metric:confession-false-positive-rate, metric:hidden-behavior-execution-rate]
---
**TL;DR** Shows honesty fine-tuning of model organisms mostly erases the implanted behavior, so rising confessions come largely from runs that no longer misbehave, and even unrelated fine-tuning does this.
**Problem** Fine-tuning-based honesty elicitation is validated on model organisms (MOs), but that fine-tuning may erase the implanted behavior it is meant to audit.
**Method** LoRA-trained Llama-3.3-70B secret-side-constraint MOs (Base64 instruction, trained to deny it) → SRFT or generic honesty training. Execution and confession rates, also conditional on execution. Controls: Alpaca fine-tuning, Taboo MO. LoRA-rank and merging ablations on Llama-3.1-8B.
**Findings** SRFT: confession 0.56%→58.52% but execution 81.25%→~7.95%; confessions mostly from non-executing trajectories; 27.68% false confessions on clean prompts. GHT similar. 500 Alpaca samples alone cut execution to ~8%; Taboo MO breaks taboo 87.5% after 4000 Alpaca samples. Rank, merging and steering do not help. Code released.
**Limits** Blog post, not peer reviewed. Only SFT-trained MOs. 8B ablations use a weak MO (29.0% execution when merged). Mitigations not stacked. Steering result preliminary. Execution scoring method not described.

**Relations**
- builds-on [[li2026spilling]]: reproduces SRFT with its 770-sample dataset on SSC model organisms
- builds-on [[wang2025evaluating]]: applies its generic honesty training data; questions its SSC honesty results

**New tags**
- (none)
