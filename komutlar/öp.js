const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
  var embeed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embeed})
  message.delete
    if (!message.mentions.users.first()) return message.reply("Öpmek istediğin kişiyi etiketlemelisin.");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.reply("Kurucumu Öpemezsin!")
    if (message.mentions.users.first().id == message.author.id) return message.reply("D-dostum, cidden bu kadar mı yıkıksın :(")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "242263403001937920") return message.reply("Onu neden öptün! >///<")
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username}, ${message.mentions.users.first().username} adlı kişiyi öptü. Havada aşk kokusu var >:3`)
    .setImage(body.url) 
    .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    kategori: "Eğlence",
    aliases: ['öp'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'öp',
    description: 'Etiketlediğin kişiyi öpersin. (Beipazaru Sunucusuna Özeldir)',
    usage: 'öp'
  };