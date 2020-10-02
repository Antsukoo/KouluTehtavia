<?
$etNimi = $GET["etunimi"];
$suNimi = $GET["sukunimi"];
$laOsoite = $GET["lahiosoite"];
$poNumero = $GET["postinumero"];
$poPaikka = $GET["postitoimipaikka"];

$palvelin = "fdb28.awardspace.net";
$kayttaja = "3597341_sqlopiskelu";
$salasana = "AcXz.7447123";
$tietokanta = "3597341_sqlopiskelu";


$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

$talletus = "INSERT INTO Asiakastiedot (Etunimi, Sukunimi, Lahiosoite, Postinumero, Postitoimipaikka, Puhelin, Sähköposti, Tyonantaja, Ammattinimike, Syntymaaika, Erikoisruokavalio) VALUES ('$etNimi','$suNimi','$laOsoite','$poNumero','$poPaikka', '$puNumero', '$saPosti', '$tyAntaja', '$amNimike', '$syAika', '$erValio')";

if (mysqli_connect_error()){
  die("Tietokanta ei vastannut");
}

if (mysql_query($link, $talletus)){
  echo "Uudet tiedot on päivitetty"
}else{
  echo "Virhe: ".$talletus."<br>".mysql_error($link);
}

?>
