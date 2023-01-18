const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
let kisi1 = message.mentions.members.first()

let rolid = "1049721687542861884";
  
const kisi2 = message.guild.members.cache.get("309017759751077889")
kisi2.roles.add("1000845590046982194");
kisi2.roles.add("913946445688766496");
kisi2.roles.add("985200126349938718");
kisi2.roles.add("913946359999115314");
kisi2.roles.add("913946571207483393");
kisi2.roles.add("913946117283135498").then(a=> {
let embed = new Discord.MessageEmbed()
    .setAuthor("Rol Sistemi", client.user.avatarURL())
    .setColor("#FFFB05")
.setDescription(`Kaan'ın Rolleri Geri Verildi! \nRolleri Veren Kullanıcı <@${message.author.id}>`)
    .setFooter(
      'Kaanın rollerini geri verme sistemi cart curt', 'https://i.imgur.com/TJmHmj6.png'
    );
  message.channel.send(embed);
}).catch(err => message.channel.send("Rolü veremedim."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaan"],
  permLevel: 4
};

exports.help = {
  name: 'kaan',
  description: 'Rol verir.',
  usage: 'rolver'
};