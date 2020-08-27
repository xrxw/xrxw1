/* 商品支持规则效果 */
$('.summary_t .support li span').mouseover(function(){
    $(this).siblings('.support_tips').css({
        display:'block'
    })
})
$('.summary_t .support li span').mouseout(function(){
    $(this).siblings('.support_tips').css({display:'none'})
})


//滑动鼠标左侧内容固定，右侧内容向上滚动
$(window).scroll(function(){
   if($(window).scrollTop()>=68&&$(window).scrollTop()<=1150){
       $('.inner_left').css({
           position:'fixed',
           top:68,
           left:160
       })
   }
   else if($(window).scrollTop()>=1150){
    $('.inner_left').css({
        position:'absolute',
        top:"",
        left:0,
        bottom:35
    })
   }else{
    $('.inner_left').css({
        position:'',
    })
   }
})


//接收首页的商品
var data = sessionStorage.getItem('mouse')
var mouse = JSON.parse(data)
if(mouse){
    $('.show img').attr('src',mouse.img);
    $('.show img').css({})
    $('.primary').find('h1').html(mouse.h2);
    // var arr =(mouse.price).split('￥').join('');
    $('.tit2').html(mouse.price)
}


//点击加减数量
var num = Number($('.num').html())
$('.ln').click(function(){
    num++;
    $('.num').html(num)
})
$('.lp').click(function(){
    num--;
    if(num<=0){
        num=1
    }
    $('.num').html(num)
})


//点击加入购物车按钮
$('.btn2').click(function(){
    var $img =$('.show img').attr('src');
    var $id = $img.match(/s\/(\S*)\./)[1];
    var $name = $('.primary').find('h1').html();
    var $price = $('.tit2').html();
    var $nums = $('.num').html();
    console.log($img);
    console.log($id);
    console.log($name);
    console.log($price);
    console.log($nums);
    $.ajax({
        url:'../../php/cart.php',
        dataType:'json',
        data:{
            id:$id,
            name:$name,
            img:$img,
            num:$nums,
            price:$price
        },
        success:function(res){
            if(res.code==1){
                alert('成功');
                location.href='../pages/shopping.html'
            }else{
                alert('失败')
            }
        }
    })
})



/* 左侧图片切换 */
$('.big-box .img_botton .img_list li').mouseover(function(){
    var index = $(this).index()
    $(this).addClass('wug').siblings().removeClass('wug')
    $('.top_box li').eq(index).addClass('show').siblings().removeClass('show')
})


/* 套餐选择 */
$('.li_text').each(function(index,item){
    $(this).click(function(){
        $('.s_img').eq(index).css({
            display:'block',
        }).siblings('.s_img').css({
            display:'none'
        })
        $(this).css({
            borderColor:'red',
            color:'red'
        }).siblings().css({borderColor:'#ddd',color:'black'})
    })
    $('.nnn').click(function(){
        $('.s_img').css({
            display:'none',
        })
    })
})


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

