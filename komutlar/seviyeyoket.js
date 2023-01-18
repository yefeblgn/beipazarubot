const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  const opponent = message.mentions.users.first();
 
 let hm = await db.fetch(`seviye_${message.guild.id}`)
   
  message.reply('Seviyeler sıfırlanıyor..').then(x => {
    
     
     db.delete(`seviye_${message.author.id + message.guild.id}`)
     db.delete(`puan_${message.author.id + message.guild.id}`)  
    db.delete(`seviye_${opponent + message.guild.id}`)
     db.delete(`puan_${opponent + message.guild.id}`) 
   
  x.edit('Seviyeler sıfırlandı!**')  
     
  }, 5000)
   
   
 
   
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["seviyesıfırlaa"],
  permLevel: 4
};
 
exports.help = {
  name: 'seviyesıfırlaa',
  description: 'Seviyeleri sıfırlar.', 
  usage: 'seviyesıfırlaa'
};