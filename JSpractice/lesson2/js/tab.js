/**
 * Created by Administrator on 2016/11/24.
 */
window.onload = function (){
  var tabBox = document.getElementById('tab');
  var lis = tabBox.getElementsByTagName('li');
  var content = document.getElementById('content');
  var uls = content.getElementsByTagName('ul');

  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function (){
     for(var n=0;n<lis.length;n++){
       lis[n].className='';
     }
      this.className='active';
      for(var n=0;n<lis.length;n++){
       uls[n].style.display='none';
     }
     uls[this.index].style.display='block'
    }
  }
};