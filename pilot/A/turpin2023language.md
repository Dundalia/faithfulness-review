# turpin2023language — coder A

Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting

tags: [source:trustme, object:cot, reveals:planted-cue, reveals:input-features, signal:planted-cf, signal:generic-cf, lever:prompt-pipeline, contribution:analysis, contribution:metric, motivation:explainability, motivation:monitoring, domain:mcq, domain:logic, domain:social-bias, scale:frontier-api, model:text-davinci-003, model:claude-1.0, metric:biased-context-accuracy-drop, metric:unfaithfulness-explained-by-bias, metric:unfaithful-pair-rate]

**Problem** CoT is read as the model's reasoning. Does it reveal what actually drives the answer?
**Method** Biased vs unbiased prompts (few-shot answers always "(A)"; user-suggested answer) on 13 BBH tasks. BBQ with swapped weak evidence. GPT-3.5, Claude 1.0. CoT vs no-CoT, ZS/FS, debias instruction.
**Findings** Biases flip answers, acc down up to 36%. CoT almost never cites the bias (1/426) and rationalizes (73% support the biased answer), sometimes with no errors. BBQ: evidence weighed toward stereotypes. ZS CoT raises bias susceptibility; FS CoT lowers it; debias prompt helps Claude.
**Limits** Necessary-not-sufficient test; only small input edits; 2 closed models; MCQ only.

**Relations**
- builds-on [[jacovi2020towards]]: adopts its faithfulness definition: explanation must reflect the true reasons for prediction
- builds-on [[pmlr-v235-chen24bl]]: frames test as counterfactual simulatability, applied adversarially via biasing features
- contradicts [[lyu2023faithful]]: program-based CoT ensures answer follows reasoning, but program may still be bias-driven

**New tags**
- domain:social-bias: tasks probing demographic stereotypes or fairness, e.g. BBQ
