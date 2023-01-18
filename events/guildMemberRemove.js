
const intents = ["GUILDS", "GUILD_MEMBERS"];
const Discord = require("discord.js");
const bot = new Discord.Client({intents: intents, ws:{intents: intents}});

var prefix = process.env.prefix;

bot.on("guildMemberAdd", (member) => {
    const welcomembed = new Discord.MessageEmbed()
        .setAuthor(`Sunucudan biri ayrıldı!`, member.user.avatarURL())
        .setDescription(`<@${member.user.id}> Sunucudan ayrıldı!`)
        .setColor("FF0000");
    member.guild.channels.cache.get("838789868259639336").send(welcomembed)

        .catch((err) => console.log(err));
});


module.exports = member => {
    let username = member.user.username;
    const welcomembed = new Discord.MessageEmbed()
        .setDescription(`<@${member.user.id}> Sunucudan ayrıldı! :nail_care: `)
    .setImage("https://c.tenor.com/q4MdS-jsDqQAAAAd/table-hit-yakuza.gif")
        .setColor("FF0000");
    member.guild.channels.cache.get("838789868259639336").send(welcomembed)
};

