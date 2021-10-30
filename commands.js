/*
  Command List for Farmer Dan
*/
const CORE = require('./globals.js');

/////////////////////////////////////////////////////////////////////////////////////
// START UP AND LOGIN STATUS [Type: Startup]
/////////////////////////////////////////////////////////////////////////////////////
function StartUpLogAndStatus(){
  
  console.log('====================================');
  console.log(' ~ Farmer Dan Bot -- Version ' + CORE.CoreStats.Version + '- ~ ')
  console.log('========= by clayman100man =========');
  console.log('====================================');
  console.log('Type "node ." to start the program!!');
  console.log('====================================');
  console.log('Add this bot to your discord server by following the link: https://discord.com/oauth2/authorize?client_id=900029558441529354&scope=bot&permissions=0');

    CORE.BotClient.user.setActivity(
        `No Sleep in ${CORE.BotClient.guilds.cache.size} Server(s) - Version ` + CORE.CoreStats.Version, {
        type: "PLAYING",
    });
}

// !PING COMMAND [Type: Message Response]
function Command_Ping(){
  message.channel.send('Pong!')
}

module.exports = {
  StartUpLogAndStatus,
  Command_Ping,
};