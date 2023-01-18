const Discord = require('discord.js');
const dba = require('quick.db');
const { stripIndents } = require('common-tags');

exports.run = async (client, message, args) => {
  var embed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#1031318118485741640> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '1031318118485741640') return message.channel.send({embed: embed})
   message.delete
  this.games = new Set();
  if(this.games.has(message.channel.id)) await message.reply('Kanal başına sadece bir düello meydana gelebilir.');
    const islem = Math.floor(Math.random() * (100 - 1)) + 1
    const fixedlisonuç = islem
    let choice;
    let haklar = 10
    await message.react('👌')
    this.games.add(message.channel.id);
  const embedd = new Discord.MessageEmbed()
.setColor("RANDOM")
    .setDescription(`Numarayı tahmin et 0 ve 100 Arası
					\`${haklar}\` Deneme Hakkın Var.
				`)
    .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );

    await message.channel.send(embedd);
           let uwu = false;
            while (!uwu && haklar !== 0) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) { 
                this.games.delete(message.channel.id);
                message.channel.send(`${message.author}, Maalesef! Zaman doldu!`)
                message.channel.send(`${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug: `)
              }              
                const choice = response.first().content
                if(isNaN(choice)) {
                  continue;
                }
                if (choice !== fixedlisonuç)  {
                  haklar -= 1
                  if(fixedlisonuç > choice) {
                  await message.channel.send(stripIndents`
					          ${message.author}, :small_red_triangle: Daha büyük numara söylemelisin!
					          \`${haklar}\` Deneme Hakkın Var.
				          `);
                  continue;
                  }
                  if(fixedlisonuç < choice) {
                    await message.channel.send(stripIndents`
					          ${message.author}, :small_red_triangle_down: Daha kücük numara söylemelisin!
					          \`${haklar}\` Deneme Hakkın Var.
				          `);
                  continue;
                  }
                }
                if (choice == fixedlisonuç) {
                  uwu = true
                }
                }
                if (haklar == 0) {
                  this.games.delete(message.channel.id);
                  const yenioyun = new Discord.MessageEmbed()
                  .setColor("#00ff00")
                  .setDescription(`Eski oyunun mesajları silindi. \n Oyuncu: ${message.author} | Sayı: \`${fixedlisonuç}\` | Oyunu Kaybettin! :x: \n Yeni oyuna başlamak için **!sayıtahmin** yazınız.`)
                  .setFooter("Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
                             );
                   message.channel.bulkDelete(100).then
                  await message.channel.send(yenioyun)
                }
                if (uwu) {
                  this.games.delete(message.channel.id);
                  dba.add(`puan_${message.author.id + message.guild.id}`, `${haklar}`);
                  await message.channel.send(`${message.author}, :tada:  Doğru Tahmin! Sayı: \`${fixedlisonuç}\` :tada:`)
                 message.channel.bulkDelete(100).then
                  const yenioyun = new Discord.MessageEmbed()
                  .setColor("#00ff00")
                  .setDescription(`Eski oyunun mesajları silindi. \n Oyuncu: ${message.author} | Sayı: \`${fixedlisonuç}\` | Kalan Deneme Hakkı: \`${haklar}\` | Oyunu Kazandın :tada: \n Yeni oyuna başlamak için **!sayıtahmin** yazınız.`)
                  .setFooter("Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
                             );
                  message.channel.send(yenioyun)
                try {
            } catch(e) {
              this.games.delete(message.channel.id);
            message.channel.send('Bir hata oluştu')
        }
    } else {
      this.games.delete(message.channel.id);
      return console.log('Bir hata oluştu')
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  kategori: "Eğlence",
  aliases: ['sayitahmin', 'sayıtahmin', 'sayı-tahmini'],
  permLevel: 0
};

exports.help = {
    name: 'sayıtahmin',
  kategori: "Eğlence",
  description: 'Rastgele rakam belirler ve siz o rakamı bulmaya çalışırsınız. (Beipazaru Sunucusuna Özeldir)',
  usage: 'sayıtahmin'
};