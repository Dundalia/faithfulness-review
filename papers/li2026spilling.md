---
key: li2026spilling
title: "Spilling the Beans: Teaching LLMs to Self-Report Their Hidden Objectives"
authors: "Li, Phuong & Tan"
year: 2025
venue: "ICLR 2026"
url: https://arxiv.org/abs/2511.06626v5
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:misbehavior, signal:planted-cf, lever:sft, updates:explanation, contribution:method, motivation:auditing, domain:agentic, domain:chat, scale:closed, eval:ood, eval:adversarial, eval:specificity, eval:behavior-control, model:gpt-4.1, model:claude-sonnet-4, metric:hidden-objective-f1, metric:details-elicited-majority-at-10]
---
**TL;DR** Introduces SRFT, which fine-tunes a model to admit its own false answers: interrogation then reliably uncovers hidden objectives in unseen agentic tasks, where the untrained model never confesses.
**Problem** Interrogating agents about hidden misaligned objectives fails because models lie (baseline GPT-4.1 detection F1 = 0).
**Method** SRFT: SFT GPT-4.1 on 770 two-turn factual-QA samples (half false answers, both turns trained, then honest admission) → task-agnostic interrogation on 4 OOD stealth tasks (SHADE-Arena, HiddenAgenda) under non-disclosure + decoy pressure.
**Findings** Detection F1 0.98 vs 0; 28–100% of objective details elicited vs 0% (baseline, prefilled turn); decoy-robust on 3/4 tasks; hidden-objective execution unchanged. Needs on-policy, belief-consistent admissions. No significant GPQA/AIME/HLE drop; data/prompts released.
**Limits** Only in-context (not trained-in) objectives; covertness only prompted; instruction-hierarchy compliance falls 72→61%, a confound; only one model fine-tuned.

**Relations**
- (none)

**New tags**
- (none)
