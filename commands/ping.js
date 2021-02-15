module.exports = {
    name: 'ping',
    description: 'Returns pong',
    execute(message, args, client) {
        const emoji = "<:dictatorpanther:746415114055450696>"
        message.reply("Pong! " + emoji)
    }
}