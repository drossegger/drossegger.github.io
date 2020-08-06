---
title: Publications
permalink: /publications/
header:
  image: /images/publications.jpg
--- 
<style type="text/css">
body {
  counter-reset: section;      
}
p.bibitem:before {
  counter-increment: section;        
  content: "<b>" counter(section) ". </b>"; 
}
</style>
<div id="biblio"></div>
<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = JSON.parse(this.responseText);
for (i = 0; i < myObj.length; i++) {
var item = document.createElement("p");
item.className="bibitem"
var title = document.createElement("font");
title.style.fontStyle = 'italic';
//title.style.fontWeight = 'bold';
title.innerHTML = myObj[i].data.title;

var authors = "";
if (myObj[i].data.creators.length != 1) {
var j;
var authordata = myObj[i].data.creators;
authors = "with ";
for (j = 0; j < authordata.length; j++) {
if (!authordata[j].firstName.includes("Dino")) {
if (authordata.length > 2) {
if (j >= authordata.length - 2) authors = authors + " and ";
}
authors = authors + " " + authordata[j].firstName + " " + authordata[j].lastName;
if (j < authordata.length - 3) authors = authors + ",";
}

if (j == authordata.length - 1) authors = authors + ", ";
}
}

var secondline = document.createElement("span");
var authornode = document.createTextNode(authors);
// var year=document.createElement("font");
// year.style.fontWeight='bold';
// year.innerHTML=myObj[i].data.date+" ";
// item.appendChild(year);
item.appendChild(title);
if (myObj[i].data.DOI != "") {
var doiurl = document.createElement("a");
doiurl.href = "https://doi.org/" + myObj[i].data.DOI;
doiurl.innerHTML = "DOI";
item.appendChild(document.createTextNode('\xa0'))
item.appendChild(doiurl);
}
if (myObj[i].data.extra.includes("arxiv:")) {
var arxiv = document.createElement("a");
var arxivlink = myObj[i].data.extra.match(/arxiv:([^ ]+).*/)
arxiv.href = arxivlink[1];
arxiv.innerHTML = "arXiv";
item.appendChild(document.createTextNode('\xa0'))
item.appendChild(arxiv);
}
item.appendChild(document.createElement("br"));
secondline.appendChild(authornode);
if (myObj[i].data.itemType == "conferencePaper") {
secondline.appendChild(document.createTextNode(myObj[i].data.proceedingsTitle))
secondline.appendChild(document.createTextNode(", " + myObj[i].data.series))
}
if (myObj[i].data.itemType == "journalArticle") {
secondline.appendChild(document.createTextNode(myObj[i].data.publicationTitle))
}
if (myObj[i].data.volume != "") {
secondline.appendChild(document.createTextNode(" vol. " + myObj[i].data.volume + ","))
}
secondline.appendChild(document.createTextNode(" " + myObj[i].data.pages))
secondline.appendChild(document.createTextNode(" (" + myObj[i].data.date + ")."))

item.appendChild(secondline);

document.getElementById("biblio").appendChild(item);
}
}
};
xmlhttp.open("GET", "https://api.zotero.org/groups/1553639/items?format=json&sort=date", true);
xmlhttp.send();
</script>

