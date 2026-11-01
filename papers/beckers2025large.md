---
key: beckers2025large
title: "Large Language Models as Nondeterministic Causal Models"
authors: "Beckers"
year: 2025
venue: "KR 2026 (accepted)"
url: https://arxiv.org/abs/2509.22297v2
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, contribution:theory, motivation:explainability]
---
**TL;DR** Models language models as nondeterministic causal systems, making prompt counterfactuals accessible through ordinary sampling and expressing stability as an optional bias.
**Problem** Existing counterfactual generation depends on a particular sampling implementation and imposes additional constraints.
**Method** Nondeterministic causal semantics; autoregressive hierarchy-collapse proof; selection functions for biased counterfactuals.
**Findings** Changed-prompt counterfactual distributions equal observational distributions under the intended interpretation; stability can be imposed without Gumbel-specific constraints.
**Limits** Only prompt (root) counterfactuals; no interventions on intermediate tokens or internals. Depends on the chosen stochastic semantics. Large output spaces complicate estimation; application-specific filters remain unimplemented. No empirical evaluation.

**Relations**
- (none)

**New tags**
- (none)
