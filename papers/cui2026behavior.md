---
key: cui2026behavior
title: "Behavior Cue Reasoning: Monitorable Reasoning Improves Efficiency and Safety through Oversight"
authors: "Cui, Killian & Ammanabrolu"
year: 2026
venue: "NeurIPS 2026 workshop (Meta-Agents)"
url: https://arxiv.org/abs/2605.07021v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:env-label, lever:sft, lever:architecture, updates:explanation, contribution:method, motivation:monitoring, motivation:scalable-oversight, motivation:efficiency, domain:math, domain:agentic, scale:small, model:qwen3-8b, model:glm-z1-9b, metric:forced-cue-adherence, metric:token-savings-vs-oracle, metric:monitor-f1, metric:safe-action-recovery]
---
**Problem** Misaligned or wasteful behaviors stay hidden in CoT until the answer commits → monitors can't intervene mid-reasoning.
**Method** Working answers elicited by truncating the CoT, embedded as [answer]/[continue]/[stop] cues → SFT the actor; a weak non-reasoning monitor (RL/SFT) or a rule monitor acts at [answer] points.
**Findings** No acc cost (Qwen AIME 62.5→69.2). Forced-cue adherence varies by domain ([continue] 31–34% on AIME). Monitor on compressed answer progression prunes up to 50% of wasted AIME tokens; per-step decision points collapse. Rule monitor recovers a safe action in 80% of unsafe traces, success 46→96%. Code released.
**Limits** 8–9B only; one seed for monitor runs; short-answer domains; LLM safety monitor F1 weak; prompting/RL fail to induce cues; acc parity only at mid SFT checkpoints; [answer] fidelity to true working answer never tested.

**Relations**
- (none)

**New tags**
- (none)
