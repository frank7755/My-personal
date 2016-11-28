/**
 * Created by Administrator on 2016/11/25.
 */
'use strict';
window.onload=function (){
  var box=document.getElementById('box');
  var lis=box.getElementsByTagName('li');
  var imgs=box.getElementsByTagName('img');
  var oDiv=box.getElementsByTagName('div');
  for(var i=1;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function (){
      var src='img/big_'+this.index+'.jpg';
      imgs[0].setAttribute('src',src);
      oDiv[0].style.display = "block";
      //imgObject.complete 判断如果图片已经存在于浏览器缓存，则直接从缓存中读取图片
      imgs[0].complete?oDiv[0].style.display='none':imgs[0].onload=function (){
        oDiv[0].style.display='none';
      }
    }
  }
}