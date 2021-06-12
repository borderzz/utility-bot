module.exports = {
    name: 'cmdsmisc',
    description: 'brings up a list of misc commands',
    execute(message, args, Discord) {
        //make embed
        const miscEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Misc Commands')
        .setDescription('A list of the misc commands')
        .addFields(
            { name: 'Github', value: '.github | Brings up a link to the Github repo for this bot', inline: true },
            { name: 'Invite', value: '.invite | Brings up an invite link to invite this bot to your server', inline: true },
            { name: 'Avatar', value: '.avatar | Shows you your avatar so you can copy the link or just see it', inline: true },
        )
        .setFooter('.invite to invite this bot to your server!')
        .setTimestamp()
        message.channel.send(miscEmbed);
    }
}