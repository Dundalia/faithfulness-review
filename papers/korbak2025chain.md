---
key: korbak2025chain
title: "Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety"
authors: "Korbak, Balesni, Barnes et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2507.11473v2
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:misbehavior, contribution:position, motivation:monitoring]
---
**TL;DR** Argues reasoning in natural language creates a fragile opportunity to monitor CoT for misbehavior, threatened by outcome RL, CoT pressure and latent reasoning, and calls for monitorability evaluations.
**Problem** Reasoning models think in natural language → CoT can be monitored for intent to misbehave; monitorability may be fragile, poorly understood.
**Method** Position paper, no experiments. Externalized reasoning property: hard tasks force Transformers to use CoT as working memory, human-readable by default. Separates necessity vs propensity to think out loud.
**Findings** CoT often reveals misbehavior, misalignment signals, eval flaws. Threats: scaled outcome RL, direct/indirect CoT pressure, latent-reasoning architectures. Calls for monitorability evals (readability, latent reasoning, causal relevance, end-to-end), system-card reporting, use in train/deploy decisions.
**Limits** Malign reasoning can stay in activations; low-reasoning harms missed; situationally aware models may obfuscate; preserving CoT may forgo process-supervision gains → complement, not replacement.

**Relations**
- builds-on [[baker2025monitoring]]: core evidence: CoT monitors catch reward hacking; CoT pressure induces obfuscation

**New tags**
- (none)
