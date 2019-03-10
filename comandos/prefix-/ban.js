const Discord = require('discord.js')
exports.run = (client, message, args) => {   
  if (!message.member.hasPermission("BAN_MEMBERS"))
  return message.reply("você não tem permissão para banir membros");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Uso correto: !ban (@user) (motivo)");
if(!member.bannable) 
  return message.reply("Não tenho permissão para isso");

let reason = args.slice(1).join(' ');
if(!reason)
  return message.reply("Por favor, indique um motivo para o banimento");
  
  if(member.highestRole > message.author.highestRole) 
   return message.reply('Essa pessoa tem um cargo maior que o seu')
  

member.ban(reason)
  .catch(error => message.reply(`Sorry ${message.author} não posso banir, Error: ${error}`));
  message.delete().catch(O_o=>{}); 

  const logs = message.guild.channels.find('name', '📝logs');
  if(!logs) return;
  const embed = new Discord.RichEmbed()

     .setDescription(`**${message.mentions.users.first()} foi banido**!\n\n🔖 **Informações:**\n👤 **ID:** ${message.mentions.users.first()}\n💬 **Motivo:** ${reason}\n\n**👮 Autor:** ${message.author}\n`)
     .setColor(message.guild.member(client.user).displayHexColor)
     .setThumbnail(message.mentions.users.first().displayAvatarURL)
     .setFooter("🔔 EclipseBOT • Sistema de logs")
     .setTimestamp()

   logs.send(embed);

}
