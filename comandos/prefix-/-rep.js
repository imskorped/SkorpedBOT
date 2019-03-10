var database = require("../../database.js")

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Você não pode usar esse comando!");



    let user = message.mentions.users.first();
      { if (message.mentions.users.first() == message.author) return message.reply("Você não pode dar reputação negativa para você mesmo!");
        if (message.mentions.users.first().bot) return message.reply("Você não pode dar reputação negativa para um bot!");

        database.Members.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Members.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                        doc2.rep -= 1
                        doc2.save();
                        message.reply(`Você tirou um ponto de reputação para ${message.mentions.users.first().tag}`);
                        

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
