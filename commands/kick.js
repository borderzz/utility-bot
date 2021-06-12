module.exports = {
    name: 'kick',
    description: 'kicks a member (only for mods obv)',
    execute(message, args, Discord) {
        const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Kicked by a mod through Utility Bot')
          .then(() => {
            //embed for kicking member
            const kickEmbed = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setTitle(`${user.tag} was kicked by ${message.author.username}.`)
            .setDescription('Rekt')
            .setTimestamp()
            message.reply(kickEmbed);
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