<?php
require('dbconfig.php');
$pdo = new PDO($DBDNS,$USERNAME,$PASSWORD);
$sql = 'SELECT src FROM `time_pic`';
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);
