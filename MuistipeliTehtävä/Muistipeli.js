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
