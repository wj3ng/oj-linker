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
	if(str == "wu" || str == "ㄨ") return "oo";
	if(str == "wa" || str == "ㄨㄚ") return "wa";
	if(str == "wo" || str == "ㄨㄛ") return "wo";
	if(str == "wai" || str == "ㄨㄞ") return "wy";
	if(str == "wei" || str == "ㄨㄟ") return "way";
	if(str == "wan" || str == "ㄨㄢ") return "wan";
	if(str == "wen" || str == "ㄨㄣ") return "one";
	if(str == "wang" || str == "ㄨㄤ") return "wong";
	if(str == "yu" || str == "ㄩ") return "yu";
	if(str == "yue" || str == "ㄩㄝ") return "reh";
	if(str == "yuan" || str == "ㄩㄢ") return "ren";
	if(str == "yun" || str == "ㄩㄣ") return "yun";
	return "invalid";
}

module.exports = {
	zhtts: function(args){
		var ret = "";
		for(i=1; args[i]; i++)
			ret += totts(args[i]) + " ";
		return ret;
	}
}