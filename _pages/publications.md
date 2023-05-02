---
title: Publications
permalink: /publications/
header:
  overlay_image: /assets/images/publications_overlay.jpg
classes: wide
--- 
<ol>
{% for pub in site.data.bibliography %}
<li><em>{{ pub.data.title }}</em> {% if pub.data.DOI or pub.data.libraryCatalog=="arXiv.org" %} [ {% if pub.data.DOI %} <a href="https://doi.org/{{ pub.data.DOI }}">DOI</a>{% endif %}{%if pub.data.libraryCatalog=="arXiv.org" %} | <a href='{{ pub.data.url }}'>arXiv</a> {% endif %} ] {% endif %}<br/>
    <span id='lines' style='margin-left:0em'>with {% for creator in pub.data.creators %} {% if creator.firstName=="Dino" %} {% else %} {{ creator.firstName }} {{ creator.lastName }} {% endif %},{% endfor %}</span>
    <span id='lines' style='margin-left:0em"> <b> {{ pub.data.publicationTitle }}</b> {% if pub.data.volume %} vol. {{ pub.data.volume }} {% if pub.data.issue %} ({{pub.data.issue}}) {% if pub.data.pages %}, {{ pub.data.pages }} {% endif %} {% endif %} {% endif %} {{ pub.data.date }}
    </li>
{% endfor %}
<ol>
