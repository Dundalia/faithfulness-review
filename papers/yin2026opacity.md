---
key: yin2026opacity
title: "Opacity in Discrete Event Systems: A Perspective and Overview"
authors: "Yin"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2602.22713v1
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, contribution:survey]
---
**TL;DR** Surveys opacity in discrete event systems, the requirement that an observer never knows for sure the system is in a secret state, with its verification and enforcement methods.
**Problem** Newcomers lack a compact entry point to discrete-event-system opacity: many notions, observation models and enforcement schemes spread over two decades of literature.
**Method** Informal overview: DES G = (X, Σ, δ, X0), observation map P, state estimates; notions (current-state, initial-state, initial-final, K-step, infinite-step, pre-opacity); verification by observer constructions; enforcement by supervisory control, sensor activation/information release, obfuscation (insertion/edit functions); stochastic, timed, Petri-net and continuous models; applications.
**Findings** Verification PSPACE-hard (∀∃ alternation) even under natural projection, EXPSPACE-hard for modular systems; undecidable for general timed automata and (generally) Petri nets, often for belief-threshold stochastic opacity. Supervisory enforcement under incomparable observations open for nearly two decades. Diagnosability = "always eventually know"; infinite-step opacity = "always not know".
**Limits** Overview without new results; definitions given in words, formal versions deferred to cited works. Not about LLMs (LLM privacy only flagged as an open direction); intruders mostly passive, worst-case.

**Relations**
- (none)

**New tags**
- contribution:survey: headline contribution is an overview or tutorial of an existing literature, without new results.
