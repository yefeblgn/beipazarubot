
const Discord = require('discord.js');
const db = require('quick.db');

    exports.run = async(client, message, args) => {

        const codemarefiuser = db.fetch(`kisiid_${message.author.id}_${message.guild.id}`);
        const codemarefisebep = args[0];

        // Eğer Sebep Girilmez İse
        if(!args[0]) {
            // Let Tanımları
            let kisi = message.guild.members.cache.get(message.author.id);
            let kisiisim = kisi.displayName;

            // Json formatına yazılacak kodlarımız
            db.set(`cmfsebep_${message.author.id}_${message.guild.id}`, 'Sebep Yok');
            db.set(`kisiid_${message.author.id}_${message.guild.id}`,message.author.id);
            db.set(`kisiisim_${message.author.id}_${message.guild.id}`, kisiisim);
            let sebep = db.fetch(`cmfsebep_${message.author.id}_${message.guild.id}`);

            // Bilgilendirme Mesajı Atalım
            const afk = new Discord.MessageEmbed()
            .setDescription(`${message.author} Adlı Kullanıcı, **${sebep}** Sebebiyle Artık AFK.`)
            .setColor('#00ff00')
            .setFooter('Beipazaru | AFK Sistemi') //KadirFi |\_/|
            message.channel.send(afk)

            // Afk Olunca İsim Değiştirsin 
            message.member.setNickname(`[AFK] ` + kisiisim);
        }

        // Eğer Sebep Girerse
        if(args[0]) {
            // Let Tanımları
            let cmfsebep = args.join(' ');
            let kisi = message.guild.members.cache.get(message.author.id);
            let kisiisim = kisi.displayName;
        
            // Json formatına yazılacak kodlarımız
            db.set(`cmfsebep_${message.author.id}_${message.guild.id}`, cmfsebep);
            db.set(`kisiid_${message.author.id}_${message.guild.id}`,message.author.id);
            db.set(`kisiisim_${message.author.id}_${message.guild.id}`, kisiisim);
            let sebep = db.fetch(`cmfsebep_${message.author.id}_${message.guild.id}`);

            // Bilgilendirme Mesajı Atalım
            const afk = new Discord.MessageEmbed()
            .setDescription(`${message.author} Adlı Kullanıcı, **${sebep}** Sebebiyle Artık AFK.`)
            .setColor('#00ff00')
            .setFooter('Beipazaru | AFK Sistemi') //KadirFi |\_/|
            message.channel.send(afk)

            // Afk Olunca İsim Değiştirsin 
            message.member.setNickname(`[AFK] ` + kisiisim);
        }
    } // CodeMareFi Kod Paylaşım

  exports.conf = {
      enabled: true, //komut kullanıma açık olup olmadıgı buradan ayarlanır
      guildOnly: false, // komutun sadee servera özel olup olmadıgını burdan ayarnalır
    Kategori: "Genel",
      aliases: ['afk', 'afkol'], // komut kullanım türleri
      permlevel: 0, // permleve bu ne işe yarar derseniz bu discord sunucu yetkiler demektir buraya göre bot kişiye cevam verir yada vermez bu detaylar CodeMareFi de anlatılacak
  };

  exports.help = {
      name: 'afk', //komut ismi
      description: 'AFK olduğunu belirtirsiniz.', // komut açıklaması 
      usage: 'afk' //komutun kullanım şekli {örnek ""$$afkol"}
  };

//https://codemarefi.blogspot.com tarafından hazırlanmıştır