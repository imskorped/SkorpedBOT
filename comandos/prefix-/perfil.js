const Discord = require("discord.js")
var database = require("../../database.js")
exports.run = (client, message, args) => { 
const moment = require('moment');
moment.locale('pt-BR')
let member = message.mentions.users.first()

const err = new Discord.RichEmbed()
.setAuthor("Erro de digitação!")
.addField("Você não executou o comando corretamente", "Use: !perfil (Usuario)")
.setThumbnail(client.user.displayAvatarURL)
.setFooter("EclipseBOT • Informações de usuario", client.user.displayAvatarURL)
if(!member)
return message.reply(err);
    
let cargos = message.mentions.members.first().roles.map(a => a).join(", ").replace('@everyone, ', "")

database.Members.findOne({
    "_id": member.id
}, function(erro, documento) {

    if (documento) {

var unbug = 350 * documento.level + 1

const embed = new Discord.RichEmbed()

.setColor("RANDOM")
.addField("👤 Usúario", `${member.tag}`, true)
.addField("🏷 ID do usuario",`${member.id}`, true)
.addField("📊 Status", member.presence.status.replace('dnd', "Ocupado").replace('Idle', "Ausente"), true)
.addField("🕹 Jogando", `${member.presence.game}`.replace('null', "Não esta em jogo"), true)
.addField("🔖 Apelido", `${message.guild.members.get(member.id).displayName}`, true)
.addField("🔰 Nível", `${documento.level}`, true)
.addField("💎 XP", `${documento.xp}`, true)
.addField("💸 Dinheiro", `${documento.coins}`, true)
.addField("❣️ Reputação", `${documento.rep}`, true)
.addField("⚠️ Advertências", `${documento.warn}`, true)
.addField("📃 Cargos", cargos)
.addField("📜 Conta criada em", moment(member.createdAt).format('LLLL'))
.addField("📖 Sobre", "```" + `${documento.sobre}` + "```")
.setThumbnail(member.displayAvatarURL)
.setFooter("EclipseBOT • Informações de usuario", message.mentions.users.first().displayAvatarURL)
message.channel.send(embed)

        } else {
          var pessoa = new database.Members({
              _id: member.id,
              level: 0,
              xp: 0,
              coin: 0,
              rep: 0
          })

            pessoa.save()
        }

    })
}
