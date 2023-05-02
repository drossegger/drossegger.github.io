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

<ol>
{% for pub in site.data.acose %}
<li><span style="font-variant:small-caps">{{ pub.data.title }}</span>
    {% if pub.data.DOI or pub.data.libraryCatalog=="arXiv.org" %} 
        [ {% if pub.data.DOI %} <a href="https://doi.org/{{ pub.data.DOI }}" >DOI</a> {% endif %}
        {% if pub.data.libraryCatalog=="arXiv.org" %} | <a href="{{ pub.data.url }}">arXiv</a>
        {% elsif pub.data.extra contains "arxiv:" %} | <a href='{{ pub.data.extra | replace: "arxiv:", "" }}'>arXiv</a>
        {% endif %} ]
        
    {% endif %}<br/>
    {% if pub.data.creators.size > 0 %} <span id='lines' style='margin-left:0em'>
        with {% for creator in pub.data.creators %} 
            {{ creator.firstName }} {{ creator.lastName }}{% unless forloop.last %}, {% endunless -%}{% if forloop.rindex0==1 %} and {% endif %}
            {% endfor %}</span> <br/>
    {% endif %} 
    {% if pub.data.itemType=="journalArticle" %}
    <span id='lines' style='margin-left:0em'> <b> {{ pub.data.publicationTitle }}</b> 
    {% if pub.data.volume!='' %} vol. {{ pub.data.volume!='' }} 
        {% if pub.data.issue!='' %} ({{pub.data.issue}}) 
         {% if pub.data.pages!='' %}, {{ pub.data.pages }} 
         {% endif %} 
        {% endif %} 
    {% endif %} 
    {% endif %}
    {% if pub.data.itemType=="conferencePaper" %}
        <span id='lines' style='margin-left:0em'> <b> {{ pub.data.proceedingsTitle }}</b>, {% if pub.data.pages %} {{ pub.data.pages }} {% endif %} {% endif %} ({{ pub.data.date | slice: 0, 4 }})
    </span>
    </li>
{% endfor %}
</ol>

