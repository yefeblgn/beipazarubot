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

client.on('guildMemberAdd', async (member, message) => {// chimp ᵈ♡#0110
const data = require('quick.db')
const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
if(asd) {
let data2 = await data.fetch(`jailrol_${member.guild.id}`)
let rol = member.guild.roles.cache.get(data2)
if(!rol) return;
let kişi = member.guild.members.cache.get(member.id)
kişi.roles.add(rol.id);
kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    data.set(`${member.guild.id}.jail.${kişi.id}`, 'codare')
  const wasted = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`He knk öyle mi olmuş? YAT LAN AŞŞA <@${kişi}!`)
  .setTimestamp()
    member.send(wasted);
    const zort = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`<@${kişi} Adlı mâhkum sunucudan çıkarak kurtulabileceğini sandı... SALAK!`)
  .setTimestamp()
    const kanal = "1065755891720261652";
  kanal.message.send(zort);
} 
  
  
})

client.on("guildMemberAdd", (member) => {
  // Rol
  let rol = "1064876440782389398";

  // Sunucuya Giren Kişiye Rol Verme
  member.roles.add(rol);

  // Hg Mesajı
  client.channels.cache
    .get("1065766077486870568")
    .send(`${member} **adlı kullanıcıya <@&${rol}> rolü verildi. Doğrulama kodunuz özel mesaj yoluyla gönderildi, lütfen doğrulamayı yapınız.**`);
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


client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch(); 
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; 
  if (!reaction.message.guild) return; 
  if (reaction.message.guild.id !== "838788287140200508") return; //Sunucu idnizi sola girin
  
  if (reaction.message.channel.id === "1067867737298305127") { //Kanal idnizi sola girin
    if (reaction.emoji.name === "🔞") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("1067866905177759925") // İstediğiniz Rol idsini girin
      console.log(user + "Adlı kullanıcı NSFW rolü aldı.");
      return user.send("``NSFW Kanallarına Erişim Rolünüz Verilmiştir! Kanalları kapatmak için tıkladığınız emojiyi geri çekiniz.``").catch(() => console.log("Dmden Mesaj Gönderemedim"));
    }
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.guild.id !== "838788287140200508") return; //sunucu idnizi giriniz
  
  if (reaction.message.channel.id === "1067867737298305127") { //kanal idnizi giriniz
    if (reaction.emoji.name === "🔞") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("1067866905177759925")
      console.log(user + "Adlı kullanıcı NSFW rolünü kaldırdı.");//yukarıda ayarladığınız 1.rol idsini giriniz
      return user.send("``NSFW Kanallarına Erişim Rolünüz Alınmıştır!``").catch(() => console.log("Dmden Mesaj Gönderemedim."));
    }
    }
})

client.on('message', async message => {
  if (message.author.bot) return; 
  
  let pref = db.get(`prefix.${message.guild.id}`);
  let prefix;
  
  if (!pref) {
    prefix = "?"; //ayarladığınız komutu kullanabilmek için prefixinizi ayarlayabilirsiniz
  } else {
    prefix = pref;
  }
  
  if (!message.content.startsWith(prefix)) return;
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  
  if (msg.startsWith(prefix + "nsfwerişim")) { //solda ki rolü istediğiniz gibi ayarlayabilirsiniz gerekli ayarlamaları yaptıktan sonra sola ayarladığınız komutu kullanacaksınız
    let channel = client.channels.cache.get("1067867737298305127"); 
    const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setTitle("NSFW Kanallarına Erişim")
    .setDescription(`NSFW Kanallarına Erişmek İçin Aşağıdaki Emojiye Basınız. \n\n*+18 içerikler mevcuttur, emojiye tıklayarak bunu kabul etmiş sayılırsınız.*`) //emoji almak için herhangi bir kanala \:emojiadı: şeklinde yazıp alabilirsiniz
    channel.send(embed).then(async msg => {
      await msg.react("🔞");
    });
   };
});

///////////////////////////////////////////
///////////////////////////////////////////

//////////////////////////////////////////
//////////////////////////////////////////



const util = require('util');
const { Readable } = require('stream');

//////////////////////////////////////////
///////////////// VARIA //////////////////
//////////////////////////////////////////

function necessary_dirs() {
    if (!fs.existsSync('./data/')){
        fs.mkdirSync('./data/');
    }
}
necessary_dirs()

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function convert_audio(input) {
    try {
        // stereo to mono channel
        const data = new Int16Array(input)
        const ndata = new Int16Array(data.length/2)
        for (let i = 0, j = 0; i < data.length; i+=4) {
            ndata[j++] = data[i]
            ndata[j++] = data[i+1]
        }
        return Buffer.from(ndata);
    } catch (e) {
        console.log(e)
        console.log('convert_audio: ' + e)
        throw e;
    }
}
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


//////////////////////////////////////////
//////////////// CONFIG //////////////////
//////////////////////////////////////////

const SETTINGS_FILE = 'settings.json';

let DISCORD_TOK = null;
let WITAPIKEY = null; 
let SPOTIFY_TOKEN_ID = null;
let SPOTIFY_TOKEN_SECRET = null;

function loadConfig() {
    if (fs.existsSync(SETTINGS_FILE)) {
        const CFG_DATA = JSON.parse( fs.readFileSync(SETTINGS_FILE, 'utf8') );
        DISCORD_TOK = CFG_DATA.discord_token;
        WITAPIKEY = CFG_DATA.wit_ai_token;
        SPOTIFY_TOKEN_ID = CFG_DATA.spotify_token_id;
        SPOTIFY_TOKEN_SECRET = CFG_DATA.spotify_token_secret;
    } else {
        DISCORD_TOK = process.env.token;
        WITAPIKEY = process.env.witai;
        SPOTIFY_TOKEN_ID = process.env.spotifyid;
        SPOTIFY_TOKEN_SECRET = process.env.spotifytoken;
    }
    if (!DISCORD_TOK || !WITAPIKEY)
        throw 'failed loading config #113 missing keys!'
    
}
loadConfig()


const https = require('https')
function listWitAIApps(cb) {
    const options = {
      hostname: 'api.wit.ai',
      port: 443,
      path: '/apps?offset=0&limit=100',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+WITAPIKEY,
      },
    }

    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      let body = ''
      res.on('data', (chunk) => {
        body += chunk
      });
      res.on('end',function() {
        cb(JSON.parse(body))
      })
    })

    req.on('error', (error) => {
      console.error(error)
      cb(null)
    })
    req.end()
}
function updateWitAIAppLang(appID, lang, cb) {
    const options = {
      hostname: 'api.wit.ai',
      port: 443,
      path: '/apps/' + appID,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+WITAPIKEY,
      },
    }
    const data = JSON.stringify({
      lang
    })

    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      let body = ''
      res.on('data', (chunk) => {
        body += chunk
      });
      res.on('end',function() {
        cb(JSON.parse(body))
      })
    })
    req.on('error', (error) => {
      console.error(error)
      cb(null)
    })
    req.write(data)
    req.end()
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


const DISCORD_MSG_LIMIT = 2000;
const discordClient = new Discord.Client()
discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}!`)
})
discordClient.login(DISCORD_TOK)

const PREFIX = '!';
const _CMD_HELP        = PREFIX + 'help';
const _CMD_JOIN        = PREFIX + 'join';
const _CMD_LEAVE       = PREFIX + 'leave';
const _CMD_PLAY        = PREFIX + 'play';
const _CMD_PAUSE       = PREFIX + 'pause';
const _CMD_RESUME      = PREFIX + 'resume';
const _CMD_SHUFFLE     = PREFIX + 'shuffle';
const _CMD_FAVORITE    = PREFIX + 'favorite';
const _CMD_UNFAVORITE  = PREFIX + 'unfavorite';
const _CMD_FAVORITES   = PREFIX + 'favorites';
const _CMD_GENRE       = PREFIX + 'genre';
const _CMD_GENRES      = PREFIX + 'genres';
const _CMD_CLEAR       = PREFIX + 'clear';
const _CMD_RANDOM      = PREFIX + 'random';
const _CMD_SKIP        = PREFIX + 'skip';
const _CMD_QUEUE       = PREFIX + 'list';
const _CMD_DEBUG       = PREFIX + 'debug';
const _CMD_TEST        = PREFIX + 'hello';
const _CMD_LANG        = PREFIX + 'lang';
const PLAY_CMDS = [_CMD_PLAY, _CMD_PAUSE, _CMD_RESUME, _CMD_SHUFFLE, _CMD_SKIP, _CMD_GENRE, _CMD_GENRES, _CMD_RANDOM, _CMD_CLEAR, _CMD_QUEUE, _CMD_FAVORITE, _CMD_FAVORITES, _CMD_UNFAVORITE];

const EMOJI_GREEN_CIRCLE = '🟢'
const EMOJI_RED_CIRCLE = '🔴'

const GENRES = {
    'hip-hop': ['hip-hop', 'hip hop', 'hiphop', 'rap'],
    'rock': ['rock'],
    'dance': ['dance'],
    'trance': ['techno'],
    'trance': ['trance'],
    'groove': ['groove'],
    'classical': ['classical'],
    'techno': ['techno'],

}

const guildMap = new Map();

discordClient.on('message', async (msg) => {
    try {
        if (!('guild' in msg) || !msg.guild) return; // prevent private messages to bot
        const mapKey = msg.guild.id;
        if (msg.content.trim().toLowerCase() == _CMD_JOIN) {
            if (!msg.member.voice.channelID) {
                msg.reply('Error: please join a voice channel first.')
            } else {
                if (!guildMap.has(mapKey))
                    await connect(msg, mapKey)
                else
                    msg.reply('Already connected')
            }
        } else if (msg.content.trim().toLowerCase() == _CMD_LEAVE) {
            if (guildMap.has(mapKey)) {
                let val = guildMap.get(mapKey);
                if (val.voice_Channel) val.voice_Channel.leave()
                if (val.voice_Connection) val.voice_Connection.disconnect()
                if (val.musicYTStream) val.musicYTStream.destroy()
                    guildMap.delete(mapKey)
                msg.reply("Disconnected.")
            } else {
                msg.reply("Cannot leave because not connected.")
            }
        }
        else if ( PLAY_CMDS.indexOf( msg.content.trim().toLowerCase().split('\n')[0].split(' ')[0] ) >= 0 ) {
            if (!msg.member.voice.channelID) {
                msg.reply('Error: please join a voice channel first.')
            } else {
                if (!guildMap.has(mapKey))
                    await connect(msg, mapKey)
                music_message(msg, mapKey);
            }
        } else if (msg.content.trim().toLowerCase() == _CMD_HELP) {
            msg.reply(getHelpString());
        }
        else if (msg.content.trim().toLowerCase() == _CMD_DEBUG) {
            console.log('toggling debug mode')
            let val = guildMap.get(mapKey);
            if (val.debug)
                val.debug = false;
            else
                val.debug = true;
        }
        else if (msg.content.trim().toLowerCase() == _CMD_TEST) {
            msg.reply('hello back =)')
        }
        else if (msg.content.split('\n')[0].split(' ')[0].trim().toLowerCase() == _CMD_LANG) {
            const lang = msg.content.replace(_CMD_LANG, '').trim().toLowerCase()
            listWitAIApps(data => {
              if (!data.length)
                return msg.reply('no apps found! :(')
              for (const x of data) {
                updateWitAIAppLang(x.id, lang, data => {
                  if ('success' in data)
                    msg.reply('succes!')
                  else if ('error' in data && data.error !== 'Access token does not match')
                    msg.reply('Error: ' + data.error)
                })
              }
            })
        }
    } catch (e) {
        console.log('discordClient message: ' + e)
        msg.reply('Error#180: Something went wrong, try again or contact the developers if this keeps happening.');
    }
})

function getHelpString() {
    let out = '**VOICE COMMANDS:**\n'
        out += '```'
        out += 'music help\n'
        out += 'music play [random, favorites, <genre> or query]\n'
        out += 'music skip\n'
        out += 'music pause/resume\n'
        out += 'music shuffle\n'
        out += 'music genres\n'
        out += 'music set favorite\n'
        out += 'music favorites\n'
        out += 'music list\n'
        out += 'music clear list\n';
        out += '```'

        out += '**TEXT COMMANDS:**\n'
        out += '```'
        out += _CMD_HELP + '\n'
        out += _CMD_JOIN + '/' + _CMD_LEAVE + '\n'
        out += _CMD_PLAY + ' [query]\n'
        out += _CMD_GENRE + ' [name]\n'
        out += _CMD_RANDOM + '\n'
        out += _CMD_PAUSE + '/' + _CMD_RESUME + '\n'
        out += _CMD_SKIP + '\n'
        out += _CMD_SHUFFLE + '\n'
        out += _CMD_FAVORITE + '\n'
        out += _CMD_UNFAVORITE + ' [name]\n'
        out += _CMD_FAVORITES + '\n'
        out += _CMD_GENRES + '\n'
        out += _CMD_QUEUE + '\n';
        out += _CMD_CLEAR + '\n';
        out += '```'
    return out;
}

async function connect(msg, mapKey) {
    try {
        let voice_Channel = await discordClient.channels.fetch(msg.member.voice.channelID);
        if (!voice_Channel) return msg.reply("Error: The voice channel does not exist!");
        let text_Channel = await discordClient.channels.fetch(msg.channel.id);
        if (!text_Channel) return msg.reply("Error: The text channel does not exist!");
        let voice_Connection = await voice_Channel.join();
        voice_Connection.play('sound.mp3', { volume: 0.5 });
        guildMap.set(mapKey, {
            'text_Channel': text_Channel,
            'voice_Channel': voice_Channel,
            'voice_Connection': voice_Connection,
            'musicQueue': [],
            'musicDispatcher': null,
            'musicYTStream': null,
            'currentPlayingTitle': null,
            'currentPlayingQuery': null,
            'debug': false,
        });
        speak_impl(voice_Connection, mapKey)
        voice_Connection.on('disconnect', async(e) => {
            if (e) console.log(e);
            guildMap.delete(mapKey);
        })
        msg.reply('connected!')
    } catch (e) {
        console.log('connect: ' + e)
        msg.reply('Error: unable to join your voice channel.');
        throw e;
    }
}

function speak_impl(voice_Connection, mapKey) {
    voice_Connection.on('speaking', async (user, speaking) => {
        if (speaking.bitfield == 0 || user.bot) {
            return
        }
        console.log(`I'm listening to ${user.username}`)
        // this creates a 16-bit signed PCM, stereo 48KHz stream
        const audioStream = voice_Connection.receiver.createStream(user, { mode: 'pcm' })
        audioStream.on('error',  (e) => { 
            console.log('audioStream: ' + e)
        });
        let buffer = [];
        audioStream.on('data', (data) => {
            buffer.push(data)
        })
        audioStream.on('end', async () => {
            buffer = Buffer.concat(buffer)
            const duration = buffer.length / 48000 / 4;
            console.log("duration: " + duration)

            if (duration < 1.0 || duration > 19) { // 20 seconds max dur
                console.log("TOO SHORT / TOO LONG; SKPPING")
                return;
            }

            try {
                let new_buffer = await convert_audio(buffer)
                let out = await transcribe(new_buffer);
                if (out != null)
                    process_commands_query(out, mapKey, user.id);
            } catch (e) {
                console.log('tmpraw rename: ' + e)
            }


        })
    })
}

function process_commands_query(query, mapKey, userid) {
    if (!query || !query.length)
        return;

    let out = null;

    const regex = /^music ([a-zA-Z]+)(.+?)?$/;
    const m = query.toLowerCase().match(regex);
    if (m && m.length) {
        const cmd = (m[1]||'').trim();
        const args = (m[2]||'').trim();

        switch(cmd) {
            case 'help':
                out = _CMD_HELP;
                break;
            case 'skip':
                out = _CMD_SKIP;
                break;
            case 'shuffle':
                out = _CMD_SHUFFLE;
                break;
            case 'genres':
                out = _CMD_GENRES;
                break;
            case 'pause':
                out = _CMD_PAUSE;
                break;
            case 'resume':
                out = _CMD_RESUME;
                break;
            case 'clear':
                if (args == 'list')
                    out = _CMD_CLEAR;
                break;
            case 'list':
                out = _CMD_QUEUE;
                break;
            case 'hello':
                out = 'hello back =)'
                break;
            case 'favorites':
                out = _CMD_FAVORITES;
                break;
            case 'set':
                switch (args) {
                    case 'favorite':
                    case 'favorites':
                        out = _CMD_FAVORITE;
                        break;
                }
                break;
            case 'play':
            case 'player':
                switch(args) {
                    case 'random':
                        out = _CMD_RANDOM;
                        break;
                    case 'favorite':
                    case 'favorites':
                        out = _CMD_PLAY + ' ' + 'favorites';
                        break;
                    default:
                        for (let k of Object.keys(GENRES)) {
                            if (GENRES[k].includes(args)) {
                                out = _CMD_GENRE + ' ' + k;
                            }
                        }
                        if (out == null) {
                            out = _CMD_PLAY + ' ' + args;
                        }
                }
                break;
        }
        if (out == null)
            out = '<bad command: ' + query + '>';
    }
    if (out != null && out.length) {
        // out = '<@' + userid + '>, ' + out;
        console.log('text_Channel out: ' + out)
        const val = guildMap.get(mapKey);
        val.text_Channel.send(out)
    }
}

async function music_message(message, mapKey) {
    let replymsgs = [];
    const messes = message.content.split('\n');
    for (let mess of messes) {
        const args = mess.split(' ');

        if (args[0] == _CMD_PLAY && args.length) {
            const qry = args.slice(1).join(' ');
            if (qry == 'favorites') {
                // play guild's favorites
                if (mapKey in GUILD_FAVORITES) {
                    let arr = GUILD_FAVORITES[mapKey];
                    if (arr.length) {
                        for (let item of arr)     {
                            addToQueue(item, mapKey)
                        }
                        message.react(EMOJI_GREEN_CIRCLE)
                    } else {
                        message.channel.send('No favorites yet.')
                    }
                } else {
                    message.channel.send('No favorites yet.')
                }
            }
            else if (isSpotify(qry)) {
                try {
                    const arr = await spotify_tracks_from_playlist(qry);
                    console.log(arr.length + ' spotify items from playlist')
                    for (let item of arr)
                        addToQueue(item, mapKey);
                    message.react(EMOJI_GREEN_CIRCLE)
                } catch(e) {
                    console.log('music_message 464:' + e)
                    message.channel.send('Failed processing spotify link: ' + qry);
                }
            } else {

                if (isYoutube(qry) && isYoutubePlaylist(qry)) {
                    try {
                        const arr = await youtube_tracks_from_playlist(qry);
                        for (let item of arr)
                            addToQueue(item, mapKey)
                        message.react(EMOJI_GREEN_CIRCLE)
                    } catch (e) {
                        console.log('music_message 476:' + e)
                        message.channel.send('Failed to process playlist: ' + qry);
                    }
                } else {
                    try {
                        addToQueue(qry, mapKey);
                        message.react(EMOJI_GREEN_CIRCLE)
                    } catch (e) {
                        console.log('music_message 484:' + e)
                        message.channel.send('Failed to find video for (try again): ' + qry);
                    }
                }
            }
        } else if (args[0] == _CMD_SKIP) {

            skipMusic(mapKey, ()=>{
                message.react(EMOJI_GREEN_CIRCLE)
            }, (msg)=>{
                if (msg && msg.length) message.channel.send(msg);
            })

        } else if (args[0] == _CMD_PAUSE) {

            pauseMusic(mapKey, ()=>{
                message.react(EMOJI_GREEN_CIRCLE)
            }, (msg)=>{
                if (msg && msg.length) message.channel.send(msg);
            })

        } else if (args[0] == _CMD_RESUME) {

            resumeMusic(mapKey, ()=>{
                message.react(EMOJI_GREEN_CIRCLE)
            }, (msg)=>{
                if (msg && msg.length) message.channel.send(msg);
            })

        } else if (args[0] == _CMD_SHUFFLE) {

            shuffleMusic(mapKey, ()=>{
                message.react(EMOJI_GREEN_CIRCLE)
            }, (msg)=>{
                if (msg && msg.length) message.channel.send(msg);
            })

        } else if (args[0] == _CMD_CLEAR) {

            clearQueue(mapKey, ()=>{
                message.react(EMOJI_GREEN_CIRCLE)
            }, (msg)=>{
                if (msg && msg.length) message.channel.send(msg);
            })

        } else if (args[0] == _CMD_QUEUE) {

            const chunks = message_chunking(getQueueString(mapKey), DISCORD_MSG_LIMIT);
            for (let chunk of chunks) {
                console.log(chunk.length)
                message.channel.send(chunk);
            }
            message.react(EMOJI_GREEN_CIRCLE)

        } else if (args[0] == _CMD_RANDOM) {

            let arr = await spotify_new_releases();
            if (arr.length) {
                arr = shuffle(arr);
                // let item = arr[Math.floor(Math.random() * arr.length)];
                for (let item of arr)
                    addToQueue(item, mapKey);
                message.react(EMOJI_GREEN_CIRCLE)
            } else {
                message.channel.send('no results for random');
            }

        } else if (args[0] == _CMD_GENRES) {

            let out = "------------ genres ------------\n";
            for (let g of Object.keys(GENRES)) {
                out += g + '\n'
            }
            out += "--------------------------------\n";
            const chunks = message_chunking(out, DISCORD_MSG_LIMIT);
            for (let chunk of chunks)
                message.channel.send(chunk);

        } else if (args[0] == _CMD_GENRE) {

            const genre = args.slice(1).join(' ').trim();
            let arr = await spotify_recommended(genre);
            if (arr.length) {
                arr = shuffle(arr);
                // let item = arr[Math.floor(Math.random() * arr.length)];
                for (let item of arr)
                    addToQueue(item, mapKey);
                message.react(EMOJI_GREEN_CIRCLE)
            } else {
                message.channel.send('no results for genre: ' + genre);
            }

        } else if (args[0] == _CMD_FAVORITES) {
            const favs = getFavoritesString(mapKey);
            if (!(mapKey in GUILD_FAVORITES) || !GUILD_FAVORITES[mapKey].length)
                message.channel.send('No favorites to play.')
            else {
                const chunks = message_chunking(favs, DISCORD_MSG_LIMIT);
                for (let chunk of chunks)
                    message.channel.send(chunk);
                message.react(EMOJI_GREEN_CIRCLE)
            }

        } else if (args[0] == _CMD_FAVORITE) {

            setAsFavorite(mapKey, ()=>{
                message.react(EMOJI_GREEN_CIRCLE)
            }, (msg)=> {
                if (msg && msg.length) message.channel.send(msg);
            })

        }  else if (args[0] == _CMD_UNFAVORITE) {

            const qry = args.slice(1).join(' ');
            unFavorite(qry, mapKey, ()=>{
                message.react(EMOJI_GREEN_CIRCLE)
            }, (msg)=>{
                if (msg && msg.length) message.channel.send(msg);
            })

        } 

    }
    
    queueTryPlayNext(mapKey, (title)=>{
        message.react(EMOJI_GREEN_CIRCLE);
        message.channel.send('Now playing: **' + title + '**')
    }, (msg)=>{
        if (msg && msg.length) message.channel.send(msg);
    });
}

let GUILD_FAVORITES = {};
const GUILD_FAVORITES_FILE = './data/guild_favorites.json';
setInterval(()=>{
    var json = JSON.stringify(GUILD_FAVORITES);
    fs.writeFile(GUILD_FAVORITES_FILE, json, 'utf8', (err)=>{
        if (err) return console.log('GUILD_FAVORITES_FILE:' + err);
    });
},1000);
function load_guild_favorites() {
    if (fs.existsSync(GUILD_FAVORITES_FILE)) {
        const data = fs.readFileSync(GUILD_FAVORITES_FILE, 'utf8');
        GUILD_FAVORITES = JSON.parse(data);
    }
}
load_guild_favorites();

function setAsFavorite(mapKey, cbok, cberr) {
    let val = guildMap.get(mapKey);
    if (!val.currentPlayingTitle || !val.currentPlayingQuery)
        cberr('Nothing playing at the moment.')
    else {
        if (!(mapKey in GUILD_FAVORITES)) {
            GUILD_FAVORITES[mapKey] = [];
        }
        if (!GUILD_FAVORITES[mapKey].includes(val.currentPlayingQuery))
            GUILD_FAVORITES[mapKey].push( val.currentPlayingQuery )
        cbok()
    }
}
function unFavorite(qry, mapKey, cbok, cberr) {
    let val = guildMap.get(mapKey);
    if (!qry || !qry.length)
        cberr('Invalid query.');
    else {
        if (!(mapKey in GUILD_FAVORITES)) {
            cberr('No favorites.');
        } else {
            if (GUILD_FAVORITES[mapKey].includes(qry)) {
                GUILD_FAVORITES[mapKey] = GUILD_FAVORITES[mapKey].filter(e => e !== qry); 
                cbok()
            } else {
                cberr('Favorite not found.');
            }
        }
    }
}

function getFavoritesString(mapKey) {
    let out = "------------ favorites ------------\n";
    if (mapKey in GUILD_FAVORITES) {
        let arr = GUILD_FAVORITES[mapKey];
        if (arr.length) {
            for (let item of arr)     {
                out += item + '\n';
            }
        } else {
            out += '(empty)\n'
        }
    } else {
        out += '(empty)\n'
    }
    out += "-----------------------------------\n";
    return out;
}

function message_chunking(msg, MAXL) {
    const msgs = msg.split('\n');
    const chunks = [];

    let outmsg = '';
    while (msgs.length) {
        let a = msgs.shift() + '\n';
        if (a.length > MAXL) {
            console.log(a)
            throw new Error('error#418: max single msg limit');
        }

        if ((outmsg + a + 6).length <= MAXL) {
            outmsg += a;
        } else {
            chunks.push('```' + outmsg + '```')
            outmsg = ''
        }
    }
    if (outmsg.length) {
        chunks.push('```' + outmsg + '```')
    }
    return chunks;
}

function getQueueString(mapKey) {
    let val = guildMap.get(mapKey);
    let _message = "------------ queue ------------\n";
    if (val.currentPlayingTitle != null)
        _message += '[X] ' + val.currentPlayingTitle + '\n';
    for (let i = 0; i < val.musicQueue.length; i++) {
        _message += '['+i+'] ' + val.musicQueue[i] + '\n';
    }
    if (val.currentPlayingTitle == null && val.musicQueue.length == 0)
        _message += '(empty)\n'
    _message += "---------------------------------\n";
    return _message;
}

async function queueTryPlayNext(mapKey, cbok, cberr) {
    try {
        let val = guildMap.get(mapKey);
        if (!val) {
            console.log('mapKey: ' + mapKey + ' no longer in guildMap')
            return
        }

        if (val.musicQueue.length == 0)
            return;
        if (val.currentPlayingTitle)
            return;

        const qry = val.musicQueue.shift();
        const data = await getYoutubeVideoData(qry)
        const ytid = data.id;
        const title = data.title;

        // lag or stuttering? try this first!
        // https://groovy.zendesk.com/hc/en-us/articles/360023031772-Laggy-Glitchy-Distorted-No-Audio
        val.currentPlayingTitle = title;
        val.currentPlayingQuery = qry;
        val.musicYTStream = ytdl('https://www.youtube.com/watch?v=' + ytid, {
            filter: 'audioonly',
            quality: 'highestaudio',
            highWaterMark: 1024*1024*10, // 10mb
        }, {highWaterMark: 1})
        val.musicDispatcher = val.voice_Connection.play(val.musicYTStream);
        val.musicDispatcher.on('finish', () => {
            val.currentPlayingTitle = val.currentPlayingQuery = null;
            queueTryPlayNext(mapKey, cbok, cberr);
        });
        val.musicDispatcher.on('error', (err) => {
            if (err) console.log('musicDispatcher error: ' + err);
            console.log(err)
            cberr('Error playing <'+title+'>, try again?')
            val.currentPlayingTitle = val.currentPlayingQuery = null;
            queueTryPlayNext(mapKey, cbok, cberr);
        });
        val.musicDispatcher.on('start', () => {
            cbok(title)
        });
        
    } catch (e) {
        console.log('queueTryPlayNext: ' + e)
        cberr('Error playing, try again?')
        if (typeof val !== 'undefined') {
            val.currentPlayingTitle = val.currentPlayingQuery = null;
            if (val.musicDispatcher) val.musicDispatcher.end();
        }
    }

}

function addToQueue(title, mapKey) {
    let val = guildMap.get(mapKey);
    if (val.currentPlayingTitle == title || val.currentPlayingQuery == title || val.musicQueue.includes(title)) {
        console.log('duplicate prevented: ' + title)
    } else {
        val.musicQueue.push(title);
    }
}


function skipMusic(mapKey, cbok, cberr) {
    let val = guildMap.get(mapKey);
    if (!val.currentPlayingTitle) {
        cberr('Nothing to skip');
    } else {
        if (val.musicDispatcher) val.musicDispatcher.end();
        cbok()
    }
}

function pauseMusic(mapKey, cbok, cberr) {
    let val = guildMap.get(mapKey);
    if (!val.currentPlayingTitle) {
        cberr('Nothing to pause');
    } else {
        if (val.musicDispatcher) val.musicDispatcher.pause();
        cbok()
    }
}

function resumeMusic(mapKey, cbok, cberr) {
    let val = guildMap.get(mapKey);
    if (!val.currentPlayingTitle) {
        cberr('Nothing to resume');
    } else {
        if (val.musicDispatcher) val.musicDispatcher.resume();
        cbok()
    }
}

function clearQueue(mapKey, cbok, cberr) {
    let val = guildMap.get(mapKey);
    val.musicQueue = [];
    if (val.musicDispatcher) val.musicDispatcher.end();
    cbok()
}

function shuffleMusic(mapKey, cbok, cberr) {
    let val = guildMap.get(mapKey);
    val.musicQueue = shuffle(val.musicQueue);
    cbok()
}


//////////////////////////////////////////
//////////////// SPEECH //////////////////
//////////////////////////////////////////
async function transcribe(buffer) {

  return transcribe_witai(buffer)
  // return transcribe_gspeech(buffer)
}

// WitAI
let witAI_lastcallTS = null;
const witClient = require('node-witai-speech');
async function transcribe_witai(buffer) {
    try {
        // ensure we do not send more than one request per second
        if (witAI_lastcallTS != null) {
            let now = Math.floor(new Date());    
            while (now - witAI_lastcallTS < 1000) {
                console.log('sleep')
                await sleep(100);
                now = Math.floor(new Date());
            }
        }
    } catch (e) {
        console.log('transcribe_witai 837:' + e)
    }

    try {
        console.log('transcribe_witai')
        const extractSpeechIntent = util.promisify(witClient.extractSpeechIntent);
        var stream = Readable.from(buffer);
        const contenttype = "audio/raw;encoding=signed-integer;bits=16;rate=48k;endian=little"
        const output = await extractSpeechIntent(WITAPIKEY, stream, contenttype)
        witAI_lastcallTS = Math.floor(new Date());
        console.log(output)
        stream.destroy()
        if (output && '_text' in output && output._text.length)
            return output._text
        if (output && 'text' in output && output.text.length)
            return output.text
        return output;
    } catch (e) { console.log('transcribe_witai 851:' + e); console.log(e) }
}

// Google Speech API
// https://cloud.google.com/docs/authentication/production
const gspeech = require('@google-cloud/speech');
const gspeechclient = new gspeech.SpeechClient({
  projectId: 'discordbot',
  keyFilename: 'gspeech_key.json'
});

async function transcribe_gspeech(buffer) {
  try {
      console.log('transcribe_gspeech')
      const bytes = buffer.toString('base64');
      const audio = {
        content: bytes,
      };
      const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 48000,
        languageCode: 'en-US',  // https://cloud.google.com/speech-to-text/docs/languages
      };
      const request = {
        audio: audio,
        config: config,
      };

      const [response] = await gspeechclient.recognize(request);
      const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
      console.log(`gspeech: ${transcription}`);
      return transcription;

  } catch (e) { console.log('transcribe_gspeech 368:' + e) }
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


//////////////////////////////////////////
//////////////// YOUTUBE /////////////////
//////////////////////////////////////////
let YT_CACHE = {};
const getYoutubeID = require('get-youtube-id');
const ytlist = require('youtube-playlist');
const yts = util.promisify(require('yt-search'))

async function searchYoutubeVideo(query) {
    const r = await yts(query);
    try {
        const videos = r.videos
        if (!videos.length) {
            console.log(query)
            throw new Error('videos empty array')
        }
        const playlists = r.playlists || r.lists
        const channels = r.channels || r.accounts
        return {id:videos[0].videoId, title:videos[0].title};
    } catch (e) {
        console.log(r)
        console.log('searchYoutubeVideo: ' + e)
        throw e;
    }
}

function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;
}
function isYoutubePlaylist(str) {
    return str.toLowerCase().indexOf('?list=') > -1 || str.toLowerCase().indexOf('&list=') > -1;
}

async function youtube_tracks_from_playlist(url, isretry=false) {
    const data = await ytlist(url, 'url');
    if (data && 'data' in data && 'playlist' in data.data && data.data.playlist && data.data.playlist.length) {
        return data.data.playlist
    } else {
        if (!isretry) {
            console.log('retrying yt playlist processing')
            return await youtube_tracks_from_playlist(url, true);
        } else {
            return null;
        }
    }
}

async function getYoutubeVideoData(str, isretry=false) {
    try {
        if (str in YT_CACHE) {
            const val = YT_CACHE[str];
            let now = Math.floor(new Date());
            const dt = now - val.created;
            if (dt < 1000*60*60*24*14) { // 14 days ttl
                console.log('cache hit: ' + str)
                return {id:val.id, title:val.title};
            } else {
                console.log('cache expired: ' + str)
            }
        } else {
            console.log('cache miss: ' + str)
        }

        let qry = str;
        if (isYoutube(str))
            qry = getYoutubeID(str);

        const data = await searchYoutubeVideo(qry);
        if (data && 'id' in data && 'title' in data) {
            YT_CACHE[str] = {id:data.id, title:data.title, created: Math.floor(new Date())};
        }
        return data;
    } catch (e) {
        if (!isretry) {
            console.log('2nd attempt')
            return getYoutubeVideoData(str, true);
        } else {
            console.log('getYoutubeVideoData: ' + e)
            throw new Error('unable to obtain video data');
        }
    }
}

const YT_CACHE_FILE = './data/yt_cache.json';
setInterval(()=>{
    var json = JSON.stringify(YT_CACHE);
    fs.writeFile(YT_CACHE_FILE, json, 'utf8', (err)=>{
        if (err) return console.log('YT_CACHE_FILE: ' + err);
    });
},1000);
function load_yt_cache() {
    if (fs.existsSync(YT_CACHE_FILE)) {
        const data = fs.readFileSync(YT_CACHE_FILE, 'utf8');
        YT_CACHE = JSON.parse(data);
    }
}
load_yt_cache();
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


//////////////////////////////////////////
//////////////// SPOTIFY /////////////////
//////////////////////////////////////////
const Spotify = require('node-spotify-api');
const spotifyClient = new Spotify({
    id: SPOTIFY_TOKEN_ID,
    secret: SPOTIFY_TOKEN_SECRET
});

function isSpotify(str) {
    return str.toLowerCase().indexOf('spotify.com') > -1;
}

function spotify_extract_trackname(item) {
    if ('artists' in item) {
        let name = '';
        for (let artist of item.artists) {
            name += ' ' + artist.name;
        }

        let title = item.name;
        let track = title + ' ' + name
        return track;
    } else if ('track' in item && 'artists' in item.track) {
        return spotify_extract_trackname(item.track);
    }
}

async function spotify_new_releases() {

    let arr = await spotifyClient
        .request('https://api.spotify.com/v1/browse/new-releases')
        .then(function(data) {
            let arr = [];
            if ('albums' in data) {
                for (let item of data.albums.items) {
                    let track = spotify_extract_trackname(item)
                    arr.push(track)
                }
            }
            return arr;
        })
        .catch(function(err) {
            console.error('spotify_new_releases: ' + err);
        });

    return arr;
}

async function spotify_recommended(genre) {

    let arr = await spotifyClient
        .request('https://api.spotify.com/v1/recommendations?seed_genres=' + genre)
        .then(function(data) {
            let arr = [];
            if ('tracks' in data) {
                for (let item of data.tracks) {
                    let track = spotify_extract_trackname(item)
                    arr.push(track)
                }
            }
            return arr;
        })
        .catch(function(err) {
            console.error('spotify_recommended: ' + err);
        });

    return arr;
}

async function spotify_tracks_from_playlist(spotifyurl) {

    const regex = /\/playlist\/(.+?)(\?.+)?$/;
    const found = spotifyurl.match(regex);
    const url = 'https://api.spotify.com/v1/playlists/' + found[1] + '/tracks';
    console.log(url)
    let arr = await spotifyClient
        .request(url)
        .then(function(data) {
            let arr = [];
            if ('items' in data) {
                for (let item of data.items) {
                    let track = spotify_extract_trackname(item)
                    arr.push(track)
                }
            }
            return arr;
        })
        .catch(function(err) {
            console.error('spotify_tracks_from_playlist: ' + err);
        });

    return arr;
}

////////////////////////////////
////////////////////////////////
client.login(process.env.token);
