module.exports = {
    name: 'help',
    description: 'brings up a help page',
    execute(message, args, Discord) {
        //make embed
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Utility Bot')
        .setDescription('A discord bot with moderation, and other misc commands')
        .addFields(
            { name: '.cmdsmoderation | .cmdsmisc', value: 'To bring up a list of commands' }
        )
        .setFooter('.invite to invite this bot to your server!')
        //send message
        message.channel.send(helpEmbed);
    }
}