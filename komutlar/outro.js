const Discord = require("discord.js");// Vloken tarafından paylaşılmıştır.
const googleTTS = require('google-tts-api'); // Vloken tarafından paylaşılmıştır.
let prefix = process.env.prefix;
exports.run = (client, message) => {
// Vloken tarafından paylaşılmıştır.
    const voiceChannel = message.member.voice.channel;
  message.delete();
    if (!voiceChannel) return message.channel.send(`İlk önce bir sesli kanala girmeniz gerek`)// Vloken tarafından paylaşılmıştır.
  message.delete();
const url = "https://cdn.discordapp.com/attachments/838790063944237096/1028671746682933361/outro.mp3";
  message.delete();
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['outro'],
  kategori: "Eğlence",
    permLevel: 0
};

exports.help = {
    name: "outro"
};