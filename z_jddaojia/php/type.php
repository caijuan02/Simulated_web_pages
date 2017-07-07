<?php
require('dbconfig.php');
$pdo = new PDO($DBDNS,$USERNAME,$PASSWORD);
$num = $_GET['num'];
$sql =
    'SELECT
      type.type,
      spe_name.spe
    FROM type,spe_name WHERE type.id = spe_name.type AND type.id = "'.$num.'"';
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);




//SELECT * FROM type,spe_name,species1 WHERE type.id = spe_name.type AND spe_name.id = species1.spe
