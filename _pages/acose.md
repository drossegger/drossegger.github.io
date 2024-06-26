---
title: Algorithmic complexity of structural equivalence relations
permalink: /acose/
header:
  overlay_image: '/assets/images/acose_overlay.jpg'
  overlay_filter: 0.3
--- 
This is the project page of the project ACOSE - <b>A</b>lgorithmic <b>co</b>mplexity of <b>s</b>tructural <b>e</b>quivalence relations funded by a Marie Skłodowska Curie Global Fellowship under Horizon 2020 of the European Commission.

The goal of this project is to investigate the relationship between notions of complexity in computable structure theory and notions of complexity in descriptive set theory. The project consist of a two year outgoing phase at the University of California, Berkeley and a one year return phase at Technische Universität Wien. 

### Participants
* Principal Investigator: Dino Rossegger
* Supervision Outgoing phase: Antonio Montalbán
* Supervision Return phase: Ekaterina Fokina

### Talks

<ol>
{% for talk in site.data.talks %}
<li><span style="font-variant:small-caps">{{ talk.title }}</span> {% if talk.slides or talk.recording %} [ {% if talk.slides %} <a href='{{ talk.slides }}'>Slides</a>{% endif %}{%if talk.recording %} | <a href='{{ talk.recording }}'>Video</a> {% endif %} ] {% endif %}<br/>
    <span id='lines' style='margin-left:0em'>{{ talk.location }}, {{ talk.date }}</span>
    </li>
{% endfor %}
</ol>

### Publications

{% include bibliography.html source=site.data.acose %}
