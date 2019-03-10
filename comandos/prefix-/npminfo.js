const snekfetch = require("snekfetch");
const humanizeduration = require("humanize-duration")

exports.run = async (bot, message, args) => {
    if (args.length > 0) {
        snekfetch.get("https://skimdb.npmjs.com/registry/" + args[0].toLowerCase()).then((body) => {
            message.channel.send({
                embed: {
                        title: "Pacote 'NPM' ",
                        color: 3066993,
                        fields: [
                            {
                                name: "Nome",
                                value: body.body.name,
                                inline: true
                            },
                            {
                                name: "Descrição",
                                value: body.body.description,
                                inline: true
                            },
                            {
                                name: "Autor",
                                value: body.body.author.name,
                                inline: true
                            },
                            {
                                name: "Mais recentes",
                                value: body.body["dist-tags"].latest,
                                inline: true
                            },
                            {
                                name: "GitHub",
                                value: ((body.body.repository) ? body.body.repository.url.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "No Repository"),
                                inline: true
                            },
                            {
                                name: "Mantenedores",
                                value: body.body.maintainers.map((m) => m.name).join(", "),
                                inline: true
                            },
                            {
                                name: "Ultima atualização",
                                value: humanizeduration(Date.now() - new Date(body.body.time[body.body["dist-tags"].latest]).getTime(), {
                                    round: true,
                                    largest: 2
                                }),
                                inline: true
                            }
                        ]
                    }
            })
        }).catch((error) => {
            if (error.status === 404) return message.channel.send({
                embed: {
                    title: "ERROR!",
                    color: 0xE50000,
                    description: "ERROR ERROR, EVACUE AS INSTALAÇÕES"
                }
            })
            console.error("Failed to grab NPM Package.", error.message);
            message.reply("Não achei essa **" + args[0] + "** não")
        })
    } else {
        message.channel.send({
                embed: {
                    title: "Error!",
                    color: 0xE50000,
                    description: "Missing `<name>` argument."
                }
            });
    }
}