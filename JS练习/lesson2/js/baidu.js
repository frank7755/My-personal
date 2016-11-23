/**
 * Created by Administrator on 2016/11/17.
 */
window.onload=function (){
  const input=document.getElementById('input');
  const close=document.getElementById('close');
  const tipBox=document.getElementById('tip-box');

  input.onclick=function (){
    tipBox.style.display='block'
  };
  close.onclick=function (){
    tipBox.style.display='none'
  }
}