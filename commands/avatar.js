module.exports = {
    name: 'avatar',
    description: 'grabs a users avatar',
    execute(message, args, Discord) {
        //make embed
        const avatarEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle(`${message.author.username}'s Avatar:`)
        .setImage(message.author.displayAvatarURL())
        .setTimestamp()
        //send embed
        message.channel.send(avatarEmbed);

    }
}