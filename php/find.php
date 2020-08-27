<?php
header('content-type:text/html;charset=utf8');
//获取前端传递的数据

$id = $_REQUEST['id'];
$new = $_REQUEST['newnum'];

//第一步  连接数据库
$conn = mysqli_connect('localhost','root','root','shop');
//第二步执行sql语句
$sql = "SELECT * FROM `cart` WHERE `product_id`='$id'";

$res = mysqli_query($conn,$sql);

$row = mysqli_fetch_assoc($res);

// $num = $row['product_num'];
// //把新数据 赋予
// $num = $new;

$sql = "UPDATE `cart` SET `product_num`='$new' WHERE `product_id`='$id'";

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>