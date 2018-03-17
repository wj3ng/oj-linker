const Discord = require('discord.js');
const Linker = require('./ojlinker');
const Event = require('./botevents');
const Misc = require('./misc');
const Cf = require('./codeforces');

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

// ommitted for server problems RIP
	setInterval(Cf.query, 10000, client.channels.get("396218529613086720")); //contests channel, 10 second interval
});

client.on("guildMemberAdd", function(member){
	const generalChannel = member.guild.channels.find('name', 'general');
	const helpChannel = member.guild.channels.find('name', 'help');
	if(member.user.bot) generalChannel.send("**:tada: 歡迎工具人 **" + member + "** 加入伺服器!**");
	else generalChannel.send("**:tada: 歡迎 **" + member + "** 加入 PCSHIC 的 Discord 伺服器!**\n請在這裡註明你是誰(例:我是資訊社的高一/我是xxx), 並到 " + helpChannel + " 閱讀規則.");
});

client.on("guildMemberUpdate", function(oldMemb, newMemb){
	const generalChannel = oldMemb.guild.channels.find('name', 'general');
	if(oldMemb.displayName != newMemb.displayName){
		generalChannel.send(":warning: **" + oldMemb.displayName + "** 把暱稱改成了 **" + newMemb.displayName + "**");
		return;
	}
});

client.on("message", function(message){
	if(message.author.bot) return;

	if(message.isMentioned(client.user)){
		if(message.content.includes('去死')){
			message.react("😢");
			message.channel.send("我哪時候得罪你了...:cry:");
		}
		else message.channel.send('請用 "' + PREFIX + '" 開始指令.');
		return;
	}

	//===============

	if(message.content.includes("對不起")){
		message.channel.send("沒關係");
		return;
	}

	if(message.content == "電神"){
		message.channel.send('"我不是電神 我是廢物"\n                          _－波路電石_');
		return;
	}

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
	}
	if(message.content.includes("(╯°□°）╯︵") && message.content.includes("┻━┻")){
		message.channel.send("丟那麼遠,撿不回來了啦>.<!!");
		return;
	}
	if(message.content == "誰是世界上最醜的人" || message.content == "誰是世界上最醜的人?"){
		var embed = new Discord.RichEmbed()
			.setTitle(message.author.username)
			.setImage(message.author.avatarURL);
		message.channel.send(embed);
		return;
	}
    

//=================== 

	if(!message.content.startsWith(PREFIX)) return;
	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){
		case "test":
			message.channel.send("this is a test \t\ttesting\nhello\t\tworld");
			break;
		case "help":
		case "about":
			console.log("entered help");
			message.channel.send(
				":cancer: MasterBot69 :cancer: 的指令都是 `~` 開頭的.\n" + 
				"`~zj ProblemID` : ZeroJudge 的題目連結 (`ProblemID`用題號取代)\n" + 
				"`~tioj ProblemID` : TIOJ 的題目連結 (`ProblemID`用題號取代)\n" +
				"`~neoj ProblemID` : NEOJ 的題目連結 (`ProblemID`用題號取代)\n" + 
				"`~uva ProblemID` : UVa 的題目連結 (`ProblemID`用題號取代)\n\n" + 
				"我是:cancer:餌神:cancer:的傑作!\n" + 
				"我的原始碼: https://github.com/wj3ng/oj-linker"
			);
			break;
		case "zerojudge":
		case "zj":
			Linker.zj(args[1],message.channel);
			break;
		case "tioj":
			Linker.tioj(args[1],message.channel);
			break;
		case "neoj":
			Linker.neoj(args[1],message.channel);
			break;
		case "uva":
			Linker.uva(args[1],message.channel);
			break;
		case "ioi":
		case "ioicamp":
			Linker.ioi(args[1],message.channel);
			break;
		case "icpc":
			Linker.icpc(args[1],message.channel);
			break;
		case "cf":
		case "codeforces":
			Cf.contest(message.channel);
			break;


		case "zhtts":
			if(!args[1]) message.channel.send('請加上要發聲的中文句子.\n(用不加聲調的注音符號或漢語拼音,如 "~zhtts ㄦ ㄕㄣ ㄨㄢ ㄙㄨㄟ" 或 "~zhtts er shen wan sui")');
			else message.channel.send("[tts " + Misc.zhtts(args));
			break;
		case "god":
			Misc.god(message.channel);
			break;
	}

});

client.login(process.env.BOT_TOKEN);
