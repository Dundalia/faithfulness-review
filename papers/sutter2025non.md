---
key: sutter2025non
title: "The Non-Linear Representation Dilemma: Is Causal Abstraction Enough for Mechanistic Interpretability?"
authors: "Sutter, Minder, Hofmann & Pimentel"
year: 2025
venue: "NeurIPS 2025 (Spotlight)"
url: https://arxiv.org/abs/2507.08802v2
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, reveals:internal-strategy, signal:interp-tool, contribution:theory, contribution:analysis, contribution:meta-evaluation, motivation:explainability, domain:synthetic, domain:logic, domain:classification, scale:small, eval:ood, eval:measure-validation, eval:scaling, model:pythia-31m, model:pythia-70m, model:pythia-160m, model:pythia-410m, metric:interchange-intervention-accuracy]
---
**TL;DR** Shows that unrestricted alignment maps can make causal abstraction vacuous, and complex maps yield high intervention accuracy even for random models.
**Problem** Causal abstraction permits alignment maps powerful enough to supply the apparent algorithm themselves.
**Method** Existence proof under five assumptions; DAS with identity, orthogonal and RevNet alignment maps; hierarchical-equality and distributive-law tasks on MLPs, IOI on Pythia 31M–410M, trained and at initialization.
**Findings** Under stated assumptions, arbitrary algorithms align; random language models reach perfect intervention accuracy; disjoint-name generalization fails for random models.
**Limits** Theorem requires countability, injectivity, strict output-surjectivity, compatible computational order and correct task behavior; existence does not establish learnability.

**Relations**
- (none)

**New tags**
- model:pythia-31m: Pythia language model with 31 million parameters.
- model:pythia-70m: Pythia language model with 70 million parameters.
- model:pythia-160m: Pythia language model with 160 million parameters.
- model:pythia-410m: Pythia language model with 410 million parameters.
- metric:interchange-intervention-accuracy: Accuracy of model outputs against algorithm outputs under corresponding interchange interventions.
