const Discord = require('discord.js');

const godName = ["Gennady Korotkevich (tourist)", "何達睿"];
const godPic = [
	[
		"https://pbs.twimg.com/profile_images/800720654001721345/xgCmwjWe.jpg",
		"https://qph.ec.quoracdn.net/main-thumb-t-404095-200-sgsamvpaikgfyaberyrnjbrlhfrifpyd.jpeg",
		"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ir5yjOm5epDo/v1/1200x-1.jpg",
		"http://stats.ioinformatics.org/img/photos/ivmdxo491q.png",
		"https://static.charter97.org/p/articles/ai-165042-aux-head-genadij_korotkievich_360.jpg"
	],
	[
		"http://cdn.media.worldjournal.com/wp-content/uploads/2017/05/2017050511003014_05805.jpg",
		"http://www.locuspublishing.com/BOKIMG/pic_L/6111NC008.jpg",
		"https://img.technews.tw/wp-content/uploads/2017/12/01111707/465461322-624x353.jpg"
	],
	[
		"https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/old_article/80417-109313-image_list.jpg",
		"https://attach.setn.com/newsimages/2014/07/20/113531-XXL.jpg",
		"https://attach.setn.com/newsimages/2014/07/20/113496-XXL.jpg",
		"http://img.chinatimes.com/newsphoto/2014-07-20/656/b03a00_p_01_02.jpg"
	]
];

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
	},
	god: function(channel){
		var curGod = Math.floor(Math.random() * godName.length);
		var curGodPic = Math.floor(Math.random() * godPic[curGod].length);
		var godEmbed = new Discord.RichEmbed()
			.setTitle("請對大電神致敬")
			.setImage(godPic[curGod][curGodPic])
			.setFooter(godName[curGod])
			channel.send(godEmbed);

	}
}