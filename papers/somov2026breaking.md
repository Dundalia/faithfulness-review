---
key: somov2026breaking
title: "Breaking the Chain: A Causal Analysis of LLM Faithfulness to Intermediate Structures"
authors: "Somov, Chaichuk, Ershov et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2603.16475v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:cot-intervention, signal:output-agreement, lever:prompt-pipeline, lever:architecture, lever:preference, updates:behavior, contribution:metric, contribution:analysis, contribution:method, contribution:negative-result, motivation:explainability, domain:classification, domain:code, scale:small, scale:mid, scale:large, eval:confound-control, eval:scaling, factor:cot-necessity, model:qwen3-8b, model:llama-3.1-8b, model:qwen3-32b, model:qwen3-235b-a22b, model:llama-3.1-70b, model:gemma-2-2b, metric:f-id, metric:f-ood, metric:f-strong]
---
**TL;DR** Tests whether LLM decisions follow their own intermediate structures (rubrics, queries, traces) by editing them: often they do not, and offloading execution to tools largely closes the gap.
**Problem** Schema-guided reasoning produces editable rubrics, checklists, queries or execution traces. Do the final decisions causally follow these structures?
**Method** Correct or counterfactually edit the model's own mediator on tasks where a deterministic map fixes the new answer, then re-prompt. Metrics F_ID vs F_Strong. 12 open models (1.7B–235B, thinking off) on RiceChem, AVeriTeC, TabFact and CRUXEval. Case studies: tool externalization, stronger prompts, DPO on faithful-vs-stubborn pairs. Code released.
**Findings** Mean F_ID–F_Strong gap ~18–23 pp on 3 of 4 datasets. Counterfactual edits are followed more often than corrections. CRUXEval: larger Qwen models bypass the trace (inverse scaling). Tools mostly cut the gap below 0.03. Prompting gives inconsistent gains. DPO raises F_Strong (Qwen3-8B RiceChem 0.52→0.73), accuracy flat or up, but Qwen3-8B AVeriTeC stays flat (0.31→0.29).
**Limits** Needs gold mediators and deterministic mappings. Open models only, non-reasoning mode. DPO tested on two 8B models only, trains directly on the edited-mediator following that F_Strong scores, and the train/test split is not reported.

**Relations**
- (none)

**New tags**
- (none)
