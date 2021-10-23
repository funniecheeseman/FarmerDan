const Discord = require('discord.js');
const BotClient = new Discord.Client();

const Token = 'OTAwMDI5NTU4NDQxNTI5MzU0.YW7X2A.4h6lhKgkE_I2-Lxtm9kuOugydIQ';

var Prefix = '!';

var Version = '1.1.0';
var Changelog = ("***What's new in Version " + Version + "?\n***" +
    "```" +
    " + Added Changelog \n" +
    " + Added Commands! \n" +
    "```"
);

BotClient.on('ready', () =>{
    console.log('====================================');
    console.log(' ~ Farmer Dan Bot -- Version ' + Version + '- ~ ')
    console.log('========= by clayman100man =========');
    console.log('====================================');
    console.log('Type "node ." to start the program!!');
    console.log('====================================');

    // STATUS BAR (PLAYING STREAMING WATCHING)
     /*
    BotClient.user.setActivity( // Current Status
        "No More Sleep", 
        {type: "PLAYING"}); 
        */
    
    BotClient.user.setActivity(
        `No Sleep in ${BotClient.guilds.cache.size} Server(s)`, {
        type: "PLAYING",
    });
    
});

BotClient.on('message', UserMsg =>{
    if (UserMsg.content === Prefix + 'ping') {
        UserMsg.reply("pong");
    }   else if (UserMsg.content === Prefix + 'help')  {
        UserMsg.reply(
            "\n***" + Prefix + "help*** *->* Pulls up help menu \n" +
            "***" + Prefix + "ping*** *->* Bot Test \n" +
            "***" + Prefix + "prefix*** *->* Changes Prefix \n" +
            "***" + Prefix + "version*** *->* Shows Bot Version \n" +
            "***" + Prefix + "chicken*** *->* mmmmm crispy \n"
            ); 
    }   else if (UserMsg.content === Prefix + 'prefix')  {
        UserMsg.reply("lol"); 
    }   else if (UserMsg.content === Prefix + 'version') {
        UserMsg.reply(Changelog)
    }   else if (UserMsg.content === Prefix + 'chicken') {
        UserMsg.reply("Farmer Dan Bot, Version: " + Version)
    }
});

BotClient.login(Token);

/*
      // Playing in my support server
      client.user.setActivity("in my support server", { type: "PLAYING" }); 

      // Streaming <name of stream>
      client.user.setActivity({ type: "STREAMING", url: "<twich url>" });
    
      // Watching over xx servers
      client.user.setActivity(`over ${client.guilds.cache.size} servers`, {
        type: "WATCHING",
      });
    
      // Listening to xxx users
      client.user.setActivity(
        `to ${client.guilds.cache
          .map((guild) => guild.memberCount)
          .reduce((p, c) => p + c)} users`,
        { type: "LISTENING" }
      );

*/