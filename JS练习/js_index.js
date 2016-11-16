/**
 * Created by Administrator on 2016/11/11.
 */
window.onload = function (){

  var content = document.getElementById('content');
  var child = content.childNodes;
  var arr = [];
  var spans = [];
  for (var i = 0; i < child.length; i++) {
    if (child[i].nodeName != '#text') {
      arr.push(child[i]);
      spans.push(child[i].getElementsByTagName('span')[0]);
    }
  }

  var active = null;

  for (var j = 0; j < arr.length; j++) {

    arr[j].onclick = function (){
      var obj = this.getElementsByTagName('ul')[0];
      var liHeight = parseInt(getStyle(obj.getElementsByTagName('li')[0], 'height'));
      var nearGoal = (obj.getElementsByTagName('li').length - 1) * liHeight;
      var farGoal = (obj.getElementsByTagName('li').length + 1) * liHeight + parseInt(obj.getElementsByTagName('li').length);
      var goal = obj.getElementsByTagName('li').length * liHeight + parseInt(obj.getElementsByTagName('li').length);
      var m1 = new Slider(obj);
      var m2 = new Slider(active);

      if (active) {
        if (active == obj) {
          m1.up(0, function (){
            active = null;
          })
        }
        else {
          m2.up(0, function (){
            m1.down(farGoal, function (){
              m1.up(nearGoal, function (){
                m1.down(goal, function (){
                  active = obj;
                })
              });
            });
          });
        }
      } else {
        m1.down(farGoal, function (){
          m1.up(nearGoal, function (){
            m1.down(goal, function (){
              active = obj;
            })
          });
        });
      }
    };
    spans[j].innerText = '  (' + arr[j].getElementsByTagName('li').length + ")"
  }
};

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

function Slider(element){
  this.timer = null;
  this.element = element;
}

Slider.prototype = {
  up: function (target, fn){
    var context = this;
    var element = context.element;

    clearInterval(context.timer);

    context.timer = setInterval(function (){

      var height = parseInt(getStyle(element, 'height'));

      if (height - target >= 30) {
        element.style.height = -30 + height + 'px';
      }
      else {
        element.style.height = target + 'px';
        if (fn) {
          clearInterval(context.timer);
          fn();
        }
      }
    }, 30)
  },
  down: function (target, fn){
    var context = this;
    var element = context.element;

    clearInterval(context.timer);

    context.timer = setInterval(function (){
      var height = parseInt(getStyle(element, 'height'));
      if (height < target) {
        element.style.height = 30 + height + 'px';
        if (fn && element.style.height == target + 'px') {
          clearInterval(context.timer);
          fn();
        }
      }
      else {
        element.style.height = target + 'px';
        if (fn) {
          clearInterval(context.timer);
          fn();
        }
      }
    }, 30);
  }
};



