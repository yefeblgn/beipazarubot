const Discord = require('discord.js');

exports.run = async(client, msg) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifLevels = ["Yok", "Düşük hesapta e-posta doğrulanmış olmalıdır", "Orta - Discord'a 5 dakikadan daha uzun süre kayıtlı olmalıdır", "Yüksek - (╯ ° □ °） ╯︵ ┻━┻ - sunucunun üyesi 10 dakikadan uzun olmalıdır", "Çok Yüksek - ┻━┻ ミ ヽ (ಠ 益 ಠ) ﾉ 彡 ┻━┻ - doğrulanmış bir telefon numarasına sahip olmalıdır"];
	

	
			const yukleniyor = await msg.channel.send(`Sunucu ppsi alınıyor... `);

let sunucu = new Discord.MessageEmbed()
.setDescription(`İşte sunucunun fotoğrafı;`)
.setImage(msg.guild.iconURL())
.setColor('#D2EE07')
        return yukleniyor.edit('', sunucu);

}; 

module.exports.conf = {
aliases: ['sunucupp'],
permLevel: 0, 
kategori: 'Sunucu'
};

module.exports.help = {
    name: 'sunucupp',
    description: 'Sunucunun ppsini gönderir.',
    usage: 'sunucupp'
};