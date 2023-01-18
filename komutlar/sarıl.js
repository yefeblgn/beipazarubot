const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent

exports.run = async (client, message, args, tools) => { //lets started your commands script
    var embedd = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embedd})
  message.delete
    if (!message.mentions.users.first()) return message.reply("Sarılmak istediğin kişiyi etiketle"); //if no one is mentions , lets reply as
    const { body } = await superagent
    .get("https://nekos.life/api/hug"); //lets see wut we went
    
    const embed = new Discord.MessageEmbed() //onec Discordjs is updated to 12.2.0 , richembed is removed ! they replaced now as MessageEmbed
    .setColor("#ff9900") // you can set it as you went
    .setTitle(`${message.author.username}, ${message.mentions.users.first().username} adlı kullanıcıya sarıldı. UwU`) // lets reply like this if we mentions
    .setImage(body.url) // hug gif well showing here
    .setFooter(
      "Bu komutu kullanan kullanıcı " + message.author.tag,
      message.author.displayAvatarURL()
    );
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sarıl'],
    kategori: "Eğlence",
    permLevel: 0
  };
  
  exports.help = { //lets load commands
    name: 'sarıl', //commands names
    description: 'Etiketlediğin kişiye sarılırsın. (Beipazaru Sunucusuna Özeldir)', //commands description
    usage: 'sarıl', //how they work
  };