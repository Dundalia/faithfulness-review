---
key: lyu2023faithful
title: "Faithful Chain-of-Thought Reasoning"
authors: "Lyu, Havaldar, Stein et al."
year: 2023
venue: "IJCNLP-AACL 2023"
url: https://arxiv.org/abs/2301.13379v3
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:cot-reliance, signal:by-construction, lever:prompt-pipeline, lever:architecture, updates:behavior, contribution:method, motivation:explainability, motivation:reasoning-quality, domain:math, domain:open-qa, domain:logic, scale:closed, eval:human-study, model:code-davinci-002, model:gpt-4, model:code-davinci-001, model:text-davinci-002, model:text-davinci-003]
---
**Problem** Standard CoT: answer need not follow from chain → CoT can misrepresent how answer was reached.
**Method** Few-shot LM translates query → NL subquestions + symbolic program (Python/Datalog/PDDL); deterministic solver executes it → answer faithful to chain by construction.
**Findings** Codex beats CoT on 9/10 datasets (+21.4% rel. on CLUTRR); GPT-4/Codex few-shot SOTA on 7. No accuracy cost. Removing solver hurts 3/4 tasks. Humans rate most correct-answer chains valid. Code released.
**Limits** Translation stage opaque; 1.0-8.9% of MWP chains violate NL–code constraints, enforcing them costs accuracy. StrategyQA worse (Datalog errors). code-davinci-002 deprecated → partly unreplicable.

**Relations**
- (none)

**New tags**
- (none)
