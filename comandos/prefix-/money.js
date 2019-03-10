var database = require("../../database.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) {

        database.Members.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            if (documento) {

                message.reply("Você possui " + documento.coins + " coins.");

            } else {


                var pessoa = new database.Members({
                    _id: message.author.id,
                    level: 0,
                    xp: 0,
                    coins: 0
                })

                pessoa.save()

            }

        })

    } else {

        database.Members.findOne({
            "_id": message.mentions.users.first().id
        }, function(erro, documento) {

            if (documento) {

                message.reply("O usuario mencionado tem " + documento.coins + " coins.");

            } else {

                var pessoa = new database.Members({
                    _id: message.mentions.users.first().id,
                    level: 0,
                    xp: 0,
                    coins: 0
                })

                pessoa.save()

            }

        })
    }
}
