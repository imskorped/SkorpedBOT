exports.run = (client, message, args) => {   
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
  return;

  let reason = args.slice(0).join(' ');
  if(!reason)
    return message.reply("Por favor, coloque oque irei dropar!");
    message.delete().catch(O_o=>{});
  
    message.channel.send({"embed": {
        "description": "",
        "url": "",
        "color": 4437732,
        "timestamp":  new Date(),
        "footer": {
          "icon_url": "",
          "text": "$korpedBOT • @ImSkorped"
        },
        "thumbnail": {
          "url": ""
        },
        "image": {
          "url": ""
        },
        "fields": [
    
          {
            "name": "Drop!",
            "value": `${reason} \n`,
            "inline": true
          }
        ]
      }
    });

}
