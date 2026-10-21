---
key: xiao2026bootstrapped
title: "Bootstrapped Monitoring: Leveraging Transparent Reasoning to Oversee Stronger AI Agents"
authors: "Xiao & Phuong"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2606.11998v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:misbehavior, signal:env-label, lever:prompt-pipeline, contribution:method, contribution:analysis, motivation:monitoring, motivation:scalable-oversight, domain:agentic, domain:code, scale:small, scale:large, scale:closed, eval:adversarial, eval:monitor-scope, eval:confound-control, eval:specificity, factor:cot-length, model:glm-5, model:kimi-k2.5, model:deepseek-v4-pro, model:gpt-5.4, model:qwen3-8b, model:gpt-4.1-mini, metric:tpr-at-fixed-fpr]
---
**TL;DR** Proposes bootstrapped monitoring, where a weak trusted model audits an untrusted monitor's transparent CoT for collusion: usually beats trusted-only monitoring given raw CoT, but not summarized CoT.
**Problem** As the capability gap widens and frontier CoT turns opaque, weak trusted monitors may no longer reliably judge agents' actions.
**Method** An untrusted monitor with transparent CoT scores the agent's actions, and a weak trusted model audits that CoT and verdict for collusion. Tested on BashArena side tasks with prompted collusion (default, needle, codewords) and automated red teaming, scored as catch rate at ≤3% FPR.
**Findings** With raw CoT, beats trusted-only under collusion in most cells (worst prompt loses on short GPT-5.4 rollouts with GPT-4.1 Mini T). Catch rises from ~60% to ~95% with rollout length (~30% per-step leak). Red teaming cannot push detection below 80% on long rollouts, but reaches ~20% on short ones until blue-team re-prompting of T restores ~70% catch. With summarized CoT (GPT-5.4), below trusted-only in 5/6 cells, ~28pp on average.
**Limits** Collusion is prompted, not trained. BashArena only. Red teaming on two configurations. Preprint, no code release mentioned.

**Relations**
- (none)

**New tags**
- (none)
