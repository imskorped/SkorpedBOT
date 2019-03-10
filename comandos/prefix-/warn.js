var database = require("../../database.js")
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply("você não tem permissão para dar adivertências a membros");



    let user = message.mentions.users.first();
      { if (message.mentions.users.first() == message.author) return message.reply("Você não pode dar uma adivertência para você mesmo!");
        if (message.mentions.users.first().bot) 
        return message.reply("Você não pode dar uma adivertência para um bot!");

        database.Members.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Members.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                        doc2.warn += 1
                        doc2.save();
                        message.reply(`Você deu uma adivertência para ${message.mentions.users.first().tag}`);
                       
                        let reason = args.slice(1).join(' ');
                        if(!reason)
                        return message.reply("Por favor, indique um motivo para a advertência");
                        message.mentions.users.first().send(`Você recebeu uma advertência por: ${reason}.`)

                        const logs = message.guild.channels.find('name', '📝logs');
                        if(!logs) return;
                    const embedlogs = new Discord.RichEmbed()
                .setDescription(`**${message.mentions.users.first()} recebeu uma advertência** !\n\n🔖 **Informações:**\n👤 **ID:** ${message.mentions.users.first()}\n💬 **Motivo:** ${reason}\n\n**👮 Autor:** ${message.author}\n`)
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
