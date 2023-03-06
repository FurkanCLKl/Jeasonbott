const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `+botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.**"
    )
    .addField(
      `:boom:➤ Komutlar`,
      `
 
:white_small_square: | **+eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **+moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **+logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız


`)



    .addField(
      ` :boom: Bilgilendirme`,
      `
:white_small_square: | **Jeason Bot Her Gün Güncelleniyor!**.`
    )
  
  .addField(
      `**:boom:➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/zP8zb5G2Nv) \n   `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};