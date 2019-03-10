const Discord = require('discord.js')
exports.run = (client, message, args) => {   

const embed = new Discord.RichEmbed()
          
.setAuthor("Lista de comandos 🔧", client.user.displayAvatarURL)
.addField("Comandos de moderaçao 💻", "!warn (user) (motivo)\n!perdoar (user)\n!sorteio (tempo) (premio)\n!+rep\n!-rep\n!limpar (numero)\n!remover (@user) (cargo)\n!setar (@user) (cargo)\n!dropar (drop)\n!votar (enquete)\n!aviso (aviso)\n!defesa\n!sortear\n!ban (@user) (motivo)\n!kick (@user) (motivo)\n!enviardm (Usuario) (Mensagem)\n!mute (@user) (motivo)\n!chat (on/off)\n!say (mensagem)\n!embed (mensagem)\n!fakemsg (@user) (mensagem)", true)       
.addField("Comandos de utilidades e diversão 🕹", "!ontime\n!corrida (user)\n!setsobre (descrição do perfil)\n!tapa (usuario)\n!emojis\n!rep\n!diario\n!ascii (mensagem)\n!doar (quantia)\n!server (IP do servidor)\n!sugerir (sugestão)\n!perfil (@user)\n!skin (Nick)\n!piada\n!conquista (nome da conquista)\n!divulgador\n!tempo (Cidade)\n!vidente (pergunta)\n!npminfo (nome da npm)\n!primeiraspalavras (mensagem)\n!avatar (@user)\n!info\n!comandos\n!head (Nick)\n!emoji (nome do emoji)", true)
.addField("Musicas 🎶", "!play (musica)\n!skip\n!queue\n!stop\n!volume (volume da musica)\n!pause\n!resume", true)
.addField("Comandos privados 🔧", "!jogando (status)\n!ouvindo (status)\n!assistindo (status)\n!transmitindo (status)\n!status\n!eval (codigo)", true)
.setFooter("EclipseBOT • Comandos", client.user.displayAvatarURL)

message.channel.send(embed)
}
