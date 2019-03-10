const Discord = require('discord.js')
exports.run = (client, message, args) => {   
if(message.author.id !== "490323052928696340") return
  const sayGame = args.join(" ");
    message.delete().catch(O_o=>{});


    let trans = args.slice(0).join(' ');
    if(!trans)
      return message.reply("Defina o status");
  
      client.user.setPresence({ game: { name: `${sayGame}`, type: 1} });

}
