<?php
$num1 = $_GET['num1'];
$pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=dc;charset=utf8','root');

$sql = 'SELECT news,timer FROM `news_detail` WHERE type = '.$num1;
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);