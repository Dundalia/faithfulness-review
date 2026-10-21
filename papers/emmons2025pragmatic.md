---
key: emmons2025pragmatic
title: "A Pragmatic Way to Measure Chain-of-Thought Monitorability"
authors: "Emmons, Zimmermann, Elson & Shah"
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2510.23966v1
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:correctness, signal:judge, signal:cot-intervention, contribution:metric, contribution:analysis, motivation:monitoring, domain:mcq, domain:math, domain:open-qa, scale:closed, scale:large, eval:measure-validation, model:gemini-2.5-pro, model:gemini-2.5-flash, model:gpt-oss-120b, model:deepseek-r1, model:qwen3-235b-a22b, metric:cot-legibility, metric:cot-coverage]
---
**TL;DR** Proposes a prompted autorater scoring CoT legibility and coverage as a cheap default monitorability measure: it catches synthetic degradations, and current reasoning models score near ceiling.
**Problem** CoT monitorability may be lost to training/architecture shifts; faithfulness unmeasurable, stress-tests costly → need cheap default-monitorability measure.
**Method** Prompted autorater (Gemini 2.5 Pro) scores 0–4 legibility & coverage (all needed steps present) on correctly solved hard tasks (HLE, GPQA, ARC-AGI, AIME); sanity-checked on hand-crafted & synthetic degradations (Base64, step removal).
**Findings** Degradations cut targeted scores; originals ~100%. 5 reasoning models: legibility 97–99.9%, coverage 95–99.4%; lapses = convoluted text, R1 Chinese switching, missing steps. Similar with Gemini 2.5 Flash rater. Prompt released.
**Limits** Not adversarial; human monitor; preliminary prompt, coverage bar rater-dependent; MCQ random-guess loophole; not a training objective (Goodhart).

**Relations**
- builds-on [[emmons2025chain]]: uses its CoT-necessity condition to pick hard tasks; results consistent

**New tags**
- (none)
