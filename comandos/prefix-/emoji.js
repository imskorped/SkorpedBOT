const Discord = require("discord.js")
const prefix = "!"
const moment = require("moment")
moment.locale("pt-BR")

module.exports.run = async (client, message, args) => {
    if (message.content.startsWith(`${prefix}emoji`)) {
        let emoji = message.guild.emojis.find(emoji => emoji.name === `${args.join(" ")}`)
        let animado;
            if (emoji.animated === true) animado = "Sim"
            if (emoji.animated === false) animado = "Não"
        let gerenciadotwitch;
            if (emoji.managed === true) gerenciadotwitch = "Sim"
            if (emoji.managed === false) gerenciadotwitch = "Não"
        const embed = new Discord.RichEmbed()
        .setAuthor(`Informações do emoji ${emoji.name}`)
        .setColor("#FF0000")
        .setThumbnail(emoji.url)
        .addField("Do servidor 📦", emoji.guild.name, true)
        .addField("Animado 🖼", animado, true)
        .addField("Criado em 🗓", moment(emoji.createdAt).format("LLLL"))
        .addField("ID do emoji 🏷", emoji.id, true)
        .addField("Gerenciado pela Twitch 📺", gerenciadotwitch, true)
        .setFooter("EclipseBOT • Informaçoõs de emoji", client.user.displayAvatarURL)
        message.channel.send(embed)
    }
}
