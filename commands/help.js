module.exports = {
    name: 'help',
    description: 'brings up a help page',
    execute(message, args, Discord) {
        //make embed
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Placeholder for now just testing if it works')

        //send message
        message.channel.send(helpEmbed);
    }
}