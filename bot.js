const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const googleTTS = require("google-tts-api");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const discordTTS = require("discord-tts");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const PouchDB = require("pouchdb");
const PouchFind = require("pouchdb-find");
const talkedRecently = new Set();


var prefix = process.env.prefix;

const log = (message) => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach((f) => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach((alias) => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = (command) => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on("ready", () => {
  var actvs = [
    `${prefix}discord | 🔥 Discord Sunucumuz`,
    `${prefix}seviye | 💰 Coded by yefeblgN#0001`
  ];

  client.user.setActivity(
    actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)],
    { type: "STREAMING", url: "https://twitch.tv/yefeblgn" }
  );

  console.log("_________________________________________");
  console.log(`Prefix             : ${process.env.prefix}`);
  console.log(`Durum              : Bot Çevrimiçi!`);
  console.log("_________________________________________");
});


client.on('ready', () => {
  const kanal = client.channels.cache.get('948331579216896112')
    client.channels.cache.get('948331579216896112').join().then(connection => {
      connection.voice.setSelfDeaf(true);
      
      
      client.on('voiceStateUpdate', (oldState, newState, message) => {
        const txtChannel = client.channels.cache.get('986021704788758569');
        const sa = "https://cdn.glitch.global/9d3ee5de-b79e-421b-935f-07193965b74f/hosgeldin.mp3?v=1673910417689";
        const as = "https://cdn.glitch.global/9d3ee5de-b79e-421b-935f-07193965b74f/bb.mp3?v=1673910416774";
        const yeniChannelID = newState.channelID;
        const eskiChannelID = oldState.channelID;
        if(eskiChannelID === "1040421112313556992") {
                connection.play(as).on("end", () => { // sesi kanala girişten 3 saniye sonra çalar
                });
        } else
        {if (yeniChannelID === "1040421112313556992") {
                connection.play(sa).on("end", () => { // sesi kanala girişten 3 saniye sonra çalar
                });

        }
                           
        
        }
      });
    });
});
        

    
client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dmlog = new Discord.MessageEmbed()
         .setTitle(`${client.user.username} Botuna Mesaj Gönderildi!`)
         .setColor('RANDOM')
         .setTimestamp()
         .addField('Mesajı Gönderen',` \`\`\` ${message.author.tag} \`\`\` `)
         .addField('Mesajı Gönderenin ID', ` \`\`\`${message.author.id}\`\`\` `)
         .addField(`Gönderilen Mesaj`, message.content)
         .setThumbnail(message.author.avatarURL()) 
    client.channels.cache.get("838790154583539742").send(dmlog);
    }
});

client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
      const dmmesaj = new Discord.MessageEmbed()
      .setTitle("Mesajınız Sunucu Yetkililerine İletilmiştir.")
      .setColor("RANDOM")
      .setTimestamp()
      .setImage("https://cdn.discordapp.com/attachments/838790063944237096/1026516960957190234/polis.png")
      .addField(`Gönderilen Mesaj`, message.content)
      .addField('Mesajı Gönderen',` \`\`\` ${message.author.tag} \`\`\` `)
      message.author.send(dmmesaj);
    }
});
client.on('message', async (msg) => {
      if (msg.channel.id !== "1017114795784286308") return;//KANALID Diye Belirttiğim Kısma Kanal ID Yaz
  await msg. react('<:super:1017116200540569660>')
  await msg. react('<:buneamk:1017116198095290492>')

client.on("message", async (message) => {
   if (message.channel.id !== "1017114795784286308") return;
    // Checking if the author is a bot.
    if (message.author.bot) return false;

    // Deleting the message if there are 0 attachments in the message.
    if (message.attachments.size == 0) message.delete()
});
  
});

client.on("guildMemberAdd", (member) => {
  // Rol
  let rol = "1064876440782389398";

  // Sunucuya Giren Kişiye Rol Verme
  member.roles.add(rol);

  // Hg Mesajı
  client.channels.cache
    .get("838790063944237096")
    .send(`${member} **Kişisine <@&${rol}> Rolünü Verdim, Hoşgeldin.**`);
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "sa") {
    message.channel.send(`Aleyküm Selam Hoş Geldin <@${message.author.id}>`);
  }
});


client.on("message", (message) => {
  const ig = message.content.toLowerCase();

  if (ig === "ben orospu evladıyım" || ig === "ben orospu çocuğuyum" || ig === "ben oçum") {
    message.channel.send(`Tamamdır abi :smile: <@${message.author.id}>`);
    message.member.roles.add("1049721687542861884");
  }
});


client.on("message", (message) => {
  const ig = message.content.toLowerCase();

  if (ig === "ben orospu evladı değilim" || ig === "ben orospu çocuğu değilim" || ig === "ben oç değilim") {
    message.channel.send(`Of abi ya :cry: <@${message.author.id}>`);
    message.member.roles.remove("1049721687542861884");
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "ben türküz korkmucan") {
    message.channel.send(
      `ben türküz korkmucak onii chhhan datte bayo orewa türk chaann çatma yarre yarre dazee gosaimas desune`
    );
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "slm") {
    message.channel.send(`Aleyküm Selam Hoş Geldin <@${message.author.id}>`);
  }
});



client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "sil knk") {
    message.channel.send(`sus knk <@${message.author.id}>`);
  }
});

client.on("message", (message) => {
  let channell = client.channels.cache.get("923624618718298163");
  const sa = message.content.toLowerCase();

  if (sa !== "!döviz") {
    message.delete;
  }
});


client.on("guildMemberAdd", async (member) => {
  const guild = member.guild;

  const kanalcık = db.fetch(`botPanel_${member.guild.id}`);
  if (kanalcık) {
    const kanal = guild.channels.find("id", kanalcık);
    if (!kanal) return db.delete(`botPanel_${guild.id}`);
    kanal.setName(`Sunucudaki üye sayısı : ${guild.memberCount}`);
  }
});

client.on("guildMemberRemove", async (member) => {
  const guild = member.guild;

  const kanalcık = db.fetch(`botPanel_${member.guild.id}`);
  if (kanalcık) {
    const kanal = guild.channels.find("id", kanalcık);
    if (!kanal) return db.delete(`botPanel_${guild.id}`);
    kanal.setName(`Sunucudaki üye sayısı : ${guild.memberCount}`);
  }
});

client.on("message", (message) => {
  if (message.content == `<@!${client.user.id}>`)
    return message.reply(
      `Dostum ben etiket ile çalışmıyorum :neutral_face:. Beni kullanabilmen için prefixim: **${prefix}**`
    );
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "cu ne") {
    message.channel.send(`anayun amcuuuuu <@${message.author.id}>`);
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "napim") {
    message.channel.send(`götüne sok knk <@${message.author.id}>`);
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "iskender") {
    message.channel.send(
      `https://cdn.discordapp.com/attachments/838790154583539742/905208995428597820/5squen.jpg`
    );
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "10dk sonra dönücem") {
    message.channel.send(
      `https://cdn.discordapp.com/attachments/898705501376905236/908410439958929428/unknown.png`
    );
  }
});

// SEVIYE \\

// SEVIYE \\

/////// REACTIONS ///////////////////

client.on("ready", async () => {
  if (db.get("reactions")) {
    if (Object.keys(db.get("reactions")).length == 0) {
      await db.delete("reactions");
    }
  }
  setInterval(() => {
    if (db.get("reactions")) {
      Object.entries(client.db.get("reactions"))
        .map((j) => j[1])
        .flat()
        .map(async (mr) => {
          if (mr) {
            const guild = client.guilds.cache.get(mr.guild);
            if (guild) {
              const channel = guild.channels.cache.get(mr.channel);
              if (channel) {
                channel.messages
                  .fetch(mr.message)
                  .then((cs) => {})
                  .catch(async (e) => {
                    await db.unpush("reactions." + mr.guild, {
                      messsage: mr.message,
                    });
                    await db.delete("messages-" + mr.guild);
                    await db.delete("channels-" + mr.guild);
                  });
              } else {
                await db.unpush("reactions." + mr.guild, {
                  messsage: mr.message,
                });
                await db.delete("messages-" + mr.guild);
                await db.delete("channels-" + mr.guild);
              }
            } else {
              await db.delete("reactions." + mr.guild);
              await db.delete("messages-" + mr.guild);
              await db.delete("channels-" + mr.guild);
            }
          } else {
            await db.unpush("reactions." + mr.guild, { messsage: mr.message });
            await db.delete("messages-" + mr.guild);
            await db.delete("channels-" + mr.guild);
          }
        });
    }
  }, 200000);
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.guild) {
    if (db.get("reactions." + reaction.message.guild.id)) {
      const data = Object.entries(
        db.get("reactions." + reaction.message.guild.id)
      )
        .filter((mr) => mr[1].guild == reaction.message.guild.id)
        .map((me) => me[1].guild);
      if (data) {
        const data2 = Object.entries(
          db.get("reactions." + reaction.message.guild.id)
        )
          .filter((mr) => mr[1].channel == reaction.message.channel.id)
          .map((me) => me[1].channel);
        if (data2) {
          const data3 = Object.entries(
            db.get("reactions." + reaction.message.guild.id)
          )
            .filter((mr) => mr[1].message == reaction.message.id)
            .map((me) => me[1].message);
          if (data3) {
            let data4 = Object.entries(
              db.get("reactions." + reaction.message.guild.id)
            ).filter((mr) => mr[1].emoji == reaction.emoji.name);
            if (data4) {
              data4.map(async (cs) => {
                const csr = reaction.message.guild.roles.cache.get(cs[1].role);
                if (csr) {
                  const csm = reaction.message.guild.members.cache.get(user.id);
                  if (csm) {
                    if (!csm.roles.cache.has(csr.id)) {
                      await csm.roles.add(csr.id);
                    }
                  }
                }
              });
            }
          }
        }
      }
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.guild) {
    if (db.get("reactions." + reaction.message.guild.id)) {
      const data = Object.entries(
        db.get("reactions." + reaction.message.guild.id)
      )
        .filter((mr) => mr[1].guild == reaction.message.guild.id)
        .map((me) => me[1].guild);
      if (data) {
        const data2 = Object.entries(
          db.get("reactions." + reaction.message.guild.id)
        )
          .filter((mr) => mr[1].channel == reaction.message.channel.id)
          .map((me) => me[1].channel);
        if (data2) {
          const data3 = Object.entries(
            db.get("reactions." + reaction.message.guild.id)
          )
            .filter((mr) => mr[1].message == reaction.message.id)
            .map((me) => me[1].message);
          if (data3) {
            let data4 = Object.entries(
              db.get("reactions." + reaction.message.guild.id)
            ).filter((mr) => mr[1].emoji == reaction.emoji.name);
            if (data4) {
              data4.map(async (cs) => {
                const csr = reaction.message.guild.roles.cache.get(cs[1].role);
                if (csr) {
                  const csm = reaction.message.guild.members.cache.get(user.id);
                  if (csm) {
                    if (csm.roles.cache.has(csr.id)) {
                      await csm.roles.remove(csr.id);
                    }
                  }
                }
              });
            }
          }
        }
      }
    }
  }
});
/////////////////////////////////////
// Pâyidar Code - Pâyidar

client.on('message', message => {
  if(!message.guild){return}
  
  // Datadaki "Küfür Engel" Kısmını Çağıralım
  let payidarküfürengel = db.fetch(`payidarküfürengel_${message.guild.id}`)

  // Komutlarımıza Geçelim, Eğer Küfür Engel Sistemi Aktif İse Küfür Yazan Kullanıcıya Uyarı Verelim
  if(payidarküfürengel === 'aktif'){
    // Küfür Ayarlamaları
    const payidariküfürliste = ["orospu","allahını","orps","yarrak","am",'AMK','Amk','amk','Amına koyayım','AMINA KOYAYIM','amına koyayım','aq','sg','oç','Oç','Sg','Aq','Aw','Sikerim','sikerim','SİKERİM','Amına sokarım','AMINA SOKARIM','amına sokarım','götünü sikerim','Götünü Sikerim','GÖTÜNÜ SİKERİM','Götünü Sikerim',"sıkerım","ananı","got","kürt","laz","sikim"]
    if(payidariküfürliste.some(payidar  => message.content.includes(payidar))){
      // Kullanıcının Mesajını Silelim
      message.delete();

      // Küfür eden terbiyesize uyarı mesajı atalım ve bu 5 saniye sonra chati kirletmemek açısından silinsin.
      const keslanterbiyesizherif = new Discord.MessageEmbed()
      .setDescription(`${message.author} - **Alloooo! Küfür etmek yasak hayırdır amınakoyim?!**`) 
      .setColor('#36393F')
      message.channel.send(keslanterbiyesizherif).then(payidarsil => {
        payidarsil.delete({timeout: 5000})
      })
    }
  } else {
    return
  }
})
/////////////////////////////////////

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "<@953054091347656724>") {
    message.channel.send(`efm aşkım <@${message.author.id}>`);
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "sus knk") {
    message.channel.send(`sil knk <@${message.author.id}>`);
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "selam") {
    message.channel.send(`Aleyküm Selam Hoş Geldin <@${message.author.id}>`);
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "volkan konak") {
    message.channel.send(
      `https://cdn.discordapp.com/attachments/838790063944237096/906908094108426270/9k.png`
    );
  }
});

client.on("message", (message) => {
  const sa = message.content.toLowerCase();

  if (sa === "selamun aleyküm") {
    message.channel.send(`Aleyküm Selam Hoş Geldin <@${message.author.id}>`);
  }
});

client.on("message", (message) => {
  const ig = message.content.toLowerCase();

  if (ig === "iyi geceler" || ig === "ig" || ig === "ii gclr") {
    message.channel.send(
      `İyi Geceleeerr, sütünü iç ve uyu ln :rage: :rage: <@${message.author.id}>`
    );
  }
});

client.on("message", (message) => {
  const gm = message.content.toLowerCase();

  if (gm === "günaydın" || gm === "gm" || gm === "gnydn") {
    message.channel.send(`Güünaaydıınnn <@${message.author.id}>`);
  }
});

////////////////////////////////

///////////////////////////////////////////////

client.elevation = (message) => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === process.env.sahip) permlvl = 4;
  return permlvl;
};


client.on("voiceStateUpdate", (oldMember, newMember) => {
  // todo create channel
  if (
    newMember.voiceChannel != null &&
    newMember.voiceChannel.name.startsWith("➕│2 Kişilik Oda")
  ) {
    newMember.guild
      .createChannel(`║👤 ${newMember.displayName}`, {
        type: "voice",
        parent: newMember.voiceChannel.parent,
      })
      .then((cloneChannel) => {
        newMember.setVoiceChannel(cloneChannel);
        cloneChannel.setUserLimit(2);
      });
  }
  // ! leave
  if (oldMember.voiceChannel != undefined) {
    if (oldMember.voiceChannel.name.startsWith("║👤 ")) {
      if (oldMember.voiceChannel.members.size == 0) {
        oldMember.voiceChannel.delete();
      } else {
        // change name
        let matchMember = oldMember.voiceChannel.members.find(
          (x) => `║👤 ${x.displayName}` == oldMember.voiceChannel.name
        );
        if (matchMember == null) {
          oldMember.voiceChannel.setName(
            `║👤 ${oldMember.voiceChannel.members.random().displayName}`
          );
        }
      }
    }
  }
});


client.on("message" , message => {
  // Baş Tanımlar
  if(!message.guild) return;
  if(message.content.startsWith("?" + 'afk')) return;

  // Let Tanımları & Data Veri Çekme İşlemleri
  let codemarefiafk = message.mentions.users.first()
  let codemarefikisi = db.fetch(`kisiid_${message.author.id}_${message.guild.id}`)
  let codemarefikisiisim = db.fetch(`kisiisim_${message.author.id}_${message.guild.id}`)

  // Eğer Afk Kişi Etiketlenirse Mesaj Atalım
  if(codemarefiafk){
    // Let Tanımları
    let cmfsebep = db.fetch(`cmfsebep_${codemarefiafk.id}_${message.guild.id}`)
    let codemarefikisi2 = db.fetch(`kisiid_${codemarefiafk.id}_${message.guild.id}`)

    if(message.content.includes(codemarefikisi2)){
      const cmfbilgiafk = new Discord.MessageEmbed()
      .setDescription(`${message.author} - Etiketlemiş Olduğun <@!${codemarefikisi2}> Adlı Kişi Şu an, **${cmfsebep}** Sebebiyle AFK`)
      .setColor("#36393F")
      .setFooter('Beipazaru | AFK Sistemi')
      message.channel.send(cmfbilgiafk)
    }
  }

  // Eğer Afk Kişi Mesaj Yazarsa Afk'lıktan Çıkaralım Ve Mesaj Atalım
  if(message.author.id === codemarefikisi){

    // Datadaki AFK Kullanıcı Verilerini Silelim
    db.delete(`cmfsebep_${message.author.id}_${message.guild.id}`)
    db.delete(`kisiid_${message.author.id}_${message.guild.id}`)
    db.delete(`kisiisim_${message.author.id}_${message.guild.id}`)

    // Afk'lıktan Çıktıktan Sonra İsmi Eski Haline Getirsin
    message.member.setNickname(codemarefikisiisim)

    // Bilgilendirme Mesajı Atalım
    const cmfbilgiafk = new Discord.MessageEmbed()
    .setAuthor(`Hoşgeldin ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 2048}))
    .setDescription(`<@!${codemarefikisi}> Artık AFK Değil.`)
    .setColor("#36393F")
    .setFooter('Beipazaru | AFK Sistemi')
    message.channel.send(cmfbilgiafk)
  }  
})

///////////////////////////////////

client.on("messageDelete", async (message) => {
  if (message.author.bot || message.channel.type == "dm") return;

  let log = message.guild.channels.cache.get(
    await db.fetch(`log_${message.guild.id}`)
  );

  if (!log) return;

  const embed = new Discord.MessageEmbed()

    .setTitle(message.author.username + " | Mesaj Silindi")

    .addField("Kullanıcı: ", message.author)

    .addField("Kanal: ", message.channel)

    .addField("Mesaj: ", "" + message.content + "");

  log.send(embed);
});



client.on("channelDelete", async (channel) => {
  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then((audit) => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Silme")

    .addField("**Kanalı Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Kanal:**", `\`${channel.name}\``)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${channel.guild.name} - Mod-Log Sistemi`,
      channel.guild.iconURL()
    )

    .setThumbnail(channel.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("roleCreate", async (role) => {
  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then((audit) => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Rol Oluşturma")

    .addField("**Rolü Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan Rol:**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${role.guild.name} - Mod-Log Sistemi`,
      role.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("roleDelete", async (role) => {
  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then((audit) => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Rol Silme")

    .addField("**Rolü Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Rol:**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${role.guild.name} - Mod-Log Sistemi`,
      role.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiCreate", async (emoji) => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_CREATE" })
    .then((audit) => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Oluşturma")

    .addField("**Emojiyi Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan Emoji:**", `${emoji} - İsmi: \`${emoji.name}\``)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${emoji.guild.name} - Mod-Log Sistemi`,
      emoji.guild.iconURL
    )

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiDelete", async (emoji) => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_DELETE" })
    .then((audit) => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Silme")

    .addField("**Emojiyi Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Emoji:**", `${emoji}`)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${emoji.guild.name} - Mod-Log Sistemi`,
      emoji.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
  let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);

  if (!modlog) return;

  const entry = await oldEmoji.guild
    .fetchAuditLogs({ type: "EMOJI_UPDATE" })
    .then((audit) => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Güncelleme")

    .addField("**Emojiyi Güncelleyen Kişi:**", `<@${entry.executor.id}>`)

    .addField(
      "**Güncellenmeden Önceki Emoji:**",
      `${oldEmoji} - İsmi: \`${oldEmoji.name}\``
    )

    .addField(
      "**Güncellendikten Sonraki Emoji:**",
      `${newEmoji} - İsmi: \`${newEmoji.name}\``
    )

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${oldEmoji.guild.name} - Mod-Log Sistemi`,
      oldEmoji.guild.iconURL
    )

    .setThumbnail(oldEmoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("guildBanAdd", async (guild, user) => {
  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then((audit) => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Yasaklama")

    .addField("**Kullanıcıyı Yasaklayan Yetkili:**", `<@${entry.executor.id}>`)

    .addField("**Yasaklanan Kullanıcı:**", `**${user.tag}** - ${user.id}`)

    .addField("**Yasaklanma Sebebi:**", `${entry.reason}`)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(`Sunucu: ${guild.name} - Mod-Log Sistemi`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("guildBanRemove", async (guild, user) => {
  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_REMOVE" })
    .then((audit) => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Yasak Kaldırma")

    .addField("**Yasağı Kaldıran Yetkili:**", `<@${entry.executor.id}>`)

    .addField(
      "**Yasağı Kaldırılan Kullanıcı:**",
      `**${user.tag}** - ${user.id}`
    )

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(`Sunucu: ${guild.name} - Mod-Log Sistemi`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

///////////////////////////////////////////////

// SAYAÇ SİSTEMİ

client.on("guildMemberAdd", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
    const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacHG_${member.guild.id}`)
    ///....

  ///....
  if (!mesaj) {
      const yazi2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("📥  `"+ member.user.username + "`**Adlı Kullanıcı Aramıza Katıldı!** `" + sayaç + "` **Kişi Olmamıza** `" + sonuç + "` **Kişi Kaldı.** `" + member.guild.memberCount + "` **Kişiyiz!**")
    return client.channels.cache.get(kanal).send(yazi2);
  }

  if (member.guild.memberCount == sayaç) {
    return client.channels.get(kanal).send(`⏲️  **Sayaç Sıfırlandı!** \`${member.guild.memberCount}\` **Kişiyiz!**`)
    await db.delete(`sayacK_${member.guild.id}`)
    await db.delete(`sayacS_${member.guild.id}`)
    await db.delete(`sayacHG_${member.guild.id}`)
    await db.delete(`sayacBB_${member.guild.id}`)
  }
  if (mesaj) {
    const mesaj31 = mesaj.replace("-uyetag-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.size}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.cache.get(kanal).send(mesaj31);
    
  }
});

client.on("guildMemberRemove", async member => {

  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacBB_${member.guild.id}`)
  if (!kanal) return;
  if (!sayaç) return;
    ///....

  if (!mesaj) {
      const yazi1 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("📤  `" + member.user.username + "` **Adlı Kullanıcı Aramızdan Ayrıldı.**`" + sayaç + "` **Kişi Olmamıza** `" + sonuç + "` **Kişi Kaldı.** `" + member.guild.memberCount + "` **Kişiyiz!**")
    return client.channels.cache.get(kanal).send(yazi1);
      }

  if (mesaj) {
    const mesaj31 = mesaj.replace("-uye-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.cache.size}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});

///////// Moderasyon \\\\\\\\\\

const beta = new Discord.Client();
const { MessageEmbed } = require("discord.js");
const config = require("./Config.json");

  function guvenli(kisiID) {
    let uye = beta.guilds.cache.get(config.guildID).members.cache.get(kisiID);
    let betasafe = config.whitelist || [];
    if (!uye || uye.id === beta.user.id || uye.id === config.OwnerID || uye.id === uye.guild.owner.id || betasafe.some(beta => uye.id === beta || uye.roles.cache.has(beta))) return true
  else return false};

  const yetkiPermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  function cezalandir(kisiID, tur) {
    let userID = beta.guilds.cache.get(config.guildID).members.cache.get(kisiID);
    if (!userID) return;
    if (tur == "jail") return userID.roles.cache.has(config.boosterRole) ? userID.roles.set([config.boosterRole, config.jailRole]) : userID.roles.set([config.jailRole]);
    if (tur == "ban") return userID.ban({ reason: "Beipazaru Koruma Sistemi" }).catch()};

//-                                                                        ROL KORUMA                                                                        -\\

beta.on("roleCreate", async role => {
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.roleProtection) return;
  role.delete({ reason: "Beipazaru Koruma Sistemi" });
  cezalandir(entry.executor.id, "jail");
  let user = beta.users.cache.get(entry.executor.id)
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('Sunucuda izinsiz bir rol oluşturuldu!').setDescription(`${entry.executor} adlı yetkili tarafından sunucuda izinsiz bir rol oluşturuldu! \n\nSunucuda rolü oluşturan yetkilinin rolleri alındı ve cezalı rolü verildi!`).setFooter(`Beipazaru`).setTimestamp())}});

beta.on("roleDelete", async role => {
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.roleProtection) return;
  cezalandir(entry.executor.id, "jail");
  let user = beta.users.cache.get(entry.executor.id)
  let yeniRol = await role.guild.roles.create({
  data: {
    name: role.name,
    color: role.hexColor,
    hoist: role.hoist,
    position: role.position,
    permissions: role.permissions,
    mentionable: role.mentionable},
    reason: "Rol Silindiği İçin Tekrar Oluşturuldu!"});
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('Sunucuda bir rol izinsiz silindi!').setDescription(`${entry.executor} adlı yetkili tarafından **${role.name}** isimli rol silindi, silen kişi banlandı! \nRol tekrar oluşturuldu.`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp())}});

beta.on("roleUpdate", async (oldRole, newRole) => {
  let entry = await newRole.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || !newRole.guild.roles.cache.has(newRole.id) || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.roleProtection) return;
  cezalandir(entry.executor.id, "jail");
  let user = beta.users.cache.get(entry.executor.id)
  if (yetkiPermleri.some(p => !oldRole.permissions.has(p) && newRole.permissions.has(p))) {
  newRole.setPermissions(oldRole.permissions);
  newRole.guild.roles.cache.filter(r => !r.managed && (r.permissions.has("ADMINISTRATOR") || r.permissions.has("MANAGE_ROLES") || r.permissions.has("MANAGE_GUILD"))).forEach(r => r.setPermissions(36818497));
};
  newRole.edit({
    name: oldRole.name,
    color: oldRole.hexColor,
    hoist: oldRole.hoist,
    permissions: oldRole.permissions,
    mentionable: oldRole.mentionable});
 let logKanali = beta.channels.cache.get(config.logChannelID);
 if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('Sunucuda izinsiz bir rol güncellendi!').setDescription(`${entry.executor} adlı yetkili tarafından **${oldRole.name}** isimli rol izinsiz güncellendi! \n\nGüncelleyen yetkilinin rolleri alındı ve cezalı rol verildi! \n\nRol eski haline getirildi!`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp())}});

//-                                                                        KANAL KORUMA                                                                        -\\

beta.on("channelCreate", async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.channelProtection) return;
  channel.delete({reason: "Beipazaru Koruma Sistemi"});
  let user = beta.users.cache.get(entry.executor.id)
  cezalandir(entry.executor.id, "jail");
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('Sunucuda bir kanal izinsiz oluşturuldu!').setDescription(`${entry.executor} adlı yetkili tarafından sunucuda izinsiz kanal oluşturuldu! Oluşturan yetkilinin rolleri alındı ve jaile atıldı! \nOluşturulan Kanal Silindi.`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp().setThumbnail(user.displayAvatarURL({dynamic: true })))}});

beta.on("channelDelete", async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.channelProtection) return;
  cezalandir(entry.executor.id, "jail");
  let user = beta.users.cache.get(entry.executor.id)
  await channel.clone({ reason: "Beipazaru Koruma Sistemi" }).then(async kanal => {
  if (channel.parentID != null) await kanal.setParent(channel.parentID);
  await kanal.setPosition(channel.position);
  if (channel.type == "category") await channel.guild.channels.cache.filter(k => k.parentID == channel.id).forEach(x => x.setParent(kanal.id));});
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('İzinsiz bir kanal silindi!').setDescription(`${entry.executor} adlı yetkili tarafından **${channel.name}** isimli kanal silindi! Silen yetkilinin rolleri alındı ve jaile atıldı! \nSilinen kanal tekrar oluşturuldu.`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp())}});

beta.on("channelUpdate", async (oldChannel, newChannel) => {
  let entry = await beta.guilds.cache.get(newChannel.guild.id).fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first())
  if (Date.now()-entry.createdTimestamp > 5000) {
  entry = await beta.guilds.cache.get(newChannel.guild.id).fetchAuditLogs({ type: 'CHANNEL_OVERWRITE_UPDATE' }).then(audit => audit.entries.first())}
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.channelProtection) return;
  let user = beta.users.cache.get(entry.executor.id)
  cezalandir(entry.executor.id, "jail"); 
  if (newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) newChannel.setParent(oldChannel.parentID);
  if (newChannel.type === "category") {newChannel.edit({name: oldChannel.name})} else if (newChannel.type === "text") {newChannel.edit({name: oldChannel.name, topic: oldChannel.topic, nsfw: oldChannel.nsfw, rateLimitPerUser: oldChannel.rateLimitPerUser})} else if (newChannel.type === "voice") {newChannel.edit({name: oldChannel.name, bitrate: oldChannel.bitrate, userLimit: oldChannel.userLimit,})}; oldChannel.permissionOverwrites.forEach(perm => {let thisPermOverwrites = {}; perm.allow.toArray().forEach(p => {thisPermOverwrites[p] = true;}); perm.deny.toArray().forEach(p => {thisPermOverwrites[p] = false;}); newChannel.createOverwrite(perm.id, thisPermOverwrites)});
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('İzinsiz bir kanal güncellendi!').setDescription(`${entry.executor} adlı yetkili tarafından **${newChannel.name}** isimli kanal güncellendi! Güncellenyen yetkilinin rolleri alındı ve jaile atıldı! \nKanal eski haline getirildi.`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp())}});

//-                                                                        SUNUCU KORUMA                                                                        -\\

beta.on("guildUpdate", async (oldGuild, newGuild) => {
  let entry = await newGuild.fetchAuditLogs({type: 'GUILD_UPDATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.serverProtection) return;
  cezalandir(entry.executor.id, "jail");
  let user = beta.users.cache.get(entry.executor.id)
  if (newGuild.name !== oldGuild.name) newGuild.setName(oldGuild.name);
  if (newGuild.iconURL({dynamic: true, size: 2048}) !== oldGuild.iconURL({dynamic: true, size: 2048})) newGuild.setIcon(oldGuild.iconURL({dynamic: true, size: 2048}));
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('Sunucu izinsiz güncellendi!').setDescription(`${entry.executor} adlı yetkili tarafından Sunucu izinsiz güncellendi! \nGüncelleyen yetkili sunucudan yasaklandı ve sunucu eski haline getirildi.`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp())}});

beta.on("guildMemberRemove", async member => {
  let entry = await member.guild.fetchAuditLogs({type: 'MEMBER_KICK'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.kickProtection) return;
  cezalandir(entry.executor.id, "jail");
  let user = beta.users.cache.get(entry.executor.id)
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic: true })).setColor("BLUE").setTitle('Bir kullanıcı izinsiz sunucudan atıldı!').setDescription(`${member} adlı üye, ${entry.executor} adlı yetkili tarafından sunucudan izinsiz atıldı! \n\nKullanıcıyı sunucudan atan yetkilinin yetkileri alındı ve cezalı rolü verildi!.`).setFooter(`Beipazaru Koruma sistemi`).setTimestamp())}});

beta.on("guildBanAdd", async (guild, user) => {
  let entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || guvenli(entry.executor.id) || !config.banProtection) return;
  cezalandir(entry.executor.id, "jail");
  guild.members.unban(user.id, "İzinsiz banlandığı için ban geri açıldı!").catch(console.error);
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('Bir kullanıcı izinsiz sunucudan yasaklandı!').setDescription(`${user} adlı üye, ${entry.executor} adlı yetkili tarafından sunucudan izinsiz yasaklandı! \n\n Kullanıcıyı sunucudan yasaklayan yetkilinin rolleri alındı ve cezalı rolü verildi!.`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp())}});

beta.on("guildMemberAdd", async member => {
  let entry = await member.guild.fetchAuditLogs({type: 'BOT_ADD'}).then(audit => audit.entries.first());
  if (!member.user.bot || !entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.botProtection) return;
  cezalandir(entry.executor.id, "jail");
  cezalandir(member.id, "ban");
  let user = beta.users.cache.get(entry.executor.id)
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('Sunucuya izinsiz bir bot eklendi!').setDescription(`${member} adlı botu, ${entry.executor} adlı yetkili tarafından sunucuya izinsiz eklendi! \n\nEkleyen yetkili ve bot sunucudan yasaklandı.`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp())}});

beta.on("guildMemberUpdate", async (oldMember, newMember) => {
  if (newMember.roles.cache.size > oldMember.roles.cache.size) {
  let entry = await newMember.guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first());
  if (!entry || !entry.executor || Date.now()-entry.createdTimestamp > 5000 || guvenli(entry.executor.id) || !config.rightClickProtection) return;
  if (yetkiPermleri.some(p => !oldMember.hasPermission(p) && newMember.hasPermission(p))) {
  cezalandir(entry.executor.id, "jail");
  let user = beta.users.cache.get(entry.executor.id)
  let logKanali = beta.channels.cache.get(config.logChannelID);
  if (logKanali) { logKanali.send(new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true})).setColor("BLUE").setTitle('Sunucuda izinsiz yetki yükseltildi').setDescription(`${newMember} adlı üyeye ${entry.executor} isimli yetkili tarafından sunucuda izinsiz yetki verildi! \nYetki veren yetkili sunucudan yasaklandı ve verilen yetki geri alındı!`).setFooter(`Beipazaru Koruma Sistemi`).setTimestamp())}}}});

client.login(process.env.token);
