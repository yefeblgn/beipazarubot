const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
    var embedd = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embedd})
  message.delete
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]))
if (message.mentions.users.first().id == client.user.id && message.author.id !== "659515013433655309") return message.reply("Bana mı aşıksın orospu evladı bi siktir gitt????")
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get
(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Ölçmek İçin Birini Etiketlemelisin.`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤`
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
        var yorum = `Sizi evlendirelim <3`
        if(anasonuc < 80) {
                var yorum = 'Biraz daha uğraşırsan bu iş olacak gibi :)'
        }
        if(anasonuc < 60) {
                var yorum = 'Eh biraz biraz bir şeyler var gibi.'
        }
        if(anasonuc < 40) {
                var yorum = 'Azıcıkta olsa bir şeyler hissediyor sana :)'
        }
        if(anasonuc < 20) {
                var yorum = 'Bu iş olmaz sen bunu unut.'
        }
        const embed = new Discord.MessageEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
  kategori: "Eğlence",
        aliases: ['aşkölçer', 'aşk'],
        permLevel: 0,
}
 
exports.help = {
        name: 'aşkölçer',
        description: 'İki kullanıcı sarasındaki aşkı ölçer. (Beipazaru Sunucusuna Özeldir)',
        usage: 'aşkölçer <@kullanıcı> <@kullanıcı>'
}