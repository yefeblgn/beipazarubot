const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send("Gold rolünü vereceğim kişiyi etiketlemelisin!")

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.add("913946359999115314").then(a=> {
let embed = new Discord.MessageEmbed()
    .setAuthor("Gold Üyeliği", client.user.avatarURL())
    .setColor("#FFFB05")
.setThumbnail('https://i.imgur.com/YjVPRcH.png')
.setDescription(`<@${kisi.id}> Adlı Kullanıcıya Gold Üyeliği Verildi! \nGold Üyeliği Veren Kullanıcı <@${message.author.id}>`)
    .setFooter(
      'BOT yefeblgn | Gold Üyeliği Sistemi', 'https://i.imgur.com/TJmHmj6.png'
    );
  message.channel.send(embed);
}).catch(err => message.channel.send("Rolü veremedim."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold"],
  permLevel: 4
};

exports.help = {
  name: 'goldüye',
  description: 'Rol verir.',
  usage: 'goldüye'
};
