const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2024-01-01 03:00:00')
    let zaman = ms(okul - Date.now())

    message.channel.send({embed: {
          color: "RANDOM",
        description: (`Yılbaşının kutlanmasına **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika kaldı!`)
    }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yılbaşı"],
    kategori: 'Eğlence',
  permLevel: 0
};

exports.help = {
  name: 'yılbaşı',

  description: 'Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.',
  usage: 'yılbaşı'
};