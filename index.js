const CORE = require('./globals.js');
const Command = require('./commands.js');

CORE.BotClient.once('ready', () => {
	console.log('Ready!');
  console.log(Command.StartUpLogAndStatus())
});

CORE.BotClient.on('message', message => {
  if(!message.content.startsWith(CORE.CoreStats.Prefix) || message.author.bot) return;

  const args = message.content.slice(CORE.CoreStats.Prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping') {
    message.channel.send('pong!')
  } else if(command === 'egg') {
    message.channel.send('egg')
  } else {
    message.channel.send('Unknown')
    
  }
});

CORE.BotClient.login(CORE.Token);







/*


//const Discord = require('discord.js');
//const BotClient = new Discord.Client();
//const Token = process.env['BOT_TOKEN'];
//const { MessageEmbed } = require('discord.js');

// -- Server Stats That Don't Change Locally -- //
var CoreStats = {
  Version: ["1.1.2"],
  Prefix: ["!"],
};
// -- COMMAND_FUNCTIONS -- //
function Command_Changelog(){
    return "***What's new in Version " + ServerStats.Version + "?\n***" +
    "```" +
    " + Added Changelog \n" +
    " + Added Commands! \n" +
    "```";
};
////////////////////////////////////
function ListCurrentServers(){
  BotClient.guilds.cache.forEach(guild => {
    console.log('${guild.name} | ${guild.id}');
  });
};
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
// -- BOTCLIENT EVENTS -- //

BotClient.on('ready', () =>{
  console.log('====================================');
  console.log(' ~ Farmer Dan Bot -- Version ' + CoreStats.Version + '- ~ ')
  console.log('========= by clayman100man =========');
  console.log('====================================');
  console.log('Type "node ." to start the program!!');
  console.log('====================================');
  console.log('Add this bot to your discord server by following the link: https://discord.com/oauth2/authorize?client_id=900029558441529354&scope=bot&permissions=0');

    BotClient.user.setActivity(
        `No Sleep in ${BotClient.guilds.cache.size} Server(s)`, {
        type: "PLAYING",
    });
});

*/