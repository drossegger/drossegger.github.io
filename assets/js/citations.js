function generate_authorsPers(i){
  var authors='';
  if (i.data.creators.length != 1) {
    var j;
    var authordata = i.data.creators;
    authors = "with ";
    for (j = 0; j < authordata.length; j++) {
      if (!authordata[j].firstName.includes("Dino")) {
        if (authordata.length > 2) {
          if (j >= authordata.length - 2 && authordata.length==3) authors = authors + " and ";
          else if (j >= authordata.length - 2 ) authors = authors + ", and ";
        }
        authors = authors + " " + authordata[j].firstName + " " + authordata[j].lastName;
        if (j < authordata.length - 3) authors = authors + ",";
      }
    }
  }
  return authors;
}
function generate_authors(i){
   var authors='';
   if (i.data.creators.length != 0) {
    var j;
    var authordata =i.data.creators;
    authors = "";
    for (j = 0; j < authordata.length; j++) {
        if (authordata.length > 2) {
          if (j >= authordata.length - 2 && authordata.length==3) authors = authors + " and ";
          else if (j >= authordata.length - 2 ) authors = authors + ", and ";
        }
        authors = authors + " " + authordata[j].firstName + " " + authordata[j].lastName;
        if (j < authordata.length - 3) authors = authors + ",";
    }
  } 
  return authors;

}
function processItem(i,personal){
  item= document.createElement('p');
  item.className='bibitem';
  var title = document.createElement("span");
  title.style.fontStyle = 'italic';
  title.innerHTML = i.data.title;

  var authors = "";
  if (personal===undefined || personal==true ) authors=generate_authorsPers(i);
  else authors=generate_authors(i);

  var secondline = document.createElement("p");
  var thirdline  = document.createElement("p");
  secondline.id="lines";
  thirdline.id="lines";
  var authornode = document.createTextNode(authors);

  item.appendChild(title);
  if (i.data.DOI != "" || i.data.extra.includes("arxiv:") || i.data.url!="") {
    item.appendChild(document.createTextNode(' ['));
  }
  if (i.data.DOI != "") {
    var doiurl = document.createElement("a");
    doiurl.href = "https://doi.org/" + i.data.DOI;
    doiurl.innerHTML = "DOI";
    item.appendChild(document.createTextNode('\xa0'))
    item.appendChild(doiurl);
    if( i.data.extra.includes("arxiv:")) item.appendChild(document.createTextNode(' |'));
  }
  if (i.data.extra.includes("arxiv:")) {
    var arxiv = document.createElement("a");
    var arxivlink = i.data.extra.match(/arxiv:([^ ]+).*/)
    arxiv.href = arxivlink[1];
    arxiv.innerHTML = "arXiv";
    item.appendChild(document.createTextNode('\xa0'))
    item.appendChild(arxiv);
  }
  else if (i.data.url!=""){
    var url=document.createElement("a");
    url.href=i.data.url;
    url.innerHTML="pdf";
    item.appendChild(document.createTextNode('\xa0'))
    item.appendChild(url);
  }
  if (i.data.DOI != "" || i.data.extra.includes("arxiv:") || i.data.url!="") {
    item.appendChild(document.createTextNode(' ]'));
  }
  secondline.appendChild(authornode);
  if (i.data.itemType == "conferencePaper") {
    var proceedings=document.createElement("span");
    proceedings.id='pubtitle';
    thirdline.appendChild(proceedings);
    proceedings.innerHTML=i.data.proceedingsTitle;
    if (i.data.series != '') proceedings.innerHTML=proceedings.innerHTML + ', ' +i.data.series;
  }
  if (i.data.itemType == "journalArticle") {
    var publication=document.createElement("span");
    publication.id='pubtitle';
    thirdline.appendChild(publication);
    publication.innerHTML=i.data.publicationTitle;
  }
  if (i.data.volume != "") {
    thirdline.appendChild(document.createTextNode(" vol. " + i.data.volume ))
  }
  if (i.data.issue !="" && i.data.itemType=="journalArticle"){
    thirdline.appendChild(document.createTextNode(" (" + i.data.issue+ "),"))
  }
  else {thirdline.appendChild(document.createTextNode(","))}
  thirdline.appendChild(document.createTextNode(" " + i.data.pages))
  thirdline.appendChild(document.createTextNode(" (" + i.data.date + ")."))

  if ( authors !="" ) {
    item.appendChild(secondline);
  }
  item.appendChild(thirdline);
  return item;
}

function createbib(myObj,personal){
  var bib=document.createElement('div');
  bib.className="bibliography";
  for (i = 0; i < myObj.length; i++) {
    if (myObj[i].data.creators=== undefined) continue;
    bib.appendChild(processItem(myObj[i],personal));
  }
  return bib;
}

