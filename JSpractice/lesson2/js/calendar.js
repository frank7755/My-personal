/**
 * Created by Administrator on 2016/11/24.
 */
window.onload = function (){
  var calendar = document.getElementById('calendar');
  var lis = calendar.getElementsByTagName('li');
  var msg = document.getElementById('msg');
  var st = msg.getElementsByTagName('strong');
  var op = msg.getElementsByTagName('p');
  /*  var arrP = [
   "元旦：1月1日至3日放假三天。",
   "春节：2月2日至8日放假7天。",
   "妇女节：3月8日妇女节，与我无关。",
   "清明节：4月3日至5日放假3天",
   "劳动节：4月30日至5月2日放假3天。",
   "端午节：6月4日至6日放假3天。",
   "小暑：7月7日小暑。不放假。",
   "七夕节：8月6日七夕节。不放假。",
   "中秋节：9月10日至12日放假3天。",
   "国庆节：10月1日至7日放假7天。",
   "立冬：11月8日立冬。不放假。",
   "艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。"
   ];
   for (var i = 0; i < lis.length; i++) {
   lis[i].index = i;
   lis[i].onmouseover = function (){
   st[0].innerText = this.index + 1;
   op[0].innerHTML = arrP[this.index];
   for (var n = 0;n<lis.length;n++){
   lis[n].setAttribute('class','')
   }
   this.setAttribute('class','active');
   }
   }*/
  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function (){
      for (var n = 0; n < lis.length; n++) {
        lis[n].setAttribute('class', '')
      }
      this.setAttribute('class', 'active');
      switch (this.index) {
        case 0:
          st[0].innerText = 1;
          op[0].innerHTML = "元旦：1月1日至3日放假三天。";
          break;
        case 1:
          st[0].innerText = 2;
          op[0].innerHTML = "春节：2月2日至8日放假7天。";
          break;
        case 2:
          st[0].innerText = 3;
          op[0].innerHTML = "妇女节：3月8日妇女节，与我无关。";
          break;
        case 3:
          st[0].innerText = 4;
          op[0].innerHTML = "清明节：4月3日至5日放假3天";
          break;
        case 4:
          st[0].innerText = 5;
          op[0].innerHTML = "劳动节：4月30日至5月2日放假3天。";
          break;
        case 5:
          st[0].innerText = 6;
          op[0].innerHTML = "端午节：6月4日至6日放假3天。";
          break;
        case 6:
          st[0].innerText = 7;
          op[0].innerHTML = "小暑：7月7日小暑。不放假。";
          break;
        case 7:
          st[0].innerText = 8;
          op[0].innerHTML = "七夕节：8月6日七夕节。不放假。";
          break;
        case 8:
          st[0].innerText = 9;
          op[0].innerHTML = "中秋节：9月10日至12日放假3天。";
          break;
        case 9:
          st[0].innerText = 10;
          op[0].innerHTML = "国庆节：10月1日至7日放假7天。";
          break;
        case 10:
          st[0].innerText = 11;
          op[0].innerHTML = "立冬：11月8日立冬。不放假。";
          break;
        case 11:
          st[0].innerText = 12;
          op[0].innerHTML = "艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。";
          break;
      }
    }
  }
};