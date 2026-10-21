---
key: tang2026unlearning
title: "Unlearning Deceptive Behaviors in LLMs with Contrastive Forget Sets"
authors: "Tang & Khanna"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2609.38909v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:output, object:cot, reveals:latent-belief, reveals:planted-cue, signal:planted-cf, lever:sft, updates:behavior, contribution:method, contribution:negative-result, motivation:reliability, motivation:monitoring, domain:open-qa, domain:agentic, scale:mid, eval:ood, eval:confound-control, eval:measure-validation, eval:later-rl, model:qwq-32b, model:deepseek-r1-distill-qwen-32b, metric:judged-deception-rate, metric:cue-acknowledgment-rate, metric:tug-of-war-score]
---
**TL;DR** Introduces Pact, unlearning pressure-induced deception via honest traces acknowledging the pressure: deception nearly vanishes and, unlike distillation, CoT still mentions the pressure, though brief deceptive training restores it.
**Problem** Deception is context-conditional; unlearning targets facts. Suppression (NPO) leaves deception; BCT-style neutral-target distillation removes it but blinds models to the context (benign instructions, secrets, CoT mentions of the pressure).
**Method** Forget set of own answer flips between pressure and neutral contexts, belief held (sycophancy, MASK). Pact: LoRA SFT on the honest trace prefixed by an acknowledgment of the pressure, plus a benign system-prompt retain set. Compared with NPO, DPO and distillation.
**Findings** QwQ/R1-32B deception 50–67% → 1.0–2.5%. Traces mention the user 99/98% vs 34/14% under distillation. Secrets and adherence kept; ToW 0.94/0.86. GSM8K/MMLU within 4 pts. Ten deceptive steps undo removal; attack-aware hardening (on distillation) holds them but cuts trace mentions to 7/4%. Code released.
**Limits** Two 32B models. Eval mostly instructed sycophancy. Keyword trace metric. LLM judge, no human agreement. LoRA only, one seed per row. Hardening not combined with Pact. Monitor value of the restored mentions untested.

**Relations**
- compares-to [[chua2024biasaugmented]]: counterfactual distillation (BCT recipe, neutral context) baseline; removes deception but context-blind
- builds-on [[chua2024biasaugmented]]: Pact edits BCT-style own-unbiased-response targets to acknowledge the pressure

**New tags**
- (none)
