const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle` **komutu sadece sunucularda kullan�labilir.**');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('**Ka� mesaj silmem gerekti�ini belirtmedin.**')
  if (mesajsayisi > 100) return message.channel.send('**__100__** **adetden fazla mesaj silemem!**');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('**__' + mesajsayisi + '__** **adet mesaj sildim!** ')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesaj� siler.',
  usage: 'temizle <temizlenecek mesaj say�s�>'
};