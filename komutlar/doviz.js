const discord = require('discord.js');
const CC = require('currency-converter-lt')


exports.run = async (client, message, args) => {
  var eembed = new discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#923977691412176926> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '923977691412176926') return message.channel.send({embed: eembed})
  message.delete
  
    let dolar = new CC({ from: "USD", to: "TRY", amount: 1 })
    let euro = new CC({ from: "EUR", to: "TRY", amount: 1 })
    dolar.convert().then(d => {
        var one_dolar = d
        euro.convert().then(e => {
            var one_euro = e
            let embed = new discord.MessageEmbed()
            .setTimestamp()
                .setTitle("BOT yefeblgn | Döviz Kuru Sistemi")
                .setDescription(`**1 Dolar = __${one_dolar}__\n1 Euro = __${one_euro}__**`)
                .setFooter("Bu sonuçlar şu tarihe göre verilmiştir")
                    message.channel.send(embed)
                    message.delete
                })
        })
}
  exports.conf = {
      enabled: true, 
      guildOnly: true, 
      aliases: [],
    kategori: "Genel",
      permLevel: 0 
    };

    exports.help = {
      name: "döviz", 
      description: "Komutu yazdığınız tarihe göre döviz kurunu atar. (Beipazaru Sunucusuna Özeldir)",
      usage: "döviz"
    };