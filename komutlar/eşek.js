const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {
    var embedd = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embedd})
  message.delete
 
        var anasonuc = Math.floor(Math.random() * 5)

        var yorum = `https://cdn.discordapp.com/attachments/838790063944237096/939267489811021887/ImpishLimpDrafthorse-size_restricted.gif`
        if(anasonuc < 4) {
                var yorum = 'https://cdn.discordapp.com/attachments/838790063944237096/939563595656749147/image_1.png'
        }
        if(anasonuc < 3) {
                var yorum = 'https://cdn.discordapp.com/attachments/838790063944237096/939563596269105222/image.png'
        }
        if(anasonuc < 2) {
                var yorum = 'https://cdn.discordapp.com/attachments/838790063944237096/939563596566917150/image_2.png'
        }
        if(anasonuc < 1) {
                var yorum = 'https://cdn.discordapp.com/attachments/838790063944237096/939563608415821884/screen-3.jpg'
        }
        const embed = new Discord.MessageEmbed()
                .setDescription(`**Biri Eşşşek mi Dedi?!** ${message.client.emojis.cache.find(emoji => emoji.name === "esek")}`)
.setImage(yorum)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eşek', 'eşşek'],
  kategori: "Eğlence",
  permLevel: 0
};

exports.help = {
  name: 'Eşek',
  description: ':)',
  usage: 'eşek'
};