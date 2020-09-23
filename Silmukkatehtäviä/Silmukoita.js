function Parilliset(){
  var pLuku = parseInt(document.getElementById('pariluku').value);
  var num = "";

  for (var i = 2; i < pLuku + 2; i += 2) {
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
    if (i % 3 == 0 && i % 5 != 0){
      numroJono += "Hip ";
    }else if (i % 5 == 0 && i % 3 != 0){
      numroJono += "Heijaa ";
    }else if (i % 5 == 0 && i % 3 == 0) {
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

function Potenssi(){
  var korLuku = document.getElementById('korLuku').value;
  var potLuku = document.getElementById('potLuku').value;

  var tulos;
  var uKorLuku = korLuku;

  for (var i = 1; i < potLuku; i++) {

    uKorLuku = uKorLuku * korLuku;
    tulos = uKorLuku;

  }

  document.getElementById('potTulos').innerHTML = "<p>" + tulos + "</p>";
}

function SuurPien(){


  var luku1 = parseInt(document.getElementById('luku1').value);
  var luku2 = parseInt(document.getElementById('luku2').value);
  var luku3 = parseInt(document.getElementById('luku3').value);
  var luku4 = parseInt(document.getElementById('luku4').value);
  var luku5 = parseInt(document.getElementById('luku5').value);
  var lukuLista = [luku1, luku2, luku3, luku4, luku5];

  var suurin = luku1;
  var pienin = luku1;

  for (var i = 1; i < lukuLista.length; i++) {

    if (lukuLista[i] <= pienin){
      pienin = lukuLista[i];
    }
    if (lukuLista[i] >= suurin){
      suurin = lukuLista[i];
    }

  }
  document.getElementById('lukTulos').innerHTML = "<p> Numeroista suurin on: " + suurin + "</p><br><p> Numeroista pienin on: " + pienin + "</p>";
}

function SalaMuok(){
  var muokSalis = document.getElementById('muokSalis').value;
  var salaL = "";
  var kirList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"];
  for (var i = 0; i < muokSalis.length; i++) {
    var randKir = Math.floor(Math.random() * 29);
    salaL += muokSalis[i] + kirList[randKir];
  }
  document.getElementById('muokSalaDiv').innerHTML = "<p>" + salaL + "</p>";
}

function parParSum(){
  var pienempiLuku = parseInt(document.getElementById('pienempiLuku').value);
  var suurempiLuku = parseInt(document.getElementById('suurempiLuku').value);

  var parilliLuvut = "";
  var parilliLasku = "";
  var parilliSumma;

  var parittoLuvut = "";
  var parittoLasku = "";
  var parittoSumma;

  for (var i = pienempiLuku; i < suurempiLuku + 1; i++) {

    if (i % 2 == 0){
      if (i < suurempiLuku - 1){
        parilliLuvut += i + " ";
        parilliLasku += i + "+";
      }else{
        parilliLuvut += i;
        parilliLasku += i;
      }
    }else{
      if (i < suurempiLuku - 1){

        parittoLuvut += i + " ";
        parittoLasku += i + "+";
      }else{
        parittoLuvut += i;
        parittoLasku += i;
      }
    }

  }



  parilliSumma = eval(parilliLasku);
  parittoSumma = eval(parittoLasku);

  document.getElementById('parParSumTulos').innerHTML = "<p>Parilliset luvut ovat: " + parilliLuvut + " ja niiden summa on: " + parilliSumma + "</p><br>\
  <p>Parittomat luvut ovat: " + parittoLuvut + " ja niiden summa on: " + parittoSumma + "</p>";

}
