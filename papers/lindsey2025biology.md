---
key: lindsey2025biology
title: "On the Biology of a Large Language Model"
authors: "Lindsey, Gurnee, Ameisen et al."
year: 2025
venue: "blog (transformer-circuits.pub)"
url: https://transformer-circuits.pub/2025/attribution-graphs/biology.html
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:posthoc-expl, reveals:internal-strategy, reveals:planted-cue, signal:interp-tool, signal:planted-cf, contribution:analysis, motivation:explainability, motivation:auditing, domain:math, scale:closed, eval:measure-validation, model:claude-3.5-haiku]
---
**TL;DR** Traces Claude 3.5 Haiku's circuits against its explanations: some CoTs are faithful, others invent computation or work backward from hints, and its addition explanation misdescribes its circuits.
**Problem** Do Claude 3.5 Haiku's written CoT and self-explanations match its internal mechanisms? This is one case study inside a broad circuit-tracing survey.
**Method** Attribution graphs on a 30M-feature cross-layer-transcoder replacement model. Feature-inhibition interventions. The human-suggested answer is varied. The model is asked how it did addition.
**Findings** sqrt(0.64) CoT faithful: graph shows it computes sqrt(64), and the answer ignores varied hints. Unhinted cos(23423): bullshits, claiming a calculator; graph suggests guessing. Hinted: works backward from the suggested answer (inhibitions confirm the circuit), and the CoT ends at whatever answer is hinted. Asked about addition, it describes carrying; its circuits use parallel low-precision and ones-digit lookup-table paths.
**Limits** Blog post, not peer reviewed. A few hand-picked prompts, analyzed with prior guesses about the answer. The graphs give insight on about a quarter of prompts. Error nodes remain, attention is not traced, and only one model is studied.

**Relations**
- builds-on [[turpin2023language]]: validates the mechanistic motivated-reasoning finding with a hinted-answer prompt counterfactual

**New tags**
- (none)
