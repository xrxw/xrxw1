<?php
header('content-type:text/html;charset=utf8');
//获取前端传递的数据

//第一步  连接数据库

$conn = mysqli_connect('localhost','root','root','shop');

//书写sql语句
$sql = "SELECT * FROM cart";//读取数据库

//执行sql语句
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){	
	$arr = mysqli_fetch_all($result,MYSQL_ASSOC);
    echo json_encode(array("code"=>1,"data"=>$arr
));
}else{	
	echo json_encode(array("code"=>0));
}


?>