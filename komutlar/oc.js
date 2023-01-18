const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
let kisi1 = message.mentions.members.first()
if (!kisi1) return message.channel.send("Birini Etiketle!")

let rolid = "1049721687542861884";
  
const kisi2 = message.guild.members.cache.get(kisi1.id)

kisi1.roles.add("1049721687542861884").then(a=> {
let embed = new Discord.MessageEmbed()
    .setAuthor("Rol Sistemi", client.user.avatarURL())
    .setColor("#FFFB05")
.setDescription(`<@${kisi1.id}> Adlı kullanıcı <@&${rolid}> oldu!`)
    .setFooter(
      'Allah allah bu komutta ne böyle', 'https://i.imgur.com/TJmHmj6.png'
    );
  message.channel.send(embed);
}).catch(err => message.channel.send("Rolü veremedim."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oc","oç","orospucocu"],
  permLevel: 2
};

exports.help = {
  name: 'oc',
  description: 'Rol verir.',
  usage: 'rolver'
};