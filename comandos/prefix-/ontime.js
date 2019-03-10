const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

exports.run = (client, message, args) => {
    let duration = moment.duration(client.uptime).format('D [d], H [h], m [m], s [s]');
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    message.channel.send(`**${nomeeapelido}**, estou funcionando sem nenhum reboot à: **${duration}**`);
}