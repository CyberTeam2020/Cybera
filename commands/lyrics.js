
const Geniuse = require("genius-lyrics");
const Genius = new Geniuse.Client("J1VsoGRyreblfJkttigeyKoK0x05rvw4bi9vI46kfDXHoLtUQk1-17rdFgy5Ni3q");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "lyrics", 
  description: "Get lyrics of Song",
  async execute (client, message, args) {
    
     const { channel } = message.member.voice;
    if (!channel) {

      return message.channel.send("Lütfen Ses Kanalına Katılın.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Maalesef Oynatılan Şarkı Bulunamadı.");
    }
    
  let m = await message.channel.send("Şarkı Sözleri Aranıyor.Lütfen Bekleyin.")  
    
    

  Genius.tracks.search(serverQueue.songs[0].title)
.then(results => {
    const song = results[0];
    song.lyrics()
    .then(lyrics => {
      if (lyrics.length > 9999) {
        return message.channel.send("Maalesef Şarkı Sözleri Bulunamadı.")
      }
      
      if (lyrics.length < 9999) {
        const lyricsEmbed = new MessageEmbed()
          .setColor("#ff2050")
          .setDescription(lyrics.trim());
        return m.edit('', lyricsEmbed);
      }
  m.delete()
      
    })
}).catch(err => message.channel.send("Maalesef Şarkı Sözleri Bulunamadı."));
    
    
  }
}
