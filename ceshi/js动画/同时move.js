/**
 * Created by Administrator on 2016/9/9.
 */
// var timer=null;
function startMove(obj, json, fn){

  clearInterval(obj.timer);
  obj.timer = setInterval(function (){
      // flag 应该放在定时器里面，这样最后一次循环，flag被设置为True;
      var flag = true;
      for (var attr in json) {
        var icur = 0;
        //透明度与其他属性有区别，需要判断
        if (attr == 'opacity') {
          //由于parseFloat是浮点数，与100相乘后可能产生0.312123132132的情况，所以对parseFloat进行四舍五入，使用Math.round()
          icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        }
        else {
          icur = parseInt(getStyle(obj, attr))
        }

        //算速度
        var speed = (json[attr] - icur) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (icur != json[attr]) {
          flag = false;

          if (attr == 'opacity') {
            obj.style.opacity = (icur + speed) / 100;
            obj.style.filter = 'alpha(opacity=' + (icur + speed) + ')';
          } else {
            obj.style[attr] = icur + speed + 'px';
          }
          if (attr == 'background') {
            obj.style[attr] = json[attr];
          }
        }
        console.log(flag)
        if (flag) {
          console.log(flag);
          clearInterval(obj.timer);
          //第一个运动停止时，判断是否存在fn
          if (fn) {
            fn();
          }
        }
      }

    }
    ,
    30
  )
}

function getStyle(obj, attr){
  //针对IE浏览器
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj, null)[attr];
  }
}
