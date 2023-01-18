const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    let ozelmesajuyari = new Discord.messageEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('Hey Sen ', 'Merhaba')
    return message.author.send(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      let mesajat = new Discord.MessageEmbed()
      .setTitle("Sunucumuzda Yeni Bir Çekiliş Başladı!")
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')
      .setTimestamp()
      .setImage("https://cdn.discordapp.com/attachments/838790063944237096/1050046124209221693/girl-anime.gif")

      client.users.cache.forEach(u => {
u.send(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj başarıyla **` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gönderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyuru'],
  permLevel: 4,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'Duyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};