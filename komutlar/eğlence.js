const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Jeason v12 sürümüyle sizlerle")
.setTitle(" ➤Jeason Eğlence komutları" )
 .setTimestamp()
.setDescription(" **+tersyazı** = Bir Yazıyı Bot Ters Yazar. < \n  **+mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **+fbi** = Bot FBi Gif Atar. \n **+token** = Tokenimi Öğrenmek İstemezmisin?  \n  **+düello** = Düello Atarsın.  \n  **+wasted** = Polis tarafından yakalanırsın.  \n  **+atatürk** = Dene ve gör... (1881-1938) \n **+ara155** = Polisi Arar \n **+zar-at** = zar atar \n **+yazı-tura** = yazı yada tura atar hangisi tutarsan kazanırsın \n **+1v1** = Arkadaşınla 1v1 at\ n **+mcskin** = ismini yazdığınız skini gösterir")
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
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}