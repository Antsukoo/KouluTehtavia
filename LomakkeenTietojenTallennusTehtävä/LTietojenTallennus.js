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

    if (numero == 0){
      numero = 1;
    }
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

  if (numero == 0){
    numero = 1;
  }
}

//Jos satunnaisesti valittu numero on 0 se vaihdetaan numeroksi 1.


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

var kortKuvat;
var tämMerkki = 0;
var askMerkki = -1;
var vanhTunnusVaiEi;
var odoitusAikaOhi = true;
var valter;
var kortitValittu = false;
var kortitMääräV;
var kortitMääräH;

function kertaa4x2(){
  kortKuvat = ["Kuva5.png", "Kuva6.png", "Kuva7.png", "Kuva8.png", "Kuva5.png", "Kuva6.png", "Kuva7.png", "Kuva8.png"];
  kortitValittu = true;
  kortitMääräV = 4;
  kortitMääräH = 2;
  Aloita();
}
function kertaa4x4(){
  kortKuvat = ["Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva6.png", "Kuva7.png", "Kuva8.png", "Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva6.png", "Kuva7.png", "Kuva8.png"];
  kortitValittu = true;
  kortitMääräV = 4;
  kortitMääräH = 4;
  Aloita();
}
function kertaa4x6(){
  kortKuvat = ["Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva6.png", "Kuva7.png", "Kuva8.png", "Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva6.png", "Kuva7.png", "Kuva8.png", "Kuva25.png", "Kuva24.png", "Kuva23.png", "Kuva22.png", "Kuva22.png", "Kuva23.png", "Kuva24.png", "Kuva25.png"];
  kortitValittu = true;
  kortitMääräV = 4;
  kortitMääräH = 6;
  Aloita();
}

function kertaa5x2(){
  kortKuvat = ["Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png"];
  kortitValittu = true;
  kortitMääräV = 5;
  kortitMääräH = 2;
  Aloita();
}
function kertaa5x4(){
  kortKuvat = ["Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva6.png", "Kuva7.png", "Kuva8.png", "Kuva9.png", "Kuva10.png", "Kuva6.png", "Kuva7.png", "Kuva8.png", "Kuva9.png", "Kuva10.png"];
  kortitValittu = true;
  kortitMääräV = 5;
  kortitMääräH = 4;
  Aloita();
}
function kertaa5x6(){
  kortKuvat = ["Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva1.png", "Kuva2.png", "Kuva3.png", "Kuva4.png", "Kuva5.png", "Kuva6.png", "Kuva7.png", "Kuva8.png", "Kuva9.png", "Kuva10.png", "Kuva6.png", "Kuva7.png", "Kuva8.png", "Kuva9.png", "Kuva10.png", "Kuva11.png", "Kuva12.png", "Kuva13.png", "Kuva14.png", "Kuva15.png", "Kuva11.png", "Kuva12.png", "Kuva13.png", "Kuva14.png", "Kuva15.png"];
  kortitValittu = true;
  kortitMääräV = 5;
  kortitMääräH = 6;
  Aloita();
}

function Aloita(){
  document.getElementById('4kertaa2').setAttribute('disabled', '');
  document.getElementById('4kertaa4').setAttribute('disabled', '');
  document.getElementById('4kertaa6').setAttribute('disabled', '');
  document.getElementById('5kertaa2').setAttribute('disabled', '');
  document.getElementById('5kertaa4').setAttribute('disabled', '');
  document.getElementById('5kertaa6').setAttribute('disabled', '');

  if (kortitValittu == true){
    sekotetut = sekoitaKortit(kortKuvat);

    var kortPaikka = document.getElementById('Taulukko');

    var kortit = document.createElement('table');
    var kortitSisus = document.createElement('tbody');

    for (var i = 0; i < kortitMääräH; i++) {
      var rivi = document.createElement('tr');

      for (var k = 0; k < kortitMääräV; k++) {
        var sLu = document.createElement('td');
        var sLuSisus = document.createTextNode('');

        sLu.setAttribute('alt', sekotetut[(tämMerkki)]);
        sLu.setAttribute('id', 'solu' + tämMerkki);
        sLu.setAttribute('name', tämMerkki);
        sLu.setAttribute('onclick', 'nayta('+tämMerkki+')');

        tämMerkki += 1;

        sLu.appendChild(sLuSisus);

        rivi.appendChild(sLu);
      }
      kortitSisus.appendChild(rivi);

    }
    kortit.appendChild(kortitSisus);
    kortPaikka.appendChild(kortit);
    kortit.setAttribute('border', '1');
  }

}

function sekoitaKortit(tauluk)
{
    tauluk.sort(function(a, b){return 0.5 - Math.random()});
    return tauluk;
}

function nayta(merk){

  if (odoitusAikaOhi == true){

    var tunnus = document.getElementById('solu'+merk);
    var vanhTunnus = tunnus;
    var alter = tunnus.getAttribute('alt');

    if (askMerkki != -1){
      valter = askMerkki.getAttribute('alt');
    }else{
      valter = askMerkki;
    }
    tunnus.innerHTML = '<img src="korttienKuvat/'+alter+'">';
    if (vanhTunnusVaiEi == null){
      vanhTunnusVaiEi = tunnus;
    }



    if (vanhTunnusVaiEi != tunnus){
      var vanAlt = vanhTunnusVaiEi.getAttribute('alt');
      var altEiVan = tunnus.getAttribute('alt');
      if (vanAlt != altEiVan){
        odotaHetki(tunnus, vanhTunnusVaiEi);
        odoitusAikaOhi = false;
        vanhTunnusVaiEi = null;
      }else if (vanAlt == altEiVan){

        tunnus.removeAttribute('onclick');
        vanhTunnusVaiEi.removeAttribute('onclick');
        askMerkki.innerHTML = '<img src="korttienKuvat/'+alter+'">';
        tunnus.innerHTML = '<img src="korttienKuvat/'+alter+'">';


        odotaHetkiVoit();
        odoitusAikaOhi = false;
        vanhTunnusVaiEi = null;
      }

    }

  }
  /*for (var f = 0; f < kortKuvat.length;) {
    if (document.getElementById(kortKuvat[f]) != null){
      f++;
    }else{
      return;
    }
  }
  if (i == kortKuvat.length){
    document.getElementById('VoittoDiv').innerHTML = "<p> Voitit! </p>";
  }*/
}



function odotaHetki(tunn, vanhTunnus){
  setTimeout(function(){
    tunn.innerHTML = '';
    vanhTunnus.innerHTML = '';
    odoitusAikaOhi = true;
  }, 1000);

}

function odotaHetkiVoit(){
  setTimeout(function(){

    odoitusAikaOhi = true;
  }, 1000);

}
