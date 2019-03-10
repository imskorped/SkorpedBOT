const Discord = require("discord.js");

module.exports.run = (client, message, args) =>{

   message.delete().catch(O_o=>{});
if (!message.member.hasPermission("ADMINISTRATOR"))   
   return message.reply("Sem permissão");
    const comousar = new Discord.RichEmbed()
       .setAuthor("EclipseBOT", client.user.avatarURL)
       .setTitle("!setar")
       .setDescription(`Adiciona o usuario no cargo mencionado`)
       .setColor("#60d1f6")
       .setFooter("EclipseBOT")
   let member = message.mentions.members.first();
   if(!member)
    return message.channel.send(comousar).then(msg => msg.delete(10000));
   let rolename = args.slice(1).join(' ');
   if(!rolename)
    return message.channel.send("por favor, digite o cargo para adicionar!").then(msg => msg.delete(10000));
   
    if (!message.guild.roles.find("name", rolename)) {
      
        const norole = new Discord.RichEmbed()
           .setColor("ff0000")
           .setAuthor('Ocorreu um erro', client.user.avatarURL)
           .setDescription(`${message.author}, o cargo **${rolename}** não existe`)
           .setTimestamp()
           .setFooter("ERRO", message.author.avatarURL)
        
        message.channel.send(norole)
        return;
        
       } else {
          let role = message.guild.roles.find("name", rolename);
          member.addRole(role)
          message.reply(`cargo `+ "`" +rolename + "`" + ` setado com sucesso em ${member}! :white_check_mark:`).then(msg => msg.delete(5000));
        
    }
   let role = message.guild.roles.find("name", rolename);
      const changelog = new Discord.RichEmbed()
        .setTitle("$korpedBOT")
        .setDescription(member+ " agora possui o cargo " +role+"!")
        .setColor(role.color)
        .setFooter("EclipseBOT • @ImSkorped")
      message.channel.send(changelog) 
   
}
