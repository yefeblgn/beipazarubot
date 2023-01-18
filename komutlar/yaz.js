const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  const yazi = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(mesaj)
  
  
  message.channel.send(yazi);
};

exports.conf = {
  aliases: ['yaz, say, söyle,'],
  kategori: "Moderasyon",
  permLevel: 4,
};

exports.help = {
  name: 'yaz',
  description: 'Bot yazdıklarını tekrar eder.',
  usage: '!yaz (yazı)'
};