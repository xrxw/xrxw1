<?php
header('content-type:text/html;charset=utf8');
//获取前端传递的数据

$id = $_REQUEST['id'];//商品id
$name = $_REQUEST['name'];//商品的name
$img = $_REQUEST['img'];//图片的地址
$price = $_REQUEST['price'];//单价
$num = $_REQUEST['num'];

//创建连接
$conn = mysqli_connect("localhost","root","root","shop");
//根据前端参数插入数据
$sql = "SELECT * FROM `cart` WHERE `product_id`='$id'";
$res = mysqli_query($conn,$sql);
$rows = mysqli_num_rows($res);//mysqli_num_rows方法是统计查询结果有几行
if($rows>0){
    $row = mysqli_fetch_assoc($res);//获取当前行数据,转成php数组
    $num = $row['product_num']+$num;
    $sql = "UPDATE `cart` SET `product_num`='$num' WHERE `product_id`='$id' ";
}else{
    $sql = "INSERT INTO `cart` (`product_id`,`product_img`,`product_name`,`product_num`,`product_price`) VALUES ('$id','$img','$name','$num','$price')";
}
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
