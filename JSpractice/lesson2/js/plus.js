/**
 * Created by Administrator on 2016/11/23.
 */
window.onload = function (){
  var main = document.getElementById('main');
  var input = main.getElementsByTagName('input')[0];
  var val = input.value;
  var arr = val.split(',');
  var button = main.getElementsByTagName('button')[0];
  var sumText = document.getElementById('sum');
  // button.onclick=function (){
  //   //方法一:
  //   var sum=0;
  //   for(var i=0;i<arr.length;i++){
  //     sum+=parseInt(arr[i])
  //   }
  //   sumText.innerText=sum;
  // };

  /*
   button.onclick = function (){
   //方法二
   var sum = 0;
   var j = arr.length;
   while (j--) {
   sum += parseInt(arr[j])
   }
   sumText.innerText = sum;
   }
   */

  /*  button.onclick = function (){
   //方法三  forEach()  ES5
   var sum = 0;

   function getSum(item, index, array){
   sum += parseInt(item)
   }

   arr.forEach(getSum);
   sumText.innerText = sum;
   }*/
  /*  button.onclick=function (){
   //方法四some()  ES5
   var sum = 0;

   function getSum(item,index,array){
   sum+=parseInt(item);
   }
   arr.some(getSum);
   sumText.innerText = sum;
   }*/
  /*
   button.onclick=function (){
   //方法五  some()  ES5  判断数组中的某些元素是否通过制定函数的测试，通过一个则返回true
   var sum = 0;

   function getSum(item,index,array){
   sum+=parseInt(item);
   }
   arr.some(getSum);
   sumText.innerText = sum;
   }*/
  /*  button.onclick=function (){
   //方法六  every()  ES5 判断数组中的所有元素是否通过制定函数的测试，所有都通过则返回true
   var sum = 0;

   function getSum(item,index,array){
   sum+=parseInt(item);
   return true;
   }
   arr.every(getSum);
   sumText.innerText = sum;
   }*/
    button.onclick=function (){
   //方法七  map()  ES5 map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
   var sum = 0;

   function getSum(item,index,array){
   sum+=parseInt(item);
   }
   arr.map(getSum);
   sumText.innerText = sum;

   }
/*  button.onclick = function (){
    //方法八  filter()  ES5 filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
    var sum = 0;

    function getSum(item, index, array){
      sum += parseInt(item);
    }

    arr.filter(getSum);
    sumText.innerText = sum;
  }*/
  /*  button.onclick = function (){
   //方法九   reduce()与reduceRight() ES5 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。             。
   function getSum(preValue, curValue, index, array){
   return parseInt(preValue) +parseInt(curValue)
   }
   sumText.innerText = arr.reduce(getSum);
   }*/
};