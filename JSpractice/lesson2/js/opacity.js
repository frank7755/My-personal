/**
 * Created by Administrator on 2016/11/24.
 */
window.onload = function (){
  var imgLists = document.getElementById('imgList');
  var lis = imgLists.getElementsByTagName('li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function (){
      this.setAttribute('class', 'active')
    };
    lis[i].onmouseout = function (){
      this.removeAttribute('class');
    }
  }
};