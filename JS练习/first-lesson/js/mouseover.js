/**
 * Created by Administrator on 2016/11/17.
 */
window.onload=function (){
  var div=document.getElementById('div');
  div.onmouseover=function (){
       div.className='active'
  }
  div.onmouseout=function (){
    div.className='';
  }
}
