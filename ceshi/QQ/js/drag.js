/**
 * Created by Administrator on 2016/9/2.
 */
// 由于没有getClassName的方法直接取class，此处先定义class方法
function getByClass(clsName, parent){
  //parent为变量，下面不加引号
  var oParent = parent ? document.getElementById(parent) : document;
  var ele = [];
  var element = oParent.getElementsByTagName('*');
  for (var i = 0; i < element.length; i++) {
    if (element[i].className == clsName) {
      ele.push(element[i]);
    }
  }
  //返回值为数组
  return ele;
}
window.onload = drag;

function drag(){
  var oTitle = getByClass('login_logo_webqq', 'loginPanel')[0];
  oTitle.onmousedown = fnDown;
  var loginState=document.getElementById('loginState');
  var loginStatePanel=document.getElementById('loginStatePanel');
  var texts=document.getElementById('login2qq_state_txt');
  var loginStateShow=document.getElementById('loginStateShow');
  var lis=loginStatePanel.getElementsByTagName('li');
  loginState.onclick=function (e){
    e=event||window.event;
    if(e.stopPropagation){
      e.stopPropagation();
    }else {
      e.cancelable=true;
    }
    loginStatePanel.style.display='block';
  };
  for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function (){
      this.style.background="#f60" ;
      this.style.color='#fff';
    };
    lis[i].onmouseout=function (){
      this.style.background="#fff";
      this.style.color='#000';
    };
    lis[i].onclick=function (e){
      e=event||window.event;
      if(e.stopPropagation){
        e.stopPropagation();
      }else {
        e.cancelable=true;
      }
      loginStatePanel.style.display='none';
      texts.innerText=getByClass('stateSelect_text',this.id)[0].innerText;
      loginStateShow.className='';
      loginStateShow.className='login-state-show '+this.id;
    }
  }
  document.onclick=function (){
    loginStatePanel.style.display='none'
  }
}

function fnDown(e){
  e = event || window.event;
  var loginPanel = document.getElementById('loginPanel');
  // 光标按下时光标和面板之间的距离
  var disX = e.clientX - loginPanel.offsetLeft;
  var disY = e.clientY - loginPanel.offsetTop;
  //鼠标移动时，执行函数
  document.onmousemove = function (e){
    e = event || window.event;
    fnMove(e, disX, disY);
  }
  document.onmouseup = function (){
    document.onmousemove = null;
    document.onmousedown = null;
  }
}
function fnMove(e, posX, posY){
  e = event || window.event;
  var loginPanel = document.getElementById('loginPanel');
  //获取鼠标移动时，元素的位置
  var l = e.clientX - posX;
  var h = e.clientY - posY;
  //获取视窗宽度
  var winW = document.documentElement.clientWidth || document.body.clientWidth;
  var winH = document.documentElement.clientHeight || document.body.clientHeight;
  //横轴最大拖动距离=视窗距离-元素宽度
  var maxW = winW - loginPanel.offsetWidth;
  var maxH = winH - loginPanel.offsetHeight;

  //此时元素可以移出视窗外。需要处理
  if (l < 0) {
    l = 0
  } else if (l > maxW) {
    //减去滚动条宽度
    l = maxW - 20;
  }
  if (h < 0) {
    h = 10;
  } else if (h > maxH) {
    h = maxH;
  }
  loginPanel.style.left = l + 'px';
  loginPanel.style.top = h + 'px';
}
