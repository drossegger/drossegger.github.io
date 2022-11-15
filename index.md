---
title:  Dino Rossegger 
author: Dino Rossegger
permalink: /
header:
  overlay_image: /assets/images/about_overlay.jpg
  overlay_filter: 0.3 
      
excerpt: 'Logician. Marie Skłodowska Curie Fellow at UC Berkeley and TU Wien
          <br/><span style="font-size:14px"><a href="https://orcid.org/0000-0003-3494-9049" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-orcid" aria-hidden="true"></i><span class="label">ORCID</span></a>
<a href="https://twitter.com/dino_r" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-twitter-square" aria-hidden="true"></i><span class="label">Twitter</span></a>
<a href="https://github.com/drossegger" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-github" aria-hidden="true"></i><span class="label">GitHub</span></a>
<a href="mailto:dino@math.berkeley.edu"> <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i><span class="label">Email</span></a></span>' 


layout: splash

feature_row:
  - image_path: /assets/images/publications_splash.jpg
    title: "Publications"
    excerpt: "List of my publications with access options"
    url: "/publications/"
    btn_label: "to Publications"
    btn_class: "btn--primary"
  - image_path: /assets/images/teaching_splash.jpg
    title: Teaching
    excerpt: "Syllabi and course notes"
    url: "/teaching/"
    btn_label: "to Teaching"
    btn_class: "btn--primary"
  - image_path: /assets/images/acose_splash.jpg
    title: Project - ACOSE 
    excerpt: "Infos & News about my Marie Skłodowska Curie funded project ACOSE"
    url: "/acose/"
    btn_label: "to ACOSE"
    btn_class: "btn--primary"
---
<!--{% include feature_row id='intro' type='center' %}-->
{% include feature_row %}

<!-- {% include feature_row id='about-me' type='left' %}-->
### About Me

<img src='/assets/images/dino2.jpg' style="float:left; margin-right:10px; width:200px"/>I am a Marie Curie fellow at the [Department of Mathematics](https://math.berkeley.edu/) at UC Berkeley. Through my Marie Curie project ACOSE I am also affiliated with the [Institute of Discrete Mathematics](https://dmg.tuwien.ac.at) at Technische Universität Wien. Before I was a postdoctoral fellow with the logic group of the [Department of Pure Mathematics](https://uwaterloo.ca/pure-mathematics/) of the University of Waterloo. I obtained my Ph.D. in 2019 from the Vienna University of Technology under the supervision of [Ekaterina Fokina](https://www.dmg.tuwien.ac.at/fokina/).

My research is in computability theory, an area in mathematical logic. The main ambition for my research is to get a better understanding of the computational and descriptive complexity of mathematical objects and their associated classification problems. For more information about my research please take a look at my [publications](/publications/).


<!--- <br/><span style="font-size:14px"><a href="https://orcid.org/0000-0003-3494-9049" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-orcid" aria-hidden="true"></i><span class="label">ORCID</span></a>
<a href="https://twitter.com/dino_r" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-twitter-square" aria-hidden="true"></i><span class="label">Twitter</span></a>
<a href="https://github.com/drossegger" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-github" aria-hidden="true"></i><span class="label">GitHub</span></a>
<a href="mailto:dino@math.berkeley.edu"> <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i><span class="label">Email</span></a></span> --->

______
### News & Recent Blogposts
{% assign entries_layout = page.entries_layout | default: 'list' %}
<div class="entries-{{ entries_layout }}">
  {% for post in site.posts limit:3 %}
    {% include recent-posts.html type=entries_layout %}
  {% endfor %}
</div>
______

### Other notes
Non peer-reviewed notes on topics I am interested in.

<ol>
{% for note in site.data.notes %}
<li><a href='{{ note.file }}'>{{ note.title }}</a></li>
{% endfor %}
</ol>


