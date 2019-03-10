exports.run = (client, message, args) => {   

  if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("você não tem a permissão 'GERENCIAR MENSAGENS' para executar esse comando");
  
  let votação = args.slice(0).join(' ');
  if(!votação)
    return message.reply("Por favor, me diga qual a votação que irei abrir.");

const saySelf = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Votação!",
        icon_url: client.user.avatarURL
      },
      url: "",
      description: `${saySelf}`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "EclipseBOT • @ImSkorped"
      }
    }
  }).then(function (message) {
    setTimeout(function() {
      message.react("✅")
        }, 500)
    setTimeout(function() {
      message.react("❎")
        }, 1000)
  }).catch(function() {
  })
}
