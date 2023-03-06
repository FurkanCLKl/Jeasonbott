const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Jeason v12 sürümüyle sizlerle")
.setTitle(" ➤Jeason logo menüsü komutları" )
 .setTimestamp()
.setDescription(" **+altın** \n **+anime** \n **+arrow** \n **+banner**   \n **+green** \n  **+habbo** \n **+kalın** \n  **+neonmavi** \ ")
.setImage("https://cdn.discordapp.com/attachments/790999702765961258/791798016583008297/wp2490739.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logomenü',
  category: 'logomenü',
  description: 'Yardım Menüsü.',
   usage:'logomenü'
}