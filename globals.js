const Discord = require('discord.js')
const Token = process.env['BOT_TOKEN'];
const BotClient = new Discord.Client();

// -- Server Stats That Don't Change Locally -- //
var CoreStats = {
  Version: ["1.4.1"],
  Prefix: ["!"],
};

module.exports = {
  Discord,
  Token,
  BotClient,
  CoreStats,
};