function Tallenna(){
  if (document.getElementById('nimi') != null){
    var nimiT = document.getElementById('nimi').value;
    window.localStorage.setItem('name', nimiT);
  }
  if (document.getElementById('sukunimi') != null){
    var sukuT = document.getElementById('sukunimi').value;
    window.localStorage.setItem('suku', sukuT);
  }


}

function Lataa(){
  if (window.localStorage.getItem('name') != null){
    var tNimi = window.localStorage.getItem('name');
    document.getElementById('nimi').value = tNimi;
  }
  if (window.localStorage.getItem('suku') != null){
    var tSuku = window.localStorage.getItem('suku');
    document.getElementById('sukunimi').value = tSuku;
  }
}

function Poista(){
  if (window.localStorage.getItem('name') != null){
    window.localStorage.removeItem('name');
  }
  if (window.localStorage.getItem('suku') != null){
    window.localStorage.removeItem('suku');
  }
}







//ArvausPeli:

//Luo tietovaraston nimeltä arvNyt, joka kuvastaa pelaajan lupaa arvata.
var arvNyt;
//Luo tietovaraston nimeltä hävinnyt, joka kuvastaa onko pelaaja hävinnyt vai ei.
var hävinnyt = false;
//Luo tietovaraston nimeltä voittanut, joka kuvastaa onko pelaaja voittanut vai ei.
var voittanut = false;
//Luo tietovaraston nimeltä numero, joka kuvastaa satunnaisesti luotua numeroa.
var numero;
//Luo tietovaraston nimeltä häviöMäärä, joka kuvastaa kuinka monta kertaa pelaaja on hävinnyt.
var häviöMäärä = 0;
//Luo tietovaraston nimeltä voittoMäärä, joka kuvastaa kuinka monta kertaa pelaaja on voittanut.
var voittoMäärä = 0;
//Luo tietovaraston nimeltä arvMäärä, joka kuvastaa arvausten määrää.
var arvMäärä = 0;


function TallennaPisteet(){
  if (window.localStorage.getItem('voitot') == null && window.localStorage.getItem('haviot') == null){
    window.localStorage.setItem('voitot', voittoMäärä);
    window.localStorage.setItem('haviot', häviöMäärä);
  }else if (window.localStorage.getItem('voitot') != null || window.localStorage.getItem('haviot') != null){
    alert('Sinun täytyy poistaa pisteesi ennen kuin tallennat uudet!');
  }



}

function PoistaPisteet(){
  if (window.localStorage.getItem('voitot') != null){
    window.localStorage.removeItem('voitot');
  }
  if (window.localStorage.getItem('haviot') != null){
    window.localStorage.removeItem('haviot');
  }
}

function LataaPisteet(){
  if (window.localStorage.getItem('voitot') != null){
    voittoMäärä = window.localStorage.getItem('voitot');
    document.getElementById('Voitot').innerHTML = "Voitot: " + voittoMäärä;
  }
  if (window.localStorage.getItem('haviot') != null){
    häviöMäärä = window.localStorage.getItem('haviot');
    document.getElementById('Tappiot').innerHTML = "Häviöt: " + häviöMäärä;
  }
}


//Aloita uudestaan nappulan funktio.
function AloitaUudestaan(){

  //Jos pelaaja on hävinnyt...
  if (hävinnyt){
    //Aktivoi ArvaaUudest funktion.
    ArvaaUudest();
  }

  //Jos pelaaja on voittanut...
  if (voittanut){
    //Aktivoi ArvaaUudest funktion.
    ArvaaUudest();
  }
}

//Voitto funktio.
function Voitto(){
  //Muuttaa Aloita alusta nappulan näkyväksi.
  document.getElementById('aloitaAlus').innerHTML = "Aloita uudestaan";
  //Vaihtaa voittanut muodon todeksi.
  voittanut = true;
  //Ottaa pelaajalta pois luvan arvata.
  arvNyt = false;
  //Voittomäärä kasvaa yhdellä.
  voittoMäärä++;
  //Päivittää näkyvän voitto laskurin.
  document.getElementById('Voitot').innerHTML = "Voitot: " + voittoMäärä;
}

//Häviö funktio.
function Häviö(){
  //Muuttaa Aloita alusta nappulan näkyväksi.
  document.getElementById('aloitaAlus').innerHTML = "Aloita uudestaan";
  //Vaihtaa hävinnyt muodon todeksi.
  hävinnyt = true;
  //Ottaa pelaajalta pois luvan arvata.
  arvNyt = false;
  //Häviömäärä kasvaa yhdellä.
  häviöMäärä++;
  //Päivittää näkyvän häviö laskurin.
  document.getElementById('Tappiot').innerHTML = "Häviöt: " + häviöMäärä;
}

//Ensimmäinen arvaus funktio.
function Arvaa(){

  //Jos pelaaja ei ole hävinnyt eikä voittanut...
  if (hävinnyt == false && voittanut == false){
    //Antaa pelaajalle luvan arvata...
    arvNyt = true;
    //Ja luo satunnaisen numeron 0 ja 10 väliltä.
    numero = Math.floor(Math.random() * 11);
  }
}

//Uudelleen arvauksen aloitus
function ArvaaUudest(){
  //Luo uuden satunnaisen numeron 0 ja 10 väliltä.
  numero = Math.floor(Math.random() * 11);
  //Vaihtaa hävinnyt muodon epätodeksi.
  hävinnyt = false;
  //Vaihtaa voittanut muodon epätodeksi.
  voittanut = false;
  //Antaa pelaajalle luvan arvata.
  arvNyt = true;
  //Muuttaa arvausten määrän takaisin nollaan.
  arvMäärä = 0;
  //Palauttaa numerot näkyviin.
  document.getElementById('napp1').innerHTML = "1"
  document.getElementById('napp2').innerHTML = "2";
  document.getElementById('napp3').innerHTML = "3";
  document.getElementById('napp4').innerHTML = "4";
  document.getElementById('napp5').innerHTML = "5";
  document.getElementById('napp6').innerHTML = "6";
  document.getElementById('napp7').innerHTML = "7";
  document.getElementById('napp8').innerHTML = "8";
  document.getElementById('napp9').innerHTML = "9";
  document.getElementById('napp10').innerHTML = "10";
}

//Jos satunnaisesti valittu numero on 0 se vaihdetaan numeroksi 1.
if (numero == 0){
  numero = 1;
}

//Functio nappulalle 1.
function start1(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 1...
    arvaus = 1;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktio...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp1').focus;
    }
  }
}

//Functio nappulalle 2.
function start2(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 2...
    arvaus = 2;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";
      document.getElementById('napp2').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    }else if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp2').innerHTML = "";
      document.getElementById('napp3').innerHTML = "";
      document.getElementById('napp4').innerHTML = "";
      document.getElementById('napp5').innerHTML = "";
      document.getElementById('napp6').innerHTML = "";
      document.getElementById('napp7').innerHTML = "";
      document.getElementById('napp8').innerHTML = "";
      document.getElementById('napp9').innerHTML = "";
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp2').focus;
    }
  }
}

//Functio nappulalle 3.
function start3(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 3...
    arvaus = 3;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";
      document.getElementById('napp2').innerHTML = "";
      document.getElementById('napp3').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    }else if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp3').innerHTML = "";
      document.getElementById('napp4').innerHTML = "";
      document.getElementById('napp5').innerHTML = "";
      document.getElementById('napp6').innerHTML = "";
      document.getElementById('napp7').innerHTML = "";
      document.getElementById('napp8').innerHTML = "";
      document.getElementById('napp9').innerHTML = "";
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp3').focus;
    }
  }
}

//Functio nappulalle 4.
function start4(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 4...
    arvaus = 4;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";
      document.getElementById('napp2').innerHTML = "";
      document.getElementById('napp3').innerHTML = "";
      document.getElementById('napp4').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    }else if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp4').innerHTML = "";
      document.getElementById('napp5').innerHTML = "";
      document.getElementById('napp6').innerHTML = "";
      document.getElementById('napp7').innerHTML = "";
      document.getElementById('napp8').innerHTML = "";
      document.getElementById('napp9').innerHTML = "";
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp4').focus;
    }
  }
}

//Functio nappulalle 5.
function start5(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 5...
    arvaus = 5;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";
      document.getElementById('napp2').innerHTML = "";
      document.getElementById('napp3').innerHTML = "";
      document.getElementById('napp4').innerHTML = "";
      document.getElementById('napp5').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    }else if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp5').innerHTML = "";
      document.getElementById('napp6').innerHTML = "";
      document.getElementById('napp7').innerHTML = "";
      document.getElementById('napp8').innerHTML = "";
      document.getElementById('napp9').innerHTML = "";
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp5').focus;
    }
  }
}

//Functio nappulalle 6.
function start6(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 6...
    arvaus = 6;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";
      document.getElementById('napp2').innerHTML = "";
      document.getElementById('napp3').innerHTML = "";
      document.getElementById('napp4').innerHTML = "";
      document.getElementById('napp5').innerHTML = "";
      document.getElementById('napp6').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    }else if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp6').innerHTML = "";
      document.getElementById('napp7').innerHTML = "";
      document.getElementById('napp8').innerHTML = "";
      document.getElementById('napp9').innerHTML = "";
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp6').focus;
    }
  }
}

//Functio nappulalle 7.
function start7(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 7...
    arvaus = 7;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";
      document.getElementById('napp2').innerHTML = "";
      document.getElementById('napp3').innerHTML = "";
      document.getElementById('napp4').innerHTML = "";
      document.getElementById('napp5').innerHTML = "";
      document.getElementById('napp6').innerHTML = "";
      document.getElementById('napp7').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    }else if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp7').innerHTML = "";
      document.getElementById('napp8').innerHTML = "";
      document.getElementById('napp9').innerHTML = "";
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp7').focus;
    }
  }
}

//Functio nappulalle 8.
function start8(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 8...
    arvaus = 8;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";
      document.getElementById('napp2').innerHTML = "";
      document.getElementById('napp3').innerHTML = "";
      document.getElementById('napp4').innerHTML = "";
      document.getElementById('napp5').innerHTML = "";
      document.getElementById('napp6').innerHTML = "";
      document.getElementById('napp7').innerHTML = "";
      document.getElementById('napp8').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    }else if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp8').innerHTML = "";
      document.getElementById('napp9').innerHTML = "";
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp8').focus;
    }
  }
}

//Functio nappulalle 9.
function start9(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 9...
    arvaus = 9;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on pienempi kuin satunnaisesti valittu numero...
    if (arvaus < numero){
      //Kerrotaan että arvaus on liian pieni...
      alert('Syöttämäsi numero on liian pieni.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp1').innerHTML = "";
      document.getElementById('napp2').innerHTML = "";
      document.getElementById('napp3').innerHTML = "";
      document.getElementById('napp4').innerHTML = "";
      document.getElementById('napp5').innerHTML = "";
      document.getElementById('napp6').innerHTML = "";
      document.getElementById('napp7').innerHTML = "";
      document.getElementById('napp8').innerHTML = "";
      document.getElementById('napp9').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    }else if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp9').innerHTML = "";
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp9').focus;
    }
  }
}

//Functio nappulalle 10.
function start10(){

  //Jos pelaajalla on "arvaus lupa", hän ei ole hävinnyt ja hän ei ole voittanut...
  if (arvNyt == true && hävinnyt == false && voittanut == false){
    //Luodaan tietovarasto nimeltä arvaus...
    var arvaus;
    //Muutetaan arvaus numeroksi 10...
    arvaus = 10;
    //Arvausten määrä nousee yhdellä.
    arvMäärä++;

    //Jos arvaus on suurempi kuin satunnaisesti valittu numero...
    if (arvaus > numero){
      //Kerrotaan että arvaus on liian suuri...
      alert('Syöttämäsi numero on liian suuri.');
      //Ja poistetaan numerot jotka eivät voi olla oikeita.
      document.getElementById('napp10').innerHTML = "";

      //Jos arvausten määrä on 3 eikä käyttäjä ole arvannut oikein...
      if (arvMäärä === 3){
        //Aktivoi häviö funktion.
        Häviö();
      }

    //Jos arvaus on sama kuin satunnaisesti valittu numero...
    }else if (arvaus == numero){
      //Aktivoi voitto funktion...
      Voitto();
      //Kertoo sinulle että arvasit oikein...
      alert('Arvasit oikein!!');
      //Ja aktivoi kyseisen numeron.
      document.getElementById('napp10').focus;
    }
  }
}
