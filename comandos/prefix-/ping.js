exports.run = (client, message, args) => {

    message.channel.send({
        "embed": {
          "author": {
            "name": client.user.username,
            "icon_url": client.user.displayAvatarURL
          },
          "description": `📡 Ping: **${client.ping}ms**\n🔌 Latência da API: **${(Date.now() - message.createdTimestamp)}ms**`,
          "color": 10223807
        }
      });

}
