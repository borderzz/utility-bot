module.exports = {
    name: 'ban',
    description: 'bans a member (for mod only obv)',
    execute(message, args, Discord) {
        const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Banned by a mod through Utility Bot'
          })
          .then(() => {
           //embed for banning member
           const banEmbed = new Discord.MessageEmbed()
           .setColor('FF0000')
           .setTitle(`${user.tag} was banned by ${message.author.username}.`)
           .setDescription('Rekt')
           .setTimestamp()
           message.reply(banEmbed);
          })
          .catch(err => {
            message.reply('Sorry, I was unable to kick the member.');
            console.error(err);
          });
      } else {
        message.reply("Kick someone in the server, that won't work.");
      }
    } else {
      message.reply("You have to mention a user, silly.");
    }
    }
}