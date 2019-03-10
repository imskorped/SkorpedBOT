const Discord = require("discord.js");

module.exports.run = (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if(message.author.id !== "490323052928696340" | "537271116255723520")  return message.reply("Sem permissão");
    const comousar = new Discord.RichEmbed()
       .setAuthor("EclipseBOT", client.user.avatarURL)
       .setTitle("!removercargo")
       .setDescription(`Ira remover o cargo do usuário mencionado.`)
       .setColor("#60d1f6")
       .setFooter("EclipseBOT • @ImSkorped")
   let member = message.mentions.members.first();
   if(!member)
    return message.channel.send(comousar).then(msg => msg.delete(10000));
   let rolename = args.slice(1).join(' ');
   if(!rolename)
    return message.channel.send("por favor, digite o cargo para remover! (**OBS:** Digite sem o @ e se tiver emojis, digite com emojis! :)").then(msg => msg.delete(10000));
   
    if (!message.guild.roles.find("name", rolename)) {
      
        const norole = new Discord.RichEmbed()
           .setColor("ff0000")
           .setAuthor('Deu um erro', client.user.avatarURL)
           
           .setDescription(`O cargo **${rolename}** não existe (**OBS:** Coloque o nome do cargo certo, emojis, minúsculo e maiúsculo nos lugares certos **E SEM @**.)`)
        
        
           .setTimestamp()
           .setFooter("EclipseBOT • @ImSkorped", message.author.avatarURL)
        
        message.channel.send(message.author, norole)
        return;
        
       } else {
          let role = message.guild.roles.find("name", rolename);
          member.removeRole(role)
          message.reply("O cargo `" +rolename+"`"+` foi removido de ${member}!`).then(msg => msg.delete(5000));
        
    }
    let role = message.guild.roles.find("name", rolename);
    const changelog = new Discord.RichEmbed()
      .setTitle("$korpedBOT")
      .setDescription(member+ " agora possui o cargo " +role+"!")
      .setColor(role.color)
      .setFooter("EclipseBOT • @ImSkorped")
    message.channel.send(changelog) 
  
}