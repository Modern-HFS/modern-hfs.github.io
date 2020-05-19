function docwrite(uris,id = null) {
  for (var i = 0; i < uris.length; i++) {
    if (uris[i].includes(".js") == true) {
      total += "<scr" + "ipt type=\"application/javascript\" src=\"" + uris[i] + "\">" + "<" + "/" + "script>"
    } else if (uris[i].includes(".css") == true) {
      total += "<li" + "nk rel=\"stylesheet\" src=\"" + uris[i] + "\">" 
    } else {
      total += (function (unsafe) {
        return unsafe
           .replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&#039;");
 })((if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
} 
xmlhttp.open("GET","YOUR_FILE.txt",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseText;)(uris[i]);
);
    }
  }
  for (var i = 0; i < total.length; i++) {
    var element = GetElementById(id);
    element.innerHTML += total[i];
  }
}
