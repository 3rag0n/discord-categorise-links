const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json'); 
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(giphyToken)

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	if (message.author.bot) return;
	if (message.content === prefix + 'theboiz'){
		giphy.random('gifs', {'tag':"The Boys"})
			.then((response) => {
				console.log(response);
				message.channel.send("BOIZ");
				message.channel.send(response.data.url);
			}).catch(() => {
			message.channel.send("fail");
		})
	}

})
client.login(token);

