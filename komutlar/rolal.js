const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
let kisi1 = message.mentions.members.first()
if (!kisi1) return message.channel.send("Rolünü almak istediğin kişiyi etiketle!")

let rolid = args.slice(1).join(' ');
if (!rolid) return message.channel.send("Alacağın rolün idsini etiketle!")
  
const kisi2 = message.guild.members.cache.get(kisi1.id)

kisi2.roles.remove(rolid).then(a=> {
let embed = new Discord.MessageEmbed()
    .setAuthor("Rol Sistemi", client.user.avatarURL())
    .setColor("#FFFB05")
.setDescription(`<@${kisi1.id}> Adlı Kullanıcıdan <@&${rolid}> rolü alındı!`)
    .setFooter(
      'yefeblgN x Delpheinz | Rol Sistemi', 'https://i.imgur.com/TJmHmj6.png'
    );
  message.channel.send(embed);
}).catch(err => message.channel.send("Rolü alamadım."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolal"],
  permLevel: 4
};

exports.help = {
  name: 'rolal',
  description: 'Rol alır.',
  usage: 'rolal'
};