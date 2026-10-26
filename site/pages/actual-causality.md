# *Actual Causality* (Halpern, 2016): A Chapter-by-Chapter Summary

Joseph Y. Halpern, *Actual Causality*. Cambridge, MA: MIT Press, 2016. 240 pp. DOI [10.7551/mitpress/10809.001.0001](https://doi.org/10.7551/mitpress/10809.001.0001). Open access under CC BY-NC-ND 4.0.

**Files in this folder**
- `pdf/Halpern_2016_Actual_Causality.pdf` is the publisher's full-book PDF. [MIT Press Direct](https://direct.mit.edu/books/oa-monograph/3451/Actual-Causality) blocks scripted downloads with a bot check, so this copy comes from MIT Press's open-access collection on the [Internet Archive](https://archive.org/details/mit_press_book_9780262336611). It is the same file, and every page carries the direct.mit.edu download stamp.
- `chapters/` holds the same PDF split by chapter, in the order MIT Press Direct lists them.

Page references below are to the printed book. Book page $n$ is page $n+11$ of the full PDF.

---

## The book at a glance

Halpern develops a single formal account of *actual* (token) causation, the kind invoked when we ask whether this event caused that outcome. He then extends it to responsibility, blame and explanation. The account builds on Pearl's structural-equation models. A causal setting $(M,\vec u)$ consists of a model $M$, made of variables and equations that say how interventions propagate, together with a context $\vec u$ that fixes the exogenous variables. The core idea is the law's but-for test, applied under *contingencies*. $\vec X=\vec x$ causes $\varphi$ when three conditions hold:

- Both actually happened (AC1).
- $\varphi$ would fail had $\vec X$ been different, provided some other variables $\vec W$ are held fixed (AC2).
- No smaller conjunction would do (AC3).

The three versions of the definition differ only in which contingencies AC2 allows.

| Variant | AC2 | Source | Shape of causes | Deciding causality |
|---|---|---|---|---|
| Original | AC2(a) + AC2(b$^o$) | Halpern & Pearl 2001 | always a single conjunct | $\Sigma_2^P$-complete |
| Updated | AC2(a) + AC2(b$^u$) | Halpern & Pearl 2005 | may be a conjunction | $D_2^P$-complete |
| Modified | AC2(a$^m$): $\vec W$ is frozen at its *actual* values | Halpern 2015 | conjunctions under overdetermination | $D_1^P$-complete |

For parts of causes, the modified definition is the most restrictive and the original the most permissive. Every but-for cause counts as a cause under all three (Ch. 2). Halpern currently prefers the modified definition, though he works with all three throughout.

Four themes run through the book:

1. **Causality is model-relative.** The choice of variables, their ranges, and the exogenous/endogenous split can all change a verdict. Halpern treats this as a feature, because it moves causal disputes to "the right arena": which model better represents the situation. Chapter 4 supplies tools for criticizing models, including structuring variables, conservative extensions, stability theorems, and constraints on independence and ranges.
2. **Normality.** People "undo" abnormal rather than routine events. Halpern adds a normality ordering on worlds or contexts. He then either requires a witness to be at least as normal as the actual world or grades causes by how normal their best witnesses are. This handles omissions, bogus prevention, Knobe effects, attenuation along causal chains, and legal doctrines of intervening causes (Ch. 3).
3. **Graded and epistemic notions.** Degree of responsibility is $1/(k+1)$, where $k$ is the minimal number of changes needed to make the outcome depend on the cause. Blame is expected responsibility over an epistemic state (Ch. 6). An explanation is a sufficient cause relative to what an agent knows, with goodness and explanatory power measured probabilistically (Ch. 7).
4. **Tractability and use.** Natural models have compact representations, and causal reasoning has a sound and complete axiomatization whose satisfiability problem is NP-complete (Ch. 5). The definitions have been applied to accountability, to tuples as causes of database query answers, and to explaining model-checking counterexamples. In these applications utility counts for more than immunity to philosophers' counterexamples (Ch. 8).

**Reading dependencies** (from Ch. 1). After Chapter 2, of which only Sections 2.1–2.3 are needed later, the chapters can be read in any order. The exception is Sections 4.4, 4.7, 5.2 and 6.3, which depend on Section 3.2.

## Contents
- [Preface](#preface)
- [Chapter 1 — Introduction and Overview](#chapter-1--introduction-and-overview)
- [Chapter 2 — The HP Definition of Causality](#chapter-2--the-hp-definition-of-causality)
- [Chapter 3 — Graded Causation and Normality](#chapter-3--graded-causation-and-normality)
- [Chapter 4 — The Art of Causal Modeling](#chapter-4--the-art-of-causal-modeling)
- [Chapter 5 — Complexity and Axiomatization](#chapter-5--complexity-and-axiomatization)
- [Chapter 6 — Responsibility and Blame](#chapter-6--responsibility-and-blame)
- [Chapter 7 — Explanation](#chapter-7--explanation)
- [Chapter 8 — Applying the Definitions](#chapter-8--applying-the-definitions)
- [Appendix: Slips in the printed text](#appendix-slips-in-the-printed-text)

---

## Preface
The Preface is short and consists mostly of acknowledgments. Halpern credits Judea Pearl, who around 1990 was telling "anyone else who would listen" that the future was in causality, with inspiring his interest. Their joint paper on actual causality is the basis of the book, and later joint work with Hana Chockler, Chris Hitchcock and Tobi Gerstenberg also features prominently. He thanks readers of earlier drafts (Sander Beckers, Robert Maxton, Hitchcock, David Lagnado, Jonathan Livengood, Laurie Paul) and acknowledges funding from NSF, AFOSR and ARO, notably an NSF grant on causal databases. The Preface does not state aims, audience or a reading plan; that guidance appears at the end of Chapter 1. There the book is described as modular: the chapters after Chapter 2 can be read independently and in any order, except that Sections 4.4, 4.7, 5.2 and 6.3 depend on Section 3.2, and within Chapter 2 only Sections 2.1–2.3 are needed later. Technical proofs are deferred to a final, skippable section of each chapter; the few proofs left in the main text are recommended even to non-mathematical readers for getting used to the notation. Each chapter ends with Notes giving references and further detail.

## Chapter 1 — Introduction and Overview
*Book pp. 1–8*

**In brief.** The chapter distinguishes actual (token) causality from type (general) causality and announces that the book deals almost exclusively with the former and with related notions: responsibility, blame and explanation. It argues that causal judgments are counterfactual and takes the legal but-for test as the starting point. Suzy and Billy's rock-throwing then shows that the test must be applied under contingencies and supplemented by a sufficiency clause. The chapter introduces the Halpern–Pearl (HP) definition, which has three variants, and outlines the book.

**Type vs. actual causality.** Type causality concerns general claims ("smoking causes lung cancer"). It is forward-looking and serves prediction, which is mainly what scientists want. Actual causality concerns particular events ("David's 30 years of heavy smoking caused his cancer"; "the faulty brakes, not the rain or the driver's drunkenness, caused the accident"). It is typically backward-looking: the outcome is known and we ask why it occurred. It helps with prevention and is central to blame and responsibility, hence its prominence in law, where the facts are often settled and only the causal question remains. The two notions are intertwined; a jury will not award damages unless it believes smoking causes cancer. The goal is a definition that matches ordinary use of "cause" (and "responsibility", "blame") and is also useful, for instance to a jury or to a programmer looking for the line that crashed a program.

**Regularity vs. counterfactuals.** Hume's definition runs together a *regularity* account (roughly, A causes B if As typically precede Bs, a type-level notion) and a *counterfactual* one ("if the first object had not been, the second never had existed"). Psychology shows that people reason counterfactually. In an experiment by Gerstenberg et al. (Figure 1.1), ball B hits ball A, which banks off a wall into a goal. Subjects call B's hit a cause when a brick would otherwise have blocked A, but not when A would have scored anyway, although the observed events are identical.

**But-for and preemption.** Counterfactual accounts start from the law's *but-for* test: A is a cause of B if, but for A, B would not have happened; that is, A is necessary for B. Preemption defeats the test. Suzy and Billy throw rocks at a bottle; Suzy's arrives first and shatters it, and Billy's accurate throw would have shattered it otherwise. The bottle would have shattered without Suzy's throw, yet her throw is a cause and Billy's is not. The HP definition applies the but-for test under *contingencies*: if Billy does not throw, the shattering depends on Suzy's throw. The symmetric contingency would make Billy a cause too, so a further clause requires the cause to be *sufficient* under contingencies that respect what actually happened (Billy's rock did not hit). Halpern calls getting this right without counterexamples "surprisingly difficult". He focuses on the HP definition because he likes it best and knows it best, and because it has been extended to responsibility, blame and explanation. Many of his points carry over to other counterfactual approaches.

**Overview.** Chapter 2 formalizes the HP definition using structural equations, works through examples, and treats transitivity and probability. Chapter 3 adds normality, following Kahneman and Miller's finding that people "undo" exceptional rather than routine events. Because the definition is model-relative, opposing lawyers who both use it can disagree simply because they use different models; Chapter 4 asks what makes a model good. Chapter 5 covers compact representations, computational complexity and an axiomatization of the causal language. Causality is all-or-nothing: each voter in an 11–0 vote is a cause, as is each majority voter in a 6–5 vote, yet people see the first as far less responsible. Chapter 6 therefore adds graded responsibility and blame. Chapter 7 defines explanation, and Chapter 8 discusses applications.

**Key takeaways**
- The subject is actual causality, the backward-looking attribution of particular outcomes to particular events, not predictive type causality.
- People judge causation counterfactually; the but-for (necessity) test is the shared starting point.
- Preemption forces the but-for test to be applied under contingencies, plus a sufficiency condition tied to what actually happened.
- The HP definition is model-relative, comes in three variants, and underlies the later treatment of normality, responsibility, blame and explanation.

**Chapter notes.** The Notes credit the meteor hypothesis for the dinosaur extinction to Alvarez et al. (1980), relate the actual/type distinction to "causes of effects" vs. "effects of causes" (Dawid 2007; Livengood 2015), and credit Hitchcock (2013) with first publishing the backward- vs. forward-looking contrast. Halpern states his current view that type causation arises from many instances of actual causation, so that actual causation is more fundamental, though nothing in the book hinges on this. The lineage runs from Aristotle and Hume (1748) to Mackie's (1974) regularity-based INUS condition (A is an insufficient but necessary part of a condition that is itself unnecessary but sufficient for B), which fails on preemption, and to Lewis's (1973a) counterfactual theory. The HP definition comes from Halpern and Pearl (2001, 2005a); Paul and Hall (2013) survey the field, Hart and Honoré (1985) is the classic legal reference, the ball experiment is from Gerstenberg et al. (2014), and the rock-throwing example is from Lewis (2000). Further pointers cover economics, statistics, physics and computer science.

## Chapter 2 — The HP Definition of Causality
*Book pp. 9–76*

**In brief.** The chapter defines causal models (structural equations), a language for interventions, and three variants of the HP definition of actual causality (original, updated, modified), which share AC1 and AC3 and differ in AC2. It works through canonical examples (overdetermination, preemption, double prevention, omission, trumping) and orders the variants by permissiveness. Causality turns out to be intransitive, though transitive for but-for chains under simple conditions. Probabilistic causality is reduced to probabilities over deterministic models; sufficient causality and nonrecursive models are also defined. Causality is always relative to a model and context; Halpern currently prefers the modified definition but uses all three.

A formal definition removes ambiguity (INUS never says what a "condition" is) but not disagreement, since closely related models can give different verdicts. Halpern calls this a feature: it moves disputes to "the right arena", namely which model better represents the world. He doubts there is in general a "right" model; the definition is silent on what makes a model good (Chapter 4).

### 2.1 Causal Models
The world is described by variables with ranges of values, which need not be binary. The running examples are a forest fire, with variables $FF$ (fire), $L$ (lightning) and $MD$ (an arsonist drops a lit match), and an 11-voter election with votes $V_1,\dots,V_{11}$ and outcome $W$. The variables fix the language: if a model has no smoking variable, smoking cannot be a cause in it. Influence is described by *structural equations*, read as assignments. In the *disjunctive* model $FF=\max(L,MD)$, written $L\vee MD$; in the *conjunctive* model $FF=\min(L,MD)$, written $L\wedge MD$. Equations are deterministic, and unmodeled factors go into exogenous variables, e.g. $U=(i,j)$ with $L=U_1$, $MD=U_2$. Halpern uses this machinery because but-for counterfactuals require modeling interventions.

*Signatures and models.* Variables are either *exogenous* (determined outside the model, with no equations) or *endogenous*. A **signature** is $\mathcal S=(\mathcal U,\mathcal V,\mathcal R)$, where $\mathcal U$ is the set of exogenous variables, $\mathcal V$ the set of endogenous variables, and $\mathcal R$ gives each $Y\in\mathcal U\cup\mathcal V$ a nonempty set $\mathcal R(Y)$ of possible values. A **causal model** is $M=(\mathcal S,\mathcal F)$, where $\mathcal F$ assigns each $X\in\mathcal V$ a function $F_X:\times_{Z\in(\mathcal U\cup\mathcal V-\{X\})}\mathcal R(Z)\to\mathcal R(X)$. Equations are asymmetric: $X=Y+U$ does not give $Y=X-U$, and setting $FF=0$ does not "undrop" the match. This asymmetry is why causality typically comes out asymmetric.

*Interventions.* An **intervention** setting $X$ to $x$ yields $M_{X\leftarrow x}=(\mathcal S,\mathcal F_{X\leftarrow x})$, in which the equation for $X$ is replaced by $X=x$ and all others are unchanged ($M_{\vec Y\leftarrow\vec y}$ likewise); only endogenous variables are intervened on. Against the charge of circularity, Halpern replies that equations encode the effects of interventions, not actual causation, and that models are often uncontroversial.

*Dependence and recursiveness.* $Y$ *depends* on $X$ if $F_Y(x,\vec z)\neq F_Y(x',\vec z)$ for some setting $\vec z$ of the other variables and some $x,x'$; this direct dependence is not transitive. A *causal network* shows only the qualitative pattern (the conjunctive and disjunctive fire models share a graph). $M$ is **strongly recursive** if there is a partial order $\preceq$ on $\mathcal V$ such that $Y$ is unaffected by $X$ unless $X\preceq Y$. $M$ is **recursive** if for each context $\vec u$ there is a partial order $\preceq_{\vec u}$ such that, unless $X\preceq_{\vec u}Y$, $Y$ is independent of $X$ in $(M,\vec u)$, i.e. $F_Y(x,\vec z,\vec u)=F_Y(x',\vec z,\vec u)$ for all settings $\vec z$ of the other endogenous variables and all $x,x'$. Each context then has a unique solution; the order may vary with the context (as Example 2.3.3 needs).

*Modeling choices.* Which variables to include, which to treat as exogenous, and which background assumptions the equations encode (an equation for "wood burns" can presuppose enough oxygen) all affect verdicts. Only endogenous variables can be causes or effects. Halpern reads the legal distinction between *conditions* and *causes* as the distinction between exogenous and endogenous variables; Section 3.2 offers an alternative based on normality. The definition is relative to $(M,\vec u)$ and agnostic about which model is reasonable.

### 2.2 A Formal Definition of Actual Cause
**2.2.1 A language for describing causality.** A *primitive event* is $X=x$ with $X\in\mathcal V$ and $x\in\mathcal R(X)$. A *causal formula* is $[Y_1\leftarrow y_1,\dots,Y_k\leftarrow y_k]\varphi$, abbreviated $[\vec Y\leftarrow\vec y]\varphi$. Here $\varphi$ is a Boolean combination of primitive events, the $Y_i\in\mathcal V$ are distinct and $y_i\in\mathcal R(Y_i)$; for $k=0$ the formula is just $\varphi$. It says that $\varphi$ would hold if each $Y_i$ were set to $y_i$. $\mathcal L(\mathcal S)$ is the set of Boolean combinations of causal formulas. A *causal setting* is a pair $(M,\vec u)$. In a recursive model, $(M,\vec u)\models X=x$ iff $X$ has value $x$ in the unique solution for $\vec u$, and the connectives are classical. Interventions are evaluated by
$$(M,\vec u)\models[\vec Y\leftarrow\vec y]\psi\quad\text{iff}\quad(M_{\vec Y\leftarrow\vec y},\vec u)\models\psi.$$
For example, in the disjunctive model $M^d$, $(M^d,(1,1))\models[MD\leftarrow0](FF=1)$ but $(M^d,(1,1))\models[L\leftarrow0;MD\leftarrow0](FF=0)$. Results are also given in the more compact but sometimes ambiguous "statisticians' notation", $Y_x(\vec u)=y$.

**2.2.2 The HP definition of actual causality.** Causes are conjunctions $\vec X=\vec x$ of primitive events, and effects are arbitrary Boolean combinations $\varphi$. So disjunctive causes are excluded, while disjunctive effects are allowed. Halpern and Pearl's original definition (2001) was updated for the journal version (2005a) after a counterexample was found (Example 2.8.1). Halpern (2015a) later proposed the simpler modified definition, which he does not claim is the last word.

**Definition 2.2.1.** $\vec X=\vec x$ is an *actual cause* of $\varphi$ in the causal setting $(M,\vec u)$ if:
- **AC1.** $(M,\vec u)\models(\vec X=\vec x)$ and $(M,\vec u)\models\varphi$.
- **AC2.** Depends on the variant (below).
- **AC3.** $\vec X$ is minimal: there is no strict subset $\vec X'$ of $\vec X$ such that $\vec X'=\vec x'$ satisfies AC1 and AC2, where $\vec x'$ is the restriction of $\vec x$ to $\vec X'$.

AC1 requires that cause and effect actually occur. AC3 prunes irrelevant conjuncts (such as the sneeze in "dropped a match and sneezed"), in the spirit of INUS. The AC2 clauses are:
- **AC2(a)** (necessity). There is a partition of $\mathcal V$ into disjoint $\vec Z$ and $\vec W$ with $\vec X\subseteq\vec Z$, and settings $\vec x'$ of $\vec X$ and $\vec w$ of $\vec W$, such that $(M,\vec u)\models[\vec X\leftarrow\vec x',\vec W\leftarrow\vec w]\neg\varphi$. This is the but-for test under the contingency $\vec W=\vec w$; informally, $\vec Z$ is the causal path.
- **AC2(b$^o$).** If $(M,\vec u)\models\vec Z=\vec z^*$, then for all subsets $\vec Z'$ of $\vec Z-\vec X$, $(M,\vec u)\models[\vec X\leftarrow\vec x,\vec W\leftarrow\vec w,\vec Z'\leftarrow\vec z^*]\varphi$.
- **AC2(b$^u$).** If $(M,\vec u)\models\vec Z=\vec z^*$, then for all subsets $\vec W'$ of $\vec W$ and all subsets $\vec Z'$ of $\vec Z-\vec X$, $(M,\vec u)\models[\vec X\leftarrow\vec x,\vec W'\leftarrow\vec w,\vec Z'\leftarrow\vec z^*]\varphi$.
- **AC2(a$^m$).** There is a set $\vec W$ of variables in $\mathcal V$ and a setting $\vec x'$ of $\vec X$ such that, if $(M,\vec u)\models\vec W=\vec w^*$, then $(M,\vec u)\models[\vec X\leftarrow\vec x',\vec W\leftarrow\vec w^*]\neg\varphi$.

The variants combine these clauses as follows, with AC3 read relative to each variant's AC2:
- **original:** AC1 + AC2(a) + AC2(b$^o$) + AC3;
- **updated:** AC1 + AC2(a) + AC2(b$^u$) + AC3;
- **modified:** AC1 + AC2(a$^m$) + AC3.

AC2(b$^o$) requires $\varphi$ to hold when $\vec X$ is restored to $\vec x$ with $\vec W$ held at $\vec w$, even if any variables in $\vec Z$ are reset to their actual values. AC2(b$^u$) is stronger: $\varphi$ must also hold when only a subset $\vec W'$ of $\vec W$ is set to $\vec w$, the rest following their equations. AC2(a$^m$) allows only contingencies that freeze $\vec W$ at its *actual* values $\vec w^*$ ("only what happens in the actual situation should matter"); no sufficiency clause is then needed, since restoring $\vec X$ to $\vec x$ reproduces the actual world. Sufficiency is needed only because of non-actual contingencies.

$(\vec W,\vec w,\vec x')$ is a *witness* ($(\emptyset,\emptyset,\vec x')$ if $\vec W=\emptyset$). Each conjunct of a cause is *part of a cause*; Halpern suggests parts of causes are closer to ordinary-language causes (the whole being a "complete cause"), and that a conjunctive cause can be read as a disjunction that is a but-for cause.

$X=x$ is a *but-for cause* of $\varphi$ if AC1 holds and $(M,\vec u)\models[X\leftarrow x']\neg\varphi$ for some $x'$.
- **Proposition 2.2.2.** Every but-for cause is a cause under all three variants.
- **Theorem 2.2.3.**
  - (a) Part of a cause under the modified definition implies a cause under the original.
  - (b) Part of a cause under the modified definition implies a cause under the updated.
  - (c) Part of a cause under the updated definition implies a cause under the original.
  - (d) Under the original definition, causes are single conjuncts ($|\vec X|=1$).

The original definition is thus the most permissive and the modified the most restrictive; the converses fail (Examples 2.8.1, 2.8.2), and the variants disagree mainly on the hard cases that drove the revisions. No variant can be proved "right", so Halpern argues from usefulness. The original's singleton causes are attractive and its errors often fixable by remodeling; "the jury is still out", but he currently prefers the modified definition.

### 2.3 Examples
- **Example 2.3.1 (forest fire)**, in context $(1,1)$.
  - *Conjunctive model:* $L=1$ and $MD=1$ are but-for causes, hence causes under all three variants. By AC3, their conjunction is not a cause.
  - *Disjunctive model (overdetermination):* under the original and updated definitions each is a cause, with witness $\vec W=\{MD\}$, $w=0$. The modified definition cannot set $MD=0$, so for it the cause is $L=1\wedge MD=1$, with each conjunct part of the cause. A naive but-for test finds no cause at all.
- **Example 2.3.2 (voting).** In a 6–5 win, each majority voter is a but-for cause. In an 11–0 win, the original and updated definitions make each voter a cause, with a witness that switches five votes. The modified definition makes every set of six voters a cause. This fits the intuition that a voter is "less" of a cause in an 11–0 vote, which Chapter 6 develops.
- **Example 2.3.3 (rock throwing).**
  - *Naive model $M_{RT}$* ($BS=ST\vee BT$): Suzy and Billy are symmetric, so both are causes (original, updated) or their conjunction is (modified). A three-valued $BS$ ("shattered by Suzy/by Billy") "borders on cheating".
  - *Refined model $M'_{RT}$:* add $SH=ST$ and $BH=BT\wedge\neg SH$, with $BS=SH\vee BH$. Now $ST=1$ is a cause and $BT=1$ is not, under every variant.
  - *Original and updated definitions:* Suzy's witness is $\vec W=\{BT\}$, $w=0$. Billy fails because AC2(b) may reset $BH$ to its actual value 0, which is why AC2(b) quantifies over arbitrary subsets $\vec Z'$.
  - *Modified definition:* fixing $BH=0$ and setting $ST\leftarrow0$ gives $BS=0$. For Billy, $SH=1$ whatever is held fixed.
  - *Miraculous interventions* (e.g., $BH=1$ without a throw) are allowed, one motivation for normality (Chapter 3).
  - *Richer models:* $M^*_{RT}$ (48 contexts, with accuracy and who-hits-first variables) is recursive but not strongly recursive; time-indexed variables also work.
  - *Moral:* to single out the preempting cause, the model needs a variable recording which process acted, like $BH$ or the side a bullet entered. Halpern concedes that his way of using the actual context is justified only by its success on examples.
- **Example 2.3.4 (double prevention).** Billy shoots down Enemy, who would have downed Suzy's bomber: $BPT\to EE\to ESS\to SBT\to TD$. Here $BPT=1$ is a but-for cause. With a backup escort (Hillary, $HPT$), it remains a cause, with $HPT$ fixed at its actual value 0. One might worry that any $A$ could become a cause via an imagined threat. But if Enemy never appears, modeling Billy going up ($BGU$) and Enemy showing up ($ESU$) shows that $BGU=1$ is not a cause: AC2(b$^o$) fails because $BPT$ can be held at its actual value 0, and under the modified definition $TD=1$ regardless.
- **Example 2.3.5 (omission).** The doctor's not treating Billy is a but-for cause of his illness. The other 99 doctors are not causes only because they are unmodeled (part of the context); if modeled, they would be, a problem normality addresses (Chapter 3).
- **Example 2.3.6 (railroad switch).** With $F$ (flip), $T$ (track) and $A$ (arrival), flipping is not a cause. Replace $T$ by $LB$ and $RB$ (left/right track blocked), both of which are actually clear. Then $F=1$ becomes a cause of $A=1$ under the original and updated definitions, via the non-actual contingency $LB=1$. The modified definition avoids this, while normality only partly does (Example 3.4.3).
- **Example 2.3.7 (trumping).** A captain and a sergeant both order "Charge!"; $P=C$ if $C\neq0$, and otherwise $P=S$.
  - *Ranges $\{-1,0,1\}$:* $C=1$ is a but-for cause. $S=1$ is a cause under the original and updated definitions, with witness $(\{C\},0,0)$, but not under the modified one.
  - *Ranges $\{-1,1\}$:* only $C=1$ is a cause.
  - *Ranges $\{0,1\}$:* both are causes under the original and updated definitions; under the modified definition $C=1\wedge S=1$ is the cause.
  - *Adding $SE$* (the sergeant's effective order, 0 whenever the captain orders) makes the captain the sole cause under all variants. Verdicts are highly model-sensitive.
- **Example 2.3.8 (pollution).** Company A dumps 100 kg and company B dumps 60 kg; $k$ kg kill the fish.
  - $k=120$: both are but-for causes.
  - $k=50$: each is a cause under the original and updated definitions; under the modified definition only the conjunction is.
  - $k=80$: A is a cause under all variants and the only cause under the modified one. Under the original and updated definitions, B is a cause iff A could have dumped 20–79 kg. Blame (Example 6.2.5) gives B some blame.

### 2.4 Transitivity
Causality is not transitive. In **Example 2.4.1**, Monday's doctor treats Billy, Tuesday's would have treated him otherwise, and two doses are lethal: $MT=1$ is a but-for cause of $TT=0$, which is a but-for cause of Billy's being alive, yet $MT=1$ is not part of a cause of his being alive under any variant. Right weakening also fails ($MT=1$ causes $BMC=0$, which implies being alive). In **Example 2.4.2**, a dog bite makes Jim press the detonator with his left hand ($P=2$), which causes the explosion, but the bite does not cause it. Halpern explains the intuition of transitivity by its holding in typical cases. For but-for causes (where all variants agree):
- **Proposition 2.4.3.** Suppose $X_1=x_1$ is a but-for cause of $X_2=x_2$, $X_2=x_2$ is a but-for cause of $X_3=x_3$, $x_3\neq0$, $(M,\vec u)\models[X_1\leftarrow0](X_2=0)$, and $(M,\vec u)\models[X_1\leftarrow0,X_2\leftarrow0](X_3=0)$, where 0 is a default value. Then $X_1=x_1$ is a but-for cause of $X_3=x_3$.
- **Proposition 2.4.4.** More generally, given the two but-for links, if some $x_1',x_2',x_3'$ satisfy $x_3\neq x_3'$, $(M,\vec u)\models[X_1\leftarrow x_1'](X_2=x_2')$ and $(M,\vec u)\models[X_1\leftarrow x_1',X_2\leftarrow x_2'](X_3=x_3')$, then $X_1=x_1$ is a but-for cause of $X_3=x_3$ (e.g., grade → university → city).
- **Proposition 2.4.5.** Conversely, if $X_1=x_1$ is a but-for cause of $X_3=x_3$, such values exist.

A **causal path** in $(M,\vec u)$ is a sequence $(Y_1,\dots,Y_k)$ in which each $Y_{j+1}$ depends on $Y_j$ in context $\vec u$.
- **Proposition 2.4.6.** Suppose both links are but-for causes and two further conditions hold:
  - (a) for every $x_2'\in\mathcal R(X_2)$ there is an $x_1'\in\mathcal R(X_1)$ with $(M,\vec u)\models[X_1\leftarrow x_1'](X_2=x_2')$; this fails in the dog-bite example.
  - (b) $X_2$ is on every causal path from $X_1$ to $X_3$; this fails in Example 2.4.1.

  Then $X_1=x_1$ is a but-for cause of $X_3=x_3$.

These conditions are sufficient, not necessary; transitivity fails when effects along several paths "cancel out", as in bodily homeostasis.

### 2.5 Probability and Causality
Uncertainty about models and contexts is handled by a probability on causal settings (used for blame in Chapter 6). The section treats probabilistic equations, where $F_X$ returns a distribution: Suzy hits with probability .9, and Billy, if Suzy has not hit, with probability .8. These probabilities are interventional (seeing vs. doing: moving a barometer's needle does not bring rain). Rather than adopt a probability-raising definition, Halpern assumes macroscopic determinism and "pulls out the probability" into exogenous variables. One probabilistic model thus becomes a probability over deterministic models, to each of which the existing definition applies. In the rock case there are four such models; given only that the bottle shattered, Suzy is a cause with probability $.9/(1-p)$, where $p$ (neither rock hits) is left open by the equations: $45/49$ if the hits are independent, otherwise something else.
- **Example 2.5.1.** A treatment works with probability .9, other factors independently with .1. Given recovery, the treatment is a cause with probability $90/91$, the other factors $10/91$, both $9/91$. If a test shows the treatment failed, it is not a cause, though it raised the probability of recovery.
- **Example 2.5.2.** Two treatments can interact fatally. If both worked and Billy lives, both are causes with probability 1, though each lowers the probability of recovery given the other, a problem for probability-raising accounts.
- **Example 2.5.3.** Of 1,000 treated patients (recovery probability .9 without treatment, .1 from it), a given recovered patient owes the recovery to treatment with probability $10/91$, though treatment very probably caused at least one recovery.
- **Example 2.5.4.** A heavy bottle topples with probability .2 if one rock hits it and .7 if both do. Given that it toppled, Suzy's throw is part of a cause with probability .84, and both throws are with probability .68.

Halpern concludes that no separate definition of probabilistic causality is needed at the macroscopic level; quantum cases remain open. Under independence assumptions, both views give every formula of $\mathcal L$ the same probability. Without them, richer representations (Section 5.1) or sets of probabilities can be used.

### 2.6 Sufficient Causality
People also weigh robustness: in a long chain (a rock breaks a lock, freeing a lion that frightens a cat, which knocks over a bottle), the throw is a but-for cause but is blamed less.

**Definition 2.6.1.** $\vec X=\vec x$ is a *sufficient cause* of $\varphi$ in $(M,\vec u)$ if:
- **SC1.** $(M,\vec u)\models(\vec X=\vec x)$ and $(M,\vec u)\models\varphi$.
- **SC2.** Some conjunct $X=x$ of $\vec X=\vec x$ is part of a cause: for some (possibly empty) $\vec Y=\vec y$, $X=x\wedge\vec Y=\vec y$ satisfies AC1–AC3.
- **SC3.** $(M,\vec u')\models[\vec X\leftarrow\vec x]\varphi$ for all contexts $\vec u'$.
- **SC4.** $\vec X$ is minimal with respect to SC1–SC3.

Because of SC3, the set of contexts matters, unlike for actual causality. Any six voters are a sufficient cause of an 11–0 win. In the disjunctive fire model $L=1$ and $MD=1$ are each sufficient causes, in the conjunctive model only their conjunction, reversing the modified definition's verdicts on actual causes and capturing the distinction between *independent* and *joint* causes. $ST=1$ is a sufficient cause in $M'_{RT}$ if Suzy is always accurate, but not in $M^*_{RT}$, where $SH=1$ is; so part of a cause need not be part of a sufficient cause. In double prevention, Suzy's bombing is sufficient but Billy's shot is not.

With a probability on contexts, $\vec X=\vec x$ is a sufficient cause *with probability* $\alpha$ if SC1, SC2 and SC4 hold and SC3 holds on a set of contexts of probability at least $\alpha$, trading minimality against probability; Billy's own doctor's omission is then a sufficient cause with high probability, another doctor's only with low probability. Halpern thinks normality, blame and explanation capture these intuitions better.

### 2.7 Causality in Nonrecursive Models
Some cases are cyclic: Boyle's law, or colluding arsonists with $MD_1=1$ iff $U=1$ and $MD_2=1$, and symmetrically for $MD_2$. Such models may have several solutions for a context, or none. Truth is therefore defined relative to a complete assignment $(\vec u,\vec v)$:
- $(M,\vec u,\vec v)\models X=x$ iff $X$ has value $x$ in $\vec v$;
- $(M,\vec u,\vec v)\models[\vec Y\leftarrow\vec y]\varphi$ iff $(M,\vec v')\models\varphi$ for all solutions $(\vec u,\vec v')$ of the equations in $M_{\vec Y\leftarrow\vec y}$, written $(M,\vec u)\models[\vec Y\leftarrow\vec y]\varphi$.

Causes are relative to $(M,\vec u,\vec v)$. AC2(a) becomes $(M,\vec u)\models\neg[\vec X\leftarrow\vec x',\vec W\leftarrow\vec w]\varphi$ ($\varphi$ fails in *some* solution), while AC2(b$^u$) requires $\varphi$ in *all* solutions, with $\vec z^*$ read off $\vec v$; the other variants adapt analogously, and all reduce to the earlier definitions in recursive models. Each colluding arsonist is a (but-for) cause under all variants; an eye-contact variable would make the model recursive. Causality can be symmetric in nonrecursive models, but in recursive ones it is asymmetric under all variants, since AC2(a) and AC2(a$^m$) make the effect depend on the cause. Halpern finds this the most natural extension but lacks good test examples.

### 2.8 AC2(b$^o$) vs. AC2(b$^u$)
**Example 2.8.1** is the case that prompted the update. Let $D=(A\wedge B)\vee C$, with $A=1$, $B=0$ and $C=1$.
Under the original definition $A=1$ is a cause, via the contingency $B=1$, $C=0$. AC2(b$^u$) fails, since $(M,\vec u)\models[A\leftarrow1,C\leftarrow0](D=0)$, and $A=1$ is not a cause under the modified definition either. Adding $B'=A\wedge B$, with $D=B'\vee C$, fixes the original definition; Section 4.3 shows that, with enough extra variables, AC2(b$^o$) can always replace AC2(b$^u$).

**Example 2.8.2** has $B=C=A$, $D=B\wedge C$, $D'=B\wedge\neg A$, $WIN=A\vee D\vee D'$ and $A=1$.
- Under the updated definition, $B=1\wedge C=1$ is a cause, so causes need not be single conjuncts.
- Under the original definition, $B=1$ and $C=1$ are each causes.
- Under the modified definition, only $A=1$ is a cause.

Non-singleton causes raise complexity (Section 5.3), but Halpern does not therefore favor the original definition: the extra variables it needs are not always obvious, whereas the modified definition usually gets the right answer without them and has lower complexity.

Finally, one might require that $\vec X\leftarrow\vec x$ also restore every variable in $\vec Z$:
$$(M,\vec u)\models[\vec X\leftarrow\vec x,\vec W'\leftarrow\vec w](Z=z^*)\ \text{for all } Z\in\vec Z \text{ and all } \vec W'\subseteq\vec W. \tag{2.1}$$
This would simplify AC2(b$^u$) to $(M,\vec u)\models[\vec X\leftarrow\vec x,\vec W'\leftarrow\vec w]\varphi$. **Example 2.8.3** shows that (2.1) is too strong. Two voters feed a tabulator $T=V_1+V_2$, with $P=1$ iff $T\geq1$. $V_1=1$ is a cause (contingency $V_2=0$), yet $T$ changes from its actual value 2. AC2(b) requires only that changes in $\vec Z$ not affect $\varphi$.

### 2.9 Causal Paths
In **Example 2.9.1**, a second arsonist copies the first ($MD'=MD$), and $FF=2$ if $MD\neq MD'$; in the context, $L=MD=1$.
- Under the updated definition, $L=1$ is a cause of $FF=1$ only with witness $(\{MD\},0,0)$, which places $MD'$ in $\vec Z$ though it is off the path from $L$ to $FF$.
- The original definition accepts the witness with $\vec W=\{MD,MD'\}$.
- Under the modified definition, $L=1$ is not even part of a cause, since $MD=1$ alone is one (setting $MD\leftarrow0$ with $MD'$ fixed at 1 gives $FF=2$). Normality fixes this (Example 3.2.5).

**Proposition 2.9.2.** If $\vec X=\vec x$ is a cause of $\varphi$ in $(M,\vec u)$ under the original or the modified definition, then there is a witness $(\vec W,\vec w,\vec x')$ such that every variable in $\mathcal V-\vec W$ lies on a causal path from some variable in $\vec X$ to some variable in $\varphi$.

### 2.10 Proofs
- **Theorem 2.2.3.** Move the other conjuncts of a modified-definition cause containing $X_1=x_1$ into $\vec W$ at their $\vec x'$ values; if AC2(b$^o$) or AC2(b$^u$) then failed, a strict subset would satisfy AC2(a$^m$), contradicting AC3. Parts (c) and (d) are similar: every conjunct of an original-definition cause is itself a cause, so AC3 leaves one conjunct.
- **Lemma 2.10.1.** If there is no causal path from $\vec X$ to $Y$, intervening on $\vec X$ cannot change $Y$.
- **Proposition 2.4.6** is proved by induction along the paths from $X_2$ to $X_3$.
- **Lemma 2.10.2.** If $(M,\vec u)\models[\vec X\leftarrow\vec x](\vec Y=\vec y)$, then $[\vec X\leftarrow\vec x]\varphi$ and $[\vec X\leftarrow\vec x,\vec Y\leftarrow\vec y]\varphi$ are equivalent at $(M,\vec u)$. It becomes an axiom in Section 5.4.
- **Proposition 2.9.2** follows from Lemma 2.10.2 by moving off-path variables into $\vec W$.

**Key takeaways**
- Causality is relative to $(M,\vec u)$; the choice of variables, ranges and exogenous variables can change verdicts, turning causal disputes into disputes about models.
- All variants share AC1 (actuality) and AC3 (minimality). In AC2, the original and updated definitions apply but-for under a contingency and then check sufficiency; the modified one applies but-for with the other variables frozen at their actual values.
- But-for causes are causes under all variants; otherwise modified ⇒ updated ⇒ original (for parts of causes). Original causes are single conjuncts; the modified definition yields conjunctive causes under overdetermination.
- Preemption is handled only if the model has variables recording which process actually acted.
- Causality is not transitive, but chains of but-for causes are transitive under simple conditions (Propositions 2.4.3–2.4.6).
- Probabilistic causality reduces to a probability over deterministic models. Sufficient causality adds robustness across contexts and separates joint from independent causes.

**Chapter notes.** Structural equations go back to Wright (1921), Haavelmo (1943) and Simon (1953), and the formalization is Pearl's (2000); Halpern's recursiveness allows a partial order (equivalent to a total one) that may vary with the context. The three variants come from Halpern and Pearl (2001, 2005a) and Halpern (2015a), inspired by Pearl's causal beams. Hopkins (2001) and Eiter and Lukasiewicz (2002) independently proved Theorem 2.2.3(d), and Proposition A.2 of Halpern and Pearl (2005a), which claimed the causal-path property for the updated definition, is wrong (Example 2.9.1). The notes discuss other structural-equation accounts (Hall, Hitchcock, Woodward, Glymour and Wimberly) and Lewis's closest-world counterfactuals, source the examples (Hall, Paul, van Fraassen and Schaffer, McDermott, Hopkins and Pearl), take the transitivity results from Halpern (2015b), and criticize probability-raising accounts with Rosen's golf-slice case. Halpern and Pearl's earlier "strong causality" clause AC2(c), which requires $(M,\vec u)\models[\vec X\leftarrow\vec x,\vec W\leftarrow\vec w'']\varphi$ for all settings $\vec w''$ of $\vec W$, is presented as a precursor of sufficient causality.

## Chapter 3 — Graded Causation and Normality
*Book pp. 77–106*

**In brief.** Following Kahneman and Miller's observation that we "undo" exceptional rather than routine aspects of a causal chain, this chapter repairs Chapter 2's counterintuitive verdicts by adding a partial preorder on worlds and requiring witnesses to be at least as normal as the actual world. Because that all-or-nothing test can leave events without causes, Halpern instead grades causes by the normality of their best witnesses. Graded causation handles Knobe effects, bogus prevention, voting, attenuation along causal chains and legal intervening causes. Finally, he argues that normality belongs on contexts, lifted to sets of contexts, with causes compared by all their witnesses.

### 3.1 Defaults, Typicality, and Normality
- **Default.** What we assume absent further information. Default inferences are defeasible: Tweety flies until we learn that Tweety is a penguin.
- **Typical.** To say birds *typically* fly is to say that flight is characteristic of the type, not merely prevalent.
- **Normal.** This has a descriptive (statistical) sense and a prescriptive sense, covering moral norms, laws, institutional policies and norms of proper functioning.

Halpern argues that these notions are intertwined. Defaults succeed insofar as they are statistically normal, and prescriptive norms often serve as heuristic substitutes for statistics.

Experiments confirm that norms affect causal judgment. In Knobe and Fraser's vignette, assistants may take the receptionist's pens but professors may not. When Professor Smith and an assistant each take one and none are left, people blame the professor, whereas the HP definition counts both as causes. Since the HP definition is counterfactual, Halpern lets normality constrain the choice of witness.

### 3.2 Extended Causal Models
**Definitions** (given in running text, unnumbered in the book).
- **World.** An assignment of values to the endogenous variables of $M$; it need not satisfy the equations and, unlike the philosophers' "world", omits exogenous variables. "Typical" applies to variables and equations, "normal" to worlds.
- **Constraint on normality.** Variables typically obey the equations, so the consequences of what is typical are typical. Otherwise the ordering is the modeler's choice, a subjectivity Halpern compares to the choice of variables.
- **Normality ordering.** A partial preorder $\succeq$ on worlds: reflexive and transitive, but not necessarily antisymmetric or total. $s\succeq s'$ means "$s$ is at least as normal as $s'$". $s\succ s'$ iff $s\succeq s'$ and $s'\not\succeq s$; $s\equiv s'$ iff each is $\succeq$ the other.
  - Incomparable worlds are not equally normal.
  - Read probabilistically, $s\succ s'$ means that $s$ is *much* more probable than $s'$.
- **Extended causal model.** A tuple $M=(\mathcal S,\mathcal F,\succeq)$. In a recursive model, a context $\vec u$ determines the actual world $s_{\vec u}$.
- **AC2$^+$(a).** There is a partition of $\mathcal V$ into disjoint $\vec Z$ and $\vec W$ with $\vec X\subseteq\vec Z$, and settings $\vec x',\vec w$, such that:
  - $s_{\vec X=\vec x',\vec W=\vec w,\vec u}\succeq s_{\vec u}$, and
  - $(M,\vec u)\models[\vec X\leftarrow\vec x',\vec W\leftarrow\vec w]\neg\varphi$.
- **AC2$^+$(a$^m$).** Adds the same normality clause to AC2(a$^m$), where $(M,\vec u)\models\vec W=\vec w$.

Normality is largely orthogonal to the choice of HP variant. The chapter otherwise uses the updated definition.

**Examples.**
- **Oxygen (3.2.1).** If a world without oxygen is more abnormal, oxygen is not a cause of the forest fire; in a laboratory chamber normally voided of oxygen, it is. So but-for causes can fail to be causes.
- **Billy's doctors (3.2.2).** Suppose it is normal for Billy's own doctor to treat him and abnormal for any other doctor to do so. Then only his own doctor's omission is a cause, with no probability on contexts needed (compare Section 2.6).
  - The ordering can encode either "omissions are never causes" (not acting is always more normal) or "all omissions are causes" (all worlds equally normal, which recovers the plain HP definition).
  - Against the worry that verdicts can be reverse-engineered, Halpern says the modeler must argue that the ordering is *appropriate*; there is "no blank check".
- **Two voters (3.2.3).** Normality breaks most of Theorem 2.2.3; only "updated cause implies original cause" survives.
  - If split votes are abnormal, $V_1=1\wedge V_2=1$ is a cause but neither conjunct is. So causes under the original definition need no longer be single conjuncts.
  - If $V_1=V_2=0$ is also abnormal, $O=1$ has no cause at all.
- **Billy recovers (3.2.4).** If treatment is normal, Billy's recovery has no cause, an unreasonable result that motivates Section 3.3.
- **Two arsonists (3.2.5).** If $MD\ne MD'$ is abnormal, neither arsonist alone satisfies AC2$^+$(a$^m$), so $L=1\wedge MD=1$ becomes a cause and lightning is again part of a cause.
- **Rock throwing (3.2.6).** In $M'_{RT}$, declaring the witness with $BT=1$, $ST=0$, $BH=0$ abnormal makes $ST=1\wedge BT=1$ the cause under the modified definition; the original and updated definitions keep $ST=1$ via the witness $ST=BT=0$. Ordering worlds over endogenous variables only is meant to keep that witness from looking abnormal. But if Billy's accuracy $BA$ is endogenous ($M^*_{RT}$), the witness $BT=1$, $BA=1$, $BH=0$ does look abnormal, especially for a throwing machine. Halpern blames placing normality on worlds (Section 3.5).

### 3.3 Graded Causation
Rather than eliminating causes, normality *ranks* them, which also explains why people usually name only one.

**Definitions.**
- **Witness world.** $s$ is a witness for $\vec X=\vec x$ being a cause of $\varphi$ in $(M,\vec u)$ if $s$ results from setting $\vec X=\vec x'$ and $\vec W=\vec w$ in $\vec u$, for some $\vec W,\vec w,\vec x'$ that satisfy:
  - AC2(a) and AC2(b$^u$) for the updated definition;
  - AC2(a) and AC2(b$^o$) for the original definition;
  - AC2(a$^m$) for the modified definition.
- **Best witness.** A witness $s$ such that no witness $s'$ has $s'\succ s$. There may be several.
- **Grading.** Willingness to judge $\vec X=\vec x$ a cause rises with the normality of its best witness, relative to the best witnesses of other candidate causes.

Grading uses the plain AC2(a) or AC2(a$^m$); normality only marks causes as "good" or "poor". The other doctors in 3.2.2 are poor causes, while in 3.2.4 Billy's doctor is the only, hence "the", cause. An event with only poor causes was expected and needs no explanation, but a poor cause beats none. Against philosophers who call grading a mistake, Halpern wants a notion that matches usage and helps solve problems: we ask why Billy's doctor failed to treat him, not why other doctors did.

### 3.4 More Examples

**3.4.1 Knobe effects.**
- **Experimental results.** On a −3 to +3 scale, subjects rated "Professor Smith caused the problem" at 2.2 and the same claim about the assistant at −1.2. When both are allowed pens, ratings become intermediate, so attribution is comparative.
- **HP analysis.** With $PO=\min(PT,AT)$, both actions are but-for causes. The norm makes the professor's best witness, $(PT=0,AT=1,PO=0)$, more normal than the assistant's, so $PT=1$ is the better cause.
- **Halpern's stance.** The "egalitarian" notion of cause fits the equations, which are arguably objective; pragmatic normality picks out "the" cause.

**3.4.2 Bogus prevention.**
- **Example 3.4.1.** Assassin refrains from poisoning, Bodyguard adds an antidote, and Victim survives. Let $A=1$ mean no poison and $VS=A\vee B$.
  - The original and updated definitions make $B=1$ a cause; the modified definition makes it part of a cause.
  - The equations are isomorphic to the disjunctive forest fire, so no equations-only definition can separate the cases.
  - If $A$ is typically 1 and $B$ typically 0, the witness $(0,0,0)$ is incomparable with the actual world $(1,1,1)$. So under AC2$^+$(a) survival has no cause; under grading, $A=1$ and $B=1$ are poor causes (their conjunction, under the modified definition).
  - A model with $PN=\neg A\wedge B$ and $VS=A\vee PN$ avoids normality altogether. There $B=1$ is not even part of a cause, while $A=1$ is a cause; normality explains why people resist the latter too.
  - Historically, this example motivated introducing normality.
- **Example 3.4.2.** If Assassin poisons only because Bodyguard added the antidote ($A=\neg B$), all variants make $B=1$ a cause. But the witness $A=B=0$ contradicts the story, so it is abnormal, and $B=1$ is not a cause.
- **Train switch (Example 3.4.3).** Normality removes the flip as a cause by making the witness $LB=1$ abnormal. It fails when both tracks are blocked, because the witness $LB=0$ is then more normal than the actual world. The modified definition handles that case.

**3.4.3 Voting examples.**
- **Jack and Jill.** Jack (Republican-leaning) and Jill (Democrat-leaning) abstain, and in a naive model both are causes of a Republican landslide. Making their preferences exogenous is "draconian". Normality instead makes Jill a much better cause, and only Jill a cause under AC2$^+$.
- **A 17–2–0 vote.** B's voters cause A's win (via 8 of A's voters switching to C), though not in a two-way 17–2 vote; Halpern says the modified definition shows why a third option matters. Similarly, exogenous strong partisans yield "Nader cost Gore", not the converse.

**3.4.4 Causal chains.**
- **The case.** In *Regina v. Faulkner*, a lit match ignited rum, burning a ship, costing Lloyd's money and driving an executive to suicide; the match was not a legal cause of the death.
- **The model.** $RI=\min(M,R)$, $SD=\min(RI,F)$, $LL=\min(SD,LI)$ and $ES=\min(LL,EU)$, with 0 typical for $M,R,F,LI,EU$.
- **Grading.** The witness for $M=1$ needs $R,F,LI,EU$ all equal to 1, whereas the witness for $LL=1$ needs only $EU=1$, so $LL=1$ is the better cause. Making the witness for $M=1$ less normal than the actual world breaks transitivity, though every link is causal.
- **Attenuation** tracks how abnormal the required background conditions are, not chain length. The modified definition needs blame instead (Section 6.2).

**3.4.5 Legal doctrines of intervening causes.**
- **The case.** Anne negligently spills gasoline and Bob throws a cigarette into it (*Watson v. Kentucky and Indiana Bridge and Railroad*).
- **The model.** $F=AS\wedge BT$, $AS=AN$ and $BT=BC\vee BM\vee\neg AS$. *Mens rea* is encoded as decreasing typicality: $BC=1$ is most typical, then $AN=1$, then $BM=1$.
- **Verdicts.** If Bob is careless, Anne's negligence is the better cause; if he is malicious, his malice is. As in the Knobe case, one agent's causal status depends on the other's normative status.

### 3.5 An Alternative Approach to Incorporating Normality
Normality now orders contexts (the model held fixed), a qualitative analogue of probability, and is lifted to sets of contexts.
- **Lifted order.** $A\succeq^e B$ iff for every $\vec u\in B$ some $\vec u'\in A$ has $\vec u'\succeq\vec u$. This extends $\succeq$. For a total $\succeq$ and finite sets, it compares the most normal elements, as ranking functions do.
- **New normality clause.** With $[\![\varphi]\!]=\{\vec u:(M,\vec u)\models\varphi\}$, the normality clause becomes
  $[\![\vec X=\vec x'\wedge\vec W=\vec w\wedge\neg\varphi]\!]\succeq^e[\![\vec X=\vec x\wedge\varphi]\!]$.

**Rock throwing revisited.** Whether Billy's accuracy is endogenous no longer matters, because the same sets of contexts are compared, and a miss can be unlikely without being abnormal. All variants now agree on whether $ST=1$ is a cause; where they say it is not, the joint cause is defensible, since the bottle would have shattered anyway.

**Graded causation (3.1).** Let $(\vec W_i,\vec w_i,\vec x'_i)$, $i\le k$, be *all* witnesses for $\vec X=\vec x$, and $(\vec W'_j,\vec w'_j,\vec y'_j)$, $j\le m$, all witnesses for $\vec Y=\vec y$. Then $\vec X=\vec x$ is at least as good a cause of $\varphi$ as $\vec Y=\vec y$ iff
$$[\![(\textstyle\bigvee_{i\le k}(\vec X=\vec x'_i\wedge\vec W_i=\vec w_i))\wedge\neg\varphi]\!]\ \succeq^e\ [\![(\textstyle\bigvee_{j\le m}(\vec Y=\vec y'_j\wedge\vec W'_j=\vec w'_j))\wedge\neg\varphi]\!].$$
- For parts of causes, compare the witnesses of all causes that contain the conjunct.
- Section 3.4's analyses carry over, except for the causal chain, where the length of the chain no longer matters.

**Examples.**
- **Salsa team (3.5.1).** A team needs at least one man and one woman; Alice, Bob, Chuck and Dan all fail to show up. Each is a cause under the original and updated definitions. Alice's witnesses strictly include Bob's, so (3.1) makes her the better cause (the better part of a cause under the modified definition), matching experimental judgments; the world-based approach ranks all four equally.
- **Switches (3.5.2).** A sets a switch, B matches it, and bulb $C$ lights iff the switches match ($B=A$; $C=1$ iff $A=B$).
  - Both are causes, yet people blame only B; neither approach favours B, even when the outcome is an electric shock.
  - In an isomorphic story (Billy is fine iff exactly one of two doctors treats him), when only Monday's doctor treats, AC2$^+$ fails for both; grading favours Monday's doctor only if no treatment is more normal than double treatment, as Halpern argues.
- **Proposed fix.** Rank witnesses by the *change* in normality from the actual world, which differs from absolute normality only for partial orders. It favours B, since A's witness changes A *and* violates B's equation, and it favours Tuesday's doctor when both doctors treat. Halpern thinks this richer model is worth exploring but leaves it unformalized.

**Key takeaways**
- AC2$^+$ formalizes "undo the exceptional, not the routine": witnesses must be at least as normal as the actual world.
- Normality repairs several Chapter 2 verdicts, but can also remove but-for causes, make original-definition causes non-singleton, and leave events causeless.
- Graded causation ranks causes by their best witnesses, explaining Knobe effects, voting, attenuation and intervening causes.
- Halpern's stance: the equations are egalitarian and arguably objective, while choosing "the" cause is pragmatic. The normality ordering is subjective but must be defended as appropriate.
- He prefers normality on contexts, lifted to sets and applied to all witnesses; comparing *changes* in normality is suggested but not formalized.

**Chapter notes.** The chapter draws heavily on Halpern and Hitchcock [2015]; Halpern [2008] used ranking functions, whose total order mishandles bogus prevention, and Hall, Hitchcock and Menzies proposed related ideas. Psychological sources run from Kahneman–Tversky and Kahneman–Miller to Knobe–Fraser and Hitchcock–Knobe, with a weaker replication of the pen effect by Sytsma, Livengood and Rose [2012]. The notes also survey typicality semantics, the omissions debate, and Mill's, Lewis's and Hall's objections to singling out causes. Attributions include bogus prevention to Hitchcock, voting to Livengood, attenuation to Moore, Section 3.5's impetus to Beckers, the salsa case to Zultan, Gerstenberg and Lagnado, and the shock case to McDermott.

## Chapter 4 — The Art of Causal Modeling
*Book pp. 107–138*

**In brief.** HP causality is model-relative, so verdicts depend on the equations, the variables, the exogenous/endogenous split, the normality ordering and even the variables' ranges. Halpern denies that there is one "right" model ("all models are wrong, but some are useful"); an engineer and a sociologist may reasonably name different causes of an accident. Yet a lawyer's model that blames faulty brakes by keeping the rain exogenous, or by treating drunkenness as normal, is plainly inappropriate. Equations are in principle testable by intervention, but variable choice and normality are partly subjective, so models need principles for rational critique. The chapter covers "structuring" variables, conservative extensions, stability results and guidance on ranges, independence and normality.

### 4.1 Adding Variables to Structure a Causal Scenario
A model is *insufficiently expressive* if it cannot distinguish scenarios that warrant different causal attributions. Examples are naive rock throwing and the original bogus-prevention model. Stories with identical equations may need **structuring variables** that describe mechanisms.

- **Example 4.1.1 (switch).** $C=(\neg S\wedge A)\vee(S\wedge B)$, and actually $A=B=S=1$.
  - The original and updated definitions wrongly make $A=1$ a cause, via the contingency $S=0$; normality does not help. Under the modified definition, $A=1$ is only part of a cause.
  - The logically equivalent equation $C=(B\wedge(A\vee S))\vee(\neg B\wedge A\wedge\neg S)$ tells a story in which $B$ is the switch and $A=1$ intuitively *is* a cause.
  - Adding $D=\neg S\wedge A$ and $E=S\wedge B$, with $C=D\vee E$, yields the first story's verdict under all variants. Analogous variables $D',E'$ yield the second.
  - Structuring variables must not be *defined* from the others: adding a variable commits us to being able to intervene on it.
- **Example 4.1.2 (lamp).** Three switches take values in $\{-1,0,1\}$, and $L=1$ iff at least two of them match. Actually $A=1$ and $B=C=-1$.
  - The original and updated definitions count $A=1$ as a cause; the modified definition does not.
  - The same equation also fits the rule "the lamp is on iff some position is occupied by no switch", under which $A=1$ plausibly is a cause.
  - Add variables $NOT(i)$, meaning no switch is at $i$. Then all variants count $A=1$ as a cause.
  - Add variables $TWO(i)$, meaning at least two switches are at $i$. Then none do.
  - Causality thus depends on description, which Halpern finds compatible with human judgments. Good practice is to add the structuring variables that one's own description suggests.
- **Example 4.1.3 (Hall).** In $M$, $B=A$ and $E=D$. Replace $A$ by $X$ ("$A$ agrees with $D$"), with $B=1$ iff $X=D$. In the new model $M'$, $D=1$ causes $B=1$.
  - Hall calls this "plainly silly". Halpern answers that $M'$ fits a different story: Xavier learns from Carol only whether Betty and Edward agree. There the verdict is reasonable.
- **Example 4.1.4 (ranch vote).** Five voters face a three-mechanism voting rule. Actually $A_1=A_2=1$ and $A_3=A_4=A_5=0$.
  - In the naive model, the original and updated definitions make every vote a cause.
  - Adding mechanism variables $M_1,M_2,M_3\in\{0,1,2\}$ removes $A_3$, $A_4$ and $A_5$ from the causes under all variants, while $A_1=1$ and $A_2=1$ remain causes.
  - An equivalent two-mechanism rule, modelled with $M'_1,M'_2$, reasonably restores $A_3$, $A_4$ and $A_5$ as causes under the original and updated definitions.
- **Example 4.1.5 (forest fire mechanisms).** Add $A=L\wedge\neg MD$, $B=\neg L\wedge MD$, $C=L\wedge MD$ and $FF=A\vee B\vee C$.
  - Now $L=1$ and $MD=1$ are full causes even under the modified definition. Halpern calls this a feature, since the variables signal that the mechanism matters. It also gives a general recipe for turning conjunctive causes into single conjuncts.
  - Adding only $B$ makes $L=1$ the sole cause.
  - In the two-arsonist variant, normality restores lightning as part of a cause.

### 4.2 Conservative Extensions
Unconstrained, adding variables can produce any verdict. For instance, adding $BH_1=BT$ to $M'_{RT}$, with $BS=SH\vee BT\vee BH_1$, makes $BT=1$ a cause. That is cheating, because it creates a new causal path. A legitimate refinement, like looking through a better magnifying glass, should preserve all results of setting the old variables.

**Definition 4.2.1.** $M'=((\mathcal U',\mathcal V',\mathcal R'),\mathcal F')$ is a *conservative extension* of $M=((\mathcal U,\mathcal V,\mathcal R),\mathcal F)$ if $\mathcal U=\mathcal U'$, $\mathcal V\subset\mathcal V'$, and the following holds for all contexts $\vec u$, all $X\in\mathcal V$ and all settings $\vec w$ of $\vec W=\mathcal V-\{X\}$:
$$(M,\vec u)\models[\vec W\leftarrow\vec w](X=x)\ \text{ iff }\ (M',\vec u)\models[\vec W\leftarrow\vec w](X=x).$$

- **Lemma 4.2.2.** Every causal formula over $\mathcal V$ has the same truth value in $(M,\vec u)$ and $(M',\vec u)$.
- **Proposition 4.2.3.** $M'_{RT}$ is a conservative extension of $M_{RT}$.

$M^*_{RT}$ is a conservative extension of neither, because its contexts fix accuracy and timing. The condition $\mathcal U=\mathcal U'$ is strong: it requires new variables to be determined by the old ones. All the extensions in Section 4.1 are conservative.

### 4.3 Using the Original HP Definition Instead of the Updated Definition
**Theorem 4.3.1.** If $X=x$ is a cause of $Y=y$ in $(M,\vec u)$ under the original definition but not the updated one, then some conservative extension $M'$ makes it a cause in $(M',\vec u)$ under neither definition.

This generalizes the loaded-gun fix of Example 2.8.1. With suitable variables, the original definition does the updated one's work. It also has advantages: its causes are single conjuncts, and checking causality is easier (Section 5.3). The cost is possibly "unnatural" models. Halpern says more experience is needed, adding that he now suspects the modified definition is the right one.

### 4.4 The Stability of (Non-)Causality
Under the original and updated definitions, adding variables can flip a verdict indefinitely. In the bogus-prevention example, each new assassin $A_{n}$ makes the antidote (part of) a cause again, and each neutralization variable $PN_{n}=\neg A_{n}\wedge B$ cancels it.

**Results without normality.**
- **Theorem 4.4.1.** There is a chain $M_0,M_1,\ldots$ in which each $M_{n+1}$ conservatively extends $M_n$. Under all variants, $B=1$ is part of a cause of $VS=1$ in $(M_{2n+1},u_1)$ but not in $(M_{2n},u_1)$. The construction works for any $B=1$ and $C=1$ that are independent.
- **Theorem 4.4.2.** Under the modified definition, a cause $\vec X=\vec x$ in $(M,\vec u)$ has some (not necessarily strict) subset $\vec X_1=\vec x_1$ that is a cause in any conservative extension $(M',\vec u)$.
  - Proof idea: AC1 and AC2(a$^m$) transfer, so only AC3 can fail.
  - Consequences: single-conjunct causes are stable, and a conjunction alternates at most once.
  - In particular, Suzy's throw stays a cause in every conservative extension of $M'_{RT}$.

**Halpern's stance.** The instability is not dire. Growing awareness should change causal verdicts, but newly noticed features are rarely relevant except in abnormal circumstances.

**Definition 4.4.3.** An extended model $M'=(\mathcal S',\mathcal F',\succeq')$ is a conservative extension of $M=(\mathcal S,\mathcal F,\succeq)$ if two conditions hold:
- $(\mathcal S',\mathcal F')$ conservatively extends $(\mathcal S,\mathcal F)$;
- **CE**: for all $\vec u$ and all $\vec W\subseteq\mathcal V$, $s_{\vec W=\vec w,\vec u}\succeq s_{\vec u}$ iff $s_{\vec W=\vec w,\vec u}\succeq' s_{\vec u}$.

On contexts, CE simply requires the two orderings to be identical.

**Respecting the equations.**
- **Deviation.** In world $s$, $V$ *takes a value other than that specified by the equations* in $(M,\vec u)$ if $(M,\vec u)\models[\vec W^*\leftarrow\vec w^*](V\ne v)$. Here $\vec W^*$ is all endogenous variables other than $V$, $\vec w^*$ their values in $s$, and $v$ the value of $V$ in $s$.
- **Respecting.** The ordering *respects the equations for $V$ relative to $\vec u$* if every such $s$ has $s\not\succeq s_{\vec u}$. On contexts, the condition is that every context $\vec u'$ in which $V$ deviates has $\vec u'\not\succeq\vec u$.

**Results with normality.**
- **Theorem 4.4.4.** Suppose $M'$ conservatively extends $M$, its ordering respects the equations for all variables in $\mathcal V'-\mathcal V$ relative to $\vec u$, and $\varphi$ mentions only variables in $\mathcal V$.
  - (a) Under the original and updated definitions, if $\vec X=\vec x$ is not a cause in $(M,\vec u)$, then either it is not a cause in $(M',\vec u)$, or some strict subset $\vec X_1=\vec x_1$ is a cause in $(M,\vec u)$.
  - (b) Under the modified definition, $\vec X=\vec x$ is a cause in $(M,\vec u)$ iff it is a cause in $(M',\vec u)$.
  - So the modified definition is fully stable, and the original and updated definitions are stable for single-conjunct non-causes. Halpern believes, without proof, that the original definition is also stable for conjunctions. Example 4.8.2 shows that this fails under the updated definition.
- **Theorem 4.4.5.** Under the original and updated definitions, with orderings that respect the equations, there is no alternation from cause to non-cause and back to cause across $M\subset M'\subset M''$.
- **Theorem 4.4.6.** Under the same assumptions, being part of a cause is preserved in both directions by the modified definition. Halpern conjectures, without proof, that non-part-causality is also preserved for the updated definition.

**The price.** "Respecting the equations" is strong: it treats $\vec u$ as the normal situation for the new variables. Halpern defends it: with three-valued assassin variables ("absent" being normal), the antidote is no longer part of a cause.

**Definition 4.4.7.** $(M',\vec u')$ conservatively extends $(M,\vec u)$ if $\mathcal V\subset\mathcal V'$ and, for all $X\in\mathcal V$ and all settings $\vec w$ of $\mathcal V-\{X\}$, $[\vec W\leftarrow\vec w](X=x)$ holds in $(M,\vec u)$ iff it holds in $(M',\vec u')$. The exogenous variables may differ.
- This explains why $(M^*_{RT},\vec u^*)$ gives the same verdicts as $M'_{RT}$.
- For extended models, CE is imposed relative to the two settings. On contexts, the requirement is $[\![\varphi]\!]\succeq^e[\![\varphi']\!]$ iff $[\![\varphi]\!](\succeq^e)'[\![\varphi']\!]$ for Boolean combinations $\varphi$ and $\varphi'$ over $\mathcal V$.
- All the results of the section carry over to this setting.

### 4.5 The Range of Variables
A variable's range must fit the other variables. Take a stuck door that opens only with a solid push. A binary push variable suffices for whether the door opens ($O$). Add an alarm $A$ that any push trips, and the push variable needs three values: no push, normal push, solid push.

### 4.6 Dependence and Independence
Interventions require independent settability.
- **Across variables.** Values of different variables must not be logically related. With "Martha says hello" ($H_1$) and "says hello loudly" ($H_2$), the setting $H_1=0\wedge H_2=1$ is meaningless. This is why Section 4.1's structuring variables are independent rather than defined.
- **Within a variable.** A variable's values should be mutually exclusive. Replacing $SH$ and $BH$ by a single "whose rock hits" variable $H$ makes the model insufficiently expressive, because both rocks, or neither, could hit.
- **Example 4.6.1 (Careless Camper).** The camper camps in June unless the forest burns in May, and his camping causes a June fire.
  - A single fire variable yields cyclic equations with no solution.
  - A three-valued variable (no fire, May fire, June fire) mispredicts interventions.
  - Time-indexed variables, with $C=1-F_1$ and $F_2=C\times(1-F_1)$, work.
  - The underlying issue is a variable whose values span different times, with another variable sandwiched causally between them.
- **Example 4.6.2 (birth and death).** A variable for "Jones dies shortly before 80" presupposes that Jones was born. It cannot coexist with a birth variable, so birth is not a cause of death. In general, only variables whose values are compatible with the model's presuppositions may be included.

### 4.7 Dealing With Normality and Typicality
Normality worsens the problem of justifying a model, since a suitable ordering can defeat any causal claim. Norms may be statistical, moral, societal, institutional or functional; the law adds criminal statutes (for example, seat-belt standards), contract terms, the tort "reasonable person", and the treatment of deliberate malicious acts as "abnormal". Halpern expects no unique correct ordering, only "resources for a rational critique of models".

### 4.8 Proofs
- **Lemma 4.2.2.** Proved by induction along an ordering of the variables that recursiveness guarantees.
- **Theorem 4.3.1.** For each witness under the original definition, add a variable $NW$ that equals 1 iff $X=x$ and $\vec W=\vec w$. Then alter $Y$'s equation only where $NW$ takes an "abnormal" value, which kills that witness while staying conservative. Repeat for each of the finitely many witnesses. In the loaded-gun case, $NW$ nearly coincides with $B'=A\wedge B$ from Example 2.8.1.
- **Theorem 4.4.4.** A witness in $M'$ either restricts to a witness in $M$ (by Lemma 4.2.2 and CE), or one of its new variables violates its equations, making the witness abnormal.
- **Example 4.8.2.** In a vote-scanner model, adding $D'=B\wedge\neg A$ and then $D''=D\wedge\neg A$ takes $B=1\wedge C=1$ from non-cause to cause to non-cause.

**Key takeaways**
- Causality is model-relative. There is no single right model, but models can be criticized for insufficient expressiveness; adding structuring variables is good practice.
- Conservative extensions preserve all interventional facts about the old variables. Even so, under the original and updated definitions they can flip causal verdicts indefinitely (Theorem 4.4.1).
- The modified definition is largely stable (Theorem 4.4.2). It is fully stable once the normality ordering respects the equations of added variables (Theorems 4.4.4 and 4.4.6).
- Variables must be independently settable, with mutually exclusive values, and consistent with the model's presuppositions.
- Normality orderings, like variable choices, are not uniquely determined, but norms from statistics, morality and law ground rational critique.

**Chapter notes.** Paul and Hall [2013] assume that causality is objective but are sympathetic to a "mixed approach", which Halpern suggests the HP approach arguably is. Sections 4.1–4.4 draw mainly on Halpern [2014a], the first systematic study of stability. Earlier, Strevens [2008] and Eberhardt [2014] showed instability for Woodward's definitions, and Huber [2013] proposed a related ranking-function condition. Sources for the examples are Hanson [1958] (the traffic accident), Spohn, Weslake [2015], Hall [2007], Glymour et al. [2010], Halpern [2015a] and Bennett [1987]. Sections 4.5–4.7 come from Halpern and Hitchcock [2010], and Woodward [2016] proposes further criteria for choosing variables. Choosing ranges connects to the metaphysics of events (Davidson against Kim and Lewis), and Hart and Honoré [1985] support the legal points.

## Chapter 5 — Complexity and Axiomatization
*Book pp. 139–168*

**In brief.** Halpern asks whether extended causal models can realistically underlie human and machine causal judgment. Naively represented, a model over $n$ binary variables is doubly exponential in $n$, but "natural" models are compact: equations factor along a causal network as Bayesian networks do, and a normality ordering can be viewed as an algebraic conditional plausibility measure that factors the same way and largely piggy-backs on the equations. Deciding actual causation is $\Sigma_2^P$-complete (original HP), $D_2^P$-complete (updated) and $D_1^P$-complete (modified), and NP-complete in two important special cases. A sound and complete axiomatization of interventions in recursive models has an NP-complete satisfiability problem, so causal reasoning is no harder than propositional reasoning.

### Introduction
Suppose a doctor models headaches with five binary variables. There are $2^{16}$ possible equations for "headaches" alone, $2^{80}$ (over $10^{24}$) sets of equations, and $32!\approx2.6\times10^{35}$ strict orders on the 32 worlds. In general, $n$ binary variables give $2^{n2^{n-1}}$ equation sets, $2^n$ worlds and $(2^n)!\sim2^{n2^n}$ strict orders. Halpern's position is that the theory needs compact representations to be cognitively realistic, and that natural models plausibly have them. Representational size therefore cannot show that people do not reason with something like causal models. Complexity matters separately for large applications such as programs and databases (Chapter 8).

### 5.1 Compact Representations of Structural Equations
With binary variables, any dependence is a single propositional formula ($H=X_1\vee\dots\vee X_k$ replaces $2^k$ rows), but possibly an exponentially long one. Bayesian networks suggest the fix: exploit (conditional) independence. In the sophisticated rock-throwing model, $BS$ is affected by $ST,BT,BH,SH$, but it is determined by its parents ($BS=SH\vee BH$) and is independent of $BT$ given $BH$. If every variable in the causal network has at most $k$ parents, at most $2^kn$ equations are needed rather than $2^{n-1}n$. In practice $k$ is often small, low-impact variables can be dropped, and many-input dependencies are often simple (voting rules). Halpern notes that this must be checked experimentally, but every example in the book is compact. Networks also capture probabilistic independencies: adding context-determined variables $SO$, $BO$ ("the bottle would topple had only Suzy's/Billy's rock hit") makes the independence of these counterfactual outcomes (Example 2.5.4) expressible.

### 5.2 Compact Representations of the Normality Ordering
Two ideas apply: exploit independence, and let normality reflect the equations. Both work for preorders on worlds or on contexts.

**5.2.1 Algebraic plausibility measures: the big picture.** A *plausibility measure* maps subsets of a finite $W$ into a partial order $(D,\le)$ with $\bot\le d\le\top$, $\mathrm{Pl}(\emptyset)=\bot$, $\mathrm{Pl}(W)=\top$, and $U\subseteq V\Rightarrow\mathrm{Pl}(U)\le\mathrm{Pl}(V)$. A *conditional* plausibility measure (cpm) is defined for $V\neq\emptyset$ and satisfies:
- CPl1: $\mathrm{Pl}(\emptyset\mid V)=\bot$.
- CPl2: $\mathrm{Pl}(W\mid V)=\top$.
- CPl3: $U\subseteq U'\Rightarrow\mathrm{Pl}(U\mid V)\le\mathrm{Pl}(U'\mid V)$.
- CPl4: $\mathrm{Pl}(U\mid V)=\mathrm{Pl}(U\cap V\mid V)$.

It is *algebraic* if there are $\oplus,\otimes$ with
$$\mathrm{Pl}(V_1\cup V_2\mid V_3)=\mathrm{Pl}(V_1\mid V_3)\oplus\mathrm{Pl}(V_2\mid V_3)\ (V_1\cap V_2=\emptyset),\quad \mathrm{Pl}(V_1\mid V_3)=\mathrm{Pl}(V_1\mid V_2)\otimes\mathrm{Pl}(V_2\mid V_3)\ (V_1\subseteq V_2\subseteq V_3).\quad(5.1)$$
Probability is the case $\oplus=+$, $\otimes=\times$, and ranking functions the case $\oplus=\min$, $\otimes=+$. A partial preorder on worlds or contexts extends to an algebraic cpm (Section 5.5.1). Conditional independence then makes sense, and normality can be represented by a network in which each node is independent of its ancestors given its parents.

Halpern calls this the "wrong" result: the real question is how agents arrive at an ordering. A prosecutor in an arson case would justify it *piecemeal*, per variable (possibly conditional on others) together with independence assumptions. Formally, world $(x_1,\dots,x_n)$ gets the uninterpreted plausibility $a_1\otimes\dots\otimes a_n$, where $a_i$ is the plausibility of $x_i$ given its parents' values. The order is $a_1\otimes\dots\otimes a_n\le a'_1\otimes\dots\otimes a'_n$ iff each $a_i$ has a distinct $a'_j$ with $a_i\le a'_j$. The "only if" is a minimality assumption that leaves expressions incomparable unless forced, which a partial preorder allows.
- **Example 5.2.1 (disjunctive forest fire).** The network is $L\to FF\leftarrow MD$. Table (5.2) sets $\mathrm{Pl}(L=0)=d_L^+>d_L^-=\mathrm{Pl}(L=1)$ and likewise $d_M^+>d_M^-$ for $MD$. $FF$ gets $d_{FF}^+$ when it obeys its equation and $d_{FF}^-$ otherwise. If the $d^+$'s are mutually incomparable, as are the $d^-$'s, the result is the order of Figure 5.2 on worlds $(L,MD,FF)$, where $(0,0,0)$ is most normal and, e.g., $(0,1,1)\succ(1,1,1)$ while $(0,1,1)$ is incomparable with $(1,0,0)$. With at most $k$ parents per variable, at most $n2^{k+1}$ plausibilities are needed instead of $2^n$ (for $k=5$, $n=100$: 6,400 against $2^{100}>10^{33}$).
- **Example 5.2.2.** Suppose arson is judged more atypical than lightning, and no-arson more typical than no-lightning. The second judgment does not follow from the first, and the ranking can reflect that arson is illegal and immoral rather than its frequency. The values for $L$ and $MD$ then become comparable, which orders previously incomparable worlds such as $(0,1,1)$ and $(1,0,1)$ (Figure 5.3).

**5.2.2 Piggy-backing on the causal model.** Here the normality graph coincides with the causal graph, and $FF$'s table says only that it is typical to obey $FF=\max(L,MD)$. Two defaults generalize this, each holding unless explicitly overridden:
- **Default Rule 1 (Normal Causality).** Let $X$ have no exogenous parents, parents $\vec Y_{PA(X)}$, and equation $X=F_X(\vec Y_{PA(X)})$. Then there are $d_X^+>d_X^-$ with $\mathrm{Pl}(X=x\mid\vec Y_{PA(X)}=\vec y)=d_X^+$ if $x=F_X(\vec y)$ and $d_X^-$ otherwise.
- **Default Rule 2 (Minimality).** Plausibility values $d_x,d_y$ of distinct variables whose relative order is not given are incomparable. This is a partial-order analogue of maximum entropy and indifference.

Under these rules the disjunctive extended model reduces to $FF=\max(L,MD)$, $\mathrm{Pl}(L=0)>\mathrm{Pl}(L=1)$ and $\mathrm{Pl}(MD=0)>\mathrm{Pl}(MD=1)$. Example 5.2.2 becomes $FF=\max(L,MD)$ with $\mathrm{Pl}(MD=0)>\mathrm{Pl}(L=0)>\mathrm{Pl}(L=1)>\mathrm{Pl}(MD=1)$. Extending a causal model thus "need not impose enormous cognitive demands". The defaults admit exceptions, such as violations more typical than compliance, more than two levels, or cross-variable comparisons. Causal and normality structure can also diverge: in a variant of the Knobe–Fraser pen case, Professor Smith takes a pen ($PS$) regardless of a possible no-pens policy ($CP$). $PS$ is then causally independent of $CP$, but its normality depends on $CP$.

### 5.3 The Complexity of Determining Causality
The problem is membership in $\mathcal L_{cause}=\{(M,\vec u,\varphi,\vec X,\vec x):\vec X=\vec x\text{ is a cause of }\varphi\text{ in }(M,\vec u)\}$. Besides P, NP, co-NP, PSPACE and EXPTIME, the results use the polynomial hierarchy:
- $\Sigma_1^P=$ NP.
- $\mathcal L\in\Sigma_2^P$ iff some polynomial-time $A$ has $x\in\mathcal L\iff\exists y_1\forall y_2\,A(x,y_1,y_2)=1$.
- $\Sigma_k^P$ and $\Pi_k^P$ use $k$ alternating quantifiers, starting with $\exists$ and $\forall$ respectively.
- $D_k^P=\{\mathcal L:\exists\mathcal L_1\in\Sigma_k^P,\ \mathcal L_2\in\Pi_k^P,\ \mathcal L=\mathcal L_1\cap\mathcal L_2\}$. Thus $\Sigma_k^P\cup\Pi_k^P\subseteq D_k^P\subseteq\Sigma_{k+1}^P\cap\Pi_{k+1}^P$, and $D_k^P$ is very different from $\Sigma_k^P\cap\Pi_k^P$.

Hardness is via polynomial-time reductions; Sat is NP-complete and its complement Sat$^c$ co-NP-complete. A naive encoding of $M$ is exponential, which would make the problem polynomial "for the wrong reasons". Models are therefore assumed to be given succinctly (e.g., $BS=BH\vee SH$), with each context's solution computable in polynomial time.
- **Theorem 5.3.1.** Deciding whether $\vec X=\vec x$ is a cause of $\varphi$ in $(M,\vec u)$ is (a) $\Sigma_2^P$-complete for the original HP definition, (b) $D_2^P$-complete for the updated definition, and (c) $D_1^P$-complete for the modified definition.

The modified definition is easiest because it has no AC2($b^o$)/AC2($b^u$). The original definition is easier than the updated one because its causes are single conjuncts. Conceptual simplicity thus has a technical analogue. Halpern concedes that even $D_1^P$-completeness signals intractability, but real models have exploitable structure and the hardness constructions are atypical.
- **Theorem 5.3.2.** Deciding whether $X=x$ is a cause of $\varphi$ is NP-complete (a) for the original definition in binary models and (b) for the modified definition.

Singleton causes cost nothing for the original definition, and binary models are common. For the modified definition the singleton restriction is real (voting, the disjunctive forest fire), but many examples satisfy it. Halpern takes progress in practical NP solving as grounds for hope.

### 5.4 Axiomatizing Causal Reasoning
Axioms characterize what follows from partial knowledge of a model. Fix a signature $\mathcal S=(\mathcal U,\mathcal V,\mathcal R)$ with finite $\mathcal V$ and finite ranges, the recursive models $\mathcal M_{rec}(\mathcal S)$, and the causal language $\mathcal L(\mathcal S)$ of Section 2.2.1. $\mathcal L(\mathcal S)$ expresses every HP variant, because the quantifiers in AC2(a)/AC2($a^m$) and AC2($b^o$)/AC2($b^u$) become finite disjunctions and conjunctions. "$Y$ affects $Z$" abbreviates the following, with $\vec X=\mathcal V-\{Y,Z\}$:
$$Y\rightsquigarrow Z\equiv\textstyle\bigvee_{\vec x\in\mathcal R(\vec X),y\in\mathcal R(Y),z\in\mathcal R(Z),y\neq y',z\neq z'}\big([\vec X\leftarrow\vec x,Y\leftarrow y](Z=z)\wedge[\vec X\leftarrow\vec x,Y\leftarrow y'](Z=z')\big).$$
The axiom system $\mathrm{AX}_{rec}(\mathcal S)$ consists of:
- **C0.** All substitution instances of propositional tautologies.
- **C1 (equality).** $[\vec Y\leftarrow\vec y](X=x)\Rightarrow[\vec Y\leftarrow\vec y](X\neq x')$ for $x\neq x'$ in $\mathcal R(X)$.
- **C2 (definiteness).** $\bigvee_{x\in\mathcal R(X)}[\vec Y\leftarrow\vec y](X=x)$.
- **C3 (composition).** $([\vec X\leftarrow\vec x](W=w)\wedge[\vec X\leftarrow\vec x](Y=y))\Rightarrow[\vec X\leftarrow\vec x,W\leftarrow w](Y=y)$.
- **C4 (effectiveness).** $[X\leftarrow x,\vec W\leftarrow\vec w](X=x)$.
- **C5 (recursiveness).** $(X_0\rightsquigarrow X_1\wedge\dots\wedge X_{k-1}\rightsquigarrow X_k)\Rightarrow\neg(X_k\rightsquigarrow X_0)$ if $X_k\neq X_0$. This is one scheme per $k$; the case $k=1$ alone is insufficient.
- **C6 (determinism).** (a) $[\vec X\leftarrow\vec x]\neg\varphi\Leftrightarrow\neg[\vec X\leftarrow\vec x]\varphi$; (b) $[\vec X\leftarrow\vec x](\varphi\wedge\psi)\Leftrightarrow([\vec X\leftarrow\vec x]\varphi\wedge[\vec X\leftarrow\vec x]\psi)$; (c) the same for $\vee$.
- **MP (modus ponens).** From $\varphi$ and $\varphi\Rightarrow\psi$ infer $\psi$.

Results:
- **Theorem 5.4.1.** $\mathrm{AX}_{rec}(\mathcal S)$ is sound and complete for $\mathcal L(\mathcal S)$ in $\mathcal M_{rec}(\mathcal S)$.
- **Theorem 5.4.2.** For a fixed finite $\mathcal S$, validity is decidable in time linear in $|\varphi|$. This is trivial: there are finitely many models.
- **Theorem 5.4.3.** $\varphi$ is satisfiable in $\mathcal M_{rec}(\mathcal S)$ iff for some $\vec u$ it is satisfiable in $\mathcal M_{rec}(\mathcal S_{\varphi,\vec u})$. That signature has only the variables $\mathcal V_\varphi$ of $\varphi$ and one exogenous variable $U^*$ whose range is $\vec u$, so unmentioned variables can be ignored.
- **Theorem 5.4.4.** With $(\varphi,\mathcal S)$ as input, satisfiability is NP-complete and validity is co-NP-complete. Causal reasoning is thus no harder than propositional reasoning, and SAT techniques may carry over.

### 5.5 Technical Details and Proofs
**5.5.1.** *Definition 5.5.1* makes an algebraic cpm precise, with $\oplus,\otimes$ defined only on the tuples $Dom(\oplus)$, $Dom(\otimes)$ arising from disjoint unions and nested conditioning. It requires Alg1 and Alg2 (the two laws of (5.1), for $V\neq\emptyset$), Alg3 (distributivity of $\otimes$ over $\oplus$), and Alg4 (cancellation: $a\otimes c\le b\otimes c$ with $c\neq\bot$ implies $a\le b$). $U$ is independent of $V$ given $V'$ if $V\cap V'\neq\emptyset$ implies $\mathrm{Pl}(U\mid V\cap V')=\mathrm{Pl}(U\mid V')$, which is asymmetric in general. The construction lifts $\succeq$ to sets ($U\succeq^eV$ iff every $w\in V$ is dominated by some $w'\in U$), quotients by equivalence, and uses elements $d_{[U\cap V]\mid[V]}$ plus $\bot,\top$. **5.5.2.** For Theorem 5.3.1(c), membership in $D_1^P$ holds because AC1 with AC2($a^m$) is in NP (guess $\vec W,\vec x'$) and AC1 with AC3 is in co-NP. Hardness is by reduction from the $D_1^P$-complete Sat $\times$ Sat$^c$. With $\psi,\psi'$ over disjoint $Y_1,\dots,Y_n$, set $X_0=X_1=U$, $Y_i=X_0$ and $Z=(X_0=1)\wedge\psi\wedge(X_1=1\vee\psi')$. Then $X_0=0\wedge X_1=0$ causes $Z=0$ in $(M,0)$ iff $\psi$ is satisfiable and $\psi'$ is not. For singletons AC3 is trivial, which gives Theorem 5.3.2(b). **5.5.3.** Completeness builds a canonical model from a maximal consistent set, with $F_X(\vec y,\vec u)=x$ iff $[\vec Y_X\leftarrow\vec y](X=x)$ is in the set; C5 guarantees recursiveness. The NP upper bound restricts to $\mathcal S_\varphi$, guesses a solution vector for each intervention in $\varphi$ plus a variable ordering, and checks compatibility without writing out the $F_X$.

**Key takeaways**
- A naive extended model is doubly exponential in size, but network factorization ($2^kn$ equations, $n2^{k+1}$ plausibilities) makes natural models compact, so size does not refute causal models as a cognitive account.
- Normality orderings can be viewed as algebraic cpms. With Normal Causality and Minimality as defaults, they cost only a few inequalities beyond the equations, though normality and causal structure can diverge.
- Causality is $\Sigma_2^P$-complete (original), $D_2^P$-complete (updated) and $D_1^P$-complete (modified). It is NP-complete for the original definition in binary models and for singleton causes under the modified one.
- C0–C6 plus MP soundly and completely axiomatize causal reasoning in recursive models. Satisfiability is NP-complete, and only the variables in $\varphi$ matter.

**Chapter notes.** Section 5.1 draws on Halpern and Hitchcock (2013). Cpms are due to Friedman and Halpern (1995), and algebraic cpms and their use in Bayesian networks to Halpern (2001). Against Glymour et al. (2010), who think the exponential growth of models makes study by example hopeless, Halpern notes that bounding the number of parents gives polynomial growth, though he agrees that examples alone do not suffice. Theorems 5.3.1(a) and 5.3.2(a) are due to Eiter and Lukasiewicz (2002), who also proved that original-definition causes are singletons. Theorem 5.3.1(b) is due to Aleksandrowicz et al. (2014), who generalized Papadimitriou and Yannakakis's $D_1^P$ to $D_k^P$, and 5.3.1(c) and 5.3.2(b) to Halpern (2015a). The axioms come from Galles and Pearl (1998) and the results from Halpern (2000). Briggs (2012) axiomatizes an extension with disjunctive antecedents and nested counterfactuals.

## Chapter 6 — Responsibility and Blame
*Book pp. 169–186*

**In brief.** The chapter grades causality. *Degree of responsibility*, relative to a causal setting, is roughly $1/(k+1)$, where $k$ is the minimal number of changes needed to make the outcome counterfactually depend on the candidate cause. *Degree of blame* is expected responsibility relative to an epistemic state $(\mathcal K,\Pr)$. Halpern keeps the two apart and uses blame to resolve puzzles about pollution, voting, causal chains and bystanders. He then shows that people's judgments depart from the naive definition (language dependence, multiple witnesses, normality, conflation with blame) and sketches a normality-sensitive refinement.

### Introduction
Each Suzy voter causes her 6–5 win, and also an 11–0 win under the original and updated definitions. An 11–0 voter seems "less" of a cause, but graded causality cannot compare across settings. Under the modified definition, each is only part of a six-voter cause. Blame adds the epistemic state: a doctor whose drug kills a hypertensive patient can have responsibility 1 but little blame if he could not have known of the side effect. Of ten marksmen, only the one with live bullets is responsible (1), but each has blame 1/10. Halpern stresses that these are not notions of moral responsibility, since they ignore intentions and alternatives. Truman is responsible and to blame for Hiroshima, but moral judgment requires his alternatives.

### 6.1 A Naive Definition of Responsibility
**Definition 6.1.1.** $dr^o((M,\vec u),(X=x),\varphi)$ is $0$ if $X=x$ is not a cause of $\varphi$ in $(M,\vec u)$ under the original HP definition. Otherwise it is $1/(k+1)$, where there is a witness $(\vec W,\vec w,x')$ with $|\vec W|=k$ and no witness $(\vec W',\vec w',x'')$ with $|\vec W'|<k$. In extended causal models only witnesses with $s_{\vec W'=\vec w',X=x'',\vec u}\succeq s_{\vec u}$ count.

So but-for causes get 1, non-causes get 0 (the minimal number of changes is taken to be $\infty$), and $X=x$ is a cause iff $dr^o>0$.
- **Example 6.1.2.** Each Suzy voter gets 1 at 6–5 and 1/6 at 11–0 (witness $\vec W=\{V_2,\dots,V_6\}$, $\vec w=\vec 0$). The values sum to more than 1, so responsibility is not a probability.
- **Example 6.1.3.** Lightning and arsonist get 1 each in the conjunctive forest-fire model and 1/2 each in the disjunctive one, distinguishing the two.
- **Example 6.1.4.** $B=A$, $C=1$ iff $A\neq B$, actual $A=B=C=0$. $A=0$ has responsibility 1/2 via witness $(\{B\},0,1)$, although $B$ is *held* at its actual value rather than changed. The "number of changes" gloss is therefore inexact.
- **Example 6.1.5.** In the naive rock-throwing model Suzy and Billy get 1/2 each. In the sophisticated model Suzy gets 1/2 and Billy 0.

**Definition 6.1.6.** $dr^u$ (resp. $dr^m$) is $0$ if $X=x$ is not part of a cause of $\varphi$ under the updated (resp. modified) definition. Otherwise it is $1/k$, where some cause $\vec X=\vec x$ with witness $(\vec W,\vec w,\vec x')$ satisfies (a) $X=x$ is a conjunct of $\vec X=\vec x$, (b) $|\vec W|+|\vec X|=k$, and (c) $k$ is minimal over all causes containing $X=x$ and their witnesses. All variants agree on the examples above, so the superscript is dropped when immaterial.

### 6.2 Blame
Agents may be uncertain about the context (variable values) and the equations (how the world works). An epistemic state is therefore $(\mathcal K,\Pr)$: a set $\mathcal K$ of causal settings, all satisfying $X=x$, and a probability $\Pr$ on it. $\varphi$ need not be known, since $\mathcal K$ typically reflects the agent's state before acting.

**Definition 6.2.1.** The degree of blame is the expected degree of responsibility:
$$db(\mathcal K,\Pr,X=x,\varphi)=\sum_{(M,\vec u)\in\mathcal K}dr((M,\vec u),X=x,\varphi)\Pr((M,\vec u)).$$

- **Example 6.2.2.** Suzy considers four equally likely settings: the bottle is already shattered ($dr=0$), the rocks hit simultaneously (1/2), her rock hits first (1/2), Billy does not throw (1). Her blame is 1/2.
- **Example 6.2.3.** If marksman 1 assigns prior $p_i$ to marksman $i$ holding the live bullet, the blame of $i$'s shot is $p_i$. A mistaken prior can make responsibility 1 with blame 0, or the reverse.
- **Example 6.2.4.** $\Pr$ may be the actual prior, the prior the agent *should* have had, or the posterior; all three appear in legal theories. A doctor unaware of a drug's side effects has blame 0 relative to his actual state, but high blame relative to the state he should have had, given that the risk was documented and he should have checked blood pressure.
- **Example 6.2.5 (pollution).** A dumps 100 kg, B 60 kg, and $k$ kg kill the fish. At $k=80$ the modified definition exonerates B, and the others make B's status depend on what A *could* have dumped. If B is uncertain about A's amount $a$ and about $k$, B's responsibility is 1 when $a<k\le a+60$, 0 when $k>a+60$, and 1/2 when $k\le a$ and $k\le60$. When $k\le a$ and $k>60$, it is 0, or 1/2 under the original and updated definitions if A could have dumped between $k-60$ and $k$. So every variant gives B positive blame, scaled by how close B came to mattering.
- **Example 6.2.6 (voting).** Since a vote is almost never decisive (about $10^{-8}$), Halpern suggests people vote because they feel responsible. In an $a$-to-$b$ majority win, a winning voter has responsibility $1/\lceil(a-b)/2\rceil$. With ties undecided, an abstainer is never more responsible than a winning voter, but can be equally so. If $a-b$ is odd, the two are equally responsible; at 6–5 with one abstention, for example, all of them are but-for causes. If $a-b$ is even, an abstainer gets $1/(\lceil(a-b)/2\rceil+1)$ when $c\ge2$ voters abstain (1/3 at 9–5 with two abstentions) and 0 when $c=1$. The book's own 7–5 example with a single abstention contradicts that last clause. There a Suzy voter may switch to abstaining, which makes the abstainer critical after one change and gives responsibility 1/2, the value the $c\ge2$ formula predicts. Blame smooths out these parity effects.
- **Example 6.2.7 (causal chain).** In $M\to RI\to SD\to LL\to ES$ with background $R,F,LI,EU$, both $M=1$ and $LL=1$ are but-for causes, and graded causality yields attenuation only for the original and updated definitions. If the context is uncertain, $LL=1$ is a cause whenever $EU=1$, but $M=1$ only when $R=F=LI=EU=1$. Blame therefore attenuates along the chain under every variant.
- **Example 6.2.8 (bystanders).** If nobody helps, each bystander has responsibility 1 for the death, contrary to "diffusion of responsibility"; blame captures the intuition. A helper has responsibility $1/(k+1)$ when $k$ others help. If larger crowds make more helpers likelier, blame falls with crowd size, so a threshold rule yields the bystander effect.

### 6.3 Responsibility, Normality, and Blame
In experiments, ascribed responsibility falls from 1–0 to 4–0 wins, though not to the predicted 1 at 2–0 and 1/2 at 3–0. But judgments deviate from the naive definition systematically:
- **Example 6.3.1 (language dependence).** Blocs A and B (25 votes each) and voter C pass a measure 51–0. With variables $A,B,C,O$, C's responsibility is 1/2; with individual voters $A_1,\dots,B_{25}$, it is 1/26. Flipping a bloc is a "bigger" change, which the definition misses.
- **Example 6.3.2 (Example 3.5.1).** A salsa team needs a man and a woman, and none of Alice, Bob, Chuck and Dan comes. All get 1/2, yet Alice seems more responsible: any of three arrivals makes her critical, while each man has one. Counting witnesses of each size would capture this.
- **Example 6.3.3.** In a five-member committee needing three votes, A, B and C vote against and D and E for, so each of A, B, C gets 1. If A's party (Democrats) favors the measure and B's and C's (Republicans) opposes it, people assign A more responsibility, because the witness world in which A votes for it is more normal.

Gerstenberg, Halpern and Tenenbaum's experiments show that pivotality (distance from being critical) and normality both drive judgments, though party defection does not explain everything: in Example 6.3.3, A got about .75 and B .5. Three unanimous, all-needed voters also get about .75, while a lone supporter who carries a one-vote-threshold measure against a 2–1 vote gets nearly 1. This fits normality read as "going along with the crowd". Normality would also make responsibility attenuate along chains.

Halpern proposes making responsibility inversely related to the "difficulty" of moving from the actual world to a witness. Difficulty combines the number of changes with their abnormality: flipping a bloc is worse than flipping one voter, while aligning with the majority or one's party is milder. Abnormality is judged from the perspective of the event being assessed.
- **Example 6.3.4 (Example 3.5.2).** B, wanting to shock C, flips his switch the same way as A did. A's witness holds B's flip fixed, which is very abnormal given B's intent; the social norm against shocking is irrelevant to A. B's witness changes B's flip, which goes against B's intent but toward social norms, so normality falls little or even rises. B is judged more responsible.

People also conflate responsibility with blame. Falling bystander responsibility may partly be blame, and attenuation along chains may really be attenuation of blame (Example 6.2.7). To unify normality and blame, Halpern suggests replacing $\Pr$ with algebraic plausibility measures (perhaps one for likelihood, one for norms), so that blame becomes a qualitative expected responsibility; the gain is still unclear.

**Key takeaways**
- Responsibility is $1/(k+1)$ for a minimal witness set of size $k$ (original), or $1/k$ with the cause's size added (updated, modified). It is not a probability.
- Blame is expected responsibility over $(\mathcal K,\Pr)$, distinct from responsibility (the firing squad). The choice of $\Pr$ matters legally.
- Blame handles the pollution, chain, abstention and bystander cases uniformly across HP variants.
- The naive definition is qualitatively right but language dependent and blind to witness counts and normality; people also blend in blame.

**Chapter notes.** The definitions adapt Chockler and Halpern (2004), who counted the changes needed to make $X=x$ critical (giving 1 in Example 6.1.4) and assessed blame in $(M_{\vec X\leftarrow\vec x},\vec u)$ over pre-observation contexts. The marksmen example is Williamson's; Halpern reads the law's harsher treatment of the live-bullet marksman as punishment combining blame and responsibility. Zultan, Gerstenberg and Lagnado (2012) define responsibility as $1/(N+1)$ with $N=1/\sum_{i=1}^k(1/n_i)$, $n_i=|\vec W_i|$ over the $k$ witnesses, and this predicts ratings better. Halpern prefers blame to Lagnado et al.'s (2013) criticality $1-\Pr(\varphi\mid X\neq x)/\Pr(\varphi\mid X=x)$, because a non-causal common-cause correlate gets criticality 1 but blame 0.

## Chapter 7 — Explanation
*Book pp. 187–202*

**In brief.** Halpern builds explanation on the HP definitions: an explanation is a fact that, if found true, would be an actual cause of the explanandum regardless of the agent's initial uncertainty. It is *epistemic* in Salmon's sense, relative to what the agent knows, rather than *ontic*, and it may include fragments of a causal model. For Gärdenfors's Mr. Johansson, the asbestos–cancer link explains his illness to one agent and his asbestos job explains it to another. The chapter treats a known model (7.1), partial explanations graded by probability (7.2), and model uncertainty (7.3).

### 7.1 Explanation: The Basic Definition
Classical accounts, Hempel's deductive-nomological and Salmon's statistical-relevance models, miss the directionality of explanation. With the model $M$ known, the epistemic state is a set $\mathcal K$ of contexts the agent considers possible *before* observing the explanandum $\varphi$, and $\mathcal K_\psi=\mathcal K\cap[\![\psi]\!]$. The definition builds on sufficient causality (Section 2.6) and has one variant per HP definition.

**Definition 7.1.1.** $\vec X=\vec x$ is an *explanation of $\varphi$ relative to a set $\mathcal K$ of contexts* in $M$ if:
- **EX1** (sufficiency on $\mathcal K$). (i) If $\vec u\in\mathcal K$ and $(M,\vec u)\models\vec X=\vec x\wedge\varphi$, then for some conjunct $X=x$ of $\vec X=\vec x$ and some (possibly empty) $\vec Y=\vec y$, $X=x\wedge\vec Y=\vec y$ is a cause of $\varphi$ in $(M,\vec u)$ (SC2). (ii) $(M,\vec u')\models[\vec X\leftarrow\vec x]\varphi$ for all $\vec u'\in\mathcal K$ (SC3).
- **EX2** (minimality, SC4). No strict subset $\vec X'$ of $\vec X$ is such that $\vec X'=\vec x'$ satisfies EX1, where $\vec x'$ is the restriction of $\vec x$ to $\vec X'$.
- **EX3.** $\mathcal K_{\vec X=\vec x\wedge\varphi}\neq\emptyset$.

The explanation is *nontrivial* if also **EX4.** $(M,\vec u')\models\neg(\vec X=\vec x)$ for some $\vec u'\in\mathcal K_\varphi$.

Only EX1(ii) uses all of $\mathcal K$. EX2 discards known parts, so the notion is not ontic, and EX4 is optional. Saying "Aha, $A$ explains $\varphi$" does not contradict EX4. $A$ is trivial only relative to the state after it is learned. It may be nontrivial relative to the state before, and it is not trivial once uncertainty about *how* $A$ caused $\varphi$, that is, about the model, is counted (7.3).

- **Forest fire (Ex. 7.1.2).** Contexts $u_0=(0,0)$, $u_1=(1,0)$, $u_2=(0,1)$, $u_3=(1,1)$ fix the values of (lightning, match). In the disjunctive model, $L=1$ and $MD=1$ each explain $FF=1$ relative to $\{u_0,\dots,u_3\}$, $\{u_0,u_1,u_2\}$ and $\{u_0,u_1,u_3\}$; in the last case $L=1$ is trivial. In the conjunctive model, relative to all four contexts, only the trivial $L=1\wedge MD=1$ explains the fire. Relative to $\{u_1,u_3\}$, $MD=1$ explains it (trivially). $L=1$ fails sufficiency, since $(M^c,u_1)\models\neg[L\leftarrow1](FF=1)$, and $L=1\wedge MD=1$ fails EX2. This matches the intuition that lightning alone does not explain the fire.
- **Voting (Ex. 7.1.3).** Relative to all $2^{11}$ contexts, any six voters voting for Suzy explain her win. If voters 1–5 are known to have voted for her, each $V_i=1$ ($i=6,\dots,11$) does. These are *possible* explanations, which motivates **disjunctive explanations**: $\vec X_1=\vec x_1\vee\dots\vee\vec X_k=\vec x_k$ explains $\varphi$ if each disjunct does.
- **April showers (Ex. 7.1.4, Bennett).** $FF_M=1$ iff $ES_M=1\wedge AS=0$, and $FF_J=1$ iff $ES_J=1\wedge(AS=1\vee ES_M=0)$. Relative to all eight contexts, the fire is explained exactly by $ES_J=1$ and by $ES_M=1\wedge AS=0$. The June fire is explained by $AS=1\wedge ES_J=1$ and by $ES_M=0\wedge ES_J=1$ (all variants agree); the June storm alone does not suffice. Relative to the five fire contexts, the June-fire explanations are unchanged, but for the fire the variants diverge: $ES_J=1$ (all variants), $ES_M=1\wedge AS=0$ (updated, modified), and $AS=0$ or $ES_M=1$ alone (original only, arguably wrongly).

### 7.2 Partial Explanations and Explanatory Power
Halpern grades explanations only for likelihood, using a prior $\Pr$ on $\mathcal K$. One measure is the explanation's probability given $\varphi$, but it favours uninformative disjunctions such as $L=1\vee MD=1$.

**Victoria's tan (Ex. 7.2.1, Gärdenfors).** "Went to the Canaries" is accepted as an explanation, yet it is not sufficient: with no sun and no salon there is no tan. Under the updated and modified definitions it is also not a cause if it was cloudy and she used a salon. The complete explanations are "Canaries and sunny", "Canaries and no salon", and "salon"; with sun and salon exogenous, there is none. **TV with no picture (Ex. 7.2.2).** $P=T$ unless a mysterious exogenous cause $U_1$ blanks the picture. Relative to any $\mathcal K$ containing the contexts $\vec u_{00}$ and $\vec u_{10}$, $P=0$ has no nontrivial explanation. Yet $T=0$ is sufficient everywhere and a cause wherever $T=0$, except in $\vec u_{00}$ (faulty tube *and* mysterious cause). It is therefore a good partial explanation if that double fault is unlikely. Making that cause endogenous yields explanations: without a "name" for a cause there may be none, which is why people invoke gods and name syndromes.

With a probability, EX3 becomes $\Pr(\mathcal K_{\vec X=\vec x\wedge\varphi})\neq0$ and EX4 becomes $\Pr([\![\vec X=\vec x]\!]\mid\mathcal K_\varphi)\neq1$.

**Definition 7.2.3.** Let
$\mathcal K(\vec X=\vec x,\varphi,\mathrm{SC2})=\{\vec u\in\mathcal K_{\vec X=\vec x\wedge\varphi}:$ for some conjunct $X=x$ of $\vec X=\vec x$ and some (possibly empty) $\vec Y=\vec y$, $X=x\wedge\vec Y=\vec y$ is a cause of $\varphi$ in $(M,\vec u)\}$, and $\mathcal K(\vec X=\vec x,\varphi,\mathrm{SC3})=\{\vec u\in\mathcal K:(M,\vec u)\models[\vec X\leftarrow\vec x]\varphi\}$.
Then $\vec X=\vec x$ is a *partial explanation of $\varphi$ with goodness $(\alpha,\beta)$ relative to $(\mathcal K,\Pr)$* if it is an explanation of $\varphi$ relative to $\mathcal K(\vec X=\vec x,\varphi,\mathrm{SC3})-(\mathcal K_{\vec X=\vec x\wedge\varphi}-\mathcal K(\vec X=\vec x,\varphi,\mathrm{SC2}))$, with $\alpha=\Pr(\mathcal K(\vec X=\vec x,\varphi,\mathrm{SC2})\mid\mathcal K_{\vec X=\vec x\wedge\varphi})$ and $\beta=\Pr(\mathcal K(\vec X=\vec x,\varphi,\mathrm{SC3}))$.

$\alpha$ measures how often the candidate is a cause when it and $\varphi$ hold, and $\beta$ how often sufficiency holds; explanations have goodness $(1,1)$. With a .9 chance of sun, the Canaries trip has $\alpha,\beta\ge.9$ (updated and modified definitions), and if $\Pr(\vec u_{00}\mid[\![T=0]\!])=.1$, then $T=0$ has goodness $(.9,1)$. **Geiger counter (Ex. 7.2.4):** if a radioactive rock makes the counter click only with probability $\beta<1$, proximity raises the click's probability but fails EX1(ii). It is a partial explanation with goodness $(1,\beta)$, which replaces probabilistic accounts. Halpern holds that most explanations are partial. Partiality also explains why explanations attenuate along chains: genes explain Sylvia's depression and depression her suicide, but genes poorly explain the suicide.

The measures conflict. Add $u_4$ (match dropped, fire stamped out) and let $\Pr(u_1)=.1$, $\Pr(u_2)=.8$, $\Pr(u_4)=.1$. Then $L=1$ is an explanation (goodness $(1,1)$) with probability $1/9$ given fire, while $MD=1$ has goodness $(1,.9)$ and probability $8/9$. Oxygen is a near-certain cause of a lab fire yet explains little. $\Pr([\![\varphi]\!]\mid[\![\vec X=\vec x]\!])$ captures this, but it confounds correlation with causation, since a falling barometer would then explain rain.

**Definition 7.2.5.** The *explanatory power* of the partial explanation $\vec X=\vec x$ for $\varphi$ relative to $(\mathcal K,\Pr)$ is $\Pr(\mathcal K(\vec X=\vec x,\varphi,\mathrm{SC2})\mid[\![\vec X=\vec x]\!])$.

For full explanations, $\mathcal K(\vec X=\vec x,\varphi,\mathrm{SC2})=[\![\vec X=\vec x\wedge\varphi]\!]$, so the two measures agree, and the barometer gets power 0. In Example 7.1.4, let $\Pr((0,1,1))=p$ and $\Pr([\![ES_J=1]\!])=q$. Then $ES_J=1$ has power $(q-p)/q$, probability 1 given a June fire, and goodness $(1,1-p)$. By contrast, $AS=1\wedge ES_J=1$ has goodness $(1,1)$ and power 1 but possibly much lower probability. No principled resolution exists: "A modeler must just decide what is most important." Disjunctions gain probability, and their goodness is ill-defined (is $(.8,.9)$ or $(.9,.8)$ the maximum?). Their power is set to
$$\max_{i=1,\dots,k}\Pr(\mathcal K(\vec X_i=\vec x_i,\varphi,\mathrm{SC2})\mid[\![\vec X_1=\vec x_1\vee\dots\vee\vec X_k=\vec x_k]\!]),\qquad(7.1)$$
capturing the intuition that a disjunction explains less than its disjuncts. Trivial explanations, which typically have low power, are unwelcome for the same reason; refinement by normality is left unexplored.

### 7.3 The General Definition of Explanation
When the model is uncertain, $\mathcal K$ is a set of causal settings $(M,\vec u)$, and a *general explanation* is a pair $(\psi,\vec X=\vec x)$. Here $\psi$ is any causal-language formula (e.g., "prayers do not cause fires") that restricts the candidate models. $M\models\psi$ means $(M,\vec u)\models\psi$ for all $\vec u$, and $\mathcal M(\mathcal K)=\{M:(M,\vec u)\in\mathcal K\text{ for some }\vec u\}$.

**Definition 7.3.1.** $(\psi,\vec X=\vec x)$ is an *explanation of $\varphi$ relative to a set $\mathcal K$ of causal settings* if:
- **EX1.** (i) If $(M,\vec u)\in\mathcal K$, $(M,\vec u)\models\vec X=\vec x\wedge\varphi$ and $M\models\psi$, then for some conjunct $X=x$ and some (possibly empty) $\vec Y=\vec y$, $X=x\wedge\vec Y=\vec y$ is a cause of $\varphi$ in $(M,\vec u)$. (ii) $(M,\vec u')\models[\vec X\leftarrow\vec x]\varphi$ for all $(M,\vec u')\in\mathcal K$ with $M\models\psi$.
- **EX2.** No pair $(\psi',\vec X'=\vec x')$ satisfying EX1 has either (a) $\{M''\in\mathcal M(\mathcal K):M''\models\psi'\}\supset\{M''\in\mathcal M(\mathcal K):M''\models\psi\}$ (strictly) with $\vec X'\subseteq\vec X$, or (b) the two sets equal with $\vec X'\subset\vec X$. In both cases $\vec x'$ is the restriction of $\vec x$ to $\vec X'$.
- **EX3.** $\mathcal K_{\vec X=\vec x\wedge\varphi}\neq\emptyset$.

The explanation is nontrivial if also **EX4.** $(M,\vec u)\models\neg(\vec X=\vec x)$ for some $(M,\vec u)\in\mathcal K$, or $M\not\models\psi$ for some $M\in\mathcal M(\mathcal K)$.

$\psi$ selects the model structure, and $\vec X=\vec x$ names a cause within it. Def. 7.1.1 is the special case of a single model with $\psi=\mathit{true}$. **Paresis (Ex. 7.3.2, Scriven):** paresis arises only in long-term syphilitics, and only rarely among them. An agent who knows the model $M_P$ and sees paresis needs no explanation, because he infers syphilis and the "disposition" $U_2=1$. For an agent unsure of the model, $(\psi_P,S=1)$ explains paresis, where $\psi_P$ characterizes $M_P$.

**Key takeaways**
- An explanation is a sufficient cause relative to the agent's prior epistemic state.
- The notion is epistemic. Minimality drops known facts, nontriviality is optional, and disjunctions of possible explanations are admitted.
- An unnamed cause can leave a phenomenon inexplicable.
- Most explanations are partial. Goodness $(\alpha,\beta)$, posterior probability and explanatory power conflict, and the modeler must choose among them.
- Under model uncertainty, explanations may include fragments of a causal model.

**Chapter notes.** Hempel [1965] and Salmon [1970] framed modern debate without real causality. Salmon [1984] introduced the ontic/epistemic distinction, and Woodward [2003] used structural equations but lacked epistemic relativity, and hence goodness measures. The chapter revises Halpern and Pearl [2005b], chiefly by adding sufficiency (SC3). Epistemic relativity, model fragments and the Johansson and Victoria examples come from Gärdenfors [1980, 1988], who measured explanatory power as $\Pr([\![\varphi]\!]\mid[\![\vec X=\vec x]\!])-\Pr([\![\varphi]\!])$; Chajewska and Halpern [1997] preferred the ratio. AI's MAP approach maximizes $\Pr([\![\vec X=\vec x]\!]\mid[\![\varphi]\!])$ and so ignores explanatory power, and Pearl [2000] argues that causality is indispensable.

## Chapter 8 — Applying the Definitions
*Book pp. 203–214*

**In brief.** Halpern takes stock, then closes with three computer-science applications. Structural equations, counterfactuals and normality handle many examples, but the definitions have not stabilized: the modified HP definition, his third attempt, and Section 3.5's normality arose while he was writing the book. Agent-relative normality (cf. Example 6.3.4) is most needed, and experimental data resist a clean quantitative theory. No single "true" definition exists, and causality, blame, responsibility and intention are often confounded. Yet precise definitions matter, because legal disputes should turn on facts rather than meanings, and the variants' frequent agreement makes him optimistic.

### 8.1 Accountability
Security is shifting from prevention to accountability: determining after the fact who caused a problem. One typically assumes complete logs and adversaries' programs written in a fixed language. Program variables are then endogenous, programs and initial values form the context, code edits are interventions, and program semantics fixes the model, so the HP definitions "fit this application quite well". Missing logs call for a probability over the contexts consistent with the observed log. With several agents, blame matters, including whether to use the epistemic state an agent had or the one it should have had.

### 8.2 Causality in Databases
The aim is to find which tuples caused a query answer, such as a surprising one. An IMDB query for the genres of films by directors named Burton returns "Music and Musical", which traces to *Sweeney Todd* and to two other Burtons. In network diagnosis, asking why $\mathit{Connected}(x_0,y_0)$ is false returns the down links and inactive servers on $x_0$–$y_0$ paths.

Each tuple $t$ has a binary variable $X_t$ (1 iff $t\in D$), and the context fixes the database $D$, with no interesting equations. Query formulas $\varphi(t)\in\mathcal L^Q$, a language richer than $\mathcal L(\mathcal S)$, are added to the formulas $X_t=i$. For efficiency, a variant of the updated definition is used: tuple $t$ is a *cause of the answer $t'$ for $\varphi$* if
- **D1.** $(M,\vec u)\models(X_t=1)\wedge\varphi(t')$; and
- **D2.** some (possibly empty) set $T\subseteq D$ with $t\notin T$ has $D-T\models\varphi(t')$ and $D-(T\cup\{t\})\models\neg\varphi(t')$.

D1 is AC1, and D2 makes $(\vec X_T,\vec0,0)$ an AC2(b$^o$) witness, so $X_t=1$ is an original-HP cause (AC3 holds vacuously). AC2(b$^u$) fails if some $T'\subseteq T$ already yields $\neg\varphi(t')$. It holds for *monotone* queries, where $D\models\psi(t')$ and $D\subseteq D'$ imply $D'\models\psi(t')$, and for these $X_t=1$ is also part of a modified-HP cause. The degree of responsibility is $1/(k+1)$, where $k$ is the size of the smallest such $T$. Witnesses may only remove tuples ($\vec w=\vec0$), a restriction expressible as normality but motivated by computation. For *conjunctive* queries, which are monotone and common, causality is polynomial in the size of the database.

### 8.3 Program Verification
To explain model-checking counterexamples (possibly infinite paths), a program is treated as a *Kripke structure* whose nodes are program states (values of binary $X_1,\dots,X_n$) and whose edges are transitions (branching for concurrent programs). Temporal formulas such as $\Box\varphi$ ("always") are evaluated on paths $\pi=(s_0,s_1,\dots)$. An occurrence of $X$ has *positive (negative) polarity* if it lies under an even (odd) number of negations, ignoring temporal operators. $(s,X)$ is *potentially helpful* for $\varphi$ if $X$ occurs positively and $X=0$ in $s$, or negatively and $X=1$. $\pi[(s_1,X_1),\dots,(s_k,X_k)]$ flips each $X_i$ at $s_i$. Flipping a pair that is not potentially helpful cannot make a false $\varphi$ true. A finite prefix is a counterexample if $\neg\varphi$ holds on all its extensions. The *minimal* counterexample is the shortest such prefix, or $\pi$ itself if none exists, as for $\neg\Box(X=0)$.

**Definition 8.3.1 (Beer, Ben-David, Chockler, Orni, Trefler).** If $\pi$ is a counterexample to $\varphi$, then $(s,X)$ is a *cause of the first failure of $\varphi$ on $\pi$* if
- **Co1.** some prefix $\rho$ of $\pi$ (possibly $\pi$) is a minimal counterexample to $\varphi$ and $s$ is on $\rho$; and
- **Co2.** there are distinct pairs $(s_1,X_1),\dots,(s_k,X_k)$ potentially helpful for $\varphi$ with $(M,\rho[(s_1,X_1),\dots,(s_k,X_k)])\models\neg\varphi$ and $(M,\rho[(s,X),(s_1,X_1),\dots,(s_k,X_k)])\models\varphi$.

Co2 mirrors AC2(a) plus AC2(b$^o$). **Co3** (for AC2(b$^u$)) requires $\neg\varphi$ on $\rho$ when any subset ($\subseteq$) of the contingency pairs is flipped. **Co4** (for AC2(a$^m$)) requires $\neg\varphi$ when $(s,X)$ and any strict subset ($\subset$) of them are flipped. Under Co2–Co4, the values of $X,X_1,\dots,X_k$ form a modified-HP cause. Co1, absent from HP (which has no time), reflects programmers' interest in the first failure and shrinks the set of causes. **Example 8.3.2:** if $X=1$ on $\pi$ except at $s_2$, then $(s_2,X)$ causes the first failure of $\Box X$. For $\neg\Box X$ on a path with $X=1$ throughout, no finite prefix is a counterexample, and the value of $X$ at every state is a cause.

Programmers reportedly found the resulting tool helpful. Computing causes is NP-complete in general, but the tool's algorithm, polynomial in the lengths of $\rho$ and $\varphi$, returns a superset of the causes that is often exact. When a specification *holds*, uniformly low responsibility of $(s,X)$ across variables (or across states) flags state $s$ (or variable $X$) as redundant. That hints at a flawed specification. Since computing responsibility is hard in general, tractable, practically relevant cases must be found.

### 8.4 Last Words
- **Modeling is easier.** The language and model follow from the problem, so Chapter 4's subtleties largely vanish, and adding variables to turn updated-HP causes into original-HP ones (Section 4.3) seems less appropriate. Normality is clear in accountability (the prescribed program) and in model checking (the specification). In databases normality plays a smaller role: the witness restriction makes adding tuples abnormal, and some deletions may be less normal than others.
- **Computation matters.** With thousands or millions of variables, complexity is a central obstacle, not merely a worry about cognitive plausibility (Chapter 5). Programs encode equations compactly, and tractable special cases matter.
- **Utility over counterexamples.** Answers match intuition on all the examples in the literature. Philosophy has "focused on (arguably, obsessed over)" counterexamples, but these applications judge by utility: occasional unintuitive answers are tolerable, and further queries can clarify. Legal uses need care, yet a transparent definition with predictable, mostly intuitive answers beats today's poorly defined notions and inconsistent rulings.

Halpern's verdict: although the HP definition needed tweaks here (for richer languages and lower complexity), he is "confident that the HP definition, augmented by a normality ordering if necessary, provides a powerful basis for a useful account of causality". More work is needed, and he expects applications to raise research questions quite different from the traditional ones.

**Key takeaways**
- There is no single true definition, and agent-relative normality is the main open problem; precise definitions remain essential.
- Database causality allows only deletions. It yields original-HP causes in general and modified-HP causes for monotone queries, and it is polynomial for conjunctive ones.
- Co1–Co4 carry AC2 over to model checking, and responsibility flags suspect specifications.
- In applications, utility and tractability, not the absence of counterexamples, are the yardsticks.

**Chapter notes.** Lombrozo [2010] documents the many factors behind causal ascriptions. Feigenbaum, Jaggard and Wright [2011] proposed the HP definition for accountability, while Datta et al. [2015] use sufficient rather than actual causality. The database results come from Meliou, Gatterbauer, Halpern et al. [2010], with the complexity results from Meliou, Gatterbauer, Moore and Suciu [2010]. Beer et al. [2012] built the tool for IBM's RuleBase, whose users complained when it was disabled [Chockler 2015]. Chockler, Halpern and Kupferman [2008] gave tractable specification checks, Chockler, Grumberg and Yadgar [2008] used responsibility to guide refinement, and Groce [2005] explained errors counterfactually without HP.


---

## Appendix: Slips in the printed text

Checking formulas against the PDF turned up the following errors or internal inconsistencies. Where the intended reading was evident, the summary uses it. Where it was not, the summary states only the part that is not in conflict.

- **Ch. 2.** In Example 2.3.6, the printed equation $A=(F\wedge\neg LB)\vee(\neg F\wedge\neg RB)$ gives $A=0$ when $F=LB=1$. That contradicts the text's argument, so the summary leaves the equation out. Example 2.3.7 says "$S=1$" where it means $P=1$, and Example 2.5.1 says "$BMC=0$" where it means recovery. Section 2.8 says the modified definition is less complex than "the original and modified"; it should read "updated". The proof of Proposition 2.9.2 defines the values $y_j$ under $\vec X\leftarrow\vec x$ on p. 68 but under $\vec X\leftarrow\vec x'$ on p. 69. In Section 2.7, the nonrecursive AC2 writes $\vec w'$ in clause (a) and $\vec w$ in clause (b$^u$).
- **Ch. 3–4.** As printed, Theorem 4.4.2 concludes "cause in $(M,\vec u)$"; the proof establishes $(M',\vec u)$. Definition 4.4.7 places $\vec u'$ on the wrong side. In Example 4.1.1, $E'=\neg B\wedge A\wedge S$ clashes with the $\neg S$ in the equation for $C$. Example 4.8.2 calls the added variable $D'$ "exogenous", although it behaves as an endogenous one.
- **Ch. 5.** In Example 5.2.2 (pp. 148–150), the verbal ranking (arson more atypical than lightning) and the summary inequality $\mathrm{Pl}(MD=0)>\mathrm{Pl}(L=0)>\mathrm{Pl}(L=1)>\mathrm{Pl}(MD=1)$ conflict with the formal inequalities $d_L^+>d_M^+$ and $d_M^->d_L^-$. In Example 5.2.1, $(0,1,1)$ is said to be both more normal than and incomparable with $(0,0,1)$. The proof in Section 5.5.2 ends with $X_0=1\wedge X_1=1$ where the setup requires $X_0=0\wedge X_1=0$. The informal gloss on $D_1^P$ describes NP$\cap$co-NP rather than $D_1^P$.
- **Ch. 6.** In Example 6.2.6, the rule that an abstainer has responsibility 0 when $a-b$ is even and $c=1$ contradicts the book's own 7–5 example, which gives that abstainer 1/2. The 7–5 example is the one consistent with the definition.
- **Ch. 7–8.** In Example 7.2.2 (p. 195), the stated $U$-values for $\vec u_{00}$ and $\vec u_{10}$ conflict with the example's own equations, and the later claim that "$I=0$" becomes an explanation looks inconsistent. A parenthesis is also misplaced in the formula for $\alpha$. On p. 199, the prayer formula $(F=0)\Rightarrow[P\leftarrow1](F=1)$ contradicts its gloss "praying won't result in a fire". On p. 206, "$X_t=0$" should be $X_t=1$. In Definition 8.3.1, the indices of Co3 and Co4 are inconsistent, so the summary states those clauses in words.
