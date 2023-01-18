const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => { 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`❌  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('❌    **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n`**__Örnek__**: ?sayac-hg-msj -server-, Sunucumuza Hoşgeldin, -uye-! -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı!, **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send('✔️   **Sayaç Hoşgeldin mesajı**\n`'+mesaj+'`\nOlarak ayarlandı.') 
 db.set(`sayacHG_${message.guild.id}`, mesaj)
    
  
};
  exports.conf = {
      enabled: true, //komut kullanıma açık olup olmadıgı buradan ayarlanır
      guildOnly: false, // komutun sadee servera özel olup olmadıgını burdan ayarnalır
    Kategori: "Genel",
      aliases: ['sayachg'], // komut kullanım türleri
      permlevel: 4, // permleve bu ne işe yarar derseniz bu discord sunucu yetkiler demektir buraya göre bot kişiye cevam verir yada vermez bu detaylar CodeMareFi de anlatılacak
  };

  exports.help = {
      name: 'sayachg', //komut ismi
      description: 'AFK olduğunu belirtirsiniz.', // komut açıklaması 
      usage: 'afk' //komutun kullanım şekli {örnek ""$$afkol"}
  };