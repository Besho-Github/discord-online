 const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("ready", () => {
let channel =     client.channels.get("514148853000437771")
setInterval(function() {
channel.send(`**Gamers gang** best group <3`);
}, 25)
})
 
 
client.login(process.env.BOT_TOKEN);
