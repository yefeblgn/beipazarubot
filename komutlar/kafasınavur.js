const Discord = require('discord.js');

exports.run = (client, message, args) => {
 var embeddd = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embeddd})
  message.delete
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kafasına vurmak istediğin kişiyi etiketle!**');
    const embed = new Discord.MessageEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`**Hey ${mesaj}, <@${message.author.id}> Kafana çok sert bir şekilde vurdu :flushed:. Canın Acımış Olmalı!**`)
    .setImage("https://cdn.discordapp.com/attachments/838790063944237096/943055640794923038/head-hit-anime.gif")
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kafasınavur'],
  kategori: "Eğlence",
  permLevel: 0
};

exports.help = {
  name: 'kafasınavur',
  description: 'İstediğiniz Kişinin Kafasına Vurursunuz.',
  usage: 'kafasınavur <@etiket>'
};