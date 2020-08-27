
/* 轮播图代码 */

(function(){
  function Slider(option) {
    this.wrap = option.wrap;
    this.imgList = option.imgList;
    this.imgNum = this.imgList.length;
    this.width = option.width || $(this.wrap).width();
    this.height = option.height || $(this.wrap).height();
    this.isAuto = option.isAuto || true;
    this.moveTime = option.moveTime;
    this.direction = option.direction || "right";
    this.btnWidth = option.btnWidth;
    this.btnHeight = option.btnHeight;
    this.spanWidth = option.spanWidth;
    this.spanHeight = option.spanHeight;
    this.spanColor = option.spanColor;
    this.activeSpanColor = option.activeSpanColor;
    this.btnBackgroundColor = option.btnBackgroundColor;
    this.spanRadius = option.spanRadius;
    this.spanMargin = option.spanMargin;
    this.flag = false;
    this.nowIndex = 0;
    this.createDom();
    this.initStyle();
    this.bindEvent();
    if (this.isAuto) {
      this.autoMove();
    }
  }
  Slider.prototype.createDom = function () {
    var oUl = $('<ul class="imgList"></ul>');
    var Spot = $('<div class="spot"></div>');
    this.imgList.forEach(function (item) {
      var oLi =
        '<li><a href=" ' +
        item.a +
        ' "><img src=" ' +
        item.img +
        ' "></a></li>';
      oUl.append(oLi);
      var span = "<span></span>";
      Spot.append(span);
    });
    var leftBtn = $('<div class="left-btn">&lt</div>');
    var rightBtn = $('<div class="right-btn">&gt</div>');
    this.wrap.append(oUl).append(leftBtn).append(rightBtn).append(Spot);
  };
  Slider.prototype.initStyle = function () {
    $("*", this.wrap).css({ margin: 0, padding: 0, listStyle: "none" });
    $(this.wrap).css({ overflow: "hidden", position: "relative" });
    $(".imgList", this.wrap).css({
      width: this.width,
      height: this.height,
      position: "relative",
    });
    $(".imgList li", this.wrap)
      .css({
        width: this.width,
        height: this.height,
        position: "absolute",
        left: 0,
        top: 0,
        display: "none",
      })
      .eq(this.nowIndex)
      .css({ display: "block" });
    $(".imgList li a, .imgList li a img", this.wrap).css({
      display: "inline-block",
      width: this.width,
      height: this.height,
    });
    $(".left-btn, .right-btn", this.wrap).css({
      width: this.btnWidth,
      height: this.btnHeight,
      backgroundColor: this.btnBackgroundColor,
      color: "#fff",
      textAlign: "center",
      lineHeight: this.btnHeight + "px",
      position: "absolute",
      top: "50%",
    //   left: 20 + 'px',
      marginTop: -this.btnHeight / 2,
      cursor: "pointer",
    });
    $(".right-btn", this.wrap).css({ right: 0 });
    $(".spot", this.wrap).css({
      height: this.spanHeight + this.spanMargin * 2,
      position: "absolute",
      left: "50%",
      marginLeft: (-this.imgNum * (this.spanWidth + this.spanMargin * 2)) / 2,
      bottom: 10,
    });
    $(".spot span", this.wrap)
      .css({
        display: "inline-block",
        width: this.spanWidth,
        height: this.spanHeight,
        margin: this.spanMargin,
        backgroundColor: this.spanColor,
        borderRadius: this.spanRadius,
        cursor: "pointer",
      })
      .eq(this.nowIndex)
      .css({ backgroundColor: this.activeSpanColor });
  };
  Slider.prototype.bindEvent = function () {
    var self = this;
    $(".left-btn", this.wrap).click(function () {
      self.move("prev");
    });
    $(".right-btn", this.wrap).click(function () {
      self.move("next");
    });
    $(".spot span").click(function (e) {
      self.move($(this).index());
    });
    $(this.wrap)
      .mouseenter(function () {
        clearInterval(self.time);
      })
      .mouseleave(function () {
        self.autoMove();
      });
  };
  Slider.prototype.move = function (dir) {
    if (this.flag) {
      return false;
    }
    this.flag = true;
    switch (dir) {
      case "prev":
        if (this.nowIndex === 0) {
          this.nowIndex = this.imgNum - 1;
        } else {
          this.nowIndex--;
        }
        break;
      case "next":
        if (this.nowIndex === this.imgNum - 1) {
          this.nowIndex = 0;
        } else {
          this.nowIndex++;
        }
        break;
      default:
        this.nowIndex = dir;
        break;
    }
    var self = this;
    $(".imgList li", this.wrap)
      .fadeOut()
      .eq(this.nowIndex)
      .fadeIn(function () {
        self.flag = false;
      });
    $(".spot  span", this.wrap)
      .css({ backgroundColor: this.spanColor })
      .eq(this.nowIndex % this.imgNum)
      .css({ backgroundColor: this.activeSpanColor });
  };
  Slider.prototype.autoMove = function () {
    var self = this;
    this.time = setInterval(function () {
      if (this.direction == "left") {
        $(".left-btn", this.wrap).trigger("click");
      } else {
        $(".right-btn", this.wrap).trigger("click");
      }
    }, self.moveTime);
  };
  $.fn.extend({
    slider: function (option) {
      option.wrap = this;
      new Slider(option);
    },
  });
})();


$('.banner').slider({
  imgList: [
      {
          img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20200814/20200814161922156753_original.jpg",
          a: '#',
      },
      {
          img: "https://shopstatic.vivo.com.cn/vivoshop/commodity/20200622/20200622200338137542_original.png",
          a: '#',
      },
      {
          img: "https://shopstatic.vivo.com.cn/vivoshop/commodity/20200804/20200804114115170446_original.jpg",
          a: '#',
      },
      {
          img: "https://shopstatic.vivo.com.cn/vivoshop/commodity/20200811/20200811140517130496_original.jpg",
          a: '#',
      },{
          img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20200623/20200623214238648110_original.png",
          a:'#',
      }
  ],
  //图片的列表
  width:'100%', //图片的宽
  height:'100%', //图片的高
  isAuto: true, //是否自动轮播
  moveTime: 4000, //运动时间
  direction: 'right', //轮播的方向
  /* btnWidth: 30, //按钮的宽
  btnHeight: 30, //按钮的高 */
  spanWidth: 30, //span按钮的宽
  spanHeight: 2, //span按钮的高
  spanColor: '#003150', //span按钮的颜色
  activeSpanColor: '#fff', //选中的span颜色
  btnBackgroundColor: 'rgba(0, 0, 0, 0.5)', //两侧按钮的颜色
  // spanRadius: '50%', //span按钮的圆角程度
  spanMargin: 6, //span之间的距离
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
$(function(){
    $('.back ul li .gotop').click(function(){
      $('html').animate({
        scrollTop:0
    },1000)
  })
})



/* 抢购图片切换 */
/* var liW = $('.ul_1 li').width()
var len = $('.ul_1 li').length
var ulW =len*liW
$('.ul_1').css('width',ulW)
var index = 0
$('.gogo .pp1').click(function(){
    index--
    if(index==-1){
      index = len-1
    }
    showLi(index)
})
$('.gogo .pp2').click(function(){
  index++
  if(index ==len){
    index =0
  }
  showLi(index)
})
function showLi(index){
  var move = -index*liW
  $('.ul_1').stop().animate({'left':move},300)
}
 */

$('.gogo .pp1').click(function(){
  $('.ul_1').stop().animate({
    left:-1200
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

     
      
/* banner图上面的二级菜单 */
$(function(){
  $('.nav .med .list_l .list_left li').mouseover(function(){
    $(this).css({
      background:"white"
    }).children('.list_center').show()
  })
  $('.nav .med .list_l .list_left li').mouseout(function(){
    $(this).css({
      background:''
    }).children('.list_center').hide()
  })
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



