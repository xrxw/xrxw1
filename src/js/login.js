
    $('.login').click(function(){
        $.ajax({
            method:'post',
            url:'../../php/login.php',
            data:{
                username:$('#un').val(),
                password:$('#pw').val()
            },
            success:function(data){
                if(data.code==1){
                    //表示成功
                    //把用户名存入本地存储
                    localStorage.setItem('un',data.data.username)
                    //跳转到登陆页面
                    location.href="./shopping.html"
                }else{
                    //表示失败
                    alert(data.msg)
                }
            },
            dataType:'json'
        })
    })