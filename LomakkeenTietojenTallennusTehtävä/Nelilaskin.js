var ind = ["*",'/','+','-','%'];
var numerot = "";
var jono;
var index;

var s;

function Lisaa(merkki){
  numerot += merkki;
  document.getElementById('Näyttö').innerHTML = numerot;
}
function yhtäS(){
  if (numerot != null){
    s = numerot.search('%');
    if (s > 0){
      jono = numerot.split('%')
      numerot = jono[0] / 100 * jono[1];
      document.getElementById('Näyttö').innerHTML = numerot;
    }else if (s === -1){
      numerot = eval(numerot);
      document.getElementById('Näyttö').innerHTML = numerot;
    }
  }
}
function C(){
  for (var i = 0; i < numerot.length; i++) {
    for (var e = 0; e < ind.length; e++) {
      if (numerot[i] == ind[e]){
        index = i;
      }
    }
  }
  numerot = numerot.substr(0, index);
  document.getElementById('Näyttö').innerHTML = numerot;
}

function AC(){
  numerot = "";
  document.getElementById('Näyttö').innerHTML = numerot;
}
/*
//Boolean muuttujat
var muuKuinNolla = false;
var ekaNumeroOn = false;

var kerto = false;
var jako = false;
var miinus = false;
var plus = false;

var nollaOn = false;
var pilkkuOn = false;
var prosenttiOn = false;

var eiJaaEikäKerro = false;
var pilkkuTäytyy = false;

var tulosEi = false;

//Laskun lukujen muuttujat
var luku1;
var luku2;

//Tuloksen muutuja
var tulos;
*/


/*
//Functio nappulalle 0
function s0(){
  //Jos ensimmäistä numeroa ei ole laitettu
  if (!ekaNumeroOn){
    //Jos ei ole laitettu nollaa
    if (!nollaOn){
      //Jos ei ole laitettu pilkkua
      if (!pilkkuOn){
        //Muuttaa laskun 0:ksi
        document.getElementById('Näyttö').innerHTML = "0";
        //Käskee laittaa pilkun
        pilkkuTäytyy = true;
        //Ja kertoo että nolla ja ensimmäinen numero on syötetty
        nollaOn = true;
        ekaNumeroOn = true;
      }
    }
  //Muuten
  }else{
    //Jos laskussa on jokin luku, joka ei ole nolla tai luvussa on pilkku
    if (muuKuinNolla || pilkkuOn){
      //Lisää laskun perään 0
      document.getElementById('Näyttö').innerHTML += "0";

    }
  }
}

//Functio nappulalle 1
function s1(){
  //Sama kuin nollassa
  if (!ekaNumeroOn){
    //Muuttaa laskun 1:ksi
    document.getElementById('Näyttö').innerHTML = "1";
    //samat kuin nollassa
    ekaNumeroOn = true;
    muuKuinNolla = true;
  //Muuten jos pilkkua ei täydy laittaa
  }else if (!pilkkuTäytyy) {
    //sama kuin nollassa
    document.getElementById('Näyttö').innerHTML += "1";
    //Muu kuin nolla muuttuu todeksi
    muuKuinNolla = true;
  }
}

//Samat kuin ykkösessä
function s2(){
  if (!ekaNumeroOn && !pilkkuTäytyy){
    document.getElementById('Näyttö').innerHTML = "2";
    ekaNumeroOn = true;
    muuKuinNolla = true;
  }else if (!pilkkuTäytyy) {
    document.getElementById('Näyttö').innerHTML += "2";
    muuKuinNolla = true;
  }
}

//Samat kuin ykkösessä
function s3(){
  if (!ekaNumeroOn && !pilkkuTäytyy){
    document.getElementById('Näyttö').innerHTML = "3";
    ekaNumeroOn = true;
    muuKuinNolla = true;
  }else if (!pilkkuTäytyy) {
    document.getElementById('Näyttö').innerHTML += "3";
    muuKuinNolla = true;
  }
}

//Samat kuin ykkösessä
function s4(){
  if (!ekaNumeroOn && !pilkkuTäytyy){
    document.getElementById('Näyttö').innerHTML = "4";
    ekaNumeroOn = true;
    muuKuinNolla = true;
  }else if (!pilkkuTäytyy) {
    document.getElementById('Näyttö').innerHTML += "4";
    muuKuinNolla = true;
  }
}

//Samat kuin ykkösessä
function s5(){
  if (!ekaNumeroOn && !pilkkuTäytyy){
    document.getElementById('Näyttö').innerHTML = "5";
    ekaNumeroOn = true;
    muuKuinNolla = true;
  }else if (!pilkkuTäytyy) {
    document.getElementById('Näyttö').innerHTML += "5";
    muuKuinNolla = true;
  }
}

//Samat kuin ykkösessä
function s6(){
  if (!ekaNumeroOn && !pilkkuTäytyy){
    document.getElementById('Näyttö').innerHTML = "6";
    ekaNumeroOn = true;
    muuKuinNolla = true;
  }else if (!pilkkuTäytyy) {
    document.getElementById('Näyttö').innerHTML += "6";
    muuKuinNolla = true;
  }
}

//Samat kuin ykkösessä
function s7(){
  if (!ekaNumeroOn && !pilkkuTäytyy){
    document.getElementById('Näyttö').innerHTML = "7";
    ekaNumeroOn = true;
    muuKuinNolla = true;
  }else if (!pilkkuTäytyy) {
    document.getElementById('Näyttö').innerHTML += "7";
    muuKuinNolla = true;
  }
}

//Samat kuin ykkösessä
function s8(){
  if (!ekaNumeroOn && !pilkkuTäytyy){
    document.getElementById('Näyttö').innerHTML = "8";
    ekaNumeroOn = true;
    muuKuinNolla = true;
  }else if (!pilkkuTäytyy) {
    document.getElementById('Näyttö').innerHTML += "8";
    muuKuinNolla = true;
  }
}

//Samat kuin ykkösessä
function s9(){
  if (!ekaNumeroOn && !pilkkuTäytyy){
    document.getElementById('Näyttö').innerHTML = "9";
    ekaNumeroOn = true;
    muuKuinNolla = true;
  }else if (!pilkkuTäytyy) {
    document.getElementById('Näyttö').innerHTML += "9";
    muuKuinNolla = true;
  }
}
//Poistaa koko laskun ja sen valinnat
function AC(){
  if (luku1 != null){
    if (luku2 != null){
      luku1 = 0;
      kerto = false;
      jako = false;
      plus = false;
      miinus = false;
      prosenttiOn = false;
      eiJaaEikäKerro = false;
      luku2 = 0;
    }else{
      luku1 = 0;
      kerto = false;
      eiJaaEikäKerro = false;
      jako = false;
      prosenttiOn = false;
      plus = false;
      miinus = false;
    }
    document.getElementById('Näyttö').innerHTML = "";
    document.getElementById('Lasku').innerHTML = "";
  }else{
    document.getElementById('Näyttö').innerHTML = "";
    document.getElementById('Lasku').innerHTML = "";
    prosenttiOn = false;
  }
}

//Poistaa tämänhetkisen kohdan laskusta
function C(){
  if (luku1 != null){
    if (luku2 != null){
      document.getElementById('Näyttö').innerHTML = "";
      if (kerto){
        document.getElementById('Lasku').innerHTML = luku1 + " * ";
      }else if (jako) {
        document.getElementById('Lasku').innerHTML = luku1 + " / ";
      }else if (plus) {
        document.getElementById('Lasku').innerHTML = luku1 + " + ";
      }else if (miinus) {
        document.getElementById('Lasku').innerHTML = luku1 + " - ";
      }

      prosenttiOn = false;
    }else{
      luku1 = 0;
      eiJaaEikäKerro = false;
      kerto = false;
      jako = false;
      plus = false;
      miinus = false;
      document.getElementById('Lasku').innerHTML = "";
      document.getElementById('Näyttö').innerHTML = "";
      if (luku1.includes("%")){
        prosenttiOn = false;
      }
    }
  }else{
    document.getElementById('Näyttö').innerHTML = "";
    prosenttiOn = false;
  }
}

//Syöttää prosenttimerkin laskuun
function prosentti(){
  if (ekaNumeroOn){
    if (luku1 != null && !eiJaaEikäKerro){
      document.getElementById('Näyttö').innerHTML += "%";
    }else if (luku1 != null && eiJaaEikäKerro) {
      alert('Voit käyttää prosenttimerkkiä vain jos jaat tai kerrot!')
    }else if (luku1 == null) {
      document.getElementById('Näyttö').innerHTML += "%";
      prosenttiOn = true;
    }
  }


}

//Muuttaa laskun jakolaskuksi
function jaa(){
  luku1 = document.getElementById('Näyttö').innerHTML;
  ekaNumeroOn = false;
  nollaOn = false;
  pilkkuOn = false;
  kerto = false;
  jako = true;
  plus = false;
  miinus = false;
  document.getElementById('Lasku').innerHTML = luku1 + " / ";
  document.getElementById('Näyttö').innerHTML = "";
}

//Muuttaa laskun kertolaskuksi
function kerro(){

  luku1 = document.getElementById('Näyttö').innerHTML;
  ekaNumeroOn = false;
  nollaOn = false;
  pilkkuOn = false;
  kerto = true;
  jako = false;
  plus = false;
  miinus = false;
  document.getElementById('Lasku').innerHTML = luku1 + " * ";
  document.getElementById('Näyttö').innerHTML = "";
}

//Muuttaa laskun miinuslaskuksi
function miinusta(){
  if (!prosenttiOn){
    luku1 = document.getElementById('Näyttö').innerHTML;
    eiJaaEikäKerro = true;
    ekaNumeroOn = false;
    nollaOn = false;
    pilkkuOn = false;
    kerto = false;
    jako = false;
    plus = false;
    miinus = true;
    document.getElementById('Lasku').innerHTML = luku1 + " - ";
    document.getElementById('Näyttö').innerHTML = "";
  }else{
    alert('Et voi miinustaa jos luvussasi on prosenttimerkki!');
  }

}

//Muuttaa laskun pluslaskuksi
function plussaa(){
  if (!prosenttiOn){
    luku1 = document.getElementById('Näyttö').innerHTML;
    ekaNumeroOn = false;
    nollaOn = false;
    pilkkuOn = false;
    kerto = false;
    jako = false;
    plus = true;
    miinus = false;
    document.getElementById('Lasku').innerHTML = luku1 + " + ";
    document.getElementById('Näyttö').innerHTML = "";
  }else{
    alert('Et voi plussata jos luvussasi on prosenttimerkki!');
  }

}

//Laskee laskun yhteen
function yhtäS(){
  luku2 = document.getElementById('Näyttö').innerHTML;
  //Jos lasku on kertolasku
  if (kerto)  {
    //Katso jos luvuissa on % merkki ja kummassa, kummassakin tai ei kummassakaan
    //Ja laske tulos sen perusteella
    if (luku1.includes("%")){
      if (luku2.includes("%")){
        tulos = (parseFloat(luku1) / 100) * (parseFloat(luku2) / 100);
      }else{
        tulos = (parseFloat(luku1) / 100) * parseFloat(luku2);
      }
    }else{
      if (luku2.includes("%")){
        tulos = tulos = parseFloat(luku1) * (parseFloat(luku2) / 100);
      }else{
        tulos = parseFloat(luku1) * parseFloat(luku2);
      }

    }
    tulosEi = false;
  }else if (jako) {
    //Katso jos luvuissa on % merkki ja kummassa, kummassakin tai ei kummassakaan
    //Ja laske tulos sen perusteella
    if (luku1.includes("%")){
      if (luku2.includes("%")){
        tulos = (parseFloat(luku1) * 100) / (parseFloat(luku2) * 100);
      }else{
        tulos = parseFloat(luku2) / (parseFloat(luku1) * 100);
      }
    }else{
      if (luku2.includes("%")){
        tulos = tulos = (parseFloat(luku2) * 100) / parseFloat(luku1); //Toimii
      }else{
        tulos = parseFloat(luku1) / parseFloat(luku2);
      }
    }
    tulosEi = false;
  //Jos lasku on pluslasku
  }else if (plus) {
    //Laske tulos sen perusteella
    if(luku2.includes("%")){
      alert('Et voi käyttää prosenttimerkkiä jos plussaat!');
      luku2 = 0;
      tulosEi = true;
      document.getElementById('Näyttö').innerHTML = "";
    }else{
      tulos = parseFloat(luku1) + parseFloat(luku2);
      tulosEi = false;
    }
  //Jos lasku on miinuslasku
  }else if (miinus) {
    //Laske tulos sen perusteella
    if(luku2.includes("%")){
      alert('Et voi käyttää prosenttimerkkiä jos miinustat!');
      luku2 = 0;
      tulosEi = true;
      document.getElementById('Näyttö').innerHTML = "";
    }else{
      tulos = parseFloat(luku1) - parseFloat(luku2);
      tulosEi = false;
    }
  }
  if (!tulosEi){
    //Aseta tulos ja laita se näkyväksi
    document.getElementById('Näyttö').innerHTML = tulos;
    document.getElementById('Lasku').innerHTML += luku2 + " = " + tulos;
  }

}

//Functio nappulalle pilkku
function pilkku(){

    if (ekaNumeroOn || nollaOn){
      document.getElementById('Näyttö').innerHTML += ".";
      pilkkuTäytyy = false;
      pilkkuOn = true;
    }
}
*/
