/**
 * Created by Administrator on 2016/11/2.
 */
function Pet(words){
  this.words = words;
  this.speak = function (){
    console.log(this.words)
  }
}

function Dog(words){
  // Pet.call(this,words);
  Pet.apply(this,arguments);
  console.log(this);
}

var dog = new Dog('wang');

dog.speak();