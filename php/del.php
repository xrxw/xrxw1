<?php
header("content-type:text/html;charset=utf8");

//需要传递删除的id

$id = $_REQUEST['id'];

//1 连接数据库

$conn = mysqli_connect('localhost','root','root','shop');

//2 书写sql语句
//删除传递id的 语句
$sql = "DELETE FROM `cart` WHERE `product_id`= '$id' ";

$result = mysqli_query($conn,$sql);
if($result){
    echo json_encode(array("code"=>1));
}else{
    echo json_encode(array("code"=>0));
}

?>