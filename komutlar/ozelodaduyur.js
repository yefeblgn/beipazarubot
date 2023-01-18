const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#eda53b')
    .setDescription('**:question: Özel Oda Nasıl Açılır? \n:fleur_de_lis:** ***?özeloda oluştur [Kapasite] [Oda İsmi]*** \n\n**:question: Özel Odaya Nasıl Birini Eklerim, Kaldırırım?** \n:fleur_de_lis: ***?özeloda izin [Kişi Etiketi]*** \n*(Kaldırmak için tekrardan aynı komutu yazıp kişiyi etiketleyiniz.)* \n\n:question: **Özel Odamı Nasıl Silebilirim?** \n:fleur_de_lis: ***?özeloda sil***')
    .setAuthor('Yeni Özel Oda Sistemi ve Komutları;', 'https://cdn.discordapp.com/avatars/953054091347656724/877160656c932518160f4f7d4e6eebcc.png?size=4096')
    .addFields({ name: ':exclamation:', value: 'Özel Odalarınız Boş İse 15 Saniye İçinde Silinir.', inline: true })
    .setThumbnail('https://cdn.discordapp.com/attachments/838790154583539742/1031307995843395684/kisspng-emoji-discord-sticker-final-fantasy-xiv-emoticon-5b1f639000bdf1.8291282015287837600031-removebg-preview.png')
    .setFooter('Beipazaru x yefeblgN | Özel Oda Sistemi', 'https://cdn.discordapp.com/avatars/953054091347656724/877160656c932518160f4f7d4e6eebcc.png?size=4096');

message.channel.send(exampleEmbed);
};

exports.conf = {
  aliases: ['ööduyuru'],
  permLevel: 4,
};

exports.help = {
  name: 'ozelodaduyuru',
  description: 'Bot yazdıklarını tekrar eder.',
  usage: '!öasddülduyuru (yazı)'
};