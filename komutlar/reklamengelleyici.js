const Discord = require('discord.js')
const db = require('quick.db')

    exports.run = (client, message, args) => {
        // Eğer kullanıcı herhangi bir durum belirtmediyse ona uyarı mesajı atalım
        if(!args[0]){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Reklam Engel Sistemini Açabilmek & Kapatabilmek İçin \`.reklam aç\`, \`.reklam kapat\``)
            .setColor('#36393F')
            return message.channel.send(cmfhata)
        }

        // Eğer komutu kullanan kişi Aç & Kapat belirttiyse Data işlmelerini yapalım
        if(args[0] === 'aç'){
            // Data İşemeleri
            db.set(`linkcodemarefi_${message.guild.id}`, 'codemarefiaktif')

            // Bilgilendirme Mesajı
            const sistemaktif = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Reklam Engel Sistemini Başarılı Bir Şekilde Açıldı. Kapatmak için** \`.reklam kapat\``)
            .setColor('#36393F')
            return message.channel.send(sistemaktif)
        }

        if(args[0] === 'kapat'){
            // Data İşemeleri
            db.delete(`linkcodemarefi_${message.guild.id}`)

            // Bilgilendirme Mesajı
            const sistemdevredişi = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`**Reklam Engel Sistemini Başarılı Bir Şekilde Kapatıldı. Açmak için** \`.reklam aç\``)
            .setColor('#36393F')
            return message.channel.send(sistemdevredişi)
        }

    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Reklamengel','REKLAMENGEL', 'reklamengel','Reklam-engel','REKLAM-ENGEL',"reklam"],
    permLevel: 0
}

exports.help = {
    name: 'reklam-engel'
}