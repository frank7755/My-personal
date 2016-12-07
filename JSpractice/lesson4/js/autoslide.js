/**
 * Created by Frank on 2016/12/5.
 */
window.onload = function (){
  var slideBox = document.getElementById('box');
  var listBox = slideBox.getElementsByTagName('ul')[0];
  var countBox = slideBox.getElementsByTagName('ul')[1];
  var lis = listBox.getElementsByTagName('li');
  var counts = countBox.getElementsByTagName('li');
  var timer = player = null;
  var i = index = 0;

  //切换按钮
  for (i = 0; i < counts.length; i++) {
    counts[i].index = i;
    counts[i].onmouseover = function (){
      show(this.index);
    }
  }

  //鼠标滑过，关闭定时器

  slideBox.onmouseover = function (){
    clearInterval(player);
  };

  //鼠标离开开启自动播放
  slideBox.onmouseout = function (){
    autoplay();
  };

  //自动播放函数
  function autoplay(){
    player = setInterval(function (){
      index++;
      if (index >= counts.length) {
        index = 0;
      }
      show(index)
    }, 2000)
  }

  autoplay();

  //图片显示
  function show(a){
    index = a;
    var alpha = 0;
    for (i = 0; i < counts.length; i++) {
      counts[i].className = "";
      counts[index].className = "current";
      clearInterval(timer);
    }

    for (i = 0; i < lis.length; i++) {
      lis[i].style.opacity = 0;
      lis[i].style.filter = "alpha(opacity=0)";
    }

    timer = setInterval(function (){
      alpha += 2;
      alpha > 100 && (alpha = 100);
      lis[index].style.opacity = alpha / 100;
      lis[index].style.filter = "alpha(opacity = " + alpha + ")";
      alpha == 100 && clearInterval(timer)
    }, 20);
  }
};