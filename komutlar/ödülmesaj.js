const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#eda53b')
    .setTitle(':tada: 50 Puan == 1 Aylık Youtube Premium \n:tada: 50 Puan == 1 Aylık Spotify Premium \n:tada: 75 Puan == 1 Aylık Classic Discord Nitro \n:tada: 75 Puan == 1 Aylık Exxen Üyeliği (Reklamlı) \n:tada: 100 Puan == 1 Aylık Netflix Standart Plan')
    .setAuthor('Puan Ödülleri', 'https://cdn.discordapp.com/attachments/838790063944237096/949347142219214858/1f381.png')
  .setDescription("Ödülleri Almak İçin yefeblgn#6625 İle İletişime Geçiniz. Steam Key, Play Store Key gibi bir çok ürünü eklemeyi düşünüyoruz.")
    .setThumbnail('https://cdn.discordapp.com/attachments/838790063944237096/949347142219214858/1f381.png')
    .setFooter('BOT yefeblgn | Ödül Sistemi (Beta)', 'https://i.imgur.com/TJmHmj6.png');

message.channel.send(exampleEmbed);
};

exports.conf = {
  aliases: ['ödülduyuru'],
  permLevel: 4,
};

exports.help = {
  name: 'ödülduyuru',
  description: 'Bot yazdıklarını tekrar eder.',
  usage: '!ödülduyuru (yazı)'
};