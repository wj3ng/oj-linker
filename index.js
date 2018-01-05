const Discord = require('discord.js');
const Linker = require('./ojlinker');
const Event = require('./botevents');
const Tools = require('./tools');

var client = new Discord.Client();

var PREFIX = "~";

client.on("ready", function(){
	console.log("MasterBot69 is ready.")

	client.user.setPresence({
		game:{
			name : PREFIX + "help",
			type : 0
		}
	});
});

client.on("guildMemberAdd", function(member){
	const generalChannel = member.guild.channels.find('name', 'general');
	const helpChannel = member.guild.channels.find('name', 'help');
	if(member.user.bot) generalChannel.send("**歡迎工具人 **" + member + "** 加入伺服器!**");
	else generalChannel.send("**歡迎 **" + member + "** 加入 PCSHIC 的 Discord 伺服器!**\n請在這裡註明你是誰(例:我是資訊社的高一/我是xxx), 並到 " + helpChannel + " 閱讀規則.");
});

client.on("message", function(message){
	if(message.author.bot) return;

	if(message.isMentioned(client.user)){
		if(message.content.includes('去死')) message.channel.send("我哪時候得罪你了...:cry:");
		else message.channel.send('請用 "' + PREFIX + '" 開始指令.');
		return;
	}

	//===============

	if(message.content.includes("什麼是") && message.content.indexOf("什麼是")+3 < message.content.length){
		var ret = Event.whatZH(message.content.substring(message.content.indexOf("什麼是")+3));
		if(ret) message.channel.send("廢物,不會自己查喔...\n" + "https://www.google.com/search?q=" + ret);
		return;
    }
    if(message.content.includes("what is ") && message.content.indexOf("what is ")+8 < message.content.length){
		var ret = Event.whatEN(message.content.substring(message.content.indexOf("what is ")+8));
		if(ret)
			message.channel.send("Why don't you look it up yourself, you useless piece of garbage?\n" + 
			"https://www.google.com/search?q=" + ret);
		return;
    }
	if(message.content.includes("(╯°□°）╯︵ ┻━┻") || message.content.includes("(╯°□°）╯︵┻━┻")){
		message.channel.send("┬─┬ ノ( ゜-゜ノ)   請尊重桌子");
		return;
	}else if(message.content.includes("(╯°□°）╯︵") && message.content.includes("┻━┻")){
		message.channel.send("丟那麼遠,撿不回來了啦>.<!!");
		return;
	}
	if(message.content == "誰是世界上最醜的人" || message.content == "誰是世界上最醜的人?"){
		var embed = new Discord.RichEmbed()
			.setTitle(message.author.username)
			.setImage(message.author.avatarURL);
		message.channel.send(embed);
	}
    

//=================== 

	if(!message.content.startsWith(PREFIX)) return;
	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){
		case "help":
			console.log("entered help");
			message.channel.send(
				":cancer: MasterBot69 :cancer: 的指令都是 `~` 開頭的.\n" + 
				"`~zj ProblemID` : ZeroJudge 的題目連結 (`ProblemID`用題號取代)\n" + 
				"`~tioj ProblemID` : TIOJ 的題目連結 (`ProblemID`用題號取代)\n" +
				"`~neoj ProblemID` : NEOJ 的題目連結 (`ProblemID`用題號取代)\n\n" + 
				"我是:cancer:餌神:cancer:的傑作!\n" + 
				"我的原始碼: https://github.com/wj3ng/oj-linker"
			);
			break;
		case "zj":
			if(!args[1]) message.channel.send('請加上題號 (正確範例: "~zj a001")');
			else message.channel.send(Linker.zj(args[1].toLowerCase()));
			break;
		case "tioj":
			if(!args[1]) message.channel.send('請加上題號 (正確範例: "~tioj 1001")');
			else message.channel.send(Linker.tioj(args[1].toLowerCase()));
			break;
		case "neoj":
			if(!args[1]) message.channel.send('請加上題號 (正確範例: "~neoj 1")');
			else message.channel.send(Linker.neoj(args[1].toLowerCase()));
			break;
		case "uva":
			console.log("ENTERED UVA");
			if(!args[1]) message.channel.send('請加上題號 (正確範例: "~uva 00100")');
			else if(!uvaValID(args[1])) message.channel.send('題號格式不正確 (正確範例: "~uva 00100")');
			else{ 
				var prob = uva(args[1]);
				var uvaFooter = prob.dacu + " users accepted.\n" + 
					"AC " + prob.ac + ", WA " + prob.wa + ", TLE " + prob.tle + ", MLE " + prob.mle + ", RE " + prob.re + ", PE " + prob.pe + ", CE " + prob.ce;
				if(prob.status == 2) uvaFooter += "\nThis problem uses a special judge."
				var uvaEmbed = new Discord.RichEmbed()
					.addField("UVa " + prob.num + ": " + prob.title,
						"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem="+prob.pid)
					.setFooter(uvaFooter)
					message.channel.send(uvaEmbed);
			}
			break;



		case "zhtts":
			if(!args[1]) message.channel.send('請加上要發聲的中文句子.\n(用不加聲調的注音符號或漢語拼音,如 "~zhtts ㄦ ㄕㄣ ㄨㄢ ㄙㄨㄟ" 或 "~zhtts er shen wan sui")');
			else message.channel.send("[tts " + Tools.zhtts(args));
			break;
	}

});

client.login(process.env.BOT_TOKEN);