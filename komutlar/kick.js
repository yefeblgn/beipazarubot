const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
var prefix = process.env.prefix;             
  
    const kickyetki = new Discord.MessageEmbed()
    .setColor("#FF3515")
.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
   .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    ); 
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply(kickyetki);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  const etiket = new Discord.MessageEmbed()
  .setColor("#FF2341")
  .setDescription(`Sunucudan atmam için istediğiniz kullanıcıyı etiketlemelisiniz; \`${prefix}at @nick Uyarı\` `)
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  if (message.mentions.users.size < 1) return message.reply(etiket);
  
  const kendi = new Discord.MessageEmbed()
  .setColor("#FF3151")
.setDescription("Kendini atamazsın.")
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  if (user.id === message.author.id) return message.reply(kendi);
  
  const yuksekrol = new Discord.MessageEmbed()
  .setColor("#FF6262")
  .setDescription(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`)
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
if (user.position > message.member.roles.highest.position) return message.reply(yuksekrol);
			    if (!reason) reason = 'Belirtilmemiş.'
  
  const yok = new Discord.MessageEmbed()
  .setColor("#FF3526")
.setDescription(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
  .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  if (!user) return message.reply(yok)
    let member = message.guild.member(user)
    if (!member) return message.reply(yok)
  
const rol = new Discord.MessageEmbed()
.setColor("#FF2315")
.setDescription(`Bu kişiyi sunucudan atamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`)
.setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
 if (!message.guild.member(user).bannable) return message.reply(rol);
  
const yetkili = new Discord.MessageEmbed()
.setColor("#FF2315")
.setDescription('Sunucudaki yetkilileri atamam!')
.setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
   if (!message.guild.member(user).bannable) return message.reply(yetkili);
    message.guild.member(user).kick(reason);
  
  const kick = new Discord.MessageEmbed()
  .setColor("#FF2415")
  .setDescription(`<@${user.id}> **Adlı kullanıcı sunucudan atıldı!** **Sebep: \`${reason}\``)
.setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
message.channel.send(kick)


};

exports.conf = {
  aliases: ['at'],
  permLevel: 4,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'kick',
  description: 'Belirttiğiniz kişiyi sunucudan atar.',
  usage: 'kick <@kullanıcı> <sebep>'
};
