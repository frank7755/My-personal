/**
 * Created by Administrator on 2016/11/24.
 */
require.config({
  baseUrl: '../script/util',
  paths: {
    'setStyle':'setStyle'
  }
});
require(['setStyle'],function (ssl){
    var obox=document.getElementById('outer');
    var oInputs=obox.getElementsByTagName('input');
    var odiv=document.getElementById('div1');
    var btn=obox.getElementsByTagName('button');
    
    btn[0].onclick=function (){
      ssl.setStyle(odiv,oInputs[0].value,oInputs[1].value)
    };
    btn[1].onclick=function (){
      odiv.removeAttribute('style');
    }

})

