const Discord = require('discord.js')

    exports.run = (client, message, args) => {
       var embed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embed})
  message.delete
        let kullanıcı = message.mentions.members.first();

        if(kullanıcı){
            const $adista = new Discord.MessageEmbed()
            .setDescription(`${kullanıcı} Kişisinin Profil Resmi`)
            .setColor('#36393F')
            .setImage(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send($adista)
        } else {
            const $adista = new Discord.MessageEmbed()
            .setDescription(`${message.author} Profil Resmin`)
            .setColor('#36393F')
            .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
            message.channel.send($adista)
        }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  kategori: "Eğlence",
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatarını Gönderir.',
  kategori: "Eğlence",
  usage: 'avatar <@kullanıcı>'
};