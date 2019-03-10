const Discord = require('discord.js')
exports.run = (client, message, args) => {   
  if(message.author.id !== "490323052928696340") return
  const sayStatus = args.join(" ");
    message.delete().catch(O_o=>{});


  const embed = new Discord.RichEmbed()

  .setAuthor("Como utilizar o !status", client.user.avatarURL)
  .addField("Argumentos disponiveis", "Online, dnd, idle e invisible.")
  .setFooter("EclipseBOT • Comando privado", client.user.avatarURL)


    let stats = args.slice(0).join(' ');
    if(!stats)
      return message.channel.send(embed);
  
      client.user.setStatus(`${stats}`);

}
