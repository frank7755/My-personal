/**
 * Created by Administrator on 2016/11/16.
 */
window.onload = function (){
  var change = document.getElementById('change-div');
  var oheight = getStyle(change, 'height');
  var oWidth = getStyle(change, 'width');
  var oColor = getStyle(change, 'background-color');
  var changeWidth = getByClass('btn-box', 'change-width')[0];
  var changeHeight = getByClass('btn-box', 'change-height')[0];
  var changeColor = getByClass('btn-box', 'change-color')[0];
  var Hide = getByClass('btn-box', 'hide')[0];
  var Reset = getByClass('btn-box', 'reset')[0];


  changeWidth.onclick = function (){
    changeAttr(change,'width','400px');
  };
  changeHeight.onclick = function (){
    changeAttr(change,'height','400px');
  };
  changeColor.onclick=function (){
    changeAttr(change,'background','red');
  };
  Hide.onclick=function (){
    changeAttr(change,'display','none');
  };
  Reset.onclick=function (){
    changeAttr(change,'height',oheight);
    changeAttr(change,'width',oWidth);
    changeAttr(change,'background',oColor);
    changeAttr(change,'display','block')
  }
};

function changeAttr(obj,attr,target){
  obj.style[attr]=target;
}


function getStyle(obj, attr){
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj, null)[attr];
  }
}

function getByClass(parent, className){
  var oparent = parent ? document.getElementById(parent) : document;
  var elem = [];
  var elements = oparent.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].className == className) {
      elem.push(elements[i]);
    }
  }
  return elem;
}