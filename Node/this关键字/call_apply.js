/**
 * Created by Administrator on 2016/11/2.
 */

var Pet = {
  words:'...',
  speak:function (say){
    console.log(say + " " + this.words)
  }
};

var dog ={
  words:'wang'
};

Pet.speak.call(dog,'speaking');