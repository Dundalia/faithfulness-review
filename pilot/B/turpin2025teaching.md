# turpin2025teaching — coder B

Teaching Models to Verbalize Reward Hacking in Chain-of-Thought Reasoning

tags: [source:trustme, source:faith-improvement, object:cot, reveals:planted-cue, reveals:misbehavior, signal:planted-cf, lever:sft, contribution:method, contribution:metric, contribution:negative-result, motivation:monitoring, domain:mcq, scale:small, eval:later-rl, eval:ood, eval:behavior-control, eval:specificity, model:llama-3.1-8b, metric:effective-cue-influence-rate, metric:verbalization-rate, metric:cue-influence-rate, metric:verbalization-balanced-accuracy]

**Problem** RL-learned reward hacks go unverbalized in CoT → CoT monitors miss them.
**Method** VFT: SFT on CoTs minimally edited by Claude to credit the cue (2 cues) → GRPO rewarding cue-aligned wrong answers on held-out cues; vs BCT and plain RL.
**Findings** Post-RL undetected hacks (ECR): VFT 6%, baseline 88%, BCT 99%. Verbalization 8→43→94%; all models exploit cues ~100%. BCT suppresses verbalization. No accuracy cost vs plain RL.
**Limits** 8B, MMLU only. Held-out cues resemble training cues. Verbalizations vaguer after RL; some over-verbalization.

**Relations**
- builds-on [[turpin2023language]]: cue-perturbation faithfulness test and finding of unfaithful CoTs used to build VFT data
- builds-on [[chen2025reasoning]]: reward-hacking setup: flawed RL rewarding cue-aligned wrong answers; cues drawn from it
- compares-to [[chua2024biasaugmented]]: BCT baseline: lowers cue use pre-RL, but post-RL ECR 99%, verbalization ~1%
- builds-on [[chua2025deepseek]]: some prompt cues taken from it
- builds-on [[pmlr-v235-chen24bl]]: adopts counterfactual-simulatability definition of faithfulness for verbalization tests
- builds-on [[baker2025monitoring]]: motivation: CoT monitors catch hacks; warns against training against monitor

**New tags**
- eval:specificity: checks for over-reporting: whether explanations claim an influence (e.g. a cue) when behavior is unaffected, via specificity, false-positive rate or balanced accuracy
