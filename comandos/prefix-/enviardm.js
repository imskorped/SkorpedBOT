const Discord = require("discord.js")
exports.run = (client, message, args) => { 
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.reply("você não tem a permissão 'GERENCIAR MENSAGENS' para executar esse comando");

let member = message.mentions.users.first()

const err = new Discord.RichEmbed()
.setAuthor("Erro de digitação!")
.addField("Você não executou o comando corretamente", "Use: !enviardm (Usuario) (Mensagem)")
.setThumbnail(client.user.displayAvatarURL)
.setFooter("EclipseBOT • Mensagens diretas", client.user.displayAvatarURL)
if(!member)
return message.reply(err)


const sayDm = args.join(" ");
message.delete().catch(O_o=>{}); 
member.send(`${sayDm}`)

}
