/**
 * Created by Administrator on 2016/11/3.
 */

var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
  'content': '成功了！test1',
  'mid': 8837
});

var options = {
  hostname: 'www.imooc.com',
  port: 80,
  path: '/course/docomment',
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'PHPSESSID=ftj0c7lolce7g12a1rv6i4rq34; imooc_uuid=e6e7d33e-5475-49ad-b750-91bf740899c0; imooc_isnew_ct=1476068298; loginstate=1; apsid=QxMmE4NmNhYmNjMmIwMmY1M2E0MjFhNDQ3YTY1ZGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzgzMDg1NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyNzE3MzM0NTVAcXEuY29tAAAAAAAAAAAAAAAAAAAAADYzMWUxYTZjMmI3MjVlNGE0ZTUyODU0Yjc3ODY5ZmMx3AP7V9wD%2B1c%3DOD; last_login_username=271733455%40qq.com; jwplayer.volume=100; jwplayer.qualityLabel=é«æ¸; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1476068296,1477554118; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1478157389; imooc_isnew=2; cvde=57fb03cae9dcf-844',
    'Host': 'www.imooc.com',
    'Origin': 'http://www.imooc.com',
    'Referer': 'http://www.imooc.com/video/8837',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
};

var req = http.request(options, function (res){
  console.log('Status :' + res.statusCode);
  console.log('Headers :' + JSON.stringify(res.headers));

  res.on('data', function (chunk){
    console.log(Buffer.isBuffer(chunk));
  });

  res.on('end', function (){
    console.log('评论完毕')
  })
});

req.on('error', function (e){
  // console.log('Error :'+e.message)
});

req.write(postData);

req.end();
