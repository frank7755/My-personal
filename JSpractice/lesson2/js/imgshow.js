/**
 * Created by Administrator on 2016/11/25.
 */
window.onload = function (){
  var outer = document.getElementById('outer');
  var lis = outer.getElementsByTagName('li');
  var imgs = outer.getElementsByTagName('img');
  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function (){
   /*   for (var n = 0; n < lis.length; n++) {
        lis[n].setAttribute('class', '');
        imgs[n].style.display = 'none';
      }*/
      this.className = 'zindex';
      imgs[this.index].style.display = 'block'
    }
    lis[i].onmouseout=function (){
      this.className='';
      imgs[this.index].style.display='none';
    }
  }
}