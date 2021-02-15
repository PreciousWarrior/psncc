const path = require("path")
const fsLibrary = require("fs")
const fp = path.join(__dirname, '../personal/count.txt')

module.exports = {
    name: 'psn',
    description: 'Fun event to count as high as you can!',
    execute(message, args, client) {
        if (!args[0]){
                if  (message.channel.id == 750343389903454289 || message.channel.id == 726892641396195348)
                {
                    incrementCount();
                    return message.react("✅");
                }
                else
                {
                    return message.channel.send("This command can only be used in the <#750343389903454289> channel.❌");
                }
        }
        if (args[0] == 'count'){
            return sendCount(message)
        }
        if (args[0] == 'reset'){
            if (!message.member.permissions.has("ADMINISTRATOR")){return message.channel.send("You need to be an administrator to run this command.❌")}
            resetCount();
            return message.reply("Count has been reset!");
        }
        return message.channel.send("That is not a valid command.❌")
          
    }
}

function sendCount(message)
{
    fsLibrary.readFile(fp, (error, data)=>{
        if (error)
        {
            console.log(error);
            message.reply("an error occoured!")
        }
        

        message.reply("Current count is: " + "**" + String(data) + "**")
    })


}

function incrementCount()
{
    fsLibrary.readFile(fp, (error, data)=>{
        if (error)
        {
            console.log(error);
            return;
        }
        var count = Number(data);
        fsLibrary.writeFile(fp, String(count + 1), (error)=>{
        if (error) 
        {
            console.log(error)
            return;
        }
    })
    })
    
}

function resetCount()
{
    fsLibrary.writeFile(fp, "0", (error)=>{
        if (error) console.log(error);
        return;
    })
}