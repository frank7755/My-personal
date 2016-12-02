/**
 * Created by Administrator on 2016/11/28.
 */
window.onload = function (){
  var oInputs = document.getElementsByTagName('input');
  var oSpan = document.getElementsByTagName('span')[0];

  oInputs[2].onclick = function (){
    (oInputs[0].value == "" || oInputs[1].value == "") ?
      alert("请输入数字！") :
      oSpan.innerHTML = parseInt(oInputs[0].value) + parseInt(oInputs[1].value)
  }
}