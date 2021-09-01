module.exports = {
    name: 'ipadress',
    description: 'ooh scary',
    execute(message,args, Discord) {

        const randomfirstnumber = Math.floor(Math.random() * (199 - 101) + 101);
        const randomsecondnumber = Math.floor(Math.random() * (199 - 101) + 101);
        const randomthirdnumber = Math.floor(Math.random() * (199 - 101) + 101);
        message.channel.send(`${randomfirstnumber}.${randomsecondnumber}.1.${randomthirdnumber}`)
    }
}