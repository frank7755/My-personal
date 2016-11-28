/**
 * Created by Administrator on 2016/11/24.
 */
window.onload=function (){
  var btn=document.getElementById('btn');
  var win=document.getElementById('win');
  var overlay=document.getElementById('overlay');
  var close=document.getElementById('close');
  btn.onclick=function (){
    win.style.display='block';
    overlay.style.display='block';
  }
  close.onclick=function (){
    win.style.display='none';
    overlay.style.display='none';
  }
}