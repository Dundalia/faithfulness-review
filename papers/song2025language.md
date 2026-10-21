---
key: song2025language
title: "Language Models Fail to Introspect About Their Knowledge of Language"
authors: "Song, Hu & Mahowald"
year: 2025
venue: "COLM 2025"
url: https://arxiv.org/abs/2503.07513v3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-prediction, reveals:hidden-behavior, signal:generic-cf, contribution:analysis, contribution:metric, motivation:explainability, motivation:cognitive-science, domain:classification, domain:text-continuation, scale:small, scale:mid, scale:large, eval:privileged-access, eval:confound-control, eval:measure-validation, eval:scaling, model:olmo-2-7b, model:olmo-2-13b, model:qwen2.5-72b, model:llama-3.1-70b, model:llama-3.1-405b, model:mistral-large-123b-2411, metric:prediction-behavior-correlation, metric:similarity-controlled-self-advantage, metric:meta-direct-kappa]
---
**TL;DR** Tests whether LLMs' prompted grammaticality and next-word judgments reflect their own string probabilities: alignment is weak, with no advantage for the model itself over similar models.
**Problem** Do LLMs' metalinguistic answers (grammaticality, next-word choice) reflect their own string probabilities, with no fine-tuning?
**Method** 21 open models, 1.5-405B. Data: BLiMP/Linguistic Inquiry minimal pairs and 4 word-prediction sets (incl. nonsense, random). Correlate model A's prompted preference with model B's log-prob preference. Regress on similarity (seed, base/instruct, family, Direct-Direct r) to test for a same-model effect.
**Findings** Both methods accurate but kappa about 0.25; in Exp. 1, Meta-Direct r never above .25, even within model. Similarity predicts alignment (Exp. 1 r=.32), but no self advantage, even against OLMo seed variants or among models of 70B and up. Larger models' prompted answers track probabilities better.
**Limits** Open weights only, >70B 4-bit quantized; two linguistic domains; forced-choice logit readout; null result may not hold for larger closed models. Code and data released.

**Relations**
- builds-on [[binder2024looking]]: adopts self-vs-cross-model prediction comparison, adds control for model similarity
- contradicts [[binder2024looking]]: Binder infers privileged self-access; here none without fine-tuning once similarity is controlled

**New tags**
- motivation:cognitive-science: faithful self-reports as a valid instrument for studying a model's knowledge or cognition with human-style paradigms (e.g. grammaticality or acceptability judgments in linguistics) instead of direct probability measurement
