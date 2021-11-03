module.exports = {
    name: 'stop',
    description: 'stops the bot from using commands',
    execute(message, args, Discord) {
        if (message.author.id = borgers) {
        const stopembed = new Discord.MessageEmbed()
        .setColor('FF0000')
        .setTitle('Stopped')
        .setDescription('okay master')
        .setImage(message.author.displayAvatarURL())
        .setTimestamp()
         
        message.channel.send(stopembed)
        const canread = false
        
        }
    }
}