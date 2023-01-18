// Pâyidar Code - Pâyidar

const Discord = require('discord.js')
const db = require('quick.db')

    exports.run = (client, message, args) => {
        // Eğer kullanıcı herhangi bir durum belirtmediyse ona uyarı mesajı atalım
        if(!args[0]){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Küfür Engel Sistemini Açabilmek & Kapatabilmek İçin** \`?küfür aç\`, \`!küfür kapat\``)
            .setColor('#36393F')
            return message.channel.send(cmfhata)
        }

        // Eğer komutu kullanan kişi Aç & Kapat belirttiyse Data işlmelerini yapalım
        if(args[0] === 'aç'){
            // Data İşemeleri
            db.set(`payidarküfürengel_${message.guild.id}`, 'aktif')

            // Bilgilendirme Mesajı
            const sistemaktif = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Küfür Engel Sistemi Aktif. Kapatmak için >>** \`?küfür kapat\``)
            .setColor('#36393F')
            return message.channel.send(sistemaktif)
        }

        if(args[0] === 'kapat'){
            // Data İşemeleri
            db.delete(`payidarküfürengel_${message.guild.id}`)

            // Bilgilendirme Mesajı
            const sistemdevredişi = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Küfür Engel Sistemi Kapatıldı. Açmak İçin >>** \`?küfür aç\``)
            .setColor('#36393F')
            return message.channel.send(sistemdevredişi)
        }
    } // Pâyidar

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['küfür', "küfürengel", "küfürengelle"],
    permLevel: 0
}

exports.help = {
    name: 'küfür-engel'
}
