var database = require("../../database.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    let razaod = args.slice(1).join(' ');

    database.Members.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {

            if (message.mentions.users.size < 1) return message.reply("Mencione para quem você irá doar o dinheiro");
            if (message.mentions.users.first().id == message.author.id) return message.reply("Você não pode doar a si mesmo!");
            if (!razaod.length < 1) {
                if (parseInt(args[1]) > 0) {
                if (args[1] < documento.coins) {

                    database.Members.findOne({
                        "_id": message.mentions.users.first().id
                    }, function(errou, docs) {

                        if (docs) {

                            docs.coins += parseInt(args[1])
                            docs.save();
                            documento.coins -= parseInt(args[1])
                            documento.save();
                            message.reply("**Doado com sucesso!**");

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

                } else {
                    message.reply("Você não tem todo esse dinheiro")
                }
            } else {
                message.reply("Você não pode doar 0");
            }
            } else {
                message.reply("Diga a quantia que você vai doar!");
            }

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

}
