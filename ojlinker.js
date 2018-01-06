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

	uvaValID: function(id){
		if(id.length > 5) return false;
		for(i=0; i<id.length; i++)
			if(!isNum(id.charAt(i))) return false;
		return true;
	},
	uva: function(id){
		console.log("entered uva function with " + id);
		console.log("requesting...");

		var request =  https.get('https://uhunt.onlinejudge.org/api/p/num/'+id, function(response){
			var body = "";
			response.on("data", function(chunk){
				body += chunk;
			});
			response.on("end",function(){
				console.log("GOT JSON: " + body);
				return JSON.parse(body);
			})
		});

		console.log("returning");
		return request;
		//return JSON.parse('{"pid":"no","num":-1,"title":"fail","dacu":-1,"ce":-1,"re":-1,"ole":-1,"tle":-1,"mle":5209,"wa":-1,"pe":-1,"ac":-1,"status":1}')
		
	}
}