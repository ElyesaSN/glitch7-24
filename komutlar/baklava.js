const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
       file:"https://78.media.tumblr.com/f75f681cf0419a1dfc17bb12053b8779/tumblr_mka9zj3lGU1rkm4z3o1_500.gif",
           color: 0xD97634,
       description: "**Sana Nahh Baklavaa**"
             }});
 };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['baklava'],
  permLevel: 0
};
exports.help = {
  name: 'baklavagönder',
  description: 'baklavagönderir.',
  usage: 'baklavagönder'
};

description: "**Sana Nahh Baklavaa**"