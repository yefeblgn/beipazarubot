const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "659515013433655309") return message.reply('Bunu Sadece Sahibim Kullanabilir');
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendMessageEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Göndereceğim mesajı yaz');
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj Göndereceğim yaz veya etiketle.').catch(console.error);
  message.delete();
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`**Hey, Selam! Beipazaru Yetkilileri İçin Atılmış Özel Duyuru;**`)
  .setImage("https://cdn.discordapp.com/attachments/838790063944237096/1026111895779954698/unknown.png")
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkiliduyuru'],
  permlevel: 4
};

exports.help = {
  name: 'yetkiliduyuru',
  description: 'Bir kullanıcıya özelden mesaj yollar.',
  usage: 'mesajat'
};