var database = require("../../database.js")
var dayCol = new Set()
var dayRDM = Math.round(Math.random() * 27000)

exports.run = (client, message, args) => {

    if (dayCol.has(message.author.id)) return message.reply("Você ja coletou seus coins diário.");

    database.Members.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {

            documento.coins += dayRDM
            documento.save()
            message.reply(`Você ganhou ${dayRDM} coins hoje.`);
            dayCol.add(message.author.id)
            setTimeout(function() {
                dayCol.delete(message.author.id)
            }, 6 * 1000 * 60 *60)

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
