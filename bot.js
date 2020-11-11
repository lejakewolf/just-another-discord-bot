

const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Discord.Client();

const debug = process.env.NODE_ENV == 'debug';
const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

client.commands = {}
client.aliases = {}

for(let file of fs.readdirSync('commands')) {
	let cmd = require("./commands/" + file);
	client.commands[cmd.name] = cmd;
	if(cmd.aliases){
		for(alias of cmd.aliases) {
			client.aliases[alias] = cmd;
		}
	}
	console.log(`Loaded ${cmd.name}!`);
}

client.on('message', message => {
	if(!message.content.startsWith(prefix)) return;

	if(debug){
		console.log(`Got command!`);
		let guild = message.guild ? message.guild.name : 'null';  
		console.log(`Author: ${message.author.username} Channel: ${message.channel.name} Guild: ${guild}`);
		console.log(`Content: ${message.content}`);
	}

	let args = message.content.split(' ');
	let cmdName = args.shift();
	cmdName = cmdName.replace(prefix, '');

	cmd = client.commands[cmdName];
	if(!cmd){
		cmd = client.aliases[cmdName];
		if(!cmd) return;
	}

	cmd.execute(client, message, ...args).then((res, err) => {
		if(err) {
			console.log(err);
		}
	});
	
});

client.on('ready', () => {
	console.log(`lol ready on ${client.user.username}`);
});

client.login(token);