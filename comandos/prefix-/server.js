const Discord = require('discord.js');
exports.run = (client, message, args) => {
	
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('Digite o IP do servidor');

const embed = new Discord.RichEmbed()
  
  .setAuthor(`Estado do servidor: ${args[0]}`, 'https://cdn.discordapp.com/attachments/484485121207042064/493240747433132044/Z.png')
  .setImage(`https://use.gameapis.net/mc/query/banner/${args[0]}/caps`)
  .setThumbnail(`https://use.gameapis.net/mc/query/icon/${args[0]}`)
  .setDescription(`IP do servidor: 🔗 *${args[0]}*`, true)
  .setFooter("EclipseBOT • Minecraft servers", client.user.displayAvatarURL)
message.channel.send(embed)

}
