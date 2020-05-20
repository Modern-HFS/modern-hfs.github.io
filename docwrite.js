function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
function getFile(file) {
  if (window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
}
else {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET",file,false);
xmlhttp.send();
xmlDoc=xmlhttp.responseText;
}
function docwrite(uris,id) {
  for (var i = 0; i < uris.length; i++;) {
    if (uris[i].includes(".js") == true) {
      total += "<scr" + "ipt type=\"application/javascript\" src=\"" + uris[i] + "\">" + "<" + "/" + "script>";
    } else if (uris[i].includes(".css") == true) {
      total += "<li" + "nk rel=\"stylesheet\" src=\"" + uris[i] + "\">";
    } else {
      total += escapeHtml(getFile(uris[i]));
    }
  }
  for (var i = 0; i < total.length; i++;) {
    var element = GetElementById(id);
    element.innerHTML += total[i];
  }
}
