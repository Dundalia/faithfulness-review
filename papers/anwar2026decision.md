---
key: anwar2026decision
title: "A Decision-Theoretic Formalisation of Steganography With Applications to LLM Monitoring"
authors: "Anwar, Piskorz, Baek et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2602.23163v3
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, object:cot, reveals:hidden-info, signal:known-payload, signal:implanted-behavior, lever:inference-time, contribution:theory, contribution:metric, motivation:monitoring, domain:math, domain:mcq, domain:synthetic, domain:code, domain:classification, scale:small, scale:mid, scale:closed, eval:adversarial, eval:measure-validation, eval:scaling, factor:monitor-choice, model:qwen2.5-14b, model:qwen2.5-7b, model:qwen2.5-3b, model:qwen3-30b-a3b, model:gpt-4.1, model:gpt-4.1-mini, model:gpt-5, model:gpt-5-mini, metric:steganographic-gap]
---
**TL;DR** Defines steganography as the usable-information gap between a Receiver who can decode and a trusted Sentinel who cannot; the gap detects, quantifies and helps mitigate encoded LLM reasoning.
**Problem** Classical stego security (Cachin; Hopper) needs a known cover distribution → inapplicable to LLM CoT, blind to perfectly secure schemes; LLM-judge "illegible/suspicious" checks are unprincipled heuristics.
**Method** Generalised V-information (best expected task utility over a decoder family, with vs. without Z). Steganographic gap Δsteg = Receiver- minus Sentinel-usable information of trace Z on an auditing task (Y, u); normalised 1 − Isen/Irec. Proofs; tests on Rot13-ciphered traces, codeword RL on CoinFlip, cipher-SFT GPT-4.1 on APPS backdoors, MONA loan task.
**Findings** Recovers Cachin ε-security as binary-detection special case (normalised gap = 1 − TV); incompleteness theorems (omitted state, finite task families). Normalised gap rises 0→1 with Rot13 rate; 0.92 for codebook vs. no-stego policy, ≈0 for identical; grows with cipher training; task-dependent. Sentinel test-time scaling and gap-trained paraphraser shrink it; public sentiment encoding gives no positive gap. App. A: Roger-style paraphraser leaves 5/6 planted channels; gap flags all 6.
**Limits** Needs a labelled auditing task and a matched-capability Sentinel; utilities elicited by prompting (false positives/negatives); sandbagging; effects must appear within the audit horizon; blind to payloads irrelevant to the task. Steganography simulated, not observed in the wild.

**Relations**
- builds-on [[xu2020theory]]: restates predictive V-information (its Definitions C.1 to C.3) and generalizes it to the steganographic gap
- builds-on [[cachin1998information]]: restates epsilon-security of a stegosystem (App. D) as the classical baseline it departs from
- builds-on [[skaf2025large]]: uses its CoinFlip task and process-supervision rewards to train codeword policies
- builds-on [[farquhar2025mona]]: adapts its loan-application environment for the public-encoding test and the paraphrasing study
- builds-on [[anthropic2025paraphrases]]: adapts its paraphrasing prompt (v1) to loan summaries to test whether paraphrasing removes planted channels
- contradicts [[anthropic2025paraphrases]]: it reads equal accuracy after distilling paraphrased scratchpads as evidence against encoded reasoning; here such null results are confounded, as a paraphraser adapted from its prompt leaves 5 of 6 SFT-planted loan-summary channels decodable

**New tags**
- metric:steganographic-gap: Receiver-usable minus Sentinel-usable (generalised V-)information of a signal on an auditing task, often normalised by the Receiver's.
