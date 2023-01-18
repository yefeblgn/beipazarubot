const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
    msg.delete();
  const yasak = client.emojis.cache.get('811958245094326372');
  var embeed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${msg.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (msg.channel.id !== '913932274238648421') return msg.channel.send({embed: embeed})
  msg.delete
      let u = msg.mentions.users.first() || msg.author;

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
        let sira = '';
        var str = ''
        const sorted = msg.guild.members.cache.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`seviye_${b.user.id + msg.guild.id}`) - db.fetch(`seviye_${a.user.id + msg.guild.id}`) });
        const top10 = sorted.splice(0, msg.guild.members.cache.size)
        const mappedName = top10.filter(o => !o.bot).map(s => s.user.id);
        const mappedLevel = top10.filter(o => !o.bot).map(s => db.fetch(`seviye_${s.user.id + msg.guild.id}`) || 0)
        const emoji = client.emojis.cache.get("");
        

        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < 10; i++) {
            var lvl = mappedLevel[i]
      
            if(msg.author.id === mappedID[i]) {
                str += `**[${i + 1}]** <@${mappedName[i]}>\n  **Seviye:** ${lvl ? lvl : '0'} \n\n`
            }

            if(msg.author.id !== mappedID[i]) {
                str += `**[${i + 1}]** <@${mappedName[i]}>\n  **Seviye:** ${lvl ? lvl : '0'} \n\n`
            }
        }

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
        let wEmbed = new Discord.MessageEmbed()
        .setTitle(`Beipazaru Seviye Sıralaması | Top 10`)
        .setColor('RANDOM')
       .setFooter(
        "Bu komutu kullanan kullanıcı " + msg.author.tag,
        msg.author.displayAvatarURL()
      )
        .setDescription(`${str}`)
        msg.channel.send(wEmbed)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sıralama", "top10"],
  permLevel: 0,
    kategori: "Genel"
};

exports.help = {
  name: 'sıralama',
  description: 'Seviye sisteminin sunucudaki liderlik tablosunu gösterir.',
  usage: 'sıralama'
};