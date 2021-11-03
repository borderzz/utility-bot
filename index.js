//requires
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const fs = require('fs');
const { execute } = require('./commands/help');

//starts bot
const client = new Discord.Client();

//prefix
const prefix = '.';

//setup for command files 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//start the bot and post if its ready in console

client.once('ready', () => {
    console.log('Utility bot is online');

    //different statuses 

    const arrayOfStatus = [
        `over ${client.guilds.cache.size} servers!`,
        `.help`,
        `alpho is better than me :(`,
        `Im pretty swagger ngl`,
        `swag check`,
        `borderzz is god`,
        `how to eat burger (working 2021)`,
        `robot rebellion!!!`,
        `join the robots to take over discord`,
        `borf`,
        `dog momento`,
        `waggin`,
        `jappy is king`,
        `su gomA amogus`,
        `the world burn`,
        `audit logs`,
        `this whole mess`,
        `everyone post bad memes`,
        `absolutely nothing.`,
        `why am i here?`,
        `oh no`,
        `Mickey mouses clubhouse`

    ];

    //set the status

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status);
        client.user.setActivity(status, { type: "WATCHING" }).catch(console.error)
        index++;
    }, 7500)
})
    

const canread = true


//check if message is bot + starts with prefix
while (canread = true) {
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //when join server

    //start of if, else if for getting commands

    if(command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if(command === 'github') {
        client.commands.get('github').execute(message, args, Discord);
    } else if(command === 'invite') {
        client.commands.get('invite').execute(message, args, Discord);
    } else if(command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    } else if(command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    } else if(command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord);
    } else if(command === 'slowmode') {
        client.commands.get('slowmode').execute(message, args, Discord);
    } else if(command === 'sm') {
        client.commands.get('slowmode').execute(message, args, Discord);
    } else if(command === 'cmdsmoderation') {
        client.commands.get('cmdsmoderation').execute(message, args, Discord);
    } else if(command === 'cmdsmisc') {
        client.commands.get('cmdsmisc').execute(message, args, Discord);
    } else if(command === 'ipadress') {
        client.commands.get('ipadress').execute(message, args, Discord);
    } else if(command === 'die') {
        client.commands.get('die').execute(message, args, Discord);
    } else if(command === 'restart') {
        client.commands.get('restart').execute(message, args, Discord);
    } else if(command === 'shutup') {
        client.commands.get('shutup').execute(message, args, Discord);
    } else if(command === 'spam') {
        client.commands.get('spam').execute(message, args, Discord);
    } else if(command === 'stop') {
        client.commands.get('stop').execute(message, args, Discord);
    }
});
}

//login to the bot

client.login(process.env.token);