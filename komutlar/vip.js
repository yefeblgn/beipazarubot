const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send("VIP rolünü vereceğim kişiyi etiketlemelisin!")

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.add("913946117283135498").then(a=> {
let embed = new Discord.MessageEmbed()
    .setAuthor("VIP Üyeliği", client.user.avatarURL())
    .setColor("#FFFB05")
.setThumbnail('https://i.imgur.com/ZJFX3CC.png')
.setDescription(`<@${kisi.id}> Adlı Kullanıcıya VIP Üyeliği Verildi! \nVIP Üyeliğini Veren Kullanıcı <@${message.author.id}>`)
    .setFooter(
      'BOT yefeblgn | VIP Üyeliği Sistemi', 'https://i.imgur.com/TJmHmj6.png'
    );
  message.channel.send(embed);
}).catch(err => message.channel.send("Rolü veremedim."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vip"],
  permLevel: 4
};

exports.help = {
  name: 'vipüye',
  description: 'Rol verir.',
  usage: 'vipüye'
};
