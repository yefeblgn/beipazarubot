const Discord = require('discord.js');
const dba = require('quick.db');
const { delay, randomRange, verify } = require('../util/Util');
const words = ['yefeblgn', 'ofanebisegeya', 'lol oynayanın kendine saygısı yoktur', 'salak lan bu emre', 'bu kelimeyi yazan oc', 'bot yefeblgnyi çok seviyorum iyi ki var', 'yefeye annemi verdim', 'bu bot niye böyle şeyler söylüyo', 'amk bu cümleleri yazmak çok zor', 'yiğit mal mısın amk', 'selam ben kurugotluec', 'mağara adamı utku', 'eşek siken altay', 'allah var', 'emrenin götü', 'zenci göt sevdalısı', 'kurugotluec', 'paraları görüyosun kuzen', 't sustum kırmızı arabanın yanındaki kırmızı etekli sarışın kız'];

exports.run = async (client, msg, args) => {
   var embed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${msg.author}, Bu komut burda engellenmiştir. <#1031318083815604314> kanalında kullanın`)
              .setColor("RANDOM")
   if (msg.channel.id !== '1031318083815604314') return msg.channel.send({embed: embed})
  msg.delete
  this.fighting = new Set();
  
  let opponent = msg.mentions.users.first()
	if (!opponent) return msg.reply("Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (opponent.bot) return msg.reply('Benimle mi oynucan yarram git birini bul kendine!');
		if (opponent.id === msg.author.id) return msg.reply('Kendin ile kapışamassın!');
		if (this.fighting.has(msg.channel.id)) return msg.reply('Kanal başına sadece bir meydan okuma gelebilir!');
		this.fighting.add(msg.channel.id);
		try {
			await msg.channel.send(`${opponent}, bu meydan okumayı kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
			const verification = await verify(msg.channel, opponent);
			if (!verification) {
				this.fighting.delete(msg.channel.id);
				return msg.reply('Meydan okuman reddedildi...');
			}
			await msg.channel.send('Hazırlanın kelime geliyor...')
			const word = words[Math.floor(Math.random() * words.length)];
			await msg.channel.send(`ŞİMDİ \`${word.toUpperCase()}\` YAZ!`);
			await msg.channel.send(`_Kelimeyi tamamen küçük harfle yazınız._`);
			const filter = res => [opponent.id, msg.author.id].includes(res.author.id) && res.content.toLowerCase() === word;
			const winner = await msg.channel.awaitMessages(filter, {
				max: 1,
				time: 30000
			});
			this.fighting.delete(msg.channel.id);
      const yenioyun = new Discord.MessageEmbed()
                  .setColor("#00ff00")
                  .setDescription(`Eski oyunun mesajları silindi. \nKimse kazanmadı, berabere bitti! :x: \n Yeni oyuna başlamak için **!yazankazanır <@etiket>** yazınız.`)
                  .setFooter("Bu komutu kullanan kullanıcı " + msg.author.tag,
      msg.author.displayAvatarURL()
                             );
       const yenioyun2 = new Discord.MessageEmbed()
                  .setColor("#00ff00")
                  .setDescription(`Eski oyunun mesajları silindi. \n${winner.first().author} kazandı, eller alev alev! :tada: \n Yeni oyuna başlamak için **!yazankazanır <@etiket>** yazınız.`)
                  .setFooter("Bu komutu kullanan kullanıcı " + msg.author.tag,
      msg.author.displayAvatarURL()
                             );
                   msg.channel.bulkDelete(100).then
      dba.add(`puan_${winner.id + msg.guild.id}`, 5);
                  if (!winner.size) return msg.channel.send(yenioyun)
      
			return msg.channel.send(yenioyun2);
		} catch (err) {
			this.fighting.delete(msg.channel.id);
			throw err;
		}
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazankazanır', "yk"],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: 'yazan-kazanır',
  category: "eğlence",
  description: 'Botun verdiği kelimeyi ilk yazan kazanır oyunu!',
  usage: 'yazan-kazanır [@kullanıcı]'
};