const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const Token = process.env['BOT_TOKEN'];

const BotClient = new Client({ intents: [Intents.FLAGS.GUILDS] });


// -- Server Stats That Don't Change Locally -- //
var CoreStats = {
  Version: ["1.2.0"],
  Prefix: ["!"],
};



BotClient.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	BotClient.commands.set(command.data.name, command);
}

BotClient.once('ready', () => {
	console.log('Ready!');
  StartUpLogAndStatus()
});

BotClient.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = BotClient.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});




function StartUpLogAndStatus(){
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
};


BotClient.login(Token);

















































/*

const { Client, Intents } = require('discord.js');
const {  } = require('./config.json');

const BotClient = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});


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