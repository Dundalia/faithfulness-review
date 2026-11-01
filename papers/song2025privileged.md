---
key: song2025privileged
title: "Privileged Self-Access Matters for Introspection in AI"
authors: "Song, Lederman, Hu & Mahowald"
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2508.14802v1
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, object:self-report, reveals:internal-state, signal:env-label, contribution:position, contribution:analysis, motivation:explainability, domain:synthetic, scale:closed, eval:privileged-access, eval:confound-control, factor:elicitation, model:gpt-4o, model:gpt-4.1, model:gemini-2.0-flash, model:gemini-2.5-flash, metric:temperature-report-accuracy]
---
**TL;DR** Argues introspection requires privileged self-access, more reliable than any third-party process of no greater computational cost; LLMs' temperature self-reports track prompt framing, with no self-advantage over other models.
**Problem** Comşa & Shanahan's "lightweight" definition counts any accurate, causally linked self-report as introspection, even an inference a third party could make the same way.
**Method** Proposes a thicker definition based on privileged self-access. Study 1: the C&S temperature self-report task on four API models, varying temperature (0 to 2), framing (factual, neutral, crazy) and subject. Study 2: self-reflection vs within- and across-model prediction of the generator's temperature.
**Findings** Reports follow framing: crazy → HIGH, factual → LOW at any temperature. Study 2 accuracy at chance in all settings; self-reflection no better than across-model prediction → no privileged self-access, so no introspection by the thick definition.
**Limits** Short proof of concept: one internal state, binary judgments, four closed models, no fine-tuning; original Gemini models unavailable. Reliability and computational cost unquantified.

**Relations**
- builds-on [[song2025language]]: operationalizes introspection, as there, as privileged self-access tested by comparing a model's report on itself with other models' predictions from the same information
- builds-on [[binder2024looking]]: takes from it (with song2025language) the requirement that introspection give privileged self-access, tested against other models

**New tags**
- reveals:internal-state: the model's current internal state (activations such as an injected steering concept or an active probe direction, or a generation setting such as its sampling temperature), which the report should causally depend on
