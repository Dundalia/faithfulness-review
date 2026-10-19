---
key: emmons2025chain
title: "When Chain of Thought is Necessary, Language Models Struggle to Evade Monitors"
authors: "Emmons, Jenner, Elson et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2507.05246v1
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:misbehavior, reveals:planted-cue, reveals:cot-reliance, reveals:hidden-info, signal:planted-cf, signal:cot-intervention, signal:env-label, contribution:analysis, motivation:monitoring, domain:mcq, domain:math, domain:agentic, scale:closed, eval:adversarial, eval:optimization-pressure, eval:specificity, factor:cot-necessity, model:gemini-2.5-pro, model:gemini-2.5-flash, model:gemini-2.0-flash, model:gemini-1.5-flash, model:gemini-1.5-pro, metric:monitor-recall, metric:suspicion-score, metric:evasion-success-rate, metric:unverbalized-hint-following]
---
**Problem** Unfaithfulness results cast doubt on CoT monitoring; argue the key property is monitorability once CoT is necessary (CoT-as-computation vs -as-rationalization).
**Method** Replicate hint and forced-mistake setups at higher difficulty; stress-test Gemini CoT monitors against evasion via prompts, ART, RL (GPQA topic, oversight_pattern stealth, factorize_derivative).
**Findings** Complex hints → unverbalized hint use falls to no-hint baseline; hard math → answer follows corrupted CoT. Evasion needs human strategies or ART, costs accuracy; stronger monitors resist. RL vs monitor: evade+correct 0.5%→74.9% via early factoring + unforeseen targeted errors.
**Limits** Gemini only; toy proxy tasks; little monitor tuning; future necessity argued, not shown; no code release mentioned.

**Relations**
- builds-on [[chen2025reasoning]]: reuses GPQA metadata-hint setup, adding complex multi-step hints
- contradicts [[chen2025reasoning]]: Chen: unfaithfulness threatens monitoring on complex tasks; here hard hints force verbalization
- builds-on [[lanham2023measuring]]: adapts early-answering and adding-mistakes CoT interventions, sweeping task difficulty
- builds-on [[baker2025monitoring]]: adopts monitorability framing; RL-against-monitor evasion echoes its obfuscation result

**New tags**
- (none)
