<?php
require('dbconfig.php');
$pdo = new PDO($DBDNS,$USERNAME,$PASSWORD);
$num = $_GET['num'];
$sql =
    'SELECT
      spe_name.spe,
      species.spe_name,
      species.spe_img,
      species.spe_num
    FROM type,spe_name,species WHERE type.id = spe_name.type AND spe_name.id = species.spe_num AND type.id = "'.$num.'"';
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);

