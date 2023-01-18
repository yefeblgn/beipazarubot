const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    var embedd = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embedd})
  message.delete
    if (!message.mentions.users.first()) return message.reply("Kafasını okşamak istediğin kişiyi etiketle");
    if (message.mentions.users.first().id === client.user.id) return message.channel.send('<a:yayyy:497742636439044096>');
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('S-selam kafanı okşamaya geldim,.. ***fıtıfıtıfıtı***');
    const { body } = await superagent
    .get("https://nekos.life/api/pat");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`Hey! ${message.mentions.users.first().username}, ${message.author.username} Senin kafası okşadı!!`)
    .setImage(body.url) 
    .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kafaokşa'],
    kategori: "Eğlence",
    permLevel: 0
  };
  
  exports.help = {
    name: 'kafaokşa',
    description: 'Birinin kafasını okşarsın. (Beipazaru Sunucusuna Özeldir)',
    kategori: "Eğlence",
    usage: 'kafaokşa'
  };