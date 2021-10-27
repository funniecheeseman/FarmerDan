

function ListCurrentServers(){
  BotClient.guilds.cache.forEach(guild => {
    console.log('${guild.name} | ${guild.id}');
  });
};