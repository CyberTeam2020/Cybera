module.exports = {
  name: "skip",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
  
      return message.channel.send("Lütfen Ses Kanalına Katılın.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Maalesef Geçilecek Şarkı Bulunamadı.");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ | Şarkı geçildi.");
  }
};
