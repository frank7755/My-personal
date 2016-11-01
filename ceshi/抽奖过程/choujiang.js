/**
 * Created by Administrator on 2016/9/3.
 */
var content = ['iPhone', 'iPad', 'Hp打印机', '机械键盘', '谢谢参与', '电风扇', '水杯', '一杯二锅头'];

//由于clearInterval（）需要setInterval的返回值作为参数 ， 这里定义timer变量
var timer = null;
var flag=0;
window.onload = function (){
  var begin = document.getElementById('ui-begin');
  var stop = document.getElementById('ui-stop');


  begin.onclick = playFun;
  stop.onclick= stopMe;
  document.onkeydown=function (e){
    //与鼠标事件一样，通过event访问
    e=event||window.event;
    if(e.keyCode==13&&flag==0){
      playFun();
      flag=1;
    }else if(e.keyCode==13&&flag==1){
      stopMe();
      flag=0;
    }
  }



};

function playFun(){
  var text = document.getElementById('text-cj');
  var begin = document.getElementById('ui-begin');
  //不clearInterval 每次点击按钮，字幕速度越来越快
  clearInterval(timer);
  timer = setInterval(function (){
    var random = Math.floor(content.length * Math.random());
    text.innerHTML = content[random];
  }, 50);
  begin.style.background='#ccc';
  flag=1;
}

 function stopMe(){
   var begin = document.getElementById('ui-begin');
 clearInterval(timer);
   flag=0;
   begin.style.background='cornflowerblue';
 }
