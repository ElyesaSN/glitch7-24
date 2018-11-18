const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
       file:"http://ofpof.com/content/gc15cscmfl/gallery/demek-ki-etkisi-boleymis_780x465-n366jvvx6m.gif",
           color: 0xD97634,
       description: "**Al Sanaa**"
             }});
 };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yumrukat'],
  permLevel: 0
};
exports.help = {
  name: 'yumrukat',
  description: 'yumruk atar.',
  usage: 'yumrukat'
};

description: "**Al Sanaa**"