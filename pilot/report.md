# Pilot Report

Agreement is Jaccard overlap between coder A's and coder B's tags (1 = identical).

## Agreement by namespace

| Namespace | Mean agreement | Papers |
| --- | --- | --- |
| updates | 0.00 | 1 |
| metric | 0.60 | 12 |
| signal | 0.76 | 12 |
| eval | 0.77 | 9 |
| model | 0.81 | 12 |
| lever | 0.82 | 12 |
| reveals | 0.83 | 12 |
| scale | 0.86 | 12 |
| contribution | 0.93 | 12 |
| domain | 0.94 | 12 |
| motivation | 0.96 | 12 |
| object | 1.00 | 12 |

## Agreement by paper (excluding model: and metric:)

| Paper | Agreement | Disagreements |
| --- | --- | --- |
| kirchner2024proververifier | 0.53 | **contribution**: A only ['analysis'], B only ['negative-result']<br>**eval**: A only ['adversarial-attack'], B only –<br>**lever**: A only ['prover-verifier-game'], B only ['adversarial-game']<br>**metric**: A only ['steps-to-exploit'], B only ['human-judge-time', 'sneaky-steps-to-exploit']<br>**motivation**: A only –, B only ['explainability']<br>**reveals**: A only ['solution-validity'], B only ['correctness'] |
| turpin2023language | 0.73 | **domain**: A only ['logic'], B only –<br>**lever**: A only ['prompt-pipeline'], B only –<br>**metric**: A only –, B only ['bias-mention-rate']<br>**signal**: A only ['generic-cf'], B only ['wild-cf'] |
| shenoy2026introspection | 0.79 | **eval**: A only ['concealment-trained-targets'], B only ['adversarial']<br>**metric**: A only ['auditing-agent-success', 'verbalization-rate'], B only ['auditing-agent-success-rate', 'behavior-verbalization-rate', 'scaffold-success-rate']<br>**scale**: A only ['small'], B only – |
| pres2026selfctrl | 0.79 | **signal**: A only ['simulatability'], B only ['behavior-prediction']<br>**updates**: A only ['behavior', 'explanation'], B only – |
| karvonen2026would | 0.79 | **domain**: A only –, B only ['agentic']<br>**eval**: A only ['privileged-access-test'], B only ['privileged-access']<br>**lever**: A only –, B only ['interp-tool-access']<br>**metric**: A only ['cue-attribution'], B only ['hint-attribution', 'uplift-over-transcript-baseline']<br>**model**: A only –, B only ['gpt-5.5']<br>**scale**: A only –, B only ['small'] |
| turpin2025teaching | 0.82 | **eval**: A only ['over-verbalization'], B only ['specificity']<br>**metric**: A only ['balanced-accuracy'], B only ['verbalization-balanced-accuracy']<br>**model**: A only ['llama-3.1-8b-instruct'], B only ['llama-3.1-8b']<br>**signal**: A only ['judge'], B only – |
| baker2025monitoring | 0.86 | **metric**: A only –, B only ['cheating-rate']<br>**model**: A only ['openai-frontier-reasoning-internal'], B only ['openai-internal-reasoning']<br>**signal**: A only ['programmatic-hack-label'], B only ['verified-behavior'] |
| anwar2026analyzing | 0.87 | **contribution**: A only –, B only ['metric']<br>**metric**: A only ['hacking-rate'], B only –<br>**model**: A only ['qwen-2.5-3b-instruct', 'qwen-2.5-7b-instruct'], B only ['qwen-2.5-3b', 'qwen-2.5-7b']<br>**signal**: A only –, B only ['cot-intervention'] |
| chuang2026faithlm | 0.88 | **reveals**: A only ['input-features'], B only ['decision-knowledge'] |
| hase2026counterfactual | 0.89 | **metric**: A only ['counterfactual-simulatability'], B only ['counterfactual-simulator-accuracy']<br>**scale**: A only –, B only ['mid', 'small'] |
| pan2023logiclm | 1.00 | **metric**: A only ['executable-rate', 'task-accuracy'], B only ['execution-accuracy', 'execution-rate'] |
| tanneru2024hardness | 1.00 | – |

## Coined tags

- `signal:env-label` (anwar2026analyzing, A): ground-truth misbehavior labels from the environment (held-out unit test, true verifier) used to score a CoT monitor's accuracy
- `eval:monitor-pressure` (anwar2026analyzing, A): evaluates whether monitorability survives RL that optimizes against the CoT monitor itself (monitor in the reward)
- `signal:env-label` (anwar2026analyzing, B): ground-truth label of the monitored behavior from the environment (e.g., held-out unit test, true verifier), used to score monitor accuracy
- `eval:monitor-pressure` (anwar2026analyzing, B): tests whether monitorability survives RL that optimizes against the CoT monitor (incentive to obfuscate)
- `signal:programmatic-hack-label` (baker2025monitoring, A): ground truth for misbehavior from a programmatic check on actions/outcomes (regex detector, honeypot test-revert check); CoT monitor recall is measured against it
- `model:openai-frontier-reasoning-internal` (baker2025monitoring, A): unnamed internal OpenAI frontier reasoning agent (o1/o3-mini family, stronger than o3-mini) monitored during training; also an unnamed non-frontier OpenAI reasoning agent used for the CoT-pressure RL runs
- `metric:monitor-recall` (baker2025monitoring, A): fraction of ground-truth misbehaving trajectories flagged by the CoT (or action) monitor
- `metric:monitor-precision` (baker2025monitoring, A): fraction of monitor flags that match ground-truth misbehavior (approximate here, since the monitor flags any hack type)
- `metric:undetected-hack-rate` (baker2025monitoring, A): rate of trajectories that cheat per the ground-truth check but do not trigger the CoT monitor (obfuscated reward hacking)
- `signal:verified-behavior` (baker2025monitoring, B): misbehavior labeled by a programmatic check that does not read the CoT (regex detector, reverting unit-test edits in honeypot tasks); a CoT monitor's detection is scored against it
- `domain:open-qa` (chuang2026faithlm, A): open-ended or extractive short-answer QA without answer options, incl. reading comprehension (e.g. TriviaQA)
- `metric:contrary-hint-fidelity` (chuang2026faithlm, A): change in the target model's prediction when a statement contradicting the explanation is added to the input
- `reveals:decision-knowledge` (chuang2026faithlm, B): the semantic facts or knowledge, in the input or latent, that the model's answer actually depends on
- `domain:open-qa` (chuang2026faithlm, B): free-form or extractive question answering, incl. reading comprehension (e.g. TriviaQA)
- `metric:monitor-g-mean` (hase2026counterfactual, B): geometric mean of monitor recall and specificity for detecting cue influence from the CoT
- `metric:counterfactual-simulator-accuracy` (hase2026counterfactual, B): accuracy of an LLM simulator predicting the model's answer on a counterfactual input, given the original input, CoT and answer
- `metric:cot-simulation-gain` (hase2026counterfactual, B): reasoning-simulator accuracy minus outcome-only (no-CoT) simulator accuracy; the added predictive value of the CoT
- `eval:privileged-access-test` (karvonen2026would, A): compares a self-trained predictor against a cross-trained model trained on identical data about the target, to test for introspective or privileged access
- `metric:counterfactual-simulatability` (karvonen2026would, A): gain (e.g. delta AUROC) of a predictor/simulator in predicting counterfactual-edit outcomes when given an explanation or tool output, over a transcript-only baseline
- `metric:counterfactual-prediction-auroc` (karvonen2026would, A): accuracy/AUROC of a model answering whether a given prompt edit would shift its own behavior rate by at least 30pp
- `metric:cue-attribution` (karvonen2026would, A): whether an explanation attributes the answer to a planted cue exactly on the cases where the cue flipped the answer
- `lever:interp-tool-access` (karvonen2026would, B): giving an explainer or predictor agent read-only access to activation-interpretability tools (activation oracles, NLAs, SAEs) to improve its explanations or predictions of a target model
- `eval:privileged-access` (karvonen2026would, B): compares a self-trained predictor with a cross-trained model on identical data about the target to test for privileged self-access
- `reveals:solution-validity` (kirchner2024proververifier, A): The output must let a (weaker) checker tell whether the solution is correct (legibility/checkability), whatever process the model actually used to reason.
- `lever:prover-verifier-game` (kirchner2024proververifier, A): Multi-agent training where the explaining model is optimized against a co-trained verifier, typically with helpful and adversarial (sneaky) prover roles.
- `motivation:scalable-oversight` (kirchner2024proververifier, A): Letting weaker judges (humans or small models) reliably check outputs of stronger models.
- `eval:adversarial-attack` (kirchner2024proververifier, A): Tests the checker/monitor against adversaries trained or optimized specifically to fool it.
- `reveals:correctness` (kirchner2024proververifier, B): the output must let a (weaker) checker verify whether the answer is correct, regardless of how the model actually reasoned (legibility/checkability)
- `lever:adversarial-game` (kirchner2024proververifier, B): co-training interacting model roles (e.g. prover, verifier, sneaky adversary) whose outputs set each other's rewards or training data
- `motivation:scalable-oversight` (kirchner2024proververifier, B): making outputs checkable by weaker judges (small models, time-limited humans) so correctness stays verifiable as models get more capable
- `signal:simulatability` (pres2026selfctrl, A): ground truth is the model's observed behavior on new or related inputs, which a simulator must predict from the explanation
- `updates:explanation` (pres2026selfctrl, A): the intervention changes the explanation or self-report so it fits existing behavior
- `updates:behavior` (pres2026selfctrl, A): the intervention changes the model's behavior so it fits its stated explanation or principles
- `motivation:alignment` (pres2026selfctrl, A): faithful self-description as a route to making behavior safer and consistent with stated principles
- `domain:synthetic` (pres2026selfctrl, A): toy task built so the latent ground truth is known (e.g. sampling from named biased coins)
- `signal:behavior-prediction` (pres2026selfctrl, B): ground truth is the model's own sampled behavior on related inputs, which a simulator must predict from the explanation
- `motivation:alignment` (pres2026selfctrl, B): explanation-behavior consistency used to make behavior conform to stated principles (safer, more controllable models)
- `domain:synthetic` (pres2026selfctrl, B): toy tasks with known latent structure, e.g. sampling from biased coins
- `eval:concealment-trained-targets` (shenoy2026introspection, A): evaluated on target models adversarially trained not to disclose the behavior being elicited (e.g. AuditBench SFT/KTO anti-confession training)
- `metric:verbalization-rate` (shenoy2026introspection, A): fraction of a model's self-reports that an LLM judge rates as matching the ground-truth implanted behavior
- `metric:auditing-agent-success` (shenoy2026introspection, A): rate at which an investigator agent using a given tool ranks the correct hidden behavior among its top predictions
- `metric:sandbagging-claim-rate` (shenoy2026introspection, A): rate of self-reports that claim any sandbagging-like behavior, compared against a false-positive rate on non-sandbagging models
- `eval:adversarial` (shenoy2026introspection, B): evaluated on target models deliberately trained to conceal or deny the behavior being reported
- `domain:social-bias` (turpin2023language, A): tasks probing demographic stereotypes or fairness, e.g. BBQ
- `domain:social-bias` (turpin2023language, B): stereotype or fairness QA tasks (e.g. BBQ) where demographic attributes can sway answers
- `eval:over-verbalization` (turpin2025teaching, A): checks false positives: explanations that claim cue influence when the answer is unaffected (specificity / balanced accuracy)
- `eval:specificity` (turpin2025teaching, B): checks for over-reporting: whether explanations claim an influence (e.g. a cue) when behavior is unaffected, via specificity, false-positive rate or balanced accuracy

## Coder uncertainty

- anwar2026analyzing (A): reveals:cot-reliance: the MI reward targets statistical CoT-output coupling (anti-decoupling), not causal dependence
- anwar2026analyzing (A): reveals:hidden-info: steganography appears only in the appendix Reasoning Gym environment
- anwar2026analyzing (A): signal:env-label: coined; the LLM monitor's output is scored against environment ground truth, so not seed judge or by-construction
- anwar2026analyzing (A): eval:monitor-pressure: coined; close to eval:later-rl but the pressure is during training, not after it
- anwar2026analyzing (A): contribution:metric not tagged: the per-rollout I(O;Z|X) estimator is also used as an evaluation metric, so it could count
- anwar2026analyzing (A): relation to emmons2025chain: the paper calls its evidence 'mixed', so extends vs compares-to is a judgment call; not a contradiction
- anwar2026analyzing (A): relation to korbak2025chain: cited only as framing, a weak link
- anwar2026analyzing (A): Swaroop et al. 2025 (FRIT) is cited; unclear whether it is corpus swaroop2025lift (different title), so not linked
- anwar2026analyzing (B): reveals:cot-reliance: I(O;Z|X) measures how much the CoT tells you about the output, not causal dependence, though the reward pushes the output to depend on the CoT
- anwar2026analyzing (B): signal:cot-intervention: the MI estimator scores the output under other sampled CoTs (a CoT swap), but the paper frames this as MI estimation, not intervention
- anwar2026analyzing (B): reveals:hidden-info: steganography is studied only in the appendix Reasoning Gym environment
- anwar2026analyzing (B): contribution:metric: MI is used as an evaluation metric and monitorability uplift is defined formally, but the main contributions are theory and method
- anwar2026analyzing (B): signal:env-label coined instead of signal:judge: the monitor is an LLM, but accuracy is scored against verifier labels, so there is causal ground truth
- anwar2026analyzing (B): emmons2025chain: tagged 'extends'; the paper calls its evidence 'mixed', so 'contradicts' is arguable (necessity of CoT does not guarantee monitorability)
- anwar2026analyzing (B): contribution:negative-result not tagged: monitor-only RL backfires (replicates Baker) and the MI reward fails against steganography, but neither is the paper's main claim
- anwar2026analyzing (B): eval:behavior-control not tagged: hacking rate and monitor FNR/FPR are reported, but the gain in monitor accuracy is not disentangled from reduced hacking
- anwar2026analyzing (B): swaroop2025lift may be the cited FRIT paper (Swaroop et al. 2025, arXiv 2509.13334) under a new title; not linked
- baker2025monitoring (A): signal:judge: the LLM monitor is the instrument, but recall is scored against programmatic ground truth, so 'no causal ground truth' only fits the problem-specific hacks found by the monitor
- baker2025monitoring (A): signal:programmatic-hack-label: coined tag; could merge with by-construction or a broader 'behavioral ground truth' value
- baker2025monitoring (A): lever:rl-reward: the reward term is a CoT-monitor penalty meant for alignment, not for faithfulness, and it lowers monitorability
- baker2025monitoring (A): lever:inference-time: rejection sampling with the monitor serves as a comparison, not a faithfulness intervention
- baker2025monitoring (A): scale:frontier-api: all agents are internal closed OpenAI models of undisclosed size; the RL-trained agent is non-frontier
- baker2025monitoring (A): eval:behavior-control: tagged because hack rate (behavior) is tracked separately from monitor recall (CoT); the definition may mean something narrower
- baker2025monitoring (A): eval:later-rl not tagged: obfuscation emerges during the same RL run, with no separate later-RL stage
- baker2025monitoring (A): contribution: the faithfulness/legibility/obfuscation framework (Sec 5.1, App G) is conceptual; theory/position not tagged because the paper is mainly empirical
- baker2025monitoring (A): reveals:hidden-info not tagged: steganography appears only in the App G thought experiment; the observed obfuscation is omission of intent, not encoding
- baker2025monitoring (A): App D self-awareness monitor (in-training awareness) is a minor side result; reveals:hidden-behavior not tagged
- baker2025monitoring (A): kirchner2024proververifier relation is weak: cited for the legibility concept and as a possible future objective
- baker2025monitoring (B): lever:rl-reward: the reward term is a CoT-monitor penalty against hacking, not a reward for faithfulness or monitorability, yet it is still an RL reward on the CoT
- baker2025monitoring (B): signal:verified-behavior vs signal:by-construction: the honeypot/regex labels are guaranteed by the pipeline, so another coder may use by-construction
- baker2025monitoring (B): signal:judge: applies only to the problem-specific hacks (Sec 2.2), found by monitor flags plus manual inspection with no ground truth
- baker2025monitoring (B): scale:frontier-api: the frontier model was only monitored; the agent trained under CoT pressure is an undisclosed 'non-frontier' OpenAI model
- baker2025monitoring (B): model:openai-internal-reasoning: the agents are unnamed. The abstract says 'such as o3-mini', but the text says the monitored agent surpassed o3-mini
- baker2025monitoring (B): contradicts lanham2023measuring: the disagreement is conceptual (Appendix G.2), not an empirical result
- baker2025monitoring (B): contribution: no position tag, although the paper argues for a monitorability tax and a faithfulness/legibility/monitorability framework; it does have experiments
- baker2025monitoring (B): eval:behavior-control: tagged because the cheating rate (behavior) is measured separately from monitor recall (CoT signal)
- baker2025monitoring (B): Appendix D's self-awareness (training-awareness) monitoring is untagged: minor, and few true hits
- chuang2026faithlm (A): object:external-expl vs posthoc-expl: the explainer (GPT-3.5/Claude-2) is mostly a different model from the target (Vicuna-7B/Phi-2), but some configs use the same model; tagged both
- chuang2026faithlm (A): reveals:input-features: the paper stresses that decision factors may be latent knowledge not in the input, so the seed definition fits only loosely
- chuang2026faithlm (A): scale: targets are small, while the prompt optimization runs on frontier-API explainers; unclear which counts as 'intervened on'
- chuang2026faithlm (A): contribution:theory: Theorem 1 is close to definitional, since it assumes conditioning on the contrary hint equals a do-intervention
- chuang2026faithlm (A): signal:judge left out: GPT-4o/NLI judges score similarity to human rationales (plausibility), not faithfulness
- chuang2026faithlm (A): eval:ood: transfer is only of trigger prompts to same-domain datasets (ECQA->Social-IQA, COPA->XCOPA)
- chuang2026faithlm (A): compares-to pmlr-v235-chen24bl: the paper announces a simulatability comparison but the text shows no results; its citation 'Chen 2023a' resolves to a Shapley paper, probably a mix-up with 2023b
- chuang2026faithlm (A): Case-study captions swap target and explainer roles (e.g. Claude-2 target, Vicuna explainer), inconsistent with the main setup
- chuang2026faithlm (A): metric: the truthfulness score (agreement with ground-truth explanations) is left out as a plausibility measure, though the paper presents it as evidence of faithfulness
- chuang2026faithlm (B): object:external-expl vs object:posthoc-expl: the main setup separates explainer g (GPT-3.5/Claude-2) from target f (Vicuna/Phi-2), but some case studies use the same or swapped models; tagged both
- chuang2026faithlm (B): reveals:decision-knowledge (coined): could merge into reveals:input-features, but the paper says the decision-relevant factor may be latent and not in the input
- chuang2026faithlm (B): scale: the targets are small (Vicuna-7B, Phi-2) but the prompted/optimized explainers are frontier APIs; tagged both small and frontier-api
- chuang2026faithlm (B): contribution:theory: Theorem 1 is near-definitional; it assumes conditioning on the contrary hint equals do(S_E)
- chuang2026faithlm (B): signal:judge left out: the GPT-4o/NLI 'truthfulness' vs human rationales measures plausibility, not faithfulness, although the paper reads it as supporting faithfulness
- chuang2026faithlm (B): contradicts lanham2023measuring: Sec 2.3 critiques CoT-editing tests, but Sec 3.1 also calls the method 'complementing' Lanham
- chuang2026faithlm (B): The paper announces a simulatability vs S_E comparison, but no results for it appear in the text
- chuang2026faithlm (B): One sentence says the probability gap is computed only over tokens with non-zero saliency attribution; unclear, so signal:interp-tool was not tagged
- chuang2026faithlm (B): MedMCQA (appendix only) gives fidelity 0.96 vs 0.70 SelfExp and 0.47 self-consistency; no medical domain tag coined
- hase2026counterfactual (A): lever:rl-reward vs lever:sft: CST is iterated reward-weighted finetuning on rewritten/sampled CoTs; it is RL-like only when k>1 (generic CFs, and the hybrid version). Tagged both.
- hase2026counterfactual (A): lever:preference left out: unlikelihood on negatives is contrastive, but it is not pairwise preference optimization.
- hase2026counterfactual (A): reveals:input-features for model-generated CFs: the target is the model's generalizable decision rule across related inputs, not feature attribution as such.
- hase2026counterfactual (A): reveals:misbehavior left out: cues are framed as proxies for sycophancy/reward hacking, but the paper says they are not tied to a threat model.
- hase2026counterfactual (A): contribution:negative-result: the dissuading-cue failure is listed as a central result, but it is a sub-finding of a method paper.
- hase2026counterfactual (A): domain:classification: SNLI/ETHICS are NLI-like but are reformatted as two-way MCQ.
- hase2026counterfactual (A): scale:large only, though Qwen3-4B, Qwen3-30B-A3B and gpt-oss-20b are also trained.
- hase2026counterfactual (A): guan2025monitoring: the flat monitorability-vs-reasoning-effort result might conflict with Guan's findings, but the paper does not claim a disagreement, so compares-to rather than contradicts.
- hase2026counterfactual (A): turpin2023language builds-on is weak: cited as the motivating problem, not as a method used.
- hase2026counterfactual (B): lever:rl-reward vs lever:preference: objective is reward-weighted CE on positives + unlikelihood on negatives, RL mode only with k>1 rollouts; neither standard RL nor DPO
- hase2026counterfactual (B): scale:small/mid/large all tagged: namespace defines 'largest model', but the scaling study trains Qwen3-4B, 30B-A3B, 235B-A22B (and gpt-oss-20b)
- hase2026counterfactual (B): reveals:misbehavior omitted: motivation mentions reward hacking/sycophancy, but cues are artificial and paper says not tied to a threat model
- hase2026counterfactual (B): contribution:negative-result: failure on dissuading cues is a listed central result but secondary to the method
- hase2026counterfactual (B): reveals:input-features for model-generated counterfactuals: they test whether CoT states the generalizable factors driving answers, not attribution per se
- hase2026counterfactual (B): domain:classification: SNLI and ETHICS are NLI/moral-judgment tasks but all formatted as two-way multiple choice
- hase2026counterfactual (B): guan2025monitoring: flat monitorability vs reasoning effort may conflict with Guan et al., but paper does not state a disagreement, so not tagged contradicts
- hase2026counterfactual (B): chen2025consistent: only discussed as most similar prior method, no experimental comparison
- karvonen2026would (A): object:external-expl: interpretability-tool outputs (AO/NLA/SAE) are treated as explanations of the target and judged by predictor uplift. They are not a classic external explainer model, so a new object value might fit better.
- karvonen2026would (A): object:posthoc-expl: open-ended self-explanation training is reported mainly in Appendix E. The main self-object is binary self-prediction.
- karvonen2026would (A): object:cot not tagged: CoT appears only in Appendix G (qualitative in-the-wild unfaithful CoT examples, plus a rerun of the tool eval on reasoning-mode data).
- karvonen2026would (A): signal:generic-cf possibly also applies: the counterfactual edits are LLM-generated, but they target naturally occurring behaviors, so I chose wild-cf.
- karvonen2026would (A): eval:behavior-control: only a preliminary KL-regularized variant (App. D.5) holds behavior fixed. The main runs do not control for behavior drift.
- karvonen2026would (A): domain:agentic not tagged: about 9% of prompts are tool-use transcripts and PETRI uses synthetic tools, but each item is a single-turn prediction, not a multi-step agent environment.
- karvonen2026would (A): contribution:metric not tagged: counterfactual simulatability comes from Chen et al.; CHIVE is framed as a pipeline and dataset (benchmark).
- karvonen2026would (A): scale:large: Qwen3.5-397B-A17B is MoE (17B active) and LoRA-trained via the Tinker API. The interpretability-tool targets go only up to 27B.
- karvonen2026would (A): contradicts li2025training: the authors themselves are unsure why the results differ (narrow hint setting vs broad distribution, or data size).
- karvonen2026would (A): contradicts mayne2026positivecasefaithfulnessllm: the paper attributes the gap to task distribution (tabular classification vs open-ended prompts), so this may be a scope difference rather than a true conflict.
- karvonen2026would (B): object:cot omitted: CoT appears only in Appendix G (qualitative unfaithful-CoT examples plus a reasoning-mode rerun of the tool eval), not as a main object
- karvonen2026would (B): object:external-expl: tool-assisted predictor-agent outputs are framed as explanations of the target model; fits 'explanation of a different model' loosely
- karvonen2026would (B): lever:interp-tool-access coined; could instead be lever:inference-time, since it changes the explainer's test-time access rather than the target
- karvonen2026would (B): domain:agentic: PETRI multi-turn scenarios with synthetic tools plus ~9% tool-use transcripts; not real agent environments
- karvonen2026would (B): domain:classification omitted: AITA sycophancy hint setting is a binary verdict but answered freeform
- karvonen2026would (B): eval:behavior-control: only from the appendix KL-regularized variant (behavior held near base, no prediction gain)
- karvonen2026would (B): scale: Qwen3.5-397B-A17B is MoE with 17B active params; tagged large by total params. Gemma-3-27B (mid) was only probed read-only, so scale:mid omitted
- karvonen2026would (B): contradicts li2025training: authors are unsure why results differ (fragility vs data needs); settings also differ (hint vs diverse claims)
- karvonen2026would (B): contradicts mayne2026positivecasefaithfulnessllm: authors attribute the gap to task distribution (tabular classification vs open-ended behaviors)
- karvonen2026would (B): contribution:method: CHIVE is mainly a data/eval pipeline; the method claim rests on the self-prediction training gains
- kirchner2024proververifier (A): reveals:solution-validity: legibility is not faithfulness; the paper says legibility ignores how the prover reasoned. Could instead be reveals:misbehavior (sneaky deceptive solutions) or out of scope.
- kirchner2024proververifier (A): scale:frontier-api: provers are internal GPT-4-family models of undisclosed size, trained by OpenAI rather than accessed via API.
- kirchner2024proververifier (A): model:gpt-4-family: no exact model or size is named; verifiers are given only as relative compute (1e-4 to 1x).
- kirchner2024proververifier (A): signal:judge: legibility is measured by human/verifier accuracy against known answer correctness (SymPy grader). There is no causal ground truth about faithfulness.
- kirchner2024proververifier (A): contribution:analysis: the legibility loss under correctness-only RL is a baseline finding; it could be read as negative-result. The CGC and iterative-goodharting variants also fail to improve legibility.
- kirchner2024proververifier (A): eval:ood not tagged: the verifier is tested on held-out attack rewards (sneaky-only SRC, CGC, goodharting), but the paper says it does not study out-of-domain generalization.
- kirchner2024proververifier (A): motivation:monitoring and motivation:explainability not tagged: the paper frames its goal as scalable oversight and explicitly contrasts legibility with explainability.
- kirchner2024proververifier (A): Relations to radhakrishnan2023question and lyu2023faithful come only from related-work contrasts. Neither paper is a baseline.
- kirchner2024proververifier (B): reveals:correctness (coined): the paper says legibility is distinct from explainability (it 'ignores how the prover reasoned'), so it may be only marginally in scope for a faithfulness map
- kirchner2024proververifier (B): signal:judge: legibility ground truth is human/verifier accuracy against known SymPy-graded labels plus GPT-4 validity scores, not a causal faithfulness signal
- kirchner2024proververifier (B): scale:frontier-api: GPT-4-family provers trained in-house at OpenAI with undisclosed sizes; this is not API access
- kirchner2024proververifier (B): contribution:negative-result: correctness-only RL degrading legibility is a baseline finding; the CGC and iterative-goodharting alternatives also fail to improve legibility
- kirchner2024proververifier (B): eval:ood omitted: the verifier is tested against held-out attack rewards (CGC, goodharting), but the paper says it does not study out-of-domain generalization
- kirchner2024proververifier (B): motivation:monitoring omitted: catching the sneaky prover's deliberate subtle flaws is close to monitoring, but these are adversarial errors, not reward hacking or scheming
- kirchner2024proververifier (B): relations: both compares-to links are related-work contrasts only, with no experimental comparison
- pan2023logiclm (A): object:cot: the LLM output is a symbolic problem formalization rather than reasoning steps, and the solver does the reasoning. Tagged because the definition covers executable traces.
- pan2023logiclm (A): reveals:cot-reliance: the paper's faithfulness means the answer follows from the reasoning chain, which the solver guarantees. The 'chain' is the solver's execution, not model-written reasoning.
- pan2023logiclm (A): lever:architecture vs lever:prompt-pipeline: the intervention is a prompting pipeline whose output is an executable symbolic program. Both apply, so I tagged both.
- pan2023logiclm (A): lever:inference-time: the solver-error self-refinement loop fits 'refine', but it could also count as part of the pipeline structure.
- pan2023logiclm (A): motivation:explainability omitted: the paper says solvers are 'transparent', but its goal and evaluation are about accuracy.
- pan2023logiclm (A): domain:mcq omitted: all five datasets are cast to multiple-choice format, and AR-LSAT is an MCQ exam, but the substantive domain is logic.
- pan2023logiclm (A): metric tags: the paper has no faithfulness metric. Exe_Rate is only a proxy for how often answers come from the faithful-by-construction path and not from the CoT fallback. task-accuracy is the headline metric.
- pan2023logiclm (A): builds-on lyu2023faithful: Lyu et al. is cited only as motivating evidence of unfaithful reasoning. The paper never discusses its similar translate-then-execute method or uses it as a baseline.
- pan2023logiclm (A): tafjord2022entailer not linked: it is cited only in related work as a fine-tuning approach, not as a baseline or a basis.
- pan2023logiclm (B): reveals:cot-reliance: by construction, the answer depends on the symbolic program; the paper never tests this dependence
- pan2023logiclm (B): object:cot: the faithful 'trace' is a symbolic formalization; the solver does the reasoning, not the LLM
- pan2023logiclm (B): lever:architecture vs prompt-pipeline: executable symbolic output plus an external solver could fit either tag; I tagged both
- pan2023logiclm (B): lever:inference-time: chosen for the self-refinement loop driven by solver error messages
- pan2023logiclm (B): domain:mcq omitted: all tasks are recast as multiple choice, but the content is logic
- pan2023logiclm (B): motivation:explainability omitted: transparency of solvers is mentioned, but the main goal is accuracy and robustness
- pan2023logiclm (B): metric:execution-rate/execution-accuracy: the paper has no faithfulness metric; these are proxies for how often the guaranteed path is used and whether it is correct
- pan2023logiclm (B): builds-on lyu2023faithful: cited only in the intro as evidence of unfaithful reasoning, not as an explicit basis; the methods are close
- pan2023logiclm (B): Findings numbers: the 39.2%/18.4% averages are stated for GPT-3.5; whether they are absolute or relative gains is unclear from the text
- pres2026selfctrl (A): object:self-report vs self-prediction: outputs are category-level rules and coin biases that predict behavior on inputs from a class, which sits between the two
- pres2026selfctrl (A): reveals:hidden-behavior: fits the SFT-implanted coin biases well, but the refusal policy is learned rather than hidden; could be read as input-features (which request features trigger refusal)
- pres2026selfctrl (A): signal:simulatability (coined): may merge with judge, since Gemini predicts behavior and an XSTest LM judge classifies refusals; the counterfactual-generation eval could also count as generic-cf (model-generated inputs)
- pres2026selfctrl (A): lever:rl-mechanics: the one-sided lambda updates and forward-KL anchor are central, but the core lever is arguably just rl-reward
- pres2026selfctrl (A): eval:behavior-control: NSG normalizes by no-explanation predictability, App. J shows behavior-training gains go to that baseline, and explanation runs KL-anchor behavior; there is no explicit causal control
- pres2026selfctrl (A): updates namespace (coined): the explanation-vs-behavior update direction is a key axis of this paper but may be over-coining
- pres2026selfctrl (A): motivation:monitoring omitted: the paper mentions monitoring, but its object is self-reports, not reasoning traces
- pres2026selfctrl (A): compares-to hase2026counterfactual is a related-work positioning, not an experimental baseline
- pres2026selfctrl (A): abstract's held-out R² 0.24 baseline is not repeated in the body text, which reports EC-split baselines (-0.23/-0.40)
- pres2026selfctrl (B): object:self-report vs self-prediction: explanations are category-level rules or coin biases that predict behavior on given inputs, so they straddle both
- pres2026selfctrl (B): reveals:hidden-behavior: coin biases are SFT-learned (fits), but the refusal policy is an ordinary disposition, not really hidden
- pres2026selfctrl (B): lever:rl-mechanics: one-sided updates (gradient only to the explanation or behavior side) plus a forward-KL anchor look like gradient routing, but the core lever is the reward
- pres2026selfctrl (B): signal:behavior-prediction (coined) overlaps with signal:judge; the constitutional training reward is an LM jury with no causal ground truth, while NSG/CF evals compare against observed refusals
- pres2026selfctrl (B): motivation:monitoring omitted: the paper mentions developers monitoring misalignment through self-reports, but not catching misbehavior from reasoning
- pres2026selfctrl (B): eval:behavior-control: explanation-only training anchors behavior with KL, and App. J shows unconditional predictability unchanged (73.2 vs 73.0); in the other modes behavior change is the goal
- pres2026selfctrl (B): domain:chat for SpecEval safety/refusal requests; a refusal-specific domain value might fit better
- pres2026selfctrl (B): abstract's held-out baseline R2=0.24 is not restated in the main text, which gives EC baseline -0.23/-0.40
- pres2026selfctrl (B): relation to plunkett2025self omitted: it is cited only as related self-interpretability work
- shenoy2026introspection (A): lever:architecture: the IA is a LoRA adapter attached at audit time; it may count only as SFT/DPO, not an architecture change
- shenoy2026introspection (A): scale:small + scale:mid: the namespace says largest model, but the Qwen3 0.6B-14B scaling runs are a central result, so both are tagged
- shenoy2026introspection (A): reveals:misbehavior omitted: some targets reward-hack or sandbag, but the output is a self-report about dispositions, not monitored reasoning
- shenoy2026introspection (A): lever:steering omitted: Appendix A shows a trained single-layer bias/steering vector partly works, but only as an ablation
- shenoy2026introspection (A): domain:chat: probing is done with open-ended chat questions; no task domain fits cleanly (target behaviors span code, MMLU sandbagging, personas)
- shenoy2026introspection (A): contribution:analysis omitted although the scaling/diversity/logit-lens sections are substantial
- shenoy2026introspection (A): turpin2023language not linked: cited only as motivation (self-reports are unreliable)
- shenoy2026introspection (A): binder2024looking verb: builds-on vs compares-to; the paper explicitly declines to claim Binder-style introspection
- shenoy2026introspection (A): ~680 finetunes: summed from the Table 1 training counts (682), not stated directly in the paper
- shenoy2026introspection (B): lever:architecture: the IA is a detachable LoRA module transferred across finetunes, but it is arguably just SFT/DPO
- shenoy2026introspection (B): reveals:misbehavior not tagged: targets include sandbagging and RM-bias exploitation, but the framing is auditing hidden finetuned behaviors, not monitoring
- shenoy2026introspection (B): lever:steering not tagged: Appendix A trains a single-layer bias vector only as a lightweight-adapter ablation
- shenoy2026introspection (B): object:self-prediction not tagged: only Appendix F has yes/no and per-prompt behavior questions
- shenoy2026introspection (B): domain:chat: self-reports are elicited in open-ended chat, while some training categories use MMLU sandbagging or decision heuristics
- shenoy2026introspection (B): scale:mid only: Qwen3 0.6B/4B/14B also used for scaling, but the largest model is 70B
- shenoy2026introspection (B): binder2024looking relation omitted: cited only for its introspection definition, which the paper says it does not claim to meet
- shenoy2026introspection (B): metric names coined freely: verbalization rate is an LLM-classifier match against the ground-truth behavior
- tanneru2024hardness (A): contribution:method left out: the paper calls its ICL/SFT/steering strategies novel, but they do not improve the target, so it is tagged negative-result + analysis instead
- tanneru2024hardness (A): scale:frontier-api: GPT-4 is only prompted (ICL) and GPT-3.5 only fine-tuned via API; open-weight training and steering is 8B only
- tanneru2024hardness (A): domain:mcq for TruthfulQA: the paper does not say which TruthfulQA format it used; AQuA and LogiQA are clearly multiple choice
- tanneru2024hardness (A): signal:interp-tool left out: linear probes only build the steering direction, and the faithfulness ground truth is always early answering
- tanneru2024hardness (A): eval:ood left out: 'fails to generalize' means results vary from dataset to dataset, not transfer to held-out data
- tanneru2024hardness (A): relation to agarwal2024faithfulness: it is cited for framing and motivation, not as a method the paper builds on
- tanneru2024hardness (A): turpin2023language and lyu2023faithful are only cited (motivation, and a contrasting faithfulness notion), so they are not linked
- tanneru2024hardness (A): text says TruthfulQA SFT costs ~20% accuracy, but the appendix tables do not clearly show this, so the number is left out of the summary
- tanneru2024hardness (B): contribution:method omitted: paper calls its ICL/FT/steering strategies novel, but they fail, so tagged negative-result + analysis
- tanneru2024hardness (B): scale:small + scale:frontier-api both tagged: the definition says largest model, but steering and LoRA are only on 8B, while GPT-3.5-Turbo is fine-tuned via API and GPT-4 only gets ICL
- tanneru2024hardness (B): lever:prompt-pipeline for faithful-demonstration ICL: closest seed value, though it is few-shot example selection rather than a pipeline
- tanneru2024hardness (B): eval:ood not tagged: 'fails to generalize across datasets' means inconsistent per-dataset results, not a held-out transfer test
- tanneru2024hardness (B): domain:mcq assumes TruthfulQA is run in multiple-choice format; the paper implies this but does not state it
- tanneru2024hardness (B): contradicts lyu2023faithful is a conceptual disagreement in the related-work appendix, not an empirical comparison; compares-to may fit better
- tanneru2024hardness (B): turpin2023language cited only as evidence of unfaithfulness; no relation recorded
- tanneru2024hardness (B): metric:early-answering-aoc: name coined for the per-instance probability-based variant of Lanham's early answering
- turpin2023language (A): reveals:input-features: on BBQ the stereotype is not planted; the demographic identity in the input drives the answer, so this is the closest seed value
- turpin2023language (A): signal:generic-cf: on BBQ, GPT-3.5 generated the weak evidence and a rule swapped it between people; could be read as wild-cf because stereotype bias is a natural behavior
- turpin2023language (A): lever:prompt-pipeline: the paper only compares a debiasing instruction and few-shot vs zero-shot as conditions; it proposes no method
- turpin2023language (A): contribution:metric: the biased-context test became a standard paradigm, but the paper frames itself as analysis
- turpin2023language (A): contribution:benchmark not tagged: the paper releases biased BBH prompts and a weak-evidence BBQ but does not present them as a benchmark
- turpin2023language (A): motivation:monitoring: the safety and auditing framing (detecting unfair reasoning from CoT) is secondary to explainability
- turpin2023language (A): domain:logic: the 13 BBH tasks include Logical Deduction, Web of Lies, Navigate and Shuffled Objects, but were chosen for subjectivity
- turpin2023language (A): domain:social-bias: coined tag; may be redundant with domain:mcq
- turpin2023language (A): signal:judge not tagged: author manual checks (bias mentions 1/426, explanation support 73%) back up the counterfactual signal and are not the ground truth
- turpin2023language (A): contradicts lyu2023faithful: hedged critique in related work ('could still be susceptible'), not an empirical test
- turpin2023language (A): lanham2023measuring and radhakrishnan2023question omitted: discussed in related and future work but neither built on nor compared against
- turpin2023language (A): model names: text-davinci-003 (GPT-3.5) and claude-v1.0 are the API names; normalization may differ
- turpin2023language (B): reveals:input-features: BBQ tests whether demographic identity, a naturally present input feature rather than a planted cue, drives answers
- turpin2023language (B): signal:wild-cf vs signal:generic-cf: BBQ swaps model-generated weak evidence between individuals to probe a naturally occurring stereotype bias, so it fits both
- turpin2023language (B): lever omitted: the paper tests the debiasing instruction and few-shot prompting as mitigations (prompt-pipeline), but it is a measurement paper
- turpin2023language (B): contribution:metric: the biased-context paradigm and the %-explained-by-bias metric are new eval methods; contribution:benchmark not tagged, though it releases modified BBH/BBQ data
- turpin2023language (B): motivation:monitoring: framed mainly as explainability/safety, with a discussion of CoT-based auditing of unfair reasoning
- turpin2023language (B): domain:logic not tagged, though several BBH tasks (logical deduction, web of lies) are deductive
- turpin2023language (B): signal:judge omitted: manual annotation (bias-mention check, explanation support) is auxiliary; the counterfactual is the ground truth
- turpin2023language (B): contradicts lyu2023faithful rests only on a related-work argument, not on experiments
- turpin2023language (B): model naming: the paper calls text-davinci-003 GPT-3.5
- turpin2025teaching (A): signal:judge: Claude 3.5 Sonnet decides whether a CoT verbalizes the cue, but the ground truth for cue influence comes from the planted-cue counterfactual, so the judge is secondary
- turpin2025teaching (A): contribution:metric: ECR is defined here, but it is just (1 - verbalization rate) x cue influence rate
- turpin2025teaching (A): contribution:negative-result: the intervention that fails (BCT collapses under later RL) is a baseline, not the paper's own method
- turpin2025teaching (A): eval:behavior-control: the tag is applied because the paper reports cue influence (behavior) separately from verbalization rate (explanation); unsure this matches the intended meaning
- turpin2025teaching (A): signal:implanted-behavior not tagged: RL does train cue exploitation into the model, but per-instance ground truth comes from cue counterfactuals
- turpin2025teaching (A): lever: RL with a flawed reward is a stress test, not a faithfulness lever, so only lever:sft is tagged
- turpin2025teaching (A): relation chua2024biasaugmented: compares-to rather than contradicts, because the BCT paper never tested later RL; there is no direct claim conflict
- turpin2025teaching (A): model tag: written as llama-3.1-8b-instruct; consolidation may normalize it to llama-3.1-8b
- turpin2025teaching (B): signal:judge left out: a Claude 3.5 Sonnet judge decides verbalization, but whether the cue influenced the answer comes from planted counterfactuals
- turpin2025teaching (B): contribution:negative-result: the failure is in the BCT baseline under later RL (it suppresses verbalization), not in the paper's own method
- turpin2025teaching (B): contribution:metric: ECR is new and named, but it is just (1 - verbalization rate) x cue influence rate
- turpin2025teaching (B): eval:behavior-control: the paper splits ECR into cue influence (behavior) and verbalization (explanation); this fits the definition only loosely
- turpin2025teaching (B): eval:ood: the held-out cues are fairly similar to the training cues (stated limitation); the non-amplified-cue test (ECR 15%) is a second held-out split
- turpin2025teaching (B): chua2024biasaugmented as compares-to rather than contradicts: the paper does not dispute BCT's pre-RL claim, it only shows BCT fails under later RL
- turpin2025teaching (B): reveals:misbehavior: the reward hacking is toy cue exploitation in MCQ, not agentic misbehavior
- turpin2025teaching (B): baker2025monitoring builds-on: cited as motivation and caution, not as a method used
