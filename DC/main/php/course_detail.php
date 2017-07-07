<?php

$num = $_GET['num'];
$pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=dc;charset=utf8','root');

$sql = 'SELECT nth,src,detail,newPrice,oldPrice,focus FROM `course_detail` WHERE nth = '.$num;
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);