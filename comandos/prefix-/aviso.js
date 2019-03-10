const Discord = require('discord.js')
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("SEND_TTS_MESSAGES"))
  return message.reply("você precisa da permissão 'Enviar mensagens TTS' para executar o comando");

const sayAviso = args.join(" ");
let aviso = args.slice(0).join(' ');
if(!aviso)
return message.reply("Por favor, me diga qual aviso irei dar.");
message.delete().catch(O_o=>{}); 

const embed = new Discord.RichEmbed()

.setColor("RANDOM")
.setAuthor("Novo anúncio!" , client.user.displayAvatarURL)
.setDescription(`${sayAviso}`)
.setFooter("EclipseBOT • Avisos", client.user.displayAvatarURL)

message.channel.send("@everyone", embed);

}
