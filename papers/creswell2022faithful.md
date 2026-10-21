---
key: creswell2022faithful
title: "Faithful Reasoning Using Large Language Models"
authors: "Creswell & Shanahan"
year: 2022
venue: "preprint"
url: https://arxiv.org/abs/2208.14271v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:correctness, signal:by-construction, signal:generic-cf, lever:prompt-pipeline, lever:sft, lever:inference-time, lever:architecture, updates:behavior, contribution:method, motivation:explainability, motivation:reasoning-quality, domain:logic, domain:mcq, scale:small, model:chinchilla-7b, metric:context-ablation-drop, metric:made-up-fact-rate, metric:proof-step-jaccard]
---
**TL;DR** Proposes a selection-inference architecture of fine-tuned modules whose answers must come from the reasoning trace, mostly beating baselines on ProofWriter and EntailmentBank with almost no made-up facts.
**Problem** Single-call LM answers are opaque. CoT-style traces can hallucinate facts or reach the answer without using the trace ("cheating" from the question).
**Method** Fine-tuned 7B Chinchilla modules. Selection picks context sentence labels → Inference sees only the selection, iterated. Halter answers from the final inference plus minimal extra input, else 'Unknown'. Value-LM step-level beam search. Tested on ProofWriter and EntailmentBankQA.
**Findings** SI+Halter+Search: 88.1% on PW, 78.1% on EB; beats Proof+Answer and EntailmentWriter. Vs Proof-Only+Halter+Search: higher on PW, lower on EB Task 2 (72.9 vs 76.2%). Made-up facts ≤1% vs up to 60% for baselines. Random/incomplete context hurts SI far more than Proof+Answer and EntailmentWriter → answers use the trace. Halter's 'Unknown' raises precision.
**Limits** Correct steps not guaranteed (validity holds only if inferences are correct). Needs a given context and gold proofs for SFT. 7B only, two synthetic/science datasets. No code release mentioned.

**Relations**
- extends [[creswell2023selectioninference]]: fine-tunes Selection-Inference modules; adds learned halter and value-guided beam search

**New tags**
- (none)
