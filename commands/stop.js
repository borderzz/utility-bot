module.exports = {
    name: 'stop',
    description: 'stops the bot from using commands',
    execute(message, args, Discord) {
        let borgers = '527893930805559330'
        if (message.author.id = borgers || canread == true) {
        let canread = false;
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