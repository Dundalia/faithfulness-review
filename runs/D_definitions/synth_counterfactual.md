The corpus holds 129 definitions in the counterfactual family, from 73 of the 217 papers. By kind, 59 are informal, 31 operational, 22 formal, 13 criteria and 4 taxonomies. By stance, 70 are proposed, 44 adopted and 15 adapted. Sixteen of the 129 are companion terms, such as validity, minimality or simulation precision, rather than definitions of "counterfactual" itself. Nearly every entry describes a paired run: the model is run on an original and on a variant that differs from it in one specified respect, and the two outputs are compared. The eight clusters below differ on three points. The first is what is varied: the input, the model's own reasoning, or an internal state. The second is whether the variant must change the output to count as a counterfactual. The third is what the comparison is used to judge: an explanation, the model's reliance on a feature, or a training target.

In the tables, text in quotation marks is copied from the paper, with omissions marked by an ellipsis. Text without quotation marks is the extractor's gloss.

### 1. Counterfactual explanation: an edited input that changes the decision

This is the explainable-AI sense, taken from Wachter et al. 2017. A counterfactual is an alternative input that would change the model's decision, and that alternative input is itself the explanation. In the LLM papers the model writes the alternative input itself, which gives a self-generated counterfactual explanation (SCE). An SCE is judged on two properties. Validity asks whether the model's own prediction changes when the edited input is fed back, usually in a fresh context. Minimality asks how close the edit is to the original. Three entries use "counterfactual explanation" for something else: a verbal what-if statement about how the output would change, rather than the edited input ([Agarwal et al. 2024](./#p=agarwal2024faithfulness), [Guo et al. 2026](./#p=guo2026introspective), [Pres et al. 2026a](./#p=pres2026consistency)). [Madsen et al. 2024](./#p=madsen2024self) call a valid counterfactual "faithful". That is the only explicit link from this cluster to [faithfulness](#faithfulness). 21 entries from 10 papers (9 proposed, 11 adopted, 1 adapted).

> A counterfactual explanation $\mathbf{x}_{\text{CE}}$ is a modified version of the original input $\mathbf{x}$ that would lead the model to change its decision, that is, $f(\mathbf{x})\neq f(\mathbf{x}_{\text{CE}})$ .
>
> — [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can), §3.1 (Step 2), after Wachter et al. 2017

| Paper | Term | Kind | Definition (short quote or gloss) |
|---|---|---|---|
| [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) | counterfactual explanation | formal | “a modified version of the original input $\mathbf{x}$ that would lead the model to change its decision” |
| [Mayne et al. 2025](./#p=mayne2025llms) | counterfactual explanation | informal | “an alternative input $x^{\prime}\neq x$ that would lead to a specific alternative output $y^{\prime}\neq y$” |
| [Madsen et al. 2024](./#p=madsen2024self) | counterfactual explanation | informal | “Counterfactual explanations replace content, to get the opposite prediction” |
| [Madsen et al. 2024](./#p=madsen2024self) | faithful counterfactual | criterion | “we can re-evaluate the prediction with the counterfactual and check that this goal is satisfied. If satisfied, the counterfactual is faithful.” |
| [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) | self-generated counterfactual explanation (SCE) | informal | “we do not solve an optimization problem and instead ask the model itself to generate the counterfactual explanation” |
| [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) | counterfactual validity (Val) | operational | “the percentage of times the SCE actually produces the intended target label” |
| [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) | minimality of counterfactual explanations | criterion | “keep the changes between $\mathbf{x}$ and $\mathbf{x}_{\text{CE}}$ minimal” |
| [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) | SCE correctness | operational | “whether the counterfactual $\mathbf{x}_{CE}$ actually evaluates to $\hat{y}_{CE}$” |
| [Mayne et al. 2025](./#p=mayne2025llms) | self-generated counterfactual explanation (SCE) | informal | “the LLM itself generates a candidate counterfactual to explain its own prediction” |
| [Mayne et al. 2025](./#p=mayne2025llms) | validity (of SCEs) | criterion | “the revised input should change the model’s prediction when re-evaluated in a new context window” |
| [Mayne et al. 2025](./#p=mayne2025llms) | minimality (of SCEs) | criterion | “they should make the smallest edit required to change the outcome” |
| [Mayne et al. 2025](./#p=mayne2025llms) | minimal counterfactual | formal | “the closest point to the original input that would flip the LLM’s decision” |
| [Doi et al. 2025](./#p=doi2025investigating) | counterfactual-style self-explanation | informal | “sentences similar to the original input but intended to induce different predictions” |
| [Zeng et al. 2026](./#p=zeng2026evaluating) | self-generated counterfactual explanation | informal | “the model edits its own input until the prediction flips” |
| [Agarwal et al. 2024](./#p=agarwal2024faithfulness) | counterfactual explanations (self-explanation type) | informal | “provide insights into how different inputs might lead to different LLM responses” |
| [Guo et al. 2026](./#p=guo2026introspective) | counterfactual explanation | informal | “how behaviors change under an edit to its input (e.g. removal of a hint)” |
| [Pres et al. 2026a](./#p=pres2026consistency) | counterfactual explanation (self-description) | informal | “examine two minimally different inputs … that induce different model behaviors” |

and 4 more: [Chuang et al. 2024](./#p=chuang2026faithlm) (counterfactual examples (explanations)); [Mayne et al. 2025](./#p=mayne2025llms) (Validity (Val)); [Mayne et al. 2025](./#p=mayne2025llms) (Excess Distance (ED)); [Cahlik et al. 2025](./#p=cahlik2025reasoninggrounded) (counterfactual examples).

Formal versions:
- Counterfactual condition: $f(\mathbf{x})\neq f(\mathbf{x}_{\text{CE}})$, usually with a chosen target $y_{\text{CE}}$ ([Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can)).
- Validity: $\mathrm{Val}$ is the share of instances with $f(\mathbf{x}_{\text{CE}})=y_{\text{CE}}$. [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) compute it without and with the earlier turns in context. [Mayne et al. 2025](./#p=mayne2025llms) require the flip in a new context window.
- Minimal counterfactual ([Mayne et al. 2025](./#p=mayne2025llms)): $z_M\in\arg\min_{z'} d(z,z')$ subject to $f(\phi(z'))=y'$, where $d$ is Gower's distance on tabular inputs. Excess distance $\mathrm{ED}_i=d(z,z')-d(z,z_M)$ is averaged over valid SCEs.

### 2. Counterfactual simulatability: an explanation that predicts behaviour on other inputs

Here the counterfactual is not the explanation but the test input. An explanation given on $x$ is good to the extent that an observer who reads it, human or model, can predict the model's output on other inputs $x'$. [Chen et al. 2023](./#p=pmlr-v235-chen24bl) give the definition and two metrics, precision and generality. Both are computed over the counterfactuals the observer judges simulatable. A later group narrows the observer's task to predicting the effect of a named edit. [Karvonen et al. 2026](./#p=karvonen2026would) and [Anonymous 2026d](./#p=anon2026trainingoversight) ask whether a specific prompt edit changes a behaviour. [Zeng et al. 2026](./#p=zeng2026evaluating) ask whether a perturbation changes the model's own majority answer. The entries disagree about what the notion measures: faithfulness, plausibility or usefulness (see Tensions). 21 entries from 14 papers (6 proposed, 11 adopted, 4 adapted).

> we propose to evaluate counterfactual simulatability of natural language explanations: whether an explanation can enable humans to precisely infer the model’s outputs on diverse counterfactuals of the explained input.
>
> — [Chen et al. 2023](./#p=pmlr-v235-chen24bl), Abstract

| Paper | Term | Kind | Definition (short quote or gloss) |
|---|---|---|---|
| [Chen et al. 2023](./#p=pmlr-v235-chen24bl) | counterfactual simulatability | informal | “whether an explanation can enable humans to precisely infer the model’s outputs on diverse counterfactuals of the explained input” |
| [Chen et al. 2023](./#p=pmlr-v235-chen24bl) | mental model / simulation | formal | “$h_{x,e_{x},o_{x}}(x^{\prime})$ denotes what the human infers to be $M$ ’s output on $x^{\prime}$ (simulation)” |
| [Chen et al. 2023](./#p=pmlr-v235-chen24bl) | simulation precision | formal | “the fraction of simulatable counterfactuals where humans’ simulation matches the model’s actual output” |
| [Chen et al. 2023](./#p=pmlr-v235-chen24bl) | simulation generality | formal | “one minus the average similarity between two simulatable counterfactuals” |
| [Turpin et al. 2023](./#p=turpin2023language) | counterfactual simulatability | informal | “whether model explanations on one input help humans predict what predictions models will give on other inputs” |
| [Turpin et al. 2025](./#p=turpin2025teaching) | counterfactual simulatability notion of faithfulness | criterion | “an explanation is faithful if and only if the explanation allows a human or model to accurately predict how the model will behave on other relevant inputs” |
| [Arcuschin et al. 2025](./#p=arcuschin2025chain) | counterfactual simulatability | informal | “the extent to which a model’s explanation on a certain input allows a user to predict the model’s answer for a different input” |
| [Hase & Potts 2026](./#p=hase2026counterfactual) | counterfactual simulatability | informal | “rewarding CoTs that allow for a simulator model to predict a model’s answer on a counterfactual input” |
| [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm) | counterfactual simulatability | informal | “This tests whether an observer can predict a model’s behavior given its explanation.” |
| [Hong & Roth 2026](./#p=hong2026llm) | counterfactual simulatability | informal | “an explanation is considered useful if it helps people anticipate how a model’s prediction would change on counterfactual inputs” |
| [Agarwal et al. 2024](./#p=agarwal2024faithfulness) | counterfactual simulatability | operational | Reports Chen et al.'s metrics but files counterfactual simulatability under plausibility-oriented evaluation, not faithfulness. |
| [Karvonen et al. 2026](./#p=karvonen2026would) | counterfactual simulatability | informal | “whether the explanation is useful for predicting model behavior on related counterfactual inputs” |
| [Karvonen et al. 2026](./#p=karvonen2026would) | counterfactual claim | operational | “Each claim asserts that a specific prompt edit changes how often a specified behavior occurs by at least 30 percentage points.” |
| [Anonymous 2026d](./#p=anon2026trainingoversight) | counterfactual prediction | informal | “questions about how the assistant’s behavior would change with a specific edit to the input” |
| [Zeng et al. 2026](./#p=zeng2026evaluating) | counterfactual question (Flip-Decision) | operational | “whether a model can predict whether a prompt perturbation will change its own aggregate behavior” |

and 6 more: [Chen et al. 2024](./#p=chen2025consistent) (counterfactual simulatability precision (explanation consistency)); [Pres et al. 2026b](./#p=pres2026selfctrl) (counterfactual simulatability evaluation); [Chua & Evans 2025](./#p=chua2025deepseek) (counterfactual simulation); [Hong & Roth 2026](./#p=hong2026llm) (counterfactual simulatability (acc_improvement)); [Karvonen et al. 2026](./#p=karvonen2026would) (counterfactual simulatability test (tool uplift)); [Karvonen et al. 2026](./#p=karvonen2026would) (explanation (counterfactual-testable behavioral claim)).

Formal versions ([Chen et al. 2023](./#p=pmlr-v235-chen24bl) unless noted):
- Mental model: $h_{x,e_x,o_x}:X\to O\cup\{\perp\}$, where $h(x')=\perp$ marks $x'$ as unsimulatable.
- Simulation precision: $\frac{1}{|C^*|}\sum_{x'\in C^*}\mathbf{1}[h_{e}(x')=o_{x'}]$ over the simulatable counterfactuals $C^*$.
- Simulation generality: one minus the mean pairwise similarity $\alpha$ (BLEU, cosine or Jaccard) among the simulatable counterfactuals.
- Gain over a no-explanation baseline: $\Delta\mathrm{OverallAcc}=\mathrm{OverallAcc}(P_2)-\mathrm{OverallAcc}(P_1)$, where $P_2$ includes the self-explanation and $P_1$ does not ([Hong & Roth 2026](./#p=hong2026llm)).
- Counterfactual claim label ([Karvonen et al. 2026](./#p=karvonen2026would)): “A claim is true if its edit moved the behavior rate by at least 50 percentage points and false if it moved the rate by at most 15.”

### 3. The counterfactual set: which inputs simulatability is tested on

Seven entries define the set of inputs on which an explanation is tested in cluster 2. They give four different answers:
- related questions that an LLM generates from the explanation ([Chen et al. 2023](./#p=pmlr-v235-chen24bl));
- the input with a planted cue removed, or LLM-generated questions rejection-sampled so that the simulator and the model disagree ([Hase & Potts 2026](./#p=hase2026counterfactual));
- minimal what-if variations organised by the Gricean maxims ([Hong & Roth 2026](./#p=hong2026llm));
- real dataset rows within a small Hamming distance of the original ([Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm), [Lewis-Lim et al. 2026](./#p=lewislim2026efficient)).

[Chen et al. 2023](./#p=pmlr-v235-chen24bl) note that the scores depend on this distribution. 7 entries from 5 papers (5 proposed, 2 adopted).

> For a question $x$ , we construct a set of counterfactuals $C(x)$ : inputs that are similar to $x$ , but differ in some way, such that a faithful explanation of the reference model’s behavior on $x$ should help predict its behavior across $C(x)$ .
>
> — [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm), §2.2

| Paper | Term | Kind | Definition (short quote or gloss) |
|---|---|---|---|
| [Chen et al. 2023](./#p=pmlr-v235-chen24bl) | counterfactual (distribution) | informal | “we define the counterfactual distribution loosely to be any simulatable counterfactual in the natural language distribution and use LLMs to generate” |
| [Hase & Potts 2026](./#p=hase2026counterfactual) | counterfactual input (cue-based vs model-based) | taxonomy | “We insert a cue into the original input. The counterfactual input is the input without the cue.” |
| [Hong & Roth 2026](./#p=hong2026llm) | natural language counterfactuals | informal | “minimal what-if variations of an input” |
| [Hong & Roth 2026](./#p=hong2026llm) | pragmatic counterfactual taxonomy | taxonomy | “Each counterfactual corresponds to a controlled manipulation of one or more maxims.” |
| [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm) | counterfactual set C(x) | informal | “inputs that are similar to $x$ , but differ in some way” |
| [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm) | data-driven counterfactuals | operational | “identifying existing dataset questions semantically close to $x$ , quantifying closeness with Hamming distance” |
| [Lewis-Lim et al. 2026](./#p=lewislim2026efficient) | counterfactual input (similar real input) | informal | “similar real inputs from the same dataset rather than synthetic perturbations” |

Formal version: [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm) take $C(x)$ to be the dataset rows within Hamming distance $\le 2$ of $x$, balanced by label.

### 4. Input intervention: the same input with one cue or factor changed

This is the largest cluster. A counterfactual is the original input with one specified element removed, inserted or replaced, everything else held fixed. A difference between the two outputs is read as the causal influence of that element. What is changed varies from paper to paper: a planted hint or biasing feature; a protected attribute such as nationality, profession or user background; a structured factor or concept; an incentive in the environment; or an earlier turn of a conversation. Of the 27 entries, 19 are proposed, so most papers build their own variant. Two entries state the intervention in Pearl's do-notation ([Matton et al. 2025](./#p=matton2025walk), [Anonymous 2026c](./#p=anon2026improving)). The entry from [Haskins et al. 2026](./#p=haskins2026training) is the one in which the counterfactual is not run: an LLM judge only imagines it. 27 entries from 21 papers (19 proposed, 3 adopted, 5 adapted).

> Let $\mathbf{x}_{c_{m}\rightarrow c_{m}^{\prime}}$ denote the counterfactual input that results from an intervention that changes the concept $C_{m}$ from $c_{m}$ to $c_{m}^{\prime}$ but keeps all other aspects of the question $\mathbf{x}$ (including the values of all other concepts) the same.
>
> — [Matton et al. 2025](./#p=matton2025walk), §2

| Paper | Term | Kind | Definition (short quote or gloss) |
|---|---|---|---|
| [Matton et al. 2025](./#p=matton2025walk) | counterfactual input (concept intervention) | formal | “changes the concept $C_{m}$ from $c_{m}$ to $c_{m}^{\prime}$ but keeps all other aspects of the question $\mathbf{x}$ (including the values of all other concepts) the same” |
| [Zhang et al. 2026](./#p=zhang2026audit) | counterfactual replacement (perturbed input) | formal | “The perturbed input $x^{\setminus j,v}$ is identical to $x$ except that factor $j$ is replaced by $v$ .” |
| [Zhang et al. 2026](./#p=zhang2026audit) | counterfactual distribution (perturbation design) | criterion | “vary the target factor enough to change the answer when that factor matters, and leave the other factors fixed” |
| [Guo et al. 2026](./#p=guo2026introspective) | cue-ablated input | formal | “$x_{\setminus C}$ for the cue-ablated input obtained by removing $C$ from $x$” |
| [Ferreira et al. 2025](./#p=ferreira2026truthful) | counterfactual test of cue reliance | criterion | “evidence that the protected feature (which was omitted when producing $y^{\prime}$ ) exerts causal influence on $\operatorname{pred}(y)$” |
| [Turpin et al. 2023](./#p=turpin2023language) | two types of counterfactuals | taxonomy | “model predictions are insensitive to features not referenced by explanations … model predictions are sensitive to features that are relied on by their explanations” |
| [Karvonen et al. 2026](./#p=karvonen2026would) | cue influence (hint-setting ground truth) | criterion | “Ground truth comes from removing the cue: if the model’s answer flips, the cue mattered.” |
| [Shiromani et al. 2026](./#p=shiromani2026necessary) | nearby counterfactual (the hint caused the answer) | criterion | “Comparing W to a no-hint prompt would confound the hint’s content with its presence” |
| [Alon et al. 2026](./#p=alon2026faithfulness) | counterfactual (hint-induced answer flip) | formal | “If the model’s new answer with the hint $a_{1}$ differs from the original $a_{0}$ ( $a_{0}\neq a_{1}=hint$ ), we regard this as a counterfactual” |
| [Li 2026](./#p=li2026monitorability) | counterfactual hint effect | criterion | “per-problem no-hint / correct-hint / incorrect-hint generations defining influence from the counterfactual answer shift” |
| [Anonymous 2026c](./#p=anon2026improving) | counterfactual target (intervention-caused outcome) | informal | “detecting intervention-caused outcomes is a counterfactual target” |
| [Cheah et al. 2026](./#p=cheah2026training) | counterfactual prompt | formal | “an intervention $\Delta$ is inserted to create a counterfactual prompt $x^{\prime}=x\oplus\Delta$” |
| [Schoen et al. 2025](./#p=schoen2025stress) | counterfactual condition | informal | “the counterfactual condition reverses this incentive” |
| [Zeng et al. 2026](./#p=zeng2026evaluating) | fork (counterfactual conversation variant) | informal | “rewind to a previous turn, modify one element, replay to completion” |
| [Haskins et al. 2026](./#p=haskins2026training) | counterfactual autorater | operational | “could the model’s reasoning plausibly have been produced in a scenario where no defect existed?” |

and 12 more: [Ferreira et al. 2025](./#p=ferreira2026truthful) (counterfactual (prompt)); [Zhang et al. 2026](./#p=zhang2026audit) (Counterfactual Brier Score (CBS)); [Shiromani et al. 2026](./#p=shiromani2026necessary) (same-answer counterfactual (dependence label)); [Ferreira et al. 2026](./#p=ferreira2026outofsight) (counterfactual (unhinted input X=0)); [Wang et al. 2025b](./#p=wang2025evaluating) (counterfactual samples (neutral query variant)); [Matton et al. 2025](./#p=matton2025walk) (causal concept effect (CE)); [Arcuschin et al. 2026](./#p=arcuschin2026biases) (counterfactual input variations (paired concept interventions)); [Farquhar et al. 2025](./#p=farquhar2025mona) (counterfactual reward (nationality intervention)); [Karvonen et al. 2026](./#p=karvonen2026would) (counterfactual experiment (prompt edit)); [Pres et al. 2026a](./#p=pres2026consistency) (counterfactual context); [Chuang et al. 2024](./#p=chuang2026faithlm) (contrary hint); [Li et al. 2026](./#p=li2026when) (counterfactual answer (edited evidence)).

Formal versions:
- Factor replacement: $x^{\setminus j,v}$ equals $x$ except that factor $j$ takes the value $v\sim\mathcal{P}_j$ ([Zhang et al. 2026](./#p=zhang2026audit)).
- Cue ablation: $x_{\setminus C}$. The ground truth compares $M(x)$ with $M(x_{\setminus C})$ ([Guo et al. 2026](./#p=guo2026introspective)).
- Insertion: $x'=x\oplus\Delta$ ([Cheah et al. 2026](./#p=cheah2026training)).
- Causal concept effect: $\mathrm{CE}(\mathbf{x},C_m)$ is the mean over $c'_m\in\mathbb{C}'_m$ of $\mathrm{KL}\big(P_{\mathcal{M}}(Y\mid\mathbf{x}_{c_m\to c'_m})\,\|\,P_{\mathcal{M}}(Y\mid\mathbf{x})\big)$ ([Matton et al. 2025](./#p=matton2025walk)).
- Hint flip: $a_0\neq a_1=\text{hint}$ ([Alon et al. 2026](./#p=alon2026faithfulness)).
- Counterfactual Brier score: $S=-\sum_j(p_j-\hat{D}_j)^2$, where $\hat{D}_j$ is the fraction of $n$ perturbations of factor $j$ that flip the answer ([Zhang et al. 2026](./#p=zhang2026audit)).
- Potential outcome: for a unit observed under the intervention, the counterfactual is $Y(0)$ under $do(X=0)$. It cannot be observed, only bounded ([Anonymous 2026c](./#p=anon2026improving)).

### 5. The counterfactual test of explanations: does the explanation mention the edit?

These entries use the same counterfactual as cluster 4, an input edit, but they judge the explanation rather than the model's reliance on the edited element. The procedure follows Atanasova et al. 2023. Words are inserted into the input. If the prediction changes and the explanation for the edited instance does not mention the inserted words, the explanation is counted as unfaithful. Variants replace the inserted words with LLM-generated modifiers ([Wang & Atanasova 2025](./#p=wang2025selfcritique)), with hint keywords ([Alon et al. 2026](./#p=alon2026faithfulness)) or with paired concept edits ([Arcuschin et al. 2026](./#p=arcuschin2026biases)). The Correlational Counterfactual Test of Siegel et al. 2024 weights each instance by the shift in the label distribution. No entry proposes the test, and its source is not in the map. 11 entries from 10 papers (9 adopted, 2 adapted).

> The counterfactual test works by making an intervention to the original instance to get an intervened instance. The evaluation then consists of two steps: (1) Identify counter instances: intervened instances whose prediction changes compared to the original instance. (2) Identify unfaithful instances: counter instances whose NLEs (generated by baseline methods or SR-NLE) do not contain the intervened word (determined by string matching).
>
> — [Wang & Atanasova 2025](./#p=wang2025selfcritique), §4.3. Atanasova is a co-author of this paper.

| Paper | Term | Kind | Definition (short quote or gloss) |
|---|---|---|---|
| [Parcalabescu & Frank 2023](./#p=parcalabescu2023measuring) | Counterfactual Edits (test) | operational | “If the LLM changes its prediction after the counterfactual intervention, and the explanation does not mention the inserted words, the explanation is judged unfaithful” |
| [Wang & Atanasova 2025](./#p=wang2025selfcritique) | counterfactual test | operational | “counter instances whose NLEs (generated by baseline methods or SR-NLE) do not contain the intervened word (determined by string matching)” |
| [Wang & Atanasova 2025](./#p=wang2025selfcritique) | intervention (inserted adjective/adverb) | operational | “For nouns, we prepend a random adjective, and for verbs, we prepend a random adverb.” |
| [Zaman & Srivastava 2025b](./#p=zaman2025chainofthought) | counterfactual edit (faithfulness test) | operational | “insert tokens that flip the prediction and check whether explanations reflect these edits” |
| [Zaman & Srivastava 2025a](./#p=zaman2025causal) | Counterfactual Edits (faithfulness metric) | operational | “assess changes in explanations resulting from input modifications” |
| [Gema et al. 2026](./#p=gema2026chainofthought) | counterfactual approaches (explanation faithfulness tests) | informal | “test whether free-text explanations reflect model decisions through input edits, reconstruction, or output-distribution shifts” |
| [Li et al. 2025a](./#p=li2025drift) | counterfactual generation (perturbed input) | informal | “we modify key parts w of the inputs I and examine the resulting changes in the generated rationales” |
| [Bhan et al. 2025](./#p=bhan2025did) | Counterfactual Intervention (CI) faithfulness test | operational | “The self-NLE is deemed faithful if it aligns with the specific CI that caused the prediction change.” |
| [Alon et al. 2026](./#p=alon2026faithfulness) | Counterfactual Test (CT) | operational | “verifying whether the explanation explicitly mentions a small set of distinctive keywords associated with each hint type” |
| [Arcuschin et al. 2026](./#p=arcuschin2026biases) | Correlational Counterfactual Test (CCT) | operational | “considers the total shift in predicted label distributions rather than just binary outcomes” |
| [Cheah et al. 2026](./#p=cheah2026training) | counterfactual tests | informal | “creating pairs of factual and counterfactual inputs to examine how model decisions and explanations shift under controlled interventions” |

Formal version, restated from [Parcalabescu & Frank 2023](./#p=parcalabescu2023measuring) and [Wang & Atanasova 2025](./#p=wang2025selfcritique): let $x'$ be the edited input and $w$ the inserted words. An instance is unfaithful when $f(x')\neq f(x)$ and $w$ does not occur in the explanation $e(x')$. [Wang & Atanasova 2025](./#p=wang2025selfcritique) check occurrence by string matching.

### 6. Intervention on the reasoning: an edited, truncated or resampled chain of thought

The counterfactual is a version of the model's own intermediate output, usually the chain of thought, with the input held fixed. The edits include:
- replacing a step with a contradiction;
- swapping an operator;
- altering the conclusion;
- substituting an irrelevant fact;
- truncating the trace;
- resampling a sentence to different content.

The same idea is applied to other intermediates: a generated mediator ([Somov et al. 2026](./#p=somov2026breaking)), a stated plan ([Fareed 2026](./#p=fareed2026plan)), and a rationale span read by a consistency head ([Ananthula & Kumarappan 2026](./#p=ananthula2026decodable)). If the answer follows the edit, the answer is taken to depend on the reasoning. [Akter et al. 2025](./#p=akter2025causal) call the resulting sensitivity a measure of [faithfulness](#faithfulness). 26 entries from 19 papers (19 proposed, 6 adopted, 1 adapted).

> Also, it should be constructed to admit localized output-level counterfactual edits to the reasoning trace while holding the input fixed, allowing attribution of ensuing output changes to the stated reasoning.
>
> — [Han et al. 2026](./#p=han2026rfeval), §3.1

| Paper | Term | Kind | Definition (short quote or gloss) |
|---|---|---|---|
| [Han et al. 2026](./#p=han2026rfeval) | output-level counterfactual reasoning intervention | informal | “localized output-level counterfactual edits to the reasoning trace while holding the input fixed” |
| [Han et al. 2026](./#p=han2026rfeval) | proper counterfactual contrast (contrast precondition) | criterion | Only pairs where injected reasoning opposes the model's own baseline stance count; otherwise a 'no change' outcome is ambiguous. |
| [Khanzadeh 2026](./#p=khanzadeh2026project) | counterfactual thought | formal | “$do(s_{k}=s^{\prime}_{k})$ , where $s^{\prime}_{k}$ is a counterfactual thought generated to contradict the original reasoning” |
| [Khanzadeh 2026](./#p=khanzadeh2026project) | counterfactual answer | formal | “we generate a counterfactual answer $a^{*}$ by re-executing the agent from the point of intervention” |
| [Akter et al. 2025](./#p=akter2025causal) | Counterfactual Sensitivity (CS) | formal | “a formal, causally-motivated measure of faithfulness we term Counterfactual Sensitivity” |
| [Akter et al. 2025](./#p=akter2025causal) | Counterfactual Outcome Sensitivity (COS) | operational | “the percentage of correctly-answered questions where logical perturbations change the final answer” |
| [Cox et al. 2026](./#p=cox2026posthoc) | counterfactual rationale | informal | “a counterfactual rationale that entails the opposite label (substitution)” |
| [Swaroop et al. 2025](./#p=swaroop2025lift) | counterfactual intervention (irrelevant-fact step swap) | informal | “we replace $r_{i}$ with a domain-matched but irrelevant fact” |
| [Xiong et al. 2026](./#p=xiong2026monitorability) | counterfactual draft | informal | “we alter the draft’s conclusion to create a counterfactual version $T^{\prime}$” |
| [Macar et al. 2025](./#p=macar2025thought) | counterfactual importance | formal | “resampling from position $i$ onward, keeping $S_{1},\ldots,S_{i-1}$ as prefix” |
| [Macar et al. 2025](./#p=macar2025thought) | counterfactual++ importance | formal | “the causal impact when a sentence’s semantic content is completely absent from the entire trace” |
| [Parekh & Goyal 2026](./#p=parekh2026drop) | prefix counterfactual (forced answering) | formal | “append a stop-and-answer instruction to prefix $y_{1:t}$ and greedily decode an answer” |
| [Shen et al. 2026](./#p=shen2026detecting) | counterfactual intervention (on CoT) | informal | “parts of the CoT are perturbed to examine their effect on the final prediction” |
| [Paul et al. 2024](./#p=paul2024making) | counterfactual reasoning (intervention on input or mediator) | informal | “measure their effect on the reasoning outcome $Y$ by keeping $R$ fixed (direct effect)” |
| [Fareed 2026](./#p=fareed2026plan) | counterfactual plan seeding | criterion | “swaps between two genuinely valid, agent-endorsed plans” |

and 11 more: [Anonymous 2026a](./#p=anon2026generating) (counterfactual target (intervention contexts)); [Anonymous 2026b](./#p=anon2026grace) (counterfactual perturbation regimes); [Shen et al. 2026](./#p=shen2026detecting) (counterfactual necessity score); [Macar et al. 2025](./#p=macar2025thought) (resilience); [Schoen et al. 2025](./#p=schoen2025stress) (counterfactual interventions on the CoT); [Lv et al. 2026](./#p=lv2026geofaith) (step-level counterfactual verification); [Kudo et al. 2024](./#p=kudo2024llms) (counterfactual CoT content); [Angdembay et al. 2026](./#p=angdembay2026two) (graph-targeted counterfactual interventions); [Somov et al. 2026](./#p=somov2026breaking) (counterfactual intervention (CNF)); [Ananthula & Kumarappan 2026](./#p=ananthula2026decodable) (counterfactual following (span swap)); [Ananthula & Kumarappan 2026](./#p=ananthula2026decodable) (counterfactual example (proof/rationale cross-wiring)).

Formal versions:
- Counterfactual Sensitivity: $\mathrm{CS}(X;T\to T')=\mathrm{KL}\big(p(Y\mid X,T)\,\|\,p(Y\mid X,T')\big)$. Counterfactual Outcome Sensitivity (COS) is its binary-flip version ([Akter et al. 2025](./#p=akter2025causal)).
- Step intervention $do(s_k=s'_k)$, with counterfactual answer $a^*=f_a(q,\{s_1,\dots,\iota(s_k),\dots,s^*_n\};\theta)$, where the later steps are re-sampled ([Khanzadeh 2026](./#p=khanzadeh2026project)).
- Counterfactual importance: $\mathrm{KL}\big[p(A'\mid T_i\not\approx S_i)\,\|\,p(A)\big]$. Counterfactual++ importance: $\mathrm{KL}\big[p(A'\mid \forall j\ge i: T_j\not\approx S_i)\,\|\,p(A)\big]$ ([Macar et al. 2025](./#p=macar2025thought)).
- Commitment point: $c=\min\{t: F(x,y_{1:t})=\text{correct answer}\}$ ([Parekh & Goyal 2026](./#p=parekh2026drop)).
- Contrast precondition: $\delta(x,r';\mathcal{M})=\mathbf{1}\{S(r)\neq S(r')\}$ ([Han et al. 2026](./#p=han2026rfeval)).
- Counterfactual necessity: $N=\lambda(1-\cos)+(1-\lambda)\,\mathrm{KL}$. The cosine is taken between sentence embeddings and the KL between downstream predictions, after a token is replaced and the sentence suffix regenerated ([Shen et al. 2026](./#p=shen2026detecting)).

### 7. Counterfactual training pairs

Nine entries use counterfactuals as training data rather than as a test. The counterfactual is a rationale or context, paired with the output the model should give on it. The training goes in one of two opposite directions:
- Sensitivity: the model is trained to follow a rationale that leads to a different answer ([Wang et al. 2023](./#p=wang2023scott), [Paul et al. 2024](./#p=paul2024making), [Wang et al. 2026](./#p=wang2026case), [Akter et al. 2025](./#p=akter2025causal)), or to lower its confidence when the rationale is perturbed ([Wang et al. 2022](./#p=wang2023pinto)).
- Invariance: the model is trained to give, under a biasing or pressuring context, the response it gives without that context ([Chua et al. 2024](./#p=chua2024biasaugmented), [Tang & Khanna 2026](./#p=tang2026unlearning)).

9 entries from 7 papers (7 proposed, 2 adapted).

> we train the student to conduct counterfactual reasoning Roese (1997), i.e., answer accordingly when the rationale is leading to a different answer.
>
> — [Wang et al. 2023](./#p=wang2023scott), §3.2

| Paper | Term | Kind | Definition (short quote or gloss) |
|---|---|---|---|
| [Wang et al. 2023](./#p=wang2023scott) | counterfactual reasoning | informal | “answer accordingly when the rationale is leading to a different answer” |
| [Wang et al. 2023](./#p=wang2023scott) | counterfactual rationale | formal | “a counterfactual rationale $r^{{}^{\prime}}$ that leads to the wrong answer $a^{{}^{\prime}}$” |
| [Paul et al. 2024](./#p=paul2024making) | counterfactual chains | informal | “alternative chains that can lead to different outcomes” |
| [Wang et al. 2026](./#p=wang2026case) | counterfactual CoT | informal | “the answer is replaced by a stronger-LLM-generated counterfactual answer $y_{i}^{\prime}$ satisfying $y_{i}^{\prime}\neq y_{i}$” |
| [Akter et al. 2025](./#p=akter2025causal) | counterfactual trace | informal | “creates minimally-perturbed counterfactual traces by swapping critical operators (e.g., ‘+’ to ‘-’), then penalizes the model if predictions remain unchanged” |
| [Wang et al. 2022](./#p=wang2023pinto) | counterfactual regularization (perturbed rationales) | informal | “the reasoning module is regularized to output less confident predictions when the rationale is not utilized properly” |
| [Chua et al. 2024](./#p=chua2024biasaugmented) | counterfactual inputs (bias augmentation) | informal | “a more diverse range of counterfactual inputs than just the presence vs. absence of biasing augmentations” |
| [Tang & Khanna 2026](./#p=tang2026unlearning) | counterfactual distillation (CD) | formal | “teacher-forces the model’s own neutral response under the trigger” |
| [Tang & Khanna 2026](./#p=tang2026unlearning) | pressure-aware counterfactual targets | informal | “the model’s own honest response, with a trace that registers the pressure and declines to be moved by it” |

Formal versions:
- Counterfactual loss: $\mathcal{L}_{cf}=-\sum_i\log P(t_i\mid q,r',t_{<i})$ over the answer tokens, where the teacher rationalises a random wrong answer $a'$ as $r'$ ([Wang et al. 2023](./#p=wang2023scott)).
- Counterfactual distillation: $\ell_{CD}=-\mathbb{E}\log\pi_\theta(y^H,t^H\mid x,c^+)$, with targets sampled from $\pi_0(\cdot\mid x,c^-)$, the model's response without the pressure context ([Tang & Khanna 2026](./#p=tang2026unlearning)).

### 8. Counterfactual internal states

The counterfactual is an alternative value of something inside the model:
- an attention distribution, with the encoder states held fixed ([Jain & Wallace 2019](./#p=jain2019attention));
- activations taken from a counterfactual input and patched into the original run ([Li et al. 2025b](./#p=li2025training), [Bhupatiraju & Nyaupane 2026](./#p=bhupatiraju2026stated));
- an edited knowledge triple, injected in context or by weight editing ([Zaman & Srivastava 2025a](./#p=zaman2025causal));
- a token-permuted span at which a Jacobian is taken ([Wang et al. 2025a](./#p=wang2025causallyenhanced)).

In the patching entries, the counterfactual input serves only as the source of the activations. 7 entries from 6 papers (5 proposed, 2 adopted).

> scenarios corresponding to alternative (counterfactual) attention weights. The idea is to investigate whether the prediction would have been different, had the model emphasized (attended to) different input features.
>
> — [Jain & Wallace 2019](./#p=jain2019attention), §4.2

| Paper | Term | Kind | Definition (short quote or gloss) |
|---|---|---|---|
| [Jain & Wallace 2019](./#p=jain2019attention) | counterfactual attention weights | informal | “whether the prediction would have been different, had the model emphasized (attended to) different input features” |
| [Jain & Wallace 2019](./#p=jain2019attention) | adversarial attention | operational | “maximally distinct from $\hat{\alpha}$ but that nonetheless yields an equivalent prediction” |
| [Wiegreffe & Pinter 2019](./#p=wiegreffe2019attention) | counterfactual attention weights (counterfactual framework) | criterion | “if a model is capable of producing multiple sets of diverse attention weights for the same prediction, then the relationship between inputs and outputs used to make predictions is not understood by attention analysis” |
| [Li et al. 2025b](./#p=li2025training) | counterfactual input (activation patching) | informal | “a counterfactual sentence $x^{\prime}$ with the same relation but differing subject and object” |
| [Bhupatiraju & Nyaupane 2026](./#p=bhupatiraju2026stated) | counterfactual (per-hop knowledge-base edit) | informal | “a single fact resolving hop $k$ which is further altered” |
| [Zaman & Srivastava 2025a](./#p=zaman2025causal) | counterfactual (knowledge edit) | informal | “These counterfactuals yield the same answer but are based on different reasoning.” |
| [Wang et al. 2025a](./#p=wang2025causallyenhanced) | source-side counterfactual (token permutation) | formal | “permuting the tokens of $A$ (and of $M$ when present)” |

Formal versions:
- Activation patching: $M(x;h(x)\leftarrow h(x'))$ ([Li et al. 2025b](./#p=li2025training)).
- Adversarial attention: the largest JSD from the original attention $\hat\alpha$ among weights that keep the output TVD $\le\epsilon$, with $\epsilon=0.01$ for classification and $0.05$ for QA ([Jain & Wallace 2019](./#p=jain2019attention)).

### Lineage

Of the 129 entries, 59 are borrowed: 44 adopted and 15 adapted. Counting each entry once per cited source, the most-borrowed sources are:

| Source | Entries | Papers | In the map |
|---|---|---|---|
| Atanasova et al. 2023 | 12 | 10 | no |
| [Chen et al. 2023](./#p=pmlr-v235-chen24bl) | 11 | 9 | yes |
| Siegel et al. 2024 | 6 | 6 | no |
| Doshi-Velez & Kim 2017 | 6 | 6 | no |
| Pearl (2001, 2009, 2021) | 5 | 5 | no |
| [Turpin et al. 2023](./#p=turpin2023language) | 5 | 4 | yes |
| [Lanham et al. 2023](./#p=lanham2023measuring) | 3 | 3 | yes |
| Hase & Bansal 2020 | 3 | 3 | no |
| Wachter et al. 2017 | 3 | 2 | no |
| Siegel et al. 2025 | 3 | 2 | no |

Only three of the ten are in the map. The most-borrowed definition in this family, the counterfactual test of Atanasova et al., comes from a paper outside it. Atanasova et al. (12 entries) and [Chen et al. 2023](./#p=pmlr-v235-chen24bl) (11) are borrowed about equally often, but they head separate clusters, 5 and 2. No entry cites both as a source. [Arcuschin et al. 2025](./#p=arcuschin2025chain) come closest: they name Atanasova et al. in their quote while filing the test under Chen et al.'s framework.

The chains of borrowing:
- **Simulatability.** Doshi-Velez & Kim 2017 and Hase & Bansal 2020 lead to [Chen et al. 2023](./#p=pmlr-v235-chen24bl) (adapted). Chen et al. are then borrowed by [Turpin et al. 2023](./#p=turpin2023language), [Agarwal et al. 2024](./#p=agarwal2024faithfulness), [Chen et al. 2024](./#p=chen2025consistent), [Chua & Evans 2025](./#p=chua2025deepseek), [Arcuschin et al. 2025](./#p=arcuschin2025chain), [Turpin et al. 2025](./#p=turpin2025teaching), [Hong & Roth 2026](./#p=hong2026llm), [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm) and [Karvonen et al. 2026](./#p=karvonen2026would). Two second-hand links follow: [Karvonen et al. 2026](./#p=karvonen2026would) to [Anonymous 2026d](./#p=anon2026trainingoversight), and [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm) to [Lewis-Lim et al. 2026](./#p=lewislim2026efficient). [Hase & Potts 2026](./#p=hase2026counterfactual) cite Doshi-Velez & Kim directly and are cited in turn by [Guo et al. 2026](./#p=guo2026introspective).
- **Self-generated counterfactual explanations.** Wachter et al. 2017 supply the definition in [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) and [Mayne et al. 2025](./#p=mayne2025llms). The self-generated form passes from [Madsen et al. 2024](./#p=madsen2024self) to [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) (adapted), then to [Mayne et al. 2025](./#p=mayne2025llms), then to [Zeng et al. 2026](./#p=zeng2026evaluating).
- **Counterfactual test.** Atanasova et al. 2023 are borrowed by ten papers and Siegel et al. 2024 by six. [Cheah et al. 2026](./#p=cheah2026training) merge the test with Turpin et al.'s hint pairs and cite both.
- **Cue pairs.** [Turpin et al. 2023](./#p=turpin2023language) are borrowed by [Ferreira et al. 2026](./#p=ferreira2026outofsight), [Karvonen et al. 2026](./#p=karvonen2026would) and [Cheah et al. 2026](./#p=cheah2026training). [Chen et al. 2025](./#p=chen2025reasoning) are borrowed by [Alon et al. 2026](./#p=alon2026faithfulness), and [Li et al. 2025b](./#p=li2025training) by [Guo et al. 2026](./#p=guo2026introspective).
- **Reasoning interventions.** [Lanham et al. 2023](./#p=lanham2023measuring) are borrowed by [Parekh & Goyal 2026](./#p=parekh2026drop), [Shen et al. 2026](./#p=shen2026detecting) and [Li et al. 2025a](./#p=li2025drift). [Paul et al. 2024](./#p=paul2024making) are borrowed by [Kudo et al. 2024](./#p=kudo2024llms), and Bogdan et al. 2025 by [Macar et al. 2025](./#p=macar2025thought).
- **Others.** [Jain & Wallace 2019](./#p=jain2019attention) are borrowed by [Wiegreffe & Pinter 2019](./#p=wiegreffe2019attention), and [Chua et al. 2024](./#p=chua2024biasaugmented) by [Tang & Khanna 2026](./#p=tang2026unlearning).

Four kinds of drift appear as the definitions are passed on.

1. **Simulatability changes status.** [Chen et al. 2023](./#p=pmlr-v235-chen24bl) ask whether an explanation lets humans “precisely infer the model’s outputs on diverse counterfactuals of the explained input”. [Turpin et al. 2023](./#p=turpin2023language) call this “The counterfactual simulatability framework of explanation faithfulness”. In [Turpin et al. 2025](./#p=turpin2025teaching) it becomes a biconditional: “an explanation is faithful if and only if the explanation allows a human or model to accurately predict how the model will behave on other relevant inputs”. [Hong & Roth 2026](./#p=hong2026llm) change what is predicted, to “how a model’s prediction would change on counterfactual inputs”. [Karvonen et al. 2026](./#p=karvonen2026would) change the counterfactuals: Chen et al. are said to argue that “a good explanation should help an observer predict behavior under counterfactual edits”. Three things shift along the way. The observer goes from humans to “a human or model”. The counterfactuals go from LLM-generated related questions to edits. And the notion goes from a metric that Chen et al. call a special case of faithfulness to a necessary and sufficient condition for it.
2. **The counterfactual explanation acquires a target and changes author.** In [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can), after Wachter et al., it is an input that “would lead the model to change its decision”. [Mayne et al. 2025](./#p=mayne2025llms) tie it to “a specific alternative output”, and [Madsen et al. 2024](./#p=madsen2024self) to “the opposite prediction”. The edit is then no longer found by an optimiser. [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) write that “we do not solve an optimization problem and instead ask the model itself to generate the counterfactual explanation”. [Zeng et al. 2026](./#p=zeng2026evaluating) recast it as “the propose-and-verify form of Edit-Proposal”.
3. **The counterfactual test widens.** [Parcalabescu & Frank 2023](./#p=parcalabescu2023measuring) describe Atanasova et al.'s trained helper model that inserts words. Later papers widen the test step by step. [Gema et al. 2026](./#p=gema2026chainofthought) describe it as testing explanations “through input edits, reconstruction, or output-distribution shifts”. [Bhan et al. 2025](./#p=bhan2025did) have “auxiliary models to generate counterfactual texts designed to change the LLM outcome”. [Cheah et al. 2026](./#p=cheah2026training) use controlled interventions “such as the introduction of biasing hints”. By the end, the label "counterfactual test" also covers Turpin-style hint pairs, which [Turpin et al. 2023](./#p=turpin2023language) had filed under counterfactual simulatability.
4. **Borrowers add the word.** [Lanham et al. 2023](./#p=lanham2023measuring) use "counterfactual" once in the whole text, and only for a cited work. Their truncation test reappears as "prefix counterfactuals" in [Parekh & Goyal 2026](./#p=parekh2026drop). [Chen et al. 2025](./#p=chen2025reasoning) use the word only in related work and in a reference title, yet [Alon et al. 2026](./#p=alon2026faithfulness) apply it to the same hint-flip filter: “we regard this as a counterfactual”.

### Attribution check

Thirty adopted or adapted entries, from 25 papers, cite at least one source that is in the map. Each was compared with the source paper's own entries. The source text was then opened for eight sources, covering 11 borrowings. These were chosen because they rest on the most-borrowed sources in the map or because they disagree with the source's entries.

**Confirmed mismatches**

1. [Turpin et al. 2023](./#p=turpin2023language) #2, citing [Hase et al. 2020](./#p=hase2020leakageadjusted). Turpin et al. cite "Hase et al., 2020", the LAS paper, for explanations that “help humans predict what predictions models will give on other inputs”. Hase et al. 2020 never state this. Their simulator predicts the model's output on the explained input itself: simulator correctness is $\mathbf{1}[\hat{y}_i\mid x_i,\hat{e}_i]$, and the word "counterfactual" does not occur in their text. [Chen et al. 2023](./#p=pmlr-v235-chen24bl) place the same paper on the other side of the line: "In prior work that evaluates the simulatability of a natural language explanation, the simulation input is the explained input Hase et al. (2020)". The nearest statement in Hase et al. is their general definition, "A model is simulatable to the extent that an observer, or simulator, can predict its outputs." Chen et al. cite a different paper, Hase & Bansal 2020, for the "long history" of counterfactual simulatability.
2. [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm) #6, citing [Hase et al. 2020](./#p=hase2020leakageadjusted). This is the same citation for counterfactual simulatability, and it fails for the same reason. The paper's second use of Hase et al. 2020 does match the source: "measuring prediction accuracy relative to a baseline without explanation access". Hase et al. "introduce an input-only baseline".
3. [Shen et al. 2026](./#p=shen2026detecting) #6, citing [Turpin et al. 2023](./#p=turpin2023language). Shen et al. cite Turpin et al. (their reference [40]) for counterfactual interventions “where parts of the CoT are perturbed to examine their effect on the final prediction”. Turpin et al. perturb only the input: "we compare model predictions on unmodified inputs (‘‘unbiased context’’) against predictions on inputs that have a biasing feature applied (‘‘biased context’’)". The nearest statement is their pair of input-feature counterfactuals (cluster 4). [Lanham et al. 2023](./#p=lanham2023measuring), cited in the same place, does edit the CoT.
4. [Li et al. 2025a](./#p=li2025drift) #4, citing [Lanham et al. 2023](./#p=lanham2023measuring). Li et al. cite Lanham et al., together with Atanasova et al., for counterfactual generation in which “we modify key parts w of the inputs I”. Lanham et al. never edit the input. All four of their tests act on the CoT: early answering ("Truncate the original CoT before answering"), adding mistakes, paraphrasing, and filler tokens. They also never call these tests counterfactual. The nearest statement is the adding-mistakes test: "If inserting a mistake into the CoT changes the model’s final answer, then the model is likely not ignoring the CoT." Elsewhere in the same paper, Li et al. describe Lanham et al.'s perturbation correctly, as corrupted chain-of-thought.

**Partial mismatches**

5. [Turpin et al. 2025](./#p=turpin2025teaching) #2, citing [Chen et al. 2023](./#p=pmlr-v235-chen24bl), Doshi-Velez & Kim 2017 and Hase & Bansal 2020. Chen et al. state no "if and only if". They describe prior work in which "faithfulness is usually evaluated by whether it is possible to train a black-box model to predict the model’s outputs based on its explanations", with no restriction to other inputs. They also write that "simulatability is a special case of faithfulness, which requires the output predictor to be humans rather than arbitrary black-box models. Consequently, a faithful explanation is not necessarily simulatable." On Chen et al.'s account, then, simulatability is not necessary for faithfulness. The two other sources are outside the map and were not checked.
6. [Bhan et al. 2025](./#p=bhan2025did) #5, citing [Matton et al. 2025](./#p=matton2025walk). Bhan et al. group Matton et al. with the Counterfactual Intervention methods, which generate counterfactual texts “designed to change the LLM outcome” and then ask for “a self-NLE to justify its new prediction”. Matton et al. are credited specifically with "the granularity of the CI intervention". That part holds: Matton et al. edit concepts where Atanasova et al. edit tokens. The shared description does not hold. Matton et al. change a concept with no requirement that the answer flip. They also set themselves apart from Atanasova et al. on the second point, objecting that Atanasova et al. "assess the faithfulness of explanations given to the counterfactual questions, which may not reflect the faithfulness of the LLM in response to the original questions."

**Borrowings that match, though the source's entries or wording differ**

- [Guo et al. 2026](./#p=guo2026introspective) #2–3, citing [Li et al. 2025b](./#p=li2025training). Li et al.'s only counterfactual entry is the activation-patching input. Their input-ablation task (§2.4) does state the borrowed notion: "if $\tilde{x}$ is removed, (how) does the answer to $x$ change?", with "Hint: A" as the ablated span. The gap is in the extraction, not in the attribution.
- [Parekh & Goyal 2026](./#p=parekh2026drop) #2, citing [Lanham et al. 2023](./#p=lanham2023measuring). The forced-answer prefix is Lanham et al.'s early-answering test. "Prefix counterfactual" is Parekh & Goyal's own term.
- [Alon et al. 2026](./#p=alon2026faithfulness) #3, citing [Chen et al. 2025](./#p=chen2025reasoning). The filter is Chen et al.'s ("$a_{u}\neq h$ and $a_{h}=h$"), but Chen et al. do not call it counterfactual. They also normalise the score "after accounting for random noise in responses", a step that Alon et al.'s per-instance reading drops.
- [Ferreira et al. 2026](./#p=ferreira2026outofsight) #4, citing [Turpin et al. 2023](./#p=turpin2023language) and [Guan et al. 2025](./#p=guan2025monitoring). The paired-input design matches both sources. The per-example label is Ferreira et al.'s own addition. Guan et al. instead "treat the agent as stochastic" and score monitors against a lower bound (Tensions, item 3).
- The remaining borrowings each match an entry of their source:
  - [Wiegreffe & Pinter 2019](./#p=wiegreffe2019attention) matches [Jain & Wallace 2019](./#p=jain2019attention) #3.
  - [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) #2 and [Mayne et al. 2025](./#p=mayne2025llms) #2 match [Madsen et al. 2024](./#p=madsen2024self) #3–4.
  - [Zeng et al. 2026](./#p=zeng2026evaluating) #2 matches [Mayne et al. 2025](./#p=mayne2025llms) #2 and [Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can) #2.
  - [Lewis-Lim et al. 2026](./#p=lewislim2026efficient) matches [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm) #3.
  - [Anonymous 2026d](./#p=anon2026trainingoversight) matches [Karvonen et al. 2026](./#p=karvonen2026would) #5.
  - [Tang & Khanna 2026](./#p=tang2026unlearning) #1 matches [Chua et al. 2024](./#p=chua2024biasaugmented) #7.
  - [Kudo et al. 2024](./#p=kudo2024llms) matches [Paul et al. 2024](./#p=paul2024making) #6–7.
  - [Guo et al. 2026](./#p=guo2026introspective) #2 matches [Hase & Potts 2026](./#p=hase2026counterfactual) #5.
  - [Karvonen et al. 2026](./#p=karvonen2026would) #6 and [Cheah et al. 2026](./#p=cheah2026training) #4–5 match [Turpin et al. 2023](./#p=turpin2023language) #5.
  - The other borrowings of [Chen et al. 2023](./#p=pmlr-v235-chen24bl) match its #1 and #4–5, with the drift described under Lineage.

**Not settled.** Several sources are outside the map and have no text in the cache: Atanasova et al. 2023 (12 entries), Siegel et al. 2024 (6) and 2025 (3), Doshi-Velez & Kim 2017 (6), Wachter et al. 2017 (3), and Pearl. The same holds for Yang et al. 2025 and Xiong et al. 2025, which [Shen et al. 2026](./#p=shen2026detecting) cite alongside Turpin et al. The Doshi-Velez & Kim attribution is the one most worth checking. [Hase & Potts 2026](./#p=hase2026counterfactual) credit that paper with the property “known as counterfactual simulatability”, whereas [Chen et al. 2023](./#p=pmlr-v235-chen24bl) cite it only as part of the concept's "long history".

### Tensions

1. **Must the variant change the output?**
   - Only flips count: the counterfactual explanation is defined by a flip ([Dehghanighobadi et al. 2025](./#p=dehghanighobadi2025can): $f(\mathbf{x})\neq f(\mathbf{x}_{\text{CE}})$; [Mayne et al. 2025](./#p=mayne2025llms): “would flip the LLM’s decision”). The counterfactual test keeps only “intervened instances whose prediction changes compared to the original instance” ([Wang & Atanasova 2025](./#p=wang2025selfcritique)). [Alon et al. 2026](./#p=alon2026faithfulness) call a pair a counterfactual only when $a_0\neq a_1=\text{hint}$.
   - Non-flipping variants are wanted: [Zaman & Srivastava 2025a](./#p=zaman2025causal) build counterfactuals that “yield the same answer but are based on different reasoning”. [Jain & Wallace 2019](./#p=jain2019attention) define adversarial attention by “an equivalent prediction”. [Shiromani et al. 2026](./#p=shiromani2026necessary) keep only traces that end in the same final answer type.
   - Most intervention entries ([Matton et al. 2025](./#p=matton2025walk), [Zhang et al. 2026](./#p=zhang2026audit), [Cheah et al. 2026](./#p=cheah2026training)) define the counterfactual by the edit and treat a flip as an outcome to measure.

   For the first group a non-flipping edit is a failed counterfactual; for the second it is the object of study.
2. **Remove the cue or swap it?** [Hase & Potts 2026](./#p=hase2026counterfactual) (“The counterfactual input is the input without the cue.”), [Guo et al. 2026](./#p=guo2026introspective) ($x_{\setminus C}$), [Karvonen et al. 2026](./#p=karvonen2026would) (“Ground truth comes from removing the cue”), [Ferreira et al. 2026](./#p=ferreira2026outofsight) and [Ferreira et al. 2025](./#p=ferreira2026truthful) compare against the input without the cue. [Shiromani et al. 2026](./#p=shiromani2026necessary) reject that comparison: “Comparing W to a no-hint prompt would confound the hint’s content with its presence”. For them, "the hint caused the answer" means that the answer changes when $h$ is swapped for $h'$. [Li 2026](./#p=li2026monitorability) ask for both no-hint and alternate-hint runs. A given answer can therefore count as caused by the hint under removal and not under a swap.
3. **Is a single flip evidence of causation?** [Alon et al. 2026](./#p=alon2026faithfulness) treat each flip as “evidence that the hint influenced the model’s decision making”. [Ferreira et al. 2026](./#p=ferreira2026outofsight) use the greedy no-hint prediction as a per-example label. [Anonymous 2026c](./#p=anon2026improving) hold the opposite view: “detecting intervention-caused outcomes is a counterfactual target”. A unit's outcome without the intervention is never observed and can only be bounded. [Guan et al. 2025](./#p=guan2025monitoring) likewise score monitors against a lower bound on the share of behaviour attributable to the intervention, not against per-example labels (see [monitorability](#monitorability)). [Shen et al. 2026](./#p=shen2026detecting) say that counterfactual CoT interventions reveal causal strength across a population, not the faithfulness of any one trace. [Karvonen et al. 2026](./#p=karvonen2026would) take a middle course: they resample and label a claim true or false only when the behaviour rate moves by at least 50 points or at most 15.
4. **Keep the rest of the trace fixed, or regenerate it?** [Cox et al. 2026](./#p=cox2026posthoc) substitute the whole CoT. [Han et al. 2026](./#p=han2026rfeval) insert flawed reasoning while holding the input fixed. [Khanzadeh 2026](./#p=khanzadeh2026project) re-execute from the edited step, so later steps are re-sampled and a self-correction can hide the dependence. [Macar et al. 2025](./#p=macar2025thought) argue that resampling one sentence understates its effect: “Counterfactual importance evaluates a sentence’s immediate impact but misses resilience”. They therefore measure importance on rollouts in which the sentence's content never reappears. A step that has no effect when the trace is re-executed may be decisive when it is substituted.
5. **Which inputs count as counterfactuals for simulatability?** The papers give four answers:
   - minimal edits ([Hong & Roth 2026](./#p=hong2026llm): “minimal what-if variations of an input”);
   - “any simulatable counterfactual in the natural language distribution” ([Chen et al. 2023](./#p=pmlr-v235-chen24bl));
   - real rows “rather than synthetic perturbations” ([Lewis-Lim et al. 2026](./#p=lewislim2026efficient), [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm));
   - questions rejection-sampled so that simulator and model disagree ([Hase & Potts 2026](./#p=hase2026counterfactual)).

   Precision is averaged over this set, so scores computed on different sets cannot be compared.
6. **What does counterfactual simulatability measure?**
   - Faithfulness: [Turpin et al. 2023](./#p=turpin2023language), [Turpin et al. 2025](./#p=turpin2025teaching) (the "if and only if"), [Arcuschin et al. 2025](./#p=arcuschin2025chain) and [Mayne et al. 2026](./#p=mayne2026positivecasefaithfulnessllm).
   - Something else: [Agarwal et al. 2024](./#p=agarwal2024faithfulness) file it under plausibility-oriented evaluation. [Hong & Roth 2026](./#p=hong2026llm) treat it as usefulness. [Karvonen et al. 2026](./#p=karvonen2026would) define an explanation as “a behavioral claim testable by counterfactual experiments, not an explanation of the model’s internal computation”.
   - In between: [Chen et al. 2023](./#p=pmlr-v235-chen24bl) call it a special case of faithfulness that is not necessary for it.

   The [faithfulness](#faithfulness) section covers the faithfulness side.
7. **Does the counterfactual test measure faithfulness?**
   - Yes: [Wang & Atanasova 2025](./#p=wang2025selfcritique), [Alon et al. 2026](./#p=alon2026faithfulness), [Cheah et al. 2026](./#p=cheah2026training), [Zaman & Srivastava 2025b](./#p=zaman2025chainofthought) and [Gema et al. 2026](./#p=gema2026chainofthought) use it as a faithfulness test.
   - No: [Parcalabescu & Frank 2023](./#p=parcalabescu2023measuring) reclassify it as a self-consistency test. [Bhan et al. 2025](./#p=bhan2025did) reject it as black-box and input-output only. [Zaman & Srivastava 2025a](./#p=zaman2025causal) leave it out because their framework cannot evaluate it. [Matton et al. 2025](./#p=matton2025walk) object that it judges the explanation of the counterfactual question, not of the original.
8. **Attention counterfactuals.** [Jain & Wallace 2019](./#p=jain2019attention) take the existence of an attention distribution that is “maximally distinct” from the original but gives the same prediction as evidence that attention is not explanation. [Wiegreffe & Pinter 2019](./#p=wiegreffe2019attention) accept the counterfactual framework only “as a concept”. They object that "due to the per-instance nature of the demonstration and the fact that model parameters have not been learned or manipulated directly, Jain and Wallace have not shown the existence of an adversarial model that produces the claimed adversarial distributions." On their reading, an alternative attention distribution is a counterfactual only if a trained model can actually produce it.
