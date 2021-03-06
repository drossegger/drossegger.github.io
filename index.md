---
title: About me
permalink: /
header:
  image: /assets/images/about.jpg
classes: wide
---
I am a postdoctoral fellow with the logic group of the [Department of Pure Mathematics](https://uwaterloo.ca/pure-mathematics/) of the University of Waterloo. I obtained my Ph.D. in 2019 from the Vienna University of Technology under the supervision of [Ekaterina Fokina](https://www.dmg.tuwien.ac.at/fokina/).

My research is in mathematical logic, and there mostly in computablity theory. For more information about my research [scroll down](#about-my-research) or take a look at my [publications](/publications/).

______
### News & Recent Blogposts
{% assign entries_layout = page.entries_layout | default: 'list' %}
<div class="entries-{{ entries_layout }}">
  {% for post in site.posts limit:3 %}
    {% include recent-posts.html type=entries_layout %}
  {% endfor %}
</div>
______

### About my Research

My research area is computability theory. I am specifically interested in the computational and descriptive complexity of mathematical objects. In my research I typically aim to answer questions of the following kind:

- Given a mathematical structure (for example a field), how complicated is it to compute an isomorphism between any two isomorphic copies of it?
- Given a mathematical structure for which we can not necessarily compute its basic operations, in which Turing degrees can we find isomorphic copies of it?
- Given a structure, how complicated is its Scott sentence (A sentence in infinitary logic whose models are isomorphic to the given structure)?
- Given a structure with interesting computational properties, can we find a structure with such properties in natural classes of structures?

In my Ph.D. thesis I focused on question 1,2, and 4 if we consider computational properties not up to isomorphism but up to other equivalence relations such as elementary equivalence and bi-embeddability. Because of this I developed an interest in the complexity of equivalence relations both from a descriptive as well as from a computational point of view.

### About my Teaching
If you want to know about my teaching experience or access course notes please look at [Teaching & Notes](/teaching/).
