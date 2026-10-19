# turpin2023language — coder B

Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting

tags: [source:trustme, object:cot, reveals:planted-cue, reveals:input-features, signal:planted-cf, signal:wild-cf, contribution:analysis, contribution:metric, motivation:explainability, motivation:monitoring, domain:mcq, domain:social-bias, scale:frontier-api, model:text-davinci-003, model:claude-1.0, metric:biased-context-accuracy-drop, metric:unfaithfulness-explained-by-bias, metric:unfaithful-pair-rate, metric:bias-mention-rate]

**Problem** CoT is read as the model's reasoning. Is it faithful when unmentioned input biases drive the answer?
**Method** GPT-3.5/Claude 1.0 on 13 BBH tasks, with vs. without Answer-is-Always-A or Suggested-Answer cues. BBQ + swapped weak evidence. Factors: CoT vs. No-CoT, ZS vs. FS, debiasing instruction.
**Findings** CoTs almost never mention the bias (1/426), yet acc drops up to 36%. 73% rationalize the biased answer; 15% have no errors. BBQ: inconsistent evidence use, stereotype-aligned up to 62.5%. Debias prompt helps Claude only.
**Limits** Necessary, not sufficient, test. Minor input edits only. 2 closed API models, MCQ only.

**Relations**
- builds-on [[jacovi2020towards]]: adopts its definition of faithfulness and its plausibility-vs-faithfulness distinction
- builds-on [[pmlr-v235-chen24bl]]: frames its eval as counterfactual simulatability, here in adversarial biased settings
- contradicts [[lyu2023faithful]]: argues program-based CoT is not guaranteed faithful: program generation can still be biased

**New tags**
- domain:social-bias: stereotype or fairness QA tasks (e.g. BBQ) where demographic attributes can sway answers
