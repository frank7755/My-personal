/**
 * Created by Administrator on 2016/11/25.
 */
window.onload = function (){
  var outer = document.getElementById('outer');
  var hh = outer.getElementsByTagName('h2')[0];
  var oUl = outer.getElementsByTagName('ul')[0];
  hh.onclick = function (){
    if (this.className == '') {
      this.setAttribute('class', 'open');
      oUl.style.display = 'none';
    } else if (this.className == 'open') {
      this.setAttribute('class', '');
      oUl.style.display = 'block';
    }
  }
}