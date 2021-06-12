module.exports = {
    name: 'nick',
    description: 'gives the bot a nickname',
    execute(message, args, Discord) {
        let user = message.mentions.users.first()
    if(!user) return message.reply("Please mention a user to change their username!")

    let nickname = args.slice(1).join(" ")
    if(!nickname) return message.reply("Specify a nickname to change to!")

    let member = message.guild.members.cache.get(user.id);
    await member.setNickname(nickname);

    const nickEmbed = new discord.MessageEmbed()
    .setTitle("Nickname Changed")
    .setDescription(`successfully changed ${user.tag}'s nickname to ${nickname}`)
    .setColor('00FFE4')
    .setTimestamp()
    message.channel.send(nickEmbed);
    }
}