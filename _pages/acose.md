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
<li><em>{{ talk.title }}</em> {% if talk.slides or talk.recording %} [ {% if talk.slides %} <a href='{{ talk.slides }}'>Slides</a>{% endif %}{%if talk.recording %} | <a href='{{ talk.recording }}'>Video</a> {% endif %} ] {% endif %}<br/>
    <span id='lines' style='margin-left:0em'>{% if talk.author %} {{ talk.author }}{% else %} Dino Rossegger{% endif %}, <span id='pubtitle'>{{ talk.location }}</span>, {{ talk.date }}</span>
    </li>
{% endfor %}
</ol>

### Publications
<div id="pubs">Loading... </div>

<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  var myObj = JSON.parse(this.responseText);
  var biblio=document.getElementById('pubs');
  while (biblio.firstChild) biblio.removeChild(biblio.firstChild);
  biblio.appendChild(createbib(myObj,false));
}
};
xmlhttp.open("GET", "https://api.zotero.org/groups/1553639/collections/3T8QH7NR/items?format=json&sort=date", true);
xmlhttp.send();

</script>

