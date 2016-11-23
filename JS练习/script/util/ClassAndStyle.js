/**
 * Created by Administrator on 2016/11/22.
 */
define(function (){
  function getByClass(parent, className){
    var oparent = document.getElementById(parent);
    var elem = [];
    var elements = oparent.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].className == className) {
        elem.push(elements[i]);
      }
    }
    return elem;
  }

  function getStyle(obj, attr){
    //针对IE浏览器
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    } else {
      return getComputedStyle(obj, null)[attr];
    }
  }
  return{
    getByClass:getByClass,
    getStyle:getStyle
  };
});
