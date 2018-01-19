const Discord = require('discord.js');
const request = require('request');
const Tools = require('./tools');

const CFthumb = "https://www.programmableweb.com/sites/default/files/styles/facebook_scale_width_200/public/Codeforces%20API.jpg?itok=zOiesF2d";

var announced = [];
var starting = [];
var begun = [];
var delayed = [];

module.exports = {
	query: function(channel){
		request("http://codeforces.com/api/contest.list?gym=false", {json: true}, function(err, resp, body){
			for(i=0; body.result[i].relativeTimeSeconds<body.result[i].durationSeconds+50; i++){

				var curCon = body.result[i];

				if(curCon.relativeTimeSeconds>curCon.durationSeconds){

					channel.setTopic("資訊比賽相關的討論");

				}else if(curCon.relativeTimeSeconds>=0){

					if(curCon.durationSeconds-curCon.relativeTimeSeconds<60)
						channel.setTopic('CodeForces 競賽 "' + curCon.name + '" 即將結束!');
					else
						channel.setTopic('正在進行 CodeForces 競賽 "' + curCon.name + '", 距離比賽結束還有 ' + Tools.zhTime(curCon.durationSeconds-curCon.relativeTimeSeconds));

					if(curCon.relativeTimeSeconds<50 && begun.indexOf(curCon.id) == -1){
						begun.push(curCon.id);
						channel.send(':loudspeaker:**CodeForces 競賽 "'+ curCon.name + '" 已開始!**');
						var cfEmbed = new Discord.RichEmbed()
							.addField(curCon.name,"Duration: " + curCon.durationSeconds/60 +
								" 分鍾\nhttp://codeforces.com/contest/" + curCon.id)
							.setThumbnail(CFthumb)
							.setColor("#1D6EF2")
							channel.send(cfEmbed);
					}
				}else if(curCon.relativeTimeSeconds>=-18000){
					
					channel.setTopic('CodeForces 競賽 "' + curCon.name + '" 將在 ' + Tools.zhTime(-1*curCon.relativeTimeSeconds) + " 後開始");

					if(curCon.relativeTimeSeconds<-17950 && announced.indexOf(curCon.id) == -1){
						announced.push(curCon.id);
						channel.send(":bell:**5小時後有 CodeForces 競賽!**");
						var cfEmbed = new Discord.RichEmbed()
							.addField(curCon.name,"Duration: " + Tools.zhTime(curCon.durationSeconds) +
								"\nhttp://codeforces.com/contest/" + curCon.id)
							.setThumbnail(CFthumb)
							.setColor("#1D6EF2")
							channel.send(cfEmbed);
					}else if(curCon.relativeTimeSeconds>-600 && curCon.relativeTimeSeconds<-550 && starting.indexOf(curCon.id) == -1){
						starting.push(curCon.id);
						channel.send(":bell:**10分鐘後有 CodeForces 競賽!**");
						var cfEmbed = new Discord.RichEmbed()
							.addField(curCon[i].name,"Duration: " + Tools.zhTime(curCon.durationSeconds) +
								"\nhttp://codeforces.com/contest/" + curCon.id)
							.setThumbnail(CFthumb)
							.setColor("#1D6EF2")
							channel.send(cfEmbed);
					}

				}

				if(starting.indexOf(curCon.id) != -1 && curCon.relativeTimeSeconds<-300 && delayed.indexOf(curCon.id) == -1){
					delayed.push(curCon.id);
					channel.send(':warning:**CodeForces 競賽 "'+ curCon.name + '" 被延遲, ' + Tools.zhTime(-1*(curCon.relativeTimeSeconds+30)) + '後開始.**');
					starting.splice(starting.indexOf(curCon.id),1);
					if(begun.indexOf(curCon.id>-1)) begun.splice(begun.indexOf(curCon.id),1);
				}
			}
		});
	},
	contest: function(channel){
		
	}
}