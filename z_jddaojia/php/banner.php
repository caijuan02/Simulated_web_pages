<?php
require('dbconfig.php');
$pdo = new PDO($DBDNS,$USERNAME,$PASSWORD);
$sql = 'SELECT src FROM `banner`';
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);
