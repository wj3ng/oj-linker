const Discord = require('discord.js');
const request = require('request');

var isNum = function(c){
	for(j=0; j<10; j++)
		if(c == j) return true;
	return false;
}

var zjValID = function(id){
	if(id.length != 4) return false;
	if(id.charAt(0)!='a' && id.charAt(0)!='b' && id.charAt(0)!='c' && id.charAt(0)!='d') return false;
	for(i=1; i<4; i++)
		if(!isNum(id.charAt(i))) return false;
	return true;
}

var tiojValID = function(id){
	if(id.length != 4) return false;
	for(i=0; i<4; i++)
		if(!isNum(id.charAt(i))) return false;
	return true;
}

var neojValID = function(id){
	if(id.length > 4) return false;
	for(i=0; i<id.length; i++)
		if(!isNum(id.charAt(i))) return false;
	return true;
}

var uvaValID = function(id){
	if(id.length > 5) return false;
	for(i=0; i<id.length; i++)
		if(!isNum(id.charAt(i))) return false;
	return true;
}

module.exports = {
	zj: function(id, channel){
		if(!id) channel.send('請加上題號 (正確範例: "~zj a001")');
		else if(!zjValID(id)) channel.send('題號格式不正確 (正確範例: "~zj a001")');
		else{
			var zjEmbed = new Discord.RichEmbed()
				.addField("ZeroJudge " + id, "http://zerojudge.tw/ShowProblem?problemid=" + id)
				.setColor(0x7CC6FF)
				channel.send(zjEmbed);
		}
	},

	tioj: function(id, channel){
		if(!id) channel.send('請加上題號 (正確範例: "~tioj 1001")');
		else if(!tiojValID(id)) channel.send('題號格式不正確 (正確範例: "~tioj 1001")');
		else{
			var tiojEmbed = new Discord.RichEmbed()
				.addField("TIOJ " + id, "http://tioj.ck.tp.edu.tw/problems/" + id)
				.setColor(0x277EE8)
				channel.send(tiojEmbed);
		}
	},

	neoj: function(id, channel){
		if(!id) channel.send('請加上題號 (正確範例: "~neoj 1")');
		else if(!neojValID(id)) channel.send('題號格式不正確 (正確範例: "~neoj 1")');
		else{
			var neojEmbed = new Discord.RichEmbed()
				.addField("NEOJ " + id, "https://neoj.sprout.tw/problem/" + id)
				.setColor(0x6BC109)
				channel.send(neojEmbed);
		}
	},

	uva: function(id, channel){
		if(!id) channel.send('請加上題號 (正確範例: "~uva 00100")');
		else if(!uvaValID(id)) channel.send('題號格式不正確 (正確範例: "~uva 00100")');
		else{
			request("https://uhunt.onlinejudge.org/api/p/num/"+id, {json: true}, function(err, resp, body){
				var uvaEmbed = new Discord.RichEmbed()
					.addField("UVa " + body.num + ": " + body.title,
						"https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=" + body.pid +
						"\n" + body.dacu + " users accepted.")
					.setFooter("AC " + body.ac + ", WA " + body.wa + ", TLE " + body.tle + ", MLE " + body.mle + ", RE " + body.re + ", PE " + body.pe + ", CE " + body.ce)
					.setColor(0xA50E57)
					channel.send(uvaEmbed);
			});
		}
	
	}
}