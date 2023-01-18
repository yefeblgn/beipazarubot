const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {


if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`❌   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('❌   **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n `**__Örnek__**: ?sayacbb -uyetag-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send('✔️  **Sayaç Görüşürüz mesajı**\n `'+mesaj+'`\n **Olarak ayarlandı!**') 
 db.set(`sayacBB_${message.guild.id}`, mesaj)  
  
};
  exports.conf = {
      enabled: true, //komut kullanıma açık olup olmadıgı buradan ayarlanır
      guildOnly: false, // komutun sadee servera özel olup olmadıgını burdan ayarnalır
    Kategori: "Genel",
      aliases: ['sayacbb'], // komut kullanım türleri
      permlevel: 4, // permleve bu ne işe yarar derseniz bu discord sunucu yetkiler demektir buraya göre bot kişiye cevam verir yada vermez bu detaylar CodeMareFi de anlatılacak
  };

  exports.help = {
      name: 'sayacbb', //komut ismi
      description: 'AFK olduğunu belirtirsiniz.', // komut açıklaması 
      usage: 'afk' //komutun kullanım şekli {örnek ""$$afkol"}
  };