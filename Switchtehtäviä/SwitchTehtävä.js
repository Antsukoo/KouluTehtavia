function ScrabblePisteet(){
  //Luodaan muuttujat

  var sanaT = document.getElementById('sana').value;
  var pisteet = 0;

  //Jos i muuttuja on pienempi kuin syötetyn sanan pituus tehtään seuraava ja i:hin lisätään 1
  for (var i = 0; i < sanaT.length; i++) {
    //Katsotaan mikä tapaus kyseisellä kirjaimella on ja pisteytetään se sen mukaan
    switch (sanaT[i]) {
      //Jos kirjain on jokin hakasten sisällä olevista riveiltä 12 - 23 kirjaimesta saa yhden pisteen
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
        pisteet++;
        break;
      //Jos kirjain on jokin hakasten sisällä olevista riveiltä 27 - 34 kirjaimesta saa kaksi pistettä
      case 'O':
      case 'Ä':
      case 'K':
      case 'L':
      case 'o':
      case 'ä':
      case 'k':
      case 'l':
        pisteet += 2;
        break;
      //Jos kirjain on jokin hakasten sisällä olevista riveiltä 38 - 41 kirjaimesta saa kolme pistettä
      case 'U':
      case 'M':
      case 'u':
      case 'm':
        pisteet += 3;
        break;
      //Jos kirjain on jokin hakasten sisällä olevista riveiltä 45 - 56 kirjaimesta saa neljä pistettä
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
        pisteet += 4;
        break;
      //Jos kirjain on jokin hakasten sisällä olevista riveiltä 60 - 63 kirjaimesta saa seitsemän pistettä
      case 'Ö':
      case 'D':
      case 'ö':
      case 'd':
        pisteet += 7;
        break;
      //Jos kirjain on jokin hakasten sisällä olevista riveiltä 67 - 72 kirjaimesta saa kahdeksan pistettä
      case 'B':
      case 'F':
      case 'G':
      case 'b':
      case 'f':
      case 'g':
        pisteet += 8;
        break;
      //Jos kirjain on jokin hakasten sisällä olevista riveiltä 76 - 77 kirjaimesta saa kymmenen pistettä
      case 'C':
      case 'c':
        pisteet += 10;
        break;
      default:
      //Jos kirjain on joku muu kuin yllä olevat niin kirjaimesta saa kaksitoista pistettä
        pisteet += 12;

    }
  }
  //Näytetään käyttäjälle sanan pisteet
  document.getElementById('Tulos').innerHTML = "<p>Sanan " + sanaT + " pisteet ovat: " + pisteet + "</p>";
}

function LottoNumerot(){

  //Luodaan muuttuja
  var numrot = "";

  //Jos i on pienempi kuin 7 tehdään seuraava ja lisätään i:hin 1
  for (var i = 0; i < 7; i++) {
    //Luodaan muuttuja ja asetetaan sen arvoksi satunnainen luku 0 ja 40 väliltä
    var math = Math.floor(Math.random() * 41);
    //Jos satunnainen luku on jo numerojonossa ja se ei ole 40 siitä tehdään 1 isompi
    if (numrot.includes(math) && math != 40){
      math++;
    //Jos satunnainen luku on jo numerojonossa ja se on 40 siitä tehdään 1 pienempi
    }else if (numrot.includes(math) && math == 40){
      math--;
    }
    //Jos satunnainen luku on 0 siitä tehdään 1
    if (math == 0){
      math = 1;
    }
    //Satunnainen luku lisätään numerojonoon
    numrot += math + ", ";

  }



  //Näytetään käyttäjälle numerojono
  document.getElementById('lotot').innerHTML = '<p>' + numrot + '</p>';

}

function Taulukko(){
  //Luodaan muuttujat
  var numerot = [];
  var taulu = '<table border="6">';

  //Muutetaan numerot muuttuja taulukoksi tehtävään listaan
  numerot = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  //Lisätään tauluun tr ja td joka numeron jälkeen
  for (var i = 0; i < numerot.length; i++) {
    taulu += '<tr>';
    for (var a = 0; a < numerot[i].length; a++) {
      taulu += '<td>' + numerot[i][a];
    }
  }
  //Suljetaan taulu (jotta taulu ilmestyy HTML:lässä se pitää sulkea)
  taulu += '</table>';
  //Näytetään käyttäjälle taulu
  document.getElementById('tauluT').innerHTML = taulu;
}

function Kortit(){
  //Luodaan muuttujat
  var kortit = [''];
  //Maat
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  //Merkit
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  lasku = 0;

  //Lisätään kortit listaan maa ja merkki kunnes maat ja merkit on käyty loppuun
  for (var f = 0; f < maat.length; f++) {
    for (var g = 0; g < numerot.length; g++) {
      if (f == maat.length-1 && g == numerot.length-1){
        kortit[lasku] = maat[f] + numerot[g];
      }
      else{
        kortit[lasku] = maat[f] + numerot[g];
        lasku++;
      }
    }
  }
  //Luodaan muuttuja lopullisille korteille
  var valitutKortit = [];
  //Lisätään valitutKortit muuttujaan satunnaisesti saadut maa ja merkki (pakassa on 52 korttia) kunnes niitä on annettu 5
  for (var p = 0; p < 5; p++) {
    tämä = kortit[Math.floor(Math.random() * 52)];
    valitutKortit[p] = tämä;
  }
  //Näytetään käyttäjälle lopulliset 5 korttia
  document.getElementById('kortitTulos').innerHTML = '<p>' + valitutKortit + '</p>';
}
