const Discord = require('discord.js')
exports.run = (client, message, args) => { 
const tempo = require('weather-js');

tempo.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
    if (err) return message.channel.send(err);

    if (result.length === 0) {
        message.channel.send('Selecione uma cidade para pesquisar o tempo!' )
        return;
    }
        var Tempo = result[0].current; 
        var Local = result[0].location;

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`⛅️ Tempo de ${Tempo.observationpoint}`)
        .setThumbnail(Tempo.imageUrl)
        .addField('⏱ Fuso horário', `${Local.timezone} UTC`, true)
        .addField('📋 Tipo de grau', Local.degreetype, true)
        .addField('🌡 Temperatura', `${Tempo.temperature} graus`, true)
        .addField('🌡 Em torno dos', `${Tempo.feelslike} graus`, true)
        .addField('💨 Ventos', Tempo.winddisplay, true)
        .addField('💦 Umidade do Ar', `${Tempo.humidity}%`, true)
        .setFooter("EclipseBOT • Tempo e clima", client.user.displayAvatarURL)
    message.channel.send(embed);
})
}
