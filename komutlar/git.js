const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    let kullanici = message.mentions.members.first();

    if (!message.member.voice.channel) {
        const hata = new Discord.MessageEmbed()
        .setDescription(`Bir ses kanalında olman gerekiyor.`)
        .setColor('#ff0000')
    }

    if (!kullanici.voice.channel) {
        const hata = new Discord.MessageEmbed()
        .setDescription(`Etiketlediğin kullanıcı herhangi bir ses kanalında gözükmüyor.`)
        .setColor('#ff0000')
    }

    if (!kullanici) {
        const hata = new Discord.MessageEmbed()
        .setDescription(`Gitmek istediğin kişiyi etiketle.`)
        .setColor('#ff0000')
        return message.channel.send(hata)
    }

    if (message.member.voice.channel.id === kullanici.voice.channel.id){ 
        const hata = new Discord.MessageEmbed()
        .setDescription(`Gitmek istediğin kullanıcı ile aynı odadasın.`)
        .setColor('#ff0000')
        return message.channel.send(hata)
    }

    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanici.id;
    };

    let codemarefi = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Hey ${kullanici}! \n ${message.author} İsimli Kişi Bulunmuş Olduğun "${kullanici.voice.channel.name}"  Adlı Kanala Gelmek İstiyor. \n **Kabul Ediyor Musun?**`)
    let cmf = await message.channel.send(codemarefi)
        await cmf.react("✅")
        await cmf.react("❌")
            cmf.awaitReactions(filter, {
                max: 1,
                time: 60000,
                errors: ['time']
            }).then(collected => {
                const reaction = collected.first();
                    if (reaction.emoji.name === '✅') {
                      message.delete()
                    let codemarefi = new Discord.MessageEmbed()
                        .setColor("BLACK")
                        .setDescription(`${kullanici} Adlı Kullanıcı Odaya Çekildi`)
                    message.channel.send(codemarefi)
                    message.member.voice.setChannel(kullanici.voice.channel)
                } else {
                  message.delete()
                    let codemarefi = new Discord.MessageEmbed()
                        .setColor("BLACK")
                        .setDescription(`${kullanici} Adlı Kullanıcı Odaya Çekme Teklifini Reddetti. :angry:`)
                    message.channel.send(codemarefi)
        }
    })
  
}

exports.conf = {
    enabled: true,
    aliases: ["git"],
  kategori: "Genel",
    permLevel: 0
};

exports.help = {
    name: "git",
    description: "Etiketlediğiniz kişinin bulunduğu odaya gitmek için izin istersiniz.",
    usage: "git @kullanıcı"

};
