/**
 * Created by Administrator on 2016/4/7.
 */

$(document).ready(function(){
  $(".box img").hide();
  $(".box img").eq(0).show();

  var n=0;
  var timer = setInterval(change,3000)
  function change(){
    if(n<4){
      n=n+1} else{n=0}
    $("ul li").removeClass("currentli");
    $("ul li").eq(n).addClass("currentli");
    $(".box>img").hide();
    $(".box>img").eq(n).show(1000);
  }

  $(".banner").hover(function(){
    clearInterval(timer)
  },function(){
    var timer=setInterval(change,3000)
  });

  $("ul li").click(function(){
    n = $("ul li").index(this);
    $("ul li").removeClass("currentli");
    $("ul li").eq(n).addClass("currentli");
    $(".box>img").hide();
    $(".box>img").eq(n).show(1000);
  })
});


