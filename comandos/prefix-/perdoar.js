var database = require("../../database.js")
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply("você não tem permissão para tirar as adivertências de membros");



    let user = message.mentions.users.first();
      { //if (message.mentions.users.first() == message.author) return message.reply("Você não pode dar uma adivertência para você mesmo!");
        if (message.mentions.users.first().bot) return message.reply("Você não pode tirar adivertências de um bot!");

        database.Members.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Members.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                        doc2.warn = 0
                        doc2.save();
                        message.reply(`Você perdoou todas as advertências de ${message.mentions.users.first().tag}`);
                       
                        message.mentions.users.first().send(`Você foi perdoado de todas suas advertências por: ${message.author}.`)

                        const logs = message.guild.channels.find('name', '📝logs');
                        if(!logs) return;
                    const embedlogs = new Discord.RichEmbed()
                .setDescription(`**${message.mentions.users.first()} foi perdoado de suas advertências** !\n\n🔖 **Informações:**\n👤 **ID:** ${message.mentions.users.first()}\n\n**👮 Autor:** ${message.author}\n`)
                .setColor(message.guild.member(client.user).displayHexColor)
                .setThumbnail(message.author.displayAvatarURL)
                .setFooter("🔔 EclipseBOT • Sistema de logs")
                .setTimestamp()
            
            logs.send(embedlogs);

                    } else {

                        var pessoa = new database.Users({
                            _id: message.mentions.users.first().id,
                            level: 0,
                            xp: 0,
                            coins: 0,
                            conquistas: 0,
                            mensagens: 0,
                            msglevel: 0,
                            invitetru: false,
                            invitecode: "Nenhum",
                            invitou: 0,
                            warn: 0,
                            rep: 0
                        })

                        pessoa.save()

                    }

                } else {

                    var pessoa = new database.Users({
                        _id: message.author.id,
                        level: 0,
                        xp: 0,
                        coins: 0,
                        conquistas: 0,
                        mensagens: 0,
                        msglevel: 0,
                        invitetru: false,
                        invitecode: "Nenhum",
                        invitou: 0,
                        warn: 0,
                        rep: 0
                    })

                    pessoa.save()

                    

                }

            })

        })


    }

}
