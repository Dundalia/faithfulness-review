---
key: shen2026detecting
title: "Detecting Unfaithful Chain-of-Thought via Circuit-Guided Internal-External Discrepancy"
authors: "Shen, Tan, Wang et al."
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://arxiv.org/abs/2605.25603v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, reveals:internal-strategy, signal:judge, contribution:metric, motivation:explainability, domain:mcq, domain:logic, domain:math, domain:professional, scale:small, eval:ood, model:llama-3.1-8b, metric:internal-external-fgw-discrepancy, metric:detection-accuracy, metric:detection-f1]
---
**TL;DR** Introduces CIE-Scorer, which flags unfaithful CoT from discrepancies between sentence-level circuits and hidden states: beats all baselines on every dataset, but needs white-box access and human labels.
**Problem** CoT-unfaithfulness detectors rely on text or answer-consistency signals and ignore internal computation; full circuit tracing is too costly for long CoTs.
**Method** CIE-Scorer: entropy plus counterfactual token selection → sentence-level transcoder circuits → GNN embeddings; FGW distance to a hidden-state sentence graph, margin-trained on FaithCoT-Bench human labels; Llama-3.1-8B.
**Findings** Best Acc/F1 on all 4 datasets vs 11 baselines (Table 1: Acc +3.3 to +11.5 points); 48-55% less memory than CRV, which runs out of memory on 2 datasets; post-hoc CoTs show feature-level and spurious chains structure-level discrepancy. Code released.
**Limits** Needs white-box access; one 8B model; supervised, trained per dataset on human labels; weak transfer involving AQuA; F1 gains small (1.4-4.2 points); text claims +5.4 Acc on AQuA vs 3.3 in Table 1; ICLR submission, under review.

**Relations**
- compares-to [[lanham2023measuring]]: Adding-mistakes, early-answering and paraphrasing tests run as instance-level detector baselines

**New tags**
- (none)
