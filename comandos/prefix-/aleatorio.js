exports.run = (client, message, args) => {   

const Discord = require('discord.js');
  
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.reply("você não tem a permissão 'GERENCIAR MENSAGENS' para poder usar esse comando");
  
let mem = message.guild.members.random().user



const embed = new Discord.RichEmbed()

.setAuthor("Sorteio de nomes", client.user.displayAvatarURL)
.addField("Membro sorteado", `<@${mem.id}>`, true)
.addField("ID do membro", mem.id, true)
.setFooter("EclipseBOT • Sorteios", client.user.displayAvatarURL)

message.channel.send(embed)
}
