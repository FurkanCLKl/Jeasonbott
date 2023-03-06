const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Jeason v12 sürümüyle sizlerle")
.setTitle(" ➤Jeason Moderasyon komutları" )
 .setTimestamp()
.setDescription(" **+ping** : Botun pingini gösterir \n  **+forceban** \n  **+ban** \n **+unban** \n **+id** \n **+küfür** \n **+is** \n **+sa-as** \n **+kick** \n **+sunucubilgi** \n **+sil** \n **+profil** \n **+token** \n **+yetkilerim** \n **+link** \n  **+üyedurum**\n **+afk** \n **+davet** ")
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
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}