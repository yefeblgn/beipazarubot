const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`❌ **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`sayacS_${message.guild.id}`)  
 if(!rol) return message.reply(`❌   **Bu özellik zaten kapalı! :wink: **`)
 
 
  message.channel.send(`✔️   **Sayaç başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`sayacS_${message.guild.id}`)  
  db.delete(`sayacK_${message.guild.id}`)  
  db.delete(`sayacBB_${message.guild.id}`) 
  db.delete(`sayacHG_${message.guild.id}`)  
};
  exports.conf = {
      enabled: true, //komut kullanıma açık olup olmadıgı buradan ayarlanır
      guildOnly: false, // komutun sadee servera özel olup olmadıgını burdan ayarnalır
    Kategori: "Genel",
      aliases: ['sayackapat'], // komut kullanım türleri
      permlevel: 4, // permleve bu ne işe yarar derseniz bu discord sunucu yetkiler demektir buraya göre bot kişiye cevam verir yada vermez bu detaylar CodeMareFi de anlatılacak
  };

  exports.help = {
      name: 'sayackapat', //komut ismi
      description: 'AFK olduğunu belirtirsiniz.', // komut açıklaması 
      usage: 'afk' //komutun kullanım şekli {örnek ""$$afkol"}
  };