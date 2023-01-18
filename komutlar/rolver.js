const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
let kisi1 = message.mentions.members.first()
if (!kisi1) return message.channel.send("Rol vermek istediğin kişiyi etiketle!")

let rolid = args.slice(1).join(' ');
if (!rolid) return message.channel.send("Vereceğin rolün idsini etiketle!")
  
const kisi2 = message.guild.members.cache.get(kisi1.id)

kisi2.roles.add(rolid).then(a=> {
let embed = new Discord.MessageEmbed()
    .setAuthor("Rol Sistemi", client.user.avatarURL())
    .setColor("#FFFB05")
.setDescription(`<@${kisi1.id}> Adlı Kullanıcıya <@&${rolid}> rolü verildi!`)
    .setFooter(
      'yefeblgN x Delpheinz | Rol Sistemi', 'https://i.imgur.com/TJmHmj6.png'
    );
  message.channel.send(embed);
}).catch(err => message.channel.send("Rolü veremedim."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolver"],
  permLevel: 4
};

exports.help = {
  name: 'rolver',
  description: 'Rol verir.',
  usage: 'rolver'
};