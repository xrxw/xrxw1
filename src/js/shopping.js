
/* 底部效果 */
$(function(){
    $('.foot dl dd a').mouseover(function(){
        $(this).css({
            color:'blue'
        })
        $('.foot dl dd a').mouseout(function(){
            $(this).css({
                color:'black'
            })
        })
    })
 })


/* 底部效果 */
$(function(){
$('.foot_r a').mouseover(function(){
    $(this).css({
        color:'blue'
    }).children().css({
        color:'blue'
    })
    $('.foot_r a').mouseout(function(){
        $(this).css({
            color:'black'
        }).children().css({
            color:'black'
        })
    })
})
})


/* 弹出vivo二维码 */
$(function(){
    $('.foot_r i').mouseover(function(){
        $(this).css({
            color:'blue'
        }).children('img').css({
            display:'block'
        })
        $('.foot_r i').mouseout(function(){
            $(this).css({
                color:'black'
            }).children('img').css({
                display:'none'
            })
        })
    })
})


/* 点击4个按钮弹出左侧文字显示 */
$(function(){
    $('.back ul li .logo').mouseover(function(){
      $(this).css({
          background:'gray',
      }).prev('.tit').css({
          display:'block'
      })
  
      $('.back ul li .logo').mouseout(function(){
          $(this).css({
              background:'white',
          }).prev('.tit').css({
              display:'none'
          })
        })
     })
  })


/* 点击按钮回到顶部 */
    $('.back ul li .gotop').click(function(){
      $('html').animate({
        scrollTop:0
    },1000)
  })



  /* nav上面的二级菜单 */
$(function(){
    $('.nav .med .list li').mouseover(function(){
      $('.top_list').stop().animate({
        marginTop:0
      },1000).css({
        display:'block'
      }).parent().parent().parent().parent().css({
        background:'white'
      })
    })
    $('.list li').mouseout(function(){
      $('.nav').css({
        backgroundColor:'#f7f7f7'
      })
      $('.top_list').css({
        display:'none'
      })
    })
 })


 
 
 //获取
 $(function(){
    function showBuy(){
        console.log(111)
     $.ajax({
         url:'../../php/buy1.php',
         dataType:'json',
         success:function(res){
            $.each(res.data,function(index,item){
                var mo = item.product_price.split('￥').join('');
                $('.full').append(`
                <div class="like">
                <input type="checkbox" name="" id="inp2">
                <img src=${item.product_img}>
                <p class="like_img">${item.product_name}：商品编号：<span class='idss'>${item.product_id}</span></p>
                <p class="like_p">${item.product_price}</p>
                <div class="cood">
                    <input type="button" value="-" class="c_inp1">
                    <p class="c_inp2">${item.product_num}</p>
                    <input type="button" value="+" class="c_inp3">
                </div>
                <p class="money">￥${Number(mo)*item.product_num}</p>
                <p class="del">X</p>
            </div>
            `)
            })
         }
     })
    };
    showBuy()


    var timer= null;
    $('.full').on('click','.c_inp3',function(){
        clearTimeout(timer)
        var nums = $(this).parent().find('.c_inp2').html()
        nums = Number(nums)+1;
        var newnum = $(this).parent().parent().find('.like_p').html();
        newnum = Number(newnum.split('￥').join(''));
        $(this).parent().parent().find('.money').html(`￥${nums*newnum}`)
        $(this).parent().find('.c_inp2').html(nums);
        clearTimeout(timer);
        var id =$(this).parent().parent().find('.idss').html();
        
        timer = setTimeout(function(){
            $.ajax({
                url:'../../php/find.php',
                data:{
                    id:id,
                    newnum:nums
                },
                dataType:'json',
                success:function(res){
                    if(res.code){
                        alert('商品添加成功')
                    }else{
                        alert('商品添加失败')
                    }
                }
            })
        },3000)
    })
    $('.full').on('click','.c_inp1',function(){
        var nums = $(this).parent().find('.c_inp2').html()
        nums = Number(nums)-1;
        if(nums<=0){
            nums=1;
        }
        var newnum = $(this).parent().parent().find('.like_p').html();
        newnum = Number(newnum.split('￥').join(''));
        $(this).parent().parent().find('.money').html(`￥${nums*newnum}`)
        $(this).parent().find('.c_inp2').html(nums);
        clearTimeout(timer);
        var id =$(this).parent().parent().find('.idss').html();
        clearTimeout(timer)
        timer = setTimeout(function(){
            $.ajax({
                url:'../../php/find.php',
                data:{
                    id:id,
                    newnum:nums
                },
                dataType:'json',
                success:function(res){
                    if(res.code){
                        alert('商品删除成功')
                    }else{
                        alert('商品删除失败')
                    }
                }
            })
        },3000)
    })
    
    $('.full').on('click','.del',function(){
        var isYes = confirm('是否要删除');
        if(isYes){
            var id = $(this).parent().find('.idss').html();
            $(this).parent().remove();
            $.ajax({
                url:'../../php/del.php',
                data:{
                    id:id
                },
                dataType:'json',
                success:function(res){
                    if(res.code){
                        alert('商品删除成功')
                    }
                    else{
                        alert('商品删除失败')
                    }
                }
            })
        }
    })
 })