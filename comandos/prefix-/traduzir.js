exports.run = (client, message, args)  => {
    const translate = require('google-translate-api');
    let reason = args.slice(1).join(' ');
      if (reason.length < 1) return message.reply('**Diga um idioma e qual texto devo traduzir**');
    translate(`${message.content.replace(`!traduzir ${args[0]} `,"")}`, {to: `${args[0]}`}).then(res => {
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤ",
              "color": 55512,
              "thumbnail": {
                "url": ""
              },
              "author": {
                "name": message.author.username,
                "icon_url": message.author.displayAvatarURL
              },
              "fields": [
                {
                  "name": "Normal",
                  "value": "```\n" + message.content.replace(`!traduzir ${args[0]} `,"") + "```",
                  "inline": true
                },
                {
                  "name": "Traduzido",
                  "value": "```\n" + res.text + "```",
                  "inline": true
                }
              ]
            }
          });
    }).catch(err => {
        console.error(err);
        message.reply("**Esse idioma não foi encontrado.**")
    });
    }
