---
title: Publications
permalink: /publications/
header:
  image: /assets/images/publications.jpg
classes: wide
--- 
<style type="text/css">
body {
  counter-reset: section;      
}
p.bibitem{
  margin-left:1em;
  text-indent:-1em;
  }
p.bibitem:before {
  counter-increment: section;   
  font-weight: bold;
  content: "" counter(section) ". "; 
}
</style>
<div id="biblio"></div>
<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = JSON.parse(this.responseText);
for (i = 0; i < myObj.length; i++) {
if (myObj[i].data.creators== undefined) continue;
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
var thirdline  = document.createElement("span");
var authornode = document.createTextNode(authors);
secondline.style.fontSize='14px';
secondline.style.lineHeight='0.8';
thirdline.style.fontSize='14px';
thirdline.style.lineHeight='0.8';
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
if (myObj[i].data.extra.includes("preprint:")) {
var preprint= document.createElement("a");
var preprintlink= myObj[i].data.extra.match(/preprint:([^ ]+).*/)
preprint.href = preprintlink[1];
preprint.innerHTML = "preprint";
item.appendChild(document.createTextNode('\xa0'))
item.appendChild(preprint);
}
item.appendChild(document.createElement("br"));
secondline.appendChild(authornode);
if (myObj[i].data.itemType == "conferencePaper") {
thirdline.appendChild(document.createTextNode(myObj[i].data.proceedingsTitle))
thirdline.appendChild(document.createTextNode(", " + myObj[i].data.series))
}
if (myObj[i].data.itemType == "journalArticle") {
thirdline.appendChild(document.createTextNode(myObj[i].data.publicationTitle))
}
if (myObj[i].data.volume != "") {
thirdline.appendChild(document.createTextNode(" vol. " + myObj[i].data.volume ))
}
if (myObj[i].data.issue !="" && myObj[i].data.itemType=="journalArticle"){
thirdline.appendChild(document.createTextNode(" (" + myObj[i].data.issue+ "),"))
}
else {thirdline.appendChild(document.createTextNode(","))}
thirdline.appendChild(document.createTextNode(" " + myObj[i].data.pages))
thirdline.appendChild(document.createTextNode(" (" + myObj[i].data.date + ")."))

if ( authors !="" ) {
item.appendChild(secondline);
item.appendChild(document.createElement("br"));
}
item.appendChild(thirdline);
document.getElementById("biblio").appendChild(item);
}
}
};
xmlhttp.open("GET", "https://api.zotero.org/groups/1553639/items?format=json&sort=date", true);
xmlhttp.send();
</script>

