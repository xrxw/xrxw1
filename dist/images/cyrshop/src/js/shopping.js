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