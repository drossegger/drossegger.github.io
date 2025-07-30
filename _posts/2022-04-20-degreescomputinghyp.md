---
title: Turing degrees that compute HYP but can not compute Kleene's _O_.
---

_Update 30.07.2025:_ There was a mistake in the main theorem claiming that for a degree $$\mathbf d >HYP$$, $$\mathbf d$$ computes a copy of $$\omega_1^{\mathrm{CK}}$$ if and only if $$\mathbf d^{(3)}\geq deg(\mathcal O)$$. This is not true, I will give a counterexample once I find the time. Thanks to Dan Turetsky for pointing this out.


Let $$HYP$$ be the set of hyperarithmetic degrees, i.e. $$HYP=\{ \mathbf d:\exists (\alpha<\omega_1^{\mathrm{CK}}) \mathbf d< \mathbf 0^{(\alpha)}\}.$$
Jockusch and Simpson [1] showed that there is a degree $$\mathbf d$$ that is minimal over $$HYP$$ (i.e., if $$\mathbf c<\mathbf d$$, then $$\mathbf c\in HYP$$) and such that $$\mathbf d^{(3)}=deg(\mathcal O)$$ where $$\mathcal O$$ is Kleene's $$\mathcal O$$, or, up to m-equivalence, the set of indices of computable well-orderings.

I recently thought about the Turing degree structure of the degrees that compute every hyperarithmetic sets and could not find much besides the results of Jockusch and Simpson. However, after talking to a few people, I realized that quite a bit is known. Here is an attempt to summarize a few things. I apologize for skipping a lot of the details but hope that anyone can figure those out with the references provided.

_This is the updated way weaker version of the theorem._

__Theorem 1.__  If $$\mathbf d^{(3)}\geq deg(\mathcal O)$$ then $$\mathbf d$$ computes a copy of $$\omega_1^{\mathrm{CK}}$$.

_Proof sketch._ Assume that $$\mathbf d^{(3)}\geq deg(\mathcal O)$$. Then $$\mathbf d^{(3)}$$ can compute a copy of $$\omega_1^{\mathrm{CK}}$$. One can show that $$\mathbf d$$ then computes a copy of $$\omega^2\cdot \omega_1^{\mathrm{CK}}\cong \omega_1^{\mathrm{CK}}$$ (see Ash and Knight [Theorem 9.11, 2]). 

We have seen that degrees that compute $$HYP$$ and a copy of $$\omega_1^{\mathrm{CK}}$$ cannot be far below Kleene's O. What if we can not compute $$\omega_1^{\mathrm{CK}}$$? It turns out we can be quite far away in that case.

__Theorem 2.__ There is a degree $$\mathbf d>HYP$$ that is hyperarithmetically low, i.e., $$\omega_1^{\mathbf d}=\omega_1^{\mathrm{CK}}$$.

_Proof sketch._ Consider the set 

$$X=\left\{ (e,H) : \begin{aligned}\varphi_e \text{ is a linear order,}\\  H \text{ is a jump hierarchy on }\varphi_e,\\ \text{ and } \varphi_e\text{ does not have hyperarithmetic descending sequences}\end{aligned}\right\}$$

This set is $$\Sigma^1_1$$ so by the Gandy basis theorem it must contain a set $$Y=(e_0,H_0)$$ such that $$\omega_1^{Y}=\omega_1^{\mathrm{CK}}$$. Thus, there is no $$\alpha$$ such that $$Y^{(\alpha)}\equiv_T \mathcal O$$. See Montalbán [3] for more on Gandy's basis theorem and jump hierarchies in this context.

Thanks to Antonio Montalbán and Ted Slaman for showing me this.

[1] Jockusch Jr, Carl G., and Stephen G. Simpson. 1976. “A Degree-Theoretic Definition of the Ramified Analytical Hierarchy.” Annals of Mathematical Logic 10 (1): 1–32.

[2] Ash, Christopher J., and Julia F. Knight. 1990. “Pairs of Recursive Structures.” Annals of Pure and Applied Logic 46 (3): 211–34.

[3] Montalbán, Antonio. 2021. Computable Structure Theory: Beyond the Arithmetic. draft. https://math.berkeley.edu/~antonio/CSTpart2_DRAFT.pdf.

