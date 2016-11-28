/**
 * Created by Administrator on 2016/11/16.
 */

window.onload = function (){
  var skinBox = document.getElementById('skin');
  var lis = skinBox.getElementsByTagName('li');
  var active = lis[0];
  var body = document.getElementById('body');
  var content=document.getElementById('content');

  for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function (){
      if (active != this) {
        active.className = '';
        this.className = 'active';
        active = this;
        var color= getStyle(active,'border-color');
        if (this == lis[0]) {
          body.style.backgroundColor = '#db7093';
          content.style.backgroundColor=color;
        }
        if (this == lis[1]) {

          body.style.backgroundColor = '#A3C5A8';
          content.style.backgroundColor=color;
        }
        if (this == lis[2]) {
          body.style.backgroundColor = '#CCCCCC';
          content.style.backgroundColor=color;
        }
      }
    }
  }
}
function getStyle(obj, attr){
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return getComputedStyle(obj, null)[attr];
  }
}