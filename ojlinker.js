const https = require('https');

var isNum = function(c){
	for(j=0; j<10; j++)
		if(c == j) return true;
	return false;
}

var zjValID = function(id){
	if(id.length != 4) return false;
	if(id.charAt(0)!='a' && id.charAt(0)!='b' && id.charAt(0)!='c' && id.charAt(0)!='d') return false;
	for(i=1; i<4; i++)
		if(!isNum(id.charAt(i))) return false;
	return true;
}

var tiojValID = function(id){
	if(id.length != 4) return false;
	for(i=0; i<4; i++)
		if(!isNum(id.charAt(i))) return false;
	return true;
}

var neojValID = function(id){
	if(id.length > 4) return false;
	for(i=0; i<id.length; i++)
		if(!isNum(id.charAt(i))) return false;
	return true;
}

var uvaValID = function(id){
	if(id.length > 5) return false;
	for(i=0; i<id.length; i++)
		if(!isNum(id.charAt(i))) return false;
	return true;
}

module.exports = {
	zj: function(id){
		if(!zjValID(id)) return '題號格式不正確 (正確範例: "~zj a001")';
		return "ZeroJudge " + id + ": http://zerojudge.tw/ShowProblem?problemid=" + id;
	},
	tioj: function(id){
		if(!tiojValID(id)) return '題號格式不正確 (正確範例: "~tioj 1001")';
		return "TIOJ " + id + ": http://tioj.ck.tp.edu.tw/problems/" + id;
	},
	neoj: function(id){
		if(!neojValID(id)) return '題號格式不正確 (正確範例: "~neoj 1")';
		return "NEOJ " + id + ": https://neoj.sprout.tw/problem/" + id;
	},
	uva: function(id){
		console.log("entered uva function with " + id);
		if(!uvaValID(id)) return 'invalid';

		https.get('https://uhunt.onlinejudge.org/api/p/num/'+id, function(resp){
		console.log("in https function");
			let data = '';
			resp.on('data',function(chunk){
				data += chunk;
			});
			resp.on('end',function(){
				return data;
			});
		}).on('error',function(err){
			return "uva error";
		});
	}
}