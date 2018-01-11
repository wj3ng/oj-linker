const Discord = require('discord.js');
const request = require('request');

var announced = [];
var starting = [];
var begun = [];
var delayed = [];

module.exports = {
	cfQuery: function(channel){
		request("http://codeforces.com/api/contest.list?gym=false", {json: true}, function(err, resp, body){
			for(i=0; body.result[i].phase=="BEFORE"; i++){
				if(body.result[i].relativeTimeSeconds>-1800 && body.result[i].relativeTimeSeconds<-1750 && announced.indexOf(body.result[i].id) == -1){
					announced.push(body.result[i].id);
					channel.send(":bell:**30分鐘後有 CodeForces 競賽!**");
					var cfEmbed = new Discord.RichEmbed()
						.addField(body.result[i].name,"Duration: " + body.result[i].durationSeconds/60 +
							" 分鍾\nhttp://codeforces.com/contest/" + body.result[i].id)
						.setThumbnail("https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/Codeforces%20API.jpg?itok=zOiesF2d")
						.setColor("#1D6EF2")
						channel.send(cfEmbed);
				}
				if(body.result[i].relativeTimeSeconds>-300 && body.result[i].relativeTimeSeconds<-250 && starting.indexOf(body.result[i].id) == -1){
					starting.push(body.result[i].id);
					channel.send(":bell:**5分鐘後有 CodeForces 競賽!**");
					var cfEmbed = new Discord.RichEmbed()
						.addField(body.result[i].name,"Duration: " + body.result[i].durationSeconds/60 +
							" 分鍾\nhttp://codeforces.com/contest/" + body.result[i].id)
						.setThumbnail("https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/Codeforces%20API.jpg?itok=zOiesF2d")
						.setColor("#1D6EF2")
						channel.send(cfEmbed);
				}
				if(body.result[i].relativeTimeSeconds>0 && body.result[i].relativeTimeSeconds<50 && begun.indexOf(body.result[i].id) == -1){
					begun.push(body.result[i].id);
					channel.send(':loudspeaker:**CodeForces 競賽 "'+ body.result[i].name + '" 已開始!**');
					var cfEmbed = new Discord.RichEmbed()
						.addField(body.result[i].name,"Duration: " + body.result[i].durationSeconds/60 +
							" 分鍾\nhttp://codeforces.com/contest/" + body.result[i].id)
						.setThumbnail("https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/Codeforces%20API.jpg?itok=zOiesF2d")
						.setColor("#1D6EF2")
						channel.send(cfEmbed);
				}
				if(starting.indexOf(body.result[i].id) != -1 && body.result[i].relativeTimeSeconds<-300 && delayed.indexOf(body.result[i].id) == -1){
					delayed.push(body.result[i].id);
					channel.send(':warning:**CodeForces 競賽 "'+ body.result[i].name + '" 被延遲, ' + (body.result[i].relativeTimeSeconds-30)*-1/60 + '分鐘後開始.**');
					starting.splice(starting.indexOf(body.result[i].id),1);
					if(begun.indexOf(body.result[i].id>-1)) begun.splice(begun.indexOf(body.result[i].id),1);
				}
			}
		});
	}
}