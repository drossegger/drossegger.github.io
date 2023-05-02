---
title: Publications
permalink: /publications/
header:
  overlay_image: /assets/images/publications_overlay.jpg
classes: wide
--- 
<div id="biblio">Loading...</div>
<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  var myObj = JSON.parse(this.responseText);
  var biblio=document.getElementById('biblio');
  while (biblio.firstChild) biblio.removeChild(biblio.firstChild);
  biblio.appendChild(createbib(myObj,true));
}
};
xmlhttp.open("GET", "https://drossegger.github.io/data/data.json", true);
xmlhttp.send();
</script>

