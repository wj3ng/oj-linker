module.exports = {
	zhTime: function(sec){
		var ret = "";
		sec /= 60;
		if(sec >= 1440) ret += Math.floor(sec/1440), ret += "天", sec %= 1440;
		if(sec >= 60) ret += Math.floor(sec/60), ret += "小時", sec %= 60;
		if(sec) ret += Math.floor(sec)+1, ret += "分鐘";
		return ret;
	},
	enTime: function(sec){
		var ret = "";
		sec /= 60;
		if(sec >= 1440) ret += Math.floor(sec/1440), ret += " day(s) ", sec %= 1440;
		if(sec >= 60) ret += Math.floor(sec/60), ret += " hour(s) ", sec %= 60;
		if(sec) ret += Math.floor(sec)+1, ret += " minute(s) ";
		return ret;
	}
}