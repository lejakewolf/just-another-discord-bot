const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

const url = 'http://localhost:6000/boo' 

const command = {
	name: "boo",
	async execute(client, message, ...args) {
	args = args.join(' ');
	args = args.split(', ');
	if(args.lenght < 2) {
		message.channel.send(
			`You didn\'t give me enough arguments for this command! Usage: ${client.prefix}boo first text, second text`
			);
		return;
	}
	console.log("bruh")
	let first = args[0];
	let second = args[1];

	const response = await fetch(url, {
	      method: 'POST',
	      headers: { "Content-Type": "application/json" },
	      body: JSON.stringify({first: first, second: second})
	    });

	let json = await response.json();
	let data = json['data'];
	data = data.replace('data:image/png;base64,', '');
	let decodedData = Buffer.from(data, 'base64');

	let attachment = new MessageAttachment(decodedData);

	message.channel.send(attachment)

	}
}


module.exports = command;