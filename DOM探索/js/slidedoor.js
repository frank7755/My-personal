/**
 * Created by Administrator on 2016/8/17.
 */
window.onload = function (){
  //容器对象
  var box = document.getElementById('container');
  //图片对象
  var imgbox = box.getElementsByTagName('img');

  //单张图片的宽度
  var imgWidth = imgbox[0].offsetWidth;

  //设置图片露出的宽度

  var exposeWidth = 200;
  //获取容器的宽度
  var boxWidth = imgWidth + (imgbox.length - 1) * exposeWidth;
  //设置容器的宽度
  box.style.width = boxWidth + 'px';

  //设置img初始位置
  function setImg(){
    for (var i = 1; i < imgbox.length; i++) {
      imgbox[i].style.left = imgWidth + exposeWidth * (i-1)+'px';
    }
  }
  setImg();

//计算每道门应该移动的距离
  var tranlate=  imgWidth-exposeWidth;

  //为每道门设置事件

      for (var i=0;i<imgbox.length;i++){
        (function (i){
          imgbox[i].onmouseover=function (){
            setImg();
            for (var j=1;j<=i;j++){
              //imgbox[j].style.left返回值为字符串,所以必须用parseInt处理
              imgbox[j].style.left=parseInt(imgbox[j].style.left,10)-tranlate +'px';
              console.log(i);
              console.log(j);
            }
          }
        })(i)
      }
console.log(box.offsetWidth);

};