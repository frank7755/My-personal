/**
 * Created by Frank on 2016/11/2.
 */
/*
 ###情景1
 var pet = {
 words: '...',
 speak: function (){
 console.log(this.words);
 console.log(this)
 }
 };
 pet.speak();*/
//this 指向 Pet ;
/*

// ###情景2
function pet(words){
  this.words = words;
  console.log(this.words);
  console.log(this);
  console.log(this === global);
}
// 此时this指向全局变量Global;
pet('....');
*/

//###情景3

function pet(words){
  this.words=words;
  console.log(this.words);
  this.speak=function (){
    console.log(this.words);
    console.log(this);
  }
}

var cat = new pet('miao');

cat.speak();