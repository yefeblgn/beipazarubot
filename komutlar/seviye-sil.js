const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
  var embed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embed})
  message.delete
  
    message.delete()
   if(!message.member.roles.cache.some(r => r.name === "Kurucu") && !message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullana Bilmek İçin Yönetici Olmalısınız.").then(message => {setTimeout(() => {message.delete()}, 60000);}) 

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const seviyemiktar = args.slice(1).join('')
    let seviye = await db.add(`seviye_${member.id + message.guild.id}`, -+seviyemiktar);
    let guncelseviye = await db.fetch(`seviye_${member.id + message.guild.id}`,);
  message.channel.send(`${member} Seviye Silindi. **Silinen Seviye:** ${seviyemiktar}, **Güncel Seviyesi:** ${guncelseviye} `)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["seviyesil"],
  kategori: "Moderasyon",
  permLevel: 4 
};

exports.help = {
  name: 'seviyesil',
  description: 'Etiketlediğiniz kişinin yazdığınız miktar kadar seviyesini siler.',
  usage: 'seviyesil @etiket [Miktar]'
};