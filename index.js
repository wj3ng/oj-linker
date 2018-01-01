const Discord = require('discord.js');

const PREFIX = "~";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
    bot.user.setPresence({ game: { name: '指令: ~help', type: 0 } });
});

bot.on("message",function(message){
    if(message.author.bot) return;
    
    if(message.content.includes("什麼是") && message.content.indexOf("什麼是")+3 < message.content.length){
        var srch = message.content.substring(message.content.indexOf("什麼是")+3);
        while(srch.charAt(0)==' ') srch = srch.substring(1);
        if(srch.indexOf("?") > -1)
            srch = srch.substring(0,srch.indexOf("?"));
        if(srch.indexOf("啊") > -1)
            srch = srch.substring(0,srch.indexOf("啊"));
        srch = srch.split('　').join(" ");
        while(srch.includes("  ")) srch = srch.split('  ').join(" ");
        srch = srch.split(' ').join("%20");
        srch = srch.split('　').join("%20");
        srch = srch.split('+').join("%2B");
        srch = srch.split('[').join("%5B");
        srch = srch.split(']').join("%5D");
        srch = srch.split('#').join("%23");
        srch = srch.split('&').join("%26");
        message.channel.send("廢物,不會自己查喔...\n" + "https://www.google.com/search?q=" + srch);
    }
    if(message.content.includes("what is ") && message.content.indexOf("what is ")+8 < message.content.length){
        var srch = message.content.substring(message.content.indexOf("what is ")+8);
        while(srch.charAt(0)==' ') srch = srch.substring(1);
        if(srch.indexOf("?") > -1)
            srch = srch.substring(0,srch.indexOf("?"));
        if(srch.substr(0,3) == "an ")
            srch = srch.substring(3);
        else if(srch.substr(0,2) == "a ")
            srch = srch.substring(2);
        srch = srch.split('　').join(" ");
        while(srch.includes("  ")) srch = srch.split('  ').join(" ");
        srch = srch.split(' ').join("%20");
        srch = srch.split('　').join("%20");
        srch = srch.split('+').join("%2B");
        message.channel.send("Why don't you look it up yourself, you useless piece of garbage?\n" + "https://www.google.com/search?q=" + srch);
    }
    if(message.content.includes("(╯°□°）╯︵ ┻━┻") || message.content.includes("(╯°□°）╯︵┻━┻")) message.channel.send("┬─┬ ノ( ゜-゜ノ)   請尊重桌子");
    else if(message.content.includes("(╯°□°）╯︵") && message.content.includes("┻━┻")) message.channel.send("丟那麼遠,撿不回來了啦>.<!!");
    

    if(!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()){

        case "help":
            message.channel.send("OJ Linker 的指令都是 `~` 開頭的.\n`~zj ProblemID` : ZeroJudge 的題目連結 (`ProblemID`用題號取代)\n`~tioj ProblemID` : TIOJ 的題目連結 (`ProblemID`用題號取代)\n`~neoj ProblemID` : NEOJ 的題目連結 (`ProblemID`用題號取代)\n`~誰是世界上最醜的人` : 宣布世界上最醜的人\n\n我是:cancer:餌神:cancer:的傑作!\n我的原始碼: https://github.com/wj3ng/oj-linker/blob/master/index.js");
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
