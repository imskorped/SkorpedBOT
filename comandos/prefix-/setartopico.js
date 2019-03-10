module.exports.run = async(client,message,args) => {
let topico = args.join(" ")
let canal = message.mentions.channels.first() || message.channel
canal.setTopic(topico).then(() => {
    message.channel.send({
        embed: {
            title: "Novo topico de canal definido",
            description: `O topico do canal: ${canal.name} foi definido para: ${topico}`
        }
    })
})
}