function Parilliset(){
  var pLuku = document.getElementById('pariluku').value;
  var num = "";

  for (var i = 2; i < pLuku; i += 2) {
    num += i + " ";
  }
  document.getElementById('pLukuDiv').innerHTML = "<p>" + num + "</p>";
}

function Salasana(){
  var salSana = document.getElementById('salis').value;
  var salaL = "";
  for (var i = 0; i < salSana.length; i++) {
    salaL += salSana[i] + 'Ö';
  }
  document.getElementById('salasanaDiv').innerHTML = "<p>" + salaL + "</p>";
}

function öTarkastus(){
  var öSana = document.getElementById('öSana').value;

  if (öSana.search("ö") >= 0 || öSana.search("Ö") >= 0){
    document.getElementById('öTulos').innerHTML = "Sanassa on 'ö' kirjain.";
  }else{
    document.getElementById('öTulos').innerHTML = "Sanassa ei ole 'ö' kirjainta.";
  }
}

function Kertoma(){
  var kLuku = document.getElementById('kertSana').value;
  var kLukuJono = "";

  for (var i = kLuku; i > 0; i--) {
    if (i != 1){
      kLukuJono += i + "*";
    }else{
      kLukuJono += i;
    }

  }
  document.getElementById('kertTulos').innerHTML = "<p>Syöttämäsi luvun kertoma on: " + eval(kLukuJono) + "</p>";
}

function HipHeijaa(){
  var numroJono = "";

  for (var i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 6 != 0){
      numroJono += "Hip ";
    }else if (i % 6 == 0 && i % 3 != 0){
      numroJono += "Heijaa ";
    }else if (i % 6 == 0 && i % 3 == 0) {
      numroJono += "Hip Heijaa ";
    }else{
      numroJono += i + " ";
    }
  }
  document.getElementById('hipHTulos').innerHTML = "<p>" + numroJono + "</p>";
}

function KymEkaa(){
  var kymekaa = "";
  for (var i = 1; i < 11; i++) {
    kymekaa += i + " ";
  }
  document.getElementById('kymEkaaTulos').innerHTML = "<p>" + kymekaa + "</p>";
}

function KymEkaaYhteen(){
  var kymEkaaYht = "";

  for (var i = 1; i < 11; i++) {
    if (i != 10){
      kymEkaaYht += i + "+";
    }else{
      kymEkaaYht += i;
    }

  }

  document.getElementById('kymEkaaYhtTulos').innerHTML = "<p>" + eval(kymEkaaYht) + "</p>";
}
