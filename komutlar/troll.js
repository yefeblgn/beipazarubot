const Discord = require('discord.js');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {
  const afkoda = client.channels.cache.get("948331579216896112");
  let troll = message.mentions.members.first()
  if (!troll) return message.channel.send("Trollemek istediğin kişiyi etiketle!")  
  const modlarmasasi = client.channels.cache.get(troll.voice.channel.id);
  const opponent = message.author;
  message.channel.send("**:warning: Troll komutunu <@"+troll+"> kullanıcısı üzerinde kullanmak istediğine emin misin?** *(\`evet\` veya \`hayır\` olarak cevap veriniz.)*");
 const verification = await verify(message.channel, opponent);
				if (!verification) {
          message.delete();
					return message.channel.send({embed: {
          color: 0xD97634,
          description: `Troll Komutu Reddedildi`
            }});
				}
		if(verification)
      {
        message.delete();
  troll.voice.setChannel(afkoda)
  message.delete();
 message.channel.send("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 60**")
.then((msg)=> {
   troll.voice.setChannel(afkoda);
           setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
             msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 59**");
             troll.send(`Hey ${troll}, <@${message.author.id}> Tarafından Trollendin!`);
           }, 1000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 58**");
           }, 2000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 57**");
           }, 3000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 56**");
           }, 4000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 55**");
           }, 5000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 54**");
           }, 6000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 53**");
           }, 7000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 52**");
           }, 8000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 51**");
           }, 9000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 20**");
           }, 10000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 49**");
           }, 11000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 48**");
           }, 12000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 47**");
           }, 13000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 46**");
           }, 14000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 45**");
           }, 15000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 44**");
           }, 16000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 43**");
           }, 17000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 42**");
           }, 18000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 41**");
           }, 19000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 40**");
           }, 20000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 39**");
           }, 21000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 38**");
           }, 22000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 37**");
           }, 23000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 36**");
           }, 24000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 35**");
           }, 25000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 34**");
           }, 26000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 33**");
           }, 27000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 32**");
           }, 28000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 31**");
           }, 29000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 30**");
           }, 30000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 29**");
           }, 31000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 28**");
           }, 32000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 27**");
           }, 33000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 26**");
           }, 34000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 25**");
           }, 35000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 24**");
           }, 36000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 23**");
           }, 37000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 22**");
           }, 38000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 21**");
           }, 39000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 20**");
           }, 40000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 19**");
           }, 41000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 18**");
           }, 42000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 17**");
           }, 43000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 16**");
           }, 44000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 15**");
           }, 45000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 14**");
           }, 46000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 13**");
           }, 47000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 12**");
           }, 48000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 11**");
           }, 49000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 10**");
           }, 50000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 9**");
           }, 51000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 8**");
           }, 52000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 7**");
           }, 53000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 6**");
           }, 54000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 5**");
           }, 55000);
             setTimeout(function(){
             troll.voice.setChannel(afkoda);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 4**");
           }, 56000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 3**");
           }, 57000);
                setTimeout(function(){
             troll.voice.setChannel(afkoda);
                  msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 2**");
           }, 58000);
             setTimeout(function(){
             troll.voice.setChannel(modlarmasasi);
               msg.edit("**:warning: Troll komutu <@"+troll+"> kullanıcısı için aktif! Kalan Süre: 1**");
           }, 59000);
                setTimeout(function(){
               msg.edit("**:warning: Troll komutu sona erdi. Süre Bitti**");
           }, 60000);
});

}
}

exports.conf = {
  aliases: ["troll"],
  kategori: "Moderasyon",
  permLevel: 0,
};

exports.help = {
  name: 'troll',
  description: 'Bot yazdıklarını tekrar eder.',
  usage: '!patla (yazı)'
};