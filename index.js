//requires
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const fs = require('fs');

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
        `.help`
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
    




//check if message is bot + starts with prefix

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //start of if, else if for getting commands

    if(command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    }
});

//login to the bot

client.login(process.env.token);