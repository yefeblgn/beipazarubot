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
                        target_application_id: "879863976006127627",
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
	.setColor('#caa472')
	.setTitle('[Açmak İçin Tıklayınız]')
	.setURL(`https://discord.gg/${invite.code}`)
	.setAuthor('Word Snack', 'https://i.imgur.com/S0rPqFr.png')
	.setThumbnail('https://i.imgur.com/S0rPqFr.png')
	.setFooter('BOT yefeblgn | Aktivite Sistemi', 'https://i.imgur.com/TJmHmj6.png');

message.channel.send(exampleEmbed);
                    
                })

  
                

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: "Aktivite",
  aliases: ["wordsnack"],
  permLevel: 0
};

exports.help = {
  name: 'wordsnack',
  description: "Harfleri birleştirerek oynanan bir kelime bulmaca oyunu.",
  usage: '!wordsnack'
};