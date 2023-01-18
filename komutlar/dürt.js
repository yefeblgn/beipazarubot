const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Dürtmek istediğin kişiyi etiketlemelisin!');
  
  let reason = args.slice(1).join(' ');
  const embedd = new Discord.MessageEmbed()
.setColor("RANDOM")
    .setDescription(`Hey, ${user}! <@${message.author.id}> adlı kişi seni dürttü!`)
  .setImage("https://cdn.discordapp.com/attachments/838790063944237096/943059421582487562/mashiro-mitsumine.gif")
    .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
    message.delete({ timeout: 1000, reason: ' ' })
if (reason.length < 1) return message.reply(embedd);
  message.delete();
  
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
    .setDescription(`Hey, ${user}! <@${message.author.id}> adlı kişi seni dürttü ve dedi ki; ***${reason}***`)
.setImage("https://cdn.discordapp.com/attachments/838790063944237096/943059421582487562/mashiro-mitsumine.gif")
    .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
    message.delete({ timeout: 1000, reason: ' ' })
    message.channel.send({embed})
};

exports.conf = {
  aliases: ['dürt, durt'],
  permLevel: 0,
  kategori: "Eğlence",
};

exports.help = {
  name: 'dürt',
  description: 'Etiketlediğin kişiyi dürter',
  usage: '!dürt (@kullanıcı)'
};