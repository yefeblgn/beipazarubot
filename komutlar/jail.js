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

  if (!message.member.roles.cache.has(`${yetkili.id}`)) return message.channel.send(`**!jail** isimli komutu kullanabilmek için ${yetkili} rolüne sahip olman gerekiyor.`)
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`Kimi susturacaksın? Etiketlemeyi unutma.`)
  if(kişi.hasPermission("MANAGE_GUILD")) return message.channel.send(`Olmaz. Bu kişiyi susturamam.`)
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send(`Ne kadar süre jailde duracağını belirtmelisin.\nÖrnek: !jail kişi süre sebep`)

let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Sebep belirtilmemiş.'
  
  const wasted = new Discord.MessageEmbed()
  .setColor(`#f3c7e1`)
  .setDescription(`Biri Karantinaya Atıldı.`)
  .addField(`**Karantinaya Yollanan Kişi:**`, kişi, true)
  .addField(`**Yollayan:**`, `<@${message.author.id}>`, true)
  .addField(`**Sebep:**`, sebep, true)
  .addField(`**Süre:**`, zaman.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat'), true)
  .setTimestamp()
  .setFooter(`Beipazaru | Karantina Sistemi`)
  .setThumbnail(message.author.avatarURL)
  
  const bitti = new Discord.MessageEmbed()
  .setDescription(`Biri Karantinadan Tahliye Oldu!`)
  .addField(`**Karantinadan Çıkan Kişi:**`, kişi, true)
  .addField(`**Yollayan:**`, `<@${message.author.id}>`, true)
  .setTimestamp()
  .setColor(`#f3c7e1`)
  .setFooter(`Beipazaru | Karantina Sistemi`)
  .setThumbnail(message.author.avatarURL)
  
  kişi.roles.add(rol.id);
    kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
db.set(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    db.set(`${message.guild.id}.jail.${kişi.id}`, 'codare')
    kanal.send(wasted)
    message.channel.send(`${kişi} isimli kişi başarıyla karantinaya gönderildi.`)
    setTimeout(async () =>{
    kişi.roles.remove(rol.id)
    kanal.send(bitti)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.roles.add("913932970706993192")}
db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
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
              }, ms(zaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jail', "karantina"],
    permLevel: 0
  };
  
exports.help = {
 name: 'jail',
 description: 'Bir kişiyi belirlediğiniz rol ile jaile yollarsınız.',
 usage: 'jail @üye <10s,10m,10h,10d> sebep',
};