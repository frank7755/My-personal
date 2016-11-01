var sub = [];
var hover = document.getElementById("ul").getElementsByTagName("li");

for (var i = 0; i < hover.length; i++) {
  sub[i] = hover[i].getElementsByTagName("div");   //此时sub[j]由于是getElementsByTagName拿到的任然是个数组

  hover[i].onmouseover = function (){
    showAboutIn(this);
  };
  hover[i].onmouseout = function (){
   showAboutOut(this)
  }
}

console.log(hover);
console.log(sub[1]);

function showAboutIn(obj){
  for (var j = 0; j < hover.length; j++) {
    var div = sub[j][0];
    if (div) {
      if (hover[j] == obj) {
        div.className = "";
      } else {
        div.className = "fn-hide";
      }
    }
  }
}
function showAboutOut(){
  for (var j = 0; j < hover.length; j++) {
    var div = sub[j][0];

    if (div) {
      div.className = "fn-hide";
    }
  }
}

