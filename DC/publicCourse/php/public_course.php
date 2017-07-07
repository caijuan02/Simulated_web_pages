<?php
$page = ($_GET['page']-1)*6;
$pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=dc;charset=utf8','root');

$sql = "SELECT pic,dt,detail,money,time,address,apply,endApply AS count FROM `public_course` WHERE 1=1 LIMIT $page,6";
$rs = $pdo -> query($sql,PDO::FETCH_OBJ);
$r = $rs -> fetchAll();
echo json_encode($r);