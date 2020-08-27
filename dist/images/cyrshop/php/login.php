<?php
//1.接收前端信息
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

//2 连接数据库
$conn = mysqli_connect('localhost','root','root','music');

//3书写sql语句
$sql = "SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";

//4执行sql语句
$result = mysqli_query($conn,$sql);

//5解析查询结果
$data = mysqli_fetch_assoc($result);
echo $data;

if($data){
    $arr =array('code'=>1,'data'=>array('username'=>$username));
}else{
    $arr = array('code'=>0,'msg'=>'用户名或密码错误');
}

//6 返回json格式的数据
echo json_encode($arr)

//使用postman测试接口
?>