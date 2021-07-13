const Discord = require("discord.js");
const db = require("old-wio.db");
const { Owner_Name } = require("../../config");
const { support } = require("../../config.json");

module.exports = {
  config: {
  name: "templates",
  aliases: ["tp"],
  category: "utility",
  description: "I will share many Template links with you",
  usage: "Template",
  },
  run: async (bot, message, args) => {
    
    const vote = `https://discordbotlist.com/bots/chill-mod/upvote`, Owne = `${Owner_Name}`;
    
    const Embed = new Discord.MessageEmbed()
    .setColor("#0FF1F1")
    .setTitle("Here is best teamplates, You can use as per your fav")
		 .addField("😘 TOTAL GAMING TEMPLATE", '[GET NOW](https://discord.new/EfVxdQgGqpQ7)',true)
		 .addField("😊 GAMING SERVER TEMPLATE", '[GET NOW](https://discord.new/fBBWVz2fNcN9)',true)
		  .addField("🎉 GIVEAWAY SERVER TEMPLATE", '[GET NOW](https://discord.new/cWHXVXFCr8Uj)',true)
		 .addField("📭 SUPPORT SERVER TEMPLATE", '[GET NOW](https://discord.new/H6W7wdpTnhC8)',true)
		 .addField("💖 PROFESSIONAL SERVER TEMPLATE", '[GET NOW](https://discord.new/RMh8dutbj49u)',true)
		 .addField("🧮 ADVERTISING SERVER TEMPLATE", '[GET NOW](https://discord.new/RF3PjPHKrZE3)',true)
		 .addField("🖌 SIMPLE GAMING SERVER TEMPLATE", '[GET NOW](https://discord.new/a8uG7FaTcVDd)',true)
		 .addField("🎊 GIVEAWAY SERVER TEMPLATE 2", '[GET NOW](https://discord.new/gBZZX8TjbPge)',true)
		 .addField("🎁EVENTS SERVER TEMPLATE", '[GET NOW](https://discord.new/QUv4jCc9ESZ5)',true)
		 .addField("🔗 BOT SUPPORT SERVER TEMPLATE", '[GET NOW](https://discord.new/ahrmJ89nKa8D)',true)
	
    .addField("SUPPORT SERVER", `[JOIN NOW](${support})`, 
    true)
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp();
    
    return message.channel.send(Embed).catch(() => message.channel.send("VOTE US - " + Vote));
  }
};