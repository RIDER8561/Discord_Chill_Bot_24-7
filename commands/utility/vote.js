const Discord = require("discord.js");
const db = require("old-wio.db");
const { Owner_Name } = require("../../config");
const { support } = require("../../config.json");

module.exports = {
  config: {
  name: "vote",
  aliases: ["vt"],
  category: "utility",
  description: "I will share vote link with you..Keep vote us in every 12hours.",
  usage: "Vote Us",
  },
  run: async (bot, message, args) => {
    
    const vote = `https://discordbotlist.com/bots/chill-mod/upvote`, Owne = `${Owner_Name}`;
    
    const Embed = new Discord.MessageEmbed()
    .setColor("#0FF1F1")
    .setTitle("THANKS FOR USING ME! KEEP VOTE US")
    .addField("VOTE US", '[VOTE NOW](https://top.gg/bot/853830507326472242/vote)',true)
    .addField("SUPPORT SERVER", `[JOIN NOW](${support})`, 
    true)
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp();
    
    return message.channel.send(Embed).catch(() => message.channel.send("VOTE US - " + Vote));
  }
};