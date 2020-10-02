//Funktio joka aktivoituu kun käyttäjä painaa paina minua/tarkistus nappia
function tarkista(){

  var muutt[];

  muutt[0] = document.getElementById('etunimi').value;
  muutt[1] = document.getElementById('sukunimi').value;
  muutt[2] = document.getElementById('lahiosoite').value;
  muutt[3] = document.getElementById('postinumero').value;
  muutt[4] = document.getElementById('postitoimipaikka').value;
  muutt[5] = document.getElementById('puhelin').value;
  muutt[6] = document.getElementById('sahko').value;
  muutt[7] = document.getElementById('työA').value;
  muutt[8] = document.getElementById('amNi').value;
  muutt[0] = document.getElementById('synA').value;
  muutt[0] = document.getElementById('ruoVa').value;


  for (var i = 0; i < muutt.length; i++) {
    if (muutt[i] == ''){
      alert("Sinun täytyy täyttää kaikki kentät!");
      return false;
    }
  }
}
