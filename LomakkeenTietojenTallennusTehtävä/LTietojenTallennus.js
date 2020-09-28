function Tallenna(){
  var nimiT = document.getElementById('nimi');

  window.localStorage.setItem('name', JSON.stringify(nimiT));
}

function Lataa(){
  if (window.localStorage.getItem('name') != null){
    var tNimi = window.localStorage.getItem('name');
    document.getElementById('nimi').value = tNimi;
  }
}
