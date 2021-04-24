module.exports = {
  name: "loop",
  description: "LOOP THE QUEUE",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
  
      return message.channel.send("Lütfen Ses Kanalına Katılın.")
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Maalesel Döngülenecek Şarkı Bulunamadı.");
    }
    

    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`Döngü Sistemi Şuanda **${serverQueue.loop ? "Aktif" : "Deaktif"}**`)
    
    
    
    
  }
}
