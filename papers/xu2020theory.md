---
key: xu2020theory
title: "A Theory of Usable Information Under Computational Constraints"
authors: "Xu, Zhao, Song et al."
year: 2020
venue: "ICLR 2020 (talk)"
url: https://arxiv.org/abs/2002.10689v1
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, contribution:theory, domain:synthetic, domain:classification]
---
**TL;DR** Defines predictive V-information, usable information relative to an observer's predictor family: it generalizes mutual information, can be created by computation, is PAC-estimable, and aids structure learning.
**Problem** Shannon information ignores the observer's computational limits (encrypted text keeps full mutual information with its label) and is hard to estimate in high dimensions.
**Method** Predictive family V (with optional ignorance); V-entropy = best expected log-loss within V; V-information I_V(X→Y) = H_V(Y|∅) − H_V(Y|X); empirical estimator with Rademacher-complexity PAC bound; directed Chow-Liu structure learning on V-information.
**Findings** Recovers Shannon MI (V = Ω), trace of covariance, unnormalised R²; non-negative, zero under independence; can violate data processing; asymmetric. Chow-Liu trees beat CPC/NWJ/MINE (≈100 samples recover ground truth in one simulation); better gene-network AUC; recovers video-frame order; fair representations leak to other V.
**Limits** No general chain rule (H(X,Y) = H(X) + H(Y|X) fails); results hinge on the choice of V (too rich overfits, too simple misses structure); PAC bound assumes bounded log-densities; small-scale experiments.

**Relations**
- (none)

**New tags**
- (none)
