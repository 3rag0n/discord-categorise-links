const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzU5ODkyOTM0MzgzODk0NTM3.X3EHcQ.b96--zoDgrdnbWwAy_9mRn852E8');

client.on('message', message => {
	if (message.content === '!ping') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('Pong.');
}
});


