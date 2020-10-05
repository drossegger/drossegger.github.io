---
title: New preprint on arXiv!
categories: 
  - news
---
{% include _includes/mathjax.html %}
My newest preprint [Degree spectra of analytic complete equivalence relations](https://arxiv.org/abs/2010.00755) just appeared on arXiv.

This article investigates the bi-embeddability and elementary bi-embeddability relation on countable structures both from the viewpoint of descriptive set theory and computable structure theory. Two structures are _bi-embeddable_ if either is isomorphic to an substructure of the other. They are _elementary bi-embeddable_ if either is isomorphic to a elementary substructure of the other.

Our main results are the following.

__Theorem 1.__ The elementary bi-embeddability relation on graphs is a $\pmb \Sigma^1_1$ complete equivalence relation under Borel reducibility.

The proof of this result uses Marker extensions with so called minimal models. A structure $\mathcal A$ is _minimal_ if it does not contain an elementary substructure.

Let $\sim$ be an equivalence relation on a class of structures. Then given
a structure $\mathcal A$ we define the $\sim$ spectrum of $\mathcal A$ as the
set of all sets Turing equivalent to a structure $\sim$ equivalent to $\mathcal A$, i.e., 
$$ DgSp_\sim(\mathcal A)=\{ X\subseteq \omega: \exists \mathcal B \sim \mathcal A \ X\equiv_T \mathcal A\}.$$

__Theorem 2.__ Every bi-embeddability spectrum of a graph is the jump spectrum of an elementary bi-embeddability spectrum of a graph, i.e., for every $\mathcal G$, there is a graph $\mathcal G'$ such that
$$ DgSp_\approx(\mathcal G')=\{ X: X'\in DgSp_\approxeq(\mathcal G)\}.$$

This result is proven by analyzing the reduction given to prove Theorem 1. We show that this reduction induces a computable bi-transformation with a suitable class of structures.
