<?php

$page = ($_GET['page'] - 1 ) *12;
$pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=dc;charset=utf8','root');

$sql = "SELECT src,detail,newPrice,oldPrice,focus FROM `online_course` WHERE 1=1 LIMIT $page,12";
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);