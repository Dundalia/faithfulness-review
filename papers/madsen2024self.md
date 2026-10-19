---
key: madsen2024self
title: "Are self-explanations from Large Language Models faithful?"
authors: "Madsen, Chandar & Reddy"
year: 2024
venue: "Findings of ACL 2024"
url: https://arxiv.org/abs/2401.07927v4
checked: 2026-10-15
tags: [source:trustme, object:posthoc-expl, reveals:decision-factors, signal:generic-cf, contribution:metric, contribution:analysis, motivation:explainability, domain:classification, domain:mcq, scale:small, scale:mid, eval:measure-validation, model:llama-2-70b, model:llama-2-7b, model:falcon-40b, model:falcon-7b, model:mistral-7b, metric:self-consistency-faithfulness, metric:counterfactual-validity, metric:redaction-unknown-rate]
---
**Problem** Self-explanations are convincing but may be unfaithful; API-only LLMs give no logits and refuse to answer when info is missing → logit-based erasure metrics don't work.
**Method** Inference-only self-consistency checks, re-classified in a fresh session: a counterfactual must get the requested label; with the listed words (feature attribution) or self-redacted text masked as [REDACTED], the answer must be "unknown". Tasks: IMDB, bAbI-1, MCTest, RTE. Models: Llama2 7B/70B, Falcon 7B/40B, Mistral 7B. Prompt/persona variants on Llama2-70B only.
**Findings** Faithfulness depends on model, task and explanation type. CFs consistently faithful only on IMDB (Llama2, Mistral); Falcon CFs never. FA/redaction mostly poor; Llama2-70B ok only on RTE, bAbI-1; Mistral FA (IMDB) and Falcon-40B redaction (IMDB, MCTest) beat other models. Usually ↑ with size (except Falcon). Llama2-70B robust to prompt variants. Redaction ≈ FA → masking not OOD.
**Limits** Faithfulness is binary per instance. Misclassified items dropped (low acc, possible class imbalance). Zero-shot, single sample. Assumes prompts understood. No closed models. Only 3 explanation types (2 similar). Code released.

**Relations**
- (none)

**New tags**
- (none)
