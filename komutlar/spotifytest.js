const Discord = require("discord.js");
exports.run = async (client, message, args)=> {
const user = message.mentions.members.first() || await client.users.fetch(args[0]) || message.member;
if(!user) return message.channel.send("Birini Etiketle Veya ID'sini Gir!");
let spotify = user.presence.activities.filter(x => x.name == 'Spotify' && x.type == 'LISTENING')[0];
if(!spotify) return message.channel.send("Spotify Açık Değil!");
       let resim = `https://i.scdn.co/image/${spotify.assets.largeImage.slice(8)}`;
       let url =`https://open.spotify.com/track/${spotify.syncID}`
        let ad = spotify.details;
        let album = spotify.assets.largeText;
        let yapimci = spotify.state;

            message.channel.send("/oynat " + url);
        

};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["spotifytest"],
    permLevel: 0,
  };
  exports.help = {
    name: 'spotifytest',
    description: '',
    usage: 'spotifytest'
  }; 