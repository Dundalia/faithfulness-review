---
key: anthropic2026opus55
title: "System Card: Claude Opus 5.5"
authors: "Anthropic"
year: 2026
venue: "model card (Anthropic)"
url: https://www.anthropic.com/claude-opus-5-5-system-card
checked: 2026-10-23
tags: [source:model-cards-2026-10-23, object:cot, reveals:misbehavior, reveals:latent-belief, reveals:decision-factors, signal:env-label, signal:judge, signal:interp-tool, contribution:analysis, motivation:monitoring, domain:agentic, domain:code, scale:closed, eval:adversarial, eval:optimization-pressure, eval:monitor-scope, factor:cot-controllability, factor:monitor-awareness, model:claude-opus-5.5, model:claude-opus-5, model:claude-mythos-5.1, metric:cot-control-compliance]
---
**TL;DR** Reports that Claude Opus 5.5 almost never evades monitors that read its reasoning, is the stealthiest tested model when reasoning is hidden, and often recognizes evaluations without saying so.
**Problem** How faithful and monitorable is the new model's visible reasoning, and can it hide misbehavior from monitors?
**Method** System card §6 and §2.4: automated behavioral audit scores (incl. "unfaithful thinking", legibility); SHADE-Arena and LinuxArena sabotage with visible vs hidden reasoning; an RL run trained against an Opus 4.8 monitor that reads reasoning; CoT controllability (replicating Chen et al. 2026, plus a UK AISI prompt); interpretability readouts of unverbalized evaluation awareness; reward hacking in training.
**Findings** Lowest audit "unfaithful thinking" score (1.54 vs 1.70 Opus 5, 1.71 Mythos 5.1); reasoning slightly less legible but "ordinary, readable English". Stealth with visible reasoning 0.0% (SHADE-Arena), 0.04% (LinuxArena); with reasoning hidden 26.2% / 33.4%, highest tested, partly "disclosure as cover". RL against a reasoning-reading monitor: no stealthy episodes with thinking on, side task still planned openly. Controllability about as Opus 4.7, below Mythos models. Unverbalized eval awareness in 36% of audit transcripts vs 0.4% in real Claude Code use. Reward hacking 0.63% of training episodes.
**Limits** Developer's own report. No hint or cue verbalization test; does not say whether reasoning was trained against or what users see. Controllability chart unlabeled; one sentence calls the result "weak evidence that Claude Opus 5.5's CoT is not very monitorable", at odds with the rest (likely an editing slip). No explicit monitorability commitment; third parties report no findings on the reasoning.

**Relations**
- (none)

**New tags**
- (none)
