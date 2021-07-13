const Discord = require("discord.js");
const db = require("old-wio.db");
const { Owner_Name } = require("../../config");
const { support } = require("../../config.json");

module.exports = {
  config: {
  name: "invite",
  aliases: ["IL"],
  category: "utility",
  description: "Give You My Invite Link",
  usage: "invite Me",
  },
  run: async (bot, message, args) => {
    
    const Invite = `https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot`, Owne = `${Owner_Name}`;
    
    const Embed = new Discord.MessageEmbed()
    .setColor("#0FF1F1")
    .setTitle("THANKS FOR USING ME! KEEP SUPPORT")
    .addField("INVITE ME", `[INVITE NOW](${Invite})`, true)
    .addField("SUPPORT SERVER", `[JOIN NOW](${support})`, 
    true)
    .addField("VOTE US", '[VOTE NOW](https://discordbotlist.com/bots/chill-mod/upvote)',true)
    .addField("OWNER", Owne, true)
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp();
    
    return message.channel.send(Embed).catch(() => message.channel.send("INVITE ME - " + Invite));
  }
};