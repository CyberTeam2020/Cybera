module.exports = {
  name: "np",
  description: "send the name of on going song",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      
      return message.channel.send("Lütfen Ses Kanalına Katılın.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Maalesef Oynatılan Şarkı Bulunamadı.");
    }
    
    message.channel.send(' - Şuanda Oynatılan serverQueue.songs[0].title                               Requested by <@user>  ')

    
    
    
  }
}
