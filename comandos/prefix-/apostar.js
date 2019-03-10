var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    var coldown = new Set()
    var porcentagem = Math.round(Math.random() * 100)

    database.Members.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {


            if (!razaou.length < 1) {
                
                if (!razaod.length < 1) {

                    if (coldown.has(message.author.id)) return message.reply("Aguarde...");

                    if (message.content.startsWith("!apostar x2")) {

                        if (parseInt(args[1]) > 0) {

                            if (parseInt(args[1]) < 150001) {

                            if (args[1] < documento.coins) {

                                if(porcentagem < 70){

                                    documento.coins -= parseInt(args[1])
                                    documento.save();
                                    message.reply("Você perdeu a aposta.");
                                    coldown.add(message.author.id)
                                    setTimeout(function() {
                                        coldown.delete(message.author.id)
                                    }, 15 * 1000)

                                } else {

                                    documento.coins += parseInt(args[1]) * 2
                                    documento.save();
                                    message.reply(`Você ganhou ${(parseInt(args[1]) * 2)} coins`);
                                    coldown.add(message.author.id)
                                    setTimeout(function() {
                                        coldown.delete(message.author.id)
                                    }, 15 * 1000)

                                }

                            } else {
                                message.reply("Você não possui essa quantia");
                            }

                        } else {
                            message.reply("Não pode ser um valor acima de 150.000 coins");
                        }

                        } else {
                            message.reply("Não pode ser menor que 0.");
                        }

                    }

                    if (message.content.startsWith("!apostar x3")) {

                        if (parseInt(args[1]) > 0) {

                            if (parseInt(args[1]) < 150001) {

                            if (args[1] < documento.coins) {

                                if(porcentagem < 80){

                                    documento.coins -= parseInt(args[1])
                                    documento.save();
                                    message.reply("Você perdeu a aposta.");
                                    coldown.add(message.author.id)
                                    setTimeout(function() {
                                        coldown.delete(message.author.id)
                                    }, 15 * 1000)

                                } else {

                                    documento.coins += parseInt(args[1]) * 3
                                    documento.save();
                                    message.reply(`Você ganhou ${(parseInt(args[1]) * 3)} coins`);
                                    coldown.add(message.author.id)
                                    setTimeout(function() {
                                        coldown.delete(message.author.id)
                                    }, 15 * 1000)

                                }

                            } else {
                                message.reply("Você não possui essa quantia");
                            }

                        } else {
                            message.reply("Não pode ser um valor acima de 150.000 coins");
                        }

                        } else {
                            message.reply("Não pode ser menor que 0.");
                        }

                    }

                    if (message.content.startsWith("!apostar x4")) {

                        if (parseInt(args[1]) > 0) {

                            if (parseInt(args[1]) < 150001) {

                            if (args[1] < documento.coins) {

                                if(porcentagem < 90){

                                    documento.coins -= parseInt(args[1])
                                    documento.save();
                                    message.reply("Você perdeu a aposta.");
                                    coldown.add(message.author.id)
                                    setTimeout(function() {
                                        coldown.delete(message.author.id)
                                    }, 15 * 1000)

                                } else {

                                    documento.coins += parseInt(args[1]) * 4
                                    documento.save();
                                    message.reply(`Você ganhou ${(parseInt(args[1]) * 4)} coins`);
                                    coldown.add(message.author.id)
                                    setTimeout(function() {
                                        coldown.delete(message.author.id)
                                    }, 15 * 1000)

                                }

                            } else {
                                message.reply("Você não possui essa quantia");
                            }

                        } else {
                            message.reply("Não pode ser um valor acima de 150.000 coins");
                        }

                        } else {
                            message.reply("Não pode ser menor que 0.");
                        }

                    }

                } else {
                    message.reply("Diga quanto quer apostar.");
                }

            } else {
                message.channel.sendMessage({
                    "embed": {
                      "description": "Use !apostar (x2 | x3 | x4) (quantia).",
                      "color": 55512
                    }
                  });
            }


        } else {


            var pessoa = new database.Members({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                rep: 0
            })

            pessoa.save()

        }

    })

}
