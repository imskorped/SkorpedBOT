module.exports.run = (client, message, args) => {

    const Discord = require('discord.js');
    
        const moment = require("moment")
        moment.locale("pt-BR")
        let online = message.guild.members.filter(a => a.presence.status == "online").size;
        let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
        let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
        let bot = message.guild.members.filter(a => a.user.bot).size;
        let totalmembros = message.guild.memberCount;
        let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
        let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
        let cargos = message.guild.roles.map(a => a).join(", ")
            const embed = new Discord.RichEmbed()
            .setTitle(`:bookmark: **${message.guild.name}**`, message.guild.iconURL)
            .setColor("#0051FF")
            .setThumbnail(message.guild.iconURL)
            .addField(':crown:Dono:', `<@${message.guild.owner.id}>`, true)
            .addField("▫ID:", message.guild.id, true) 
            .addField(`:speech_balloon:Canais [${canaistexto+canaisvoz}]`, `:pencil:**Texto:** ${canaistexto}\n :speaking_head:**Voz:** ${canaisvoz}`)
            .addField(':date:Criado em:', moment(message.guild.createdAt).format('LLLL'))
            .addField(`:busts_in_silhouette:Membros [${totalmembros}]`, `<:online:553374671869968384>**Online:** ${online} | <:idle:553374671433629736>**Ausente:** ${ausente} | <:dnd:553374671060336671>**Ocupado:** ${ocupado} | <:off:553374671362457611>**Offline:** ${offline}\n:smile:**Pessoas**: ${totalmembros - bot}\n:robot:**Bots:** ${bot}` )
            .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
            message.channel.send(embed)
}

module.exports.help = {
    name: "serverinfo"
}