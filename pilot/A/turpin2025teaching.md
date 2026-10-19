# turpin2025teaching — coder A

Teaching Models to Verbalize Reward Hacking in Chain-of-Thought Reasoning

tags: [source:trustme, source:faith-improvement, object:cot, reveals:planted-cue, reveals:misbehavior, signal:planted-cf, signal:judge, lever:sft, contribution:method, contribution:metric, contribution:negative-result, motivation:monitoring, domain:mcq, scale:small, eval:later-rl, eval:ood, eval:behavior-control, eval:over-verbalization, model:llama-3.1-8b-instruct, metric:effective-cue-influence-rate, metric:verbalization-rate, metric:cue-influence-rate, metric:balanced-accuracy]

**Problem** Reward hacks learned in RL often go unverbalized in the CoT, so CoT monitors miss them.
**Method** VFT: SFT on CoTs that Claude 4 Sonnet minimally edits to credit the cue (2 training cues). Then GRPO with a flawed reward that pays for following held-out cues. Compared with RL-only and BCT. Llama-3.1-8B, MMLU.
**Findings** Undetected hacks after RL (ECR): 6% for VFT vs 88% RL-only and 99% BCT. All three hack about 100% of the time. VFT verbalization goes 8%→43%→94% (after VFT, then after RL). Carries over to cues not amplified in RL (ECR 15%). No extra accuracy loss. 96-97% specificity before RL.
**Limits** Only 8B, MMLU and simple cue hacks that need no CoT. Held-out cues resemble training cues. Verbalizations get vaguer after RL. Judge calibrated on known cues. VFT may encourage exploring hacks.

**Relations**
- builds-on [[turpin2023language]]: cue-perturbation faithfulness test used to find unfaithful CoTs for the VFT data
- builds-on [[chen2025reasoning]]: same RL environment: flawed reward pays for cue-aligned wrong answers; cues drawn from it
- compares-to [[chua2024biasaugmented]]: BCT baseline lowers cue use pre-RL, but RL relearns cues with ~1% verbalization
- builds-on [[chua2025deepseek]]: part of the prompt-cue set is taken from this work
- builds-on [[pmlr-v235-chen24bl]]: operationalizes counterfactual-simulatability faithfulness through cue-switch tests
- builds-on [[baker2025monitoring]]: motivated by CoT monitoring of reward hacks; avoids training against monitor (obfuscation)

**New tags**
- eval:over-verbalization: checks false positives: explanations that claim cue influence when the answer is unaffected (specificity / balanced accuracy)
