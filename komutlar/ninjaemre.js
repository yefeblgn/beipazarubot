
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var embeddd = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932350914711622> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932350914711622') return message.channel.send({embed: embeddd})
  message.delete
  var prefix = process.env.prefix; 
let embed = new Discord.MessageEmbed()
    .setAuthor("merhaba ben ninja emre", client.user.avatarURL())
    .setColor("#FFFB05")
.setImage("https://cdn.discordapp.com/attachments/838790063944237096/908406760405098536/IMG-20211109-WA0135.jpg")
    .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
  message.channel.send(embed);
};


exports.conf = {
  aliases: ["ninjaemre"],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: "ninjaemre",
  description: "Ninja emreyi yollar. (Beipazaru Sunucusuna Özeldir)",
  usage: "ninjaemre"
};
