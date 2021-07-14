
function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

ajax_get('https://www.abibliadigital.com.br/api/verses/nvi/random', function(data) {
  document.getElementById("text").innerHTML = JSON.stringify(data.text);
  document.getElementById("author").innerHTML = JSON.stringify(data.book.author);
  document.getElementById("chapter").innerHTML = JSON.stringify(data.chapter); 
  document.getElementById("versus").innerHTML = JSON.stringify(data.number) ;
}); 
