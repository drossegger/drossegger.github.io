---
title: Publications
permalink: /publications/
header:
  overlay_image: /assets/images/publications_overlay.jpg
classes: wide
--- 
<ol>
{% for pub in site.data.bibliography %}
<li><em>{{ pub.data.title }}</em> 
    {% if pub.data.DOI or pub.data.libraryCatalog=="arXiv.org" %} 
        [ {% if pub.data.DOI %} <a href="https://doi.org/{{ pub.data.DOI }}" >DOI</a> {% endif %}
        {% if pub.data.libraryCatalog=="arXiv.org" %} | <a href='{{ pub.data.url }}'>arXiv</a> {% endif %} ]
    {% endif %}<br/>
    {% if pub.data.creators.size > 0 %} <span id='lines' style='margin-left:0em'>
        with {% for creator in pub.data.creators %} 
            {{ creator.firstName }} {{ creator.lastName }}{% unless forloop.last %}, {% endunless -%} 
            {% endfor %}</span> <br/>
    {% endif %} 
    {% if pub.data.itemType='journalArticle" %}
    <span id='lines' style='margin-left:0em'> <b> {{ pub.data.publicationTitle }}</b> 
    {% if pub.data.volume!='' %} vol. {{ pub.data.volume!='' }} 
        {% if pub.data.issue!='' %} ({{pub.data.issue}}) 
         {% if pub.data.pages!='' %}, {{ pub.data.pages }} 
         {% endif %} 
        {% endif %} 
    {% endif %} 
    {% endif %}
    {% if pub.data.itemType="conferencePaper" %}
        <span id='lines' style='margin-left:0em'> <b> {{ pub.data.proceedingsTitle }}</b>, {% if pub.data.pages %} {{ pub.data.pages }} {% endif %} {% endif %} ({{ pub.data.date }})
    </span>
    </li>
{% endfor %}
</ol>
