const Discord = require('discord.js')
exports.run = (client, message, args) => {   
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.reply("Desculpe, apenas a staff podem usar esse comando");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Uso correto: !mute (@user) (motivo)");

let reason = args.slice(1).join(' ');
if(!reason)
  return message.reply("Por favor, indique um motivo para o mute");

 if(member.highestRole > message.author.highestRole) 
   return message.reply('Essa pessoa tem um cargo maior que o seu')

  member.guild.members.get(member.id).addRole(member.guild.roles.find("name", "Mutado").id);
  message.delete().catch(O_o=>{});

  const logs = message.guild.channels.find('name', '📝logs');
  if(!logs) return;
  const embed = new Discord.RichEmbed()

     .setDescription(`**${message.mentions.users.first()} foi mutado**!\n\n🔖 **Informações:**\n👤 **ID:** ${message.mentions.users.first()}\n💬 **Motivo:** ${reason}\n\n**👮 Autor:** ${message.author}\n`)
     .setColor(message.guild.member(client.user).displayHexColor)
     .setThumbnail(message.mentions.users.first().displayAvatarURL)
     .setFooter("🔔 EclipseBOT • Sistema de logs")
     .setTimestamp()

   logs.send(embed);

}
