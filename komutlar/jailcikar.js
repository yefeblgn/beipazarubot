const Discord = require("discord.js");
const ms = require("ms");
const prefix = "!"

module.exports.run = async (client, message, args) => {
let db = require('quick.db')
let botisim = message.guild.members.cache.get(client.user.id).displayName
let data = await db.fetch(`jailrol_${message.guild.id}`)
if(!data)  return message.channel.send(`Jail rolünü bulamadım.`)
let data2 = await db.fetch(`jailyetkilisi_${message.guild.id}`)
if(!data2)  return message.channel.send(`Jail yetkilisi rolünü bulamadım.`)
let data3 = await db.fetch(`jailkanal_${message.guild.id}`)
if(!data3)  return message.channel.send(`Jail kanalını bulamadım.`)
let rol = message.guild.roles.cache.get(data)
if(!rol) return message.channel.send(`Jail rolü ayarlı değil.`)
let yetkili = message.guild.roles.cache.get(data2)
if(!yetkili) return message.channel.send(`Jail yetkilisi ayarlı değil.`)
let kanal = message.guild.channels.cache.get(data3)
if(!kanal) return message.channel.send(`Jail log kanalı ayarlı değil.`)

  if (!message.member.roles.cache.has(`${yetkili.id}`)) return message.channel.send(`**!jailçıkar** isimli komutu kullanabilmek için ${yetkili} rolüne sahip olman gerekiyor.`)
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`Kimi çıkaracaksın? Etiketlemeyi unutma.`)
  if(kişi.hasPermission("MANAGE_GUILD")) return message.channel.send(`Olmaz. Bu kişiyi çıkaramam.`)
  
    
  const bitti = new Discord.MessageEmbed()
  .setDescription(`Biri Karantinadan Tahliye Oldu!`)
  .addField(`**Karantinadan Çıkan Kişi:**`, kişi, true)
  .addField(`**Çıkaran Kişi:**`, `<@${message.author.id}>`, true)
  .setTimestamp()
  .setColor(`#f3c7e1`)
  .setFooter(`Beipazaru | Karantina Sistemi`)
  .setThumbnail(message.author.avatarURL)
  
    kişi.roles.remove(rol.id)
    kanal.send(bitti)
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
  const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
   if(i){kişi.roles.add("913932970706993192")}
    const rol = new Discord.MessageEmbed()
    .setColor(`#f3c7e1`)
  .setDescription(`Geri gelmeyen rollerini **seni karantinaya yollayan kişiden** veya Yetkili Ekibi rolünü etiketleyerek isteyebilirsin`)
  .addField(`**Seni Karantinaya Yollayan Kişi:**`, `<@${message.author.id}>`, true)
  .setTimestamp()
  .setFooter(`Beipazaru | Karantina Sistemi`)
  .setThumbnail(message.author.avatarURL)
  kişi.send(rol)
})
          db.delete(`${message.guild.id}.jail.${kişi.id}`)
              
              },);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["karantinadançıkar", "jailçıkar"],
    permLevel: 0
  };
  
exports.help = {
 name: 'unjail',
 description: 'Bir kişiyi belirlediğiniz rol ile jaile yollarsınız.',
 usage: 'jail @üye <10s,10m,10h,10d> sebep',
};