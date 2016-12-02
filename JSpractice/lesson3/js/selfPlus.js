/**
 * Created by Administrator on 2016/11/28.
 */
window.onload=function (){
  var btns=document.getElementsByTagName('button')[0];
  var num=parseInt(btns.innerText);
  btns.onclick=function (){
    num++;
    btns.innerText=num;
  };
}