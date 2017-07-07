<?php
require('dbconfig.php');
$pdo = new PDO($DBDNS,$USERNAME,$PASSWORD);
$sql = 'SELECT * FROM `tuijian`';
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);

