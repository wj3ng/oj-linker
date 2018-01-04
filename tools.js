var totts = function(str){
	if(str == "a" || str == "ㄚ") return "ah";
	if(str == "o" || str == "ㄛ") return "aw";
	if(str == "e" || str == "ㄜ") return "uuh";
	if(str == "er" || str == "ㄦ") return "err";
	if(str == "ai" || str == "ㄞ") return "eye";
	if(str == "au" || str == "ㄠ") return "ow";
	if(str == "ou" || str == "ㄡ") return "oh";
	if(str == "an" || str == "ㄢ") return "ohn";
	if(str == "eng" || str == "ㄥ") return "ung";
	if(str == "ang" || str == "ㄤ") return "aang";
	if(str == "yi" || str == "ㄧ") return "ee";
	if(str == "ya" || str == "ㄧㄚ") return "ya";
	if(str == "yao" || str == "ㄧㄠ") return "yau";
	if(str == "ye" || str == "ㄧㄝ") return "yeh";
	if(str == "you" || str == "ㄧㄡ") return "yo";
	if(str == "yan" || str == "ㄧㄢ") return "yen";
	if(str == "yin" || str == "ㄧㄣ") return "een";
	if(str == "yang" || str == "ㄧㄤ") return "yong";
	if(str == "ying" || str == "ㄧㄥ") return "eeng";
	if(str == "yong" || str == "ㄩㄥ") return "yoang";
}

module.exports = {
	zhtts: function(args){
		var ret;
		for(i=1; args[i]; i++)
			ret += totts(args[i]) + " ";
		return ret;
	}
}