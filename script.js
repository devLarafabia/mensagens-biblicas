/*
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
  console.log(data)
  // document.getElementById("id").innerHTML = JSON.stringify(data);
  // document.getElementById("url").innerHTML = data[0]["url"];

  // var html = '<img src="' + data[0]["url"] + '">';
  // document.getElementById("image").innerHTML = html;
  
});
*/