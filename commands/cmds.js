module.exports = {
    name: 'cmds',
    description: 'brings up a list of commands',
    execute(message, args, Discord) {
        //make embed
        const cmdsEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Commands')
        .setDescription('Lists of different commands')
        .addFields(
            { name: 'Lists of commands', value: 'Use .help (category name) '},
            { name: 'Moderation Commands', value: '.cmds moderation', inline: true },
            { name: 'Misc Commands', value: '.cmds misc', inline: true }
        )
    .setFooter('.invite to invite this bot to your server!')
    message.channel.send(cmdsEmbed);
    }
}