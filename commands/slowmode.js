module.exports = {
    name: 'slowmode',
    description: 'sets a slowmode in the specified channel', 
    execute(message, args, Discord) {
        if(!args[1]) return message.channel.send("You have to give number for the slowmode (0-21600 seconds)")
        let duration = args[1]
        message.channel.setRateLimitPerUser(duration)
          .catch(() => {
        message.channel.send("I can't set that slowmode.")
          })
        //make embed
        const slowmodeEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Set Slowmode')
        .setDescription(`Slowmode set to " + duration + " seconds.`)
    }
}