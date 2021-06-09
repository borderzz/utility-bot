const { execute } = require("./ban");

module.exports = {
    name: 'slowmode',
    description: 'sets the channels slowmode',
    execute(message, args, Discord) {
        if(!message.member.hasPermission('MANAGE_CHANNEL')) return;
        if(!args[0]) return message.reply('Please specify a time for the channels slowmode (0 - 21600 seconds).');
        if(isNaN(args[0])) return message.reply('Please specify a valid time for the channels slowmode.');
        var time = args[0]
        if(args[0] < 0) return message.reply('The channels slowmode needs to be a positive number.');
        if(args[0] > 21600) return message.reply('The slowmode needs to be less than 6 hours (21600 seconds).')
        message.channel.setRateLimitPerUser(time)

        //make embed
        const slowmodeEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Set this channels slowmode.')
        .setDescription(`I have set the slowmode to \'${time}\' seconds.`)
        message.channel.send(slowmodeEmbed)
    }
}
