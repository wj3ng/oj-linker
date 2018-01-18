module.exports = {
	zhTime: function(sec){
		var ret = "";
		sec /= 60;
		if(sec >= 1440) ret += (sec/1440), ret += "天", ret %= 1440;
		if(sec >= 60) ret += (sec/60), ret += "小時", ret %= 60;
		if(sec) ret += (sec), ret += "分鐘";
		return ret;
	},
	enTime: function(sec){
		//no need to add space after function
		var ret = "";
		sec /= 60;
		if(sec >= 1440) ret += (sec/1440), ret += " day(s) ", ret %= 1440;
		if(sec >= 60) ret += (sec/60), ret += " hour(s) ", ret %= 60;
		if(sec) ret += (sec), ret += " second(s) ";
		return ret;
	}
}