const Discord = require('discord.js');
const Linker = require('./ojlinker');

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

	//....

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