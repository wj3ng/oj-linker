var srchQry = function(srch){
	srch = srch.split('　').join(" ");
    while(srch.includes("  ")) srch = srch.split('  ').join(" ");
    srch = srch.split(' ').join("%20");
    srch = srch.split('　').join("%20");
    srch = srch.split('+').join("%2B");
    srch = srch.split('[').join("%5B");
    srch = srch.split(']').join("%5D");
    srch = srch.split('#').join("%23");
    srch = srch.split('&').join("%26");
    srch = srch.split('"').join("%22");
	if(srch.charAt(0) == ' ') srch = srch.substring(1);
	if(srch.length > 0) return srch;
}

module.exports = {
	whatZH = function(str){
        if(str.indexOf("?") > -1)
            str = str.substring(0,str.indexOf("?"));
        if(str.indexOf("啊") > -1)
			str = str.substring(0,str.indexOf("啊"));
		return srchQry(str);
	},
	whatEN = function(str){
        if(str.indexOf("?") > -1)
            str = str.substring(0,str.indexOf("?"));
        if(str.substr(0,3) == "an ")
            str = str.substring(3);
        else if(str.substr(0,2) == "a ")
            str = srch.substring(2);
		return srchQry(str);
	}
}