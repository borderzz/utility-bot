module.exports = {
    name: 'github',
    description: 'sends a link to the github repo',
    execute(message, args, Discord) {
        //make embed
        const githubEmbed = new Discord.MessageEmbed()
        .setColor('00FFE4')
        .setTitle('Github Repository')
        .setURL('https://www.github.com/borderzz/utility-bot')
        .setDescription('If you want to look over the bots code or something else, heres the Github page')
        .setTimestamp()
        //send embed
        message.channel.send(githubEmbed);
    }
}