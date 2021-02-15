module.exports = {
    name: 'ask',
    description: 'Pings everyone with that role asking for help.',
    execute(message, args, client) {
        if (!args[0]){return message.channel.send("Please mention the language you want help in!")}
        const nameRoles = {
            "python":"684808822828957756",
            "html":"684808849961648240",
            "css":"684808849961648240",
            "js":"734474403043213455",
            "javascript":"734474403043213455",
            "nodejs":"734474403043213455",
            "node.js":"734474403043213455",
            "java":"684808906798923828",
            "c#":"684808933164318724",
            "r":"696016542449795152",
            "c":"bruh not even there yet",
            "c++":"bruh not even there yet"
        }
        const languageRole = nameRoles[args[0].trim().toLowerCase()]
        if (!languageRole){return message.channel.send("Please enter the name of a valid programming language")}
        var problemDescription = ""
        if(args[1]){problemDescription = "regarding " + args.slice(1, args.length).join(" ")}
        if (!cooldown[message.author.id]){
            cooldown[message.author.id] = new Date().getMilliseconds()
            return message.channel.send(`<@${message.author.id}> needs some help in <@&${languageRole}> ${problemDescription}`)
        }
        if ((new Date().getMilliseconds() - cooldown[message.author.id])<cooldownTime*60*1000){
            return message.reply(`You are on cooldown! Please wait ${cooldownTime} minutes to speak again!`)
        }
        cooldown[message.author.id] = new Date().getMilliseconds()
        return message.channel.send(`<@${message.author.id}> needs some help in <@&${languageRole}> ${problemDescription}`)

    }
}
//cooldown time in minutes
const cooldownTime = 15
var cooldown = {}