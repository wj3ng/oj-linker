var isNum = function(c){
	for(i=0; i<10; i++)
		if(c == i) return true;
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

module.exports = {
	zj: function(id){
		console.log("zj for" + id);
		if(!id) return '請加上題號 (正確範例: "~zj a001")';
		if(!zjValID(id)) return '題號格式不正確 (正確範例: "~zj a001")';
		return "ZeroJudge " + id + ": http://zerojudge.tw/ShowProblem?problemid=" + id;
	},
	tioj: function(id){
		console.log("tioj for" + id);
		if(!id) return '請加上題號 (正確範例: "~tioj 1001")';
		if(!tiojValID(id)) return '題號格式不正確 (正確範例: "~tioj 1001")';
		return "TIOJ " + id + ": http://tioj.ck.tp.edu.tw/problems/" + id;
	},
	neoj: function(id){
		console.log("neoj for" + id);
		if(!id) return '請加上題號 (正確範例: "~neoj 1")';
		if(!neojValID(id)) return '題號格式不正確 (正確範例: "~neoj 1")';
		return "NEOJ " + id + ": https://neoj.sprout.tw/problem/" + id;
	}
}

