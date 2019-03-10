const database = require('../../database');
let maximodeletras = 100
module.exports.run = async(client,message,args) => {
    if(!args.join(" ")) return message.channel.send(":x: Escreva seu sobre!")
    if(args.join(" ").length < maximodeletras){
    database.Members.findOne({_id: message.author.id}, function(err, doc) {
        doc.sobre = args.join(" ")
        doc.save()
        })
        message.channel.send(`Seu sobre foi alterado para \`${args.join(" ")}\``)
    }else{
        message.channel.send(":x: Você ultrapassou o limite de letras (100) permitidas!")
    }
}
module.exports.help={
    name:"setsobremim"
}