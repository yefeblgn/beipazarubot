const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args ) => {
  
let embed = new MessageEmbed().setFooter("BOT yefeblgn | Moderasyon Sistemi").setColor("RANDOM");
let banLog = message.guild.channels.cache.find(channel => channel.name === "『📥』mod-log");
let bancıRolu = message.guild.roles.cache.find(rol => rol.name === "Kurucu");


if (!message.member.roles.cache.has(bancıRolu) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**Gerekli yetkiye sahip değilsin.**`).then(msg => { msg.delete({ timeout: 10000 })}).catch(console.error);


if (!args[0]) return message.channel.send(`**Lütfen yasağını kaldırmak istediğin kişinin IDsini gir.**`).then(msg => {msg.delete({ timeout: 10000 })}).catch(console.error);

let sorguid = args[0]

message.guild.fetchBans(true).then(async (bans) => {
  let ban = await bans.find(a => a.user.id === sorguid)
  if (!ban) {
  
    message.channel.send(`<@${sorguid}> üye zaten sunucuda yasaklı değil.`).then(x => x.delete({timeout:6500}));
  
    } else {

message.guild.members.unban(sorguid, `${message.author.tag} tarafından banı açıldı.`)

message.channel.send(`<@${sorguid}> (${sorguid}) adlı kullanıcının banı kaldırıldı.`);

banLog.send(embed.setDescription(`**Banı kaldırılan: <@${sorguid}> (${sorguid})**\n\n**Banı kaldıran kişi: <@${message.author.id}>**\n`))

};
});


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:['unban','bankaldır','bankaldir'],
    permlevel: 2
};

exports.help = {
    name: "unban"
};