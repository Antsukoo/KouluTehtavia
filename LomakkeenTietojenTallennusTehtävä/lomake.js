//Funktio joka aktivoituu kun käyttäjä painaa paina minua/tarkistus nappia
function TietojenTarkistus(){

  //Nimen hakeminen HTML documentista
  var nimenPituus = document.getElementById('nimi').value;
  //Nimen pienimmän sallitun pituuden määrittely
  var nimenMinPituus = 3;
  //Onko syötetyn nimen pituus sallittu
  var nimiOikein = false;

  //Salasanan hakeminen HTML documentista
  var salasan = document.getElementById('salasana').value;
  //Salasanan pienimmän sallitun pituuden määrittely
  var salasananMinPituus = 7;
  //Onko syötetyn salasanan pituus sallittu
  var salasanaOikein = false;

  //Konekäyttäjä kysymyksen vastauksen hakeminen HTML documentista
  var koneKäyttäjä = document.getElementsByName("radiovalinta");
  //Onko käyttäjä vastannut konekäyttäjä kysymykseen
  var koneKäyttäjäTehty = false;
  var koneKäyttäjäValittu = false;

  //Sivun tykkäämis kysymyksen vastauksen hakeminen HTML documentista
  var sivuKysymys = document.getElementsByName("valinta");
  //Onko käyttäjä vastannut sivun tykkäämis kysymykseen
  var sivuKysymysTehty = false;
  var sivuKysymysValittu = false;

  //Lempiaine kysymyksen vastauksen hakeminen HTML documentista
  var lempiAine = document.getElementById('Ammattiaineet').value;
  //Onko käyttäjä vastannut lempiaine kysymykseen
  var lempiAineValittu = false;

  //Sivunkehitys kysymyksen vastauksen hakeminen HTML tiedostosta
  var sivunKehitys = document.getElementById('comment').value;
  //Onko käyttäjä kirjoittanut kysymykseen vastausta
  var sivunKehitysTehty = false;

  //Katsoo onko nimen pituus alle sallitun minimimäärän
  if (nimenPituus.length < nimenMinPituus){
    //Jos, on niin se kertoo käyttäjälle siitä
    alert('Nimessä täytyy olla vähintään ' + nimenMinPituus + ' kirjainta.');
    //Valitsee nimi kohdan uudelleen automaattisesti
    document.getElementById('nimi').focus();
  }else{
    //Muuten jos nimi on sallitun pituinen se vaihtaa sen tietovaraston todeksi
    nimiOikein = true;
  }

  //Katsoo onko salasanan pituus alle sallitun minimimäärän
  if (salasan.length < salasananMinPituus){
    //Jos, on niin se kertoo käyttäjälle siitä
    alert('Salasanan täytyy olla vähintään ' + salasananMinPituus + ' merkkiä pitkä.');
    //Valitsee salasana kohdan uudelleen automaattisesti
    document.getElementById('salasana').focus();
  }else{
    //Muuten jos salasana on sallitun pituinen se vaihtaa sen tietovaraston todeksi
    salasanaOikein = true;
  }

  //Katsoo onko konekäyttäjä kysymykseen laitettu vastausta
  for (var i = 0, len = koneKäyttäjä.length; i < len; i++) {
    if (koneKäyttäjä[i].checked){
      koneKäyttäjäTehty = true;
    }
  }
  if (koneKäyttäjäTehty == false){
    //Jos on, niin se kertoo käyttäjälle siitä
    alert('Sinun täytyy valita yksi vaihtoehdoista kysymykseen: Millainen koneen käyttäjä olet?');
  }else{
    //Muuten jos kysymykseen on laitettu vastaus, se vaihtaa sen tietovaraston todeksi
    koneKäyttäjäValittu = true;
  }

  //Katsoo jos sivun tykkäämis kysymykseen ei ole laitettu vastausta
  for (var e = 0, len1 = sivuKysymys.length; e < len1; e++) {
    if (sivuKysymys[e].checked){
      sivuKysymysTehty = true;//
    }
  }
  if (sivuKysymysTehty == false){
    //Jos se on totta, niin se kertoo siitä käyttäjälle
    alert('Sinun täytyy valita vähintään yksi vaihtoehdoista kysymykseen: Mitä mieltä olet sivustani tähän asti?');
  }else{
    //Muuten jos kysymykseen on laitettu vastaus, se vaihtaa sen tietovaraston todeksi
    sivuKysymysValittu = true;
  }

  //Katsoo jos lempiaine kysymykseen ei ole laitettu vastausta
  if (lempiAine == ""){
    //Jos se on totta, niin se kertoo siitä käyttäjälle
    alert('Sinun täytyy valita vähintään yksi vaihtoehdoista kysymykseen: Mikä on lempiaineesi Keudassa?');
  }else{
    //Muuten jos kysymykseen on laitettu vastaus, se vaihtaa sen tietovaraston todeksi
    lempiAineValittu = true;
  }

  //Katsoo onko sivunkehitys kysymykseen vastattu
  if (sivunKehitys == ""){
    //Jos ei ole, se kertoo käyttäjälle siitä
    alert('Sinun täytyy kirjoittaa jotain kysymykseen: Kerro, miten kehittäisit sivujani? (jos et halua kirjoittaa mitään laita "-")');
    document.getElementById('sivunkehitys').focus();
  }else{
    //Muuten jos kysymykseen on laitettu vastaus, se vaihtaa sen tietovaraston todeksi
    sivunKehitysTehty = true;
  }


  //Jos kaikkiin kysymyksiin on vastattu se kertoo että kirjautuminen onnistui
  if (nimiOikein == true && salasanaOikein == true && koneKäyttäjäValittu == true && sivuKysymysValittu == true && lempiAineValittu == true){
    var y = document.getElementById('lähetäNappula');
    y.type = "submit";
  }
  

}
