const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
    
   var embedd = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#923981608170696745> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '923981608170696745') return message.channel.send({embed: embedd})
  message.delete
  
  message.delete();
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`6` Saatte bir anket oluşturabilirsiniz. - " + message.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 21600000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }  
  const db = require('quick.db');
  

 
  
   const x = args.slice(0).join(' ');
  
    if (!x) return message.reply('Lütfen bir oylama içeriği giriniz');
     message.delete()
    // Create Embed
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(x)
    .setFooter(
      "Anketi başlatan kişi  " + message.author.tag,
      message.author.displayAvatarURL()
    );
    let msg = await message.channel.send(embed)
        .then(function (msg) {
        
          msg.react("✅");
            msg.react("❌")           
        });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["anket", "oylama-yap", "anket-aç"],
  permLevel: 0,
  kategori: "Sunucu",

};

exports.help = {
  name: 'anket',
  description: 'Sunucunuzda anket yapmanızı sağlar. (Beipazaru Sunucusuna Özeldir)',
  usage: 'anket <mesaj>',
 
};