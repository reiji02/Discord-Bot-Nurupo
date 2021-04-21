const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.tag}でログインしています。`)
})

client.on(`message`, async msg => {
    if (msg.content === 'ぬるぽ') {
        msg.channel.send('ｶﾞｯ')
    }
})

client.login('ODM0NTQ2OTIxMjI5OTEwMTA2.YICeYw.D5w6gPKM-3I1jnPH_nC6uD67lpo')