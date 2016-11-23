window.onload=function (){
  var box=document.getElementById('box');
  var obox=box.getElementsByTagName('div');
  var btn=document.getElementsByTagName('button');
  btn[0].onclick=function (){
    for (var i=0;i<obox.length;i++){
      obox[i].style.background='red';
    }
  }
}