exports.run = (client, message, args) => {   
  if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("você não tem a permissão 'GERENCIAR MENSAGENS' para executar esse comando");
  
    const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
    }