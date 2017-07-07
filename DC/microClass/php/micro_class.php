<?php
$page = ($_GET['page']-1)*5;
$pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=dc;charset=utf8','root');

$sql = "SELECT pic,dt,detail,oldPrice,newPrice AS count FROM `micro_class` WHERE 1=1 LIMIT $page,5";
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);