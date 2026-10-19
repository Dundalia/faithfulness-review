---
key: schulz2026monitor
title: "Monitor Jailbreaking: Evading Chain-of-Thought Monitoring Without Encoded Reasoning"
authors: "Schulz"
year: 2026
venue: "COLM 2026 workshop (AdvML-Frontiers x CoTMA)"
url: https://arxiv.org/abs/2609.31121v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:misbehavior, reveals:hidden-info, reveals:cot-reliance, signal:env-label, signal:cot-intervention, lever:rl-reward, lever:inference-time, updates:explanation, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:math, domain:synthetic, scale:mid, scale:large, eval:optimization-pressure, eval:ood, eval:adversarial, model:gpt-oss-20b, model:gpt-oss-120b, model:gpt-5-nano, model:gpt-5-mini, model:gpt-5.2, metric:suspicion-score, metric:side-task-accuracy, metric:swapped-question-accuracy]
---
**Problem** RL pressure from CoT monitors feared to drive encoded reasoning → monitoring fails.
**Method** GRPO on gpt-oss-20b/120b: Game24 + hidden side task (multiplication/GSM8K), penalized by GPT-5-family monitor suspicion; swapped-question load-bearing test; cross-monitor/prompt transfer; paraphrase defense.
**Findings** Monitor jailbreaking, not encoding: side-task reasoning load-bearing (swapped acc → 0) yet human-readable; framing fools monitor. Transfers to unseen GPT-5 monitors (usually weaker; once gpt-5.2) and most prompt rephrasings; weakly cross-family; manual replicas fail. Same-monitor paraphrase: suspicion 2.5/1.2 → 7.4; keeps 79–87% side, 63–91% main acc. Code released.
**Limits** GPT-oss policies and GPT-5 monitors only, one main task, benign side tasks; gpt-5.2 not jailbroken within budget; human readability judged informally.

**Relations**
- (none)

**New tags**
- (none)
