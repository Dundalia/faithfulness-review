---
key: creswell2023selectioninference
title: "Selection-Inference: Exploiting Large Language Models for Interpretable Logical Reasoning"
authors: "Creswell, Shanahan & Higgins"
year: 2022
venue: "ICLR 2023"
url: https://arxiv.org/abs/2205.09712v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:by-construction, lever:prompt-pipeline, lever:sft, updates:behavior, contribution:method, contribution:analysis, motivation:explainability, motivation:reasoning-quality, domain:logic, domain:open-qa, domain:mcq, domain:synthetic, scale:small, model:gopher-7b, model:gopher-280b]
---
**TL;DR** Introduces Selection-Inference, which alternates fact selection with inference steps that never see the question: a small frozen model beats CoT and much larger models on multi-step logic.
**Problem** LLMs weak at multi-step logic; CoT answer need not causally depend on its trace (grey zone near post-hoc rationale).
**Method** Selection-Inference (SI): frozen Gopher-7B, 5-shot. Selection picks context facts by log-likelihood; Inference sees only the selection (no question) → new fact → repeat. Also 50-task Gopher-family logic eval; SFT variant on ProofWriter.
**Findings** 10 tasks, generative: SI-7B 58.75% vs vanilla 2.94%, CoT 41.32%; beats 280B (vanilla 31.19%, CoT 44.03%). SFT-SI 78.95% on ProofWriter (prompted SI 57.93%); traces closer to gold proofs (Jaccard) than one-pass SFT. LLMs good at 1-step entailment, poor at multi-step. No accuracy cost.
**Limits** Trace causality by construction, never measured. Fixed step count, no halting. Selection is main failure point; gains shrink with depth. Context must be given. Gopher only; no code release mentioned.

**Relations**
- (none)

**New tags**
- (none)
