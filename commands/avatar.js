module.exports = {
    name: 'avatar',
    description: 'grabs a users avatar',
    execute(message, args, Discord) {
        //make embed
        const avatarEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle(`${message.author}'s Avatar:`)
        .setImage(message.authour.displayAvatarURL())

        //send embed
        message.channel.send(avatarEmbed);

    }
}