module.exports = {
  name: "resume", 
  description: "Resume the paused Song",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
   
      return message.channel.send("Lütfen Ses Kanalına Katılın.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('Maalesef Oynatılan Şarkı Bulunamadı')
    if(serverQueue.playing) return message.channel.send(`Duran bir şarkı yok.`)
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("Durdurulan Şarkı Sürdürülüyor.") 
 }
    
    message.channel.send("Maalesef Durdurulan Şarkı Bulunamadı.")
    
  }
}
