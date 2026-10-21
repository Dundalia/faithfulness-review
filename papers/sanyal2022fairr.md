---
key: sanyal2022fairr
title: "FaiRR: Faithful and Robust Deductive Reasoning over Natural Language"
authors: "Sanyal, Singh & Ren"
year: 2022
venue: "ACL 2022"
url: https://arxiv.org/abs/2203.10261v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:decision-factors, reveals:cot-reliance, signal:by-construction, signal:generic-cf, lever:architecture, lever:prompt-pipeline, lever:sft, updates:behavior, contribution:method, motivation:explainability, motivation:reasoning-quality, domain:logic, domain:synthetic, scale:small, eval:ood, model:roberta-large, model:t5-large]
---
**TL;DR** Introduces FaiRR, a modular deductive reasoner whose composer sees only selected premises, making proofs faithful by construction: near-baseline accuracy, more robust to perturbations and faster.
**Problem** Single-model proof+inference generators (ProofWriter) see the whole theory → inference may use premises beyond the stated proof → proofs possibly unfaithful.
**Method** FaiRR: RoBERTa-large rule selector → fact selector → T5-large composer that sees only the selected premises, iterated; the proof is a by-product of the selections; each module SFT'd on decomposed ProofWriter data.
**Findings** ≈PW-Iter on D0-D3 (EA 99.2 vs 99.8, small cost); more robust to subject perturbations (consistency 96.4 vs 87.6); 3.5× faster; errors localizable to a module; manual ablation: PW errs once irrelevant premises are added back. Code released.
**Limits** Synthetic rulebases, small models; early-stop errors → weaker on unseen depths (-3% proof acc vs PW-Iter on D5); slightly worse than PW-Iter on attribute perturbations; poor zero-shot on ParaRules.

**Relations**
- (none)

**New tags**
- (none)
