const Discord = require('discord.js')

exports.run = (client, message, args) => {
         let mesaj = args.slice(0).join(' ')



  if(mesaj === "id") {
     const emojiList = message.guild.emojis.cache.map((e, x) => (x + ' | ' + e)).join('\n');
  	var emojis = message.guild.emojis.array();
  const embed2 = new Discord.MessageEmbed()
.setColor("RED")
  .setFooter(`Sadece emojileri görmek için !emojiler`)
.setDescription(`\`\`\`js
Sunucuda Bulunan Emojiler (${emojis.length} adet)
${emojiList}
\`\`\``)
             .setTimestamp() 
 message.channel.send(embed2);
        return
  }
      try {
        const embed = new Discord.MessageEmbed()
            .addField(`Sunucuda Bulunan Emojiler`, message.guild.emojis.cache.map(emoji => emoji).join(' | '))
            .setColor('RED')
            .setTimestamp()
          .setFooter(`Emojileri IDleri ile birlikte görmek için; !emojiler id`)
        message.channel.send(embed)
    } catch (err) {
        const embed = new Discord.MessageEmbed()
            .addField(`Sunucuda Bulunan Emojiler`, 'Üzgünüm ama sunucunuzda ya çok fazla emoji bulunuyor ya da hiç emoji bulunmuyor. Bunları gösteremiyorum. Discord buna izin vermiyor.')
            .setColor('RED')
          .setFooter(`Emojileri IDleri ile birlikte görmek için !emojiler id`)
            .setTimestamp()
        message.channel.send(embed)
    }
  }


exports.conf = {
    enabled: true,
    guildOnly: true,
  aliases: ["emoji"],
  permLevel: 0,
   
    kategori: 'Sunucu'
}

exports.help = {
    name: 'emojiler',
    description: 'Sunucuda bulunan emojileri gösterir.',
    usage: 'emojiler'
}