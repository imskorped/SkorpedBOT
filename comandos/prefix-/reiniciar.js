exports.run = (client, message, args, config) => {

    if(message.author.id !== "490323052928696340")  return message.reply("Sem permissão");
   resetBot(message.channel)
        async function resetBot(channel) {
            channel.send(`Reiniciando...`)
            .then(msg => client.destroy(true))
            .then(() => client.login(config.token));
         }

    client.on('ready', () => {
        message.channel.send(`Bot reiniciado com sucesso!`);
    });
}