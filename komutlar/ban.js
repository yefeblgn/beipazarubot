const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = process.env.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  const etiketembed = new Discord.MessageEmbed()
  .setColor("FF9842")
  .setDescription(`Sunucudan yasaklamak istediğiniz kullanıcıyı etiketlemelisiniz; \`${prefix}ban @sebep\` `)
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  if (!user) return message.reply(etiketembed);
  
  const kyembed = new Discord.MessageEmbed()
  .setColor("#FF2415")
  .setDescription('Kendini yasaklayamazsın.')
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  if (user.id === message.author.id) return message.reply(kyembed);
  
  const rolembed = new Discord.MessageEmbed()
  .setColor("#FF8351")
  .setDescription(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`)
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  if (user.position > message.member.roles.highest.position) return message.reply(rolembed);
    if (!reason) reason = 'Belirtilmemiş.'
  
  const sunucudayok = new Discord.MessageEmbed()
.setColor("#FF0000")
.setDescription(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  if (!user) return message.channel.send(sunucudayok)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(sunucudayok)
  
const yuksekrol = new Discord.MessageEmbed()
.setColor("#FF8822")
.setDescription(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`)
.setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
 if (!message.guild.member(user).bannable) return message.reply(yuksekrol);
  
const yetkiliban = new Discord.MessageEmbed()
.setColor("#FF828")
.setDescription('Sunucudaki yetkilileri yasaklayamam!')
.setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
   if (!message.guild.member(user).bannable) return message.channel.send(yetkiliban);
    const kaan = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<@309017759751077889> Adlı kullanıcı banlayamazsın!`)
  .setFooter("Banlamaya çalışan kullanıcı: " + message.author.tag,
      message.author.displayAvatarURL())
  if (user.id == 309017759751077889) return message.reply(kaan);
  const cezali = message.guild.members.cache.get(message.author.id)
  const rol = "913932970706993192";
  if (user.id == 309017759751077889) return cezali.roles.remove(rol);
  message.guild.members.ban(user.id)
    
  const banned = new Discord.MessageEmbed()
  .setColor("#FF8383")
  .setDescription(`<@${user.id}> **Adlı kullanıcı yasaklandı!** **Sebep: \`${reason}\`**`)
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  message.channel.send(banned)
    
};

exports.conf = {
  aliases: ['yasakla'],
  permLevel: 2,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'ban',
  description: 'Belirttiğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',

};