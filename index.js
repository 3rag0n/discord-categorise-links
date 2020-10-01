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
	if (message.content == "theboiz"){
		giphy.random('gifs', {'q':"The Boys"})
			.then((response) => {
				//message.channel.send("WORK");
				console.log(response);
				message.channel.send("BOIZ",{
					files: [response.images.fixed_height.url]
			});

			
			//var totalResponses = response.data.length; 
			//var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses; 
			//var responseFinal = response.data[responseIndex]; 
			
			//message.channel.send("BOIZ", {
			//	files: [responseFinal.images.fixed_height.url]
		}).catch(() => {
			message.channel.send("fail");
		})
	}else message.channel.send("error");

})
client.login(token);

