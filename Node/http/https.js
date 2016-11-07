/**
 * Created by Administrator on 2016/11/7.
 */

var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('ssh_key.pem'),
  cert: fs.readFileSync('ssh_cert.pem')
};

https.createServer(options, function (req, res){
  res.writeHead(200);
  res.end('Hello Node')
})
  .listen(8090);