const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const url = "https://cdn.discordapp.com/attachments/921802910227124284/1039240894571880549/Tehlike_Alarm_Sesi.mp3";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
 message.delete();
 message.channel.send("**:warning: Sunucu Patlatılıyor Son 7**")
.then((msg)=> {
     setTimeout(function(){
    msg.edit('**:warning: Sunucu Patlatılıyor Son 6**');
  }, 1000)
     setTimeout(function(){
    msg.edit('**:warning: Sunucu Patlatılıyor Son 5**');
  }, 2000)
     setTimeout(function(){
    msg.edit('**:warning: Sunucu Patlatılıyor Son 4**');
  }, 3000)
     setTimeout(function(){
    msg.edit('**:warning: Sunucu Patlatılıyor Son 3**');
  }, 4000)
     setTimeout(function(){
    msg.edit('**:warning: Sunucu Patlatılıyor Son 2**');
  }, 5000)
     setTimeout(function(){
    msg.edit('**:warning: Sunucu Patlatılıyor Son 1**');
  }, 6000)
        setTimeout(function(){
                                      const url = "https://cdn.discordapp.com/attachments/838790063944237096/1039243786057941103/Planting_C4_Bomb_Sound_Effect_CS_GO.mp3";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
    msg.edit('**:warning: Sunucu Patlatılıyor...**');
  }, 7000)
           setTimeout(function(){
                            const url = "https://cdn.discordapp.com/attachments/838790063944237096/1039243032215703613/Laughing_frog.mp3";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
    msg.edit('**Şaka :rofl:** https://tenor.com/view/kodok-acumalaka-gif-26159537');
  }, 12000)
              setTimeout(function(){
                  let geridon = client.channels.cache.get("948331579216896112");
  geridon
    .join()
    msg.edit(".");
  }, 17000)
   message.delete();
 }); 
}

exports.conf = {
  aliases: ['sunucuyupatlat'],
  kategori: "Moderasyon",
  permLevel: 0,
};

exports.help = {
  name: 'patla',
  description: 'Bot yazdıklarını tekrar eder.',
  usage: '!patla (yazı)'
};