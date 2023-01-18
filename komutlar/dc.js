  
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var prefix = process.env.prefix; 
let embed = new Discord.MessageEmbed()
    .setAuthor("https://discord.gg/geWXnKVCC7", client.user.avatarURL())
    .setColor("#FFFB05")
    .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  message.channel.send(embed);
};


exports.conf = {
  aliases: ["discord"],
  permLevel: 0,
  kategori: "Genel"
};

exports.help = {
  name: "Discord",
  description: "Discord Sunucumuz",
  usage: "discord"
};
