/**
 * Created by Administrator on 2016/11/25.
 */
window.onload = function (){
  var checkAll = document.getElementById('checkAll');
  var inputs = document.getElementsByTagName('dd')[0].getElementsByTagName('input');
  var oA = document.getElementsByTagName('a')[0];
  var oLabel = document.getElementsByTagName("label")[0];
  //判断是否全选
  var isCheckAll = function (){
    for (var i = 0, n = 1; i < inputs.length; i++) {
      //inputs[i].checked判断所有input是否被选中
      // inputs[i].checked && n++;  等于下面的写法
      if(inputs[i].checked){
        n++;
      }
    }
    checkAll.checked = n == inputs.length+1;
    oLabel.innerHTML = checkAll.checked ? "全不选" : "全选"
  };

  //全选，全不选
  checkAll.onclick = function (){
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = this.checked;
    }
    isCheckAll();
  }
  oA.onclick = function (){
      for(var i=0;i<inputs.length;i++){
        inputs[i].checked=!inputs[i].checked;
      }
      isCheckAll();
  }
  //根据复选框状态更新全选框状态
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = function (){
      isCheckAll();
    }
  }
}
