const discord = require('discord.js');
const client = new discord.Client();

const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
 var embed = new discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embed})
  message.delete
  if(!message.member.voice.channel) return message.channel.send('Herhangi bir ses kanalında değilsin!')

fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
      // Vloken Tarafından Yapılmıştır
const exampleEmbed = new discord.MessageEmbed()
	.setColor('#ADD8E6')
	.setTitle('[Açmak İçin Tıklayınız]')
	.setURL(`https://discord.gg/${invite.code}`)
	.setAuthor('Fishington', 'https://i.imgur.com/slsGjiZ.png')
	.setThumbnail('https://i.imgur.com/slsGjiZ.png')
	.setFooter('BOT yefeblgn | Aktivite Sistemi', 'https://i.imgur.com/TJmHmj6.png');

message.channel.send(exampleEmbed);
                    
                })

  
                

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: "Aktivite",
  aliases: ["fishington"],
  permLevel: 0
};

exports.help = {
  name: 'fishington',
  description: "Arkadaşlarınızla beraber buluşup balık tutabileceğiniz bir oyun.",
  usage: '!fishington'  
  
};