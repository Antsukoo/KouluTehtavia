<?
$etNimi = $_GET["etunimiN"];
$suNimi = $_GET["sukunimiN"];
$laOsoite = $_GET["lahiosoiteN"];
$poNumero = $_GET["postinumeroN"];
$poPaikka = $_GET["postitoimipaikkaN"];
$puNumero = $_GET["puhelinN"];
$saPosti = $_GET["sahkoN"];
$tyAntaja = $_GET["tyoAN"];
$amNimike = $_GET["amNiN"];
$syAika = date('Y-m-d', strtotime($_GET['synAN']));
$erValio = $_GET["ruoVaN"];
$liTietoa = $_GET["lisaN"];



$palvelin = "fdb28.awardspace.net";
$kayttaja = "3597341_sqlopiskelu";
$salasana = "AcXz.7447123";
$tietokanta = "3597341_sqlopiskelu";




$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

if (mysqli_connect_error()){
  die("Tietokanta ei vastannut");
}

$talletus = "INSERT INTO Asiakastiedot (Sukunimi, Etunimi, Lahiosoite, Postinumero, Postitoimipaikka, Puhelin, Sahkoposti, Tyonantaja, Ammattinimike, Syntymaaika, Erikoisruokavalio, Lisatietoa) VALUES ('$suNimi', '$etNimi', '$laOsoite','$poNumero','$poPaikka', '$puNumero', '$saPosti', '$tyAntaja', '$amNimike', '$syAika', '$erValio', '$liTietoa')";



if (mysqli_query($link, $talletus))
{
  echo "Uudet tiedot on päivitetty";
}
else
{
  echo "Virhe:".$talletus."<br>".mysqli_error($link);
}


$kysely = 'SELECT * FROM Asiakastiedot';

$vastaus = mysqli_query($link,$kysely);

?>



<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Tiedon haku</title>
  </head>
  <body>
    <table border="1">
      <tr>
         <th colspan="6"><h2>Käyttäjät</h2></th>
      </tr>
      <tr>
        <th>Etunimi</th>
        <th>Sukunimi</th>
        <th>Lähiosoite</th>
        <th>Postinumero</th>
        <th>Postitoimipaikka</th>
        <th>Puhelinnumero</th>
        <th>Sähköpostiosoite</th>
        <th>Työnantaja</th>
        <th>Ammattinimike</th>
        <th>Syntymäaika</th>
        <th>Erikoisruokavalio</th>
        <th>Lisätietoa</th>
      </tr>
      <?php
        while($rivit=mysqli_fetch_assoc($vastaus))
        {
      ?>
      <tr>
        <td><?php echo $rivit['Etunimi'] ?></td>
        <td><?php echo $rivit['Sukunimi'] ?></td>
        <td><?php echo $rivit['Lahiosoite'] ?></td>
        <td><?php echo $rivit['Postinumero'] ?></td>
        <td><?php echo $rivit['Postitoimipaikka'] ?></td>
        <td><?php echo $rivit['Puhelin'] ?></td>
        <td><?php echo $rivit['Sahkoposti'] ?></td>
        <td><?php echo $rivit['Tyonantaja'] ?></td>
        <td><?php echo $rivit['Ammattinimike'] ?></td>
        <td><?php echo $rivit['Syntymaaika'] ?></td>
        <td><?php echo $rivit['Erikoisruokavalio'] ?></td>
        <td><?php echo $rivit['Lisatietoa']?></td>
      </tr>
      <?php
      }
      ?>
    </table>
  </body>
</html>
