var http = require('http');

var fs = require('fs');

http.get('http://nodejs.cn/doc/node/index.html',function (res) {
	var data = '';
	res.on('data',function (chunk) {
		data += chunk;
	})

	res.on('end',function () {
		console.log(data);

		fs.writeFile('./index.html',data,null,function (err) {
			console.log(err ? err : '数据成功爬入')
		})
	})
})