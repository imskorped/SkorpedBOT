module.exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.reply("Desculpe, apenas pessoas com a permissão 'ADMINISTRADOR' podem usar esse comando");

        try {
  let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
      
    } else if(args[0]) {
        user = client.users.get(args[0]);
    
    }
  let botmessage = args.slice(1).join(' ')
 
  if (args[0] == null) {return message.channel.send(`${message.author}, Use !fakemsg (usuario) (Mensagem)`)}
  

    if (args[1] == null) {return message.channel.send(`${message.author}, Diga qual a mensagem que devo recriar`)}
    message.channel.createWebhook(user.username, user.avatarURL).then(w => {
        w.send(botmessage);
        w.delete();
    })
    
} catch (err) {
    message.reply('**Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.**')
   }
}
