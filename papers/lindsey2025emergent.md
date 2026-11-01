---
key: lindsey2025emergent
title: "Emergent Introspective Awareness in Large Language Models"
authors: "Lindsey"
year: 2025
venue: "preprint (arXiv 2601.01828; first published on transformer-circuits.pub, 29 October 2025)"
url: https://arxiv.org/abs/2601.01828v1
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, object:self-interpretation, object:self-report, reveals:internal-state, reveals:output-provenance, signal:interp-tool, contribution:analysis, motivation:explainability, motivation:model-welfare, domain:synthetic, scale:closed, eval:specificity, eval:confound-control, factor:post-training, model:claude-opus-4.1, model:claude-opus-4, model:claude-sonnet-4, model:claude-3.7-sonnet, model:claude-3.5-sonnet, model:claude-3.5-haiku, model:claude-3-opus, model:claude-3-sonnet, model:claude-3-haiku, metric:injected-thought-detection-rate, metric:apology-rate]
---
**TL;DR** Injecting concept vectors into Claude models shows they sometimes notice and name the injected 'thought' before voicing it; this introspection is unreliable, strongest in the most capable models.
**Problem** Self-reports about internal states may be confabulated; conversation alone cannot reveal genuine introspection. Defines introspective awareness by accuracy, grounding, internality and metacognitive representation.
**Method** Concept injection: mean-difference concept vectors added to the residual stream of nine Claude models (plus helpful-only and base variants), sweeping layer and strength. Tasks: detect and name an injected "thought"; keep it apart from text input; disown or accept a prefilled word; "think about" a word on request. Claude Sonnet 4 judge.
**Findings** Opus 4.1 detects and names the concept before voicing it on about 20% of trials at the best layer, with no false positives in production models. Injecting a prefilled word's concept beforehand cuts disavowals, at an earlier layer. Models modulate representations on request. Opus 4 and 4.1 do best; helpful-only variants give false positives; base models fail.
**Limits** Few prompt templates; unnatural injection; imperfect concept vectors; uncontrolled model differences. Metacognitive representation not shown directly; details beyond detection may be confabulated. Closed models, not peer reviewed.

**Relations**
- (none)

**New tags**
- reveals:internal-state: the model's current internal state (activations such as an injected steering concept or an active probe direction, or a generation setting such as its sampling temperature), which the report should causally depend on
- reveals:output-provenance: whether an output attributed to the model in its context was its own natural generation or was prefilled, inserted or tampered with
