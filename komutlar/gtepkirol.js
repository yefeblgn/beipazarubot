const Discord = require("discord.js")
const dba = require('quick.db');

exports.run = async (client, message, args) => {
let kullanici = message.mentions.members.first();
  const filter = (reaction, user) => {
    return ['✅'].includes(reaction.emoji.name);
  };

    let codemarefi = new Discord.MessageEmbed()
        .setColor("GREEN")
    .setAuthor('Patron Bayıldı! | Açılış Hediyesi', 'https://cdn.discordapp.com/attachments/838790063944237096/950124233105752094/Flushed_Face_Emoji_large.png')
    .setTitle(":tada: Hediye 1 Aylık VIP Rolü")
    .setThumbnail('https://cdn.discordapp.com/attachments/838790063944237096/950123861146476574/665-wrapped-gift-1.svg.png')
        .setDescription(`Rolü Almak İçin Tepkiye Tıklayınız.`)
    let cmf = await message.channel.send(codemarefi)
        await cmf.react("✅")
            cmf.awaitReactions(filter, {
              max: 1,
                time: 60000,
                errors: ['time']
            }).then(collected => {
              let kullanici = message.mentions.members.first();
                const reaction = collected.first();
                    if (reaction.emoji.name === '✅') {
                    let codemarefi = new Discord.MessageEmbed()
                        .setColor("GREEN")
                        .setDescription(`VIP Rolün başarıyla tanımlandı...`)
                    message.user.send(codemarefi);
                
        }
                    
    })
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['patronbayildi'],
  permLevel: 4
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};