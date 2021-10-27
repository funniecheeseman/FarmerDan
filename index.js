const Discord = require('discord.js');
const BotClient = new Discord.Client();
const Token = process.env['BOT_TOKEN'];
const { MessageEmbed } = require('discord.js');

// -- Server Stats That Don't Change Locally -- //
var CoreStats = {
  Version: ["1.1.1"],
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

    BotClient.user.setActivity(
        `No Sleep in ${BotClient.guilds.cache.size} Server(s)`, {
        type: "PLAYING",
    });
});
////////////////////////////////////
BotClient.on('message', UserMsg =>{
  if (UserMsg.content === CoreStats.Prefix + 'ping') {
    UserMsg.reply("pong");
  }   else if (UserMsg.content === CoreStats.Prefix + 'help')  {
    UserMsg.reply (
      "***" + CoreStats.Prefix + "help*** *->* ? \n" +
      "***" + CoreStats.Prefix + "ping*** *->* ? \n" +
      "***" + CoreStats.Prefix + "prefix*** *->* ? \n" +
      "***" + CoreStats.Prefix + "version*** *->* ? \n" +
      "***" + CoreStats.Prefix + "chicken*** *->* ? \n" +
      "***" + CoreStats.Prefix + "piss*** *->* ? \n" +
      "***" + CoreStats.Prefix + "deadchat*** *->* ? \n" +
      "***" + CoreStats.Prefix + "doinurmom*** *->* ? \n" +
      "***" + CoreStats.Prefix + "SelfHost*** *->* ? \n"
    );
  }   else if (UserMsg.content === CoreStats.Prefix + 'prefix')  {
    UserMsg.reply("lol");
  }   else if (UserMsg.content === CoreStats.Prefix + 'version')  {
    UserMsg.reply("Farmer Dan Bot, Version: " + CoreStats.Version);
  }   else if (UserMsg.content === CoreStats.Prefix + 'chicken')  {
    UserMsg.reply("omnomnomnom");
  }   else if (UserMsg.content === CoreStats.Prefix + 'piss')  {
    UserMsg.reply(":japanese_goblin:");
  }   else if (UserMsg.content === CoreStats.Prefix + 'deadchat')  {
    UserMsg.reply("https://tenor.com/view/among-ass-dead-chat-gif-19388942");
  }   else if (UserMsg.content === CoreStats.Prefix + 'doinurmom')  {
    UserMsg.reply("https://cdn.discordapp.com/attachments/763487429419073566/902373206525112340/RPReplay_Final1577907996.mov");
  }   else if (UserMsg.content === CoreStats.Prefix + 'ServerList') {
    ListCurrentServers();
  }   else if (UserMsg.content === CoreStats.Prefix + 'SelfHost') {
      UserMsg.reply("Don't want Farmer Dan to go offline? Go here and click on the run button at the top of the screen to host it online yourself!")
      UserMsg.reply("https://replit.com/@funniecheeseman/FarmerDan-Main#index.js")
  }   else if (UserMsg.content === CoreStats.Prefix + 'Test') {
  const exampleEmbed = {
    color: 0x0099ff,
    title: 'The Cool Command',
    url: 'https://discord.js.org',
    author: {
      name: 'Some name',
      icon_url: 'https://i.imgur.com/AfFp7pu.png',
      url: 'https://discord.js.org',
    },
    description: 'Some description here',
    thumbnail: {
      url: 'https://i.imgur.com/AfFp7pu.png',
    },
    fields: [
      {
        name: 'Regular field title',
        value: 'Some value here',
      },
      {
        name: '\u200b',
        value: '\u200b',
        inline: false,
      },
      {
        name: 'Inline field title',
        value: 'Some value here',
        inline: true,
      },
      {
        name: 'Inline field title',
        value: 'Some value here',
        inline: true,
      },
      {
        name: 'Inline field title',
        value: 'Some value here',
        inline: true,
      },
    ],
    image: {
      url: 'https://i.imgur.com/AfFp7pu.png',
    },
    timestamp: new Date(),
    footer: {
      text: 'Some footer text here',
      icon_url: 'https://i.imgur.com/AfFp7pu.png',
    },
  };
  channel.send({ embeds: [exampleEmbed] });
  }
});

BotClient.login(Token);
////////////////////////////////////
/*
BotClient.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'helpmenu') {
		const row = new Discord.MessageActionRow()
			.addComponents(
				// ...
			);

		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setDescription('Some description here');

		await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
	}
});


////////////////////////////////////
////////////////////////////////////
// at the top of your file
  // STATUS BAR (PLAYING STREAMING WATCHING)
   /*
  BotClient.user.setActivity( // Current Status
     "No More Sleep", 
     type: "PLAYING"}); 
      */
// inside a command, event listener, etc.

      // Playing in my support server
      //client.user.setActivity("in my support server", { type: "PLAYING" }); 

      // Streaming <name of stream>
     // client.user.setActivity({ type: "STREAMING", url: "<twich url>" });
    
      // Watching over xx servers
      //client.user.setActivity(`over ${client.guilds.cache.size} servers`, {
        //type: "WATCHING",
      //});
    
      // Listening to x users
      //client.user.setActivity(
        //`to ${client.guilds.cache
         // .map((guild) => guild.memberCount)
          //.reduce((p, c) => p + c)} users`,
        //{ type: "LISTENING" }
      //);

//*/