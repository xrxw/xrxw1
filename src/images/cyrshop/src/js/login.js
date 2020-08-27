$(function(){
    $('.vivo-box #submit').click(function(){
        console.log($('.vivo-box #submit'))
        $.ajax({
            method:'post',
            url:'../../php/login.php',
            data:{
                username:$('#un').val(),
                password:$('#pw').val()
            },
            success:function(data){
                console.log(data.code)
                if(data.code==1){
                    localStorage.setItem('un',data.data.uesrname)
                    location.href="./shopping.html"
                }else{
                    alert(data.msg)
                }
                
            },
            dataType:'json',
            eee:function(){
                alert(888)
            }
        })
    })
})


/* $('.vivo-box #submit').click(function(){
    location.href="../pages/shopping.html"
})
 */






