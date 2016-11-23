/**
 * Created by Administrator on 2016/11/17.
 */
window.onload=function (){
  const div=document.getElementById('div');
  const tip=document.getElementById('tip');
  tip.onmouseover=function (){
    div.style.display='block';
  };
  tip.onmouseout=function (){
    div.style.display='none'
  };
};