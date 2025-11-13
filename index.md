---
title:  Dino Rossegger 
author: Dino Rossegger
permalink: /
header:
  overlay_image: /assets/images/about_overlay.jpg
  overlay_filter: 0.3 
      
excerpt: 'Logician at TU Wien
          <br/><span style="font-size:14px"><a href="https://orcid.org/0000-0003-3494-9049" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-orcid" aria-hidden="true"></i><span class="label">ORCID</span></a>
<a href="https://twitter.com/dino_r" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-twitter-square" aria-hidden="true"></i><span class="label">Twitter</span></a>
<a href="https://github.com/drossegger" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-github" aria-hidden="true"></i><span class="label">GitHub</span></a>
<a href="mailto:dino.rossegger@tuwien.ac.at"> <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i><span class="label">Email</span></a></span>' 


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

### News

- Nov. 2025: I am currently offering one postdoc position ([advert](/assets/files/postdoc.pdf)) and one PhD position ([advert](/assets/files/phd.pdf)).

### About Me
<img src='/assets/images/dino2.jpg' style="float:left; margin-right:10px; width:200px; margin-bottom:20px;"/>I am a mathematician working at the [Institute of Discrete Mathematics](https://dmg.tuwien.ac.at) at Technische Universität Wien. Currently I am PI of the international project ["Structural Complexity Measures for Foundational Theories"](https://www.fwf.ac.at/forschungsradar/10.55776/PIN1878224) funded by the Austrian science fund. This project is joint with [Mateusz Łełyk](https://sites.google.com/uw.edu.pl/lelyk) from the University of Warsaw.

I am interested in computability theory and its interactions with other areas of logic such as descriptive set theory and model theory. Please see [publications](/publications/) for more on my research. Under [teaching](/teaching/) you can find syllabi of courses I have taught and course notes. In August 2024 I completed my Marie Skłodowska Curie fellowship ACOSE, see its [project page](/acose/).
<!--- <br/><span style="font-size:14px"><a href="https://orcid.org/0000-0003-3494-9049" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-orcid" aria-hidden="true"></i><span class="label">ORCID</span></a>
<a href="https://twitter.com/dino_r" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-twitter-square" aria-hidden="true"></i><span class="label">Twitter</span></a>
<a href="https://github.com/drossegger" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-github" aria-hidden="true"></i><span class="label">GitHub</span></a>
<a href="mailto:dino@math.berkeley.edu"> <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i><span class="label">Email</span></a></span> --->

<hr style="clear:left;"/>

### Events & Seminars I am involved in

- Our [local research seminar](https://www.dmg.tuwien.ac.at/fb2/seminar/), Wednesdays 10am during the semester.

------

### Recent Blogposts
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


