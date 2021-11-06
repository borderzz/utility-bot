module.exports = {
    name: 'stop',
    description: 'stops the bot from using commands',
    execute(message, args, Discord) {
        var borgers = '527893930805559330'
        if (message.author.id = borgers) {
        var canread = false;
        const stopembed = new Discord.MessageEmbed()
        .setColor('FF0000')
        .setTitle('Stopped')
        .setDescription('okay master')
        .setImage(message.author.displayAvatarURL())
        .setTimestamp()
        message.channel.send(stopembed)
        message.channel.send(canread)
    
        
        }
    }
}