exports.run = (client, message, args) => {   

    const Discord = require('discord.js');
    let member = message.mentions.users.first();
if(!member){
message.reply("mencione alguem para dar um tapa!")
return;
}
    const embed = new Discord.RichEmbed()
     
    .setAuthor("Violência!", client.user.avatarURL)
    .setColor("RANDOM")
    .setDescription(`${message.author} deu um tapa na cara de ${member}`)
    .setImage("https://media.discordapp.net/attachments/484485121207042064/494510338234908682/Agwwaj6.gif")
    .setFooter("EclipseBOT • Violencia", client.user.avatarURL)
 message.channel.send(embed)
        
    
}
