/**
 * Created by Administrator on 2016/11/2.
 */

var http = require('http');
http
  .createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello Nodejs');
    res.end();
  })
  .listen(2016,()=>{
    console.log(`Server running at http://localhost:2016/`);
  });