module.exports = {
    name: 'nick',
    description: 'gives the bot a nickname',
    execute(message, args, Discord) {
        let nickedUser = message.mentions.users.first()

        let newNick = args.join(" ").slice(22);

        if(!nickedUser) return message.channel.send("You have to mention a user to nick!");

        if(!newNick) return message.channel.send("That is not a valid name!");
        
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You dont have the permission to change nicknames!");

        nickedUser.setNickname(newNick);
        //make success embed
        const nickEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('User was nicked')
        .setDescription(`Changed ${nickedUser}'s nickname to ${newNick}!`)
        .setTimestamp()
    }
}