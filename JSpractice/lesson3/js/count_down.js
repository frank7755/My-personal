/**
 * Created by Administrator on 2016/12/5.
 */
window.onload = function (){
  var div = document.getElementById('countdown');
  var oInput = div.getElementsByTagName('input')[0];
  var timer = null;

  oInput.onclick = function (){
    if (this.className == '') {
      timer = setInterval(updateTime, 1000);
      updateTime();
      this.className = 'cancel';
    } else {
      this.className = '';
      clearInterval(timer);
    }
  };

  function format(a){
    return a.toString().replace(/^(\d)$/, '0$1')
  }

  function updateTime(){
    var oSpan = div.getElementsByTagName('span');
    var oRemain = parseInt(oSpan[0].innerHTML.replace(/^0/, '')) * 60 + parseInt(oSpan[1].innerHTML.replace('/^0/', ''));

    if (oRemain <= 0) {
      clearInterval(timer);
      return
    }

    oRemain--;
    oSpan[0].innerHTML = format(parseInt(oRemain / 60));

    oRemain %= 60;
    oSpan[1].innerHTML = format(parseInt(oRemain));

  }
}