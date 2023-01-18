const intents = ["GUILDS", "GUILD_MEMBERS"];
const Discord = require("discord.js");
const bot = new Discord.Client({intents: intents, ws:{intents: intents}});

var prefix = process.env.prefix;

bot.on("guildMemberAdd", (member) => {  
    const welcomembed = new Discord.MessageEmbed()
        .setDescription(`Hoşgeldin, <@${member.user.id}>! İyi Eğlenceler!`)
    .setImage("https://media.giphy.com/media/JEhvXeFh1eAx3t22Qd/giphy.gif")
        .setColor("GREEN");
    member.guild.channels.cache.get("838789868259639336").send(welcomembed)

        .catch((err) => console.log(err));
});


module.exports = member => {
    let username = member.user.username;
    const welcomembed = new Discord.MessageEmbed()
        .setDescription(`Hey <@${member.user.id}>! Sunucuya Hoşgeldinn :tada:.`)
    .setImage("https://media.giphy.com/media/JEhvXeFh1eAx3t22Qd/giphy.gif")
        .setColor("GREEN");
    member.guild.channels.cache.get("838789868259639336").send(welcomembed)
};
