/* 商品支持规则效果 */
$('.summary_t .support li span').mouseover(function(){
    $(this).siblings('.support_tips').css({
        display:'block'
    })
})
$('.summary_t .support li span').mouseout(function(){
    $(this).siblings('.support_tips').css({display:'none'})
})


/* 套餐选择 */
$('.suties .s_list li').click(function(){
    var index=$(this).index();
    $(this).css({
        borderColor:'red',
        color:'red'
    }).siblings().css({borderColor:'#ddd',color:'#ddd'})
    $('.s_img').eq(index).css({
        display:'block'
    })
})


// .siblings().css({display:'none'})




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