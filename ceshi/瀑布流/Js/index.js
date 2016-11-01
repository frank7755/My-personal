/**
 * Created by Frank on 2016/10/17.
 */

window.onload = function (){
  waterfall('main', 'box');
  var dataInt = { data: [{ "src": "24.jpg" }, { "src": "25.jpg" }, { "src": "26.jpg" }, { "src": "27.jpg" }, { "src": "28.jpg" }, { "src": "29.jpg" }, { "src": "30.jpg" }, { "src": "31.jpg" }, { "src": "32.jpg" }, { "src": "33.jpg" }] }
  window.onscroll = function (){
    if (checkSlideDistance) {
      for (var i = 0; i < dataInt.data.length; i++) {
        var oBox = document.getElementById('main');
        var Box = document.createElement("div");
        Box.className = "box";
        oBox.appendChild(Box);
        var pic = document.createElement('div');
        pic.className = "pic";
        Box.appendChild(pic);
        var img = document.createElement('img');
        pic.appendChild(img);
        img.src = "./Image/" + dataInt.data[i].src
      }
      waterfall('main', 'box');
    }
  }
};
function waterfall(parent, box){
  var oParent = document.getElementById(parent);
  var oBoxs = getByClass(oParent, box);
  var offW = document.body.clientWidth ? document.body.clientWidth : document.documentElement.clientWidth;
  var cols = Math.floor(offW / oBoxs[0].offsetWidth);
  var arr = [];
  for (var i = 0; i < oBoxs.length; i++) {
    if (i < cols) {
      // 将图片的高度值添加到数组中
      arr.push(oBoxs[i].offsetHeight);
    } else {
      // 求最小值和最小值的索引
      var minH = Math.min.apply(null, arr);
      var index = getMinhIndex(arr, minH);
      // 计算及定义图片出现的位置
      oParent.style.cssText = 'width:' + oBoxs[0].offsetWidth * cols + 'px;margin:0 auto;';
      oBoxs[i].style.position = 'absolute';
      oBoxs[i].style.left = oBoxs[index].offsetLeft + "px";
      oBoxs[i].style.top = minH + "px";
      // 改变数组值
      arr[index] += oBoxs[i].offsetHeight;
    }
  }
}

function getByClass(parent, clsName){
  var boxArr = new Array(),
    oElements = parent.getElementsByTagName('*');
  for (var i = 0; i < oElements.length; i++) {
    if (oElements[i].className == clsName) {
      boxArr.push(oElements[i]);
    }
  }
  return boxArr;
}

// 求值在数组中的索引,arr接收的是数组，val接收的是判断的值
function getMinhIndex(arr, val){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
}

function checkSlideDistance(){
  var oParent = document.getElementById("main");
  var oBoxs = getByClass(oParent, 'box');
  //取最后一个box元素
  var last = oBoxs[oBoxs.length - 1];
  //最后一个box元素的offsetTop,最后一个元素滚动到一半高度的距离后，开始加载
  var bTop = Math.floor(last.offsetHeight / 2) + last.offsetTop;
  var sTop = document.documentElement.scrollTop || document.body.scrollTop;
  var sTopSum = document.documentElement.clientHeight + sTop || document.body.clientHeight + sTop;
  return (bTop < sTopSum) ? true : false;
}
