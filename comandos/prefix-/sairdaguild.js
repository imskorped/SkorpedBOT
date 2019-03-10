exports.run = (client, message, args) => {
    var criador = message.author.id == '490323052928696340'
    if(!criador) 
            return message.reply("apenas meu criador pode executar esse comando");

            message.guild.leave()

    }