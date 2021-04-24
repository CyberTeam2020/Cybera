//Main Yoktur Komutlara atılacaktır
const Discord = require('discord.js');
const ayarlar = require('../config.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const codemarefi= new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`MC-AT`, client.user.avatarURL) 
      .setDescription('**[Website](https://)**')
.setThumbnail(client.user.avatarURL)
      .addField('** !komut (14)**', '`davet`, `istatistik`, `sor`, `afk`, `avatar`, `emojiler`, `roller`, `jumbo`, `kullanıcı-bilgi`, `ping`, `rol-bilgi`, `sunucu`, `sunucuresmi`')
      .addField('** !komut (13)**', '`küfür`, `modlog`, `otorol`, `otoselam`, `reklam`, `sayaç`, `sil-üye`, `sil`, `vkanal`, `yasakla`, `yaz`')
      .addField('** !komut (4)**', '`dmduyur`, `yaps`, `evals`, `yenile`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(codemarefi).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'MC-AT Yardım Menüsü',
      description: 'yardım',
};