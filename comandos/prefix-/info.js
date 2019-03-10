exports.run = (client, message, args) => {   

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
     
    .setAuthor("Informações", client.user.avatarURL)
    .setColor("RANDOM")
    .addField("Prefixo ❗️", "Meu prefixo é `!`, use !comandos", true) 
    .addField("Linguagem ☕️", "JavaScript, biblioteca `Discord.js`", true) 
    .addField("Desenvolvedor 👑", "<@490323052928696340>", true) 
    .addField("Data exata de criação do bot 🙌", "Fui criado dia 15/09/2018", true) 
    .addField("Quantidade total canais 📋", `${client.channels.size}`, true)
    .addField("Quantidade total membros 👤", `${client.users.size}`, true)
    .addField("Quantidade de guilds 📃",`${client.guilds.size}`, true)
    .addField("Processador ⚙️", "Intel Core i3", true)
    .addField("Sistema operacional 💻", "Windows 10)", true)
    .addField("Memoria RAM 🔧", "4gb", true)
    .setFooter("EclipseBOT • Informações", client.user.avatarURL)
 message.channel.send(embed)
        
    
}
