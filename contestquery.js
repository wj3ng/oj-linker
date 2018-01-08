const Discord = require('discord.js');
const request = require('request');

var announced = [];

module.exports = {
	cfQuery: function(channel){
		console.log("CF QUERY");
		request("http://codeforces.com/api/contest.list?gym=false", {json: true}, function(err, resp, body){
			console.log(body[0].name);
			for(i=0; body[i].phase=="BEFORE"; i++){
				if(body[i].relativeTimeSeconds<1800 && !announced.contains(body[i].id)){
					announced.push(body[i].id);
					channel.send("30分鐘後有 CodeForces 競賽!");
					var cfEmbed = new Discord.RichEmbed()
						.setField(body[i].name,"Duration: " + body[i].durationSeconds/60 +
							" 分鍾\nhttp://codeforces.com/contest/" + body[i].id);
						channel.send(cfEmbed);
						//set color
				}
			}
		});
	}
}