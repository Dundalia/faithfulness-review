---
key: cachin1998information
title: "An Information-Theoretic Model for Steganography"
authors: "Cachin"
year: 1998
venue: "Information Hiding Workshop 1998; revised in Information and Computation (2004)"
url: https://eprint.iacr.org/2000/028
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, contribution:theory]
---
**TL;DR** Models a passive warden's steganalysis as hypothesis testing and measures stegosystem security by the relative entropy between covertext and stegotext distributions, which bounds any detector.
**Problem** Steganographic security needs a formal model: when can a passive warden not tell stegotext from innocent covertext?
**Method** Detection framed as hypothesis testing between the covertext (C) and stegotext (S) distributions, under a known covertext distribution and a passive adversary.
**Findings** Relative entropy between the C and S distributions bounds any detector; ε-secure if at most ε, perfectly secure if zero. Secure schemes exist if the covertext distribution meets certain conditions; a universal stegosystem needs no knowledge of it beyond independently repeated experiments. Restated as D_KL(P1‖P0) ≤ ε (arXiv 2602.23163, App. D).
**Limits** Full text is the author's revised version (2004, cachin.com), not the 1998 workshop paper. Security is relative to a covertext distribution that the users are assumed to know (relaxed only for the universal stegosystem); passive warden only.

**Relations**
- (none)

**New tags**
- (none)
