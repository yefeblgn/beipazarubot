const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");

exports.run = async (client, msg, args) => {
  var embed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: ${msg.author}, Bu komut burda engellenmiştir. <#913932274238648421> kanalında kullanın`)
              .setColor("RANDOM")
   if (msg.channel.id !== '913932274238648421') return msg.channel.send({embed: embed})
  msg.delete
  let u = msg.mentions.users.first() || msg.author;

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
  var g = "50"
  
  var Canvas = require('canvas')
        var canvas = Canvas.createCanvas(750, 240)
        var ctx = canvas.getContext('2d');
        const avatarURL = u.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })
        const { body } = await request.get(avatarURL);
        const avatar = await Canvas.loadImage(body);
  
//  ctx.fillStyle = "#000000";
//  ctx.fill()
//        ctx.fillRect(25, 20, 700, 200)  
  
  
  
//        ctx.fillStyle = "rgba(0, 0, 0, 0.30)";
//        ctx.fill()
//        ctx.fillRect(0, 0, 750, 240)
  
        var re = "db3b3b"
  
  var xp = db.fetch(`puan_${u.id + msg.guild.id}`);
  var lvl = db.fetch(`seviye_${u.id + msg.guild.id}`);  

        let vUser = msg.guild.member(msg.mentions.users.first());
        const emoji = client.emojis.cache.get('702138649151668284');
        let sira = ''
        const sorted = msg.guild.members.cache.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`seviye_${b.user.id + msg.guild.id}`) - db.fetch(`seviye_${a.user.id + msg.guild.id}`) });
        const top10 = sorted.splice(0, msg.guild.members.cache.size)
        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < msg.guild.members.cache.size; i++) {
                if(mappedID[i] === u.id) {
                        sira += `${i + 1}`
                }
        }
const background = await Canvas.loadImage('https://imgur.com/k8S8HSp.png');
  const frame = await Canvas.loadImage("https://imgur.com/sW12mqs.png");
  
        var de = 1.6
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.strokeStyle = '#FFA500';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#999999";
        ctx.arc(257 + 18.5, 125.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 125.5 + 36.15, 250 * de, 37.5);
        ctx.arc(257 + 18.5 + 250 * de, 125.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `#${re}`;
        ctx.arc(257 + 18.5, 125.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 125.5 + 36.25, xp * de, 37.5);
        ctx.arc(257 + 18.5 + xp * de, 125.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = `#ffffff`;
        ctx.font = '32px sans-serif';
        ctx.textAlign = "right";
        const guild = msg.guild.channels.cache.get("939683694845775913");
        var memberCount = msg.guild.members.cache.filter(member => !member.user.bot).size;
        ctx.fillText(`Sıralama #${sira}/${memberCount} | Seviye ${lvl || 1}`, 670, 70);
        ctx.font = '24px sans-serif';
        ctx.textAlign = "right";
        ctx.fillText(`${xp || 0} / 200 XP`, 670, 100);
  ctx.fillStyle = `#F2D2BD`;
  ctx.font = 'bold 28px Comic Sans';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 215, 150)
        ctx.beginPath();
        ctx.lineWidth = 8;
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(43 + 67, 67 + 67, 67, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 43, 67, 135, 130);
       
    
          msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"seviye.png"}]})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seviye', "level", "rank"],
  kategori: "Genel",
  permLevel: 0,
};

exports.help = {
  name: 'seviye',
  description: 'Mevcut seviyeni gösterir.',
  usage: 'seviye'
};