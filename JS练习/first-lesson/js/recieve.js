/**
 * Created by Administrator on 2016/11/17.
 */
window.onload=function (){
  const inputs=document.getElementsByTagName('input');
  const arr=[];
  var aaa=[];
  for (var i=0;i<inputs.length;i++) {
    if (inputs[i].getAttribute('type') == 'button') {
      aaa.push(inputs[i]);
    }
    else {
       arr.push(inputs[i])
    }
  }

    aaa[0].onclick=function (){
      for(var j=0;j<arr.length;j++){
        alert(arr[j].value);
      }
    }

};