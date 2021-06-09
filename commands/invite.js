module.exports = {
    name: 'invite',
    description: 'brings up an invite link to invite the bot to your own server',
    execute(message, args, Discord) {
        //make embed
        const inviteEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Invite this bot to your server')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=851899997430480947&permissions=8&scope=bot')
        .setDescription('If you want to use this bot for yourself, just click the link above!')

        //send message 
        message.channel.send(inviteEmbed);
    }
}