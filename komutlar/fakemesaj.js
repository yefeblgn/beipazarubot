const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if (message.deletable) await message.delete();
    let us = message.guild.members.cache.find(u =>
      args
        .slice(0)
        .join(" ")
        .includes(u.username)
    );
    let muser = message.mentions.users.first();
    let userid;
    if (isNaN(args[0])) {
      if (!muser) {
        userid = message.author.id;
      } else {
        userid = muser.id;
      }
    } else {
      userid = args[0];
    }
  let k = await client.users.fetch(userid);
  if(!k) message.channel.send("Kim adına mesaj yazayım?")
  let m = args.slice(1).join(' ');
  if (!m) return message.channel.send(`Ne yazmamı istiyorsun?`)
  try { 
  message.channel.createWebhook(k.username, {
      avatar: k.avatarURL()}) 
    .then(async (wb) => {
        const Webhook = new Discord.WebhookClient(wb.id, wb.token);
        await Webhook.send(m); 
        setTimeout(() => {
          Webhook.delete()
        }, 2000);
    })  
  } catch (err) {
    message.channel.send(err);
};
}

exports.conf = {
  enabled: true,
  guildOnly: false ,
  aliases: ["fake", "fakemesaj"],
  permLevel: 0
};

exports.help = {
  name: 'fake-mesaj',
};