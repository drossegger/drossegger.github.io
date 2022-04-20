---
title: Turing degrees that compute HYP but can not compute Kleene's _O_.
---
{% include mathjax.html %}
Let $$HYP$$ be the set of hyperarithmetic degrees, i.e. $$HYP=\{ \mathbf d:\exists (\alpha<\omega_1^{\mathrm{CK}}) \mathbf d< \mathbf 0^{(\alpha)}\}.$$
Jockusch and Simpson [1] showed that there is a degree $$\mathbf d$$ that is minimal over $$HYP$$ (i.e., if $$\mathbf c<\mathbf d$$, then $$\mathbf c\in HYP$$) and such that $$\mathbf d^{(3)}=deg(\mathcal O)$$ where $$\mathcal O$$ is the Kleene's $$\mathcal O$$, or, equivalently, the set of indices of computable well-orderings.

I recently thought about the Turing degree structure of the degrees that compute every hyperarithmetic sets and could not find much besides the results of Jockusch and Simpson. However, after talking to the computability theorists at Berkeley, it seems that more is known. Here is an attempt to summarize a few things. I apologize for skipping a lot of the details but hope that anyone can figure those out with the references provided.

__Theorem 1.__ Let $$\mathbf d> HYP$$. Then $$\mathbf d$$ computes a copy of $$\omega_1^{\mathrm{CK}}$$ if and only if $$\mathbf d^{(3)}>deg(\mathcal O)$$.

_Proof sketch._ Assume that $$\mathbf d^{(3)}>deg(\mathcal O)$$. Then $$\mathbf d^{(3)}$$ can compute a copy of $$\omega_1^{\mathrm{CK}}$$. One can show that $$\mathbf d$$ then computes a copy of $$\omega^2\cdot \omega_1^{\mathrm{CK}}\cong \omega_1^{\mathrm{CK}}$$ (see Ash and Knight [Theorem 9.11, 2]). For the other direction assume that $$\mathbf d$$ computes a copy of $$\omega_1^{\mathrm{CK}}$$. We will show that $$d^{(3)}$$ can compute the set of indices of computable well-orderings. One can show that if $$L$$ is a well-order and $$o(L)\leq \omega^{\alpha}$$, then $$L$$ is uniformly $$\Delta^0_{2\alpha}$$ categorical, i.e., for $$L$$ computable, $$\mathbf 0^{(2\alpha)}$$ ($$\mathbf 0^{(2\alpha-1)}$$ if $$\alpha$$ is finite) can compute an isomorphism between any two computable copies of $$L$$, and this is uniform. Let $$C$$ be $$\mathbf d$$'s copy of $$\omega_1^{\mathrm{CK}}$$. All computable well-orders have order-type less than $$C$$, so the set of indices of computable well-orders is $$O=\{e:\exists a \phi_e \cong C_{<a}\}$$ where $$C_{<a}$$ is the initial segment of $$C$$ up to the element $$a$$. Then $$O$$ can be defined by

$$e\in O\Leftrightarrow \exists i\exists (a\in C) \Phi_i^{H^{[a]}}: \phi_e \cong C_{< a}$$

where $$H$$ denotes a jump hierarchy on $$C$$. Note that it mus not be the case that $$\mathbf d$$ computes a jump hierarchy, after all it only computes all hyperarithmetic sets, but it does not necessarily do this uniformly. However, creating a jump hierarchy in this case is $$\Sigma^0_3$$ (see Montalbán [3] for more on jump hierarchies). Checking whether $$\Phi^{H^{[a]}}_i$$ is an isomorphism is $$\Pi^0_2$$. So $$\mathbf d^{(3)}\geq deg(O)=deg(\mathcal O)$$.


We have seen, that if we restrict our degrees to degrees that compute $$HYP$$ and a copy of $$\omega_1^{\mathrm{CK}}$$ then we can not be far below Kleene's O. What if we can not compute $$\omega_1^{\mathrm{CK}}$$? It turns out we can be quite far away in that case.

__Theorem 2.__ There is a degree $$\mathbf d>HYP$$ that is hyperarithmetically low, i.e., $$\omega_1^{\mathbf d}=\omega_1^{\mathrm{CK}}$$.

_Proof sketch._ Consider the set 

$$X=\{ (e,H) : \phi_e \text{ is a linear order}, H \text{ is a jump hierarchy on }\phi_e, \phi_e\text{ does not have hyperarithmetic descending sequences}\}$$

This set is $$\Sigma^1_1$$ so by the Gandy basis theorem it must contain a set $$Y=(e_0,H_0)$$ such that $$\omega_1^{Y}=\omega_1^{\mathrm{CK}}$$. Thus there is no $$\alpha$$ such that $$Y^{(\alpha)}\equiv_T \mathcal O$$. See Montalbán [3] for more on Gandy's basis theorem and jump hierarchies in this context.

Thanks to Antonio Montalbán and Ted Slaman for showing me this.

[1] Jockusch Jr, Carl G., and Stephen G. Simpson. 1976. “A Degree-Theoretic Definition of the Ramified Analytical Hierarchy.” Annals of Mathematical Logic 10 (1): 1–32.

[2] Ash, Christopher J., and Julia F. Knight. 1990. “Pairs of Recursive Structures.” Annals of Pure and Applied Logic 46 (3): 211–34.

[3] Montalbán, Antonio. 2021. Computable Structure Theory: Beyond the Arithmetic. draft. https://math.berkeley.edu/~antonio/CSTpart2_DRAFT.pdf.

