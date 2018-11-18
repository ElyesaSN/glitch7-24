const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
       file:"http://1.bp.blogspot.com/-Y5uld3ZYpuw/VSxSh7c6R2I/AAAAAAAABpw/dpRsm-3F59o/s1600/9D.gif",
           color: 0xD97634,
       description: "**Bravo Sana**"
             }});
 };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['alkışla'],
  permLevel: 0
};
exports.help = {
  name: 'alkışla',
  description: 'alkışlar[tebrik eder].',
  usage: 'alkışla'
};

description: "**Bravo Sana**"