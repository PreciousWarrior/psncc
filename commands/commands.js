module.exports = {
    name: 'commands',
    description: 'Returns commands of the bot',
    execute(message, args, client) {
        message.react("746415114055450696")
        var helpStr = "The panther understands the following language: \n\n"
        client.commands.forEach(command=>{
            helpStr += `**${command.name}**: ${command.description}\n`
        })
        return message.reply(helpStr)

    }
}