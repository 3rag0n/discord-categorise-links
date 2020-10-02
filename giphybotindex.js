const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json'); 
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(giphyToken)


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);	
	let text = args.join(" ");
//	var command = args.shift().toLowerCase();

		giphy.random('gifs', {'tag':text})
			.then((response) => {
			//	console.log(response);
				message.channel.send(text);
				message.channel.send(response.data.url);
			}).catch(()=> {
				message.channel.send("failed");
			})

})
client.login(token);

