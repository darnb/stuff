var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200 {'Content-Type': 'text/plain'});
	res.end('sup guys its moi');
}).listen(2000, '127.0.0.1');
console.log('le server is up');