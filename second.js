const Discord = require('discord.js');
const Linker = require('./ojlinker');

var client = new Discord.client();

var PREFIX = "~";

client.on("message", message => {
	if(message.author.bot) return;

	//....

	if(!message.content.startsWith(PREFIX)) return;
	var args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0].toLowerCase()){
		case "help":
			message.channel.send(
				":cancer: MasterBot69 :cancer: 的指令都是 `~` 開頭的.\n" + 
				"`~zj ProblemID` : ZeroJudge 的題目連結 (`ProblemID`用題號取代)\n" + 
				"`~tioj ProblemID` : TIOJ 的題目連結 (`ProblemID`用題號取代)\n" +
				"`~neoj ProblemID` : NEOJ 的題目連結 (`ProblemID`用題號取代)\n\n" + 
				"我是:cancer:餌神:cancer:的傑作!\n" + 
				"我的原始碼: https://github.com/wj3ng/oj-linker"
			);
		case "zj":
			message.channel.send(Linker.zj(args[1]));
			break;
		case "tioj":
			message.channel.send(Linker.tioj(args[1]));
			break;
		case "neoj":
			message.channel.send(Linker.neoj(args[1]));
			break;
	}


});

client.on("ready", () => {
	console.log("MasterBot69 is ready.")

	bot.user.setPresence({
		game:{
			name : PREFIX + "help",
			type : 0
		}
	});
});