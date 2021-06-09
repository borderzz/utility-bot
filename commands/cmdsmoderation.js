module.exports = {
    name: 'cmdsmoderation',
    description: 'brings up a list of moderation commands',
    execute(message, args, Discord) {
        //make embed
        const modEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Moderation Commands')
        .setDescription('A list of the moderation commands')
        .addFields(
            { name: 'Ban', value: '.ban (username) | Used to permanantly ban a user.', inline: true },
            { name: 'Kick', value: '.kick (username) | Used to kick a member from the server', inline: true },
            { name: 'Slowmode', value: '.sm / .slowmode | Used to set the channels slowmode', inline: true }
        )
        .setFooter('.invite to invite this bot to your server!')
        message.channel.send(modEmbed);
    }
}