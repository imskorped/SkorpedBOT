exports.run = (client, message, args) => {   

  if (!message.member.hasPermission("MANAGE_MESSAGES")) 
    return message.reply("você não tem a permissão 'GERENCIAR MENSAGENS' para usar esse comando");
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('**Diga a quantidade de mensagens que devo apagar!**');
message.channel.bulkDelete(`${args[0]}`)
  setTimeout(function() {
      message.channel.send(`**:wastebasket: ${args[0]} mensagens foram apagadas!**`).then((value) => {
          setTimeout(() => {
              value.delete();
          }, 5000);
      });
  }, 2000)
};
