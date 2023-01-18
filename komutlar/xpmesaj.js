const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#eda53b')
    .setAuthor('XP Nasıl Kazanılır?', 'https://cdn.discordapp.com/attachments/838790063944237096/949657795471503360/1024px-Video-Game-Controller-Icon-IDV-green.svg.png')
  .setDescription('**:video_game: Düello Kazanmak == 10 XP \n:video_game: Yazan Kazanır Kazanmak == 5 XP \n:video_game: Adam Asmaca Kazanmak == 7 XP \n:video_game: Sayı Tahmin Kazanmak == Kalan Hakkın Kadar XP \n:video_game: XOX Kazanmak == 7 XP \n:video_game: Vampir Köylüyü Vampir Olarak Kazanmak == Her Vampire 15 XP \n:video_game: Vampir Köylüyü Köylü Takımı Olarak Kazanmak == Her Yaşayana 10 XP**')
    .setThumbnail('https://cdn.discordapp.com/attachments/838790063944237096/949657627703537704/5542205.png')
    .setFooter('BOT yefeblgn | Seviye Sistemi (Beta) | Ödülleri Almak İçin yefeblgn#6625 İle İletişime Geçiniz. (200 XP = 1 Puan)', 'https://i.imgur.com/TJmHmj6.png');

message.channel.send(exampleEmbed);
};

exports.conf = {
  aliases: ['xpduyuru'],
  permLevel: 4,
};

exports.help = {
  name: 'xpduyuru',
  description: 'Bot yazdıklarını tekrar eder.',
  usage: '!xpduyuru (yazı)'
};