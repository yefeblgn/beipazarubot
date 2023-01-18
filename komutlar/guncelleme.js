const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#eda53b')
    .setAuthor('Beipazaru Launcher Hakkında Önemli Bilgiler', 'https://cdn.discordapp.com/attachments/838790154583539742/995728013473894600/B-27-06-2022_1.png')
  .setDescription('**:warning: Launcher sunucuları kapatılmıştır. Güncelleme almayacaktır!\n\n:trident: Launcher uzun bir süre bakıma alınacak ve açılmayacaktır.\n\n:trident: Launcherdaki hatalar ve eksikler gözden geçirilip tüm her şey tamamlanacak şekilde kullanıma sunulacaktır.\n\n:trident: Mojang, Microsoft ve Beipazaru hesaplarıyla giriş yapma seçeneği eklenecek.\n\n:trident: Güvenlik Sertifikası (SSL) satın alınıp sorunsuz ve güvenli bir Launcher sağlanacak.\n\n:trident:Web entegresi ile Launcherda skin, kozmetik ve pelerin kullanabilme özelliği eklenecek.**')
    .setThumbnail('https://cdn.discordapp.com/attachments/838790154583539742/995728013473894600/B-27-06-2022_1.png')
    .setFooter('Beipazaru Launcherın erişimi tamamen kapatılmıştır. İndirmeniz ve giriş yapmanız mümkün değildir...', 'https://i.imgur.com/TJmHmj6.png');

message.channel.send(exampleEmbed);
};

exports.conf = {
  aliases: ['mcduyuru'],
  permLevel: 4,
};

exports.help = {
  name: 'mcduyuru',
  description: 'Bot yazdıklarını tekrar eder.',
  usage: 'mcduyuru (yazı)'
};