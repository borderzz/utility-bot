const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'msgall',
    description: 'messages all the people in all of the servers that this bot is in',
    execute(message, args, Discord) {
        const borgers = '527893930805559330';
       
        client.on('message', message => {
            const sendmsg = message.content()
            const msgallEmbed = new Discord.MessageEmbed()
            .setColor('00FFE4')
            .setTitle('Message From Borderzz')
            .setDescription(sendmsg)
            
            if (message.author.id == borgers) {
            message.channel.send(msgallEmbed)
            }
        })
    
        }
    }