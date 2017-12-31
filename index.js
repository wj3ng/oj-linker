const Discord = require('discord.js');

const PREFIX = "~";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
});

bot.on("message",function(message){
    if(message.content.includes("什麼是")){
        var srch = message.content.substring(message.content.indexOf("什麼是")+3);
        srch.replace(/ /g,'%20')
        message.channel.send("廢物,不會自己查喔...\n" + "https://www.google.com/search?q=" + srch);
    }
    else if(message.content.includes("(╯°□°）╯︵ ┻━┻") || message.content.includes("(╯°□°）╯︵┻━┻")) message.channel.send("┬─┬ ノ( ゜-゜ノ)   請尊重桌子");
    else if(message.content.includes("(╯°□°）╯︵") && message.content.includes("┻━┻")) message.channel.send("丟那麼遠,撿不回來了啦>.<!!");
    

    if(message.author.equals(bot.user)) return;
    if(!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()){

        case "help":
            message.channel.send("OJ Linker 的指令都是 `~` 開頭的.\n`~zj ProblemID` : ZeroJudge 的題目連結 (`ProblemID`用題號取代)\n`~tioj ProblemID` : TIOJ 的題目連結 (`ProblemID`用題號取代)\n`~neoj ProblemID` : NEOJ 的題目連結 (`ProblemID`用題號取代)\n`~誰是世界上最醜的人` : 宣布世界上最醜的人");
            break;
            
        case "zj":
            if(!args[1]) message.channel.send('請加上題號 (正確範例: "~zj a001")');
            else if(args[1].length != 4) message.channel.send('題號格式不正確 (正確範例: "~zj a001")');
            var ltr = args[1].charAt(0);
            if(ltr!="a" && ltr!="b" && ltr!="c" && ltr!="d") message.channel.send('題號格式不正確 (正確範例: "~zj a001")');
            else message.channel.send("Zerojudge " + args[1] + ": https://zerojudge.tw/ShowProblem?problemid=" + args[1].toLowerCase());
            break;

        case "tioj":
            if(!args[1]) message.channel.send('請加上題號 (正確範例: "~tioj 1001")');
            else if(args[1].length != 4) message.channel.send('題號格式不正確 (正確範例: "~tioj 1001")');
            else message.channel.send("TIOJ " + args[1] + ": http://tioj.ck.tp.edu.tw/problems/" + args[1]);
            break;

        case "neoj":
            if(!args[1]) message.channel.send('請加上題號 (正確範例: "~neoj 1")');
            else message.channel.send("NEOJ " + args[1] + ": https://neoj.sprout.tw/problem/" + args[1]);
            break;

        case "誰是世界上最醜的人":
            var embed = new Discord.RichEmbed()
                .setTitle(message.author.username)
                .setImage(message.author.avatarURL);
            message.channel.send(embed);
            break;

    }

});

bot.login(process.env.BOT_TOKEN);
