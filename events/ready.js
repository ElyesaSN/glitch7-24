const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı Üstadım.');

    var Games = [

        "|??yardım|??help|",
    
        "🔥??yapımcı Aktif🔥",
        
        "🔥??balıktut Aktif🔥",
        
        "🔥??sürüm Aktif🔥",
        
        "🔥??stresçarkı Aktif🔥",
        
        "🔥??aşkölçer Aktif🔥",
      
        "🔥??add|şarkı adı|??play|🔥",
        
        `${client.users.size} Kullanıcıya Hizmet Ediyoruz`,
        
        `${client.guilds.size} Sunucuya Hizmet Ediyoruz`,
        
        `Rıca Etsem Beni Eklermisin ??davet`,



        `🔥Yapımcım lEdiaTR#8402`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

      client.user.setGame(Games[random], "https://www.twitch.tv/alfa");
        }, 2 * 2500);

}; 
