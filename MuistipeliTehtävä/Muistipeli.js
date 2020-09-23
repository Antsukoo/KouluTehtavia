function Aloita(){
  alert('Heippa.');

  var kortit = document.createElement('table');
  var kortitTxt = document.createTextNode('Kortit');

  document.getElementById('Taulukko').innerHTML = kortit;
}
