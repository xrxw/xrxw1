"use strict";$(".summary_t .support li span").mouseover(function(){$(this).siblings(".support_tips").css({display:"block"})}),$(".summary_t .support li span").mouseout(function(){$(this).siblings(".support_tips").css({display:"none"})}),$(window).scroll(function(){68<=$(window).scrollTop()&&$(window).scrollTop()<=1150?$(".inner_left").css({position:"fixed",top:68,left:160}):1150<=$(window).scrollTop()?$(".inner_left").css({position:"absolute",top:"",left:0,bottom:35}):$(".inner_left").css({position:""})});var data=sessionStorage.getItem("mouse"),mouse=JSON.parse(data);mouse&&($(".show img").attr("src",mouse.img),$(".show img").css({}),$(".primary").find("h1").html(mouse.h2),$(".tit2").html(mouse.price));var num=Number($(".num").html());$(".ln").click(function(){num++,$(".num").html(num)}),$(".lp").click(function(){--num<=0&&(num=1),$(".num").html(num)}),$(".btn2").click(function(){var o=$(".show img").attr("src"),s=o.match(/s\/(\S*)\./)[1],i=$(".primary").find("h1").html(),n=$(".tit2").html(),t=$(".num").html();console.log(o),console.log(s),console.log(i),console.log(n),console.log(t),$.ajax({url:"../../php/cart.php",dataType:"json",data:{id:s,name:i,img:o,num:t,price:n},success:function(o){1==o.code?(alert("成功"),location.href="../pages/shopping.html"):alert("失败")}})}),$(".big-box .img_botton .img_list li").mouseover(function(){var o=$(this).index();$(this).addClass("wug").siblings().removeClass("wug"),$(".top_box li").eq(o).addClass("show").siblings().removeClass("show")}),$(".li_text").each(function(o,s){$(this).click(function(){$(".s_img").eq(o).css({display:"block"}).siblings(".s_img").css({display:"none"}),$(this).css({borderColor:"red",color:"red"}).siblings().css({borderColor:"#ddd",color:"black"})}),$(".nnn").click(function(){$(".s_img").css({display:"none"})})}),$(function(){$(".foot dl dd a").mouseover(function(){$(this).css({color:"blue"}),$(".foot dl dd a").mouseout(function(){$(this).css({color:"black"})})})}),$(function(){$(".foot_r a").mouseover(function(){$(this).css({color:"blue"}).children().css({color:"blue"}),$(".foot_r a").mouseout(function(){$(this).css({color:"black"}).children().css({color:"black"})})})}),$(function(){$(".foot_r i").mouseover(function(){$(this).css({color:"blue"}).children("img").css({display:"block"}),$(".foot_r i").mouseout(function(){$(this).css({color:"black"}).children("img").css({display:"none"})})})}),$(function(){$(".back ul li .logo").mouseover(function(){$(this).css({background:"gray"}).prev(".tit").css({display:"block"}),$(".back ul li .logo").mouseout(function(){$(this).css({background:"white"}).prev(".tit").css({display:"none"})})})}),$(".back ul li .gotop").click(function(){$("html").animate({scrollTop:0},1e3)}),$(function(){$(".nav .med .list li").mouseover(function(){$(".top_list").stop().animate({marginTop:0},1e3).css({display:"block"}).parent().parent().parent().parent().css({background:"white"})}),$(".list li").mouseout(function(){$(".nav").css({backgroundColor:"#f7f7f7"}),$(".top_list").css({display:"none"})})});