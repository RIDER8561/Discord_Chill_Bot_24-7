const Discord = require('discord.js')
const fs = require("fs");
const { PREFIX } = require("../../config.js");
const db = require('old-wio.db');
const { stripIndents } = require("common-tags");
const { support } = require("../../config.json");

module.exports = {
config: {
    name: "help",
    description: "HELP MENU",
    category: 'utility',
    usage: "1) !help \n2) !help [module name]\n3) !help [command (name or alias)]",
    example: "1) !help\n2) !help util\n3) !help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
    
    try {

    let Categories = ["admin", "fun", "images", "info", "owner", "mod", "utility",],
    AllCommands = [];

const Emotes = {
    admin: "🛡️ Admins",
    fun: "🧩🎲 Games",
    images: "😂 Fun",
    info: "📧 Info",
		owner: "👑 Owner",
    mod: "🔧 Moderation",
    utility: "🔨 Usages",
		
};

for (let i = 0; i < Categories.length; i++) {
    const Cmds = await bot.commands.filter(C => C.config.category === Categories[i]).array().map(C => C.config.name).sort((a, b) => a < b ? -1 : 1).join(", ");
    AllCommands.push(`\n\n**${Emotes[Categories[i]]}**\n\`\`\`${Cmds}\`\`\``);
};

const Description = `__MY PREFIX__ = **${prefix}\n**${prefix}help or <@${bot.user.id}>help** = __FULL COMMAND LIST__\n`;

const Embed = new Discord.MessageEmbed()
    .setColor("#0FF1F1")
    .setAuthor("COMMAND LIST", message.author.avatarURL({
        dynamic: true
    }))
    .setDescription(Description + AllCommands.join("") + "" + "\n\n" + "__IMPORTANT LINKS__" + "\n" + ` [SUPPORT SERVER](${support}) • [INVITE ME](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot) • [VOTE US](https://discordbotlist.com/bots/chill-mod/upvote)`)
    .setFooter(`Requested by ${message.author.username}`, bot.user.displayAvatarURL())
    .setTimestamp();

if (!args[0]) return message.channel.send(Embed);

else {
    const embed = new Discord.MessageEmbed()
    .setColor("#0FF1F1")
    .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
    .setThumbnail(bot.user.displayAvatarURL())

    let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
    if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
    command = command.config

    embed.setDescription(stripIndents`
    ** Command -** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`\n
    ** Description -** \`${command.description || "No Description provided."}\`\n
    ** Usage -** [   \`${command.usage ? `${command.usage}` : "No Usage"}\`   ]\n
    ** Examples -** \`${command.example ? `${command.example}` : "No Examples Found"}\`\n
    ** Aliases -** [ \`${command.aliases ? command.aliases.join(" , ") : "None."}\` ]`)
    embed.setFooter(message.guild.name, message.guild.iconURL())

    return message.channel.send(embed)
};
} catch (e) {
  console.log(e);
};

    

}

}