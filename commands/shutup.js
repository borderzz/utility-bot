module.exports = {
    name: 'shutup',
    description: 'tells someone to shut up',
    execute(message, args, Discord) {
        const user = message.mentions.users.first();
        message.channel.send(`SHUTUP ${user} YOU LITTLE BABY`)
    }

}