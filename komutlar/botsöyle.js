const Discord = require("discord.js");// Vloken tarafından paylaşılmıştır.
const googleTTS = require('google-tts-api'); // Vloken tarafından paylaşılmıştır.
let prefix = process.env.prefix;
exports.run = (client, message) => {
 var embed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '913932274238648421') return message.channel.send({embed: embed})
  message.delete();
// Vloken tarafından paylaşılmıştır.
      const args = message.content.slice(prefix.length).split(' ');
  message.delete();
    const command = args.shift().toLowerCase();
  message.delete();
  if (message.content.length > 195) return message.channel.send(`${message.author} yazdığın yazı maximum 200 karakter olmalı.`)
  message.delete();// Vloken tarafından paylaşılmıştır. 
    const voiceChannel = message.member.voice.channel;
  message.delete();
    if (!voiceChannel) return message.channel.send(`İlk önce bir sesli kanala girmeniz gerek`)// Vloken tarafından paylaşılmıştır.
  message.delete();

const url = googleTTS.getAudioUrl(`${args.slice(' ')}`, {
  lang: 'tr',
  slow: true,
  host: 'https://translate.google.com',
});
  message.delete();
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
})
})


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botsöyle'],
    permLevel: 0
};

exports.help = {
    name: 'botsöyle'
};