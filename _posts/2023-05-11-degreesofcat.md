---
title: The degrees of categoricity above 0''
---

Consider the ordering $$\omega$$ of the natural numbers $$0\leq 1\leq 2\leq 3\leq\dots$$.
We can build an isomorphic order $$\mathcal B$$ (for bad) as follows: We order all the even numbers in ascending order and enumerate the Halting set. If $$n$$ enters the Halting set at some stage $$s$$, then we put an odd number greater than $$s$$ into $$\mathcal B$$ between $$2n$$ and $$2n+2$$. You can convince yourself, that the order $$\mathcal B$$ is computable and that every isomorphism between $$\mathcal B$$ and $$\mathcal N$$ will compute the Halting set. Why is that? 

Well, in order to compute isomorphisms between copies of $$\omega$$ we need to know the successor relation. For $$\omega$$ this relation is computable while for $$\mathcal B$$, it computes the Halting set. It turns out that $$\mathbf 0'$$, the Turing degree of the Halting set, is the least degree computing isomorphims between any two computable copies of $$\omega$$. We say that $$\omega$$ has degree of categoricity $$\mathbf 0'$$. Degrees of categoricity are a robust measure of the algorithmic complexity of a computable structure: Up to $$\mathbf 0'$$ all the copies of $$\omega$$ look the same and it can compute isomorphisms between them.

For over ten years degrees of categoricity have been heavily studied by computability theorists. The main questions are: 
1. Which Turing degrees are degrees of categoricity of computable structures? 
2. Say d is a degree of categoricity, can we always build two isomorphic computable structures A and B with degree of categoricity d and such that d is the least degree computing isomorphism between A and B? Such degrees are called strong.

In a joint project with Barbara Csima we classified the strong degrees of categoricity above $$\mathbf{0}''$$ as the treeable degrees---the degrees of Turing least paths through computable trees in Baire space. This allowed us to give many new examples of degrees of categoricity and provides a new opening to attack the question whether every degree of categoricity is strong. A preprint of this paper can be found on [arXiv](https://arxiv.org/abs/2209.04524).

---------

In an old version of this post and an earlier preprint we claimed that every degree of categoricity above $$\mathbf 0 ''$$ is strong. Unfortunately, we made a mistake there and do not have a proof of this. A 
