const Discord = require('discord.js');
const request = require('request');

var announced = [];
var starting = [];

module.exports = {
	cfQuery: function(channel){
		console.log("codeforces query sent");
		request("http://codeforces.com/api/contest.list?gym=false", {json: true}, function(err, resp, body){
			for(i=0; body.result[i].phase=="BEFORE"; i++){
				if(body.result[i].relativeTimeSeconds>-1800 && announced.indexOf(body.result[i].id) == -1){
					announced.push(body.result[i].id);
					channel.send("有 CodeForces 競賽將在30分鐘後開始!");
					var cfEmbed = new Discord.RichEmbed()
						.addField(body.result[i].name,"Duration: " + body.result[i].durationSeconds/60 +
							" 分鍾\nhttp://codeforces.com/contest/" + body.result[i].id)
						.setThumbnail("https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/Codeforces%20API.jpg?itok=zOiesF2d")
						channel.send(cfEmbed);
						//set color
				}
				if(body.result[i].relativeTimeSeconds>-300 && starting.indexOf(body.result[i].id) == -1){
					starting.push(body.result[i].id);
					channel.send("有 CodeForces 競賽將在5分鐘後開始!");
					var cfEmbed = new Discord.RichEmbed()
						.addField(body.result[i].name,"Duration: " + body.result[i].durationSeconds/60 +
							" 分鍾\nhttp://codeforces.com/contest/" + body.result[i].id)
						.setThumbnail("https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/Codeforces%20API.jpg?itok=zOiesF2d")
						channel.send(cfEmbed);
						//set color
				}
			}
		});
	}
}