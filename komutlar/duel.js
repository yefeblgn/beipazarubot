const Discord = require('discord.js');
const dba = require('quick.db');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBxFwSrw7fD06p4PMGON1fZlostJ27JTP0');

exports.run = async (client, message, args) => {
  var embed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${message.author}, Bu komut burda engellenmiştir. <#1031318189986021447> kanalında kullanın`)
              .setColor("RANDOM")
   if (message.channel.id !== '1031318189986021447') return message.channel.send({embed: embed})
  message.delete
  this.fighting = new Set();
  
	let opponent = message.mentions.users.first()
	if (!opponent) return message.reply({embed: {
          color: 0xD97634,
		  description: "Oynamak istediğin kişiyi etiketlemelisin!"
            }});
  
  if (opponent.bot) return message.reply({embed: {
          color: 0xD97634,
		  description: "Botlar ile oynayamazsın!"
            }});
  if (opponent.id === message.author.id) return message.reply({embed: {
          color: 0xD97634,
		  description: "Kendin ile düello atamazsın!"
            }});
		if (this.fighting.has(message.channel.id)) return message.reply({embed: {
          color: 0xD97634,
		  description: "Kanal başına sadece bir düello meydana gelebilir!"
            }});
		this.fighting.add(message.channel.id);
		try {
			if (!opponent.bot) {
                await message.channel.send({embed: {
          color: 0xD97634,
          description: `${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`
            }});
				const verification = await verify(message.channel, opponent);
                const url = "https://cdn.discordapp.com/attachments/921802910227124284/1039246431074144388/2022-11-07_21-32-42_Trim.mp4";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send({embed: {
          color: 0xD97634,
          description: `Düello kabul edilmedi...`
            }});
				}
			}
			let userHP = 500;
			let oppoHP = 500;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
			};
			while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : opponent;
				let choice;
				if (!opponent.bot || (opponent.bot && userTurn)) {
					await message.channel.send(stripIndents`
						${user}, ne yapmak istersin? \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`?
						**${message.author.username}**: ${userHP} :heartpulse:
						**${opponent.username}**: ${oppoHP} :heartpulse:
					`);
					const filter = res =>
						res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç', 'iman gücü'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply({embed: {
          color: 0xD97634,
          description: `Üzgünüm ama, süre doldu!`
            }});
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'savun', 'ultra güç', 'iman gücü'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
          const url = "https://cdn.discordapp.com/attachments/921802910227124284/1039245017195216926/Anime_Shoot_Glock_Gun_Sound_Effect.mp3";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
					const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
          const saldirembeyd = new Discord.MessageEmbed()
              .setColor("FF0000")
              .setDescription(`${user}, **${damage}** hasar vurdu!`)
              .setImage("https://cdn.discordapp.com/attachments/838790063944237096/942879085833625711/gun-fire.gif")
        async function handleVideo(video, message, voiceChannel, playlist = false) {
          var song = {
          id: video.id,
          title: video.title,
          durationh: video.duration.hours,
          durationm: video.duration.minutes,
          durations: video.duration.seconds,
          url: `https://www.youtube.com/watch?v=sodbEUjGPdg`,
          thumbnail: `https://img.youtube.com/vi/sodbEUjGPdg/maxresdefault.jpg`,
          requester: message.author.tag,
        };
          function play(guild, song) {
          }
        };
						await message.channel.send(saldirembeyd)
					dealDamage(damage);
					reset();
          
				} else if (choice === 'iman gücü') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
            const url = "https://cdn.discordapp.com/attachments/838790063944237096/1051260998956355635/ses.mp3";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
						const damage = randomRange(100, guard ? 25 : 300);
            const embeyd = new Discord.MessageEmbed()
              .setColor("FF0000")
              .setDescription(`${user}, iman gücüyle **${damage}** hasar verdi! Gerçekten çok imanlısın`)
              .setImage("https://media.tenor.com/ODARFgfLeFMAAAAC/mr-krabs-die.gif")
						await message.channel.send(embeyd)
						dealDamage(damage);
					} else {
						await message.channel.send({embed: {
          color: "808080",
          description: `${user}, git bi abdest al namaz kıl sende iman miman yok arkadaş!!`
            }});
					}
					reset();
				} else if (choice === 'savun') {
          const url = "https://cdn.discordapp.com/attachments/921802910227124284/1039249341145174056/HUD_Activation_Sound_Effect.mp3";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
          const savunembeyd = new Discord.MessageEmbed()
              .setColor("FF0000")
              .setDescription(`${user}, kendisini süper kalkan ile savundu!`)
              .setImage("https://cdn.discordapp.com/attachments/838790063944237096/942878094883160064/Strategic_Familiar_Shield.gif")
						await message.channel.send(savunembeyd)
					guard = true;
					reset(false);
				} else if (choice === 'ultra güç') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
            const url = "https://cdn.discordapp.com/attachments/921802910227124284/1039248452598640680/Heavy_Punch_Anime_-_Sound_Effect_HD.mp3";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
						const damage = randomRange(100, guard ? 150 : 300);
            const embeyd = new Discord.MessageEmbed()
              .setColor("FF0000")
              .setDescription(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterki miktarda topladın ve **${damage}** hasar vurdun!!`)
              .setImage("https://cdn.discordapp.com/attachments/838790063944237096/939884513981501450/fire-power.gif")
						await message.channel.send(embeyd)
						dealDamage(damage);
					} else {
						await message.channel.send({embed: {
          color: "808080",
          description: `${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterli miktarda toplayamadığın için ultra güç kullanamadın!`
            }});
					}
					reset();
				} else if (choice === 'kaç') {
          const url = "https://cdn.discordapp.com/attachments/921802910227124284/1039248103238279228/Undertale_Sound_Effect_-_Flee.mp3";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
					await message.channel.send({embed: {
          color: "FF0000",
          description: `${user}, kaçtı! Korkak!`
            }}); 

					forfeit();
					break;
				} else {
					await message.reply({embed: {
          color: "FF0000",
          description: `Ne yapmak istediğini anlamadım.`
            }}); 
				}
			}
			this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
               message.channel.bulkDelete(100).then
 
      const url = "https://cdn.discordapp.com/attachments/921802910227124284/1039250188868530306/2022-11-07_21-48-21_Trim.mp4";
message.member.voice.channel.join().then(connection => {
    connection.play(url).on("end", () => {
    connection.disconnect();
      connection.leave();
})
})
    const yenioyun = new Discord.MessageEmbed()
.setColor("#00ff00")
  .setDescription(`Eski oyunun mesajları silindi. \n **Kazanan Oyuncu:** ${winner} \n **Hesabınıza** ***10 XP*** **Eklendi!** *(?seviye)*  \n __Yeni oyuna başlamak için **?düello <@etiket>** yazınız.__`)
  .setImage("https://cdn.discordapp.com/attachments/838790063944237096/939884345911574618/chika-fujiwara.gif")
    .setFooter("BOT yefeblgn | Düello Sistemi");
      dba.add(`puan_${winner.id + message.guild.id}`, 10);
              message.channel.send(yenioyun)
      
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['düello'],
  kategori: "Eğlence",
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'düello',
  category: "Eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız! (Beipazaru Sunucusuna Özeldir)',
  usage: 'düello <@kullanıcı>'
};