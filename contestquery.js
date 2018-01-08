const Discord = require('discord.js');
const request = require('request');

var announced = [];

module.exports = {
	cfQuery: function(channel){
		console.log("CF QUERY");
		request("http://codeforces.com/api/contest.list?gym=false", {json: true}, function(err, resp, body){
			console.log(body.result[0].name);

			for(i=0; body.result[i].phase=="BEFORE"; i++){
				if(body.result[i].relativeTimeSeconds<1800 && !announced.contains(body[i].id)){
					announced.push(body.result[i].id);
					channel.send("30分鐘後有 CodeForces 競賽!");
					var cfEmbed = new Discord.RichEmbed()
						.setField(body.result[i].name,"Duration: " + body.result[i].durationSeconds/60 +
							" 分鍾\nhttp://codeforces.com/contest/" + body.result[i].id);
						channel.send(cfEmbed);
						//set color
				}
			}
		});
	}
}