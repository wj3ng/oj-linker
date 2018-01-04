const Discord = require('discord.js');
const Linker = require('./ojlinker');
const Event = require('./botevents')

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

client.on("message", function(message){
	if(message.author.bot) return;

	if(message.isMentioned(client.user)){
		if(message.content.includes('去死')) message.channel.send("我哪些時候得罪你了...:cry:");
		else message.channel.send('請用 "' + PREFIX + '" 開始指令.');
		return;
	}

	if(message.content.includes("什麼是") && message.content.indexOf("什麼是")+3 < message.content.length){
		var ret = Event.whatZH(message.content.substring(message.content.indexOf("什麼是")+3))
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
		return
	}else if(message.content.includes("(╯°□°）╯︵") && message.content.includes("┻━┻")){
		message.channel.send("丟那麼遠,撿不回來了啦>.<!!");
		return;
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
	}

});

client.login(process.env.BOT_TOKEN);