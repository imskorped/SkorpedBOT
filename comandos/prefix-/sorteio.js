exports.run = async (client, message, args) => {
  var Discord = require('discord.js');
  const ms = require("ms");

  if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("você não tem a permissão 'GERENCIAR MENSAGENS' para executar esse comando");
  
message.author.send("O comando `!sorteio` esta em desenvolvimento, caso encontre algum bug, contate <@490323052928696340>.")

 function shuffle(arr) {
        for (let i = arr.length; i; i--) {
            const j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
        return arr;
    }

   function draw(list) {
        const shuffled = shuffle(list);
        return shuffled[Math.floor(Math.random() * shuffled.length)];
    }
  let question = args.slice(1).join(' ')
  let channel = message.channel;
  let time = args[0]
  if(!time) return message.reply('Uso correto: !sorteio (TEMPO) (PREMIO)');
  if(!question) return message.reply('Diga o que a pessoa irá ganhar');
 let embed = new Discord.RichEmbed()
     .setTitle(question)
     .setDescription('Reaja com 🎉 para participar!!\nAcaba em '+time)
     .setColor('RANDOM')
     .setTimestamp();
  channel.send('@everyone')
     channel.send(embed).then(message => {
         message.react('🎉').then( r => { 
           setTimeout(function(){
            if(message.reactions.get('🎉').count < 1) {
              let embed2 = new Discord.RichEmbed()
     .setTitle(question)
     .setDescription('O sorteio acabou, ninguém votou..')
     .setColor('RANDOM')
     .setTimestamp();
              message.edit(embed2);
            } else {
              var ganhador = [];
               const users = message.reactions.get("🎉").users;
            const list = users.array().filter(u => u.id !== message.author.id);
             // let winner = list[Math.floor(Math.random() * list.length)];
                 for (let i = 0; i < 1; i++) {
                  const x = draw(list);

                if (!ganhador.includes(x)) ganhador.push(x);
            }

               let embed3 = new Discord.RichEmbed()
              .setTitle(question)
              .setDescription(`Ganhador: ${ganhador.filter(u => u !== undefined && u !== null).map(u => u.toString()).join(", ")}`)
              .setFooter('Encerrado em')
              .setColor('RANDOM')
              //.setFooter(`${copunt} Ganhador(es)`)
              .setTimestamp();
              message.edit(embed3)
            }
        }, ms(time));
         })
     })
}