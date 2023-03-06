const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .addField("**<:tik:1062025055795687596>__Ping__**",`Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n  Bot Gecikmesi: ${client.ws.ping}ms`, true)
    .addField("**__Kullanıcı Sayısı__** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField("**__Sunucu Sayısı__**", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("**<:EgeAvciCringe:1077847524708204595>__Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)
    .addField("**🚪__Aktiflik__**", `${payidarzaman}`, true)
    .addField("**🍷__Node.JS Versiyon__**", `${process.version}`, true)
    .addField("**<:elitkalkan2:1075708120258580480>__Ram Kullanımı__**", `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
    .addField("**<:1_:1062023619355607131>__Konum__**", `Turkey :flag_tr:`, true)

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['is'],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "botbilgi",
  usage: "botbilgi"
};