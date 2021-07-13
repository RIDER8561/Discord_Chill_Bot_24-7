const Discord = require("discord.js");

module.exports = {
    config: {
        name: "ping",
        description: "MY PING IS BELOW...HIGH PING",
        category: 'utility',
        usage: "ping",
        example: "ping",
        aliases: ['p']
    },
    run: async (bot, message, args) => {
        let start = Date.now();
  
  message.channel.send({embed: {description: "🔍 MY PING IS VERY HIGHT...", color: "#0FF1F1"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("PING!", message.author.avatarURL({ dynamic: true }))
    .addField("API LATENCY", Math.round(bot.ws.ping) + "ms", true)
    .addField("MESSAGE SPEED", end - start + "ms")
    .setColor("#0FF1F1");
    m.edit(embed).catch(e => message.channel.send(e));
    
  });
    }
};