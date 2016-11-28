/**
 * Created by Administrator on 2016/11/23.
 */
window.onload=function (){
  var main=document.getElementById('main');
  var divs=main.getElementsByTagName('div');
  for (var i=0;i<divs.length;i++){
    divs[i].onclick=function (){
      console.log(this.innerHTML);
    }
  }
}